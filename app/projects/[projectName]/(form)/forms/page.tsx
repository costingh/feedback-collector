"use client";

import { useRouter } from "next/navigation";
import {
	Copy,
	CopyPlus,
	Edit2,
	FilePlus2,
	Loader2,
	OctagonPause,
	PlusSquare,
	Share2,
	SquareArrowOutUpRight,
	Trash2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { Form } from "@/types/Form";
import FormSkeleton from "@/components/skeletons/FormSkeleton";
import { ShareTestimonialModal } from "@/components/testimonials/ShareTestimonialModal";
import { useProjects } from "@/hooks/useProjects";
import { useProjectContext } from "@/context/ProjectContext";

const allFields = [
	{
		key: "avatar",
		isEnabled: true,
		isRequired: false,
	},
	{
		key: "logo",
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

export default function FormsPage() {
	const router = useRouter();

	const [isLoading, setIsLoading] = useState(false);
	const [fetchingForms, setFetchingForms] = useState(true);
	const [userForms, setUserForms] = useState<Form[]>([]);
	const { userId } = useAuth();
	const [isDeleting, setIsDeleting] = useState("");
	const [isPausing, setIsPausing] = useState("");
	const [copied, setCopied] = useState(false);

	const { isSearchingProjects, projects, refreshProjects, setProjects } = useProjects();
	const { activeProject, setActiveProject } = useProjectContext();


	const fetchAllUserForms = async () => {
		setFetchingForms(true);
		
		const response = await axios.get("/api/get-all-user-forms?projectId=" + activeProject?.id);
		setUserForms(response.data.forms);
		setFetchingForms(false);
	};

	useEffect(() => {
		activeProject && fetchAllUserForms();
	}, [activeProject]);

	const handleEditForm = (id: string) => {
		if(!activeProject) {
			toast.error('Project is not defined')
			return;
		}
		router.push(`/projects/${activeProject.name}/forms/edit/${id}`);
	};

	const handleCreateNewForm = async () => {
		setIsLoading(true);

		if (!activeProject) {
			toast.error("Form could not be created because project is undefined!");
			return;
		}

		const formData = {
			userId,
			name: "Testimonials",
			backgroundColor: "#9072afff",
			brandLogo: '/logo.png',
			brandName: 'Feedbackz',
			primaryColor: "#8466b4ff",
			withAnimatedBg: false,
			title: "Your brand here",
			description:
				"Do you love using our product? We'd love to hear about it!😊",
			textareaPlaceholder: "Write a nice message here ✨",
			buttonLabel: "Submit",
			published: false,
			isPaused: false,
			pausedUntil: null,
			customUrl: "",
			formFields: allFields,
			thankYouPageTitle: 'Thanks for offering us feedback 🙏',
			thankYouPageMessage: 'Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.',
			thankYouCustomURL: '',
			questions: [
				{
					text: "What do you like best about our service?",
				},
				{
					text: "Would you suggest us to a friend?",
				},
			],
			projectId: activeProject.id
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

			if(!activeProject) {
				toast.error('Project is not defined')
				return;
			}
			router.push(`/projects/${activeProject.name}/forms/edit/${createdForm.id}`);

		} catch (err) {
			console.error(err);
			// @ts-ignore
			toast.error(err?.response?.data || "Form could not be created!");
			setIsLoading(false);
		}
	};

	const handleDeleteForm = async (formId: string) => {
		setIsDeleting(formId);
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
		setIsDeleting("");
	};

	const setPausedForm = async (form: Form) => {
		if(!form) {
			toast.error('Error pausing form, try a refresh')
			return;
		}
		setIsPausing(form?.id || '');

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
				questions: form.questions.map((q) => ({ text: q.text })),
				isPaused,
			},
		});

		const updatedForm = response?.data?.form;

		if (!updatedForm) {
			toast.error("Could not perform operation!");
			setIsPausing("");
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
		setIsPausing("");
	};

	const [isDuplicatingForm, setIsDuplicatingForm] = useState("");

	const handleDuplicateForm = async (formId: string) => {
		console.log(formId);
		setIsDuplicatingForm(formId);

		const formToDuplicate = userForms.find((f) => f.id == formId);

		if (!formToDuplicate) {
			toast.error("Error when duplicating form, maybe try a refresh.");
			return;
		}

		const formData = {
			userId,
			name: formToDuplicate.name + " - Copy",
			backgroundColor: formToDuplicate.backgroundColor,
			brandLogo: formToDuplicate.brandLogo,
			brandName: formToDuplicate.brandName,
			primaryColor: formToDuplicate.primaryColor,
			withAnimatedBg: formToDuplicate.withAnimatedBg,
			title: formToDuplicate.title,
			description: formToDuplicate.description,
			textareaPlaceholder: formToDuplicate.textareaPlaceholder,
			buttonLabel: formToDuplicate.buttonLabel,
			published: formToDuplicate.published,
			isPaused: formToDuplicate.isPaused,
			pausedUntil: formToDuplicate.pausedUntil,
			customUrl: formToDuplicate.customUrl,
			thankYouPageTitle: 'Thanks for offering us feedback 🙏',
			thankYouPageMessage: 'Thank you so much for your support! We appreciate your support and we hope you enjoy using our product.',
			thankYouCustomURL: '',
			formFields: formToDuplicate?.formFields?.map((option) => ({
				key: option.key,
				isEnabled: option.isEnabled,
				isRequired: option.isRequired,
			})),
			questions: formToDuplicate?.questions?.map((q) => ({
				text: q.text,
			})),
		};

		try {
			const response = await axios.post("/api/create-form", {
				formData,
			});

			const createdForm = response?.data?.form;

			if (!createdForm) {
				toast.error("Form duplicated successfully!");
				return;
			}

			setUserForms((prev) => [...prev, createdForm]);
		} catch (err) {
			console.error(err);
			toast.error("Could not duplicate form!");
		}

		setIsDuplicatingForm("");
	};


	const handleCopy = (url : string) => {
		navigator.clipboard.writeText(url).then(() => {
			setCopied(true);
			toast.success("Copied to clipboard!");
			setTimeout(() => setCopied(false), 2000);
		}).catch(err => {
			console.error("Failed to copy: ", err);
			toast.error("Failed to copy URL.");
		});
	};

	const getResponseRate = (form: Form) => {
		const completions = form?.metrics?.find(m => m.actionType == 'completion')?.total|| 0;
		const visits = form?.metrics?.find(m => m.actionType == 'view')?.total|| 0;

		if(visits) {
			return (completions/visits*100).toFixed(2);
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
					<div className="rounded-[7px] bg-gray-200 text-gray-500 px-[10px] py-[4px] cursor-pointer hover:bg-gray-300 flex items-center gap-[4px]">
						<PlusSquare size={14} className="text-gray-800" />
						<div
							onClick={handleCreateNewForm}
							className="text-[13px] font-[500] whitespace-nowrap w-[105px]"
						>
							{isLoading ? (
								<Loader2 size={14} className="spin mx-auto" />
							) : (
								"Create new form"
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
						userForms.map((form) => (
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
												{process.env
													.NEXT_PUBLIC_APP_DOMAIN +
													form?.url}
											</p>
											<Copy
												className="text-gray-[500] cursor-pointer"
												size={12}
												onClick={(e) => handleCopy(process.env
													.NEXT_PUBLIC_APP_DOMAIN +
												form.url)}
											/>
										</div>
									</div>
									<div className="flex gap-4">
										{[
											"Visits",
											"Testimonials",
											"Response Rate",
										].map((item, index) => (
											<div key={index} className="flex flex-col items-center justify-center gap-[0px]">
												<p className="font-semibold text-[15px] text-gray-700 m-0 p-0 leading-3">
													{item == "Visits" && (
														<>
															{form?.metrics?.find(m => m.actionType == 'view')?.total|| 0}
														</>
													)}
													{item == "Testimonials" && (
														<>
															{form?.metrics?.find(m => m.actionType == 'completion')?.total|| 0}
														</>
													)}
													{item ==
														"Response Rate" && (
														<>
															{getResponseRate(form)}%
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
												handleEditForm(form?.id || "")
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

										<ShareTestimonialModal form={form} formUrl={process.env.NEXT_PUBLIC_APP_DOMAIN + form?.url} handleCopy={handleCopy}/>
										<div
											onClick={() => setPausedForm(form)}
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
													"Unpause"
												) : (
													"Pause"
												)}
											</div>
										</div>
										<div
											className="rounded-[7px] bg-gray-200 text-gray-500 px-[10px] py-[4px] cursor-pointer hover:bg-gray-300 flex items-center gap-[4px]"
											onClick={() =>
												handleDuplicateForm(
													form?.id || ""
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
													"Duplicate"
												)}
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
												handleDeleteForm(form?.id || "")
											}
										>
											{isDeleting == form.id ? (
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
