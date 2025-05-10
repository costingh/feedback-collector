import { NextRequest, NextResponse } from "next/server";
import { client } from "@/lib/prisma";

// CORS headers
const corsHeaders = {
    "Access-Control-Allow-Origin": "*", // You can replace * with specific domains
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// Handle preflight requests
export async function OPTIONS() {
    return new NextResponse(null, {
        status: 200,
        headers: corsHeaders,
    });
}

export async function GET(
    req: NextRequest,
    { params: { widgetUrl } }: { params: { widgetUrl: string } }
) {
    try {
        if (!widgetUrl) {
            return new NextResponse(JSON.stringify({ error: "Not found" }), {
                status: 404,
                headers: corsHeaders,
            });
        }

        const searchParams = new URL(req.url).searchParams;

        // Destructure and validate page and limit
        const pageParam = searchParams.get('page');
        const limitParam = searchParams.get('limit');

        const page = pageParam ? parseInt(pageParam, 10) : 1;
        const limit = limitParam ? parseInt(limitParam, 10) : 10;

        // If either page or limit is NaN, set them to default values (1 and 10)
        if (isNaN(page) || page < 1) {
            return NextResponse.json({ error: 'Invalid page number', status: 400 });
        }

        if (isNaN(limit) || limit < 1) {
            return NextResponse.json({ error: 'Invalid limit value', status: 400 });
        }

        const [widget, allTestimonials, avg] = await Promise.all([
            client.widget.findFirst({
                where: {
                    url: '/' + widgetUrl,
                },
                include: {
                    testimonials: {
                        skip: (page - 1) * limit,
                        take: limit,
                        orderBy: {
                            createdAt: 'desc',
                        },
                    },
                    _count: {
                        select: {
                            testimonials: true,
                        },
                    },
                },
            }),
            client.formResponse.findMany({
                where: {
                    widgets: {
                        some: {
                            url: '/' + widgetUrl,
                        },
                    },
                },
                select: {
                    id: true,
                },
            }),
            client.formResponse.aggregate({
                where: {
                    widgets: {
                        some: {
                            url: '/' + widgetUrl,
                        },
                    },
                },
                _avg: {
                    stars: true,
                },
            }),
        ]);

        if (widget) {
            const data = {
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
                    hasMore: (page - 1) * limit + limit < (widget?._count?.testimonials || 0),
                },
            };

            return NextResponse.json({ widget: data, error: null });
        } else {
            return NextResponse.json({ widget: null, error: "Widget not found" });
        }
    } catch (error) {
        console.log("[WIDGET_ERROR]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
