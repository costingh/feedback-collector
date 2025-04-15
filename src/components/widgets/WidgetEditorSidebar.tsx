"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Widget } from "@prisma/client";
import { _STUDIO_SIDEBAR_BUTTONS } from "@/constants/studio-sidebar";
import CustomizeWidget from "./CustomizeWidget";
interface ISidebarProps {
	widget: Widget,
	setWidget:  Dispatch<SetStateAction<Widget | null>>;
}

export default function WidgetEditorSidebar({
	widget,
	setWidget
}: ISidebarProps) {
	return (
		<div className="space-y-4 py-4 flex flex-col h-[calc(100vh-100px)] overflow-visible bg-white w-[300px]">
			<div className="px-2 py-2 flex-1">
				<CustomizeWidget widget={widget} setWidget={setWidget}/>
			</div>
		</div>
	);
}
