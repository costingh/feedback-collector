"use client";

import TestimonialPopup from "@/components/popups/TestimonialPopup";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader } from "@/components/loader";
import { Widget } from "@prisma/client";
import DisplayWidget from "@/components/widgets/DisplayWidget";

const LandingPage = ({ params }: { params: { url: string } }) => {
	const widgetUrl = params.url;

	const [isSearchingWidget, setIsSearchingWidget] = useState(true);
	const [widgets, setWidgets] = useState<any | null>(null);

	const handleGetWidgetByUrl = useCallback(async (widgetUrl: string) => {
		setIsSearchingWidget(true);
		try {
			const response = await axios.get(
				`/api/widgets/get-all-user-widgets?url=${widgetUrl}`
			);
			const widgetResponse = response?.data?.widgets;

			if (!widgetResponse) {
				toast.error("Widget not found!");
				return;
			}

			setWidgets(widgetResponse);
		} catch (err) {
			console.error(err);
			toast.error("An error occurred while retrieving the widget!");
		} finally {
			setIsSearchingWidget(false);
		}
	}, []);

	useEffect(() => {
		if (widgetUrl) {
			handleGetWidgetByUrl(widgetUrl);
		}
	}, [widgetUrl, handleGetWidgetByUrl]);

	return (
		<>
			{isSearchingWidget ? (
				<Loader />
			) : (
				<>
					{/* @ts-ignore */}
					{widgets?.[0] && widgets?.[0]?.testimonials?.length && (
						<DisplayWidget widget={widgets?.[0]} />
					)}
					{!widgets?.[0] && <div>An error occured</div>}
					{/* @ts-ignore */}
					{!widgets?.[0]?.testimonials?.length && (
						<div className="w-full h-full flex items-center justify-center">
							<div className="flex flex-col items-center justify-center max-w-lg text-center">
								<h1 className="text-black font-700 text-[20px] mb-2">
									Oops, looks like you didnt link any
									testimonials
								</h1>
								<p className="text-gray-700 text-[16px] mb-2">
									You cant share this &quot;Carousel&quot;
									like this, so please select some
									testimonials to include them in the
									carousel.
								</p>
								<span className="text-gray-500 text-[14px]">
									Very important: only &quot;approved&quot;
									testimonials will appear here.
								</span>
							</div>
						</div>
					)}
				</>
			)}
		</>
	);
};

export default LandingPage;
