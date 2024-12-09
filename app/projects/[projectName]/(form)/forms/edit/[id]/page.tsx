import EditFormWrapper from "@/components/form-editor/EditFormWrapper";
import { getPlanName } from "@/lib/get-plan-name";

export default async function EditFormPage({
	params,
}: {
	params: { id: string };
}) {
	const {planType} = await getPlanName();

	return <EditFormWrapper formId={params.id} planType={planType}/>;
}
