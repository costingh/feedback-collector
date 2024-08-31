import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function GET(req: Request) {
    try {
        // Get the authenticated user's ID
        const { userId } = auth();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        // Parse the request URL to get query parameters
        const url = new URL(req.url);
        const widgetUrl = url.searchParams.get('url');  // The 'url' parameter can be used to identify a specific widget

        let widgets;

        if (widgetUrl) {
            // Fetch a specific widget by its URL if the URL is provided
            const widget = await prismadb.widget.findFirst({
                where: {
                    url: '/' + widgetUrl,  // Fetching by URL only
                },
            });

            if (!widget) {
                return new NextResponse("Widget not found", { status: 404 });
            }

            widgets = [widget];  // Wrapping the single widget in an array for consistency
        } else {
            // Fetch all widgets for the authenticated user if no specific URL is provided
            widgets = await prismadb.widget.findMany({
                where: {
                    userId: userId,
                },
            });
        }

        // For each widget, fetch the corresponding FormResponses based on testimonialsIds
        const widgetsWithTestimonials = await Promise.all(
            widgets.map(async (widget) => {
                if (widget.testimonialsIds.length > 0) {
                    const formResponses = await prismadb.formResponse.findMany({
                        where: {
                            id: {
                                in: widget.testimonialsIds,
                            },
                        },
                    });

                    return {
                        ...widget,
                        testimonials: formResponses,
                    };
                } else {
                    return {
                        ...widget,
                        testimonials: [],
                    };
                }
            })
        );

        return NextResponse.json({ widgets: widgetsWithTestimonials, error: null });
    } catch (error) {
        console.error("[ERROR]", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
