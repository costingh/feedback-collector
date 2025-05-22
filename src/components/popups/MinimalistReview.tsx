import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StarsRating from "@/components/stars/stars-rating";

function MinimalistReview({ review, widget, style }: { review: any, widget: any, style?: React.CSSProperties }) {
	return (
		<div
			className="rounded-[20px] border-gray-200 border-[1px] py-4 px-8 bg-white w-[400px]"
			style={{
				...(widget?.cardBackground && { backgroundColor: widget?.cardBackground }),
				...(widget?.cardBorderColor && { borderColor: widget?.cardBorderColor }),
				...style,
			}}
		>
			<p className="text-[15px] font-normal" style={widget?.primaryTextColor ? { color: widget?.primaryTextColor } : {}}>
				{review?.message || 'You have not linked any testimonials'}
			</p>

			<div className="flex mt-5 items-center justify-between">
				<div className="flex items-center gap-2">
					<Avatar>
						<AvatarImage src={review?.avatar} />
						<AvatarFallback>{review?.name?.slice(0, 2) || 'N/A'}</AvatarFallback>
					</Avatar>
					<div className="flex flex-col">
						<p className="text-zinc-700 text-[14px] font-[600]" style={widget?.secondaryTextColor ? { color: widget?.secondaryTextColor } : {}}>
							{review?.name}
						</p>
						<p className="text-zinc-700 text-[12px] font-[400]" style={widget?.thirdTextColor ? { color: widget?.thirdTextColor } : {}}>
							{review?.jobTitle}
						</p>
					</div>
				</div>
				<StarsRating readonly={true} value={Math.floor(review?.stars || 0)} />
			</div>
		</div>
	);
}

export default MinimalistReview;
