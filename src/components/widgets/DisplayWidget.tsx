import React from "react";
import RollingWall from "../popups/RollingWall";
import BasicWall from "../popups/BasicWall";
import RatingBadge from "../popups/RatingBadge";
import SocialStar from "../popups/SocialStar";
import Avatars from "../popups/Avatars";
import MinimalistReview from "../popups/MinimalistReview";

function DisplayWidget({ widget, numberOfReviews }: { widget: any, numberOfReviews: string }) {
	return (
		<>
			{widget && (
				<div className="w-full h-full">
					{widget.type == "basic_wall" && (
						<BasicWall widget={{...widget, deviceWidth: widget.deviceWidth}} />
					)}

					{widget.type == "rolling_wall" &&
						(widget?.testimonials?.length > 10 ? (
							<RollingWall testimonials={widget?.testimonials} />
						) : (
							<BasicWall widget={{...widget, deviceWidth: widget.deviceWidth}} />
						))}

					{widget.type == "rating_badge" && (
						<RatingBadge testimonials={widget?.testimonials} />
					)}

					{widget.type == "social_star" && (
						<SocialStar testimonials={widget?.testimonials} />
					)}

					{widget.type == "avatars" && (
						<Avatars testimonials={widget?.testimonials} widget={widget} numberOfReviews={numberOfReviews} />
					)}

					{widget.type == "minimalist_review" && (
						<MinimalistReview review={widget?.testimonials?.[0]}/>
					)}
				</div>
			)}
		</>
	);
}

export default DisplayWidget;
