import StarsRating from '@/components/stars/stars-rating'
import { Widget } from '@prisma/client'
import { cn } from '@/lib/utils'
import NoTestimonialsLinkedMessage from './NoTestimonialsLinkedMessage'

function InlineAvatarsVariant({
	transition,
	testimonials,
	widget,
	numberOfReviews,
}: {
	transition?: boolean
	testimonials: any
	widget:
		| (Widget & { _count: { testimonials: number } } & { avgStars: number })
		| null
		| undefined
	numberOfReviews: string
}) {
	return (
		<>
			{testimonials?.length >= 3 ? (
				<div className="flex-col">
					<div
						className={cn(
							'flex flex-wrap items-center justify-center gap-1 text-[12px] font-light lg:gap-3 lg:text-lg',
						)}
						style={{ color: widget?.primaryTextColor }}
					>
						<div>
							<span className="inline-flex">Rated</span>{' '}
							"Excellent"{' '}
							<span className="font-bold">
								{widget?.avgStars?.toFixed(1)}/5
							</span>
						</div>
						<div className="flex">
							<StarsRating
								variant={widget?.starsVariant}
								color={widget?.starsColor || ''}
								readonly
								value={Math.floor(widget?.avgStars || 0)}
							/>
						</div>
						by our <span className="font-bold">1000+</span> clients
					</div>
					<div
						className="mb-4 mt-2 text-center"
						style={{ color: widget?.secondaryTextColor }}
					>
						Discover Why Feedbackz is the Preferred Choice for
						Bussiness Owners.
					</div>
				</div>
			) : (
				<NoTestimonialsLinkedMessage widget={widget} />
			)}
		</>
	)
}

export default InlineAvatarsVariant
