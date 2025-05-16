import React, { useState } from "react";
import { Rating } from "@material-tailwind/react";

type StarsRatingProps = {
	ratingChanged?: (newRating: number) => void;
	count?: number;
	readonly?: boolean;
	value?: number;
	style?: any;
	scale?: any;
	marginLeft?: number;
	ratedIcon?: React.ReactNode;
	unratedIcon?: React.ReactNode;
};


const StarsRating: React.FC<StarsRatingProps> = ({ ratingChanged, readonly, value, style, scale, marginLeft, ratedIcon, unratedIcon }) => {
	return (
		//@ts-ignore
		<Rating
			value={value != undefined ? value : 5}
			unratedColor="amber"
			ratedColor="amber"
			className="text-[#FFBF00]"
			style={{transform: `scale(${scale})`, marginLeft: `${marginLeft}px`, ...style}}
			onChange={(value) => ratingChanged && ratingChanged(value)}
			readonly={readonly}
      		ratedIcon={ratedIcon}
      		unratedIcon={unratedIcon}
		/>
	);
};

export default StarsRating;

