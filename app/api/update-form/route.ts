import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { formData } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        console.log(formData)

        const updatedForm = await prismadb.form.update({
            where: { id: formData.id },
            data: {
                name: formData.name,
                backgroundColor: formData.backgroundColor,
                primaryColor: formData.primaryColor,
                withAnimatedBg: formData.withAnimatedBg,
                published: formData.published,
                isPaused: formData.isPaused,
                formFields: {
                    deleteMany: {},
                    create: formData.formFields,
                },
            },
            include: {
                formFields: true,
            },
        });

        return NextResponse.json({ form: updatedForm, error: null });
    } catch (error) {
        console.error("[ERROR]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
