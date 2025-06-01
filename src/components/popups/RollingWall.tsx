import React from 'react'
import MinimalistReview from './MinimalistReview'
import clsx from 'clsx'

function RollingWall({
	transition,
	testimonials,
	widget,
}: {
	transition?: boolean
	testimonials: any
	widget: any
}) {
	// Split reviews into two groups for two rows
	const half = Math.ceil(testimonials.length / 2)
	const firstRowReviews = testimonials.slice(0, half)
	const secondRowReviews = testimonials.slice(half)

	return (
		<div className="relative m-auto w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
			<div
				className={clsx(
					'flex flex-col gap-y-[60px]',
					transition &&
						'transition-transform duration-300 ease-in-out group-hover:scale-110',
				)}
			>
				{/* First Row */}
				<div className="slider-content flex gap-[40px]">
					{firstRowReviews.map((review: any, index: number) => (
						<div
							className="slide flex w-[400px] items-center justify-center"
							key={index}
						>
							<MinimalistReview review={review} widget={widget} />
						</div>
					))}
					{firstRowReviews.map((review: any, index: number) => (
						<div
							className="slide flex w-[400px] items-center justify-center"
							key={index + firstRowReviews.length}
						>
							<MinimalistReview review={review} widget={widget} />
						</div>
					))}
				</div>

				{/* Second Row */}
				<div className="slider-content flex gap-[40px] ml-[100px]">
					{secondRowReviews.map((review: any, index: number) => (
						<div
							className="slide flex w-[400px] items-center justify-center"
							key={index}
						>
							<MinimalistReview review={review} widget={widget} />
						</div>
					))}
					{secondRowReviews.map((review: any, index: number) => (
						<div
							className="slide flex w-[400px] items-center justify-center"
							key={index + secondRowReviews.length}
						>
							<MinimalistReview review={review} widget={widget} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default RollingWall
