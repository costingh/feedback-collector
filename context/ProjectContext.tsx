'use client'

import { Workspace } from "@/types/Workspace";
import { createContext, useContext, useState } from "react";

interface ProjectContextType {
	activeProject: Workspace | null;
	setActiveProject: any;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [activeProject, setActiveProject] = useState(null);

	return (
		<ProjectContext.Provider value={{ activeProject, setActiveProject }}>
			{children}
		</ProjectContext.Provider>
	);
};

export const useProjectContext = () => {
	const context = useContext(ProjectContext);
	if (!context) {
		throw new Error(
			"useProjectContext must be used within a ProjectProvider"
		);
	}
	return context;
};
