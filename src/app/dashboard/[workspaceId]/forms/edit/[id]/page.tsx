import { getFormById } from '@/actions/form'
import EditFormWrapper from '@/components/forms/form-editor/EditFormWrapper'

export default async function EditFormPage({
	params,
}: {
	params: { id: string }
}) {
	const formResponse: any = await getFormById(params.id)
	const formData = formResponse?.data?.form

	return <EditFormWrapper formData={formData} formId={params.id} />
}
