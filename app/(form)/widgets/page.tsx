"use client";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader } from "@/components/loader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StarsRating from "@/components/stars-rating";
import { Checkbox } from "@/components/ui/checkbox";
import { BadgeCheck, BadgeMinus, ExternalLink, Eye, Loader2, MousePointerClick, Network, Percent, Tag, Trash2 } from "lucide-react";
import DisplayWidget from "@/components/widgets/DisplayWidget";
import { useRouter } from "next/navigation";

const LandingPage = () => {
	const router = useRouter();

	const [isSearchingWidgets, setIsSearchingWidgets] =
		useState(true);
	const [widgets, setWidgets] = useState([]);

	const handleGetAllUserWidgets = useCallback(async () => {
		setIsSearchingWidgets(true);
		try {
			const response = await axios.get(
				"/api/widgets/get-all-user-widgets"
			);
			console.log(response.data.widgets);
			setWidgets(response.data.widgets);
		} catch (err) {
			toast.error("An error occurred while retrieving the form!");
		} finally {
			setIsSearchingWidgets(false);
		}
	}, []);

	useEffect(() => {
		handleGetAllUserWidgets();
	}, []);

	const timeAgo = (date: string): string => {
		const now = new Date();
		const givenDate = new Date(date);
		const diffInSeconds = Math.floor((now.getTime() - givenDate.getTime()) / 1000);
	
		const intervals: { label: string; seconds: number }[] = [
			{ label: "year", seconds: 31536000 },
			{ label: "month", seconds: 2592000 },
			{ label: "day", seconds: 86400 },
			{ label: "hour", seconds: 3600 },
			{ label: "minute", seconds: 60 },
			{ label: "second", seconds: 1 },
		];
	
		for (const interval of intervals) {
			const count = Math.floor(diffInSeconds / interval.seconds);
			if (count >= 1) {
				return count === 1
					? `1 ${interval.label} ago`
					: `${count} ${interval.label}s ago`;
			}
		}
	
		return "just now";
	};
	
	const [checkedItems, setChecked] = useState(new Set());

	const isChecked = (id: number) => {
		return checkedItems.has(id);
	};

	const [loading, setLoading] = useState({
		action: "",
		loading: false,
	});

	const updateForm = async (action: string, approved: boolean) => {
		setLoading({ action, loading: true });
		try {
			const URL = "/api/widgets/edit";

			// Convert the set to an array and iterate over the ids
			const idsArray = Array.from(checkedItems);
			for (const id of idsArray) {
				const rawResponse = await fetch(URL, {
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ data: { id, approved } }),
				});

				const response = await rawResponse.json();

				if (response?.error) {
					// toast.error(response.error);
				} else {
					//@ts-ignore
					setWidgets((prevT) =>
						prevT.map((t) => {
							//@ts-ignore
							if (checkedItems.has(t.id)) return { ...t, approved };
							//@ts-ignore
							else return { ...t };
						})
					);
					// toast.success("Response approved!");
				}
			}
		} catch (err) {
			console.error(err);
			toast.error("Unexpected error");
		} finally {
			setLoading({ action: "", loading: false });
		}
	};

	const handleDelete = async () => {
		setLoading({ action: "delete", loading: true });
		try {
			const rawResponse = await fetch("/api/widgets/delete", {
				method: "DELETE",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ids: Array.from(checkedItems) }),
			});

			const response = await rawResponse.json();
			console.log(response);
			if (!response?.success) {
				toast.error("Could not delete widgets");
			} else {
				setWidgets((prevT) =>
					prevT.filter((t) => !checkedItems.has(t.id))
				);
				setChecked(new Set());
				toast.success("Widgets deleted successfully!");
			}
		} catch (err) {
			console.error(err);
			toast.error("Unexpected error");
		} finally {
			setLoading({ action: "", loading: false });
		}
	};

	const handleGoToWidget = (url: string) => {
		router.push('/share/' + url)
	}

	return (
		<>
			<div className="px-8 py-5 relative">
				<div className="mb-8 space-y-4">
					<div className="flex w-full justify-between items-start">
						<div className="flex flex-col ">
							<h2 className="text-[18px] font-bold ">
								Your Created Widgets ✨
							</h2>
							<p className="text-gray-500 font-light text-[14px]">
								These are all widgets you have created to share testimonials
							</p>
						</div>
					</div>
				</div>

				{isSearchingWidgets ? (
					<div className="mt-10">
						<Loader />
					</div>
				) : (
					<>
						{widgets?.length ? (
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
								{widgets.map((t: any, index: number) => (
									<>
										<div
											key={t.id}
											className="border-[1px] border-gray-200 rounded-[12px] overflow-hidden"
										>
											<div className="top w-full h-[250px] bg-[#dcdcdc34]">
												<DisplayWidget widget={t}/>
											</div>
											<div className="bottom w-full py-4 px-5">
												<div className="flex justify-between items-center">
													<span className='text-gray-700 text-[14px]'>2</span>
													<div className="flex items-center gap-2">
														<div className='hover:bg-gray-200 cursor-pointer rounded-[6px] p-1' onClick={() => handleGoToWidget(t.url)}>
															<ExternalLink className="text-gray-600" size={15}/>
														</div>
														<span className="px-2 py-1 rounded-[6px] bg-[#4dff073e] text-[#0d7d019a] text-[12px] font-normal cursor-pointer">
															Widget
														</span>
													</div>
												</div>
												<div className="flex items-center gap-2 my-4">
													<span className="px-2 py-1 rounded-[6px] bg-[#dcdcdc34] text-gray-400 text-[12px] font-normal cursor-pointer">
														Testimonials Wall
													</span>
													<span className="px-2 py-1 rounded-[6px] bg-[#dcdcdc34] text-gray-400 text-[12px] font-normal cursor-pointer">
														Pricing Page
													</span>
													<span className="text-[12px] text-gray-400 font-[400]">Edited {timeAgo(t.updatedAt)}</span>
												</div>
												<div className="bg-[#dcdcdc34] rounded-[10px] px-3 py-[5px] flex items-center gap-2">
													<div className="flex-[0.33] flex flex-col gap-1">
														<span className="text-gray-400 text-[12px]">Views</span>
														<div className="flex items-center gap-1">
															<Eye className="text-gray-400" size={20}/> <p className='text-gray-400 text-[16px] font-semibold'>1</p>
														</div>
													</div>
													<div className="flex-[0.33] flex flex-col gap-1">
														<span className="text-gray-400 text-[12px]">Engagement</span>
														<div className="flex items-center gap-1">
															<MousePointerClick className="text-gray-400" size={20}/> <p className='text-gray-400 text-[16px] font-semibold'>1</p>
														</div>
													</div>
													<div className="flex-[0.33] flex flex-col gap-1">
														<span className="text-gray-400 text-[12px]">Engagement Rate</span>
														<div className="flex items-center gap-1">
															<Percent className="text-gray-400" size={20}/> <p className='text-gray-400 text-[16px] font-semibold'>1</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</>
								))}
							</div>
						) : (
							<div className="flex items-center justify-center mt-[100px]">
								<div className="flex flex-col items-center">
									<h1 className="font-semibold">
										No widgets yet.
									</h1>
									<p className="text-gray-600 text-[14px]">
										Go to your "Testimonials" tab, and bulk share testimonials as a widget.
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
