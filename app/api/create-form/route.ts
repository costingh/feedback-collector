import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

function generateUniqueId(length = 8) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let uniqueId = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        uniqueId += characters[randomIndex];
    }
    return uniqueId;
}

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { formData } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const form = await prismadb.form.create({
            data: {
                name: formData.name,
                userId: formData.userId,
                backgroundColor: formData.backgroundColor,
                primaryColor: formData.primaryColor,
                withAnimatedBg: formData.withAnimatedBg,
                published: formData.published,
                isPaused: formData.isPaused,
                pausedUntil: formData.pausedUntil,
                title: formData.title,
                description: formData.description,
                textareaPlaceholder: formData.textareaPlaceholder,
                buttonLabel: formData.buttonLabel,
                url: '/p/' + generateUniqueId(),
                customUrl: formData.customUrl,
                thankYouPageTitle: formData.thankYouPageTitle,
                thankYouPageMessage: formData.thankYouPageMessage,
                brandLogo: formData.brandLogo,
                brandName: formData.brandName,
                thankYouCustomURL: formData.thankYouCustomURL,
                formFields: {
                    create: formData.formFields,
                },
                questions: {
                    create: formData.questions
                }
            },
            include: {
                formFields: true,
                questions: true,
            },
        });

        return NextResponse.json({ form, error: null });
    } catch (error) {
        console.error("[ERROR]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
