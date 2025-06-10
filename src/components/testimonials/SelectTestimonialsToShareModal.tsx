'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import TestimonialsList from './TestimonialsList'
import FiterTestimonialsSidebar from './FiterTestimonialsSidebar'
import { useTestimonialsFilter } from '@/hooks/useTestimonialsFilters'
import { LoadingSpinner } from '../animations/loading-spinner'
import { useMutationData } from '@/hooks/useMutationData'
import { updateWidget } from '@/actions/widgets'
import { Form } from '@/types/Form'
import { Button } from '../ui/button'

export const SelectTestimonialsToShareModal = ({
	isOpened,
	handleClose,
	testimonials,
	isChecked,
	setChecked,
	tags,
	checkedItems,
	widgetId,
	groupedTags,
	userForms,
}: {
	isOpened: boolean
	handleClose: any
	testimonials: any
	isChecked: any
	setChecked: any
	tags: any
	checkedItems: any
	widgetId: string
	groupedTags: any
	userForms: Form[]
}) => {
	const { filters, setFilters } = useTestimonialsFilter()
	const [filteredTestimonials, setFilteredTestimonials] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		let _filteredTestimonials = [...testimonials]

		if (filters.approvalStatus === 'approved') {
			_filteredTestimonials = _filteredTestimonials.filter(
				(t: any) => t.approved === true,
			)
		} else if (filters.approvalStatus === 'unapproved') {
			_filteredTestimonials = _filteredTestimonials.filter(
				(t: any) => t.approved === false,
			)
		}

		if (filters.rating !== 0) {
			_filteredTestimonials = _filteredTestimonials.filter(
				(t: any) => t.stars === filters.rating,
			)
		}

		if (filters.tags.length > 0) {
			_filteredTestimonials = _filteredTestimonials.filter((t) =>
				// @ts-ignore
				filters.tags.some((tag) => tag.formResponsesIds.includes(t.id)),
			)
		}

		if (filters.forms.length > 0) {
			_filteredTestimonials = _filteredTestimonials.filter((t) =>
				// @ts-ignore
				filters.forms.some((form) => t.form.id == form.id),
			)
		}

		if (filters.searchForKeywords) {
			_filteredTestimonials = _filteredTestimonials.filter(
				(testimonial) =>
					// @ts-ignore
					testimonial.message.includes(filters.searchForKeywords),
			)
		}

		if (filters.sources.length > 0) {
			_filteredTestimonials = _filteredTestimonials.filter((t) =>
				// @ts-ignore
				filters.sources.some((source) => t.source == source),
			)
		}

		// @ts-ignore
		setFilteredTestimonials(_filteredTestimonials)
		setIsLoading(false)
	}, [filters, testimonials])

	const handleCheckAll = () => {
		setChecked(new Set(filteredTestimonials.map((t: any) => t.id)))
	}

	return (
		<Dialog open={isOpened} onOpenChange={handleClose}>
			<DialogContent className="max-h-[calc(100vh-200px)] w-full max-w-[1200px] overflow-y-auto overflow-x-hidden">
				<DialogHeader>
					<DialogTitle className="flex items-center justify-between items-between gap-y-4 pb-2"></DialogTitle>
					{/* <DialogDescription >
						
					</DialogDescription> */}
				</DialogHeader>
				<div className="text-center pt-2 space-y-2 text-zinc-900 font-medium flex">
					<div className="w-[750px] mr-2">
						<div className="flex justify-between items-center">
							<div className="inline-block mb-[20px] w-full text-left">
								<div className="flex items-center gap-x-2 font-bold text-xl">
									Approved testimonials
								</div>
								<p className="text-[15px] text-gray-600 font-normal">
									New testimonials that you approve wont
									automatically get added to this widget
								</p>
							</div>
							<div
								onClick={handleCheckAll}
								className="flex items-center gap-3 cursor-pointer px-4 py-2 transition-all hover:bg-gray-200 bg-gray-100 rounded-[6px]"
							>
								<span className="text-[16px] text-gray-500 whitespace-nowrap">
									Select All
								</span>
							</div>
						</div>

						{!isLoading ? (
							<TestimonialsList
								testimonials={filteredTestimonials}
								tags={tags}
								isChecked={isChecked}
								setChecked={setChecked}
								checkedItems={checkedItems}
							/>
						) : (
							<div className="flex items-center justify-center">
								<LoadingSpinner />
							</div>
						)}
					</div>
					<div>
						{/* @ts-ignore */}
						<FiterTestimonialsSidebar
							testimonials={testimonials}
							filters={filters}
							setFilters={setFilters}
							showFilterSidebar={true}
							setShowFilterSidebar={() => undefined}
							withoutCloseButton={true}
							groupedTags={groupedTags}
							userForms={userForms}
						>
							<UpdateWidgetHighlightedTestimonials
								widgetId={widgetId}
								handleClose={handleClose}
								checkedItems={checkedItems}
							/>
						</FiterTestimonialsSidebar>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}

const UpdateWidgetHighlightedTestimonials = ({
	widgetId,
	handleClose,
	checkedItems,
}: {
	widgetId: any
	handleClose: any
	checkedItems: any
}) => {
	const { mutate: handleUpdate, isPending: isLoading } = useMutationData(
		['add-testimonials-for-widget'],
		() => updateWidget(widgetId, Array.from(checkedItems)),
		['widget', widgetId],
		() => {
			handleClose()
		},
	)

	return (
		<div
			onClick={handleUpdate}
			className="text-center py-[6px] rounded-[8px] bg-[#000] text-[#eee] px-3 cursor-pointer text-[13px] font-semibold hover:opacity-80"
		>
			{!isLoading ? (
				'Save changes'
			) : (
				<div className="flex items-center justify-center">
					<LoadingSpinner />
				</div>
			)}
		</div>
	)
}
