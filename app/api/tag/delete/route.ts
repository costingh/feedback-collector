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
        const tagId = url.searchParams.get("id");

        if(!tagId) {
            return NextResponse.json({ message: 'Invalid tag id provided', error: true });
        }

        await prismadb.tag.delete({
            where: {
                id: tagId,
            },
        });

        return NextResponse.json({ message: 'Tag deleted', error: null });
    } catch (error) {
        console.error("[TAG_CREATION_ERROR]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
