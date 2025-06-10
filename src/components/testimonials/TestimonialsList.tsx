import React, { Dispatch, SetStateAction } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Checkbox } from '@/components/ui/checkbox'
import DisplayTestimonialTags from '@/components/tags/DisplayTestimonialTags'
import { timeAgo } from '@/lib/utils'
import StarsRating from '@/components/stars/stars-rating'
import Link from 'next/link'
import { CircleHelp, Eye } from 'lucide-react'
import { UnratedIconVariant2 } from '@/app/(website)/_components/icons/unrated-icon-variant-2'
import { RatedIconVariant2 } from '@/app/(website)/_components/icons/rated-icon-variant-2'
import TestimonialsSourceComponent from './TestimonialsSourceComponent'
import { useExpandableText } from '@/hooks/useExpandableText'
import VideoWithFallback from '../global/video/VideoWithFallback'
import { CheckedUnapprovedTestimonialPopup } from '../tooltips/CheckedUnapprovedTestimonialPopup'

function TestimonialsList({
	testimonials,
	isChecked,
	setChecked,
	tags,
	checkedItems,
	workspaceId,
}: {
	testimonials: any
	isChecked: any
	setChecked: any
	tags: any
	checkedItems: any
	workspaceId?: string
}) {
	const { isExpanded, toggle } = useExpandableText()
	const _MAX_CHARACTERS_TO_SHOW = 200

	return (
		<>
			{testimonials?.map((t: any, index: number) => (
				<>
					<div
						key={t.id}
						className="flex px-4 py-3 rounded-[10px] w-full justify-between cursor:pointer hover:bg-zinc-100 gap-4 mb-4"
						style={
							isChecked(t.id)
								? {
										background: 'rgb(243 244 246)',
									}
								: {}
						}
					>
						<div className="avatar flex flex-col items-start justify-start text-left max-w-full w-[350px]">
							<Avatar>
								<AvatarImage src={t?.avatar} />
								<AvatarFallback>
									{t?.name?.slice(0, 2) || 'N/A'}
								</AvatarFallback>
							</Avatar>
							<p className="text-zinc-700 text-[14px] font-[600] mb-1 mt-2">
								{t?.name}
							</p>
							{/* <span>{t?.email}</span> */}
							<span className="text-gray-600 text-[13px] font-[400]">
								{t?.jobTitle || t?.email}
							</span>
						</div>
						<div className="w-full text-left">
							{t.video && (
								<div className="w-[200px] h-[150px] rounded-lg overflow-hidden mb-5">
									<VideoWithFallback src={t.video} />
								</div>
							)}

							{/* <span>{t?.logo}</span> */}
							{/* <span>{t?.company}</span> */}
							{/* <span>{t?.website}</span> */}
							{/* <span>{t?.jobTitle}</span> */}
							{/* <div className="flex items-center gap-6"> */}
							<div className="flex items-center">
								<StarsRating
									value={Math.ceil(t.stars)}
									readonly={true}
									variant="custom1"
									color="#FFBF00"
									marginLeft={-4}
								/>
							</div>
							{/* </div> */}

							<div className="my-3 text-[15px] text-gray-700 font-normal ">
								{t?.message.length > _MAX_CHARACTERS_TO_SHOW &&
								!isExpanded(t.id)
									? `${t.message.slice(0, _MAX_CHARACTERS_TO_SHOW)}... `
									: t.message}

								{t?.message.length >
									_MAX_CHARACTERS_TO_SHOW && (
									<span
										onClick={() => toggle(t.id)}
										className="text-blue-500 cursor-pointer hover:underline ml-1 text-sm"
									>
										{isExpanded(t.id)
											? 'See less'
											: 'See more'}
									</span>
								)}
							</div>

							<div className="flex items-center justify-start gap-2">
								{/* <TooltipProvider>
									<Tooltip delayDuration={0}>
										<TooltipTrigger asChild>
											<Image src='/favicon.ico' alt="Feedbackz testimonials source logo" width={20} height={20} />
										</TooltipTrigger>
										<TooltipContent>
											<p>Source of this testimonial is Feedbackz.co</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider> */}
								<div className="flex items-center justify-start gap-2">
									<TestimonialsSourceComponent
										source={t?.source}
									/>
									<DisplayTestimonialTags
										tags={tags}
										id={t.id}
									/>
								</div>
							</div>
						</div>

						<div className="w-[200px] gap-4 flex flex-col items-start">
							<div className="flex items-center gap-4 justify-center">
								{t?.approved ? (
									<span className="px-2 py-1 rounded-[10px] bg-[#4dff0769] text-[#0d7d01e6] text-[12px] font-semibold cursor-pointer">
										Approved
									</span>
								) : (
									<span className="px-2 py-1 rounded-[10px] bg-[#ffc10769] text-[#7d5e01e6] text-[12px] font-semibold cursor-pointer">
										Not Approved
									</span>
								)}

								<Checkbox
									id={`check-${t.id}`}
									checked={checkedItems.has(t.id)}
									onClick={() =>
										setChecked((prev: any) => {
											const newCheckedItems = new Set(
												prev,
											)
											if (newCheckedItems.has(t.id)) {
												newCheckedItems.delete(t.id) // Uncheck by removing the item from the set
											} else {
												newCheckedItems.add(t.id) // Check by adding the item to the set
											}
											return newCheckedItems
										})
									}
								/>
							</div>

							{t?.source != 'imported_from_file' && (
								<div>
									<Link
										target="_blank"
										rel="noopener noreferrer"
										href={`${process.env.NEXT_PUBLIC_HOST_URL}/dashboard/${workspaceId}/forms/edit/${t?.form?.url?.replace('/p/', '')}`}
									>
										<div className="flex items-center border border-indigo-600 cursor-pointer px-2 py-1 rounded-[10px] gap-3">
											<Eye
												className="text-indigo-600"
												size={14}
											/>
											<span className="text-[12px] font-normal text-indigo-600">
												See Form
											</span>
										</div>
									</Link>
								</div>
							)}

							<div className="flex items-center gap-2">
								<span className="text-gray-400 font-semibold text-[12px]">
									{timeAgo(t?.createdAt)}
								</span>

								{!t?.approved && checkedItems.has(t.id) && (
									<div className="ml-2">
										<CheckedUnapprovedTestimonialPopup />
									</div>
								)}
							</div>
						</div>
					</div>
					<div className="w-full bg-gray-100 h-[1px]"></div>
				</>
			))}
		</>
	)
}

export default TestimonialsList
