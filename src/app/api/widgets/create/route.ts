import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import {client} from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { data } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        let dataToCreate: any = {
            name: data.name,
            target: data.target,
            url: data.url,
            userId,
            type: data.type,
            workspaceId: data.workspaceId,
            widgetDescription: 'Trusted by thousands of customers',
            variant: data.variant,
        }

        if(data.type === 'rating_badge') {
            dataToCreate.cardBackground = '#000';
            dataToCreate.primaryTextColor = '#000';
            dataToCreate.secondaryTextColor = '#fff';
        }

        const result = await client.widget.create({
            data: {
                ...dataToCreate,
                testimonials: {
                    connect: data?.testimonialsIds?.map((i: any) => ({id: i})) || [],
                },
            }
        });

        return NextResponse.json({ result, error: null });
    } catch (error) {
        console.log("[WIDGET_ERROR]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
