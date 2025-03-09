"use client";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import WidgetEditorNav from "@/components/widgets/WidgetEditorNav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn, timeAgo } from "@/lib/utils";
import DisplayTestimonialTags from "@/components/tags/DisplayTestimonialTags";
import TestimonialsList from "@/components/testimonials/TestimonialsList";
import { ShareWidgetModal } from "@/components/widgets/ShareWidgetModal";
import { useQueryData } from "@/hooks/useQueryData";
import { getUserWidget, getUserWidgets } from "@/actions/widgets";
import { QueryClient } from "@tanstack/react-query";
import { SelectTestimonialsToShareModal } from "@/components/testimonials/SelectTestimonialsToShareModal";
import DisplayWidget from "@/components/widgets/DisplayWidget";
import Loader from "@/components/global/loader";
import WidgetEditorSidebar from "@/components/widgets/WidgetEditorSidebar";
import { getUserTestimonials } from "@/actions/workspace";

interface Testimonial {
	// Define the shape of your testimonial here
	id: string;
	content: string;
	// Add more fields as needed
}

interface Widget {
	id: string;
	testimonials: Testimonial[]; // Array of testimonials
	// Add more fields as needed
}

const LandingPage = ({ params }: { params: { widgetId: string, workspaceId: string } }) => {
	const [startTime, setStartTime] = useState<number | null>(null); // Start time for time spent
	const [hasInteracted, setHasInteracted] = useState(false); // Track user interaction
	const [activeSubmenu, setActiveSubmenu] = useState<string>("");
	const [checkedItems, setChecked] = useState(new Set());
	const [tags, setTags] = useState([]);
	const [deviceResolution, setDeviceResolution] = useState({
		width: window?.innerWidth, // Get current width in pixels
		height: window?.innerHeight, 
	});


	useEffect(() => {
		const handleResize = () => {
			setDeviceResolution({
				width: window?.innerWidth,
				height: window?.innerHeight,
			});
		};
		window?.addEventListener("resize", handleResize);
		return () => window?.removeEventListener("resize", handleResize);
	}, []);

	const { data: widgetResponse, isFetching: isSearchingWidgets } = useQueryData(
		["shared-widget"],
		() => getUserWidget('/' + params.widgetId)
	);

	const { data: testimonialsResponse, isFetching: isSearchingTestimonials } = useQueryData(
		["user-testimonials", params.workspaceId],
		() => getUserTestimonials(params.workspaceId)
	);

	const widget = (widgetResponse as any)?.widget || [];

	const userTestimonials = (testimonialsResponse as any)?.data || [];

	const [testimonials, setTestimonials] = useState<Testimonial[]>(userTestimonials);


	console.log(widget)


	useEffect(() => {
		setTestimonials(userTestimonials);
	}, [userTestimonials])

	const handleBounce = () => {
		//@ts-ignore
		if (!hasInteracted && widget?.id) {
			//@ts-ignore
			trackMetric("bounce", 0, widget?.id);
		}
	};

	useEffect(() => {
		setStartTime(Date.now());

		window.addEventListener("beforeunload", handleBounce);

		// Cleanup on component unmount
		return () => {
			if (startTime) {
				const timeSpent = (Date.now() - startTime) / 1000;
				//@ts-ignore
				trackMetric("time", timeSpent, widget?.id);
			}
			window.removeEventListener("beforeunload", handleBounce);
		};
	}, []);

	const getDeviceInfo = () => {
		const userAgent = navigator.userAgent;
		const platform = navigator.platform;
		return `${platform}, ${userAgent}`;
	};

	const handleInteraction = () => {
		if (!hasInteracted) {
			setHasInteracted(true);
			trackMetric("interaction", 0, widget?.id);
		}
	};

	const trackMetric = async (
		eventType: string,
		timeSpent?: number,
		widgetId?: string
	) => {
		try {
			await axios.post("/api/analytics/widgets/track-metrics", {
				widgetId,
				eventType,
				timeSpent,
				deviceInfo: getDeviceInfo(),
			});
		} catch (error) {
			console.error("Error tracking metric:", error);
		}
	};

	// useEffect(() => {
	// 	// @ts-ignore
	// 	if (widget?.testimonials)
	// 		// @ts-ignore
	// 		setChecked(new Set(widgets[0].testimonials.map((t) => t.id)));
	// }, [widgets]);

	const refreshData = async () => {
		// await fetchAllData();
	};

	const isChecked = (id: number) => {
		return checkedItems.has(id);
	};

	return (
		<>
			<div
				onClick={handleInteraction}
				className="relative bg-gray-100 min-h-[100vh]"
			>
				<WidgetEditorNav
					deviceResolution={deviceResolution}
					setDeviceResolution={setDeviceResolution}
					setActiveSubmenu={setActiveSubmenu}
				/>
				<div className="flex items-center justify-center p-4">
					<div
						style={{
							width: `${deviceResolution.width}px`,
							height: `${deviceResolution.height}px`,
						}}
						className={cn(
							"p-2",
							(deviceResolution.width == 375 ||
								deviceResolution.width == 768) &&
								"border-[2px] rounded-[20px] border-black"
						)}
					>
						{isSearchingWidgets ? (
							<div className="mt-10">
								<Loader state={true} />
							</div>
						) : (
							<div className="mt-10">
								<ShareWidgetModal
									//@ts-ignore
									widgetUrl={widget?.url || ""}
									isOpened={activeSubmenu == "share_widget"}
									handleClose={() => setActiveSubmenu("")}
								/>

								<SelectTestimonialsToShareModal
									isOpened={
										activeSubmenu == "select_testimonials"
									}
									handleClose={() => setActiveSubmenu("")}
									testimonials={testimonials}
									tags={tags}
									isChecked={isChecked}
									setChecked={setChecked}
									checkedItems={checkedItems}
									// @ts-ignore
									widgetId={widget?.id}
									refreshData={refreshData}
								/>
								{/* @ts-ignore */}
								{widget?.testimonials?.length != 0 && (
									<DisplayWidget widget={widget} />
								)}
								{!widget && <div>An error occured</div>}

								{/* @ts-ignore */}
								{!widget?.testimonials?.length && (
									<div className="w-full h-full flex items-center justify-center">
										<div className="flex flex-col items-center justify-center max-w-lg text-center">
											<h1 className="text-black font-700 text-[20px] mb-2">
												Oops, looks like you didnt link
												any testimonials
											</h1>
											<p className="text-gray-700 text-[16px] mb-2">
												You cant share this
												&quot;Carousel&quot; like this,
												so please select some
												testimonials to include them in
												the carousel.
											</p>
											<span className="text-gray-500 text-[14px]">
												Very important: only
												&quot;approved&quot;
												testimonials will appear here.
											</span>
										</div>
									</div>
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default LandingPage;
