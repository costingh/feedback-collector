import clsx from "clsx";
import StarsRating from "@/components/stars/stars-rating";

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
			{testimonials?.length > 0 ? (
				<div
					className={clsx(
						"w-full flex flex-row items-start gap-3",
						transition &&
							"transition-transform duration-300 ease-in-out group-hover:scale-110"
					)}
				>
					<div className="-space-x-5 avatar-group justy-start">
						{testimonials.slice(0, 4).map((t: any) => (
							<div className="avatar w-12 h-12" key={t.id}>
								<img
									alt="User"
									// fetchPriority="high"
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
					<div className="flex flex-col justify-center items-start">
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
							by thousands of customers
						</div>
					</div>
				</div>
			) : (
				<div className="w-full h-full flex items-center justify-center">
					<div className="flex flex-col items-center justify-center max-w-lg text-center">
						<h1 className="text-black font-700 text-[20px] mb-2">
							Oops, looks like you didnt link any testimonials to
							this widget
							<br/><br/>
							Please go to the "Creator" sidebar menu and link some
						</h1>
					</div>
				</div>
			)}
		</>
	);
}

export default Avatars;
