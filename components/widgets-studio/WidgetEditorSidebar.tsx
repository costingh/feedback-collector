"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { routes, studioSidebarButtons } from "@/constants/sidebar-constants";
import SidebarUserButton from "../SidebarUserButton";

const poppins = Montserrat({ weight: "600", subsets: ["latin"] });

interface ISidebarProps {
	apiLimitCount: number;
	isPro: boolean;
}

export default function WidgetEditorSidebar({
	apiLimitCount = 0,
	isPro = false,
}: ISidebarProps) {
	const pathname = usePathname();

	return (
		<div className="space-y-4 py-4 flex flex-col h-full">
			<div className="px-2 py-2 flex-1">
				<div>
					{studioSidebarButtons.map((route, idx) => (
							<div
							key={idx}
								className={cn(
									"flex w-full justify-center items-center cursor-pointer hover:bg-gray-100 rounded-lg transition mb-[10px] px-[5px] py-[10px]",
									pathname === route.href
										? "text-gray-700 bg-gray-100"
										: "text-gray-700"
								)}
							>
									<route.icon
										className={cn(
											"h-5 w-5",
											route.color
										)}
									/>
							</div>
					))}
				</div>
			</div>
			<div className="items-center justify-center flex">
				<SidebarUserButton withoutUsername={true} />
			</div>
		</div>
	);
}
