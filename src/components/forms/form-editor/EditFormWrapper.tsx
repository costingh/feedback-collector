'use client'

import { useCallback, useEffect, useState } from 'react'
import {
	ChevronDown,
	Cog,
	Paintbrush,
	PartyPopper,
	ReceiptText,
	SquareArrowOutUpRight,
	Tag,
} from 'lucide-react'
import TestimonialPopup from '@/components/popups/TestimonialPopup'
import { toast } from 'sonner'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Form } from '@/types/Form'
import options from './CustomerDetailsOptionList'
import EditFormAspect from './EditFormAspect'
import CustomerDetails from './CustomerDetails'
import CustomizeLabels from './CustomizeLabels'
import AdvancedSettings from './AdvancedSettings'
import ThankYouPage from './ThankYouPage'
import Loader from '@/components/global/loader'
import { LoadingSpinner } from '@/components/animations/loading-spinner'
import { Alert } from '@material-tailwind/react'
import FormPublishedAlert from './FormPublishedAlert'

const submenus = [
	{
		name: 'Aspect',
		icon: (
			<Paintbrush
				size={20}
				className="text-purple-600 mr-[8px] ml-[15px]"
			/>
		),
	},
	{
		name: 'Customer details',
		icon: (
			<ReceiptText
				size={20}
				className="text-green-600 mr-[8px] ml-[15px]"
			/>
		),
	},
	{
		name: 'Customize Labels',
		icon: <Tag size={20} className="text-orange-600 mr-[8px] ml-[15px]" />,
	},
	{
		name: 'Advanced',
		icon: <Cog size={20} className="text-blue-700 mr-[8px] ml-[15px]" />,
	},
	{
		name: 'Thank you page',
		icon: (
			<PartyPopper
				size={20}
				className="text-pink-600 mr-[8px] ml-[15px]"
			/>
		),
	},
]

export default function EditFormWrapper({
	formId,
	formData,
}: {
	formId: string
	formData: Form
}) {
	const [openIndex, setOpenIndex] = useState<number>(-1)

	const [step, setStep] = useState<number>(0)
	const [isSearchingForm, setIsSearchingForm] = useState<boolean>(true)
	const [applyingChanges, setApplyingChanges] = useState<boolean>(false)

	const [form, setForm] = useState<Form>({
		id: '',
		name: 'Testimonials',
		brandLogo: '/logo.png',
		brandName: 'Feedbackz',
		backgroundColor: '#9072afff',
		primaryColor: '#8466b4ff',
		withAnimatedBg: false,
		published: false,
		isPaused: false,
		pausedUntil: null,
		url: '',
		customUrl: '',
		questions: [],
		title: '',
		description: '',
		textareaPlaceholder: '',
		buttonLabel: '',
		formFields: options,
		thankYouPageTitle: '',
		thankYouPageMessage: '',
		thankYouCustomURL: '',
		hasCustomBranding: false,
		// FormAnalytics: {
		// 	visits: 0,
		// 	testimonials: 0,
		// 	responseRate: 0
		// }
	})

	useEffect(() => {
		formData && setForm(formData)
	}, [formData])

	// const router = useRouter();

	const toggleAccordion = (index: number) => {
		// FOR  customize labels
		if (index == 2) {
			setStep(1)
			setOpenIndex(openIndex === index ? -1 : index)
		} else if (index == 3) {
			// FOR ADVANCED
			setOpenIndex(openIndex === index ? -1 : index)
		} else if (index == 4) {
			// FOR thank you page
			setStep(4)
			setOpenIndex(openIndex === index ? -1 : index)
		} else if (index == 0) {
			// FOR ASPECT
			setStep(0)
			setOpenIndex(openIndex === index ? -1 : index)
		} else {
			// For CUSTOMER DETAILS
			setStep(3)
			setOpenIndex(openIndex === index ? -1 : index)
		}
	}

	const renderSubmenu = (submenu: string) => {
		if (submenu == submenus[0].name) {
			return (
				<EditFormAspect
					backgroundColor={form.backgroundColor}
					setBackgroundColor={(val) =>
						setForm((prev) => ({ ...prev, backgroundColor: val }))
					}
					primaryColor={form.primaryColor}
					setPrimaryColor={(val) =>
						setForm((prev) => ({ ...prev, primaryColor: val }))
					}
					isChecked={form.withAnimatedBg}
					setChecked={() =>
						setForm((prev) => ({
							...prev,
							withAnimatedBg: !prev.withAnimatedBg,
						}))
					}
					brandLogo={'/images' + form.brandLogo}
					brandName={form.brandName}
					handleBrandNameChange={(val) =>
						setForm((prev) => ({ ...prev, brandName: val }))
					}
					setBrandLogo={(val) =>
						setForm((prev) => ({ ...prev, brandLogo: val }))
					}
				/>
			)
		} else if (submenu == submenus[1].name) {
			return <CustomerDetails setForm={setForm} form={form} />
		} else if (submenu == submenus[2].name) {
			return <CustomizeLabels setForm={setForm} form={form} />
		} else if (submenu == submenus[3].name) {
			return <AdvancedSettings setForm={setForm} form={form} />
		} else if (submenu == submenus[4].name) {
			return <ThankYouPage setForm={setForm} form={form} />
		}
	}

	const handleGetFormById = useCallback(async (formId: string) => {
		setIsSearchingForm(true)
		try {
			const response = await axios.get(`/api/get-form?id=${formId}`)
			const formResponse = response?.data?.form

			if (!formResponse) {
				console.error('Form not found!')
				return
			}

			// console.log("Got form: ", formResponse);
			setForm(formResponse)
		} catch (err) {
			console.error('An error occurred while retrieving the form!', err)
		} finally {
			setIsSearchingForm(false)
		}
	}, [])

	useEffect(() => {
		handleGetFormById(formId)
	}, [])

	const handleApplyChanges = async () => {
		if (!form) return
		setApplyingChanges(true)

		try {
			const response = await axios.post('/api/form/update-form', {
				formData: {
					//@ts-ignore
					...form,
					//@ts-ignore
					formFields: form.formFields.map((option) => ({
						key: option.key,
						isEnabled: option.isEnabled,
						isRequired: option.isRequired,
					})),
					questions: form.questions.map((q) => ({ text: q.text })),
				},
			})

			const updatedForm = response?.data?.form

			if (!updatedForm) {
				toast.error('Changes could not be applied!')
				return
			}
			setApplyingChanges(false)
		} catch (err) {
			console.error(err)
			setApplyingChanges(false)
		}
	}

	return (
		<>
			{isSearchingForm ? (
				<div className="w-full h-[100vh] flex items-center justify-center">
					<Loader color="#000" state={true} />
				</div>
			) : (
				<>
					{!form ? (
						<div>Form not found</div>
					) : (
						<div className="flex h-full">
							<div className="left w-full h-[100vh] relative">
								<FormPublishedAlert show={!form?.published} />

								<TestimonialPopup
									step={step}
									setStep={setStep}
									backgroundColor={form.backgroundColor}
									primaryColor={form.primaryColor}
									withAnimatedBg={form.withAnimatedBg}
									availableOptions={form.formFields}
									published={true}
									isPaused={form.isPaused}
									questions={form.questions}
									textareaPlaceholder={
										form.textareaPlaceholder
									}
									buttonLabel={form.buttonLabel}
									title={form.title}
									description={form.description}
									formId={form.id}
									thankYouPageTitle={form.thankYouPageTitle}
									thankYouPageMessage={
										form.thankYouPageMessage
									}
									brandLogo={form.brandLogo}
									brandName={form.brandName}
									onInteraction={() => {}}
									onSubmit={() => {}}
									hasCustomBranding={form.hasCustomBranding}
								/>
							</div>
							<div className="right w-[600px] border-l-[1px] border-gray-200 px-[40px] h-[100vh] relative pt-6">
								<div className="flex items-center justify-between gap-2 w-full mb-[20px]">
									<input
										type="text"
										value={form.name}
										onChange={(e) =>
											setForm((prev) => ({
												...prev,
												name: e.target.value || '-',
											}))
										}
										className="font-black text-gray-800 text-[17px]"
									/>
									<div className="flex items-center gap-2">
										{form.published ? (
											<div className="w-[5px] h-[5px] rounded-full bg-green-500"></div>
										) : (
											<div className="w-[5px] h-[5px] rounded-full bg-red-500"></div>
										)}
										<Link
											href={
												process.env
													.NEXT_PUBLIC_HOST_URL +
												form?.url
											}
											target="_blank"
										>
											<SquareArrowOutUpRight
												size={15}
												className="text-gray-700 hover:text-gray-500"
											/>
										</Link>
									</div>
								</div>

								<div className="overflow-y-auto h-[calc(100vh-180px)] scroll-container">
									{submenus.map((submenu, index) => (
										<div
											key={index}
											className="submenu relative"
											style={{
												zIndex:
													openIndex === index ? 9 : 1,
											}}
										>
											<div
												className="flex items-center border-b-[1px] border-gray-200 py-[18px] cursor-pointer"
												onClick={() =>
													toggleAccordion(index)
												}
											>
												<div
													className={`transform transition-transform duration-300 ${
														openIndex === index
															? '-rotate-180'
															: ''
													}`}
												>
													<ChevronDown
														size={16}
														className="text-zinc-700"
													/>
												</div>
												{submenu.icon}

												<div className="text-gray-700 font-normal text-[15px]">
													{submenu.name}
												</div>
											</div>
											{openIndex === index && (
												<div className="py-4 border-b-[1px] border-gray-200 animate-slide-down">
													{renderSubmenu(
														submenu.name,
													)}
												</div>
											)}
										</div>
									))}
								</div>
								<div
									onClick={handleApplyChanges}
									className="text-center py-[10px] rounded-[8px] bg-[#000] text-[#eee] w-full cursor-pointer text-[14px] font-semibold mt-10 hover:opacity-80"
								>
									{!applyingChanges ? (
										'Apply changes'
									) : (
										<div className="flex items-center justify-center">
											<LoadingSpinner />
										</div>
									)}
								</div>
							</div>
						</div>
					)}
				</>
			)}
		</>
	)
}
