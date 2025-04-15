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
import { Widget } from "@prisma/client";
import { useMutationData } from "@/hooks/useMutationData";
import { customizeWidget } from "@/actions/widgets";
import { toast } from "sonner";
import { LoadingSpinner } from "../animations/loading-spinner";

interface CustomizeLabelsProps {
	widget: Widget;
    setWidget: (widget: Widget) => void;
}

type FormLabelsType = {
	key: string;
	title: string;
	tooltipDescription: string;
	questions?: { text: string }[];
};

const CustomizeWidget: React.FC<CustomizeLabelsProps> = ({ widget, setWidget }) => {
	const { mutate: handleUpdate, isPending: isLoading } = useMutationData(
		["add-testimonials-for-widget"],
		() => customizeWidget(widget?.id, widget?.widgetDescription || ''),
		["shared-widget"],
		() => {
		}
	);

	const [formLabels, setFormLabels] = useState<FormLabelsType[]>([
		{
			key: "widgetDescription",
			title: "Description",
			tooltipDescription: "Choose a nice description here",
		},
		// {
		// 	key: "questions",
		// 	title: "Enter a few questions",
		// 	tooltipDescription:
		// 		"Here you can add what topics should customers target when offering feedback.",
		// 	// questions: form.questions,
		// },
		// {
		// 	key: "textareaPlaceholder",
		// 	title: "Response",
		// 	tooltipDescription: "An example of message for the customers.",
		// },
		// {
		// 	key: "buttonLabel",
		// 	title: "Button Label",
		// 	tooltipDescription: "Change the submit button label.",
		// },
	]);

	const handleInputChange = (value: string, key: string) => {
		if (key == "widgetDescription") {
            // @ts-ignore
            setWidget((prevWidget) => ({...prevWidget, widgetDescription: value})); // Update the widget state with the new description
		}
	};

	return (
		<div className="w-full">
			{formLabels.map((label) => (
				<LabelEdit
					labelKey={label.key}
					key={label.key}
					title={label.title}
                    // @ts-ignore
                    textareaValue={widget?.[label.key] || ""}
					tooltipDescription={label.tooltipDescription}
					handleInputChange={handleInputChange}
				/>
			))}
			<div
				onClick={handleUpdate}
				className="text-center py-[10px] rounded-[8px] bg-[#000] text-[#eee] w-full cursor-pointer text-[14px] font-semibold mt-10 hover:opacity-80"
			>
				{!isLoading ? (
					"Apply changes"
				) : (
					<div className="flex items-center justify-center">
						<LoadingSpinner />
					</div>
				)}
			</div>
		</div>
	);
};

export default CustomizeWidget;

type LabelEditProps = {
	labelKey: string;
	title: string;
	tooltipDescription: string;
	textareaValue?: string;
	handleInputChange: any;
};

const LabelEdit: React.FC<LabelEditProps> = ({
	labelKey,
	title,
	tooltipDescription,
	textareaValue,
	handleInputChange,
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
			<textarea
				className="w-full border-[1px] border-gray-200 rounded-[4px] px-3 py-2 text-[14px]"
				value={textareaValue}
				onChange={(e) => handleInputChange(e.target.value, labelKey)}
			></textarea>
		</div>
	);
};
