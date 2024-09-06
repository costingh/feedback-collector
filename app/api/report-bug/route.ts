import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb"; // Assuming you have prisma configured this way

export async function POST(req: Request) {
    try {
        // Get the authenticated user's ID from Clerk
        const { userId } = auth();

        // Parse the request body
        const body = await req.json();
        const { description } = body;

        // Check if user is authenticated
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        // Validate the bug report description
        if (!description || description.trim() === "") {
            return new NextResponse("Description cannot be empty", { status: 400 });
        }

        // Create the bug report in the database with the user's ID
        const bugReport = await prismadb.bugReport.create({
            data: {
                description,
                userId, // Associate the bug report with the authenticated user
            },
        });

        // Return a success response with the created bug report
        return NextResponse.json({ result: bugReport, error: null });
    } catch (error) {
        console.error("[BUG_REPORT_CREATION_ERROR]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
