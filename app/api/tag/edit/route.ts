import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { tagName, category, tagDescription, formResponsesIds } = body.data;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        console.log({ tagName, category, tagDescription, formResponsesIds })

        const newTag = await prismadb.tag.create({
            data: {
                tagName,
                category,
                tagDescription,
                userId,
                formResponsesIds
            },
        });

        return NextResponse.json({ result: newTag, error: null });
    } catch (error) {
        console.error("[TAG_CREATION_ERROR]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
