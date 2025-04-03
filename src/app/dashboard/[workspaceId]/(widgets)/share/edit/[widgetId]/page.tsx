import { getUserWidget } from "@/actions/widgets";
import { getUserTestimonials } from "@/actions/workspace";
import { getUserForms } from "@/actions/form";
import {
	QueryClient,
	dehydrate,
	HydrationBoundary,
} from "@tanstack/react-query";
import EditWidget from "@/components/widgets/EditWidget";

type Props = {
	params: { widgetId: string; workspaceId: string };
};

const fetchData = async (widgetId: string, workspaceId: string) => {
	const widgetResponse = await getUserWidget(`/${widgetId}`);
	const testimonialsResponse = await getUserTestimonials(workspaceId);
	const formsData = await getUserForms(workspaceId);

	return {
		widgetResponse,
		testimonialsResponse,
		formsData,
	};
};

const EditWidgetPage = async ({ params }: Props) => {
	const query = new QueryClient();

	await query.prefetchQuery({
		queryKey: ["widget-data", params.widgetId, params.workspaceId],
		queryFn: () => fetchData(params.widgetId, params.workspaceId),
	});

	return (
		<HydrationBoundary state={dehydrate(query)}>
			<EditWidget
				widgetId={params.widgetId}
				workspaceId={params.workspaceId}
			/>
		</HydrationBoundary>
	);
};

export default EditWidgetPage;
