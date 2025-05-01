import React from "react";

function NoTestimonialsLinkedMessage() {
	return (
		<div className="w-full h-full flex items-center justify-center">
			<div className="flex flex-col items-center justify-center max-w-lg text-center">
				<h1 className="text-black font-bold text-xl mb-2">
					Oops, no testimonials linked
				</h1>
				<p className="text-gray-700 text-lg mb-2">
					Select testimonials to display them in the widget.
				</p>
				<span className="text-gray-500 text-sm">
					Only "approved" testimonials will appear.
				</span>
			</div>
		</div>
	);
}

export default NoTestimonialsLinkedMessage;
