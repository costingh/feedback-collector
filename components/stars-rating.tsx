import React from "react";
import ReactStars from "react-rating-stars-component";

function StarsRating({ratingChanged}) {


    // const Icon = <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" stroke="currentColor" fill="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-gray-200 duration-200 hover:scale-110"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;
	
    return (
		<ReactStars
			count={5}
			onChange={ratingChanged}
			size={32}
			isHalf={true}
			emptyIcon={<i className="far fa-star"></i>}
			halfIcon={<i className="fa fa-star-half-alt"></i>}
			fullIcon={<i className="fa fa-star"></i>}
			activeColor="#ffd700"
		/>
	);
}

export default StarsRating;
