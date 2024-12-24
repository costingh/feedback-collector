import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { stripe } from "@/lib/stripe";

export async function POST() {
    try {
        const { userId } = auth();
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const userSubscription = await prismadb.userSubscription.findUnique({
            where: { userId },
        });

        if (!userSubscription || !userSubscription.stripeSubscriptionId) {
            return new NextResponse("Subscription not found", { status: 404 });
        }

        // Cancel the subscription in Stripe
        await stripe.subscriptions.update(userSubscription.stripeSubscriptionId, {
            cancel_at_period_end: true,
        });

        return new NextResponse("Subscription canceled", { status: 200 });
    } catch (error) {
        console.error("[CANCEL_SUBSCRIPTION_ERROR]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
