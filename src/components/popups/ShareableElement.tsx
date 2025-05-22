import Image from "next/image";
import React, { useState } from "react";
import { CreateWidgetModal } from "../widgets/CreateWidgetModal";
import RollingWall from "./RollingWall";
import RatingBadge from "./RatingBadge";
import SocialStar from "./SocialStar";
import HeroQuotes from "./HeroQuotes";
import { testimonialsMock } from "@/constants/testimonials-mock";
import Avatars from "./Avatars";
import MinimalistReview from "./MinimalistReview";
import { extractWidgetColors, formatNumberOfReviews } from "@/lib/utils";

function ShareableElement({ type, workspaceId }: { type: string, workspaceId: string }) {
    const [loading, setLoading] = useState({
        action: '',
        loading: false
    })

    let mockWidget = {
        "id": "cm8uovnho0003t7otihlugm5c",
        "name": "main",
        "target": "home",
        "url": "/MKR3po8",
        "createdAt": "2025-03-29T20:54:01.607Z",
        "updatedAt": "2025-05-01T10:05:09.838Z",
        "userId": "user_2saB2x4TjQaMi3j85qt7Ox3dBdu",
        // "type": "avatars",
        "widgetDescription": "Trusted by 10k clients",
        "cardBorderColor": "#e5e7eb",
        "variant": "simple",
        "workspaceId": "cm8qd31va00002fb448hcrwzu",
        "testimonials": testimonialsMock,
        "_count": {
            "testimonials": 3
        },
        "avgStars": 4.666666666666667
    }

    const getMockWidget = (type: string) => {
        const widget = { ...mockWidget, type };
        extractWidgetColors(widget);
        return widget;
    }

    return (
        <div className="border-[1px] border-gray-200 rounded-[12px] overflow-hidden group cursor:pointer">
            <div className="top w-full h-[170px] bg-gray-100 flex items-center justify-center overflow-hidden">
                {type == 'basic_wall' && (
                    <Image
                        src="/images/widgets/basic-wall.png"
                        alt="Basic Wall Demo Illustration"
                        width={800}
                        height={800}
                        className="max-w-full w-full max-h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                    />
                )}

                {type == 'rolling_wall' && <div style={{ transform: 'scale(0.4)' }}>
                    <RollingWall transition={true} testimonials={testimonialsMock} />
                </div>}

                {type == 'rating_badge' && <div>
                    <RatingBadge transition={true} widget={getMockWidget('rating_badge')} />
                </div>}

                {type == 'social_star' && <div>
                    <SocialStar transition={true} testimonials={testimonialsMock.slice(0, 1)} numberOfReviews={1041} widget={null} style={{ transform: 'scale(0.5)', width: '500px' }} />
                </div>}

                {type == 'hero_quotes' && <div>
                    <HeroQuotes transition={true} widget={getMockWidget('hero_quotes')} style={{ transform: 'scale(0.6)' }} />
                </div>}

                {type == 'avatars' && <div>
                    {/* @ts-ignore */}
                    <Avatars transition={true} testimonials={testimonialsMock} widget={getMockWidget('avatars')} numberOfReviews={formatNumberOfReviews(1023 - 3)} />
                </div>}

                {type == 'minimalist_review' && <div>
                    <MinimalistReview review={testimonialsMock[0]} widget={getMockWidget('minimalist_review')} style={{ transform: 'scale(0.6)' }} />
                </div>}
            </div>
            <div className="bottom w-full py-4 px-5">
                <div className="flex items-center justify-between gap-2 w-full">
                    <span className="text-[14px] text-gray-400 font-[500]">
                        {type == 'basic_wall' && 'Wall of Love'}
                        {type == 'rolling_wall' && 'Carousel'}
                        {type == 'rating_badge' && 'Rating Badge'}
                        {type == 'social_star' && 'Social Star'}
                        {type == 'hero_quotes' && 'Hero Quotes'}
                        {type == 'avatars' && 'Avatars'}
                        {type == 'minimalist_review' && 'Minimalist Review'}
                    </span>

                    <CreateWidgetModal loading={loading} selectedIds={[]} section='creator' predefinedWidgetType={type} workspaceId={workspaceId} />
                </div>
            </div>
        </div>
    );
}

export default ShareableElement;
