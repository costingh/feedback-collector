'use client'

import {
	Copy,
	CopyPlus,
	Edit2,
	Loader2,
	OctagonPause,
	PlusSquare,
	SquareArrowOutUpRight,
	Trash2,
} from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import Link from 'next/link'
import { Form } from '@/types/Form'
import FormSkeleton from '@/components/global/skeletons/FormSkeleton'
import { useQueryData } from '@/hooks/useQueryData'
import {
	createNewForm,
	deleteForm,
	duplicateForm,
	getUserForms,
	pauseForm,
} from '@/actions/form'
import { useMutationData, useMutationDataState } from '@/hooks/useMutationData'
import ShareFormModal from '@/components/testimonials-form/share-form-modal'
import { useRouter } from 'next/navigation'

type Props = {
	params: { workspaceId: string }
}

const FormsPage = ({ params: { workspaceId } }: Props) => {
	const router = useRouter()

	const { data: formsData, isFetching: fetchingForms } = useQueryData(
		['user-forms', workspaceId],
		() => getUserForms(workspaceId),
		undefined,
		false, // refetchOnWindowFocus
	)

	const userForms = (formsData as any)?.data?.forms || []

	const [copied, setCopied] = useState(false)

	const handleEditForm = (formId: string) => {
		router.push(`/dashboard/${workspaceId}/forms/edit/${formId}`)
	}

	const { mutate: handleCreateNewForm, isPending: isLoading } =
		useMutationData(['create-form'], () => createNewForm(workspaceId), [
			'user-forms',
			workspaceId,
		])

	const { mutate: handleDeleteForm, isPending } = useMutationData(
		['delete-form'],
		(formId: string) => deleteForm(formId),
		['user-forms', workspaceId],
	)

	const { latestVariables: latestDeleteVariables } = useMutationDataState([
		'delete-form',
	])
	const isDeleting = isPending ? latestDeleteVariables?.variables : null

	const { mutate: handlePauseForm, isPending: isPendingUpdate } =
		useMutationData(
			['update-form'],
			(form: Form) => pauseForm(form.id, !form.isPaused),
			['user-forms', workspaceId],
		)

	const { latestVariables: latestUpdateVariables } = useMutationDataState([
		'update-form',
	])
	const isPausing = isPendingUpdate ? latestUpdateVariables?.variables : null

	const { mutate: handleDuplicateForm, isPending: isPendingDuplicate } =
		useMutationData(
			['update-form'],
			(formId: string) => duplicateForm(formId),
			['user-forms', workspaceId],
		)

	const { latestVariables: latestDyplicateVariables } = useMutationDataState([
		'duplicate-form',
	])
	const isDuplicatingForm = isPendingDuplicate
		? latestDyplicateVariables?.variables
		: null

	const handleCopy = (url: string) => {
		navigator.clipboard
			.writeText(url)
			.then(() => {
				setCopied(true)
				toast.success('Copied to clipboard!')
				setTimeout(() => setCopied(false), 2000)
			})
			.catch((err) => {
				console.error('Failed to copy: ', err)
				toast.error('Failed to copy URL.')
			})
	}

	const getResponseRate = (form: Form) => {
		const completions =
			form?.metrics?.find((m) => m.actionType == 'completion')?.total || 0
		const visits =
			form?.metrics?.find((m) => m.actionType == 'view')?.total || 0

		if (visits) {
			return ((completions / visits) * 100).toFixed(2)
		} else {
			return 0
		}
	}

	return (
		<div className="px-8  py-5">
			<div className="mb-8 space-y-4">
				<div className="flex w-full justify-between items-start">
					<div className="flex flex-col ">
						<h2 className="text-[18px] font-bold ">Your Forms</h2>
						<p className="text-gray-500 font-light text-[14px]">
							Use forms to collect testimonials from your users.
						</p>
					</div>
					<div className="rounded-[7px] bg-gray-200 text-gray-500 px-[13px] py-[6px] cursor-pointer hover:bg-gray-300 flex items-center gap-[4px]">
						<PlusSquare size={14} className="text-gray-800" />
						<div
							onClick={() => handleCreateNewForm(workspaceId)}
							className="text-[14px] font-[500] whitespace-nowrap w-[105px]"
						>
							{isLoading ? (
								<Loader2 size={14} className="spin mx-auto" />
							) : (
								'Create new form'
							)}
						</div>
					</div>
				</div>
			</div>

			{fetchingForms ? (
				<div className="mt-10">
					{[...Array(3)].map((_, i) => (
						<FormSkeleton key={i} />
					))}
				</div>
			) : (
				<>
					{userForms?.length ? (
						userForms.map((form: Form) => (
							<div
								key={form?.id}
								className="testimonial-wrapper w-full border-[1px] border-gray-200 rounded-[20px] px-6 py-5 relative overflow-hidden mb-4"
							>
								<div className="left-0 top-0 absolute h-full w-[5px] bg-indigo-600"></div>
								<div className="right-0 top-0 absolute h-full w-[5px] bg-indigo-600"></div>

								<div className="flex justify-between w-full items-center">
									<div className="flex flex-col">
										<div className="flex items-center gap-3">
											<h1 className="font-semibold text-[15px] text-gray-900">
												{form?.name || '-'}
											</h1>
											{!form?.isPaused ? (
												<span className="w-[6px] h-[6px] rounded-full bg-green-500"></span>
											) : (
												<span className="w-[6px] h-[6px] rounded-full bg-red-500"></span>
											)}
										</div>
										<div className="flex items-center gap-2">
											<p className="text-light text-[13px] text-gray-500">
												{process.env
													.NEXT_PUBLIC_HOST_URL +
													form?.url}
											</p>
											<Copy
												className="text-gray-[500] cursor-pointer"
												size={12}
												onClick={(e) =>
													handleCopy(
														process.env
															.NEXT_PUBLIC_HOST_URL +
															form.url,
													)
												}
											/>
										</div>
									</div>
									<div className="flex gap-4">
										{[
											'Visits',
											'Testimonials',
											'Response Rate',
										].map((item, index) => (
											<div
												key={index}
												className="flex flex-col items-center justify-center gap-[0px]"
											>
												<p className="font-semibold text-[15px] text-gray-700 m-0 p-0 leading-3">
													{item == 'Visits' && (
														<>
															{form?.metrics?.find(
																(m) =>
																	m.actionType ==
																	'view',
															)?.total || 0}
														</>
													)}
													{item == 'Testimonials' && (
														<>
															{form?.metrics?.find(
																(m) =>
																	m.actionType ==
																	'completion',
															)?.total || 0}
														</>
													)}
													{item ==
														'Response Rate' && (
														<>
															{getResponseRate(
																form,
															)}
															%
														</>
													)}
												</p>
												<span className="text-gray-500 text-[13px]">
													{item}
												</span>
											</div>
										))}
									</div>
								</div>
								<div className="flex items-center mt-[10px] justify-between">
									<div className="flex items-center gap-4">
										<div
											className="rounded-[7px] bg-gray-200 text-gray-500 px-[10px] py-[4px] cursor-pointer hover:bg-gray-300 flex items-center gap-[4px]"
											onClick={() =>
												handleEditForm(form?.id || '')
											}
										>
											<Edit2
												size={14}
												className="text-indigo-500"
											/>
											<div className="text-[13px] font-[500]">
												Edit
											</div>
										</div>

										<ShareFormModal
											form={form}
											formUrl={
												process.env
													.NEXT_PUBLIC_HOST_URL +
												form?.url
											}
											handleCopy={handleCopy}
										/>
										<div
											onClick={() =>
												handlePauseForm(form)
											}
											className="rounded-[7px] bg-gray-200 text-gray-500 px-[10px] py-[4px] cursor-pointer hover:bg-gray-300 flex items-center gap-[4px]"
										>
											<OctagonPause
												size={14}
												className="text-orange-400"
											/>
											<div className="text-[13px] font-[500]">
												{isPausing == form.id ? (
													<Loader2
														size={14}
														className="spin my-[4px] mx-[4px]"
													/>
												) : form?.isPaused ? (
													'Unpause'
												) : (
													'Pause'
												)}
											</div>
										</div>
										<div
											className="rounded-[7px] bg-gray-200 text-gray-500 px-[10px] py-[4px] cursor-pointer hover:bg-gray-300 flex items-center gap-[4px]"
											onClick={() =>
												handleDuplicateForm(
													form?.id || '',
												)
											}
										>
											<CopyPlus
												size={14}
												className="text-blue-500"
											/>
											<div className="text-[13px] font-[500]">
												{isDuplicatingForm ==
												form.id ? (
													<Loader2
														size={14}
														className="spin my-[4px] mx-[4px]"
													/>
												) : (
													'Duplicate'
												)}
											</div>
										</div>
										<Link
											href={
												process.env
													.NEXT_PUBLIC_HOST_URL +
												form.url
											}
											target="_blank"
											className="rounded-[7px] bg-gray-200 text-gray-500 px-[10px] py-[4px] cursor-pointer hover:bg-gray-300 flex items-center gap-[4px]"
										>
											<SquareArrowOutUpRight
												size={14}
												className="text-[#ff00ff]"
											/>
											<div className="text-[13px] font-[500]">
												See live
											</div>
										</Link>
									</div>
									<div className="rounded-[7px] bg-gray-200 text-gray-500 px-[10px] py-[4px] cursor-pointer hover:bg-gray-300 flex items-center gap-[4px]">
										<Trash2
											size={14}
											className="text-red-600"
										/>
										<div
											className="text-[13px] font-[500]"
											onClick={() =>
												handleDeleteForm(form?.id || '')
											}
										>
											{isDeleting == form.id ? (
												<Loader2
													size={14}
													className="spin my-[4px] mx-[4px]"
												/>
											) : (
												'Delete'
											)}
										</div>
									</div>
								</div>
							</div>
						))
					) : (
						<div className="flex items-center justify-center mt-[100px]">
							<div className="flex flex-col items-center">
								<h1 className="font-semibold">No forms yet.</h1>
								<p className="text-gray-600 text-[14px]">
									Start by creating a new form to collect
									testimonials from yout customers.
								</p>
							</div>
						</div>
					)}
				</>
			)}
		</div>
	)
}

export default FormsPage
