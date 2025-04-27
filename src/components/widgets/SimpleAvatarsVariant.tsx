import clsx from "clsx";
import StarsRating from "@/components/stars/stars-rating";
import Image from "next/image";
import { Widget } from "@prisma/client";

function SimpleAvatarsVariant({
	transition,
	testimonials,
	widget
}: {
	transition?: boolean;
	testimonials: any;
	widget: Widget | null | undefined;
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
						{testimonials.slice(0, 4).map((t: any) => (
							<div className="avatar w-10 h-10 sm:w-12 sm:h-12" key={t.id}>
								<Image
									alt="User"
									src={t.avatar}
									width={50}
									height={50}
									priority
									className="w-full"
									style={{ color: 'transparent' }}
								/>
							</div>
						))}
					</div>
					<div className="flex flex-col justify-center items-center sm:items-start">
						<div className="block h-[18px] sm:h-[22px]">
							<StarsRating
								value={computeAverageRating() || 0}
								readonly
								scale={0.7}
								marginLeft={-15}
							/>
						</div>
						<div className="text-base text-[12px] sm:text-[14px] text-center sm:text-left" style={{ color: widget?.primaryTextColor }}>
							{/* <span className="font-semibold text-base-content">
								Trusted
							</span>{" "}
							by thousands of customers */}
							{widget?.widgetDescription || 'Trusted by thousands of customers'}
						</div>
					</div>
				</div>
			) : (
				<div className="w-full h-full flex items-center justify-center p-4">
					<div className="flex flex-col items-center justify-center max-w-[280px] sm:max-w-lg text-center">
						<h1 className="text-black font-700 text-[15px] sm:text-[20px] mb-2">
							Oops, looks like you didnt link any testimonials to this widget
						</h1>
						<p className="text-gray-600 text-[14px] sm:text-[16px]">
							Please go to the "Creator" sidebar menu and link some
						</p>
					</div>
				</div>
			)}
		</>
	);
}

export default SimpleAvatarsVariant;
