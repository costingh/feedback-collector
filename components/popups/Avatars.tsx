import React, { useEffect, useState } from "react";
import StarsRating from "../stars-rating";
import clsx from "clsx";
import { formatNumber } from "@/lib/utils";

function Avatars({
	transition,
	testimonials,
}: {
	transition?: boolean;
	testimonials: any;
}) {
	const computeAverageRating = () => {
		if (!testimonials) return 0;

		return Math.floor(
			testimonials?.reduce(
				(acc: number, cur: any) => acc + cur.stars,
				0
			) / (testimonials?.length || 1)
		);
	};

	return (
		<>
			{testimonials.length != 0 ? (
				<div
					className={clsx(
						"flex flex-col md:flex-row justify-center items-center md:items-start gap-3 w-[464px]",
						transition &&
							"transition-transform duration-300 ease-in-out group-hover:scale-110"
					)}
				>
					<div className="-space-x-5 avatar-group justy-start">
						{testimonials.slice(0, 4).map((t: any) => (
							<div className="avatar w-12 h-12" key={t.id}>
								<img
									alt="User"
									fetchPriority="high"
									width="50"
									height="50"
									decoding="async"
									data-nimg="1"
									style={{ color: "transparent" }}
									src={t.avatar}
									className="w-full"
								/>
							</div>
						))}
					</div>
					<div className="flex flex-col justify-center items-center md:items-start">
						<div className="block">
							<StarsRating
								value={computeAverageRating() || 0}
								readonly
								scale={0.8}
								marginLeft="-15"
							/>
						</div>
						<div className="text-base text-base-content/80 !text-[13px]">
							<span className="font-semibold text-base-content">
								Trusted
							</span>{" "}
							by hundreds of growing brands and creators
						</div>
					</div>
				</div>
			) : (
				<div className="w-full h-full flex items-center justify-center">
					<div className="flex flex-col items-center justify-center max-w-lg text-center">
						<h1 className="text-black font-700 text-[20px] mb-2">
							Oops, looks like you didnt link any testimonials to
							this widget
						</h1>
					</div>
				</div>
			)}
		</>
	);
}

export default Avatars;
