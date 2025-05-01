import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { formatNumber } from "@/lib/utils";
import StarsRating from "@/components/stars/stars-rating";
import NoTestimonialsLinkedMessage from "../widgets/NoTestimonialsLinkedMessage";

function RatingBadge({
	transition,
	testimonials,
	numberOfReviews
}: {
	transition?: boolean;
	testimonials: any;
	numberOfReviews: number;
}) {
	const computeAverageRating = () => {
		if (!testimonials) return 0;

		return (
			testimonials?.reduce(
				(acc: number, cur: any) => acc + cur.stars,
				0
			) / (testimonials?.length || 1)
		);
	};

	return (
		<div
			className={clsx(
				"",
				transition &&
					"transition-transform duration-300 ease-in-out group-hover:scale-110"
			)}
		>
			{numberOfReviews > 0 ? (
				<div className="flex items-center gap-2">
					<div className="number text-gray-50 py-4 px-4 rounded-[6px] bg-[#000] flex items-center justify-center text-[18px] font-semibold">
						{computeAverageRating().toFixed(1)}
					</div>
					<div className="">
						<div className="block">
							<StarsRating
								value={Math.floor(computeAverageRating())}
								readonly
							/>
						</div>
						<span className="text-[#000] text-[14px] font-normal">
							from {formatNumber(testimonials?.length || 0)}{" "}
							testimonials
						</span>
					</div>
				</div>
			) : (
				<NoTestimonialsLinkedMessage />
			)}
		</div>
	);
}

export default RatingBadge;
