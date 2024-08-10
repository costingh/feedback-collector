"use client";

import React, { useEffect, useState } from "react";
import ColorPicker from "../ColorPicker";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";

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

function CustomerDetails({
	setForm,
	form
}) {

	const handleCheck = (checked, option, type) => {
		setForm(prev => ({...prev, formFields:  prev.formFields.map(field => (
			field.key == option.key
				? type == 'enable'
					? {...field, isEnabled: !field.isEnabled}
					: {...field, isRequired: !field.isRequired}
				: field
		))}))
	};

	const getAllOptions = () => {
		const allOptions = options.map(option => ({
			...option,
			...(form?.formFields?.find(ao => ao.key == option.key) || {})
		}))

		return allOptions;
	}

	const renderTesimonialCollectorElementOption = () => {
		return (
			<>
				{getAllOptions().map((option, index) => (
					<div key={index}>
						{!option.alwaysRequired && <div className="flex items-start gap-2 mb-4">
							{option.icon}
							<div>
								<div className="flex justify-between">
									<p className="text-[14px] font-[600] text-[#000]">
										{option.text}
									</p>
									<div className="flex items-center gap-2">
										<div className="flex items-center space-x-1">
											<Checkbox
												id={`checked_${option.text}`}
												checked={option.isEnabled}
                                                className="w-[15px] h-[15px] rounde-[4px]"
												onClick={(checked) =>
													handleCheck(
														checked,
														option,
														"enable"
													)
												}
											/>
											<label
												htmlFor={`checked_${option.text}`}
												className="text-[12px] font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
											>
												Enable
											</label>
										</div>
										<div className="flex items-center space-x-1">
											<Checkbox
												id={`checked_${option.text}`}
												checked={option.isRequired}
                                                className="w-[15px] h-[15px] rounde-[4px]"
												onClick={(checked) =>
													handleCheck(
														checked,
														option,
														"required"
													)
												}
											/>
											<label
												htmlFor={`checked_${option.text}`}
												className="text-[12px] font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
											>
												Required
											</label>
										</div>
									</div>
								</div>
								<p className="text-[13px] font-normal text-gray-400 leading-[17px] mt-[4px]">
									{option.description}
								</p>
							</div>
						</div>}
						{index != form?.formFields?.length - 1 && !option.alwaysRequired && (
							<div className="h-[1px] w-full bg-gray-200 mb-4"></div>
						)}
					</div>
				))}
			</>
		);
	};

	return (
		<>
			<div className="w-full">
				<div className="flex items-start gap-2">
					<div>{renderTesimonialCollectorElementOption()}</div>
				</div>
			</div>
		</>
	);
}

export default CustomerDetails;
