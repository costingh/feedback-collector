import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";
import { checkLimits } from "@/lib/get-plan-name";

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { name, description } = body.data;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const numberOfCurrentProjects =  await prismadb.project.count();
        const hasNotReachedLimits = await checkLimits('workspaces', numberOfCurrentProjects);

        if(!hasNotReachedLimits) {
            return new NextResponse("Workspaces limit reached.", { status: 500 });
        }

        const newProject = await prismadb.project.create({
            data: {
                name,
                description,
                userId,
            },
        });

        return NextResponse.json({ result: newProject, error: null });
    } catch (error) {
        console.error("[PROJECT_CREATION_ERROR]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
