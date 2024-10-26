"use client";

import { Loader2, PlusSquare } from "lucide-react";
import * as React from "react";
import { CreateProjectModal } from "./CreateProjectModal";
import { Workspace } from "@/types/Workspace";

// export const workspaces: Workspace[] = [
// 	{ name: "Devias", avatar: "/assets/workspace-avatar-1.png" },
// 	{ name: "Carpatin", avatar: "/assets/workspace-avatar-2.png" },
// ];

interface WorkspacesPopoverProps {
	anchorEl: HTMLElement | null;
	onChange?: (workspaceName: string) => void;
	onClose: () => void;
	open?: boolean;
	isSearchingProjects: boolean;
	projects: Workspace[];
	refreshProjects: () => Promise<void>;
	setProjects: (projects: Workspace[]) => any;
}

export function WorkspacesPopover({
	anchorEl,
	onChange,
	onClose,
	open = false,
	isSearchingProjects,
	projects,
	refreshProjects,
	setProjects,
}: WorkspacesPopoverProps) {
	if (!open) return null;

	return (
		<div
			className="absolute bg-white shadow-xl rounded-lg p-2 w-[230px]"
			style={{
				top: anchorEl?.getBoundingClientRect().bottom || 0,
				left: anchorEl?.getBoundingClientRect().right || 0,
				transform: "translateX(-100%)",
			}}
		>
			{projects.map((workspace, index) => (
				<div
					key={workspace.name}
					className="flex items-center p-2 hover:bg-gray-100 cursor-pointer rounded-lg"
					onClick={() => {
						onChange?.(workspace.name);
						onClose();
					}}
				>
					{/* <img
						src={workspace.avatar}
						alt={`${workspace.name} avatar`}
						className="w-8 h-8 rounded-lg"
					/> */}
					<span className="ml-3 text-gray-700 font-medium">
						{workspace.name}
					</span>
				</div>
			))}
			<CreateProjectModal setProjects={setProjects} />
		</div>
	);
}
