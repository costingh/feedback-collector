"use client";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader } from "@/components/loader";
import DisplayWidget from "@/components/widgets/DisplayWidget";

const LandingPage = ({ params }: { params: { widgetId: string } }) => {
	const [isSearchingWidgets, setIsSearchingWidgets] = useState(true);
	const [widgets, setWidgets] = useState([]);
	const [startTime, setStartTime] = useState<number | null>(null); // Start time for time spent
	const [hasInteracted, setHasInteracted] = useState(false); // Track user interaction

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
		if (!hasInteracted && widgets?.[0]?.id) {
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

	return (
		<>
			<div
				onClick={handleInteraction}
				className="px-8 py-5 relative bg-gray-100 min-h-[100vh]"
			>
				{isSearchingWidgets ? (
					<div className="mt-10">
						<Loader />
					</div>
				) : (
					<>
						{widgets?.length && (
							<>
								{widgets.map((w: any, index: number) => (
									<DisplayWidget key={w.id} widget={w} />
								))}
							</>
						)}
					</>
				)}
			</div>
		</>
	);
};

export default LandingPage;
