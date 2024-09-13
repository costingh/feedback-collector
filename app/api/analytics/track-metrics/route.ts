import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
    try {
        const { formId, eventType, timeSpent, deviceInfo } = await req.json();

        // Validate eventType
        const validEventTypes = ["view", "time", "bounce", "interaction", "completion"];
        if (!validEventTypes.includes(eventType)) {
            return NextResponse.json({ success: false, message: "Invalid eventType" });
        }

        // Determine the value for the action
        let value: number;
        switch (eventType) {
            case "view":
            case "bounce":
            case "interaction":
            case "completion":
                value = 1; // These actions are counted as 1
                break;
            case "time":
                value = timeSpent || 0; // Time spent is recorded as the value
                break;
            default:
                return NextResponse.json({ success: false, message: "Invalid eventType" });
        }

        // Create a new analytics record
        await prismadb.formAnalytics.create({
            data: {
                formId,
                actionType: eventType,
                value,
            },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error tracking analytics:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}