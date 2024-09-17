import React from "react";
import StarsRating from "../stars-rating";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import clsx from "clsx"; // Import clsx for easier conditional class management

function HeroQuotes({ transition }: { transition?: boolean }) {
	return (
		<div
			className={clsx(
				"flex justify-center items-center gap-3 p-2 w-[400px]",
				transition &&
					"transition-transform duration-300 ease-in-out group-hover:scale-110"
			)}
		>
			<Avatar>
				<AvatarImage src={"/avatar-placeholder.jpg"} />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<p className="text-gray-900 font-bold text-[15px]">
				&quot;I&apos;ve already seen an increase in conversion rate and
				revenue&quot;
			</p>
			<div className="block">
				<StarsRating
					value={5}
					readonly
					style={{ transform: "scale(0.8)", marginLeft: "-15px" }}
				/>
			</div>

			<span className="text-gray-400 font-normal text-[12px]">
				Jay Claude
			</span>
			<span className="text-blue-300">@jayclouse</span>
		</div>
	);
}

export default HeroQuotes;
