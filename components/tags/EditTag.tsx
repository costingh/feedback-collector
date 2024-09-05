import {
	Braces,
	Copy,
	Link,
	Loader2,
	MoveLeft,
	Pencil,
	PlusSquare,
	Share2,
	Trash2,
} from "lucide-react";

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

export function EditTag({
	loading,
	tag,
	setLoading,
	setTags,
}: {
	loading: { action: string; loading: boolean };
	tag: Tag;
	setLoading: any;
	setTags: any;
}) {
	const [formValue, setFormValue] = useState({
		category: tag.category,
		tagName: tag.tagName,
		tagDescription: tag.tagDescription,
	});

	const handleEdit = async (tag: Tag) => {
		setLoading({
			action: "edit",
			loading: true,
		});
		try {
			const response = await axios.put(`/api/tag/update?id=${tag.id}`, {
				data: {
                    id: tag.id,
                    category: formValue.category,
                    tagName: formValue.tagName,
                    tagDescription: formValue.tagDescription,
                }
			});

			if (response.status === 200) {
				//@ts-ignore
				setTags((prev) =>
					//@ts-ignore
					prev.map((t) =>
						t.id === tag.id
							? {
									...t,
									category: formValue.category,
									tagName: formValue.tagName,
									tagDescription: formValue.tagDescription,
							  }
							: t
					)
				);
    			document.getElementById("close-dialog")?.click();
                toast.success("Tag updated successfully!");
			} else {
				toast.error("Failed to update the tag.");
			}
		} catch (error) {
			console.error("Failed to update tag:", error);
			toast.error("An error occurred while updating the tag");
		}
		setLoading({
			action: "",
			loading: false,
		});
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<div className="bg-amber-200 py-[4px] px-[5px] rounded-[7px] cursor-pointer hover:bg-amber-300">
					{loading.action == "edit" && loading.loading ? (
						<Loader2 size={11} className="spin my-[4px] mx-[4px]" />
					) : (
						<Pencil size={14} className="text-amber-600" />
					)}
				</div>
			</DialogTrigger>
			<DialogContent className="max-w-[500px]">
				<DialogHeader>
					<DialogTitle className="flex items-center gap-2">
						<h1> Edit Tag</h1>
					</DialogTitle>
					<DialogDescription>
						You are about to edit tag {tag?.tagName}
					</DialogDescription>
				</DialogHeader>

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
					<div className="flex items-center gap-2 mt-2 flex-wrap">
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
                        value={formValue.tagDescription}
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

				<DialogFooter className="sm:justify-start">
					<div
						onClick={() => handleEdit(tag)}
						className="text-center py-[10px] rounded-[8px] bg-[#000] text-[#eee] w-full cursor-pointer text-[14px] font-semibold mt-3 hover:opacity-80"
					>
						{!loading.loading ? (
							"Save changes"
						) : (
							<div className="flex items-center justify-center">
								<LoadingSpinner />
							</div>
						)}
					</div>

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
