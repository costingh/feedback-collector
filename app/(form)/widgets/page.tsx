"use client";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader } from "@/components/loader";
import { BadgeCheck, BadgeMinus, ExternalLink, Eye, Link, Loader2, MousePointerClick, Network, Percent, Share, Tag, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { timeAgo } from "@/lib/utils";
import Widget from "@/components/popups/Widget";

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
									<div
									key={t.id}>
										<Widget handleGoToWidget={handleGoToWidget} t={t}/>
									</div>
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
