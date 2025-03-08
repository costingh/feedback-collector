import { useState } from "react";


interface TestimonialsFilterReturn {
	filters: any;
	setFilters: any;
}

export const useTestimonialsFilter = (): TestimonialsFilterReturn => {
	const [filters, setFilters] = useState({
		searchForKeywords: "",
		rating: 0,
		approvalStatus: "all",
		tags: [],
		forms: [],
	});

	return {
		filters,
		setFilters,
	};
};
