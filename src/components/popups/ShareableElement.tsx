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
import { formatNumberOfReviews } from "@/lib/utils";

function ShareableElement({ type, workspaceId }: { type: string, workspaceId: string }) {
    const [loading, setLoading] = useState({
        action: '',
        loading: false
    })

    const mockWidget = {
        "id": "cm8uovnho0003t7otihlugm5c",
        "name": "main",
        "target": "home",
        "url": "/MKR3po8",
        "createdAt": "2025-03-29T20:54:01.607Z",
        "updatedAt": "2025-05-01T10:05:09.838Z",
        "userId": "user_2saB2x4TjQaMi3j85qt7Ox3dBdu",
        "type": "avatars",
        "widgetDescription": "Trusted by 10k clients",
        "cardBackground": "#fff",
        "primaryTextColor": "#79797dff",
        "secondaryTextColor": "#4b5563",
        "thirdTextColor": "#374151",
        "cardBorderColor": "#e5e7eb",
        "variant": "simple",
        "workspaceId": "cm8qd31va00002fb448hcrwzu",
        "testimonials": [
            ...testimonialsMock,
            // {
            //     "id": "cm98yov0u000921r75h7lk4ut",
            //     "stars": 5,
            //     "message": "I came across Senja a couple of weeks ago when I was googling alternatives to gathering testimonials. Setting it up was easy, and the widgets they provide are awesome!",
            //     "name": "Lou",
            //     "email": "",
            //     "company": "",
            //     "jobTitle": "CEO",
            //     "website": "",
            //     "formId": "cm8qd54f900022fb4z94jnu3m",
            //     "avatar": "https://recordr-bucket.s3.eu-north-1.amazonaws.com/avatars/1744144647062-594202.jpg",
            //     "logo": "",
            //     "video": "",
            //     "source": "feedbackz",
            //     "approved": true,
            //     "createdAt": "2025-04-08T20:37:27.439Z",
            //     "tagId": null,
            //     "widgetId": "cm90dzdfg0007d1dn3o7fugm9"
            // },
            // {
            //     "id": "cm98ynumu000521r7glyytq7y",
            //     "stars": 5,
            //     "message": "I sent a link to all of my customers and I've had twenty testimonials in two days. It's obviously very easy to use, otherwise they wouldn't be flooding us with testimonials.",
            //     "name": "Joel",
            //     "email": "",
            //     "company": "",
            //     "jobTitle": "CEO",
            //     "website": "",
            //     "formId": "cm8qd54f900022fb4z94jnu3m",
            //     "avatar": "https://recordr-bucket.s3.eu-north-1.amazonaws.com/avatars/1744144599809-737427.jpg",
            //     "logo": "",
            //     "video": "",
            //     "source": "feedbackz",
            //     "approved": true,
            //     "createdAt": "2025-04-08T20:36:40.278Z",
            //     "tagId": null,
            //     "widgetId": "cm90dzdfg0007d1dn3o7fugm9"
            // },
            // {
            //     "id": "cm98ynasy000321r7bxhf2awi",
            //     "stars": 4,
            //     "message": "The most amazing tool in the world. Is blazing fast, easy to integrate, to navigate and very clean.",
            //     "name": "Mack",
            //     "email": "",
            //     "company": "",
            //     "jobTitle": "CEO @ Socialify",
            //     "website": "",
            //     "formId": "cm8qd54f900022fb4z94jnu3m",
            //     "avatar": "https://recordr-bucket.s3.eu-north-1.amazonaws.com/avatars/1744144574216-908453.jpg",
            //     "logo": "",
            //     "video": "",
            //     "source": "feedbackz",
            //     "approved": true,
            //     "createdAt": "2025-04-08T20:36:14.579Z",
            //     "tagId": null,
            //     "widgetId": "cm90dzdfg0007d1dn3o7fugm9"
            // }
        ],
        "_count": {
            "testimonials": 3
        },
        "avgStars": 4.666666666666667
    }

    return (
        <div className="border-[1px] border-gray-200 rounded-[12px] overflow-hidden group cursor:pointer">
            <div className="top w-full h-[250px] bg-gray-100 flex items-center justify-center overflow-hidden">
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
                    <RatingBadge transition={true} widget={{ ...mockWidget, cardBackground: '#000', primaryTextColor: '#000', secondaryTextColor: '#fff' }} />
                </div>}

                {type == 'social_star' && <div style={{ transform: 'scale(0.8)' }}>
                    <SocialStar transition={true} testimonials={testimonialsMock.slice(0, 1)} numberOfReviews={1041} widget={null} />
                </div>}

                {type == 'hero_quotes' && <div style={{ transform: 'scale(0.8)' }}>
                    <HeroQuotes transition={true} />
                </div>}

                {type == 'avatars' && <div>
                    {/* @ts-ignore */}
                    <Avatars transition={true} testimonials={testimonialsMock} widget={mockWidget} numberOfReviews={formatNumberOfReviews(1023 - 3)} />
                </div>}

                {type == 'minimalist_review' && <div style={{ transform: 'scale(0.8)' }}>
                    <MinimalistReview review={testimonialsMock[0]} />
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
