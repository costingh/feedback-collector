import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StarsRating from "../stars-rating";
import RollingWall from "../popups/RollingWall";
import BasicWall from "../popups/BasicWall";
import { testimonials } from "./../../app/(landing)/constants";
import RatingBadge from "../popups/RatingBadge";

function DisplayWidget({ widget }: { widget: any }) {
	return (
		<div className="w-full h-full">
			{widget.type == "basic_wall" && (
				<BasicWall testimonials={widget?.testimonials} />
			)}

			{widget.type == "rolling_wall" &&
				(widget?.testimonials?.length > 10 ? (
					<RollingWall testimonials={widget?.testimonials} />
				) : (
					<BasicWall testimonials={widget?.testimonials} />
				))}

			{widget.type == "rating_badge" && (
				<RatingBadge testimonials={widget?.testimonials} />
			)}
		</div>
	);
}

export default DisplayWidget;
