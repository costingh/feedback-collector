"use client";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader } from "@/components/loader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StarsRating from "@/components/stars-rating";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2 } from "lucide-react";

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

	return (
		<>
			<div className="px-8 py-5 relative">
				{checkedItems.size > 0 && <div className="top absolute top-0 bg-black px-6 py-2 w-[50%] left-[25%] rounded-b-[30px] flex items-center justify-center">
					<div className='flex items-center justify-center gap-2 cursor-pointer hover:opacity-60'>
						<Trash2 size={16} className="text-red-600" />
						<span className="text-gray-200 font-[400] text-[13px]">Delete</span>
					</div>
				</div>}
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
						{/* <div className="rounded-[7px] bg-gray-800 px-[16px] py-[2px] cursor-pointer hover:bg-gray-700 inline-flex items-center gap-[4px] h-[35px]">
							<FilePlus2 size={13} className="text-gray-300" />
							<div
								onClick={handleCreateNewForm}
								className="text-gray-300 text-normal text-[13px] min-w-[100px]"
							>
								{isLoading ? (
									<Loader2 className="ml-[30px] spin" />
								) : (
									"Create new form"
								)}
							</div>
						</div> */}
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
												<span className="text-gray-400 font-semibold text-[12px]">
													{timeAgo(t?.createdAt)}
												</span>

												<div className="my-3 text-[16px] text-gray-700 font-normal max-w-[700px]">
													{t?.message}
												</div>
												<StarsRating
													ratingChanged={() =>
														undefined
													}
													count={5}
												/>
											</div>

											<div className="w-[350px] flex items-center gap-4 justify-end">
												<span className="px-2 py-1 rounded-[10px] bg-[#ffc10769] text-[#7d5e01e6] text-[12px] font-semibold cursor-pointer">
													Waiting for approval
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
