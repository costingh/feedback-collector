import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function GET(req: Request) {
    try {
        const { userId } = auth();
        const { searchParams } = new URL(req.url);
        const formId = searchParams.get("id");

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!formId) {
            return new NextResponse("Form ID is required", { status: 400 });
        }

        const form = await prismadb.form.findUnique({
            where: { id: formId },
            include: {
                formFields: true,
            },
        });

        if (!form) {
            return new NextResponse("Form not found", { status: 404 });
        }

        return NextResponse.json({ form, error: null });
    } catch (error) {
        console.error("[ERROR]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
