import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

export async function PUT(req: Request) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { id, tagName, category, tagDescription, formResponseIds } = body.data;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        // Check if the tag ID is provided
        if (!id) {
            return new NextResponse("Tag ID is required", { status: 400 });
        }

        const existingTag = await prismadb.tag.findUnique({
            where: { id },
        });

        if (!existingTag) {
            return new NextResponse("Tag not found", { status: 404 });
        }

        const updatedTag = await prismadb.tag.update({
            where: { id },
            data: {
                tagName: tagName || existingTag.tagName,
                category: category || existingTag.category,
                tagDescription: tagDescription || existingTag.tagDescription,
                // userId,
                // formResponses: formResponseIds
                //     ? {
                //         connect: formResponseIds.map((id: string) => ({ id })),
                //     }
                //     : undefined
            },
        });

        return NextResponse.json({ result: updatedTag, error: null });
    } catch (error) {
        console.error("[TAG_UPDATE_ERROR]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
