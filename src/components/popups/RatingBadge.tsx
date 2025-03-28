import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { formatNumber } from "@/lib/utils";
import StarsRating from "@/components/stars/stars-rating";

function RatingBadge({
	transition,
	testimonials,
}: {
	transition?: boolean;
	testimonials: any;
}) {
	const computeAverageRating = () => {
		if (!testimonials) return 0;

		return testimonials?.reduce(
				(acc: number, cur: any) => acc + cur.stars,
				0
			) / (testimonials?.length || 1)
	};

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
					{computeAverageRating().toFixed(1)}
				</div>
				<div className="">
					<div className="block">
						<StarsRating value={Math.floor(computeAverageRating())} readonly />
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
