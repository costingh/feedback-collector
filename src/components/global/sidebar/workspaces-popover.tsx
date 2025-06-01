'use client'

import * as React from 'react'
import { Separator } from '@/components/ui/separator'
import { PlusCircle } from 'lucide-react'
import { WorkspaceProps } from '@/types/index.type'
import Modal from './../modal/index'
import Search from '../search'
import CreateWorkspace from '../create-workspace'

interface WorkspacesPopoverProps {
	anchorEl: HTMLElement | null
	onChange?: (workspaceName: string) => void
	onClose: () => void
	open?: boolean
	workspace: any
	members: any
	currentWorkspace: any
	activeWorkspaceId: any
	// isSearchingProjects: boolean;
}

export function WorkspacesPopover({
	anchorEl,
	onChange,
	onClose,
	open = false,
	workspace,
	members,
	currentWorkspace,
	activeWorkspaceId,
}: // isSearchingProjects,
WorkspacesPopoverProps) {
	if (!open) return null

	return (
		<div
			className="absolute bg-white shadow-xl rounded-lg p-2 w-[230px]"
			style={{
				top: anchorEl?.getBoundingClientRect().bottom || 0,
				left: anchorEl?.getBoundingClientRect().right || 0,
				transform: 'translateX(-100%)',
			}}
		>
			{workspace?.workspace?.map((wk: any) => (
				<div
					key={wk.id}
					className="flex items-center p-2 hover:bg-gray-100 cursor-pointer rounded-lg"
					onClick={() => {
						onChange?.(wk.id)
						onClose()
					}}
				>
					<span className="ml-3 text-gray-700 font-medium">
						{wk.name}
					</span>
				</div>
			))}

			{/* {workspace?.workspace?.length > 0 &&
				members.map(
					(wk: any, index: number) =>
						wk.WorkSpace && (
							<div
								key={workspace?.WorkSpace?.id || index}
								className="flex items-center p-2 hover:bg-gray-100 cursor-pointer rounded-lg"
								onClick={() => {
									onChange?.(wk.WorkSpace.id);
									onClose();
								}}
							>
								<span className="ml-3 text-gray-700 font-medium">
									{wk.WorkSpace.name} - invited
								</span>
							</div>
						)
				)} */}

			{/* <Separator className="w-4/5" />
			<p className="w-full text-[#9D9D9D] font-bold mt-4 ">Workspaces</p>

			{currentWorkspace?.members?.length === 0 && (
				<div className="w-full mt-[-10px]">
					<p className="text-[#707070] font-medium text-sm">
						{currentWorkspace.subscription?.plan === "FREE"
							? "Upgrade to BUSINESS plan to create workspaces"
							: "No Workspaces"}
					</p>
				</div>
			)} */}

			<Separator className="w-4/5" />

			<>
				{workspace.subscription?.plan != 'FREE' ? (
					<Modal
						trigger={
							<span className="text-sm cursor-pointer flex items-center justify-center bg-neutral-800/90  hover:bg-neutral-800/60 w-full rounded-sm p-[5px] gap-2 mb-2">
								<PlusCircle
									size={15}
									className="text-neutral-800/90 fill-neutral-500"
								/>
								<span className="text-neutral-400 text-[13px]">
									Invite To Workspace
								</span>
							</span>
						}
						title="Invite To Workspace"
						description="Invite other users to your workspace"
					>
						<Search workspaceId={activeWorkspaceId} />
					</Modal>
				) : (
					<p className="text-gray-700 text-[13px] my-2 px-2">
						Upgrade to a paid plan to invite team members
					</p>
				)}
			</>

			<CreateWorkspace />
		</div>
	)
}
