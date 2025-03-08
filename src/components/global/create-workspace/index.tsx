"use client";
import { getWorkSpaces } from "@/actions/workspace";

import React from "react";
import Modal from "../modal";
import { Button } from "@/components/ui/button";
import { useQueryData } from "@/hooks/useQueryData";
import FolderPlusDuotine from "@/components/icons/folder-plus-duotone";
import WorkspaceForm from "@/components/forms/workspace-form";
import { PlusSquare } from "lucide-react";

type Props = {};

const CreateWorkspace = (props: Props) => {
	const { data } = useQueryData(["user-workspaces"], getWorkSpaces);

	const { data: plan } = data as {
		status: number;
		data: {
			subscription: {
				plan: "PRO" | "FREE" | "BUSSINESS";
			} | null;
		};
	};

	if (plan.subscription?.plan === "FREE") {
		return (
			<p className="text-gray-700 text-[13px] my-2 px-2">
				Upgrade to a paid plan to create more workspaces
			</p>
		);
	}

	if (
		plan.subscription?.plan === "BUSSINESS" ||
		plan.subscription?.plan === "PRO"
	)
		return (
			<Modal
				title="Create a Workspace"
				description=" Workspaces helps you collaborate with team members. You are assigned a default personal workspace where you can share videos in private with yourself."
				trigger={
					<div className="rounded-[7px] bg-gray-200 text-gray-500 px-[10px] py-[4px] cursor-pointer hover:bg-gray-300 flex items-center gap-[4px]">
						<PlusSquare size={14} className="text-gray-800" />
						<span className="text-[13px] font-[500] whitespace-nowrap">
							Add new workspace
						</span>
					</div>
				}
			>
				<WorkspaceForm />
			</Modal>
		);
};

export default CreateWorkspace;
