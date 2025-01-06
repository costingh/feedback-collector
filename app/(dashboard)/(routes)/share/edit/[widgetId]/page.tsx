"use client";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader } from "@/components/loader";
import DisplayWidget from "@/components/widgets/DisplayWidget";
import WidgetEditorNav from "@/components/widgets/WidgetEditorNav";
import WidgetEditorSidebar from "@/components/widgets-studio/WidgetEditorSidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn, timeAgo } from "@/lib/utils";
import DisplayTestimonialTags from "@/components/tags/DisplayTestimonialTags";
import StarsRating from "@/components/stars-rating";
import TestimonialsList from "@/components/testimonials/TestimonialsList";
import { SelectTestimonialsToShareModal } from "@/components/testimonials/SelectTestimonialsToShareModal";
import { useProjectContext } from "@/context/ProjectContext";
import { useProjects } from "@/hooks/useProjects";
import { ShareWidgetModal } from "@/components/widgets/ShareWidgetModal";

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

const LandingPage = ({ params }: { params: { widgetId: string } }) => {
	const [isSearchingWidgets, setIsSearchingWidgets] = useState(true);
	const [widgets, setWidgets] = useState([]);
	const [startTime, setStartTime] = useState<number | null>(null); // Start time for time spent
	const [hasInteracted, setHasInteracted] = useState(false); // Track user interaction
	const [activeSubmenu, setActiveSubmenu] = useState<string>("");
	const [checkedItems, setChecked] = useState(new Set());
	const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
	const [tags, setTags] = useState([]);
	const [deviceResolution, setDeviceResolution] = useState({
		width: window.innerWidth, // Get current width in pixels
		height: window.innerHeight, // Get current height in pixels
	});

	const { isSearchingProjects, projects, refreshProjects, setProjects } =
		useProjects();
	const { activeProject, setActiveProject } = useProjectContext();

	useEffect(() => {
		const handleResize = () => {
			setDeviceResolution({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const handleGetAllUserWidgets = useCallback(async () => {
		setIsSearchingWidgets(true);
		try {
			const response = await axios.get(
				"/api/widgets/get-all-user-widgets?url=" +
					params.widgetId +
					"&projectId=" +
					activeProject?.id
			);
			console.log(response.data.widgets);
			setWidgets(response.data.widgets);

			if (response?.data?.widgets?.[0]?.id)
				setActiveProject({id: response?.data?.widgets?.[0]?.projectId})
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
		if(activeProject) fetchAllData();
	}, [activeProject]);

	const fetchAllData = async () => {
		try {
			// setIsSearchingTestimonials(true);

			const [tagsResponse, testimonialsResponse] = await Promise.all([
				axios.get(
					"/api/tag/get-all-user-tags?projectId=" + activeProject?.id
				),
				axios.get(
					"/api/testimonials/get-all-user-testimonials?projectId=" +
						activeProject?.id
				),
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
		// @ts-ignore
		if (widgets?.[0]?.testimonials)
			// @ts-ignore
			setChecked(new Set(widgets[0].testimonials.map((t) => t.id)));
	}, [widgets]);

	const refreshData = async () => {
		await fetchAllData();
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
				<div className="hidden h-full md:flex w-[60px] md:flex-col md:fixed md:inset-y-0 z-80 border-r-[1px] border-gray-200 bg-white">
					<WidgetEditorSidebar
						activeSubmenu={activeSubmenu}
						setActiveSubmenu={setActiveSubmenu}
						widget={widgets?.[0] || null}
					/>
				</div>
				<WidgetEditorNav
					deviceResolution={deviceResolution}
					setDeviceResolution={setDeviceResolution}
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
								<Loader />
							</div>
						) : (
							<div className="mt-10">
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
								<ShareWidgetModal
									//@ts-ignore
									widgetUrl={widgets?.[0]?.url || ""}
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
									widgetId={widgets?.[0]?.id}
									refreshData={refreshData}
								/>
								{/* @ts-ignore */}
								{widgets?.[0]?.testimonials?.length != 0 && (
									<DisplayWidget widget={widgets?.[0]} />
								)}
								{!widgets?.[0] && <div>An error occured</div>}

								{/* @ts-ignore */}
								{!widgets?.[0]?.testimonials?.length && (
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
