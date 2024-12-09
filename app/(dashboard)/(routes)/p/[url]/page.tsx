import FormWidget from "@/components/form-editor/FormWidget";
import { getPlanName } from "@/lib/get-plan-name";

const TestimonialFormPage = async ({
	params,
	searchParams,
}: {
	params: { url: string };
	searchParams: { raw?: string; centered?: string };
}) => {
	const { planType } = await getPlanName();
	console.log(planType)

	return <FormWidget planType={planType} formUrl={params.url} isRaw={searchParams.raw || ''} isCentered={searchParams.centered} />;
};

export default TestimonialFormPage;
