import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function GET(req: Request) {
    try {
        const { userId } = auth();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const testimonials = await prismadb.formResponse.findMany({
            where: {
                form: {
                    userId: userId,
                },
            },
            include: {
                form: true,
            },
        });

        return NextResponse.json({ testimonials, error: null });
    } catch (error) {
        console.error("[ERROR]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}