import clsx from "clsx";
import StarsRating from "@/components/stars/stars-rating";
import { Widget } from "@prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { needsDarkBackground } from "@/lib/utils";

function SimpleAvatarsVariant({
	transition,
	testimonials,
	widget,
}: {
	transition?: boolean;
	testimonials: any;
	widget: (Widget & { _count: { testimonials: number } }) | null | undefined;
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
			{testimonials?.length > 0 ? (
				<div
					className={clsx(
						"w-full flex flex-col sm:flex-row items-center sm:items-start gap-3",
						transition &&
							"transition-transform duration-300 ease-in-out group-hover:scale-110"
					)}
				>
					<div className="flex sm:-space-x-5 avatar-group justify-center sm:justify-start">
						{testimonials.slice(0, 3).map((t: any) => (
							<Avatar key={t.id}>
								<AvatarImage src={t.avatar} />
								<AvatarFallback>
									{t?.name?.slice(0, 2) || "N/A"}
								</AvatarFallback>
							</Avatar>
						))}
					</div>
					<div className="flex flex-col justify-center items-center sm:items-start">
						<div className="block h-[18px] sm:h-[22px]">
							<StarsRating
								value={Math.floor(computeAverageRating() || 0)}
								readonly
								scale={0.7}
								marginLeft={-15}
							/>
						</div>
						<div
							className="text-base text-[12px] sm:text-[14px] text-center sm:text-left"
							style={{ color: widget?.primaryTextColor }}
						>
							{widget?.widgetDescription ||
								"Trusted by thousands of customers"}
						</div>
					</div>
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

export default SimpleAvatarsVariant;
