import { getFormByUrl } from "@/actions/form";
import { getPaymentInfo } from "@/actions/user";
import FormWidget from "@/components/forms/form-editor/FormWidget";

const TestimonialFormPage = async ({
	params,
	searchParams,
}: {
	params: { formUrl: string };
	searchParams: { raw?: string; centered?: string };
}) => {
	const payment = await getPaymentInfo();
	const formResponse: any = await getFormByUrl(params.formUrl);
	const form = formResponse?.data?.form;

	return (
		<main className="h-screen w-screen bg-cover bg-center">
			<div className="h-full w-full">
				{form && (
					<FormWidget
						planType={payment?.data?.subscription?.plan}
						formUrl={params.formUrl}
						isRaw={searchParams.raw || ""}
						isCentered={searchParams.centered}
						form={form}
						isSearchingForm={false}
					/>
				)}
			</div>
		</main>
	);
};

export default TestimonialFormPage;
