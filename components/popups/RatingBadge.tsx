import React, { useEffect, useState } from "react";
import StarsRating from "../stars-rating";
import clsx from "clsx";
import { formatNumber } from "@/lib/utils";

function RatingBadge({
	transition,
	testimonials,
}: {
	transition?: boolean;
	testimonials: any;
}) {
	const [averageRating, setAverageRating] = useState(0);

	useEffect(() => {
		setAverageRating(
			testimonials?.reduce(
				(acc: number, cur: any) => acc + cur.stars,
				0
			) / (testimonials?.length || 1)
		);
	}, [testimonials]);

	return (
		<div
			className={clsx(
				"",
				transition &&
					"transition-transform duration-300 ease-in-out group-hover:scale-110"
			)}
		>
			<div className="flex items-center gap-2">
				<div className="number text-gray-50 py-4 px-4 rounded-[6px] bg-[#000] flex items-center justify-center text-[18px] font-semibold">
					{averageRating.toFixed(1)}
				</div>
				<div className="">
					<div className="block">
						<StarsRating value={Math.floor(averageRating)} readonly />
					</div>
					<span className="text-[#000] text-[14px] font-normal">
						from {formatNumber(testimonials?.length || 0)}{" "}
						testimonials
					</span>
				</div>
			</div>
		</div>
	);
}

export default RatingBadge;
