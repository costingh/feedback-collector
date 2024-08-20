import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function GET(req: Request) {
    try {
        const { userId } = auth();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const forms = await prismadb.form.findMany({
            where: {
                userId: userId,
            },
            include: {
                formFields: true,
                FormAnalytics: true,
                questions: true
            },
        });

        return NextResponse.json({ forms, error: null });
    } catch (error) {
        console.error("[ERROR]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
