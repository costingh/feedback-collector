import React, { useState } from 'react'
import StarsRating from '@/components/stars/stars-rating'
import clsx from 'clsx'
import NoTestimonialsLinkedMessage from '../widgets/NoTestimonialsLinkedMessage'
import { cn } from '@/lib/utils'
import { useExpandableText } from '@/hooks/useExpandableText'

function SocialStar({
	transition,
	testimonials,
	numberOfReviews,
	widget,
	style,
}: {
	transition?: boolean
	testimonials: any
	numberOfReviews: number
	widget: any
	style?: React.CSSProperties
}) {
	const [maxCharactersToShow, setMaxCharactersToShow] = useState(300)
	const { isExpanded, toggle } = useExpandableText()

	return (
		<>
			{numberOfReviews > 0 ? (
				<div
					className="w-full flex flex-col items-center gap-4"
					style={style || {}}
				>
					{testimonials.map((t: any) => (
						<div
							key={t.id}
							className={clsx(
								'flex items-start gap-3 p-2 rounded-[20px] w-full max-w-[600px]',
								transition &&
								'transition-transform duration-300 ease-in-out group-hover:scale-110',
								widget?.cardBorderColor !== 'transparent' &&
								'border-[1px]',
							)}
							style={{
								backgroundColor: widget?.cardBackground,
								borderColor: widget?.cardBorderColor,
							}}
						>
							<img
								width={100}
								height={100}
								alt=""
								src={
									t?.avatar ||
									'/images/avatar-placeholder.jpg'
								}
								className="rounded-[20px]"
							/>
							<div>
								<div className="block">
									<StarsRating
										value={t?.stars || 0}
										readonly
										variant={widget?.starsVariant}
										color={widget?.starsColor}
									/>
								</div>
								<p
									className={cn(
										'font-normal text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px]',
									)}
									style={{ color: widget?.primaryTextColor }}
								>
									{t?.message?.length > maxCharactersToShow &&
										!isExpanded(t?.id)
										? `${t?.message?.slice(0, maxCharactersToShow)}... `
										: t?.message}
									{t?.message.length >
										maxCharactersToShow && (
											<span
												onClick={() => toggle(t?.id)}
												className="text-blue-500 cursor-pointer hover:underline ml-1 text-sm"
											>
												{isExpanded(t?.id)
													? 'See less'
													: 'See more'}
											</span>
										)}
								</p>

								<span
									className="font-normal text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px]"
									style={{
										color: widget?.secondaryTextColor,
									}}
								>
									{t.name} /{' '}
									<span
										className="text-blue-300 text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px]"
										style={{
											color: widget?.thirdTextColor,
										}}
									>
										{t?.jobTitle || t?.company || t?.email}
									</span>
								</span>
							</div>
						</div>
					))}
				</div>
			) : (
				<NoTestimonialsLinkedMessage widget={widget} />
			)}
		</>
	)
}

export default SocialStar
