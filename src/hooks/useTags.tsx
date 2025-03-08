import { useState, useEffect } from "react";
import { Tag } from "@/types/Tag";
import { groupTagsByCategory } from "@/lib/utils";
import { createTag, deleteTag, editTag, getUserTags } from "@/actions/tags";
import { useQuery } from "@tanstack/react-query";
import { useMutationData } from "@/hooks/useMutationData";

interface UseTagsReturn {
	tags: Tag[];
	groupedTags: Record<string, Tag[]>;
	reloadTags: () => void;
	setTags: (tags: Tag[]) => void;
	handleCreateTag: (value: Tag) => void;
	handleDeleteTag: (tagId: string) => void;
	handleEditTag: (tag: Tag) => void;
	isSearchingTags: boolean;
	creatingTag: boolean;
	deletingTag: boolean;
	editingTag: boolean;
}

export const useTags = (workspaceId?: string): UseTagsReturn => {
	const {
		data: tagsResponse,
		refetch,
		isLoading,
		isFetching,
	} = useQuery({
		queryKey: ["user-tags", workspaceId],
		queryFn: () => getUserTags(workspaceId),
		enabled: !!workspaceId,
	});

	const [tags, setTags] = useState<Tag[]>([]);

	useEffect(() => {
		if (tagsResponse?.data && Array.isArray(tagsResponse.data)) {
			setTags(tagsResponse.data as any);
		}
	}, [tagsResponse?.data]);

	const groupedTags = groupTagsByCategory(tags);

	const reloadTags = () => {
		refetch();
	};

	const { mutate: handleCreateTag, isPending: creatingTag } = useMutationData(
		["create-tag"],
		(formValue: {
			tagName: string;
			category: string;
			tagDescription: string;
			workspaceId: string;
		}) => createTag(formValue),
		["user-tags"],
		(newTagData) => {
			if (newTagData?.tag) {
				setTags((prevTags) => [...prevTags, newTagData.tag]);
			}
		}
	);

	const { mutate: handleDeleteTag, isPending: deletingTag } = useMutationData(
		["delete-tag"],
		(tagId: string) => deleteTag(tagId),
		["user-tags"],
		(response) => {
			if (response?.status == 200) {
				setTags((prevTags) => prevTags.filter((t) => t.id != response.tagId));
			}
		}
	);

	const { mutate: handleEditTag, isPending: editingTag } = useMutationData(
		["edit-tag"],
		(tag: Tag) => editTag(tag),
		["user-tags"],
		(response) => {
			if (response?.status == 200) {
					setTags((prev) =>
						prev.map((t) =>
							t.id === response.tag.id
								? response.tag
								: t
						)
				);
			}
		}
	);

	const isSearchingTags = isLoading || isFetching;

	return {
		tags,
		groupedTags,
		reloadTags,
		setTags,
		handleCreateTag,
		handleDeleteTag,
		handleEditTag,
		creatingTag,
		deletingTag,
		editingTag,
		isSearchingTags,
	};
};
