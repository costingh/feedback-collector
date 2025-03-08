import {
	Braces,
	Copy,
	Link,
	Loader2,
	MoveLeft,
	Pencil,
	PlusSquare,
	Share2,
	TagIcon,
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
import { useEffect, useState } from "react";

import { toast } from "sonner";
import axios from "axios";
import { Tag } from "@/types/Tag";

export function TagTestimonials({
	testimonialsIds,
	loading,
	setLoading,
	allUserTags,
	setTags,
}: {
	testimonialsIds: string[];
	loading: { action: string; loading: boolean };
	setLoading: any;
	allUserTags: Tag[];
	setTags: any;
}) {
	const [isTagging, setIsTagging] = useState("");

	const handleTagTestimonial = async (
		tag: Tag,
		testimonialsIds: string[]
	) => {
		setIsTagging(tag?.id || "");
		try {
			const response = await axios.put(`/api/tag/update?id=${tag.id}`, {
				data: {
					id: tag.id,
					formResponsesIds: [
						...(tag?.formResponsesIds || []),
						...testimonialsIds,
					],
				},
			});

			if (!response?.data?.error) {
				//@ts-ignore
				setTags((prev) =>
					//@ts-ignore
					prev.map((t) =>
						t.id === tag.id
							? {
									...t,
									formResponsesIds: [
										...(tag?.formResponsesIds || []),
										...testimonialsIds,
									],
							  }
							: t
					)
				);
				toast.success("Testimonials tagged successfully!");
			} else {
				toast.error("Failed to tag testimonials.");
			}
		} catch (error) {
			console.error("Failed to tag:", error);
			toast.error("An error occurred while tagging the testimonials");
		}
		setIsTagging("");
	};

	const handleUntagTestimonial = async (
		tag: Tag,
		testimonialsIds: string[]
	) => {
		setIsTagging(tag?.id || "");
		try {
			const response = await axios.put(`/api/tag/update?id=${tag.id}`, {
				data: {
					id: tag.id,
					formResponsesIds:
						tag?.formResponsesIds?.filter(
							(id) => !testimonialsIds.includes(id)
						) || [],
				},
			});

			if (!response?.data?.error) {
				//@ts-ignore
				setTags((prev) =>
					//@ts-ignore
					prev.map((t) =>
						t.id === tag.id
							? {
									...t,
									formResponsesIds:
										tag?.formResponsesIds?.filter(
											(id) =>
												!testimonialsIds.includes(id)
										) || [],
							  }
							: t
					)
				);
				toast.success("Testimonials tagged successfully!");
			} else {
				toast.error("Failed to tag testimonials.");
			}
		} catch (error) {
			console.error("Failed to tag:", error);
			toast.error("An error occurred while tagging the testimonials");
		}
		setIsTagging("");
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<div
					// onClick={handleDelete}
					className="flex items-center justify-center gap-2 cursor-pointer hover:opacity-60 bg-[#3c3b3b] px-[8px] py-[3px] rounded-[10px]"
				>
					<TagIcon size={14} className="text-gray-200" />
					<span className="text-gray-200 font-[400] text-[13px]">
						{loading.action == "delete" && loading.loading ? (
							<Loader2
								size={11}
								className="spin my-[4px] mx-[4px]"
							/>
						) : (
							"Tag"
						)}
					</span>
				</div>
			</DialogTrigger>
			<DialogContent className="max-w-[500px]">
				<DialogHeader>
					<DialogTitle className="flex items-center gap-2">
						<h1>Tag selected testimonials</h1>
					</DialogTitle>
					<DialogDescription>
						Add a tag to all selected testimonials to make them more
						organized
					</DialogDescription>
				</DialogHeader>

				<div className="flex flex-wrap gap-2">
					{allUserTags.map((tag) => (
						<>
							{testimonialsIds.some((id) =>
								tag.formResponsesIds?.includes(id)
							) ? (
								<div
									key={tag.id}
									onClick={() =>
										handleUntagTestimonial(
											tag,
											testimonialsIds
										)
									}
									className="cursor-pointer bg-purple-100 px-[8px] py-[3px] rounded-[10px] border-[1px] border-purple-400 "
								>
									<span className="text-purple-500 font-[500] text-[13px] relative">
										<span
											style={
												isTagging == tag.id
													? { opacity: 0 }
													: {}
											}
										>
											{tag.tagName}
										</span>
										{isTagging == tag.id && (
											<div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
												<div className="loader-dots ml-[-24px]"></div>
											</div>
										)}
									</span>
								</div>
							) : (
								<div
									key={tag.id}
									onClick={() =>
										handleTagTestimonial(
											tag,
											testimonialsIds
										)
									}
									className="cursor-pointer bg-gray-100 px-[8px] py-[3px] rounded-[10px] border-[1px] border-gray-300 "
								>
									<span className="text-zinc-500 font-[400] text-[13px] relative">
										<span
											style={
												isTagging == tag.id
													? { opacity: 0 }
													: {}
											}
										>
											{tag.tagName}
										</span>
										{isTagging == tag.id && (
											<div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
												<div className="loader-dots ml-[-24px]"></div>
											</div>
										)}
									</span>
								</div>
							)}
						</>
					))}
				</div>
			</DialogContent>
		</Dialog>
	);
}
