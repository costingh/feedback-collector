import clsx from "clsx";
import StarsRating from "@/components/stars/stars-rating";
import Image from "next/image";
import { Widget } from "@prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatNumberOfReviews, needsDarkBackground } from "@/lib/utils";

function EliteAvatarsVariant({
	transition,
	testimonials,
	widget,
	numberOfReviews,
}: {
	transition?: boolean;
	testimonials: any;
	widget: (Widget & { _count: { testimonials: number } }) | null | undefined;
	numberOfReviews: string;
}) {
	// TODO: compute in backend
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
			{testimonials?.length >= 3 ? (
				<div
					className={clsx(
						"w-full flex flex-row items-center justify-center gap-[15px]",
						transition &&
							"transition-transform duration-300 ease-in-out group-hover:scale-110"
					)}
				>
					<Image
						src="/images/avatars-testimonial-grain.png"
						alt="Elite Widget"
						width={50}
						height={50}
					/>
					<div className="flex flex-col justify-center items-center sm:items-start">
						<div className="block h-[18px] sm:h-[22px] self-center mb-[10px]">
							<StarsRating
								value={Math.floor(computeAverageRating() || 0)}
								readonly
								scale={0.7}
							/>
						</div>
						<div
							className={clsx(
								"text-[12px] sm:text-[14px] text-center mb-[12px]",
								needsDarkBackground(widget) &&
									(!widget?.primaryTextColor ||
										widget?.primaryTextColor ==
											"transparent")
									? "text-gray-300"
									: "text-black"
							)}
							style={{ color: widget?.primaryTextColor }}
						>
							{widget?.widgetDescription ||
								`${computeAverageRating()?.toFixed(
									1
								)} rating based on ${
									widget?._count?.testimonials
								} reviews`}
						</div>
						<div className="flex sm:-space-x-5 avatar-group justify-center sm:justify-start self-center">
							{testimonials.slice(0, 3).map((t: any) => (
								<Avatar key={t.id}>
									<AvatarImage src={t.avatar} />
									<AvatarFallback>
										{t?.name?.slice(0, 2) || "N/A"}
									</AvatarFallback>
								</Avatar>
							))}

							{(widget?._count?.testimonials || 0) > 3 && (
								<Avatar>
									<AvatarFallback>
										{formatNumberOfReviews((widget?._count?.testimonials || 0) - 3)}
									</AvatarFallback>
								</Avatar>
							)}
						</div>
					</div>
					<Image
						src="/images/avatars-testimonial-grain.png"
						alt="Elite Widget"
						width={50}
						height={50}
						style={{ transform: "scaleX(-1)" }}
					/>
				</div>
			) : (
				<div className="w-full h-full flex items-center justify-center p-4">
					<div className="flex flex-col items-center justify-center max-w-[280px] sm:max-w-lg text-center">
						<h1
							className={clsx(
								"font-700 text-[15px] sm:text-[20px] mb-2",
								needsDarkBackground(widget)
									? "text-gray-300"
									: "text-black"
							)}
						>
							Oops, looks like you didnt link any testimonials to
							this widget
						</h1>
						<p
							className={clsx(
								"text-gray-600 text-[14px] sm:text-[16px]",
								needsDarkBackground(widget)
									? "text-gray-400"
									: "text-black"
							)}
						>
							Please go to the "Creator" sidebar menu and link
							some
						</p>
					</div>
				</div>
			)}
		</>
	);
}

export default EliteAvatarsVariant;
