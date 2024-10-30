"use client";

import * as React from "react";
import { ArrowDown, ChevronDown, ChevronUp } from "lucide-react";
import { usePopover } from "@/hooks/usePopover";
import { useRouter } from "next/navigation";
import { WorkspacesPopover } from "./WorkspacesPopover";
import { useProjects } from "@/hooks/useProjects";
import { useProjectContext } from "@/context/ProjectContext"; // Adjust the path as necessary

export function WorkspacesSwitch({ projectName }: { projectName: string }) {
	const popover = usePopover();
	const router = useRouter();
	const { isSearchingProjects, projects, refreshProjects, setProjects } =
		useProjects();
	const { activeProject, setActiveProject } = useProjectContext();

	// Update the active project based on the URL
	React.useEffect(() => {
		if (projects?.length) {
			setActiveProject(projects.find((proj) => proj.name == projectName));
		}
	}, [projects]);

	return (
		<React.Fragment>
			<div
				className="flex items-center border border-gray-200 rounded-xl cursor-pointer p-1.5"
				onClick={popover.handleToggle}
				ref={popover.anchorRef}
			>
				{/* <Image
					src={workspace.avatar}
					alt="Workspace Avatar"
					width={40}
					height={40}
					className="rounded-lg"
				/> */}
				<div className="flex-1 ml-2">
					<p className="text-gray-700 text-xs font-[400]">
						Workspace
					</p>
					<p className="text-gray-900 text-sm font-semibold">
						{activeProject?.name || "Select a Project"}
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
					const project = projects.find((p) => p.name == value);
					setActiveProject(project?.name);
					router.push(
						`/projects/${encodeURIComponent(project?.name || '')}/forms`,
						undefined
					);
					popover.handleClose();
				}}
				onClose={popover.handleClose}
				open={popover.open}
				projects={projects}
				setProjects={setProjects}
				isSearchingProjects={isSearchingProjects}
				refreshProjects={refreshProjects}
			/>
		</React.Fragment>
	);
}
