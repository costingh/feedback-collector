import clsx from "clsx";
import StarsRating from "@/components/stars/stars-rating";
import Image from "next/image";
import { Widget } from "@prisma/client";

function EliteAvatarsVariant({
	transition,
	testimonials,
	widget,
    numberOfReviews
}: {
	transition?: boolean;
	testimonials: any;
	widget: Widget | null | undefined;
    numberOfReviews: string
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
								value={computeAverageRating() || 0}
								readonly
								scale={0.7}
							/>
						</div>
						<div
							className="text-base text-[12px] sm:text-[14px] text-center mb-[12px]"
							style={{ color: widget?.primaryTextColor }}
						>
							{widget?.widgetDescription ||
								`${computeAverageRating()?.toFixed(1)} rating based on ${numberOfReviews} reviews`}
						</div>
						<div className="flex sm:-space-x-5 avatar-group justify-center sm:justify-start self-center">
							{testimonials.slice(0, 3).map((t: any) => (
								<div
									className="avatar w-10 h-10 sm:w-12 sm:h-12 border-[1px]"
									key={t.id}
								>
									<Image
										alt="User"
										src={t.avatar}
										width={40}
										height={40}
										priority
										className="w-full text-gray-400"
									/>
								</div>
							))}

							{/* 
                             <Avatar key={t.id}>
                                <AvatarImage src={t.avatar} />
                                <AvatarFallback>{t?.name?.slice(0,2) || 'N/A'}</AvatarFallback>
                            </Avatar>
                             */}

							<div className="avatar w-10 h-10 sm:w-12 sm:h-12 text-zinc-700 font-semibold text-[12px] leading-[15px] text-center flex items-center justify-center border-[1px] bg-gray-200">
								+200
							</div>
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
						<h1 className="text-black font-700 text-[15px] sm:text-[20px] mb-2">
							Oops, looks like you didnt link any testimonials to
							this widget
						</h1>
						<p className="text-gray-600 text-[14px] sm:text-[16px]">
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
