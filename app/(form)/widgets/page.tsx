"use client";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader } from "@/components/loader";
import { BadgeCheck, BadgeMinus, ExternalLink, Eye, Loader2, MousePointerClick, Network, Percent, Tag, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { timeAgo } from "@/lib/utils";

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
											<div className="top w-full h-[250px] bg-gray-100 flex items-center justify-center">
												{t.type == "basic_wall" && <Image src='/widgets/basic-wall.png' alt={t.type} width={800} height={800} className='max-w-full w-full max-h-full'/>}
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
														{t.name}
													</span>
													{t.target && <span className="px-2 py-1 rounded-[6px] bg-[#dcdcdc34] text-gray-400 text-[12px] font-normal cursor-pointer">
														{t.target}
													</span>}
													<span className="text-[12px] text-gray-400 font-[400]">Edited {timeAgo(t.updatedAt)}</span>
												</div>
												<div className="bg-[#dcdcdc34] rounded-[10px] px-3 py-[5px] flex items-center gap-2">
													<div className="flex-[0.33] flex flex-col gap-1">
														<span className="text-gray-400 text-[12px]">Views</span>
														<div className="flex items-center gap-1">
															<Eye className="text-gray-400" size={20}/> <p className='text-gray-400 text-[16px] font-semibold'>{t?.metrics?.find(m => m.actionType == 'view')?.total || 0}</p>
														</div>
													</div>
													<div className="flex-[0.33] flex flex-col gap-1">
														<span className="text-gray-400 text-[12px]">Interactions</span>
														<div className="flex items-center gap-1">
															<MousePointerClick className="text-gray-400" size={20}/> <p className='text-gray-400 text-[16px] font-semibold'>{t?.metrics?.find(m => m.actionType == 'interaction')?.total || 0}</p>
														</div>
													</div>
													<div className="flex-[0.33] flex flex-col gap-1">
														<span className="text-gray-400 text-[12px]">Bounce Rate</span>
														<div className="flex items-center gap-1">
															<Percent className="text-gray-400" size={20}/> <p className='text-gray-400 text-[16px] font-semibold'>{t?.metrics?.find(m => m.actionType == 'bounce')?.total || 0}</p>
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
