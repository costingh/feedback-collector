import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import {client} from "@/lib/prisma";

export async function DELETE(req: Request) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { ids } = body;

        if (!userId) {
            return NextResponse.json({ success: false, message: "Unauthorized", status: 401 });
        }

        if (!Array.isArray(ids) || ids.length === 0) {
            return NextResponse.json({ success: false, message: "Invalid input",status: 400 });
        }

        await client.formResponse.deleteMany({
            where: {
                id: {
                    in: ids,
                },
            },
        });

        return NextResponse.json({ success: true, status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, status: 500 });
    }
}
