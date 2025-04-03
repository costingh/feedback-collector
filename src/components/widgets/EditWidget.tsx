"use client";

import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getUserTestimonials } from "@/actions/workspace";
import { getUserForms } from "@/actions/form";

import { cn } from "@/lib/utils";
import WidgetEditorNav from "@/components/widgets/WidgetEditorNav";
import { ShareWidgetModal } from "@/components/widgets/ShareWidgetModal";
import { SelectTestimonialsToShareModal } from "@/components/testimonials/SelectTestimonialsToShareModal";
import DisplayWidget from "@/components/widgets/DisplayWidget";
import { useQueryData } from "@/hooks/useQueryData";
import { getUserWidget } from "@/actions/widgets";
import { useTags } from "@/hooks/useTags";
import axios from "axios";
import { LoadingSpinner } from "../animations/loading-spinner";

const EditWidget = ({ widgetId, workspaceId }: any) => {
	const [currentWidget, setCurrentWidget] = useState<any>(null);
	const [isLoading, setIsLoading] = useState(true);
    const [deviceResolution, setDeviceResolution] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});
    const [hasInteracted, setHasInteracted] = useState(false);
	const [activeSubmenu, setActiveSubmenu] = useState<string>("");

	const { data: widgetData } = useQueryData(
		["widget-data", widgetId, workspaceId],
		() => fetchData(widgetId, workspaceId)
	);

	//@ts-ignore
	const { widgetResponse, testimonialsResponse, formsData } =
		widgetData || {};

	const allTestimonialsIds = testimonialsResponse?.data?.map(
		(t: any) => t.id
	);
	const currentWidgetTestimonialsIds =
		widgetResponse?.widget?.testimonials?.map((t: any) => t.id);

	const testimonialsIdsToCheck = new Set(
		allTestimonialsIds?.filter((id: string) =>
			currentWidgetTestimonialsIds?.includes(id)
		)
	);

	const [checkedItems, setChecked] = useState(testimonialsIdsToCheck);

	if (widgetResponse?.widget) {
		widgetResponse.widget.testimonials =
			testimonialsResponse?.data?.filter((t: any) =>
				testimonialsIdsToCheck?.has(t.id)
			) || [];
	}

	useEffect(() => {
		if (widgetResponse?.widget) {
			setCurrentWidget(widgetResponse?.widget);
			setIsLoading(false);
		}
	}, [widgetResponse?.widget]);

	useEffect(() => {
		setCurrentWidget((prevWidget: any) => ({
			...prevWidget,
			testimonials:
				testimonialsResponse?.data?.filter((t: any) =>
					checkedItems?.has(t.id)
				) || [],
		}));
	}, [checkedItems]);

	if (!widgetResponse) return null;

	const { tags, groupedTags } = useTags(widgetResponse?.widget?.workspaceId);

	// Resize Listener
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

	useEffect(() => {
		const startTime = Date.now();

		const handleUnload = () => {
			if (!hasInteracted && currentWidget?.id) trackMetric("bounce");
			trackMetric("time", (Date.now() - startTime) / 1000);
		};

		window.addEventListener("beforeunload", handleUnload);
		return () => window.removeEventListener("beforeunload", handleUnload);
	}, [hasInteracted, currentWidget?.id]);

	const trackMetric = async (eventType: string, timeSpent = 0) => {
		try {
			await axios.post("/api/analytics/widgets/track-metrics", {
				widgetId: currentWidget?.id,
				eventType,
				timeSpent,
				deviceInfo: `${navigator.platform}, ${navigator.userAgent}`,
			});
		} catch (error) {
			console.error("Error tracking metric:", error);
		}
	};

	return (
		<div
			onClick={() => setHasInteracted(true)}
			className="relative bg-gray-100 min-h-screen"
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
						[375, 768].includes(deviceResolution.width) &&
							"border-2 rounded-2xl border-black"
					)}
				>
					<ShareWidgetModal
						widgetUrl={widgetResponse?.widget?.url || ""}
						isOpened={activeSubmenu === "share_widget"}
						handleClose={() => setActiveSubmenu("")}
					/>

					<SelectTestimonialsToShareModal
						isOpened={activeSubmenu === "select_testimonials"}
						handleClose={() => setActiveSubmenu("")}
						testimonials={testimonialsResponse?.data || []}
						isChecked={(id: string) => checkedItems.has(id)}
						tags={tags}
						groupedTags={groupedTags}
						setChecked={setChecked}
						checkedItems={checkedItems}
						widgetId={widgetResponse?.widget?.id}
						userForms={formsData?.data?.forms || []}
					/>

					{isLoading ? (
						<div className="w-full h-full flex items-center justify-center">
							<span className="inline-block">
								<LoadingSpinner size={30} />
							</span>
						</div>
					) : currentWidget?.testimonials?.length > 0 ? (
						<DisplayWidget widget={currentWidget} />
					) : (
						<div className="w-full h-full flex items-center justify-center">
							<div className="flex flex-col items-center justify-center max-w-lg text-center">
								<h1 className="text-black font-bold text-xl mb-2">
									Oops, no testimonials linked
								</h1>
								<p className="text-gray-700 text-lg mb-2">
									Select testimonials to display them in the
									widget.
								</p>
								<span className="text-gray-500 text-sm">
									Only "approved" testimonials will appear.
								</span>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

async function fetchData(widgetId: string, workspaceId: string) {
	const widgetResponse = await getUserWidget(`/${widgetId}`);
	const testimonialsResponse = await getUserTestimonials(workspaceId);
	const formsData = await getUserForms(workspaceId);

	return {
		widgetResponse,
		testimonialsResponse,
		formsData,
	};
}

export default EditWidget;
