import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StarsRating from "../stars/stars-rating";

function BasicWall({ testimonials }: { testimonials: any }) {
	return (
		<div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 container mx-auto px-2 sm:px-4 w-full">
			{testimonials
				?.filter((t: any) => t.approved)
				?.map((t: any) => (
					<div
						key={t.id}
						className="bg-white border-[1px] border-gray-200 rounded-[12px] sm:rounded-[15px] p-3 sm:p-4"
					>
						<div className="flex items-center gap-2">
							<Avatar className="w-8 h-8 sm:w-10 sm:h-10">
								<AvatarImage src={t?.avatar} />
								<AvatarFallback className="text-[10px] sm:text-[12px]">{t?.name?.slice(0,2) || 'N/A'}</AvatarFallback>
							</Avatar>
							<div>
								<p className="text-zinc-700 text-[13px] sm:text-[14px] font-[600] m-0 p-0">
									{t?.name}
								</p>
								<span className="text-gray-600 text-[11px] sm:text-[12px] font-[400] mt-[-5px] sm:mt-[-7px] p-0 block">{t?.jobTitle || t?.email}</span>
							</div>
						</div>
						<div className="flex items-center mt-2 sm:mt-3">
							<StarsRating value={t.stars} readonly={true} scale={0.8} />
						</div>
						<p className="text-[#374151] text-[13px] sm:text-[14px] mt-2 sm:mt-3 mb-3 sm:mb-4 line-clamp-3">{t.message}</p>
						<span className="text-gray-400 text-[12px] sm:text-[14px] font-[500]">
							{new Date(t.createdAt).toLocaleDateString()}
						</span>
					</div>
				))}
		</div>
	);
}

export default BasicWall;
