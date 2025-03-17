import { PLANS } from '@/app/(website)/feedbackz-pricing/constants'
import { currentUser } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_CLIENT_SECRET as string)

export async function GET(
	req: NextRequest,
	{ params: { planType } }: { params: { planType: string } }
  ) {
	const user = await currentUser()
	if (!user) return NextResponse.json({ status: 404, message: 'User is not logged in!' })
	if (!planType) return NextResponse.json({ status: 404, message: 'Unknown plan specified!' })

	const session = await stripe.checkout.sessions.create({
		mode: 'subscription',
		line_items: [
			{
				price: getPriceIdFromPlanType(planType),
				quantity: 1,
			},
		],
		success_url: `${process.env.NEXT_PUBLIC_HOST_URL}/payment?session_id={CHECKOUT_SESSION_ID}&planType=${planType.includes('BUSINESS') ? 'Business' : 'Pro'}`,
		cancel_url: `${process.env.NEXT_PUBLIC_HOST_URL}/dashboard`,
	})

	if (session) {
		return NextResponse.json({
			status: 200,
			session_url: session.url,
			customer_id: session.customer,
		})
	}

	return NextResponse.json({ status: 400 })
}

const getPriceIdFromPlanType = (planType: string) => {
	if(planType == 'PRO_MONTHLY') return PLANS.monthly.find(p => p.planType == planType)?.stripePriceId || '';
	else if(planType == 'PRO_YEARLY') return PLANS.yearly.find(p => p.planType == planType)?.stripePriceId || '';
	else if(planType == 'BUSINESS_MONTHLY') return PLANS.monthly.find(p => p.planType == planType)?.stripePriceId || '';
	else if(planType == 'BUSINESS_YEARLY') return PLANS.yearly.find(p => p.planType == planType)?.stripePriceId || '';
	return ''; 
}
