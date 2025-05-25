import StarsRating from "@/components/stars/stars-rating";
import { Widget } from "@prisma/client";
import { cn } from "@/lib/utils";
import NoTestimonialsLinkedMessage from "./NoTestimonialsLinkedMessage";
import { RatedIconVariant2 } from "@/app/(website)/_components/icons/rated-icon-variant-2";
import { UnratedIconVariant2 } from "@/app/(website)/_components/icons/unrated-icon-variant-2";


function InlineAvatarsVariant({
    transition,
    testimonials,
    widget,
    numberOfReviews,
}: {
    transition?: boolean;
    testimonials: any;
    widget: (Widget & { _count: { testimonials: number } } & { avgStars: number }) | null | undefined;
    numberOfReviews: string;
}) {
    return (
        <>
            {testimonials?.length >= 3 ? (
                <div className="flex-col">
                    <div
                        className={cn("flex flex-wrap items-center justify-center gap-1 text-[12px] font-light lg:gap-3 lg:text-lg")} style={{ color: widget?.primaryTextColor }}>
                        <div><span className="hidden lg:inline-flex">Rated</span> "Excellent" <span
                            className="font-bold">{widget?.avgStars?.toFixed(1)}/5</span></div>
                        <div className="hidden flex-row lg:flex">
                            <StarsRating
                                ratedIcon={<RatedIconVariant2 />}
                                unratedIcon={<UnratedIconVariant2 />}
                                readonly
                                value={Math.floor(widget?.avgStars || 0)}
                            />
                        </div>
                        by our <span className="font-bold">1000+</span> clients
                    </div>
                    <div className="mb-4 mt-2 text-center" style={{ color: widget?.secondaryTextColor }}>Discover Why Feedbackz is the Preferred Choice for
                        Bussiness Owners.
                    </div>
                </div>
            ) : (
                <NoTestimonialsLinkedMessage widget={widget} />
            )}
        </>
    );
}

export default InlineAvatarsVariant;
