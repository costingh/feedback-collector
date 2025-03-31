import React, { Dispatch, SetStateAction } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import DisplayTestimonialTags from "@/components/tags/DisplayTestimonialTags";
import { timeAgo } from "@/lib/utils";
import StarsRating from "@/components/stars/stars-rating";
import Link from "next/link";
import { Eye } from "lucide-react";

function TestimonialsList({
	testimonials,
	isChecked,
	setChecked,
	tags,
	checkedItems,
	workspaceId
}: {
	testimonials: any;
	isChecked: any;
	setChecked: any;
	tags: any;
	checkedItems: any;
	workspaceId?: string;
}) {
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
										background: "rgb(243 244 246)",
								  }
								: {}
						}
					>
						<div className="avatar flex flex-col items-start justify-start text-left max-w-full w-[350px]">
							<Avatar>
								<AvatarImage src={t?.avatar} />
								<AvatarFallback>{t?.name?.slice(0,2) || 'N/A'}</AvatarFallback>
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
							{/* <span>{t?.logo}</span> */}
							{/* <span>{t?.company}</span> */}
							{/* <span>{t?.website}</span> */}
							{/* <span>{t?.jobTitle}</span> */}
							<div className="flex items-center gap-6">
								<span className="text-gray-400 font-semibold text-[12px]">
									{timeAgo(t?.createdAt)}
								</span>

								<DisplayTestimonialTags tags={tags} id={t.id} />
							</div>

							<div className="my-3 text-[15px] text-gray-700 font-normal max-w-[700px]">
								{t?.message}
							</div>

							<div className="flex items-center">
								<StarsRating
									value={Math.ceil(t.stars)}
									readonly={true}
								/>
							</div>
						</div>

						<div className="w-[350px] gap-4 flex flex-col items-start">
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
											const newCheckedItems = new Set(prev);
											if (newCheckedItems.has(t.id)) {
												newCheckedItems.delete(t.id); // Uncheck by removing the item from the set
											} else {
												newCheckedItems.add(t.id); // Check by adding the item to the set
											}
											return newCheckedItems;
										})
									}
								/>
							</div>
							
							<div>
								<Link target='_blank' href={`${process.env.NEXT_PUBLIC_HOST_URL}/dashboard/${workspaceId}/forms/edit/${t?.form?.url?.replace('/p/', '')}`}>
									<div className="flex items-center border border-indigo-600 cursor-pointer px-2 py-1 rounded-[10px] gap-3">
										<Eye className='text-indigo-600' size={14}/>
										<span className="text-[12px] font-normal text-indigo-600">
											See Form
										</span>
									</div>
								</Link>
							</div>
						</div>
					</div>
					<div className="w-full bg-gray-100 h-[1px]"></div>
				</>
			))}
		</>
	);
}

export default TestimonialsList;
