"use client";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader } from "@/components/loader";
import {
	BadgeCheck,
	BadgeMinus,
	ExternalLink,
	Eye,
	Link,
	Loader2,
	MousePointerClick,
	Network,
	Percent,
	Share,
	Tag,
	Trash2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { timeAgo } from "@/lib/utils";
import Widget from "@/components/popups/Widget";
import ShareableElement from "@/components/popups/ShareableElement";
import RollingWall from "@/components/popups/RollingWall";

const LandingPage = () => {
	const router = useRouter();

	const [isSearchingWidgets, setIsSearchingWidgets] = useState(true);

	useEffect(() => {}, []);

	return (
		<>
			<div className="px-8 py-5 relative">
				<div className="mb-8 space-y-4">
					<div className="flex w-full justify-between items-start">
						<div className="flex flex-col ">
							<h2 className="text-[18px] font-bold ">
								Testimonial Showcase Hub 🚀
							</h2>
							<p className="text-gray-500 font-light text-[14px]">
								Elevate your brand by converting customer
								testimonials into engaging, shareable social
								proof that builds trust and encourages new
								clients to take action.
							</p>
						</div>
					</div>
				</div>

				<div className="mb-8 space-y-4">
					<div className="flex w-full justify-between items-start">
						<div className="flex flex-col ">
							<h2 className="text-[18px] font-bold ">Widgets</h2>
							<p className="text-gray-500 font-light text-[14px]">
								Embed testimonials on your website without code.
							</p>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					<ShareableElement type='basic_wall'/>
					<ShareableElement type='rolling_wall'/>
					<ShareableElement type='rating_badge'/>
					<ShareableElement type='avatars'/>
					<ShareableElement type='social_star'/>
				</div>

				

				{/* {isSearchingWidgets ? (
					<div className="mt-10">
						<Loader />
					</div>
				) : (
					<>
						
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
					</>
				)} */}
			</div>
		</>
	);
};

export default LandingPage;
