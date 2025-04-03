import { NextRequest, NextResponse } from "next/server";
import { client } from "@/lib/prisma";

export async function GET(
    req: NextRequest,
    { params: { widgetUrl } }: { params: { widgetUrl: string } }) {
    try {
        if (!widgetUrl) {
            return NextResponse.json({ status: 404 });
        }

        const widget = await client.widget.findFirst({
            where: {
                url: '/' + widgetUrl,
            },
            include: {
                testimonials: true
            },
        });

        if (widget) {
            return NextResponse.json({ widget, error: null });
        } else {
            return NextResponse.json({ widget: null, error: "Widget not found" });
        }
    } catch (error) {
        console.log("[WIDGET_ERROR]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
