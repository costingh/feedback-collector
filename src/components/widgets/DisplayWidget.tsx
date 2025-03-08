import React from "react";
import RollingWall from "../popups/RollingWall";
import BasicWall from "../popups/BasicWall";
import RatingBadge from "../popups/RatingBadge";
import SocialStar from "../popups/SocialStar";
import Avatars from "../popups/Avatars";

function DisplayWidget({ widget }: { widget: any }) {
	return (
		<>
			{widget && (
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

					{widget.type == "social_star" && (
						<SocialStar testimonials={widget?.testimonials} />
					)}

					{widget.type == "avatars" && (
						<Avatars testimonials={widget?.testimonials} />
					)}
				</div>
			)}
		</>
	);
}

export default DisplayWidget;
