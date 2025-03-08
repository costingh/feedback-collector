import { getFormById } from "@/actions/form";
import { getPaymentInfo } from "@/actions/user";
import EditFormWrapper from "@/components/forms/form-editor/EditFormWrapper";

export default async function EditFormPage({
	params,
}: {
	params: { id: string };
}) {
	const payment = await getPaymentInfo();
	const formResponse: any = await getFormById(params.id);
	const formData = formResponse?.data?.form;

	return <EditFormWrapper formData={formData} formId={params.id} planType={payment?.data?.subscription?.plan}/>;
}
