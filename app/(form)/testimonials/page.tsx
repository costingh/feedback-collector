"use client";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader } from "@/components/loader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StarsRating from "@/components/stars-rating";
import { Checkbox } from "@/components/ui/checkbox";
import { BadgeCheck, BadgeMinus, Loader2, Tag, Trash2 } from "lucide-react";

const LandingPage = () => {
	const [isSearchingTestimonials, setIsSearchingTestimonials] =
		useState(true);
	const [testimonials, setTestimonials] = useState([]);

	const handleGetAllUserTestimonials = useCallback(async () => {
		setIsSearchingTestimonials(true);
		try {
			const response = await axios.get("/api/get-all-user-testimonials");
			console.log(response.data.testimonials);
			setTestimonials(response.data.testimonials);
		} catch (err) {
			toast.error("An error occurred while retrieving the form!");
		} finally {
			setIsSearchingTestimonials(false);
		}
		// try {
		// 	const response = await axios.get(
		// 		`/api/get-form?url=${formUrl}`
		// 	);
		// 	const formResponse = response?.data?.form;

		// 	if (!formResponse) {
		// 		toast.error("Form not found!");
		// 		return;
		// 	}
		// 	console.log("Got form: ", formResponse);
		// 	setForm(formResponse);

		// 	// if form is published, set step to 1
		// 	if(formResponse.published) setStep(1)
		// } catch (err) {
		// 	toast.error("An error occurred while retrieving the form!");
		// } finally {
		// 	setIsSearchingTestimonials(false);
		// }
	}, []);

	useEffect(() => {
		handleGetAllUserTestimonials();
	}, []);

	const timeAgo = (date: string): string => {
		const now = new Date();
		const givenDate = new Date(date);
		const diffInSeconds = Math.floor((now - givenDate) / 1000);

		const intervals = [
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
		action: '',
		loading: false
	})

	const updateForm = async (action: string, approved: boolean) => {
		setLoading({ action, loading: true });
		try {
			const URL = "/api/edit-testimonial";
	
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
					setTestimonials(prevT => prevT.map(t => {
						//@ts-ignore
						if(checkedItems.has(t.id)) return {...t, approved}
						//@ts-ignore
						else return {...t}
					}))
					// toast.success("Response approved!");
				}
			}
		} catch (err) {
			console.error(err);
			toast.error('Unexpected error');
		} finally {
			setLoading({ action: '', loading: false });
		}
	};

	return (
		<>
			<div className="px-8 py-5 relative">
				{checkedItems.size > 0 && (
					<div className="top absolute top-0 bg-black px-6 py-2 w-[50%] left-[25%] rounded-b-[30px] flex items-center justify-center gap-3">
						<div className="flex items-center justify-center gap-2 cursor-pointer hover:opacity-60 bg-[#3c3b3b] px-[8px] py-[3px] rounded-[10px]">
							<Trash2 size={14} className="text-red-600" />
							<span className="text-gray-200 font-[400] text-[13px]">
								Delete
							</span>
						</div>

						<div 
							onClick={() => updateForm('approve', true)}
							className="flex items-center justify-center gap-2 cursor-pointer hover:opacity-60 bg-[#3c3b3b] px-[8px] py-[3px] rounded-[10px]"
						>
							<BadgeCheck size={14} className="text-gray-200" />
							<span className="text-gray-200 font-[400] text-[13px]">
								{(loading.action == 'approve' && loading.loading) ? <Loader2  size={11} className="spin my-[4px] mx-[4px]"/> : 'Approve'}
							</span>
						</div>

						<div 
							onClick={() => updateForm('unapprove', false)} 
							className="flex items-center justify-center gap-2 cursor-pointer hover:opacity-60 bg-[#3c3b3b] px-[8px] py-[3px] rounded-[10px]"
						>
							<BadgeMinus size={14} className="text-gray-200" />
							<span className="text-gray-200 font-[400] text-[13px]">
								{loading.action == 'unapprove' && loading.loading ? <Loader2  size={11} className="spin my-[4px] mx-[4px]"/> : 'Unapprove'}
							</span>
						</div>
					</div>
				)}
				<div className="mb-8 space-y-4">
					<div className="flex w-full justify-between items-start">
						<div className="flex flex-col ">
							<h2 className="text-[18px] font-bold ">
								Your Collected Testimonials ✨
							</h2>
							<p className="text-gray-500 font-light text-[14px]">
								These are all your testimonials put together
								from each of your forms.
							</p>
						</div>
					</div>
				</div>

				{isSearchingTestimonials ? (
					<div className="mt-10">
						<Loader />
					</div>
				) : (
					<>
						{testimonials?.length ? (
							<>
								{testimonials.map((t: any, index: number) => (
									<>
										<div
											key={t.id}
											className="flex px-4 py-3 rounded-[10px] w-full justify-between cursor:pointer hover:bg-zinc-100 gap-4 mb-4"
											style={
												isChecked(t.id)
													? {
															background:
																"rgb(243 244 246)",
													  }
													: {}
											}
										>
											<div className="avatar flex flex-col items-start max-w-full w-[350px]">
												<Avatar>
													<AvatarImage
														src={t?.avatar}
													/>
													<AvatarFallback>
														CN
													</AvatarFallback>
												</Avatar>
												<p className="text-zinc-700 text-[14px] font-[600] mb-1 mt-2">
													{t?.name}
												</p>
												{/* <span>{t?.email}</span> */}
												<span className="text-gray-600 text-[13px] font-[400]">
													{t?.jobTitle || t?.email}
												</span>
											</div>
											<div className="w-full">
												{/* <span>{t?.logo}</span> */}
												{/* <span>{t?.company}</span> */}
												{/* <span>{t?.website}</span> */}
												{/* <span>{t?.jobTitle}</span> */}
												<div className="flex items-center gap-6">
													<span className="text-gray-400 font-semibold text-[12px]">
														{timeAgo(t?.createdAt)}
													</span>

													<div className="flex items-center gap-1">
														<Tag
															size={13}
															className="text-gray-400"
														/>
														<span className="text-gray-400 font-semibold text-[12px]">
															No tags yet
														</span>
													</div>
												</div>

												<div className="my-3 text-[16px] text-gray-700 font-normal max-w-[700px]">
													{t?.message}
												</div>
												{/* <StarsRating
													ratingChanged={() =>
														undefined
													}
													count={5}
												/> */}

												<div className="flex items-center">
													{[1, 2, 3, 4, 5].map(
														(i) => (
															<svg
																key={i}
																xmlns="http://www.w3.org/2000/svg"
																width="28"
																height="28"
																viewBox="0 0 24 24"
																stroke="currentColor"
																fill="currentColor"
																stroke-width="2"
																stroke-linecap="round"
																stroke-linejoin="round"
																className="text-gray-200 duration-200 hover:scale-110"
															>
																<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
															</svg>
														)
													)}
												</div>
											</div>

											<div className="w-[350px] flex items-center gap-4 justify-end">
												<span className="px-2 py-1 rounded-[10px] bg-[#ffc10769] text-[#7d5e01e6] text-[12px] font-semibold cursor-pointer">
													{t?.approved ? 'Approved' : 'Not approved'}
												</span>
												<Checkbox
													id={`check-${t.id}`}
													checked={checkedItems.has(
														t.id
													)}
													onClick={() =>
														setChecked((prev) => {
															const newCheckedItems =
																new Set(prev);
															if (
																newCheckedItems.has(
																	t.id
																)
															) {
																newCheckedItems.delete(
																	t.id
																); // Uncheck by removing the item from the set
															} else {
																newCheckedItems.add(
																	t.id
																); // Check by adding the item to the set
															}
															return newCheckedItems;
														})
													}
												/>
											</div>
										</div>
										<div className="w-full bg-gray-100 h-[1px]"></div>
									</>
								))}
							</>
						) : (
							<div className="flex items-center justify-center mt-[100px]">
								<div className="flex flex-col items-center">
									<h1 className="font-semibold">
										No testimonials yet.
									</h1>
									<p className="text-gray-600 text-[14px]">
										Publish your form and share it to start
										collecting testimonials from users.
									</p>
								</div>
							</div>
						)}
					</>
				)}
			</div>
			{/* {isSearchingTestimonials ? (
				<Loader />
			) : (
				<>
					{testimonials ? (
						<>asdasd</>
					) : (
						<div className="flex items-center justify-center">
							<p className="mt-10">Not found</p>
						</div>
					)}
				</>
			)} */}
		</>
	);
};

export default LandingPage;
