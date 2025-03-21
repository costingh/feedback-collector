import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StarsRating from "../stars/stars-rating";

function BasicWall({ testimonials }: { testimonials: any }) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[70%] mx-auto">
			{testimonials
				?.filter((t: any) => t.approved)
				?.map((t: any) => (
					<div
						key={t.id}
						className="bg-white border-[1px] border-gray-200 rounded-[15px] p-4"
					>
						<div className="flex items-center gap-2">
							<Avatar>
								<AvatarImage src={t?.avatar} />
								<AvatarFallback>{t?.name?.slice(0,2) || 'N/A'}</AvatarFallback>
							</Avatar>
							<div>
								<p className="text-zinc-700 text-[14px] font-[600] m-0 p-0">
									{t?.name}
								</p>
								<span className="text-gray-600 text-[12px] font-[400] m-0 p-0"></span>
							</div>
						</div>
						<div className="flex items-center mt-3">
							<StarsRating value={t.stars} readonly={true} />
						</div>
						<p className="text-[#374151] mt-3 mb-4">{t.message}</p>
						<span className="text-gray-400 text-[14px] font-[500]">
							{new Date(t.createdAt).toLocaleDateString()}
						</span>
					</div>
				))}
		</div>
	);
}

export default BasicWall;
