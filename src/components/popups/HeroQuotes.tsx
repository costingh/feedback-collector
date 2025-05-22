import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StarsRating from "@/components/stars/stars-rating";
import clsx from "clsx";
import { useExpandableText } from "@/hooks/useExpandableText";
import { RatedIconVariant2 } from "@/app/(website)/_components/icons/rated-icon-variant-2";
import { UnratedIconVariant2 } from "@/app/(website)/_components/icons/unrated-icon-variant-2";

function HeroQuotes({ transition, widget, style }: { transition?: boolean, widget?: any, style?: React.CSSProperties }) {
	const { isExpanded, toggle } = useExpandableText();
	const [maxCharactersToShow, setMaxCharactersToShow] = useState(300);

	const [selectedTestimonial, setSelectedTestimonial] = useState(widget?.testimonials?.[0] || null);

	useEffect(() => {
		setSelectedTestimonial(widget?.testimonials?.[0] || null);
	}, [widget]);

	return (
		<div
			className={clsx(
				"flex flex-col justify-center items-center p-2 w-[400px]",
				transition &&
				"transition-transform duration-300 ease-in-out group-hover:scale-110"
			)}
			style={style}
		>
			<Avatar>
				<AvatarImage src={selectedTestimonial?.avatar} />
				<AvatarFallback className="bg-gray-200 text-gray-400">{selectedTestimonial?.name?.slice(0, 2) || 'N/A'}</AvatarFallback>
			</Avatar>
			<p className="text-gray-900 text-center font-normal text-[15px] mt-2" style={{ color: widget?.primaryTextColor }}>
				{selectedTestimonial?.message?.length > maxCharactersToShow && !isExpanded(selectedTestimonial?.id)
					? `${selectedTestimonial?.message.slice(0, maxCharactersToShow)}... `
					: selectedTestimonial?.message}

				{selectedTestimonial?.message?.length > maxCharactersToShow && (
					<span
						onClick={() => toggle(selectedTestimonial?.id)}
						className="text-blue-500 cursor-pointer hover:underline ml-1 text-sm"
					>
						{isExpanded(selectedTestimonial?.id) ? "See less" : "See more"}
					</span>
				)}

				{!selectedTestimonial?.message && 'Here it will be the testimonial content'}
			</p>
			<div className="block mt-1">
				<StarsRating
					value={Math.floor(selectedTestimonial?.stars || 0)}
					readonly
					ratedIcon={<RatedIconVariant2 />}
					unratedIcon={<UnratedIconVariant2 />}
				/>
			</div>

			<span className="text-gray-400 font-normal text-[12px]" style={{ color: widget?.secondaryTextColor }}>
				{selectedTestimonial?.name || 'Mr. John Doe'}
			</span>

			<span className="text-blue-300" style={{ color: widget?.thirdTextColor }}>{selectedTestimonial?.jobTitle || 'Sales Manager'}</span>
		</div>
	);
}

export default HeroQuotes;
