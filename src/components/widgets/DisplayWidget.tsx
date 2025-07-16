import React from 'react'
import RollingWall from '../popups/RollingWall'
import BasicWall from '../popups/BasicWall'
import RatingBadge from '../popups/RatingBadge'
import SocialStar from '../popups/SocialStar'
import Avatars from '../popups/Avatars'
import MinimalistReview from '../popups/MinimalistReview'
import HeroQuotes from '../popups/HeroQuotes'
import { cn } from '@/lib/utils'

function DisplayWidget({
	widget,
	setPage,
	isFetching,
	paginationData,
	className,
	scale,
	marginTop,
	style
}: {
	widget: any
	setPage: any
	isFetching: boolean
	paginationData?: any
	className?: string
	scale?: number
	marginTop?: number
	style?: React.CSSProperties
}) {
	return (
		<div className={cn("w-full flex items-start justify-center", className)}>
			{widget && (
				<>
					{widget.type == 'basic_wall' && (
						<BasicWall
							widget={{
								...widget,
								deviceWidth: widget.deviceWidth,
							}}
							setPage={setPage}
							isFetching={isFetching}
							paginationData={paginationData}
							scale={scale}
							marginTop={marginTop}
						/>
					)}

					{widget.type == 'rolling_wall' &&
						(widget?.testimonials?.length > 10 ? (
							<RollingWall
								testimonials={widget?.testimonials}
								widget={widget}
							/>
						) : (
							<BasicWall
								widget={{
									...widget,
									deviceWidth: widget.deviceWidth,
								}}
								setPage={setPage}
								isFetching={isFetching}
								paginationData={paginationData}
								scale={scale}
								marginTop={marginTop}
							/>
						))}

					{widget.type == 'rating_badge' && (
						<RatingBadge widget={widget} />
					)}

					{widget.type == 'social_star' && (
						<SocialStar
							testimonials={widget?.testimonials}
							numberOfReviews={paginationData?.total}
							widget={widget}
							style={style}
						/>
					)}

					{widget.type == 'avatars' && (
						<Avatars
							testimonials={widget?.testimonials}
							widget={widget}
							numberOfReviews={paginationData?.total}
							style={style}
						/>
					)}

					{widget.type == 'minimalist_review' && (
						<MinimalistReview
							review={widget?.testimonials?.[0]}
							widget={widget}
						/>
					)}

					{widget.type == 'hero_quotes' && (
						<HeroQuotes widget={widget} />
					)}
				</>
			)}
		</div>
	)
}

export default DisplayWidget
