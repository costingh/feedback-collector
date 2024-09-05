"use client";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader } from "@/components/loader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StarsRating from "@/components/stars-rating";
import { Checkbox } from "@/components/ui/checkbox";
import { CreateTagModal } from "@/components/tags/CreateTagModal";
import { Tag } from "@/types/Tag";
import { timeAgo } from "@/lib/utils";
import { Eye, Loader2, Pencil, Trash2 } from "lucide-react";
import { ConfirmDeleteTag } from "@/components/tags/ConfirmDeleteTag";
import { EditTag } from "@/components/tags/EditTag";

const LandingPage = () => {
	const [isSearchingTags, setIsSearchingTags] = useState(true);
	const [tags, setTags] = useState<Tag[]>([]);

	const handleGetAllUserTags = useCallback(async () => {
		setIsSearchingTags(true);
		try {
			const response = await axios.get("/api/tag/get-all-user-tags");

			console.log(response?.data?.tags);
			setTags(response?.data?.tags || []);
		} catch (err) {
			toast.error("An error occurred while retrieving your tags!");
		} finally {
			setIsSearchingTags(false);
		}
	}, []);

	useEffect(() => {
		handleGetAllUserTags();
	}, []);

	const [loading, setLoading] = useState({
		action: "",
		loading: false,
	});

	// const handleDelete = async () => {
	// 	setLoading({ action: "delete", loading: true });
	// 	try {
	// 		const rawResponse = await fetch("/api/tags/delete", {
	// 			method: "DELETE",
	// 			headers: {
	// 				Accept: "application/json",
	// 				"Content-Type": "application/json",
	// 			},
	// 			body: JSON.stringify({ ids: Array.from(checkedItems) }),
	// 		});

	// 		const response = await rawResponse.json();
	// 		console.log(response);
	// 		if (!response?.success) {
	// 			toast.error("Could not delete tags");
	// 		} else {
	// 			setTags((prevT) =>
	// 				//@ts-ignore
	// 				prevT.filter((t) => !checkedItems.has(t.id))
	// 			);
	// 			setChecked(new Set());
	// 			toast.success("Tags deleted successfully!");
	// 		}
	// 	} catch (err) {
	// 		console.error(err);
	// 		toast.error("Unexpected error");
	// 	} finally {
	// 		setLoading({ action: "", loading: false });
	// 	}
	// };

	const handleEdit = (tag: Tag) => {};

	return (
		<>
			<div className="px-8 py-5 relative">
				<div className="mb-8 space-y-4 flex items-center justify-between">
					<div className="flex w-full justify-between items-start">
						<div className="flex flex-col ">
							<h2 className="text-[18px] font-bold ">
								Your tags ✨
							</h2>
							<p className="text-gray-500 font-light text-[14px]">
								Tags help you organize your tags.
							</p>
						</div>
					</div>
					<CreateTagModal setTags={setTags} />
				</div>

				{isSearchingTags ? (
					<div className="mt-10">
						<Loader />
					</div>
				) : (
					<>
						{tags?.length ? (
							<div className="flex w-full">
								<div className="w-full">
									{tags.map((tag) => (
										<div
											key={tag.id}
											className="w-full flex items-center justify-between border-b-[1px] py-2 px-4 border-gray-200 h-[60px] cursor-pointer hover:bg-gray-50"
										>
											<div className="text-ellipsis overflow-hidden whitespace-nowrap w-[220px]">
												<h1 className="text-[#000] font-normal text-[14px]">
													{tag.tagName}
												</h1>
												<span className="text-gray-400 font-normal text-[14px]">
													{tag.tagDescription || "-"}
												</span>
											</div>
											<div className="text-ellipsis overflow-hidden whitespace-nowrap w-[250px] flex items-center gap-2">
												<span className="bg-gray-200 py-[4px] px-[5px] rounded-[7px] cursor-pointer hover:bg-gray-300">
													<Eye
														size={14}
														className="text-gray-700"
													/>{" "}
												</span>
												<span className="text-gray-400 font-normal text-[14px]">
													5123k testimonials tagged
												</span>
											</div>
											<div>
												<span className="px-3 py-1 text-[13px] font-normal text-gray-600 bg-gray-100 rounded-[12px] w-[220px]">
													{tag.category}
												</span>
											</div>
											<div>
												<span className="text-gray-500 text-[14px] font-normal">
													{timeAgo(tag.createdAt)}
												</span>
											</div>
											<div className="text-ellipsis overflow-hidden whitespace-nowrap flex items-center gap-3">
												<ConfirmDeleteTag
													setLoading={setLoading}
													setTags={setTags}
													loading={loading}
													tag={tag}
												/>
												<EditTag
													setLoading={setLoading}
													setTags={setTags}
													loading={loading}
													tag={tag}
												/>
											</div>
										</div>
									))}
								</div>
							</div>
						) : (
							<div className="flex items-center justify-center mt-[100px]">
								<div className="flex flex-col items-center">
									<h1 className="font-semibold">
										No tags yet.
									</h1>
									<p className="text-gray-600 text-[14px]">
										Create tags by clicking the top right
										button "Create tag".
									</p>
								</div>
							</div>
						)}
					</>
				)}
			</div>
		</>
	);
};

export default LandingPage;
