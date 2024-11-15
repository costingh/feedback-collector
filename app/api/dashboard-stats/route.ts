import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function GET(req: Request) {
    try {
        const { userId } = auth();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        // Fetch user-related counts
        const projectsCount = await prismadb.project.count({
            where: { userId },
        });

        const formsCount = await prismadb.form.count({
            where: { userId },
        });

        const widgetsCount = await prismadb.widget.count({ where: { userId } });

        const testimonialsCount = await prismadb.formResponse.count({
            where: {
                form: {
                    userId,
                },
            },
        });

        // Fetch forms with their metrics
        const forms = await prismadb.form.findMany({
            where: { userId },
            select: {
                id: true,
                name: true,
            },
        });

        // Collect form IDs for analytics
        const formIds = forms.map((form) => form.id);

        // Fetch aggregated metrics for each form
        const formAnalytics = await prismadb.formAnalytics.groupBy({
            by: ['formId', 'actionType'],
            where: {
                formId: { in: formIds },
            },
            _sum: {
                value: true,
            },
        });

        const totalVisits = formAnalytics.reduce((sum, metric) => sum + (metric._sum.value || 0), 0);

        const mostAccessedForm = forms.reduce((mostAccessed, form) => {
            const formVisits = formAnalytics
                .filter((metric) => metric.formId === form.id && metric.actionType === 'visit')
                .reduce((total, metric) => total + (metric._sum.value || 0), 0);
            return formVisits > (mostAccessed.visits || 0)
                ? { formId: form.id, name: form.name, visits: formVisits }
                : mostAccessed;
        }, { formId: "", name: "", visits: 0 });

        // Structure analytics by form
        const formsWithMetrics = forms.map((form) => {
            const metrics = formAnalytics
                .filter((metric) => metric.formId === form.id)
                .map((metric) => ({
                    actionType: metric.actionType,
                    total: metric._sum.value,
                }));
            return { ...form, metrics };
        });

        return NextResponse.json({
            data: {
                projectsCount,
                formsCount,
                testimonialsCount,
                formsWithMetrics,
                widgetsCount,
                totalVisits,
                mostAccessedForm
            },
            error: null,
        });
    } catch (error) {
        console.error("[DASHBOARD_DATA_ERROR]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
