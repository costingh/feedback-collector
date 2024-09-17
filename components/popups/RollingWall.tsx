import React from "react";
import MinimalistReview from "./MinimalistReview";
import clsx from "clsx";

const reviews = [
	{
	  name: "Alice Johnson",
	  stars: 5,
	  message:
		"Amazing service! The platform is easy to use, and the results were immediate. My team productivity has improved greatly. Highly recommended!",
	},
	{
	  name: "Michael Brown",
	  stars: 4,
	  message:
		"Great features, but the support could be faster. Overall, it's been a positive experience and well worth the price.",
	},
	{
	  name: "Sophia Martinez",
	  stars: 5,
	  message:
		"This tool has been a game changer for my business. It’s reliable and incredibly efficient. I can’t imagine going back to the old way of working.",
	},
	{
	  name: "James Lee",
	  stars: 3,
	  message:
		"It works, but the user interface could be better. It’s a solid product, but there’s room for improvement in terms of usability.",
	},
	{
	  name: "Olivia Davis",
	  stars: 5,
	  message:
		"Fantastic platform! The customization options are excellent, and the customer support team is very helpful. Five stars all the way!",
	},
	{
	  name: "William Thompson",
	  stars: 4,
	  message:
		"Good product, but customer support could be quicker. Once you get the help, they are very knowledgeable and helpful.",
	},
	{
	  name: "Emily Clark",
	  stars: 5,
	  message:
		"Best platform I’ve used! It’s fast, reliable, and has helped me stay organized. I’ve seen a big improvement in my workflow.",
	},
	{
	  name: "Liam Harris",
	  stars: 2,
	  message:
		"Disappointed. The features were not as robust as advertised, and I had issues with the setup. It needs to be more user-friendly.",
	},
	{
	  name: "Ava Scott",
	  stars: 4,
	  message:
		"A great tool overall, but there are minor bugs. It still helps me stay organized, but I’m hoping for updates to improve performance.",
	},
	{
	  name: "Daniel Taylor",
	  stars: 5,
	  message:
		"This platform delivers on all its promises. Easy to use, powerful features, and excellent customer support. Worth every penny!",
	},
];
  

function RollingWall({ transition }: { transition?: boolean }) {
	// Split reviews into two groups for two rows
	const half = Math.ceil(reviews.length / 2);
	const firstRowReviews = reviews.slice(0, half);
	const secondRowReviews = reviews.slice(half);

	return (
		<div className="relative m-auto w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
			<div
				className={clsx(
					"flex flex-col gap-y-[60px]",
					transition &&
						"transition-transform duration-300 ease-in-out group-hover:scale-110"
				)}
			>
				{/* First Row */}
				<div className="slider-content flex gap-[40px]">
					{firstRowReviews.map((review, index) => (
						<div
							className="slide flex w-[400px] items-center justify-center"
							key={index}
						>
							<MinimalistReview review={review} />
						</div>
					))}
					{firstRowReviews.map((review, index) => (
						<div
							className="slide flex w-[400px] items-center justify-center"
							key={index + firstRowReviews.length}
						>
							<MinimalistReview review={review} />
						</div>
					))}
				</div>

				{/* Second Row */}
				<div className="slider-content flex gap-[40px] ml-[100px]">
					{secondRowReviews.map((review, index) => (
						<div
							className="slide flex w-[400px] items-center justify-center"
							key={index}
						>
							<MinimalistReview review={review} />
						</div>
					))}
					{secondRowReviews.map((review, index) => (
						<div
							className="slide flex w-[400px] items-center justify-center"
							key={index + secondRowReviews.length}
						>
							<MinimalistReview review={review} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default RollingWall;
