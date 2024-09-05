import {
	Braces,
	Copy,
	Link,
	Loader2,
	MoveLeft,
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

export function ConfirmDeleteTag({
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
	const handleDeleteTag = async (tag: Tag) => {
		setLoading({
			action: "delete",
			loading: true,
		});
		try {
			const response = await axios.delete(`/api/tag/delete?id=${tag.id}`);

			if (response.status === 200) {
				toast.success("Tag deleted successfully!");
				//@ts-ignore
				setTags((prev) => prev.filter((t) => tag.id != t.id));
			} else {
				toast.error("Failed to delete the tag.");
			}
		} catch (error) {
			console.error("Failed to delete tag:", error);
			toast.error("An error occurred while deleting the tag");
		}
		setLoading({
			action: "",
			loading: false,
		});
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<div
					className="bg-red-200 py-[4px] px-[5px] rounded-[7px] cursor-pointer hover:bg-red-300"
				>
					{loading.action == "delete" && loading.loading ? (
						<Loader2 size={11} className="spin my-[4px] mx-[4px]" />
					) : (
						<Trash2 size={14} className="text-red-600" />
					)}
				</div>
			</DialogTrigger>
			<DialogContent className="max-w-[500px]">
				<DialogHeader>
					<DialogTitle className="flex items-center gap-2">
						<h1> Delete Tag</h1>
					</DialogTitle>
					<DialogDescription>
						You are about to delete tag {tag?.tagName}
					</DialogDescription>
				</DialogHeader>

				<div>
					<p className="text-gray-800 text-[14px]">
						Are you sure you want to delete tag {tag?.tagName}? This
						action is irremediable.
					</p>
				</div>

				<DialogFooter className="sm:justify-start">
					<div
						onClick={() => handleDeleteTag(tag)}
						className="text-center py-[10px] rounded-[8px] bg-[#000] text-[#eee] w-full cursor-pointer text-[14px] font-semibold mt-3 hover:opacity-80"
					>
						{!loading.loading ? (
							"Delete"
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
