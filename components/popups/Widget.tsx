import { timeAgo } from "@/lib/utils";
import {
	ExternalLink,
	Eye,
	Link,
	MousePointerClick,
	Percent,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import RollingWall from "./RollingWall";
import RatingBadge from "./RatingBadge";
import SocialStar from "./SocialStar";
import HeroQuotes from "./HeroQuotes";

function Widget({handleGoToWidget, t}: {t: any, handleGoToWidget: any}) {
	return (
		<div className="border-[1px] border-gray-200 rounded-[12px] overflow-hidden">
			<div className="top w-full h-[250px] bg-gray-100 flex items-center justify-center">
				{t?.type == "basic_wall" && (
					<Image
						src="/widgets/basic-wall.png"
						alt={t?.type}
						width={800}
						height={800}
						className="max-w-full w-full max-h-full"
					/>
				)}

				{t?.type == 'rolling_wall' && <div style={{transform: 'scale(0.4)'}}>
                    <RollingWall/>
                </div>}

				{t?.type == 'rating_badge' && <div>
                    <RatingBadge/>
                </div>}

				{t?.type == 'social_star' && <div style={{transform: 'scale(0.8)'}}>
                    <SocialStar/>
                </div>}

				{t?.type == 'hero_quotes' && <div style={{transform: 'scale(0.8)'}}>
                    <HeroQuotes/>
                </div>}
			</div>
			<div className="bottom w-full py-4 px-5">
				<div className="flex justify-between items-center">
					<span className="text-gray-700 text-[14px]">{t?.name}</span>
					<div className="flex items-center gap-2">
						<div
							className="hover:bg-gray-200 cursor-pointer rounded-[6px] p-1"
							onClick={() => handleGoToWidget(t?.url)}
						>
							<Link className="text-gray-600" size={15} />
						</div>
						<div
							className="hover:bg-gray-200 cursor-pointer rounded-[6px] p-1"
							onClick={() => handleGoToWidget(t?.url)}
						>
							<ExternalLink className="text-gray-600" size={15} />
						</div>
						<span className="px-2 py-1 rounded-[6px] bg-[#4dff073e] text-[#0d7d019a] text-[12px] font-normal cursor-pointer">
							{t?.type == 'basic_wall' && 'Wall of Love'}
							{t?.type == 'rolling_wall' && 'Carousel'}
							{t?.type == 'social_star' && 'Social Star'}
							{t?.type == 'rating_badge' && 'Rating Badge'}
						</span>
					</div>
				</div>
				<div className="flex items-center justify-between gap-2 my-4 flex-wrap">
					<span className="px-2 py-1 rounded-[6px] bg-[#dcdcdc34] text-gray-400 text-[12px] font-normal cursor-pointer">
						{process.env.NEXT_PUBLIC_APP_DOMAIN + '/share' + t?.url}
					</span>
					<div className="flex items-center gap-2">
						{t?.target && (
							<span className="px-2 py-1 rounded-[6px] bg-[#dcdcdc34] text-gray-400 text-[12px] font-normal cursor-pointer">
								{t?.target}
							</span>
						)}
						<span className="text-[12px] text-gray-400 font-[400]">
							Edited {timeAgo(t?.updatedAt)}
						</span>
					</div>
				</div>
				<div className="bg-[#dcdcdc34] rounded-[10px] px-3 py-[5px] flex items-center gap-2">
					<div className="flex-[0.33] flex flex-col gap-1">
						<span className="text-gray-400 text-[12px]">Views</span>
						<div className="flex items-center gap-1">
							<Eye className="text-gray-400" size={20} />{" "}
							<p className="text-gray-400 text-[16px] font-semibold">
								{t?.metrics?.find((m : any) => m.actionType == "view")
									?.total || 0}
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
								{t?.metrics?.find(
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
								{t?.metrics?.find(
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
