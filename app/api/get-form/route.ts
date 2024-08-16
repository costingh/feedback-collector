import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function GET(req: Request) {
    try {
        const { userId } = auth();
        const { searchParams } = new URL(req.url);
        const formId = searchParams.get("id");
        const formUrl = searchParams.get("url");

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!formId && !formUrl) {
            return new NextResponse("Form or URL is required", { status: 400 });
        }

        if(formId) {
            const form = await prismadb.form.findUnique({
                where: { id: formId },
                include: {
                    formFields: true,
                    FormAnalytics: true,
                    questions: true,
                },
            });
    
            if (!form) {
                return new NextResponse("Form not found", { status: 404 });
            }
    
            return NextResponse.json({ form, error: null });
        } else {
            const form = await prismadb.form.findFirst({
                where: { url: formUrl || '' },
                include: {
                    formFields: true,
                    FormAnalytics: true,
                    questions: true,
                },
            });
    
            if (!form) {
                return new NextResponse("Form not found", { status: 404 });
            }
    
            return NextResponse.json({ form, error: null });
        }
    } catch (error) {
        console.error("[ERROR]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
