import { auth } from "@clerk/nextjs/server";
import prismadb from "@/lib/prismadb";
import { PLANS } from "@/app/(pricing)/feedbackz-pricing/constants";

const DAY_IN_MS = 86_400_000;

export const checkSubscription = async () => {
	const { userId } = auth();

	if (!userId) {
		return { isValid: false, planType: null };
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
		return { isValid: false, planType: null };
	}

	const isValid =
		userSubscription.stripePriceId &&
		userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS >
		Date.now();

	// Determine plan type based on stripePriceId
	const allPlans = [...PLANS.yearly, ...PLANS.monthly];
	const plan = allPlans.find(
		(p) => p.stripePriceId === userSubscription.stripePriceId
	);

	const planType = plan ? plan.name : "Unknown";

	return {
		isValid: !!isValid,
		planType,
	};
};
