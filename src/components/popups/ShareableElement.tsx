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

function ShareableElement({type, workspaceId}: {type: string, workspaceId: string}) {
    const [loading, setLoading] = useState({
        action: '',
        loading: false
    })
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

                {type == 'rolling_wall' && <div style={{transform: 'scale(0.4)'}}>
                    <RollingWall transition={true} testimonials={testimonialsMock}/>
                </div>}

                {type == 'rating_badge' && <div>
                    <RatingBadge transition={true} testimonials={testimonialsMock}/>
                </div>}

				{type == 'social_star' && <div style={{transform: 'scale(0.8)'}}>
                    <SocialStar transition={true} testimonials={testimonialsMock.slice(0,1)}/>
                </div>}

				{type == 'hero_quotes' && <div style={{transform: 'scale(0.8)'}}>
                    <HeroQuotes transition={true}/>
                </div>}

                {type == 'avatars' && <div style={{transform: 'scale(0.8)'}}>
                    <Avatars transition={true} testimonials={testimonialsMock} widget={null} numberOfReviews={formatNumberOfReviews(1023)}/>
                </div>}

                {type == 'minimalist_review' && <div style={{transform: 'scale(0.8)'}}>
                    <MinimalistReview review={testimonialsMock[0]}/>
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

					<CreateWidgetModal loading={loading} selectedIds={[]} section='creator' predefinedWidgetType={type} workspaceId={workspaceId}/>
				</div>
			</div>
		</div>
	);
}

export default ShareableElement;
