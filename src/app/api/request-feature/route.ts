import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import {client} from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const { userId } = auth();

        const body = await req.json();
        const { description } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!description || description.trim() === "") {
            return new NextResponse("Description cannot be empty", { status: 400 });
        }

        const bugReport = await client.featureRequest.create({
            data: {
                description,
                userId,
            },
        });

        return NextResponse.json({ result: bugReport, error: null });
    } catch (error) {
        console.error("[FEATURE_REQUEST_CREATION_ERROR]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
