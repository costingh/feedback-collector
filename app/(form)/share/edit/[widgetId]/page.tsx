"use client";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader } from "@/components/loader";
import DisplayWidget from "@/components/widgets/DisplayWidget";
import WidgetEditorNav from "@/components/widgets/WidgetEditorNav";
import WidgetEditorSidebar from "@/components/widgets-studio/WidgetEditorSidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { timeAgo } from "@/lib/utils";
import DisplayTestimonialTags from "@/components/tags/DisplayTestimonialTags";
import StarsRating from "@/components/stars-rating";
import TestimonialsList from "@/components/testimonials/TestimonialsList";
import { SelectTestimonialsToShareModal } from "@/components/testimonials/SelectTestimonialsToShareModal";

const LandingPage = ({ params }: { params: { widgetId: string } }) => {
	const [isSearchingWidgets, setIsSearchingWidgets] = useState(true);
	const [widgets, setWidgets] = useState([]);
	const [startTime, setStartTime] = useState<number | null>(null); // Start time for time spent
	const [hasInteracted, setHasInteracted] = useState(false); // Track user interaction
	const [activeSubmenu, setActiveSubmenu] = useState<string>("");
	const [checkedItems, setChecked] = useState(new Set());
	const [testimonials, setTestimonials] = useState([]);
	const [tags, setTags] = useState([]);

	const handleGetAllUserWidgets = useCallback(async () => {
		setIsSearchingWidgets(true);
		try {
			const response = await axios.get(
				"/api/widgets/get-all-user-widgets?url=" + params.widgetId
			);
			console.log(response.data.widgets);
			setWidgets(response.data.widgets);

			if (response?.data?.widgets?.[0]?.id)
				trackMetric("view", 1, response?.data?.widgets?.[0]?.id);
		} catch (err) {
			toast.error("An error occurred while retrieving the widget!");
		} finally {
			setIsSearchingWidgets(false);
		}
	}, []);

	const handleBounce = () => {
		//@ts-ignore
		if (!hasInteracted && widgets?.[0]?.id) {
			//@ts-ignore
			trackMetric("bounce", 0, widgets?.[0]?.id);
		}
	};

	useEffect(() => {
		handleGetAllUserWidgets();
		setStartTime(Date.now());

		window.addEventListener("beforeunload", handleBounce);

		// Cleanup on component unmount
		return () => {
			if (startTime) {
				const timeSpent = (Date.now() - startTime) / 1000;
				//@ts-ignore
				trackMetric("time", timeSpent, widgets?.[0]?.id);
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
			//@ts-ignore
			trackMetric("interaction", 0, widgets?.[0]?.id);
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

	useEffect(() => {
		fetchAllData();
	}, []);

	const fetchAllData = async () => {
		try {
			// setIsSearchingTestimonials(true);

			const [tagsResponse, testimonialsResponse] = await Promise.all([
				axios.get("/api/tag/get-all-user-tags"),
				axios.get("/api/testimonials/get-all-user-testimonials"),
			]);

			console.log(testimonialsResponse?.data?.testimonials);
			setTags(tagsResponse?.data?.tags || []);
			setTestimonials(testimonialsResponse?.data?.testimonials || []);
		} catch (err) {
			toast.error("An error occurred while retrieving your data!");
		} finally {
			// setIsSearchingTestimonials(false);
		}
	};

	useEffect(() => {
		if(widgets?.[0]?.testimonials)
			setChecked(new Set(widgets[0].testimonials.map(t => t.id)))
	}, [widgets])

	const refreshData = async () => {
		await fetchAllData()
	}

	const isChecked = (id: number) => {
		return checkedItems.has(id);
	};

	return (
		<>
			<div
				onClick={handleInteraction}
				className="relative bg-gray-100 min-h-[100vh]"
			>
				<div className="hidden h-full md:flex w-[60px] md:flex-col md:fixed md:inset-y-0 z-80 border-r-[1px] border-gray-200 bg-white">
					<WidgetEditorSidebar
						activeSubmenu={activeSubmenu}
						setActiveSubmenu={setActiveSubmenu}
					/>
				</div>
				<WidgetEditorNav />
				{isSearchingWidgets ? (
					<div className="mt-10">
						<Loader />
					</div>
				) : (
					<div className="">
						{/* {activeSubmenu == "select_testimonials" && (
							<div className="bg-white w-[450px] h-[calc(100vh-100px)] pl-[80px] p-5">
								<TestimonialsList
									testimonials={testimonials}
									tags={tags}
									isChecked={isChecked}
									setChecked={setChecked}
									checkedItems={checkedItems}
								/>
							</div>
						)} */}
						<SelectTestimonialsToShareModal 
							isOpened={activeSubmenu == "select_testimonials"} 
							handleClose={() => setActiveSubmenu('')} 
							testimonials={testimonials}
							tags={tags}
							isChecked={isChecked}
							setChecked={setChecked}
							checkedItems={checkedItems}
							widgetId={widgets?.[0].id}
							refreshData={refreshData}
						/>
						{widgets?.[0]?.testimonials && (
							<DisplayWidget widget={widgets?.[0]} />
						)}
						{!widgets?.[0] && <div>An error occured</div>}
						{!widgets?.[0]?.testimonials?.length && (
							<div className="w-full h-full flex items-center justify-center">
								<div className="flex flex-col items-center justify-center max-w-lg text-center">
									<h1 className="text-black font-700 text-[20px] mb-2">
										Oops, looks like you didnt link any
										testimonials
									</h1>
									<p className="text-gray-700 text-[16px] mb-2">
										You cant share this "Carousel" like
										this, so please select some testimonials
										to include them in the carousel.
									</p>
									<span className="text-gray-500 text-[14px]">
										Very important: only "approved"
										testimonials will appear here.
									</span>
								</div>
							</div>
						)}
					</div>
				)}
			</div>
		</>
	);
};

export default LandingPage;
