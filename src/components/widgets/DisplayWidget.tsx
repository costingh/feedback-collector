import React from "react";
import RollingWall from "../popups/RollingWall";
import BasicWall from "../popups/BasicWall";
import RatingBadge from "../popups/RatingBadge";
import SocialStar from "../popups/SocialStar";
import Avatars from "../popups/Avatars";
import MinimalistReview from "../popups/MinimalistReview";
import HeroQuotes from "../popups/HeroQuotes";

function DisplayWidget({ widget, setPage, isFetching, paginationData }: { widget: any, setPage: any, isFetching: boolean, paginationData?: any }) {
	return (
		<div className="w-full flex items-center justify-center">
			{widget && (
				<>
					{widget.type == "basic_wall" && (
						<BasicWall widget={{...widget, deviceWidth: widget.deviceWidth}} setPage={setPage} isFetching={isFetching} paginationData={paginationData} />
					)}

					{widget.type == "rolling_wall" &&
						(widget?.testimonials?.length > 10 ? (
							<RollingWall testimonials={widget?.testimonials} widget={widget} />
						) : (
							<BasicWall widget={{...widget, deviceWidth: widget.deviceWidth}} setPage={setPage} isFetching={isFetching} paginationData={paginationData} />
						))}

					{widget.type == "rating_badge" && (
						<RatingBadge widget={widget} />
					)}

					{widget.type == "social_star" && (
						<SocialStar testimonials={widget?.testimonials} numberOfReviews={widget?._count?.testimonials} widget={widget} />
					)}

					{widget.type == "avatars" && (
						<Avatars testimonials={widget?.testimonials} widget={widget} numberOfReviews={widget?._count?.testimonials} />
					)}

					{widget.type == "minimalist_review" && (
						<MinimalistReview review={widget?.testimonials?.[0]} widget={widget}/>
					)}

					{widget.type == "hero_quotes" && (
						<HeroQuotes widget={widget} />
					)}
				</>
			)}
		</div>
	);
}

export default DisplayWidget;
