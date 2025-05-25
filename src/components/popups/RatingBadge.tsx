import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { formatNumber } from "@/lib/utils";
import StarsRating from "@/components/stars/stars-rating";
import NoTestimonialsLinkedMessage from "../widgets/NoTestimonialsLinkedMessage";

function RatingBadge({
	transition,
	widget
}: {
	transition?: boolean;
	widget: any;
}) {

	return (
		<div
			className={clsx(
				"",
				transition &&
				"transition-transform duration-300 ease-in-out group-hover:scale-110"
			)}
		>
			{widget?._count?.testimonials > 0 ? (
				<div className="flex items-center gap-2">
					<div className="number py-4 px-4 rounded-[6px] flex items-center justify-center text-[18px] font-semibold" style={{ backgroundColor: widget?.cardBackground, color: widget?.secondaryTextColor }}>
						{widget?.avgStars?.toFixed(1) || 0.0}
					</div>
					<div className="">
						<div className="block">
							<StarsRating
								value={Math.floor(widget?.avgStars || 0)}
								readonly
								variant={widget?.starsVariant}
                                color={widget?.starsColor}
							/>
						</div>
						<span className="text-[14px] font-normal" style={{ color: widget?.primaryTextColor }}>
							from {formatNumber(widget?._count?.testimonials || 0)}{" "}
							testimonials
						</span>
					</div>
				</div>
			) : (
				<NoTestimonialsLinkedMessage widget={widget} />
			)}
		</div>
	);
}

export default RatingBadge;
