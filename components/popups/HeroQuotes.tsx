import React from "react";
import StarsRating from "../stars-rating";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function HeroQuotes() {
	return (
		<div className="flex justify-center items-center gap-3 p-2 w-[400px]">
			<Avatar>
				<AvatarImage src={"/avatar-placeholder.jpg"} />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<p className="text-gray-900 font-bold text-[15px]">
				"I've already seen an increase in conversion rate and revenue"
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
