"use client";

import { timeAgo } from "@/lib/utils";
import {
	ExternalLink,
	Eye,
	MousePointerClick,
	Percent,
	Share2,
} from "lucide-react";
import React, { useState } from "react";
import RollingWall from "./RollingWall";
import RatingBadge from "./RatingBadge";
import SocialStar from "./SocialStar";
import { ShareWidgetModal } from "../widgets/ShareWidgetModal";
import Avatars from "./Avatars";
import HeroQuotes from "./HeroQuotes";
import { testimonialsMock } from "@/constants/testimonials-mock";
import Link from "next/link";
import BasicWall from "./BasicWall";
import { WidgetValidationTooltip } from "../tooltips/WidgetValidationTooltip";

function Widget({ widget, workspaceId }: { widget: any; workspaceId: string }) {
	return (
		<div className="border-[1px] border-gray-200 rounded-[12px] overflow-hidden">
			<div className="top w-full h-[200px] bg-gray-100 flex items-center justify-center relative overflow-hidden">
				{widget?.type == "basic_wall" && (
					<div style={{transform: 'scale(0.5)', width: '600px'}}>
						<BasicWall testimonials={widget?.testimonials || testimonialsMock} />
					</div>
				)}

				{widget?.type == "rolling_wall" && (
					<div style={{ transform: "scale(0.4)" }}>
						<RollingWall testimonials={widget?.testimonials || testimonialsMock} />
					</div>
				)}

				{widget?.type == "rating_badge" && (
					<div>
						<RatingBadge testimonials={widget?.testimonials || testimonialsMock} />
					</div>
				)}

				{widget?.type == "avatars" && (
					<div>
						<Avatars testimonials={widget?.testimonials || testimonialsMock} widget={widget}/>
					</div>
				)}

				{widget?.type == "social_star" && (
					<div style={{ transform: "scale(0.8)" }}>
						<SocialStar
							testimonials={widget?.testimonials || testimonialsMock.slice(0, 1)}
						/>
					</div>
				)}

				{widget?.type == "hero_quotes" && (
					<div style={{ transform: "scale(0.8)" }}>
						<HeroQuotes />
					</div>
				)}

				{widget?.target && (
					<div className="absolute bottom-0 left-0">
						<span className="px-2 py-1 rounded-tr-[6px] bg-gray-200 text-gray-400 text-[12px] font-normal cursor-pointer">
							Target page: {widget?.target}
						</span>
					</div>
				)}

				<div className="absolute bottom-0 right-0">
					<span className="px-2 py-1 rounded-tl-[6px] bg-[#4dff073e] text-[#0d7d019a] text-[12px] font-normal cursor-pointer">
						{widget?.type == "basic_wall" && "Wall of Love"}
						{widget?.type == "rolling_wall" && "Carousel"}
						{widget?.type == "social_star" && "Social Star"}
						{widget?.type == "rating_badge" && "Rating Badge"}
						{widget?.type == "avatars" && "Avatars"}
					</span>
				</div>
			</div>
			<div className="bottom w-full py-4 px-5">
				<div className="flex justify-between items-center mb-[10px]">
					<div className="flex flex-col gap-[3px]">
						<span className="text-gray-700 text-[13px]">
							{widget?.name}
						</span>
						<span className="text-[11px] text-gray-400 font-[400]">
							Edited {timeAgo(widget?.updatedAt)}
						</span>
					</div>
					<div className="flex items-center gap-2">
						<ShareWidgetModal widgetUrl={widget?.url || ""}>
							<div className="hover:bg-gray-200 cursor-pointer rounded-[6px] p-1 flex gap-2 items-center">
								<span className="text-[12px] text-[#9f9f9f]">
									Share
								</span>
								<Share2 className="text-gray-600" size={15} />
							</div>
						</ShareWidgetModal>

						<Link
							target="_blank"
							className="hover:bg-gray-200 cursor-pointer rounded-[6px] p-1 flex gap-2 items-center"
							href={`/dashboard/${workspaceId}/share/edit/${widget?.url}`}
						>
							<span className="text-[12px] text-[#9f9f9f]">
								Edit
							</span>
							<ExternalLink className="text-gray-600" size={15} />
						</Link>
						<WidgetValidationTooltip 
							widgetType={widget?.type} 
							testimonialsCount={widget?.testimonials?.length || 0} 
						/>
					</div>
				</div>
				<div className="bg-[#dcdcdc34] rounded-[10px] px-3 py-[5px] flex items-center gap-2">
					<div className="flex-[0.33] flex flex-col gap-1">
						<span className="text-gray-400 text-[12px]">Views</span>
						<div className="flex items-center gap-1">
							<Eye className="text-gray-400" size={20} />{" "}
							<p className="text-gray-400 text-[16px] font-semibold">
								{widget?.metrics?.find(
									(m: any) => m.actionType == "view"
								)?.total || 0}
							</p>
						</div>
					</div>
					<div className="flex-[0.33] flex flex-col gap-1">
						<span className="text-gray-400 text-[12px]">
							Interactions
						</span>
						<div className="flex items-center gap-1">
							<MousePointerClick
								className="text-gray-400"
								size={20}
							/>{" "}
							<p className="text-gray-400 text-[16px] font-semibold">
								{widget?.metrics?.find(
									(m: any) => m.actionType == "interaction"
								)?.total || 0}
							</p>
						</div>
					</div>
					<div className="flex-[0.33] flex flex-col gap-1">
						<span className="text-gray-400 text-[12px]">
							Bounce Rate
						</span>
						<div className="flex items-center gap-1">
							<Percent className="text-gray-400" size={20} />{" "}
							<p className="text-gray-400 text-[16px] font-semibold">
								{widget?.metrics?.find(
									(m: any) => m.actionType == "bounce"
								)?.total || 0}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Widget;
