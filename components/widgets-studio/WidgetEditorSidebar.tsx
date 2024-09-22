"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { routes, studioSidebarButtons } from "@/constants/sidebar-constants";
import SidebarUserButton from "../SidebarUserButton";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import Portal from "../Portal";
import { Dispatch, SetStateAction, useState } from "react";

interface ISidebarProps {
	activeSubmenu: string;
	setActiveSubmenu: any;
}

export default function WidgetEditorSidebar({
	activeSubmenu,
	setActiveSubmenu
}: ISidebarProps) {
	const pathname = usePathname();

	return (
		<div className="space-y-4 py-4 flex flex-col h-full overflow-visible">
			<div className="px-2 py-2 flex-1">
				<div>
					{studioSidebarButtons.map((route, idx) => (
						<TooltipProvider key={idx}>
							<Tooltip delayDuration={0} >
								<TooltipTrigger asChild>
									<div
										className={cn(
											"flex w-full justify-center items-center cursor-pointer hover:bg-gray-100 rounded-lg transition mb-[10px] px-[5px] py-[10px]",
											activeSubmenu == route.key
												? "text-gray-700 bg-gray-100"
												: "text-gray-700"
										)}
										onClick={() => setActiveSubmenu(route.key)}
									>
										<route.icon
											className={cn(
												"h-5 w-5",
												route.color
											)}
										/>
									</div>
								</TooltipTrigger>
								<TooltipContent side="right" sideOffset={5} align="start" className=''>
									<p>{route.label}</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					))}
				</div>
			</div>
			<div className="items-center justify-center flex">
				<SidebarUserButton withoutUsername={true} />
			</div>
		</div>
	);
}
