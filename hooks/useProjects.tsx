import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Workspace } from "@/types/Workspace";

interface UseProjectsReturn {
	isSearchingProjects: boolean;
	projects: Workspace[];
	refreshProjects: () => Promise<void>;
	setProjects: (projects: Workspace[]) => any;
	activeProject: string;
	setActiveProject: (projectName: string) => any;
}

export const useProjects = (): UseProjectsReturn => {
	const [isSearchingProjects, setIsSearchingProjects] = useState(true);
	const [projects, setProjects] = useState<Workspace[]>([]);
	const [activeProject, setActiveProject] = useState('')

	const getProjects = useCallback(async () => {
		setIsSearchingProjects(true);
		try {
			const response = await axios.get("/api/project/get-all-user-projects");
			setProjects(response?.data?.projects || []);
		} catch (err) {
			console.error(err)
			toast.error("An error occurred while retrieving your projects!");
		} finally {
			setIsSearchingProjects(false);
		}
	}, []);

	const refreshProjects = async () => {
		await getProjects();
	};

	useEffect(() => {
		getProjects();
	}, []);

	return {
		isSearchingProjects,
		projects,
		refreshProjects,
		setProjects,
		activeProject,
		setActiveProject
	};
};
