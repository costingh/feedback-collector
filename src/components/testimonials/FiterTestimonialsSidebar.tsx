"use client";

import { X } from "lucide-react";
import React from "react";
import { Input } from "@/components/ui/input";
import { cn, tagCategories } from "@/lib/utils";
import StarsRating from "@/components/stars/stars-rating";
import { Tag } from "@/types/Tag";
import { Form } from "@/types/Form";
import { Separator } from "@/components/ui/separator";

const TagComponent = ({
	label,
	onClick,
	isActive,
}: {
	label: string;
	onClick?: any;
	isActive: boolean;
}) => {
	return (
		<div
			onClick={() => {
				onClick && onClick();
			}}
			className={cn(
				"bg-gray-100 border-[1px] border-gray-200 py-[3px] px-[6px] rounded-[6px] inline-flex text-gray-700 text-[12px] font-[300] cursor-pointer transition-all hover:bg-gray-200",
				isActive && "bg-gray-200"
			)}
		>
			{label}
		</div>
	);
};

{/* @ts-ignore */}
const FiterTestimonialsSidebar: React.FC = ({
	testimonials,
	filters,
	setFilters,
	showFilterSidebar,
	setShowFilterSidebar,
	withoutCloseButton,
	children,
	groupedTags,
	userForms
}: {
	testimonials: any;
	filters: any;
	setFilters: any;
	showFilterSidebar: boolean;
	setShowFilterSidebar: any;
	withoutCloseButton?: boolean;
	children: React.ReactNode;
	groupedTags: any;
	userForms: Form[];
}) => {
	return (
		<div className={cn(
			"border-l-[1px] border-gray-200 h-[100vh] px-6 py-6 overflow-hidden transition-all text-left",
			showFilterSidebar ? 'w-[380px]' : 'w-0 p-0' 
		)}>
			<div className="flex items-center justify-between">
				<h1 className="text-[18px] font-bold">Search and Filter</h1>
				{!withoutCloseButton && <div onClick={() => setShowFilterSidebar(false)} className="flex items-center justify-center p-2 rounded-[6px] bg-gray-200 cursor-pointer transition-all hover:bg-gray-100">
					<X size={14} />
				</div>}
				{children && <>{children}</>}

			</div>

			<Input
				placeholder="Search for a testimonial"
				className="w-full mb-3 mt-5"
				value={filters.searchForKeywords}
				onChange={(e) =>
					setFilters((prevFilters : any) => ({
						...prevFilters,
						searchForKeywords: e.target.value,
					}))
				}
			/>

			<span className="text-gray-500 font-normal text-[14px] mb-2">
				Rating ({filters.rating})
			</span>
			<div className="flex items-center justify-between mb-3 gap-5">
				<div className="block">
					<StarsRating
						value={filters.rating}
						ratingChanged={(val) =>
							setFilters((prevFilters:any) => ({
								...prevFilters,
								rating: val,
							}))
						}
					/>
				</div>
				<span
					className="border-b-2 border-dotted border-gray-400 text-gray-400 text-[14px] cursor-pointer transition-all hover:opacity-50"
					onClick={() =>
						setFilters((prevFilters:any) => ({
							...prevFilters,
							rating: 0,
						}))
					}
				>
					Clear
				</span>
			</div>

			<span className="text-gray-500 font-normal text-[14px] mb-2">
				Approval Status
			</span>
			<div className="flex items-center gap-2 mb-3 bg-gray-100 rounded-[10px] p-2 justify-center">
				<span
					className={cn(
						"text-gray-700 text-[12px] cursor-pointer p-1 rounded-[4px]",
						filters.approvalStatus == "approved" && "bg-gray-300"
					)}
					onClick={() =>
						setFilters((prevFilters:any) => ({
							...prevFilters,
							approvalStatus: "approved",
						}))
					}
				>
					Approved
				</span>
				<span
					className={cn(
						"text-gray-700 text-[12px] cursor-pointer p-1 rounded-[4px]",
						filters.approvalStatus == "unapproved" && "bg-gray-300"
					)}
					onClick={() =>
						setFilters((prevFilters:any) => ({
							...prevFilters,
							approvalStatus: "unapproved",
						}))
					}
				>
					Unapproved
				</span>
				<span
					className={cn(
						"text-gray-700 text-[12px] cursor-pointer p-1 rounded-[4px]",
						filters.approvalStatus == "all" && "bg-gray-300"
					)}
					onClick={() =>
						setFilters((prevFilters:any) => ({
							...prevFilters,
							approvalStatus: "all",
						}))
					}
				>
					All
				</span>
			</div>

			<Separator className="w-4/5 my-3" />
			<span className="text-gray-900 font-semibold text-[14px] mb-2">
				Tags
			</span>
			<div className="w-full mb-4">
				{groupedTags && Object.keys(groupedTags).length == 0 && <span className='text-[13px] text-gray-700'>No tags yet</span>}
				{groupedTags && Object.keys(groupedTags).map((category:any, index) => (
					<div key={category}>
						<div className="w-full py-2">
							<h1 className=" text-[13px] text-zinc-800 font-semibold">
								{tagCategories.find((c) => c.name == category)
									?.emoji +
									" " +
									category}
							</h1>
						</div>
						<div className="flex items-center flex-wrap gap-2">
							{groupedTags[category].map((tag: Tag) => (
								<TagComponent
									key={tag.id}
									label={tag.tagName}
									isActive={filters?.tags?.find(
										(t:any) => t.id == tag.id
									)}
									onClick={() =>
										setFilters((prevFilters:any) => ({
											...prevFilters,
											tags: prevFilters.tags.find(
												(t:any) => t.id == tag.id
											)
												? prevFilters.tags.filter(
														(t:any) => t.id != tag.id
												  )
												: [...prevFilters.tags, tag],
										}))
									}
								/>
							))}
						</div>
					</div>
				))}
			</div>

			<Separator className="w-4/5 my-3" />
			<span className="text-gray-900 font-semibold text-[14px] mb-2">
				Forms
			</span>

			<div className="flex items-center flex-wrap gap-2">
				{userForms?.length == 0 && <span className='text-[13px] text-gray-700'>No forms yet</span>}
				{userForms?.map((form:any) => (
					<TagComponent
						key={form.id}
						label={process.env.NEXT_PUBLIC_HOST_URL + form.url}
						isActive={filters.forms.find(
							(testimonial:any) => testimonial.id == form.id
						)}
						onClick={() =>
							setFilters((prevFilters:any) => ({
								...prevFilters,
								forms: prevFilters.forms.find(
									(testimonial:any) => testimonial.id == form.id
								)
									? prevFilters.forms.filter(
											(testimonial:any) =>
												testimonial.id != form.id
									  )
									: [...prevFilters.forms, form],
							}))
						}
					/>
				))}
			</div>
		</div>
	);
};

export default FiterTestimonialsSidebar;
