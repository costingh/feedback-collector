import { X } from "lucide-react";
import React, { useState } from "react";
import StarsRating from "../stars-rating";
import { Input } from "@/components/ui/input";
import { useTags } from "@/hooks/useTags";
import { cn, tagCategories } from "@/lib/utils";

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

const FiterTestimonialsSidebar: React.FC = ({
	testimonials,
}: {
	testimonials: any;
}) => {
	const { tags, setTags, isSearchingTags, groupedTags, reloadTags } =
		useTags();

	const [filters, setFilters] = useState({
		searchForKeywords: "",
		rating: 0,
		approvalStatus: "approved",
		tags: [],
		forms: [],
	});

	return (
		<div className="w-[380px] border-l-[1px] border-gray-200 h-[100vh] px-6 py-6">
			<div className="flex items-center justify-between">
				<h1>Search and Filter</h1>
				<X />
			</div>

			<Input
				placeholder="Search for a testimonial"
				className="w-full mb-3 mt-5"
				value={filters.searchForKeywords}
				onChange={(e) =>
					setFilters((prevFilters) => ({
						...prevFilters,
						searchForKeywords: e.target.value,
					}))
				}
			/>

			<span className="text-gray-500 font-normal text-[14px] mb-2">
				Rating
			</span>
			<div className="block mb-3">
				<StarsRating
					value={filters.rating}
					ratingChanged={(val) =>
						setFilters((prevFilters) => ({
							...prevFilters,
							rating: val,
						}))
					}
				/>
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
						setFilters((prevFilters) => ({
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
						setFilters((prevFilters) => ({
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
						setFilters((prevFilters) => ({
							...prevFilters,
							approvalStatus: "all",
						}))
					}
				>
					All
				</span>
			</div>

			<span className="text-gray-500 font-normal text-[14px] mb-2">
				Tags
			</span>
			<div className="w-full mb-4">
				{Object.keys(groupedTags).map((category, index) => (
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
							{groupedTags[category].map((tag) => (
								<TagComponent
									key={tag.id}
									label={tag.tagName}
									isActive={filters?.tags?.includes(
										tag.tagName
									)}
									onClick={() =>
										setFilters((prevFilters) => ({
											...prevFilters,
											tags: prevFilters.tags.includes(
												tag.tagName
											)
												? prevFilters.tags.filter(t => t != tag.tagName)
												: [
														...prevFilters.tags,
														tag.tagName,
												  ],
										}))
									}
								/>
							))}
						</div>
					</div>
				))}
			</div>

			<span className="text-gray-500 font-normal text-[14px] mb-2">
				Forms
			</span>

			<div className="flex items-center flex-wrap gap-2">
				{testimonials.map((t) => (
					<TagComponent
						key={t.id}
						label={t.form.name}
						isActive={filters.forms.includes(t.form.name)}
						onClick={() =>
							setFilters((prevFilters) => ({
								...prevFilters,
								forms: prevFilters.forms.includes(t.form.name)
									? prevFilters.forms.filter(f => f != t.form.name)
									: [...prevFilters.forms, t.form.name],
							}))
						}
					/>
				))}
			</div>
		</div>
	);
};

export default FiterTestimonialsSidebar;
