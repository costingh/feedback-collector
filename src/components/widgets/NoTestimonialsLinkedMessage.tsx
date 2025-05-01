import { needsDarkBackground } from "@/lib/utils";
import clsx from "clsx";
import React from "react";

function NoTestimonialsLinkedMessage({widget}: {widget: any}) {
	return (
		<div className="w-full h-full flex items-center justify-center p-4">
			<div className="flex flex-col items-center justify-center max-w-[280px] sm:max-w-lg text-center">
				<h1
					className={clsx(
						"font-700 text-[15px] sm:text-[20px] mb-2",
						needsDarkBackground(widget)
							? "text-gray-300"
							: "text-black"
					)}
				>
					Oops, looks like you didnt link the required number of testimonials to
					this widget.
				</h1>
				<p
					className={clsx(
						"text-gray-600 text-[14px] sm:text-[16px]",
						needsDarkBackground(widget)
							? "text-gray-400"
							: "text-black"
					)}
				>
					Please go to the "Creator" sidebar menu and link
					some
				</p>
			</div>
		</div>
	);
}

export default NoTestimonialsLinkedMessage;
