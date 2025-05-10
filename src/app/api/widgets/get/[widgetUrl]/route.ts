import { NextRequest, NextResponse } from "next/server";
import { client } from "@/lib/prisma";

// CORS headers
const corsHeaders = {
    "Access-Control-Allow-Origin": "*", // Change to specific origin if needed
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

// Helper to wrap JSON response with CORS headers
function withCors(json: any, status: number = 200) {
    return new NextResponse(JSON.stringify(json), {
        status,
        headers: corsHeaders,
    });
}

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
            return withCors({ error: "Not found" }, 404);
        }

        const searchParams = new URL(req.url).searchParams;
        const pageParam = searchParams.get("page");
        const limitParam = searchParams.get("limit");

        const page = pageParam ? parseInt(pageParam, 10) : 1;
        const limit = limitParam ? parseInt(limitParam, 10) : 10;

        if (isNaN(page) || page < 1) {
            return withCors({ error: "Invalid page number" }, 400);
        }

        if (isNaN(limit) || limit < 1) {
            return withCors({ error: "Invalid limit value" }, 400);
        }

        const [widget, allTestimonials, avg] = await Promise.all([
            client.widget.findFirst({
                where: {
                    url: "/" + widgetUrl,
                },
                include: {
                    testimonials: {
                        skip: (page - 1) * limit,
                        take: limit,
                        orderBy: {
                            createdAt: "desc",
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
                            url: "/" + widgetUrl,
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
                            url: "/" + widgetUrl,
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
                data: "Widget fetched successfully",
                widget: {
                    ...widget,
                    avgStars: avg?._avg?.stars ?? 0,
                },
                allTestimonialsIds: allTestimonials.map((t) => t.id),
                pagination: {
                    total: widget?._count?.testimonials || 0,
                    page,
                    limit,
                    hasMore:
                        (page - 1) * limit + limit <
                        (widget?._count?.testimonials || 0),
                },
            };

            return withCors({ widget: data, error: null });
        } else {
            return withCors({ widget: null, error: "Widget not found" }, 404);
        }
    } catch (error) {
        console.log("[WIDGET_ERROR]", error);
        return new NextResponse("Internal Error", {
            status: 500,
            headers: corsHeaders,
        });
    }
}
