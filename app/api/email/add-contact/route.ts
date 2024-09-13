import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { email, firstName, lastName, audienceId } = body.data;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        console.log({
            email,
            firstName,
            lastName,
            unsubscribed: false,
            audienceId
        })

        resend.contacts.create({
            email,
            firstName,
            lastName,
            unsubscribed: false,
            audienceId
        });

        return NextResponse.json({ result: 'Contact created', error: null });
    } catch (error) {
        console.error("[TAG_CREATION_ERROR]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
