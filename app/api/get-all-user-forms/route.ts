import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function GET(req: Request) {
    try {
        const { userId } = auth();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const url = new URL(req.url);
        const projectId = url.searchParams.get('projectId') || '';

        console.log(projectId)

        // Fetch forms for the user
        const forms = await prismadb.form.findMany({
            where: {
                userId: userId,
                projectId: projectId
            },
            include: {
                formFields: true,
                questions: true
            },
        });

        console.log(forms)

        // Collect form IDs to fetch analytics
        const formIds = forms.map((form) => form.id);

        // Fetch and aggregate metrics for the forms
        const formMetrics = await prismadb.formAnalytics.groupBy({
            by: ['formId', 'actionType'],
            where: {
                formId: {
                    in: formIds,
                },
            },
            _sum: {
                value: true,  // Sum the 'value' field for each actionType
            },
        });

        // Attach the metrics to the forms
        const formsWithMetrics = forms.map((form) => {
            const metrics = formMetrics.filter((metric) => metric.formId === form.id);
            return {
                ...form,
                metrics: metrics.map((metric) => ({
                    actionType: metric.actionType,
                    total: metric._sum.value,
                })),
            };
        });

        return NextResponse.json({ forms: formsWithMetrics, error: null });
    } catch (error) {
        console.error("[ERROR]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
