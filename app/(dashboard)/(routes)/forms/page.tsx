"use client";

import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
	ArrowRight,
	Copy,
	CopyPlus,
	Delete,
	Edit,
	Edit2,
	FilePlus2,
	Loader2,
	OctagonPause,
	PauseCircleIcon,
	PlusCircle,
	Share,
	Share2,
	SquareArrowOutUpRight,
	Trash2,
	Upload,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Form } from "@/types/Form";

export default function FormsPage() {
	const router = useRouter();

	const [isLoading, setIsLoading] = useState(false);
	const [fetchingForms, setFetchingForms] = useState(false);
	const [userForms, setUserForms] = useState<Form[]>([]);
	const { userId } = useAuth();
	const [isDeleting, setIsDeleting] = useState(false);
	const [isPausing, setIsPausing] = useState(false);

	const allFields = [
		{
			key: "user_photo",
			isEnabled: true,
			isRequired: false,
		},
		{
			key: "company_logo",
			isEnabled: true,
			isRequired: false,
		},
		{
			key: "name",
			isEnabled: true,
			isRequired: true,
		},
		{
			key: "customer_email",
			isEnabled: true,
			isRequired: false,
		},
		{
			key: "job_title",
			isEnabled: true,
			isRequired: false,
		},
		{
			key: "website_url",
			isEnabled: true,
			isRequired: false,
		},
		{
			key: "collect_company",
			isEnabled: true,
			isRequired: false,
		},
	];

	const handleCreateNewForm = async () => {
		setIsLoading(true);
		const formData = {
			userId,
			name: "Testimonials",
			backgroundColor: "#9072afff",
			primaryColor: "#8466b4ff",
			withAnimatedBg: false,
			title: 'Your brand here',
			description: "Do you love using our product? We'd love to hear about it!😊",
			textareaPlaceholder: "Write a nice message here ✨",
			buttonLabel: 'Submit',
			published: false,
			isPaused: false,
			pausedUntil: null,
			customUrl: '',
			formFields: allFields,
			questions: [
				{
					text: 'What do you like best about our service?'
				},
				{
					text: 'Would you suggest us to a friend?'
				}
			]
		};

		try {
			const response = await axios.post("/api/create-form", {
				formData,
			});

			const createdForm = response?.data?.form;

			if (!createdForm) {
				toast.error("Form could not be created!");
				return;
			}
			setIsLoading(false);
			router.push(`/forms/edit/${createdForm.id}`);
		} catch (err) {
			console.error(err);
			toast.error("Form could not be created!");
			setIsLoading(false);
		}
	};

	const fetchAllUserForms = async () => {
		setFetchingForms(true);
		const response = await axios.get("/api/get-all-user-forms");
		setUserForms(response.data.forms);
		setFetchingForms(false);
	};

	useEffect(() => {
		fetchAllUserForms();
	}, []);

	const handleEditForm = (id: string) => {
		router.push(`/forms/edit/${id}`);
	};

	const handleDeleteForm = async (formId: string) => {
		setIsDeleting(true);
		try {
			const response = await axios.delete(
				`/api/delete-form?id=${formId}`
			);

			if (response.status === 200) {
				toast.success("Form deleted successfully!");
				setUserForms((prev) =>
					prev.filter((form) => form?.id != formId)
				);
			} else {
				toast.error("Failed to delete the form.");
			}
		} catch (error) {
			console.error("Failed to delete form:", error);
			toast.error("An error occurred while deleting the form");
		}
		setIsDeleting(false);
	};

	const setPausedForm = async (form: Form) => {
		setIsPausing(true);
		const isPaused = !form?.isPaused || false;
		const response = await axios.post("/api/update-form", {
			formData: {
				//@ts-ignore
				...form,
				formFields: form.formFields.map((option) => ({
					key: option.key,
					isEnabled: option.isEnabled,
					isRequired: option.isRequired,
				})),
				questions: form.questions.map(q => ({text: q.text})),
				isPaused,
			},
		});

		const updatedForm = response?.data?.form;

		if (!updatedForm) {
			toast.error("Could not perform operation!");
			setIsPausing(false);
			return;
		}

		//@ts-ignore
		setUserForms((prev) =>
			prev.map((userForm) => {
				if (userForm.id === form.id) {
					return {
						...userForm,
						isPaused,
					};
				} else
					return {
						...userForm,
					};
			})
		);
		setIsPausing(false);
	};

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
					<div className="rounded-[7px] bg-gray-800 px-[16px] py-[2px] cursor-pointer hover:bg-gray-700 inline-flex items-center gap-[4px] h-[35px]">
						<FilePlus2 size={13} className="text-gray-300" />
						<div
							onClick={handleCreateNewForm}
							className="text-gray-300 text-normal text-[13px] min-w-[100px]"
						>
							{isLoading ? (
								<Loader2 className="ml-[30px] spin" />
							) : (
								"Create new form"
							)}
						</div>
					</div>
				</div>
			</div>

			{fetchingForms ? (
				<Loader2 className="ml-[30px] spin" />
			) : (
				<>
					{userForms?.length ? (
						userForms.map((form) => (
							<div
								key={form?.id}
								className="testimonial-wrapper w-full border-[1px] border-gray-200 rounded-[20px] px-6 py-5 relative overflow-hidden mb-4"
							>
								<div className="left-0 top-0 absolute h-full w-[5px] bg-purple-600"></div>
								<div className="right-0 top-0 absolute h-full w-[5px] bg-purple-600"></div>

								<div className="flex justify-between w-full items-center">
									<div className="flex flex-col">
										<div className="flex items-center gap-3">
											<h1 className="font-semibold text-[15px] text-gray-900">
												{form?.name || "-"}
											</h1>
											{!form?.isPaused ? (
												<span className="w-[6px] h-[6px] rounded-full bg-green-500"></span>
											) : (
												<span className="w-[6px] h-[6px] rounded-full bg-red-500"></span>
											)}
										</div>
										<div className="flex items-center gap-2">
											<p className="text-light text-[13px] text-gray-500">
												{process.env.NEXT_PUBLIC_APP_DOMAIN + form?.url}
											</p>
											<Copy
												className="text-gray-[500] cursor-pointer"
												size={12}
											/>
										</div>
									</div>
									<div className="flex gap-4">
										{[
											"Visits",
											"Testimonials",
											"Response Rate",
										].map((item) => (
											<div className="flex flex-col items-center justify-center gap-[0px]">
												<p className="font-semibold text-[15px] text-gray-700 m-0 p-0 leading-3">
													{item == "Visits" && (
														<>
															{form?.FormAnalytics
																?.visits || 0}
														</>
													)}
													{item == "Testimonials" && (
														<>
															{form?.FormAnalytics
																?.testimonials ||
																0}
														</>
													)}
													{item ==
														"Response Rate" && (
														<>
															{form?.FormAnalytics
																?.responseRate ||
																0}
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
												className="text-purple-500"
											/>
											<div className="text-[13px] font-[500]">
												Edit
											</div>
										</div>

										<div className="rounded-[7px] bg-gray-200 text-gray-500 px-[10px] py-[4px] cursor-pointer hover:bg-gray-300 flex items-center gap-[4px]">
											<Share2
												size={14}
												className="text-green-500"
											/>
											<div className="text-[13px] font-[500]">
												Share
											</div>
										</div>
										<div
											onClick={() => setPausedForm(form)}
											className="rounded-[7px] bg-gray-200 text-gray-500 px-[10px] py-[4px] cursor-pointer hover:bg-gray-300 flex items-center gap-[4px]"
										>
											<OctagonPause
												size={14}
												className="text-orange-400"
											/>
											<div className="text-[13px] font-[500]">
												{isPausing ? (
													<Loader2
														size={14}
														className="spin my-[4px] mx-[4px]"
													/>
												) : form?.isPaused ? (
													"Unpause"
												) : (
													"Pause"
												)}
											</div>
										</div>
										<div className="rounded-[7px] bg-gray-200 text-gray-500 px-[10px] py-[4px] cursor-pointer hover:bg-gray-300 flex items-center gap-[4px]">
											<CopyPlus
												size={14}
												className="text-blue-500"
											/>
											<div className="text-[13px] font-[500]">
												Duplicate
											</div>
										</div>
										<Link
											href={
												process.env
													.NEXT_PUBLIC_APP_DOMAIN +
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
											{isDeleting ? (
												<Loader2
													size={14}
													className="spin my-[4px] mx-[4px]"
												/>
											) : (
												"Delete"
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
	);
}
