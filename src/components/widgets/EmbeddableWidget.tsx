"use client";

import React, { useEffect, useState } from "react";
import DisplayWidget from "@/components/widgets/DisplayWidget";
import { LoadingSpinner } from "@/components/animations/loading-spinner";

const EmbeddableWidget = ({ params }: { params: { url: string } }) => {
	const [widget, setWidget] = useState<any>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://www.feedbackz.co/api/widgets/get/${params.url}`
				);
				const data = await response.json();
				setWidget(data.widget || []);
			} catch (error) {
				console.error("Error fetching widget:", error);
				setWidget(null);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [params.url]);

	if (loading) {
		return (
			<div className="w-full h-full flex items-center justify-center">
				<span className="inline-block">
					<LoadingSpinner size={30} />
				</span>
			</div>
		);
	}

	if (!widget || !widget.testimonials?.length) {
		return (
			<div className="w-full h-full flex items-center justify-center">
				<div className="flex flex-col items-center justify-center max-w-lg text-center">
					<h1 className="text-black font-700 text-[20px] mb-2">
						Oops, no testimonials found
					</h1>
					<p className="text-gray-700 text-[16px] mb-2">
						Make sure you have approved testimonials to display.
					</p>
				</div>
			</div>
		);
	}

	return <DisplayWidget widget={widget} />;
};

export default EmbeddableWidget;
