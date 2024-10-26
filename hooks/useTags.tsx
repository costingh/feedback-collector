import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Tag } from "@/types/Tag";
import { groupTagsByCategory } from "@/lib/utils";
import { useProjects } from "./useProjects";
import { useProjectContext } from "@/context/ProjectContext";

interface UseTagsReturn {
	isSearchingTags: boolean;
	tags: Tag[];
	groupedTags: Record<string, Tag[]>;
	reloadTags: () => Promise<void>;
	setTags: (tags:Tag[]) => any;
}

export const useTags = (): UseTagsReturn => {
	const [isSearchingTags, setIsSearchingTags] = useState(true);
	const [tags, setTags] = useState<Tag[]>([]);
	const [groupedTags, setGroupedTagsTags] = useState<Record<string, Tag[]>>({});

	const { isSearchingProjects, projects, refreshProjects, setProjects } = useProjects();
	const { activeProject, setActiveProject } = useProjectContext();

	const handleGetAllUserTags = useCallback(async () => {
		setIsSearchingTags(true);
		try {
			
			const response = await axios.get("/api/tag/get-all-user-tags?projectId=" + activeProject?.id);
			console.log(response?.data?.tags)
			setTags(response?.data?.tags || []);
			//@ts-ignore
			console.log(groupTagsByCategory(response?.data?.tags || []))
		} catch (err) {
			toast.error("An error occurred while retrieving your tags!");
		} finally {
			setIsSearchingTags(false);
		}
	}, []);

	useEffect(() => {
		setGroupedTagsTags(groupTagsByCategory(tags))
	}, [tags])

	const reloadTags = async () => {
		await handleGetAllUserTags();
	};

	useEffect(() => {
		handleGetAllUserTags();
	}, []);

	return {
		isSearchingTags,
		tags,
		groupedTags,
		reloadTags,
		setTags
	};
};
