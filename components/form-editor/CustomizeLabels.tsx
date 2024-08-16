"use client";

import React, { useEffect, useState } from "react";
import {
	CircleHelp,
	Loader2,
	PauseOctagon,
	Plus,
	PlusCircle,
	Rocket,
	SquarePlus,
} from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { Form } from "@/types/Form";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

interface Option {
	key: string;
	text: string;
	description: string;
	isEnabled: boolean;
	icon: JSX.Element;
}

interface CustomizeLabelsProps {
	setForm: React.Dispatch<React.SetStateAction<Form>>;
	form: Form;
}

type FormLabelsType = {
	key: string;
	title: string;
	tooltipDescription: string;
	// textareaValue?: string;
	questions?: { text: string }[];
};

const CustomizeLabels: React.FC<CustomizeLabelsProps> = ({ setForm, form }) => {
	const [formLabels, setFormLabels] = useState<FormLabelsType[]>([
		{
			key: "title",
			title: "Title",
			tooltipDescription:
				"This is the title appearing at the top of your form.",
			// textareaValue: form.title,
		},
		{
			key: "description",
			title: "Description",
			tooltipDescription:
				"This is the description of the purpose of this form.",
		},
		{
			key: "questions",
			title: "Enter a few questions",
			tooltipDescription:
				"Here you can add what topics should customers target when offering feedback.",
			questions: form.questions,
		},
		{
			key: "textareaPlaceholder",
			title: "Response",
			tooltipDescription: "An example of message for the customers.",
		},
		{
			key: "buttonLabel",
			title: "Button Label",
			tooltipDescription: "Change the submit button label.",
		},
	]);

	const handleAddNewQuestions = (q: string[]) => {
		setFormLabels((prevLabels) =>
			prevLabels.map((label) => {
				if (label.key === "questions") {
					return {
						...label,
						questions: [
							...q.map((question) => ({ text: question })),
						],
					};
				} else {
					return label;
				}
			})
		);
	};

	const handleInputChange = (value: string, key: string) => {
		setForm((prevFormState) => ({
			...prevFormState,
			[key]: value
		}));

		console.log(key + ' - ' + value)
	};

	const extractFieldValue = (form: Form, key: string) => {
		if (key == "questions") {
			return form[key].map((q) => q.text).join("\n");
		} else {
			//@ts-ignore
			return form[key];
		}
	};

	return (
		<div className="w-full">
			{formLabels.map((label) => (
				<LabelEdit
					labelKey={label.key}
					title={label.title}
					tooltipDescription={label.tooltipDescription}
					textareaValue={extractFieldValue(form, label.key) || ""}
					questions={label.questions}
					handleAddNewQuestions={handleAddNewQuestions}
					handleInputChange={handleInputChange}
				/>
			))}
		</div>
	);
};

export default CustomizeLabels;

type LabelEditProps = {
	labelKey: string;
	title: string;
	tooltipDescription: string;
	textareaValue?: string;
	questions?: any[];
	handleAddNewQuestions?: any;
	handleInputChange: any;
};

const LabelEdit: React.FC<LabelEditProps> = ({
	labelKey,
	title,
	tooltipDescription,
	textareaValue,
	questions,
	handleAddNewQuestions,
	handleInputChange,
}) => {
	const [textareaQuestions, setTextareaQuestions] = useState("");

	const handleChangeTextareaQuestions = (e) => {
		setTextareaQuestions(e.target.value);
	};

	useEffect(() => {
		const questions = textareaQuestions.split("\n");
		handleAddNewQuestions(questions);
	}, [textareaQuestions]);

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
			<textarea
					className="w-full border-[1px] border-gray-200 rounded-[4px] px-3 py-2 text-[14px]"
					value={textareaValue}
					onChange={(e) =>
						handleInputChange(e.target.value, labelKey)
					}
				></textarea>
		</div>
	);
};