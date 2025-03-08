import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import {client} from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { formData } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        console.log(formData)

        const updatedForm = await client.form.update({
            where: { id: formData.id },
            data: {
                name: formData.name,
                backgroundColor: formData.backgroundColor,
                primaryColor: formData.primaryColor,
                withAnimatedBg: formData.withAnimatedBg,
                published: formData.published,
                isPaused: formData.isPaused,
                title: formData.title,
                description: formData.description,
                buttonLabel: formData.buttonLabel,
                textareaPlaceholder: formData.textareaPlaceholder,
                thankYouPageTitle: formData.thankYouPageTitle,
                thankYouPageMessage: formData.thankYouPageMessage,
                brandLogo: formData.brandLogo,
                brandName: formData.brandName,
                thankYouCustomURL: formData.thankYouCustomURL,
                formFields: {
                    deleteMany: {},
                    create: formData.formFields,
                },
                questions: {
                    deleteMany: {},
                    create: formData.questions,
                },
            },
            include: {
                formFields: true,
                questions: true
            },
        });

        return NextResponse.json({ form: updatedForm, error: null });
    } catch (error) {
        console.error("[ERROR]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
