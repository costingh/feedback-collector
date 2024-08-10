"use client";

import { useCallback, useEffect, useState } from "react";
import {
	AtSign,
	BriefcaseBusiness,
	Building2,
	ChevronDown,
	ChevronUp,
	Earth,
	LucideOctagon,
	PaintBucket,
	Paintbrush,
	PartyPopper,
	ReceiptText,
} from "lucide-react";
import TestimonialPopup from "@/components/popups/TestimonialPopup";
import EditFormAspect from "@/components/form-editor/EditFormAspect";
import CustomerDetails from "@/components/form-editor/CustomerDetails";
import { toast } from "sonner";
import axios from "axios";
import { useRouter } from "next/navigation";
import { LoadingSpinner } from "@/components/LoadingSpinner";

const submenus = [
	{
		name: "Aspect",
		icon: (
			<Paintbrush
				size={20}
				className="text-purple-600 mr-[8px] ml-[15px]"
			/>
		),
	},
	{
		name: "Customer details",
		icon: (
			<ReceiptText
				size={20}
				className="text-green-600 mr-[8px] ml-[15px]"
			/>
		),
	},
	{
		name: "Thank you page",
		icon: (
			<PartyPopper
				size={20}
				className="text-blue-600 mr-[8px] ml-[15px]"
			/>
		),
	},
];

export default function NewForm({ params }: { params: { id: string } }) {
	const [openIndex, setOpenIndex] = useState(-1);

	const options = [
		{
			key: "user_photo",
			text: "Collect User Photo",
			description:
				"Collect user photos to make widgets that convert better because they look more authentic.",
			isEnabled: true,
			isRequired: false,
			icon: <LucideOctagon size={18} />,
			input: {
				type: "file",
				key: "photo",
				accept: ".jpg,.png,.jpeg,.svg",
				text: "Photo with you",
				src: "/avatar-placeholder.jpg",
				alt: "Avatar",
				width: 50,
				height: 50,
			},
		},
		{
			key: "company_logo",
			text: "Collect Company Logo",
			description:
				"Collect company logos to create widgets that showcase the logos of your customers.",
			isEnabled: true,
			isRequired: false,
			icon: <LucideOctagon size={18} />,
			input: {
				type: "file",
				key: "logo",
				accept: ".jpg,.png,.jpeg,.svg",
				text: "Your Company Logo",
				src: "/company-placeholder-image.png",
				alt: "Logo",
				width: 70,
				height: 50,
			},
		},
		{
			key: "customer_email",
			text: "Collect customer email",
			description:
				"Collect email addresses so you can stay in touch and send a thank you note",
			isEnabled: true,
			isRequired: true,
			icon: <AtSign size={18} />,
			alwaysRequired: true,
			input: { label: "Your Name", placeholder: "John Doe", key: "name" },
		},
		{
			key: "job_title",
			text: "Job Title",
			description:
				"Collect job titles so you search by title, and group testimonials in some widgets.",
			isEnabled: true,
			isRequired: false,
			icon: <BriefcaseBusiness size={18} />,
			input: {
				label: "Job Title",
				placeholder: "Your Job Title",
				key: "jobTitle",
			},
		},
		{
			key: "website_url",
			text: "Collect Website URL",
			description:
				"Collect website URL so you can learn more about your customers, and include a link in some widgets.",
			isEnabled: true,
			isRequired: false,
			icon: <Earth size={22} />,
			input: {
				label: "Website",
				placeholder: "https://example.com",
				key: "website",
			},
		},
		{
			key: "collect_company",
			text: "Collect Company",
			description:
				"Collect company name so you can search for testimonials from the same company, and display it in some widgets.",
			isEnabled: true,
			isRequired: false,
			icon: <Building2 size={24} />,
			input: {
				label: "Company",
				placeholder: "Your Company",
				key: "company",
			},
		},
	]

	// const [backgroundColor, setBackgroundColor] = useState<string>("#9072afff");
	// const [primaryColor, setPrimaryColor] = useState<string>("#8466b4ff");
	// const [withAnimatedBg, setWithAnimatedBg] = useState(false);
	const [step, setStep] = useState(1);
	const [isSearchingForm, setIsSearchingForm] = useState(false);
	const [applyingChanges, setApplyingChanges] = useState(false);

	const [form, setForm] = useState({
		id: null,
		primaryColor: '#8466b4ff',
		backgroundColor: '#9072afff',
		withAnimatedBg: false,
		formFields: options

	});

	const router = useRouter();

	// const [availableOptions, setAvailableOptions] = useState([
	// 	{
	// 		key: "user_photo",
	// 		text: "Collect User Photo",
	// 		description:
	// 			"Collect user photos to make widgets that convert better because they look more authentic.",
	// 		isEnabled: true,
	// 		isRequired: false,
	// 		icon: <LucideOctagon size={18} />,
	// 		input: {
	// 			type: "file",
	// 			key: "photo",
	// 			accept: ".jpg,.png,.jpeg,.svg",
	// 			text: "Photo with you",
	// 			src: "/avatar-placeholder.jpg",
	// 			alt: "Avatar",
	// 			width: 50,
	// 			height: 50,
	// 		},
	// 	},
	// 	{
	// 		key: "company_logo",
	// 		text: "Collect Company Logo",
	// 		description:
	// 			"Collect company logos to create widgets that showcase the logos of your customers.",
	// 		isEnabled: true,
	// 		isRequired: false,
	// 		icon: <LucideOctagon size={18} />,
	// 		input: {
	// 			type: "file",
	// 			key: "logo",
	// 			accept: ".jpg,.png,.jpeg,.svg",
	// 			text: "Your Company Logo",
	// 			src: "/company-placeholder-image.png",
	// 			alt: "Logo",
	// 			width: 70,
	// 			height: 50,
	// 		},
	// 	},
	// 	{
	// 		key: "customer_email",
	// 		text: "Collect customer email",
	// 		description:
	// 			"Collect email addresses so you can stay in touch and send a thank you note",
	// 		isEnabled: true,
	// 		isRequired: true,
	// 		icon: <AtSign size={18} />,
	// 		alwaysRequired: true,
	// 		input: { label: "Your Name", placeholder: "John Doe", key: "name" },
	// 	},
	// 	{
	// 		key: "job_title",
	// 		text: "Job Title",
	// 		description:
	// 			"Collect job titles so you search by title, and group testimonials in some widgets.",
	// 		isEnabled: true,
	// 		isRequired: false,
	// 		icon: <BriefcaseBusiness size={18} />,
	// 		input: {
	// 			label: "Job Title",
	// 			placeholder: "Your Job Title",
	// 			key: "jobTitle",
	// 		},
	// 	},
	// 	{
	// 		key: "website_url",
	// 		text: "Collect Website URL",
	// 		description:
	// 			"Collect website URL so you can learn more about your customers, and include a link in some widgets.",
	// 		isEnabled: true,
	// 		isRequired: false,
	// 		icon: <Earth size={22} />,
	// 		input: {
	// 			label: "Website",
	// 			placeholder: "https://example.com",
	// 			key: "website",
	// 		},
	// 	},
	// 	{
	// 		key: "collect_company",
	// 		text: "Collect Company",
	// 		description:
	// 			"Collect company name so you can search for testimonials from the same company, and display it in some widgets.",
	// 		isEnabled: true,
	// 		isRequired: false,
	// 		icon: <Building2 size={24} />,
	// 		input: {
	// 			label: "Company",
	// 			placeholder: "Your Company",
	// 			key: "company",
	// 		},
	// 	},
	// ]);

	const toggleAccordion = (index: number) => {
		setStep(index + 1);
		setOpenIndex(openIndex === index ? -1 : index);
	};

	const renderSubmenu = (submenu: string) => {
		if (submenu == submenus[0].name) {
			return (
				<EditFormAspect
					backgroundColor={form.backgroundColor}
					setBackgroundColor={(val) => setForm(prev => ({...prev, backgroundColor: val}))}
					primaryColor={form.primaryColor}
					setPrimaryColor={(val) => setForm(prev => ({...prev, primaryColor: val}))}
					isChecked={form.withAnimatedBg}
					setChecked={() => setForm(prev => ({...prev, withAnimatedBg: !prev.withAnimatedBg}))}
				/>
			);
		} else if (submenu == submenus[1].name) {
			return (
				<CustomerDetails
					setForm={setForm}
					form={form}
				/>
			);
		}
	};

	const handleGetFormById = useCallback(
		async (formId: string) => {
			if (isSearchingForm) return;
			setIsSearchingForm(true);
			try {
				const response = await axios.get(`/api/get-form?id=${formId}`);
				const formResponse = response?.data?.form;

				if (!formResponse) {
					console.error("Form not found!");
					return;
				}

				console.log('Got form: ', formResponse)
				setForm(formResponse);
			} catch (err) {
				console.error(
					"An error occurred while retrieving the form!",
					err
				);
			} finally {
				setIsSearchingForm(false);
			}
		},
		[isSearchingForm]
	);

	useEffect(() => {
		handleGetFormById(params.id);
	}, []);

	const handleApplyChanges = async () => {
		if(!form) return;
		setApplyingChanges(true);

		try {
			const response = await axios.post("/api/update-form", {
				formData: {
					//@ts-ignore
					...form,
					//@ts-ignore
					formFields: form.formFields.map((option) => ({
						key: option.key,
						isEnabled: option.isEnabled,
						isRequired: option.isRequired,
					})),
				}
			});

			const updatedForm = response?.data?.form;

			if (!updatedForm) {
				toast.error("Changes could not be applied!");
				return;
			}
			setApplyingChanges(false);
		} catch (err) {
			console.error(err);
			setApplyingChanges(false);
		}
	};

	return (
		<>
			{isSearchingForm ? (
				<div>Searching form</div>
			) : (
				<>
					{!form ? (
						<div>Form not found</div>
					) : (
						<div className="flex h-full">
							<div className="left w-full h-[100vh]">
								<TestimonialPopup
									step={step}
									setStep={setStep}
									backgroundColor={form.backgroundColor}
									primaryColor={form.primaryColor}
									withAnimatedBg={form.withAnimatedBg}
									availableOptions={form.formFields}
								/>
							</div>
							<div className="right w-[600px] border-l-[1px] border-gray-200 px-[40px] h-[100vh] relative pt-6">
								<h1 className="font-black text-gray-800 text-[17px] mb-[20px]">
									Testimonial Form
								</h1>
								<div className="overflow-y-auto h-[calc(100vh-180px)]">
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
															? "-rotate-180"
															: ""
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
														submenu.name
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
										"Apply changes"
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
	);
}
