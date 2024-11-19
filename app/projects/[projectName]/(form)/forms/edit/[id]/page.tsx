import EditFormWrapper from "@/components/form-editor/EditFormWrapper";
import { checkSubscription } from "@/lib/subscription";

export default async function EditFormPage({
	params,
}: {
	params: { id: string };
}) {
	const { isValid: isPro, planType } = await checkSubscription();

	return <EditFormWrapper formId={params.id} isPro={isPro} planType={planType}/>;
}
