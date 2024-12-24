import { Braces, Copy, Link, MoveLeft, PlusSquare, Share2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { Form } from "@/types/Form";
import { LoadingSpinner } from "../LoadingSpinner";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import axios from "axios";
import { Workspace } from "@/types/Workspace";

export function CreateProjectModal({
	setProjects,
}: {
	setProjects?: (projects: Workspace[]) => any;
}) {
	const [step, setStep] = useState(1);

	const [formValue, setFormValue] = useState({
		workspaceName: "",
		workspaceDescription: "",
	});

	const [creatingWorkspace, setCreatingWorkspace] = useState(false);

	const handleCreateWorkspace = async () => {
		setCreatingWorkspace(true);

		if (!formValue.workspaceName) {
			toast.error("Workspace name is required");
			setCreatingWorkspace(false);
			return;
		}

		try {
			const response = await axios.post("/api/project/create", {
				data: {
					name: formValue.workspaceName,
					description: formValue.workspaceDescription,
				},
			});

			const createdWorkspace = response?.data?.result;

			if (!createdWorkspace) {
				toast.error("Workspace could not be created!");
				setCreatingWorkspace(false);
				return;
			}

			toast.success("Workspace created");

			//@ts-ignore
			setProjects && setProjects((previousWorkspaces) => [...previousWorkspaces,createdWorkspace,]);

			document.getElementById("close-dialog")?.click();
			setFormValue({
				workspaceName: "",
				workspaceDescription: "",
			});
			setStep(1);
		} catch (e) {
			console.error(e);
			// @ts-ignore
			toast.error(e?.response?.data || "Could not create workspace");
		} finally {
			setCreatingWorkspace(false);
		}
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<div className="rounded-[7px] bg-gray-200 text-gray-500 px-[10px] py-[4px] cursor-pointer hover:bg-gray-300 flex items-center gap-[4px]">
					<PlusSquare size={14} className="text-gray-800" />
					<span className="text-[13px] font-[500] whitespace-nowrap">
						Add new workspace
					</span>
				</div>
			</DialogTrigger>
			<DialogContent className="max-w-[500px]">
				<DialogHeader>
					<DialogTitle className="flex items-center gap-2">
						{step == 2 && (
							<MoveLeft
								size={16}
								onClick={() => setStep(1)}
								className="text-gray-600 cursor-pointer hover:text-gray-800"
							/>
						)}
						<h1> New Workspace</h1>
					</DialogTitle>
					{step == 1 && (
						<DialogDescription>
							Enter a suggestive workspace name to get started
						</DialogDescription>
					)}
				</DialogHeader>

				<div>
					<Label className="text-[13px] font-[500] text-gray-600">
						Workspace Name <span className="text-red-400">*</span>
					</Label>
					<Input
						className="w-full outline-none focus-visible:ring-0 focus-visible:ring-transparent mt-2"
						placeholder="Workspace Name"
						onChange={(e) =>
							setFormValue((prev) => ({
								...prev,
								workspaceName: e.target.value,
							}))
						}
						value={formValue.workspaceName}
					/>

					<div className="mt-3"></div>

					<Label className="text-[13px] font-[500] text-gray-600">
						Workspace description
					</Label>
					<textarea
						onChange={(e) =>
							setFormValue((prev) => ({
								...prev,
								workspaceDescription: e.target.value,
							}))
						}
						className="placeholder-gray-500 placeholder:font-[400] placeholder:text-[14px] p-2.5 mt-2 rounded-lg border border-gray-300 text-gray-700 min-h-[50px] text-[15px] w-full font-500 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
						placeholder="Describe this workspace so your team knows what it's for"
					></textarea>
				</div>

				<DialogFooter className="sm:justify-start">
					<div
						onClick={handleCreateWorkspace}
						className="text-center py-[10px] rounded-[8px] bg-[#000] text-[#eee] w-full cursor-pointer text-[14px] font-semibold mt-3 hover:opacity-80"
					>
						{!creatingWorkspace ? (
							"Create"
						) : (
							<div className="flex items-center justify-center">
								<LoadingSpinner />
							</div>
						)}
					</div>

					<DialogClose asChild>
						<div id="close-dialog" style={{ display: "none" }}>
							Save changes
						</div>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
