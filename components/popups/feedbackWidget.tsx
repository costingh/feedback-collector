import React from "react";
import ReactDOM from "react-dom";
import TestimonialPopup from "./TestimonialPopup";

const render = (containerId: string) => {
	const container = document.getElementById(containerId);
	if (container) {
		ReactDOM.render(<TestimonialPopup />, container);
	}
};

export { render };
