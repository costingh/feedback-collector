import { auth, currentUser } from "@clerk/nextjs/server";
import prismadb from "@/lib/prismadb";
import { PLANS } from "@/app/(pricing)/feedbackz-pricing/constants";

const DAY_IN_MS = 86_400_000;
const TRIAL_PERIOD_DAYS = 14;

export const getPlanName = async () => {
	const { userId } = auth();

	if (!userId) {
		return { planType: null };
	}

	const userSubscription = await prismadb.userSubscription.findUnique({
		where: {
			userId: userId,
		},
		select: {
			stripeSubscriptionId: true,
			stripeCurrentPeriodEnd: true,
			stripeCustomerId: true,
			stripePriceId: true,
		},
	});

	if (!userSubscription) {

		// check if has trial
		const user = await currentUser();

		if (!user) {
			return { planType: null };
		}

		const trialEndDate = new Date(user.createdAt).getTime() + (TRIAL_PERIOD_DAYS * DAY_IN_MS);
		const isTrialValid = trialEndDate > Date.now();

		if (!isTrialValid) {
			return { planType: null };
		} else {
			return { planType: 'trial' };
		}
	}

	const isValid =
		userSubscription.stripePriceId &&
		userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS >
		Date.now();

	if (!isValid) {
		return {
			planType: null
		}
	}

	// Determine plan type based on stripePriceId
	const allPlans = [...PLANS.yearly, ...PLANS.monthly];
	const plan = allPlans.find(
		(p) => p.stripePriceId === userSubscription.stripePriceId
	);

	const planType = plan ? plan.name : null;

	return {
		planType,
		plan
	};
};

export const checkLimits = async (featureName: 'forms' | 'workspaces', count: number)=> {
	try {
		const {planType, plan} = await getPlanName();
		console.log(planType)
		console.log(plan)
		if(!planType) return false;
		if(planType == 'Unknown' || planType == 'Expired') return false;
		if(!plan) return false;

		return plan[featureName] > count;
	} catch(error) {
		console.error(error)
		return false;
	}
}
