'use client'

import DisplayWidget from "@/components/widgets/DisplayWidget";
import { getUserWidget, getUserWidgets } from "@/actions/widgets";
import { useQueryData } from "@/hooks/useQueryData";
import { LoadingSpinner } from "@/components/animations/loading-spinner";
import { formatNumberOfReviews } from "@/lib/utils";

// TODO
const ShareWidgetPage = ({ params }: { params: { widgetId: string } }) => {
	// const [startTime, setStartTime] = useState<number | null>(null); // Start time for time spent
	// const [hasInteracted, setHasInteracted] = useState(false); // Track user interaction

	const isFetching = false;

	const { data: widgetResponse, isFetching: fetchingWidget } = useQueryData(
		["shared-widget"],
		() => getUserWidget('/' + params.widgetId)
	);

	const widget = (widgetResponse as any)?.widget || [];

	// const handleGetAllUserWidgets = useCallback(async () => {
	// 	setIsSearchingWidgets(true);
	// 	try {
	// 		const response = await axios.get(
	// 			"/api/widgets/get-all-user-widgets?url=" + params.widgetId + "&projectId=" + workspaceId
	// 		);
	// 		console.log(response.data.widgets);
	// 		setWidgets(response.data.widgets);

	// 		if (response?.data?.widgets?.[0]?.id)
	// 			trackMetric("view", 1, response?.data?.widgets?.[0]?.id);
	// 	} catch (err) {
	// 		toast.error("An error occurred while retrieving the widget!");
	// 	} finally {
	// 		setIsSearchingWidgets(false);
	// 	}
	// }, []);

	// const handleBounce = () => {
	// 	//@ts-ignore
	// 	if (!hasInteracted && widgets?.[0]?.id) {
	// 		//@ts-ignore
	// 		trackMetric("bounce", 0, widgets?.[0]?.id);
	// 	}
	// };

	// useEffect(() => {
	// 	handleGetAllUserWidgets();
	// 	setStartTime(Date.now());

	// 	window.addEventListener("beforeunload", handleBounce);

	// 	// Cleanup on component unmount
	// 	return () => {
	// 		if (startTime) {
	// 			const timeSpent = (Date.now() - startTime) / 1000;
	// 			//@ts-ignore
	// 			trackMetric("time", timeSpent, widgets?.[0]?.id);
	// 		}
	// 		window.removeEventListener("beforeunload", handleBounce);
	// 	};
	// }, []);

	// const getDeviceInfo = () => {
	// 	const userAgent = navigator.userAgent;
	// 	const platform = navigator.platform;
	// 	return `${platform}, ${userAgent}`;
	// };

	// const handleInteraction = () => {
	// 	if (!hasInteracted) {
	// 		setHasInteracted(true);
	// 		//@ts-ignore
	// 		trackMetric("interaction", 0, widgets?.[0]?.id);
	// 	}
	// };

	// const trackMetric = async (
	// 	eventType: string,
	// 	timeSpent?: number,
	// 	widgetId?: string
	// ) => {
	// 	try {
	// 		await axios.post("/api/analytics/widgets/track-metrics", {
	// 			widgetId,
	// 			eventType,
	// 			timeSpent,
	// 			deviceInfo: getDeviceInfo(),
	// 		});
	// 	} catch (error) {
	// 		console.error("Error tracking metric:", error);
	// 	}
	// };

	return (
		<>
			<div
				// onClick={handleInteraction}
				className="py-8 relative bg-gray-100 min-h-[100vh]"
			>
				{isFetching ? (
					<div className="w-full h-full flex items-center justify-center">
						<span className="inline-block">
							<LoadingSpinner size={30} />
						</span>
					</div>
				) : <DisplayWidget widget={widget} numberOfReviews={formatNumberOfReviews(widget?._count?.testimonials)}/>}
			</div>
		</>
	);
};

export default ShareWidgetPage;
