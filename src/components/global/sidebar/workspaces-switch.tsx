"use client";

import * as React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { usePopover } from "@/hooks/use-popover";
import { WorkspacesPopover } from "./workspaces-popover";

export function WorkspacesSwitch({ activeWorkspaceId, onChangeActiveWorkspace, workspace, currentWorkspace }: { activeWorkspaceId: string, onChangeActiveWorkspace: any, workspace: any, currentWorkspace: any }) {
	const popover = usePopover();

	return (
		<div className="w-full">
			<div
				className="flex items-center border border-gray-200 rounded-xl cursor-pointer p-1.5"
				onClick={popover.handleToggle}
				ref={popover.anchorRef}
			>
				<div className="flex-1 ml-2">
					<p className="text-gray-700 text-xs font-[400]">
						Workspace
					</p>
					<p className="text-gray-900 text-sm font-semibold">
						{workspace?.workspace?.find((w: any) => w.id == activeWorkspaceId)?.name || "Select a Workspace"}
					</p>
				</div>
				<div className="flex flex-col gap-[2px] items-center justify-center">
					<ChevronUp className="text-gray-400 mb-[-5px]" size={14} />
					<ChevronDown className="text-gray-400" size={14} />
				</div>
			</div>
			<WorkspacesPopover
				anchorEl={popover.anchorRef.current}
				onChange={(value) => {
					onChangeActiveWorkspace(value)
					popover.handleClose();
				}}
				onClose={popover.handleClose}
				open={popover.open}
                workspace={workspace}
                members={workspace?.members || []}
                currentWorkspace={currentWorkspace}
                activeWorkspaceId={activeWorkspaceId}
				// isSearchingProjects={isSearchingProjects}
			/>
		</div>
	);
}
