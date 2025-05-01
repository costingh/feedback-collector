import React from "react";
import StarsRating from "@/components/stars/stars-rating";
import Image from "next/image";
import clsx from "clsx";
import NoTestimonialsLinkedMessage from "../widgets/NoTestimonialsLinkedMessage";

function SocialStar({
	transition,
	testimonials,
	numberOfReviews,
}: {
	transition?: boolean;
	testimonials: any;
	numberOfReviews: number;
}) {
	return (
		<>
			{numberOfReviews > 0 ? (
				<div className="w-full flex flex-col items-center gap-4">
					{testimonials.map((t: any) => (
						<div
							key={t.id}
							className={clsx(
								"flex items-start gap-3 p-2 rounded-[20px] bg-white w-full max-w-[600px]",
								transition &&
									"transition-transform duration-300 ease-in-out group-hover:scale-110"
							)}
						>
							<Image
								width={100}
								height={100}
								alt=""
								src={
									t?.avatar ||
									"/images/avatar-placeholder.jpg"
								}
								className="rounded-[20px]"
							/>
							<div>
								<div className="block">
									<StarsRating
										value={t?.stars || 0}
										readonly
									/>
								</div>
								<p className="text-gray-800 font-normal text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]">
									{t?.message}
								</p>

								<span className="text-gray-400 font-normal text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px]">
									{t.name} /{" "}
									<span className="text-blue-300 text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px]">
										{t?.jobTitle || t?.company || t?.email}
									</span>
								</span>
							</div>
						</div>
					))}
				</div>
			) : (
				<NoTestimonialsLinkedMessage />
			)}
		</>
	);
}

export default SocialStar;
