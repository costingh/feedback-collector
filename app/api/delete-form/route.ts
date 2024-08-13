import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function DELETE(req: Request) {
    try {
        const { userId } = auth();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const url = new URL(req.url);
        const formId = url.searchParams.get("id");

        if (!formId) {
            return new NextResponse("Form ID is required", { status: 400 });
        }

        const form = await prismadb.form.findUnique({
            where: {
                id: formId,
                userId: userId,
            },
        });

        if (!form) {
            return new NextResponse("Form not found", { status: 404 });
        }

        await prismadb.formField.deleteMany({
            where: {
                formId: formId,
            },
        });

        await prismadb.formAnalytics.deleteMany({
            where: {
                formId: formId,
            },
        });

        await prismadb.form.delete({
            where: {
                id: formId,
            },
        });

        return new NextResponse("Form deleted successfully", { status: 200 });
    } catch (error) {
        console.error("[ERROR]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
