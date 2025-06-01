import clsx from 'clsx'
import StarsRating from '@/components/stars/stars-rating'
import Image from 'next/image'
import { Widget } from '@prisma/client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
	formatNumberOfReviews,
	getAssetColorVariant,
	needsDarkBackground,
} from '@/lib/utils'
import NoTestimonialsLinkedMessage from './NoTestimonialsLinkedMessage'

function EliteAvatarsVariant({
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
				<div
					className={clsx(
						'w-full flex flex-row items-center justify-center gap-[15px]',
						transition &&
							'transition-transform duration-300 ease-in-out group-hover:scale-110',
					)}
				>
					<img
						src={getAssetColorVariant(widget)}
						alt="Elite Widget"
						width={50}
						height={50}
					/>
					<div className="flex flex-col justify-center items-center sm:items-start">
						<div className="block h-[18px] sm:h-[22px] self-center mb-[10px]">
							<StarsRating
								value={Math.floor(widget?.avgStars || 0)}
								readonly
								scale={0.7}
								variant={widget?.starsVariant}
								color={widget?.starsColor || ''}
							/>
						</div>
						<div
							className={clsx(
								'text-[12px] sm:text-[14px] text-center mb-[12px]',
								needsDarkBackground(widget) &&
									(!widget?.primaryTextColor ||
										widget?.primaryTextColor ==
											'transparent')
									? 'text-gray-300'
									: 'text-black',
							)}
							style={{ color: widget?.primaryTextColor }}
						>
							{widget?.widgetDescription ||
								`${widget?.avgStars?.toFixed(
									1,
								)} rating based on ${
									widget?._count?.testimonials
								} reviews`}
						</div>
						<div className="flex sm:-space-x-5 avatar-group justify-center sm:justify-start self-center">
							{testimonials.slice(0, 3).map((t: any) => (
								<Avatar key={t.id}>
									<AvatarImage src={t.avatar} />
									<AvatarFallback>
										{t?.name?.slice(0, 2) || 'N/A'}
									</AvatarFallback>
								</Avatar>
							))}

							{(widget?._count?.testimonials || 0) > 3 && (
								<Avatar>
									<AvatarFallback>
										{formatNumberOfReviews(
											(widget?._count?.testimonials ||
												0) - 3,
										)}
									</AvatarFallback>
								</Avatar>
							)}
						</div>
					</div>
					<img
						src={getAssetColorVariant(widget)}
						alt="Elite Widget"
						width={50}
						height={50}
						style={{ transform: 'scaleX(-1)' }}
					/>
				</div>
			) : (
				<NoTestimonialsLinkedMessage widget={widget} />
			)}
		</>
	)
}

export default EliteAvatarsVariant
