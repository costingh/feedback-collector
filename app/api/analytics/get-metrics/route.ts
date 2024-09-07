import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function GET(req: Request) {
    try {
        // Extract query parameters from the request
        const { searchParams } = new URL(req.url);
        const formId = searchParams.get("formId");
        const actionType = searchParams.get("actionType");

        // Validate the required parameters
        if (!formId || !actionType) {
            return NextResponse.json(
                { error: "formId and actionType are required" },
                { status: 400 }
            );
        }

        // Query the database to sum the value for the specific formId and actionType
        const sumResult = await prismadb.formAnalytics.aggregate({
            _sum: {
                value: true, // Sum the 'value' column
            },
            where: {
                formId: formId,
                actionType: actionType,
            },
        });

        // Return the result
        return NextResponse.json({
            formId,
            actionType,
            totalValue: sumResult._sum.value || 0, // Return 0 if no records found
        });
    } catch (error) {
        console.error("Error fetching analytics:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
