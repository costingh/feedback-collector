"use client";

import React, { useState } from "react";
import { CircleHelp } from "lucide-react";
import { Form } from "@/types/Form";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

interface ThankYouPageProps {
	setForm: React.Dispatch<React.SetStateAction<Form>>;
	form: Form;
}

type ThankYouPageEditFormType = {
	key: string;
	title: string;
	tooltipDescription: string;
	inputType: string;
};

const ThankYouPage: React.FC<ThankYouPageProps> = ({ setForm, form }) => {
	const [formLabels, setFormLabels] = useState<ThankYouPageEditFormType[]>([
		{
			key: "thankYouCustomURL",
			title: "Custom Page",
			tooltipDescription: "Redirect the user to a certain URL.",
			inputType: "single-line",
		},
		{
			key: "thankYouPageTitle",
			title: "Page Title",
			tooltipDescription:
				"This is the title appearing at the top of your Thank You page.",
			inputType: "single-line",
		},
		{
			key: "thankYouPageMessage",
			title: "Page Description",
			tooltipDescription:
				"This is the description of the purpose of this form.",
			inputType: "multi-line",
		},
	]);

	const handleInputChange = (value: string, key: string) => {
		setForm((prevFormState) => ({
			...prevFormState,
			[key]: value,
		}));
	};

	const extractFieldValue = (form: Form, key: string) => {
		//@ts-ignore
		return form[key];
	};

	return (
		<div className="w-full">
			{formLabels.map((label) => (
				<LabelEdit
					labelKey={label.key}
					title={label.title}
					tooltipDescription={label.tooltipDescription}
					textareaValue={extractFieldValue(form, label.key) || ""}
					handleInputChange={handleInputChange}
					inputType={label.inputType}
				/>
			))}
		</div>
	);
};

export default ThankYouPage;

type LabelEditProps = {
	labelKey: string;
	title: string;
	tooltipDescription: string;
	textareaValue?: string;
	handleInputChange: any;
	inputType: string;
};

const LabelEdit: React.FC<LabelEditProps> = ({
	labelKey,
	title,
	tooltipDescription,
	textareaValue,
	handleInputChange,
	inputType,
}) => {
	return (
		<div className="flex flex-col items-start gap-2 mb-3 w-full">
			<div className="flex items-center justify-between w-full">
				<p className="text-[14px] font-[600] text-[#000]">{title}</p>
				<TooltipProvider>
					<Tooltip delayDuration={0}>
						<TooltipTrigger asChild>
							<CircleHelp
								size={13}
								className="text-gray-800 hover:text-gray-600 cursor-pointer"
							/>
						</TooltipTrigger>
						<TooltipContent>
							<p>{tooltipDescription}</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>
			{inputType == "multi-line" ? (
				<textarea
					className="w-full border-[1px] border-gray-200 rounded-[4px] px-3 py-2 text-[14px]"
					value={textareaValue}
					onChange={(e) =>
						handleInputChange(e.target.value, labelKey)
					}
                    rows={4}
				></textarea>
			) : (
				<input
					type="text"
					placeholder="https://thank-you-page.example.com"
					className="w-full border-[1px] border-gray-200 rounded-[4px] px-3 py-2 text-[14px]"
					value={textareaValue}
					onChange={(e) =>
						handleInputChange(e.target.value, labelKey)
					}
				/>
			)}
		</div>
	);
};
