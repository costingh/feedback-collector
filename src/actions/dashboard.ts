'use server'

import { client } from '@/lib/prisma'
import { currentUser } from '@clerk/nextjs/server'

export const getDashboardStats = async (workspaceId:string) => {
    const user = await currentUser();
    if (!user) return { status: 403, data: 'Not logged in', form: null };

    try {
        // const workspacesCount = await client.workSpace.count({ where: { userId: user.id } });
        const workspacesCount = 0;
        const formsCount = await client.form.count({ where: { userId: user.id, workspaceId } });
        const widgetsCount = await client.widget.count({ where: { userId: user.id, workspaceId } });
        const testimonialsCount = await client.formResponse.count({where: {form: { userId: user.id, workspaceId}}});

        const forms = await client.form.findMany({
            where: { userId: user.id, workspaceId },
            select: {
                id: true,
                name: true,
            },
        });

        const formIds = forms.map((form) => form.id);

        const formAnalytics = await client.formAnalytics.groupBy({
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

        const formsWithMetrics = forms.map((form) => {
            const metrics = formAnalytics
                .filter((metric) => metric.formId === form.id)
                .map((metric) => ({
                    actionType: metric.actionType,
                    total: metric._sum.value,
                }));
            return { ...form, metrics };
        });

        return {
            status: 200,
            data: {
                workspacesCount,
                formsCount,
                testimonialsCount,
                formsWithMetrics,
                widgetsCount,
                totalVisits,
                mostAccessedForm
            }
        };
    } catch (error) {
        console.error(error)
        return {
            status: 500,
            data: null,
        };
    }
};