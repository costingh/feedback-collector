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
	Trash2,
	Upload,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";

export default function FormsPage() {
	const router = useRouter();

	const [isLoading, setIsLoading] = useState(false);

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
			key: "customer_email",
			isEnabled: true,
			isRequired: true,
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
			backgroundColor: "#9072afff",
			primaryColor: "#8466b4ff",
			withAnimatedBg: false,
			formFields: allFields,
		};

		try {
			const response = await axios.post("/api/create-form", {
				formData
			});
	
			console.log(response);
			const createdForm = response?.data?.form;
	
			if (!createdForm) {
				toast.error("Form could not be created!");
				return;
			}
			setIsLoading(false);
			router.push(`/forms/new-form/${createdForm.id}`);
		} catch(err) {
			console.error(err)
			setIsLoading(false)
		}
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
			<div className="testimonial-wrapper w-full border-[1px] border-gray-200 rounded-[20px] px-6 py-5 relative overflow-hidden">
				<div className="left-0 top-0 absolute h-full w-[5px] bg-purple-600"></div>
				<div className="right-0 top-0 absolute h-full w-[5px] bg-purple-600"></div>

				<div className="flex justify-between w-full items-center">
					<div className="flex flex-col">
						<h1 className="font-semibold text-[15px] text-gray-900">
							Testimonial form
						</h1>
						<div className="flex items-center gap-2">
							<p className="text-light text-[13px] text-gray-500">
								https://formsly.co/p/pz2yv
							</p>
							<Copy
								className="text-gray-[500] cursor-pointer"
								size={12}
							/>
						</div>
					</div>
					<div className="flex gap-4">
						{[1, 1, 1].map((item) => (
							<div className="flex flex-col items-center justify-center gap-[0px]">
								<p className="font-semibold text-[15px] text-gray-700 m-0 p-0  leading-3">
									3
								</p>
								<span className="text-gray-500 text-[13px]">
									Unique Visits
								</span>
							</div>
						))}
					</div>
				</div>
				<div className="flex items-center mt-[10px] justify-between">
					<div className="flex items-center gap-4">
						<div className="rounded-[7px] bg-gray-200 text-gray-500 px-[10px] py-[4px] cursor-pointer hover:bg-gray-300 flex items-center gap-[4px]">
							<Edit2 size={14} className="text-purple-500" />
							<div className="text-[13px] font-[500]">Edit</div>
						</div>

						<div className="rounded-[7px] bg-gray-200 text-gray-500 px-[10px] py-[4px] cursor-pointer hover:bg-gray-300 flex items-center gap-[4px]">
							<Share2 size={14} className="text-green-500" />
							<div className="text-[13px] font-[500]">Share</div>
						</div>
						<div className="rounded-[7px] bg-gray-200 text-gray-500 px-[10px] py-[4px] cursor-pointer hover:bg-gray-300 flex items-center gap-[4px]">
							<OctagonPause
								size={14}
								className="text-orange-400"
							/>
							<div className="text-[13px] font-[500]">Pause</div>
						</div>
						<div className="rounded-[7px] bg-gray-200 text-gray-500 px-[10px] py-[4px] cursor-pointer hover:bg-gray-300 flex items-center gap-[4px]">
							<CopyPlus size={14} className="text-blue-500" />
							<div className="text-[13px] font-[500]">
								Duplicate
							</div>
						</div>
					</div>
					<div className="rounded-[7px] bg-gray-200 text-gray-500 px-[10px] py-[4px] cursor-pointer hover:bg-gray-300 flex items-center gap-[4px]">
						<Trash2 size={14} className="text-red-600" />
						<div className="text-[13px] font-[500]">Delete</div>
					</div>
				</div>
			</div>
		</div>
	);
}
