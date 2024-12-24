import React from "react";

interface ExplorePlanCardProps {
	title: string;
	description: string;
	price: string;
	features: string[];
	buttonText: string;
}

const ExplorePlanCard: React.FC<ExplorePlanCardProps> = ({
	title,
	description,
	price,
	features,
	buttonText,
}) => {
	return (
		<article className="plan-card">
			<h3>{title}</h3>
			<p>{description}</p>
			<p className="price">{price}</p>
			<ul>
				{features.map((feature, index) => (
					<li key={index}>{feature}</li>
				))}
			</ul>
			<button>{buttonText}</button>
		</article>
	);
};

export default ExplorePlanCard;
