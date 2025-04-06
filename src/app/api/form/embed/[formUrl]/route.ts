import { NextRequest, NextResponse } from "next/server";
import { client } from "@/lib/prisma";

export async function GET(
    req: NextRequest,
    { params: { formUrl } }: { params: { formUrl: string } }) {
    try {
        if (!formUrl) {
            return NextResponse.json({ status: 404 });
        }

        const formattedUrl = formUrl.includes('/p/') ? formUrl : '/p/' + formUrl;

        const form = await client.form.findFirst({
            where: { url: formattedUrl },
            include: { formFields: true, questions: true },
        });

        if (form) {
            const user = await client.user.findFirst({ where: { clerkid: form.userId } });
            const payment = await client.subscription.findFirst({ where: { userId: user?.id } });

            return NextResponse.json({
                status: 200,
                data: {
                    form: {
                        ...form,
                        hasCustomBranding: payment?.plan === 'BUSINESS' || payment?.plan === 'PRO',
                    },
                },
            });
        } else {
            return NextResponse.json({ form: null, error: "Form not found" });
        }
    } catch (error) {
        console.log("[FORM_ERROR]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
