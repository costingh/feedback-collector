import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StarsRating from "../stars-rating";

function MinimalistReview() {
	return (
		<div className="rounded-[20px] border-gray-200 border-[1px] py-4 px-8 bg-white w-[400px]">
			<p className="text-zinc-700 text-[15px] font-normal">
				The real-time connection to current events and the ability to
				publish on WordPress with a single click makes it all the
				better. I&apos;ve tried competitors and I&apos;m a paying ChatGPT user,
				but <span className="font-bold text-black">nothing beats Journalist AI for content writing.</span>
			</p>
			<div className="flex mt-5 items-center justify-between">
				<div className="flex items-center gap-2">
					<Avatar>
						<AvatarImage src="/company-placeholder-img.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<p className="text-zinc-700 text-[14px] font-[600] mb-1 mt-2">
						Todd Daviau
					</p>
				</div>
				<StarsRating readonly={true} value={5} />
			</div>
		</div>
	);
}

export default MinimalistReview;
