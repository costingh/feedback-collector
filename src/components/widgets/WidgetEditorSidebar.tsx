"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
// import { routes, studioSidebarButtons } from "@/constants/sidebar-constants";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dispatch, SetStateAction, useState } from "react";
import { Widget } from "@prisma/client";
import { _STUDIO_SIDEBAR_BUTTONS } from "@/constants/studio-sidebar";
import SidebarUserButton from "../global/sidebar/sidebar-user-button";

interface ISidebarProps {
	activeSubmenu: string;
	setActiveSubmenu: Dispatch<SetStateAction<string>>;
	widget: Widget
}

export default function WidgetEditorSidebar({
	activeSubmenu,
	setActiveSubmenu,
	widget
}: ISidebarProps) {
	const pathname = usePathname();

	// Helper to render sidebar button
	const renderSidebarButton = (route: any) => {
		const isActive = activeSubmenu === route.key;
		const buttonClasses = cn(
			"flex w-full justify-center items-center cursor-pointer hover:bg-gray-100 rounded-lg transition mb-2 px-1 py-2",
			isActive ? "text-gray-600 bg-gray-100" : "text-gray-600"
		);

		const ButtonContent = () => (
			<div
				className={buttonClasses}
				onClick={() => setActiveSubmenu(route.key)}
			>
				<route.icon className={cn("h-5 w-5", route.color)} />
			</div>
		);

		return <ButtonContent/>;

		// Wrap with ShareWidgetModal if applicable
		// return route.key === "share_widget" ? (
		// 	<ShareWidgetModal widgetUrl={widget?.url || ''}>
		// 		<ButtonContent/>
		// 	</ShareWidgetModal>
		// ) : (
		// 	<ButtonContent/>
		// );
	};

	return (
		<div className="space-y-4 py-4 flex flex-col h-full overflow-visible">
			<div className="px-2 py-2 flex-1">
				{_STUDIO_SIDEBAR_BUTTONS.map((route, idx) => (
					<TooltipProvider key={idx}>
						<Tooltip delayDuration={0}>
							<TooltipTrigger asChild>
								{renderSidebarButton(route)}
							</TooltipTrigger>
							<TooltipContent side="right" sideOffset={5} align="start">
								<p>{route.label}</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				))}
			</div>
			<div className="items-center justify-center flex">
				<SidebarUserButton withoutUsername={true} />
			</div>
		</div>
	);
}
