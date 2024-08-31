import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { data } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const result = await prismadb.widget.create({
            data: {
                name: data.name,
                target: data.target,
                url: data.url,
                userId,
                type: data.type
            }
        });

        return NextResponse.json({ result, error: null });
    } catch (error) {
        console.log("[WIDGET_ERROR]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
