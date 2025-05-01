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
                testimonials: {
                    take: 3,
                    orderBy: {
                        createdAt: 'desc'
                    },
                },
                _count: {
                    select: {
                        testimonials: true
                    }
                }
            }
        })

        const promises = widgets.map(async w => {
            const avg = await client.formResponse.aggregate({
                where: {
                    widgets: {
                        some: {
                            id: w.id
                        }
                    }
                },
                _avg: {
                    stars: true,
                },
            });

            return {
                ...w,
                avgStars: avg?._avg?.stars ?? 0,
            }
        })

        const results = await Promise.all(promises)

        if (results) {
            return { status: 200, data: results }
        }
    } catch (error) {
        return { status: 400 }
    }
}

export const getUserWidget = async (widgetUrl: string | undefined, page: number = 1, limit: number = 6) => {
    try {
        if (!widgetUrl) return { status: 404 }

        const skip = (page - 1) * limit;

        const [widget, allTestimonials, avg] = await Promise.all([
            client.widget.findFirst({
                where: {
                    url: widgetUrl,
                },
                include: {
                    testimonials: {
                        skip,
                        take: limit,
                        orderBy: {
                            createdAt: 'desc'
                        }
                    },
                    _count: {
                        select: {
                            testimonials: true
                        }
                    }
                },
            }),
            client.formResponse.findMany({
                where: {
                    widgets: {
                        some: {
                            url: widgetUrl
                        }
                    }
                },
                select: {
                    id: true
                }
            }),
            client.formResponse.aggregate({
                where: {
                    widgets: {
                        some: {
                            url: widgetUrl
                        }
                    }
                },
                _avg: {
                    stars: true,
                },
            })
        ]);

        if (widget) {
            return {
                status: 200,
                data: 'Widget fetched successfully',
                widget: {
                    ...widget,
                    avgStars: avg?._avg?.stars ?? 0,
                },
                allTestimonialsIds: allTestimonials.map((t: { id: string }) => t.id),
                pagination: {
                    total: widget?._count?.testimonials || 0,
                    page,
                    limit,
                    hasMore: skip + limit < (widget?._count?.testimonials || 0)
                }
            }
        }
    } catch (error) {
        console.log(error)
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

export const customizeWidget = async (widgetId: string, description: string, cardBackground: string, primaryTextColor: string, secondaryTextColor: string, thirdTextColor: string, cardBorderColor: string, variant: string) => {
    try {
        if (!widgetId) return { status: 404 };

        const updatedWidget = await client.widget.update({
            where: {
                id: widgetId,
            },
            data: {
                widgetDescription: description,
                cardBackground: cardBackground,
                primaryTextColor: primaryTextColor,
                secondaryTextColor: secondaryTextColor,
                thirdTextColor: thirdTextColor,
                cardBorderColor: cardBorderColor,
                variant: variant
            },
        });

        return { status: 200, data: 'Widget updated successfully', updatedWidget };
    } catch (error) {
        return { status: 400 };
    }
};
