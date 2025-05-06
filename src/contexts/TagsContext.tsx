import { createContext, useContext } from "react";
import { useTags } from "@/hooks/useTags";

type TagsContextType = {
    tags: any[];
    groupedTags: any;
};

const TagsContext = createContext<TagsContextType>({
    tags: [],
    groupedTags: {},
});

export const useTagsContext = () => useContext(TagsContext);

export const TagsProvider = ({ workspaceId, children }: { workspaceId: string, children: React.ReactNode }) => {
    const { tags, groupedTags } = useTags(workspaceId);
    
    return (
        <TagsContext.Provider value={{ tags, groupedTags }}>
            {children}
        </TagsContext.Provider>
    );
};

export default TagsContext; 