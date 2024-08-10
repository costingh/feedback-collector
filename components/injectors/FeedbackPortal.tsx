import React from "react";
import { usePortal } from "react-cool-portal";

const FeedbackPopup: React.FC = () => {
	return (
		<div className="fixed inset-0 flex items-center justify-center p-5 bg-black bg-opacity-50">
			<div className="p-5 bg-white shadow-md rounded-md min-w-[500px] max-w-full text-left">
				<h2 className="text-2xl font-medium mb-4">
					Leave a Testimonial
				</h2>
				<ul className="my-4">
					<li className="my-1 text-gray-800 font-normal text-[15px]">
						What do you like best about our service?
					</li>
					<li className="my-1 text-gray-800 font-normal text-[15px]">
						Would you suggest us to a friend?
					</li>
				</ul>
				<textarea
					className="w-full p-2.5 rounded-lg border border-gray-200 text-gray-700 min-h-[120px]"
					placeholder="Write a nice message here ✨"
				></textarea>
				<button className="mt-2 p-2.5 rounded-lg border border-gray-200 text-gray-700 w-full">
					Submit
				</button>
			</div>
		</div>
	);
};

const FeedbackPortal: React.FC = () => {
	const { Portal, show } = usePortal({
		defaultShow: true,
	});

	return (
		<>
			<button onClick={show}>Open Feedback Form</button>
			<Portal>
				<FeedbackPopup />
			</Portal>
		</>
	);
};

export default FeedbackPortal;
