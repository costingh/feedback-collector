'use server'

import { client } from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs/server"

export const getUserWidgets = async (workspaceId: string | undefined) => {
    try {
        const user = await currentUser()

        if (!user || !workspaceId) return { status: 404 }

        const widgets = await client.widget.findMany({
            where: {
                userId: user.id,
                workspaceId
            },
        })

        if (widgets) {
            return { status: 200, data: widgets }
        }
    } catch (error) {
        return { status: 400 }
    }
}

export const getUserWidget = async (widgetUrl: string | undefined) => {
    try {
        if (!widgetUrl) return { status: 404 }

        const widget = await client.widget.findFirst({
            where: {
                url: widgetUrl,
            },
            include: {
                testimonials: true
            },
        });


        if (widget) {
            return { status: 200, data: 'Widget fetched successfully', widget }
        }
    } catch (error) {
        return { status: 400 }
    }
}

export const updateWidget = async (widgetId: string, testimonialsIds: string[]) => {
    try {
        const user = await currentUser()

        if (!user || !widgetId) return { status: 404 }

        const testimonials = await client.formResponse.findMany({
            where: {
                id: {
                    in: testimonialsIds,
                },
            },
        });

        const updatedWidget = await client.widget.update({
            where: {
                id: widgetId,
                userId: user.id,
            },
            data: {
                testimonials: {
                    connect: testimonials.map((testimonial) => ({
                        id: testimonial.id,
                    })),
                },
            },
        });

        return { status: 200, data: 'Widget updated successfully', updatedWidget }
    } catch (error) {
        return { status: 400 }
    }
}