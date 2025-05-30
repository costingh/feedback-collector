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

        const offset = (page - 1) * limit;

        const result: any[] = await client.$queryRawUnsafe(`
            WITH widget_data AS (
              SELECT w.* 
              FROM "Widget" w
              WHERE w."url" = $1
            ),
            testimonials AS (
              SELECT fr.*
              FROM "FormResponse" fr
              JOIN "_TestimonialWidgets" tw ON fr."id" = tw."A"
              JOIN widget_data w ON tw."B" = w."id"
              ORDER BY fr."createdAt" DESC
              OFFSET $2
              LIMIT $3
            ),
            stats AS (
              SELECT 
                COUNT(*) AS total,
                AVG(fr."stars") AS avg_stars
              FROM "FormResponse" fr
              JOIN "_TestimonialWidgets" tw ON fr."id" = tw."A"
              JOIN widget_data w ON tw."B" = w."id"
            )
            SELECT 
              (SELECT row_to_json(w) FROM widget_data w) AS widget,
              (SELECT json_agg(t) FROM testimonials t) AS testimonials,
              (SELECT total FROM stats),
              (SELECT avg_stars FROM stats);
        `, "/" + widgetUrl, offset, limit);

        const raw = result[0];

        if (!raw || !raw.widget) {
            return withCors({ widget: null, error: "Widget not found" }, 404);
        }

        const testimonialIds = raw.testimonials?.map((t: any) => t.id) || [];

        const data = {
            status: 200,
            data: "Widget fetched successfully",
            widget: {
                ...raw.widget,
                testimonials: raw.testimonials,
                avgStars: parseFloat(raw.avg_stars) || 0,
            },
            allTestimonialsIds: testimonialIds,
            pagination: {
                total: parseInt(raw.total, 10) || 0,
                page,
                limit,
                hasMore: offset + limit < (parseInt(raw.total, 10) || 0),
            },
        };

        console.log("[DATA]", data);

        return withCors({ widget: data, error: null });
    } catch (error) {
        console.error("[WIDGET_ERROR]", error);
        return new NextResponse("Internal Error", {
            status: 500,
            headers: corsHeaders,
        });
    }
}
