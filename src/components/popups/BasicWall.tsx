"use client";

import React, { useState, useRef, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StarsRating from "../stars/stars-rating";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useExpandableText } from "@/hooks/useExpandableText";
interface Widget {
	url: string;
	testimonials: any[];
	cardBackground: string;
	primaryTextColor: string;
	secondaryTextColor: string;
	thirdTextColor: string;
	cardBorderColor: string;
	deviceWidth?: number;
}
interface PaginationData {
	total: number;
	page: number;
	limit: number;
	hasMore: boolean;
}

function BasicWall({ widget, setPage, isFetching, paginationData }: { widget: Widget, setPage: any, isFetching: boolean, paginationData?: PaginationData }) {
	const [allTestimonials, setAllTestimonials] = useState<any[]>([]);
	const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
	const { isExpanded, toggle } = useExpandableText();
	const [maxCharactersToShow, setMaxCharactersToShow] = useState(300);
	const [columnsClass, setColumnsClass] = useState("columns-1 sm:columns-2 lg:columns-3");
	
	useEffect(() => {
		if (!widget?.deviceWidth) return;
	
		if (widget.deviceWidth < 640) {
			setMaxCharactersToShow(50);
			setColumnsClass("columns-1");
		} else if (widget.deviceWidth < 1024) {
			setMaxCharactersToShow(150);
			setColumnsClass("columns-2");
		} else {
			setMaxCharactersToShow(300);
			setColumnsClass("columns-3");
		}
	}, [widget?.deviceWidth]);
	
	React.useEffect(() => {
		if (widget) {
			const newTestimonials = widget?.testimonials || [];
			setAllTestimonials((prev) => {
				const uniqueTestimonials = newTestimonials.filter(
					(newT) => !prev.some((p) => p.id === newT.id)
				);
				return [...prev, ...uniqueTestimonials];
			});
		}
	}, [widget]);

	const hasMore = paginationData?.hasMore;

	const loadMore = () => {
		setPage((prev: number) => prev + 1);
	};

	return (
		<div className="flex flex-col gap-6">
			<div
				className={`${columnsClass} gap-3 sm:gap-4 mx-auto px-2 sm:px-4 w-full [column-fill:_balance]`}
			>

				{allTestimonials?.map((t: any) => (
					<div
						key={t.id}
						className="gap-4 border-[1px] border-gray-200 rounded-[12px] sm:rounded-[15px] overflow-hidden break-inside-avoid mb-3 sm:mb-4"
						style={{
							background: widget?.cardBackground,
							borderColor: widget?.cardBorderColor,
						}}
					>
						{t.video ? (
							<div>
								<div className="relative aspect-video w-full">
									<video
										src={t.video}
										className="w-full h-full object-cover bg-gray-200"
										ref={(el) => {
											if (el) {
												videoRefs.current[t.id] = el;
											}
										}}
										preload="none"
									/>

									<div className="absolute bottom-0 left-0 right-0 w-full flex items-center justify-between pb-3 px-3">
										<div className="flex flex-col items-start justify-center gap-[2px]">
											<StarsRating
												value={Math.floor(t.stars || 0)}
												readonly={true}
												scale={0.7}
												marginLeft={-20}
											/>
											<p className="text-[17px] font-[500] m-0 p-0 text-white">
												{t?.name}
											</p>
											<span className="text-[14px] font-[400] text-white/80">
												{t?.jobTitle || "Customer"}
											</span>
										</div>
										<div
											className="flex items-center justify-center cursor-pointer"
											onClick={() => {
												const video =
													videoRefs.current[t.id];
												if (video) {
													if (video.paused) {
														video.play();
													} else {
														video.pause();
													}
												}
											}}
										>
											<div className="w-[30px] h-[30px] rounded-[5px] bg-white/60 flex items-center justify-center hover:scale-110 transition-transform">
												<Play className="w-5 h-5 text-gray-500" />
											</div>
										</div>
									</div>
								</div>
							</div>
						) : (
							<div className="p-3 sm:p-4">
								<div className="flex items-center gap-2">
									<Avatar className="w-8 h-8 sm:w-10 sm:h-10">
										<AvatarImage src={t?.avatar} />
										<AvatarFallback className="text-[10px] sm:text-[12px]">
											{t?.name?.slice(0, 2) || "N/A"}
										</AvatarFallback>
									</Avatar>
									<div>
										<p
											className="text-[13px] sm:text-[14px] font-[600] m-0 p-0"
											style={{
												color: widget?.primaryTextColor,
											}}
										>
											{t?.name}
										</p>
										<span
											className="sm:text-[12px] font-[400] mt-[5px] sm:mt-[7px] p-0 block"
											style={{
												color: widget?.secondaryTextColor,
											}}
										>
											{t?.jobTitle || t?.email}
										</span>
									</div>
								</div>
								<div className="flex items-center mt-2 sm:mt-3">
									<StarsRating
										value={Math.floor(t.stars || 0)}
										readonly={true}
										scale={0.7}
										marginLeft={-20}
									/>
								</div>
								<p
									className="text-[13px] sm:text-[14px] mt-2 sm:mt-3 mb-3 sm:mb-4"
									style={{ color: widget?.thirdTextColor }}
								>
									{t?.message.length > maxCharactersToShow && !isExpanded(t.id)
									? `${t.message.slice(0, maxCharactersToShow)}... `
									: t.message}

									{t?.message.length > maxCharactersToShow && (
										<span
											onClick={() => toggle(t.id)}
											className="text-blue-500 cursor-pointer hover:underline ml-1 text-sm"
										>
											{isExpanded(t.id) ? "See less" : "See more"}
										</span>
									)}
								</p>
								<span
									className="text-[12px] sm:text-[14px] font-[500]"
									style={{
										color: widget?.secondaryTextColor,
									}}
								>
									{new Date(t.createdAt).toLocaleDateString()}
								</span>
							</div>
						)}
					</div>
				))}
			</div>
			{(paginationData?.total || 0) > 0 && <div className="flex flex-col gap-6 pb-4">
				<div className="flex justify-center">

					<Button
						onClick={loadMore}
						disabled={isFetching || !hasMore}
						className="bg-black text-white hover:bg-black/90 px-6 py-2 rounded-lg"
					>
						{isFetching ? (
							<div className="flex items-center gap-2">
								<div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
								<span>Loading...</span>
							</div>
						) : (
							"Load More"
						)}
					</Button>
				</div>
			</div>}

			{(paginationData?.total || 0) === 0 && <div className="flex flex-col gap-6 pb-4">
				<div className="flex justify-center">
					<p className="text-gray-500 text-center">No testimonials to show. Please add some testimonials to your widget.</p>
				</div>
			</div>}
		</div>
	);
}

export default BasicWall;
