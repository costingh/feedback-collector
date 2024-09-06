import { Braces, Copy, Link, MoveLeft, PlusSquare, Share2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { Form } from "@/types/Form";
import { LoadingSpinner } from "../LoadingSpinner";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import axios from "axios";
import { Tag } from "@/types/Tag";
import { tagCategories as categories } from "@/lib/utils";

const Category = ({
	category,
	active,
	index,
	setActive,
	setFormValue,
}: {
	category: any;
	active: number;
	index: number;
	setActive: any;
	setFormValue: any;
}) => {
	return (
		<div
			style={active == index ? { background: "rgb(238, 239, 240)" } : {}}
			className="flex gap-3 hover:bg-gray-50 py-3 border-b-[1px] border-[rgb(229 231 235)] cursor-pointer"
			onClick={() => {
				setActive(index);
				// @ts-ignore
				setFormValue((prev) => ({ ...prev, category: category.name }));
			}}
		>
			<div>{category.emoji}</div>
			<div>
				<h1 className="text-[14px] font-[600] text-gray-900 mb-[2px]">
					{category.name}
				</h1>
				<p className="text-[13px] font-[300] text-gray-500 leading-[15px]">
					{category.description}
				</p>
			</div>
		</div>
	);
};

export function CreateTagModal({setTags}: {setTags? : (tags: Tag[]) => void}) {
	const [step, setStep] = useState(1);
	const [activeCategory, setActiveCategory] = useState(-1);

	const [formValue, setFormValue] = useState({
		category: "",
		tagName: "",
		tagDescription: "",
	});

	const [creatingTag, setCreatingTag] = useState(false);

	const handleCreateTag = async () => {
		setCreatingTag(true);

		if (!formValue.tagName) {
			toast.error("Tag name is required");
			setCreatingTag(false);
			return;
		}

		try {
			const response = await axios.post("/api/tag/create", {
				data: {
					tagName: formValue.tagName,
					category: formValue.category,
					tagDescription: formValue.tagDescription,
					formResponsesIds: [],
				},
			});

			const createdTag = response?.data?.result;

			if (!createdTag) {
				toast.error("Widget could not be created!");
				setCreatingTag(false);
				return;
			}

			toast.success("Tag created");

			//@ts-ignore
			setTags && setTags(previousTags => [...previousTags, createdTag])

			document.getElementById("close-dialog")?.click();
			setFormValue({
				category: "",
				tagName: "",
				tagDescription: "",
			});
			setStep(1);
		} catch (e) {
			console.error(e);
			toast.error("Could not create tag");
		} finally {
			setCreatingTag(false);
		}
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<div className="rounded-[7px] bg-gray-200 text-gray-500 px-[10px] py-[4px] cursor-pointer hover:bg-gray-300 flex items-center gap-[4px]">
					<PlusSquare size={14} className="text-gray-800" />
					<span className="text-[13px] font-[500] whitespace-nowrap">
						Create tag
					</span>
				</div>
			</DialogTrigger>
			<DialogContent className="max-w-[500px]">
				<DialogHeader>
					<DialogTitle className="flex items-center gap-2">
						{step == 2 && <MoveLeft
							size={16}
							onClick={() => setStep(1)}
							className="text-gray-600 cursor-pointer hover:text-gray-800"
						/>}
						<h1> New Tag</h1>
					</DialogTitle>
					{step == 1 && (
						<DialogDescription>
							Select a category to get started
						</DialogDescription>
					)}
				</DialogHeader>

				{step == 1 && (
					<div className="overflow-y-auto max-h-[260px] smooth-scrollbar">
						{categories.map((category, index) => (
							<Category
								key={category.name}
								category={category}
								active={activeCategory}
								setActive={setActiveCategory}
								setFormValue={setFormValue}
								index={index}
							/>
						))}
					</div>
				)}

				{step == 2 && (
					<div>
						<Label className="text-[13px] font-[500] text-gray-600">
							Category
						</Label>
						<Select
							value={formValue.category}
							onValueChange={(value) =>
								setFormValue((prev) => ({
									...prev,
									category: value,
								}))
							}
						>
							<SelectTrigger className="w-full outline-none focus-visible:ring-0 focus-visible:ring-transparent mt-2">
								<SelectValue placeholder="Select category" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Categories</SelectLabel>
									{categories.map((c) => (
										<SelectItem value={c.name}>
											{c.emoji} {c.name}
										</SelectItem>
									))}
								</SelectGroup>
							</SelectContent>
						</Select>

						<div className="mt-3"></div>

						<Label className="text-[13px] font-[500] text-gray-600">
							Tag Name <span className="text-red-400">*</span>
						</Label>
						<Input
							className="w-full outline-none focus-visible:ring-0 focus-visible:ring-transparent mt-2"
							placeholder="Tag Name"
							onChange={(e) =>
								setFormValue((prev) => ({
									...prev,
									tagName: e.target.value,
								}))
							}
							value={formValue.tagName}
						/>

						<div className="mt-3"></div>

						<Label className="text-[13px] font-[500] text-gray-600">
							Suggestions
						</Label>
						<div className="flex items-center gap-2 mt-2">
							{categories
								.find((c) => formValue.category == c.name)
								?.suggestions?.map((suggestion) => (
									<span
										key={suggestion}
										onClick={() =>
											setFormValue((prev) => ({
												...prev,
												tagName: suggestion,
											}))
										}
										className="bg-gray-100 text-gray-600 border-gray-200 border-[1px] px-[6px] py-[2px] rounded-[6px] cursor-pointer hover:bg-gray-200 text-[12px] font-[500]"
									>
										{suggestion}
									</span>
								))}
						</div>
						<div className="mt-3"></div>
						<Label className="text-[13px] font-[500] text-gray-600">
							Tag description
						</Label>
						<textarea
							onChange={(e) =>
								setFormValue((prev) => ({
									...prev,
									tagDescription: e.target.value,
								}))
							}
							className="placeholder-gray-500 placeholder:font-[400] placeholder:text-[14px] p-2.5 mt-2 rounded-lg border border-gray-300 text-gray-700 min-h-[50px] text-[15px] w-full font-500 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
							placeholder="Describe this tag so your team knows what it's for"
						></textarea>
					</div>
				)}

				<DialogFooter className="sm:justify-start">
					{step == 1 && (
						<Button
							disabled={activeCategory == -1}
							onClick={() => setStep(2)}
							className="text-center py-[10px] rounded-[8px] bg-[#000] text-[#eee] w-full cursor-pointer text-[14px] font-semibold mt-3 hover:opacity-80 hover:bg-[#111]"
						>
							Next
						</Button>
					)}

					{step == 2 && (
						<div
							onClick={handleCreateTag}
							className="text-center py-[10px] rounded-[8px] bg-[#000] text-[#eee] w-full cursor-pointer text-[14px] font-semibold mt-3 hover:opacity-80"
						>
							{!creatingTag ? (
								"Create"
							) : (
								<div className="flex items-center justify-center">
									<LoadingSpinner />
								</div>
							)}
						</div>
					)}

					<DialogClose asChild>
						<div id="close-dialog" style={{ display: "none" }}>
							Save changes
						</div>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
