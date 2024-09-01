import React, { useState } from "react";
import { Rating } from "@material-tailwind/react";

type StarsRatingProps = {
	ratingChanged?: (newRating: number) => void;
	count?: number;
	readonly?: boolean;
	value?: number;
};

const StarsRating: React.FC<StarsRatingProps> = ({ ratingChanged, readonly, value }) => {
	return (
		//@ts-ignore
		<Rating
			value={value != undefined ? value : 5}
			unratedColor="amber"
			ratedColor="amber"
			className="text-[#FFBF00]"
			style={{transform: 'scale(1.2)', marginLeft: '10px'}}
			onChange={(value) => ratingChanged && ratingChanged(value)}
			readonly={readonly}
		/>
	);
};

export default StarsRating;

