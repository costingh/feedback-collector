import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { widgetId, testimonialsIds } = body.data;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if (!widgetId) {
            return new NextResponse("Widget ID is required", { status: 400 });
        }

        if (!testimonialsIds || !Array.isArray(testimonialsIds)) {
            return new NextResponse("Invalid testimonialsIds data", { status: 400 });
        }

        const existingWidget = await prismadb.widget.findUnique({
            where: { id: widgetId },
        });

        if (!existingWidget || existingWidget.userId !== userId) {
            return new NextResponse("Not Found or Unauthorized", { status: 404 });
        }

        const updatedWidget = await prismadb.widget.update({
            where: { id: widgetId },
            data: {
                testimonialsIds: testimonialsIds,
            },
        });

        return NextResponse.json({ updatedWidget, error: null });
    } catch (error) {
        console.log("[WIDGET_UPDATE_ERROR]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
