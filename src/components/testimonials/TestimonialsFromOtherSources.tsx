'use client'

import React, { Dispatch, SetStateAction, useState } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Checkbox } from '@/components/ui/checkbox'
import DisplayTestimonialTags from '@/components/tags/DisplayTestimonialTags'
import { timeAgo } from '@/lib/utils'
import StarsRating from '@/components/stars/stars-rating'
import Link from 'next/link'
import { CircleHelp, Eye, Loader2 } from 'lucide-react'

import TestimonialsSourceComponent from './TestimonialsSourceComponent'
import { toast } from 'sonner'
import axios from 'axios'
import { useRouter } from 'next/navigation'
function TestimonialsFromOtherSources({
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
	const _MAX_CHARACTERS_TO_SHOW = 150
	const [isImporting, setIsImporting] = useState(false)
	// Inside TestimonialsFromOtherSources component, above return
	const [expandedMessages, setExpandedMessages] = useState<Set<string>>(
		new Set(),
	)
	const router = useRouter()
	// Helper function to toggle message expansion
	const toggleExpand = (id: string) => {
		setExpandedMessages((prev) => {
			const newSet = new Set(prev)
			if (newSet.has(id)) {
				newSet.delete(id)
			} else {
				newSet.add(id)
			}
			return newSet
		})
	}

	const handleImportSelectedTestimonials = async () => {
		console.log('Importing selected testimonials   ', testimonials)
		setIsImporting(true)
		await axios.post(
			'/api/import-testimonials/bulk-import-g2',
			{
				workspaceId,
				testimonials: testimonials.filter((t: any) => checkedItems.has(t.id)),
			},
		)

		toast.success('Testimonials uploaded successfully!')
		router.push(`/dashboard/${workspaceId}/testimonials`)
		setIsImporting(false)
	}

	const canImportSelectedTestimonials = () => {
		return checkedItems.size > 0;
	}

	const handleCheckAll = () => {
		setChecked(new Set(testimonials.map((t: any) => t.id)))
	}

	const handleUnselectAll = () => {
		setChecked(new Set())
	}

	return (
		<>
			<div className="h-[calc(100vh-27px-40px-90px-20px)] overflow-y-auto">
				{testimonials?.map((t: any, index: number) => (
					<React.Fragment key={t.id}>
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
								<span className="text-gray-600 text-[13px] font-[400]">
									{t?.jobTitle !== 'NOT GIVEN'
										? t?.jobTitle
										: ''}
								</span>
							</div>
							<div className="w-full text-left">
								{t.video && (
									<div className="w-[200px] h-[150px] rounded-lg overflow-hidden mb-5">
										<video
											className="w-full h-full object-cover"
											controls
											preload="metadata"
										>
											<source
												src={t.video}
												type="video/mp4"
											/>
											Your browser does not support the
											video tag.
										</video>
									</div>
								)}

								{/* <span>{t?.website}</span> */}

								<div className="flex items-center gap-6">
									<div className="flex items-center">
										<StarsRating
											value={Math.ceil(t.stars)}
											readonly={true}
											variant="custom1"
											color="#FFBF00"
										/>
									</div>
								</div>

								<div className="my-3 text-[15px] text-gray-700 font-normal max-w-[700px]">
									{t?.message.length >
										_MAX_CHARACTERS_TO_SHOW &&
										!expandedMessages.has(t.id)
										? `${t.message.slice(0, _MAX_CHARACTERS_TO_SHOW)}... `
										: t.message}
									{t?.message.length >
										_MAX_CHARACTERS_TO_SHOW && (
											<span
												onClick={() => toggleExpand(t.id)}
												className="text-blue-500 cursor-pointer hover:underline ml-1 text-sm"
											>
												{expandedMessages.has(t.id)
													? 'See less'
													: 'See more'}
											</span>
										)}
								</div>

								<div className="flex items-center justify-start gap-2">
									<TestimonialsSourceComponent
										source={t?.source}
									/>
									<span className="text-gray-400 font-semibold text-[12px]">
										{timeAgo(t?.createdAt)}
									</span>
								</div>
							</div>

							<div className="w-[50px] gap-4 flex flex-col items-start">
								<div className="flex items-center gap-4 justify-center">
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
							</div>
						</div>
						<div className="w-full bg-gray-100 h-[1px]"></div>
					</React.Fragment>
				))}
			</div>

			<div className="flex items-center justify-between border-t border-gray-200 pt-[20px]">
				<div className="flex items-center gap-4">
					<div>
						<button
							onClick={handleImportSelectedTestimonials}
							disabled={!canImportSelectedTestimonials() || isImporting}
							className={`px-4 py-2 text-white rounded-md transition min-w-[150px] min-h-[30px] ${canImportSelectedTestimonials()
									? 'bg-black hover:bg-gray-800'
									: 'bg-gray-300 cursor-not-allowed'
								}`}
						>
							{isImporting ? (
								<Loader2 size={14} className="spin mx-auto" />
							) : (
								'Import Testimonials'
							)}
						</button>
					</div>
					<div
						onClick={handleCheckAll}
						className="flex items-center gap-3 cursor-pointer px-4 py-2 transition-all hover:bg-gray-200 bg-gray-100 rounded-[6px]"
					>
						<span className="text-[16px] text-gray-500 whitespace-nowrap">
							Select All
						</span>
					</div>

					{checkedItems?.size > 0 && (
						<div
							onClick={handleUnselectAll}
							className="flex items-center gap-3 cursor-pointer px-4 py-2 transition-all hover:bg-gray-200 bg-gray-100 rounded-[6px]"
						>
							<span className="text-[16px] text-gray-500 whitespace-nowrap">
								Unselect All
							</span>
						</div>)}

					{checkedItems?.size > 0 && (
						<p>{checkedItems?.size} selected</p>
					)}
				</div>

				<div className="flex items-center gap-4">
					{testimonials.length && (
						<p>
							Found a total of {testimonials.length} testimonials
						</p>
					)}

					{/* <div
						onClick={handleCheckAll}
						className="flex items-center gap-3 cursor-pointer px-4 py-2 transition-all hover:bg-gray-200 bg-gray-100 rounded-[6px]"
					>
						<span className="text-[16px] text-gray-500 whitespace-nowrap">
							Filter
						</span>
					</div> */}
				</div>
			</div>
		</>
	)
}

export default TestimonialsFromOtherSources
