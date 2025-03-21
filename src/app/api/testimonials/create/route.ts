import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import {client} from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { data } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        console.log(data);

        // const freeTrial = await checkApiLimit();
        // const { isValid: isPro, planType } = await checkSubscription();

        // if (!freeTrial && !isPro) {
        //     return new NextResponse(
        //         "Free trial has expired. Please upgrade to pro.",
        //         { status: 403 }
        //     );
        // }

        const existingReview = await client.formResponse.findFirst({
            where: { email: data.email, formId: data.formId },
        });

        if (existingReview) {
            return NextResponse.json({ result: null, error: "A review was already submitted with this email." });
        }

        const result = await client.formResponse.create({
            data: {
                stars: data.stars || 0,
                message: data.message || '',
                email: data.email || '',
                name: data.name || '',
                company: data.company || '',
                jobTitle: data.jobTitle || '',
                website: data.website || '',
                formId: data.formId || '',
                avatar: data.avatar || '',
                logo: data.logo || '',
                approved: false
            },
        });

        return NextResponse.json({ result, error: null });
    } catch (error) {
        console.log("[REVIEW_ERROR]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
