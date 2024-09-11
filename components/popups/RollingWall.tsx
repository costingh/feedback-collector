import React from "react";
import MinimalistReview from "./MinimalistReview";

const reviews = [
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
	1, 1, 1, 1, 1, 1, 1, 1, 1,
];

function RollingWall() {
    // Split reviews into two groups for two rows
	const half = Math.ceil(reviews.length / 2);
	const firstRowReviews = reviews.slice(0, half);
	const secondRowReviews = reviews.slice(half);

	return (
		<div className="relative m-auto w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
			<div className="flex flex-col gap-y-[60px]">
				{/* First Row */}
				<div className="slider-content flex gap-[40px]">
					{firstRowReviews.map((_, index) => (
						<div
							className="slide flex w-[400px] items-center justify-center"
							key={index}
						>
							<MinimalistReview />
						</div>
					))}
                    {firstRowReviews.map((_, index) => (
                        <div
                            className="slide flex w-[400px] items-center justify-center"
                            key={index + firstRowReviews.length}
                        >
                            <MinimalistReview />
                        </div>
                    ))}
				</div>

				{/* Second Row */}
				<div className="slider-content flex gap-[40px] ml-[100px]">
					{secondRowReviews.map((_, index) => (
						<div
							className="slide flex w-[400px] items-center justify-center"
							key={index}
						>
							<MinimalistReview />
						</div>
					))}
                    {secondRowReviews.map((_, index) => (
                        <div
                            className="slide flex w-[400px] items-center justify-center"
                            key={index + secondRowReviews.length}
                        >
                            <MinimalistReview />
                        </div>
                    ))}
				</div>
			</div>
		</div>
	);
}

export default RollingWall;
