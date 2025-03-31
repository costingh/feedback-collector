import { NextResponse } from "next/server";
import {client} from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { data } = body;

        // dont allow an email to be used more than once
        if(data.email) {
            const existingReview = await client.formResponse.findFirst({
                where: { email: data.email, formId: data.formId },
            });
    
            if (existingReview) {
                return NextResponse.json({ result: null, error: "A review was already submitted with this email." });
            }
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
