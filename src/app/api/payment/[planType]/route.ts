import { PLANS } from '@/constants/plans'
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
				price: PLANS.find(p => p.planName.toLocaleLowerCase() == planType.toLocaleLowerCase())?.priceId || '',
				quantity: 1,
			},
		],
		success_url: `${process.env.NEXT_PUBLIC_HOST_URL}/payment?session_id={CHECKOUT_SESSION_ID}&planType=${planType}`,
		cancel_url: `${process.env.NEXT_PUBLIC_HOST_URL}/payment?cancel=true`,
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
