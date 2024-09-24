import React from "react";
import StarsRating from "../stars-rating";
import Image from "next/image";
import clsx from "clsx";

function SocialStar({
	transition,
	testimonials,
}: {
	transition?: boolean;
	testimonials: any;
}) {
	return (
		<div className="w-full flex flex-col items-center gap-4">
			{testimonials.map((t: any) => (
				<div
					key={t.id}
					className={clsx(
						"flex items-start gap-3 p-2 rounded-[20px] bg-white w-[600px]",
						transition &&
							"transition-transform duration-300 ease-in-out group-hover:scale-110"
					)}
				>
					<Image
						width={100}
						height={100}
						alt=""
						src={t?.avatar || "/avatar-placeholder.jpg"}
						className="rounded-[20px]"
					/>
					<div>
						<div className="block">
							<StarsRating
								value={t?.stars || 0}
								readonly
							/>
						</div>
						<p className="text-gray-800 font-normal text-[15px]">
							{t?.message}
						</p>
						<span className="text-gray-400 font-normal text-[12px]">
							{t.name} /{" "}
							<span className="text-blue-300">{t?.jobTitle || t?.company || t?.email}</span>
						</span>
					</div>
				</div>
			))}
		</div>
	);
}

export default SocialStar;
