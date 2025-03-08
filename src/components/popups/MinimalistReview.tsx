import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StarsRating from "@/components/stars/stars-rating";

function MinimalistReview({review} : {review: any}) {
	return (
		<div className="rounded-[20px] border-gray-200 border-[1px] py-4 px-8 bg-white w-[400px]">
			<p className="text-zinc-700 text-[15px] font-normal">
				{review?.message}
			</p>
			<div className="flex mt-5 items-center justify-between">
				<div className="flex items-center gap-2">
					<Avatar>
						<AvatarImage src="/company-placeholder-img.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<p className="text-zinc-700 text-[14px] font-[600] mb-1 mt-2">
						{review?.name}
					</p>
				</div>
				<StarsRating readonly={true} value={review?.stars} />
			</div>
		</div>
	);
}

export default MinimalistReview;
