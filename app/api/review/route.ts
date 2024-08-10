import Replicate from "replicate";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import { checkSubscription } from "@/lib/subscription";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";


export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { data } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        console.log(data)

        const freeTrial = await checkApiLimit();
        const isPro = await checkSubscription();

        if (!freeTrial && !isPro) {
            return new NextResponse(
                "Free trial has expired. Please upgrade to pro.",
                { status: 403 }
            );
        }

        // if (!isPro) {
        //     await incrementApiLimit();
        // }

        return NextResponse.json(data);
    } catch (error) {
        console.log("[VIDEO_ERROR]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
