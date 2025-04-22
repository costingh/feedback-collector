'use server'

import { client } from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs/server"

export const getUserWidgets = async (workspaceId: string | undefined) => {
    try {
        const user = await currentUser()

        if (!user || !workspaceId) return { status: 404 }

        const widgets = await client.widget.findMany({
            where: {
                // userId: user.id,
                workspaceId
            },
            include: {
                testimonials: true,
            }
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
                testimonials: {
                    select: {
                        id: true
                    }
                }
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
        if (!widgetId) return { status: 404 };

        const testimonials = await client.formResponse.findMany({
            where: {
                id: {
                    in: testimonialsIds,
                },
            },
        });

        const currentTestimonials = await client.widget.findUnique({
            where: {
                id: widgetId,
            },
            select: {
                testimonials: {
                    select: {
                        id: true,
                    },
                },
            },
        });

        if (!currentTestimonials) {
            return { status: 404, data: 'Widget not found' };
        }

        const currentTestimonialsIds = currentTestimonials.testimonials.map((testimonial) => testimonial.id);

        const disconnectTestimonials = currentTestimonialsIds.filter(
            (id) => !testimonialsIds.includes(id)
        );

        const updatedWidget = await client.widget.update({
            where: {
                id: widgetId,
            },
            data: {
                testimonials: {
                    disconnect: disconnectTestimonials.map((id) => ({ id })),
                    connect: testimonials.map((testimonial) => ({
                        id: testimonial.id,
                    })),
                },
            },
        });

        return { status: 200, data: 'Widget updated successfully', updatedWidget };
    } catch (error) {
        return { status: 400 };
    }
};

export const customizeWidget = async (widgetId: string, description: string) => {
    try {
        if (!widgetId) return { status: 404 };

        const updatedWidget = await client.widget.update({
            where: {
                id: widgetId,
            },
            data: {
                widgetDescription: description
            },
        });

        return { status: 200, data: 'Widget updated successfully', updatedWidget };
    } catch (error) {
        return { status: 400 };
    }
};
