import { getFormByUrl } from "@/actions/form";
import FormWidget from "@/components/forms/form-editor/FormWidget";

const TestimonialFormPage = async ({
	params,
	searchParams,
}: {
	params: { formUrl: string };
	searchParams: { raw?: string; centered?: string };
}) => {
	const formResponse: any = await getFormByUrl(params.formUrl);
	const form = formResponse?.data?.form;

	return (
		<main className="w-screen h-screen bg-cover bg-center">
			<div className="h-full w-full">
				{form && (
					<FormWidget
						formUrl={params.formUrl}
						isRaw={searchParams.raw || ""}
						isCentered={searchParams.centered}
						form={form}
						isSearchingForm={!form}
					/>
				)}
			</div>
		</main>
	);
};

export default TestimonialFormPage;
