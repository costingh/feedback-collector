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
		<main className="w-screen bg-cover bg-center">
			<div className="h-full w-full py-4">
				{form && (
					<FormWidget
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
