'use server'

import { client } from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';

export const getDashboardStats = async (workspaceId: string) => {
    const user = await currentUser();
    if (!user) return { status: 403, data: 'Not logged in', form: null };

    try {
        const userInfo = await client.user.findUnique({ where: { clerkid: user.id } });
        if (!userInfo) return { status: 403, data: 'User not found', form: null };

        const [workspacesCount, forms, widgetsCount, testimonialsCount] = await Promise.all([
            client.workSpace.count({ where: { userId: userInfo.id } }),
            client.form.findMany({
                where: { userId: user.id, workspaceId },
                select: { id: true, name: true, isPaused: true, published: true },
            }),
            client.widget.count({ where: { userId: user.id, workspaceId } }),
            client.formResponse.count({ where: { form: { userId: user.id, workspaceId } } }),
        ]);

        const formsCount = forms.length;
        const formIds = forms.map(form => form.id);

        const formAnalytics = formIds.length > 0 ? await client.formAnalytics.groupBy({
            by: ['formId', 'actionType'],
            where: { formId: { in: formIds } },
            _sum: { value: true },
        }) : [];

        const totalVisits = formAnalytics.reduce((sum, metric) => sum + (metric._sum.value || 0), 0);

        const formsWithMetrics = forms.map(form => {
            const metrics = formAnalytics
                .filter(metric => metric.formId === form.id)
                .map(metric => ({
                    actionType: metric.actionType,
                    total: metric._sum.value,
                }));
            return { ...form, metrics };
        });

        const transformedData = formsWithMetrics.map((form: any) => {
            const viewMetric = form.metrics.find((metric: any) => metric.actionType === 'view')?.total || 0;
            const completionMetric = form.metrics.find((metric: any) => metric.actionType === 'completion')?.total || 0;
            const interactionMetric = form.metrics.find((metric: any) => metric.actionType === 'interaction')?.total || 0;

            // Calculate interaction rate (total_interactions / total_views) * 100
            const interactionRate = viewMetric > 0 ? (interactionMetric / viewMetric) * 100 : 0;

            return {
                formName: form.name,
                views: viewMetric,
                completions: completionMetric,
                interactions: interactionMetric,
                interactionRate,
            };
        });

        // Sort by interaction rate (highest first) and take the top 5
        const topEngagingForms = [...transformedData]
            .sort((a, b) => b.interactionRate - a.interactionRate)
            .slice(0, 5);

        const chartData = {
            Published: 0,
            Drafts: 0,
            Paused: 0,
        };

        forms.forEach((form: any) => {
            if (form.published) {
                chartData.Published++;
            } else if (form.isPaused) {
                chartData.Paused++;
            } else {
                chartData.Drafts++;
            }
        });

        const formsSplitByStateChart = [
            { name: "Published", value: chartData.Published },
            { name: "Drafts", value: chartData.Drafts },
            { name: "Paused", value: chartData.Paused },
        ];

        const visitsData = formIds.length > 0 ? await client.formAnalytics.groupBy({
            by: ['createdAt', 'deviceType'],
            where: { 
                formId: { in: formIds },
                actionType: "view", // Only count views
                createdAt: {
                    gte: new Date(new Date().setDate(new Date().getDate() - 10)), // Last 10 days
                }
            },
            _sum: { value: true },
            orderBy: { createdAt: "asc" }
        }) : [];

        const visitsMap: Record<string, { desktop: number; mobile: number }> = {};

        visitsData.forEach(entry => {
            const day = entry.createdAt.toISOString().split("T")[0]; // Format as YYYY-MM-DD
            if (!visitsMap[day]) {
                visitsMap[day] = { desktop: 0, mobile: 0 };
            }

            if (entry.deviceType === "Desktop") {
                visitsMap[day].desktop += entry._sum.value || 0;
            } else {
                visitsMap[day].mobile += entry._sum.value || 0;
            }
        });

        const last30Days = Array.from({ length: 10 }, (_, i) => {
            const date = new Date();
            date.setDate(date.getDate() - i);
            return date.toISOString().split("T")[0]; // YYYY-MM-DD
        }).reverse();

        const visitsEvolutionChart = last30Days.map(day => ({
            day,
            desktop: visitsMap[day]?.desktop || 0,
            mobile: visitsMap[day]?.mobile || 0,
        }));

        const topFormsListData = [...transformedData]
            .sort((a, b) => b.views - a.views)
            .slice(0, 5);

        const topCountries = await client.formAnalytics.groupBy({
            by: ['country'],
            where: {
                createdAt: {
                    gte: new Date(new Date().setMonth(new Date().getMonth() - 1)),
                },
            },
            _count: { country: true },
            orderBy: { _count: { country: 'desc' } },
            take: 5,
        });

        const topCountriesData = topCountries.map(country => ({
            country: country.country,
            visits: country._count.country,
        }));

        return {
            status: 200,
            data: {
                workspacesCount,
                formsCount,
                testimonialsCount,
                formsWithMetrics,
                widgetsCount,
                totalVisits,
                transformedData,
                visitsEvolutionChart,
                formsSplitByStateChart,
                topFormsListData,
                topEngagingForms,
                topCountriesData,
            },
        };
    } catch (error) {
        console.error(error);
        return { status: 500, data: null };
    }
};
