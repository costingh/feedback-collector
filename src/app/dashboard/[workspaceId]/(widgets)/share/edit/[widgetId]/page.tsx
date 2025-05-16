import { getUserWidget } from "@/actions/widgets";
import { getUserTestimonials } from "@/actions/workspace";
import { getUserForms } from "@/actions/form";
import EditWidget from "@/components/widgets/EditWidget";

type Props = {
	params: { widgetId: string; workspaceId: string };
};

const EditWidgetPage = async ({ params }: Props) => {
	const widgetResponse = await getUserWidget(`/${params.widgetId}`, 1, 6);
	const testimonialsResponse = await getUserTestimonials(params.workspaceId);
	const formsData = await getUserForms(params.workspaceId);

	return (
		<EditWidget
			widgetId={params.widgetId}
			workspaceId={params.workspaceId}
			initialData={{
				widgetResponse,
				testimonialsResponse,
				formsData
			}}
		/>
	);
};

export default EditWidgetPage;
