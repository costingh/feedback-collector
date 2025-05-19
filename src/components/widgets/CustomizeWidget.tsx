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
import { LoadingSpinner } from "../animations/loading-spinner";
import ColorPicker from "../forms/form-editor/ColorPicker";
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";

interface CustomizeLabelsProps {
	widget: Widget & { _count: { testimonials: number } } & { avgStars: number } | null | undefined;
	setWidget: (widget: Widget) => void;
}

type FormLabelsType = {
	key: string;
	title: string;
	tooltipDescription: string;
	questions?: { text: string }[];
};

const CustomizeWidget: React.FC<CustomizeLabelsProps> = ({
	widget,
	setWidget,
}) => {
	if (!widget?.id) return null;

	const { mutate: handleUpdate, isPending: isLoading } = useMutationData(
		["add-testimonials-for-widget"],
		() => customizeWidget(widget?.id, widget?.widgetDescription || "", widget?.cardBackground || "", widget?.primaryTextColor || "", widget?.secondaryTextColor || "", widget?.thirdTextColor || "", widget?.cardBorderColor || "", widget?.variant || ""),
		["shared-widget"],
		() => { }
	);

	const [formLabels, setFormLabels] = useState<FormLabelsType[]>([
		{
			key: "widgetDescription",
			title: "Description",
			tooltipDescription: "Choose a nice description here or leave it blank",
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
			setWidget((prevWidget) => ({
				...prevWidget,
				widgetDescription: value,
			})); // Update the widget state with the new description
		}
	};

	return (
		<div className="w-full h-full flex flex-col justify-between">
			<div>
				<div className="flex items-center justify-between my-3">
					<p className="text-[14px] font-[600] text-[#000]">Widget Name:</p>
					<span className="px-2 py-1 rounded-[6px] text-[12px] font-normal cursor-pointer">
						{widget?.name}
					</span>
				</div>

				<div className="flex items-center justify-between">
					<p className="text-[14px] font-[600] text-[#000]">Widget Type:</p>

					<span className="px-2 py-1 rounded-[6px] bg-[#4dff073e] text-[#0d7d019a] text-[12px] font-normal cursor-pointer">
						{widget?.type == "basic_wall" && "Wall of Love"}
						{widget?.type == "rolling_wall" && "Carousel"}
						{widget?.type == "social_star" && "Social Star"}
						{widget?.type == "rating_badge" && "Rating Badge"}
						{widget?.type == "avatars" && "Avatars"}
					</span>
				</div>

				<div className="flex flex-col items-start my-3">
					<p className="text-[14px] font-[600] text-[#000]">Linked Testimonials:</p>

					<span className="text-[13px] font-normal text-gray-400 leading-[17px]">
						You have linked {widget?._count?.testimonials} testimonials
					</span>
				</div>

				{widget?.type == "avatars" && (
					<>
						<Label className="text-[14px] font-[600] text-[#000]">
							Choose a Variant
						</Label>
						<Select
							value={widget?.variant || 'simple'}
							// @ts-ignore
							onValueChange={(value) =>
								setWidget({
									...widget,
									variant: value,
								})
							}
						>
							<SelectTrigger className="w-full outline-none focus-visible:ring-0 focus-visible:ring-transparent mt-2">
								<SelectValue placeholder="Select category" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Categories</SelectLabel>
									{[{ label: "Elite", emoji: "👑", value: "elite" }, { label: "Inline", emoji: "✨", value: "inline" }, { label: "Simple", emoji: "👤", value: "simple" }].map((c) => (
										<SelectItem value={c.value} key={c.value}>
											{c.emoji} {c.label}
										</SelectItem>
									))}
								</SelectGroup>
							</SelectContent>
						</Select>

						<p className="text-[14px] font-[600] text-[#000] mt-5">Customize colors:</p>
						<div className='mt-3'>
							<span className="text-[13px] font-normal text-gray-400 leading-[17px]">
								Choose primary text color
							</span>
							<ColorPicker
								inputValue={widget?.primaryTextColor}
								// @ts-ignore
								setInputValue={(color: string) => setWidget((prevWidget) => ({ ...prevWidget, primaryTextColor: color }))}
							/>
						</div>

						{widget?.variant == "inline" && (
							<div className='mt-3'>
								<span className="text-[13px] font-normal text-gray-400 leading-[17px]">
									Choose secondary text color
								</span>
								<ColorPicker
									inputValue={widget?.secondaryTextColor}
									// @ts-ignore
									setInputValue={(color: string) => setWidget((prevWidget) => ({ ...prevWidget, secondaryTextColor: color }))}
								/>
							</div>
						)}
					</>
				)}

				{widget?.type == "basic_wall" && (
					<>
						<p className="text-[14px] font-[600] text-[#000] mt-5">Customize colors:</p>
						<div className='mt-3'>
							<span className="text-[13px] font-normal text-gray-400 leading-[17px]">
								Choose background color for cards
							</span>
							<ColorPicker
								inputValue={widget?.cardBackground}
								// @ts-ignore
								setInputValue={(color: string) => setWidget((prevWidget) => ({ ...prevWidget, cardBackground: color }))}
							/>
						</div>
						<div className='mt-3'>
							<span className="text-[13px] font-normal text-gray-400 leading-[17px]">
								Choose primary text color
							</span>
							<ColorPicker
								inputValue={widget?.primaryTextColor}
								// @ts-ignore
								setInputValue={(color: string) => setWidget((prevWidget) => ({ ...prevWidget, primaryTextColor: color }))}
							/>
						</div>
						<div className='mt-3'>
							<span className="text-[13px] font-normal text-gray-400 leading-[17px]">
								Choose secondary text color
							</span>
							<ColorPicker
								inputValue={widget?.secondaryTextColor}
								// @ts-ignore
								setInputValue={(color: string) => setWidget((prevWidget) => ({ ...prevWidget, secondaryTextColor: color }))}
							/>
						</div>
						<div className='mt-3'>
							<span className="text-[13px] font-normal text-gray-400 leading-[17px]">
								Choose third text color
							</span>
							<ColorPicker
								inputValue={widget?.thirdTextColor}
								// @ts-ignore
								setInputValue={(color: string) => setWidget((prevWidget) => ({ ...prevWidget, thirdTextColor: color }))}
							/>
						</div>
						<div className='mt-3'>
							<span className="text-[13px] font-normal text-gray-400 leading-[17px]">
								Choose card border color
							</span>
							<ColorPicker
								inputValue={widget?.cardBorderColor}
								// @ts-ignore
								setInputValue={(color: string) => setWidget((prevWidget) => ({ ...prevWidget, cardBorderColor: color }))}
							/>
						</div>
					</>
				)}

				{widget?.type == "social_star" && (
					<>
						<p className="text-[14px] font-[600] text-[#000] mt-5">Customize colors:</p>
						<div className='mt-3'>
							<span className="text-[13px] font-normal text-gray-400 leading-[17px]">
								Choose background color for cards
							</span>
							<ColorPicker
								inputValue={widget?.cardBackground}
								// @ts-ignore
								setInputValue={(color: string) => setWidget((prevWidget) => ({ ...prevWidget, cardBackground: color }))}
							/>
						</div>
						<div className='mt-3'>
							<span className="text-[13px] font-normal text-gray-400 leading-[17px]">
								Choose primary text color
							</span>
							<ColorPicker
								inputValue={widget?.primaryTextColor}
								// @ts-ignore
								setInputValue={(color: string) => setWidget((prevWidget) => ({ ...prevWidget, primaryTextColor: color }))}
							/>
						</div>
						<div className='mt-3'>
							<span className="text-[13px] font-normal text-gray-400 leading-[17px]">
								Choose secondary text color
							</span>
							<ColorPicker
								inputValue={widget?.secondaryTextColor}
								// @ts-ignore
								setInputValue={(color: string) => setWidget((prevWidget) => ({ ...prevWidget, secondaryTextColor: color }))}
							/>
						</div>
						<div className='mt-3'>
							<span className="text-[13px] font-normal text-gray-400 leading-[17px]">
								Choose third text color
							</span>
							<ColorPicker
								inputValue={widget?.thirdTextColor}
								// @ts-ignore
								setInputValue={(color: string) => setWidget((prevWidget) => ({ ...prevWidget, thirdTextColor: color }))}
							/>
						</div>
						<div className='mt-3'>
							<span className="text-[13px] font-normal text-gray-400 leading-[17px]">
								Choose card border color
							</span>
							<ColorPicker
								inputValue={widget?.cardBorderColor}
								// @ts-ignore
								setInputValue={(color: string) => setWidget((prevWidget) => ({ ...prevWidget, cardBorderColor: color }))}
							/>
						</div>
					</>
				)}

{widget?.type == "rating_badge" && (
					<>
						<p className="text-[14px] font-[600] text-[#000] mt-5">Customize colors:</p>
						<div className='mt-3'>
							<span className="text-[13px] font-normal text-gray-400 leading-[17px]">
								Choose background color for cards
							</span>
							<ColorPicker
								inputValue={widget?.cardBackground}
								// @ts-ignore
								setInputValue={(color: string) => setWidget((prevWidget) => ({ ...prevWidget, cardBackground: color }))}
							/>
						</div>
						<div className='mt-3'>
							<span className="text-[13px] font-normal text-gray-400 leading-[17px]">
								Choose primary text color
							</span>
							<ColorPicker
								inputValue={widget?.primaryTextColor}
								// @ts-ignore
								setInputValue={(color: string) => setWidget((prevWidget) => ({ ...prevWidget, primaryTextColor: color }))}
							/>
						</div>
						<div className='mt-3'>
							<span className="text-[13px] font-normal text-gray-400 leading-[17px]">
								Choose secondary text color
							</span>
							<ColorPicker
								inputValue={widget?.secondaryTextColor}
								// @ts-ignore
								setInputValue={(color: string) => setWidget((prevWidget) => ({ ...prevWidget, secondaryTextColor: color }))}
							/>
						</div>
					</>
				)}

				{widget?.type == 'avatars' && <>
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
				</>}
			</div>

			<div
				onClick={handleUpdate}
				className="text-center py-[10px] rounded-[8px] bg-[#000] text-[#eee] w-full cursor-pointer text-[14px] font-semibold hover:opacity-80"
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
		<div className="flex flex-col items-start gap-2 mt-3 w-full">
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
