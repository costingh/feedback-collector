"use client";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader } from "@/components/loader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StarsRating from "@/components/stars-rating";
import { Checkbox } from "@/components/ui/checkbox";
import {
	ArrowDownToLine,
	BadgeCheck,
	BadgeMinus,
	Filter,
	Loader2,
	TagIcon,
	Trash2,
} from "lucide-react";
import { CreateWidgetModal } from "@/components/widgets/CreateWidgetModal";
import { TagTestimonials } from "@/components/tags/TagTestimonials";
import { Tag } from "@/types/Tag";
import DisplayTestimonialTags from "@/components/tags/DisplayTestimonialTags";
import FiterTestimonialsSidebar from "@/components/testimonials/FiterTestimonialsSidebar";
import { useTestimonialsFilter } from "@/hooks/useTestimonialsFilters";
import TestimonialsList from "@/components/testimonials/TestimonialsList";
import { useProjectContext } from "@/context/ProjectContext";
import { useProjects } from "@/hooks/useProjects";

const TestimonialsPage = ({projectName} : {projectName: string}) => {
	const [isSearchingTestimonials, setIsSearchingTestimonials] =
		useState(true);
	const [testimonials, setTestimonials] = useState([]);
	const [filteredTestimonials, setFilteredTestimonials] = useState([]);
	const [checkedItems, setChecked] = useState(new Set());
	const [tags, setTags] = useState<Tag[]>([]);
	const {filters, setFilters} = useTestimonialsFilter();
	const [loading, setLoading] = useState({
		action: "",
		loading: false,
	});
	const [showFilterSidebar, setShowFilterSidebar] = useState(true)

	const { isSearchingProjects, projects, refreshProjects, setProjects } = useProjects();
	const { activeProject, setActiveProject } = useProjectContext();
	
	useEffect(() => {
		let _filteredTestimonials = [...testimonials];
	
		if (filters.approvalStatus === "approved") {
			_filteredTestimonials = _filteredTestimonials.filter((t : any) => t.approved === true);
		} else if (filters.approvalStatus === "unapproved") {
			_filteredTestimonials = _filteredTestimonials.filter((t : any) => t.approved === false);
		}
	
		if (filters.rating !== 0) {
			_filteredTestimonials = _filteredTestimonials.filter((t : any) => t.stars === filters.rating);
		}

		if (filters.tags.length > 0) {
			_filteredTestimonials = _filteredTestimonials.filter(t =>
				// @ts-ignore
				filters.tags.some(tag => tag.formResponsesIds.includes(t.id))
			);
		}

		if (filters.forms.length > 0) {
			_filteredTestimonials = _filteredTestimonials.filter(t =>
				// @ts-ignore
				filters.forms.some(form => t.form.id == form.id)
			);
		}

		if (filters.searchForKeywords) {
			_filteredTestimonials = _filteredTestimonials.filter(testimonial =>
				// @ts-ignore
				testimonial.message.includes(filters.searchForKeywords)
			);
		}
		
		setFilteredTestimonials(_filteredTestimonials);
	
	}, [filters, testimonials]);

	useEffect(() => {
		const fetchAllData = async () => {
			try {
				setIsSearchingTestimonials(true);
				
				console.log('111111111   ', activeProject)

				const [tagsResponse, testimonialsResponse] = await Promise.all([
					axios.get("/api/tag/get-all-user-tags?projectId=" + activeProject?.id),
					axios.get("/api/testimonials/get-all-user-testimonials?projectId=" + activeProject?.id),
				]);

				console.log(testimonialsResponse?.data?.testimonials)
				setTags(tagsResponse?.data?.tags || []);
				setTestimonials(testimonialsResponse?.data?.testimonials || []);
			} catch (err) {
				toast.error("An error occurred while retrieving your data!");
			} finally {
				setIsSearchingTestimonials(false);
			}
		};

		activeProject && fetchAllData();
	}, [activeProject]);

	const isChecked = (id: number) => {
		return checkedItems.has(id);
	};


	const updateForm = async (action: string, approved: boolean) => {
		setLoading({ action, loading: true });
		try {
			const URL = "/api/testimonials/edit";

			if (!checkedItems) {
				setLoading({ action: "", loading: false });
				return;
			}
			// Convert the set to an array and iterate over the ids
			const idsArray = Array.from(checkedItems);
			for (const id of idsArray) {
				const rawResponse = await fetch(URL, {
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ data: { id, approved } }),
				});

				const response = await rawResponse.json();

				if (response?.error) {
					// toast.error(response.error);
				} else {
					//@ts-ignore
					setTestimonials((prevT) =>
						prevT.map((t) => {
							//@ts-ignore
							if (checkedItems.has(t.id))
								//@ts-ignore
								return { ...t, approved };
							//@ts-ignore
							else return { ...t };
						})
					);
					// toast.success("Response approved!");
				}
			}
		} catch (err) {
			console.error(err);
			toast.error("Unexpected error");
		} finally {
			setLoading({ action: "", loading: false });
		}
	};

	const handleDelete = async () => {
		setLoading({ action: "delete", loading: true });
		try {
			const rawResponse = await fetch("/api/testimonials/delete", {
				method: "DELETE",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ids: Array.from(checkedItems) }),
			});

			const response = await rawResponse.json();
			console.log(response);
			if (!response?.success) {
				toast.error("Could not delete testimonials");
			} else {
				setTestimonials((prevT) =>
					//@ts-ignore
					prevT.filter((t) => !checkedItems.has(t.id))
				);
				setChecked(new Set());
				toast.success("Testimonials deleted successfully!");
			}
		} catch (err) {
			console.error(err);
			toast.error("Unexpected error");
		} finally {
			setLoading({ action: "", loading: false });
		}
	};

	const handleExport = () => {
		try {
			setLoading({ action: "export", loading: true });

			// Filter only the selected testimonials
			const testimonialsToExport: any = filteredTestimonials.filter((t: any) =>
				checkedItems.has(t.id)
			);

			// Define the columns to export
			const csvHeaders = [
				"ID",
				"Name",
				"Email",
				"Stars",
				"Message",
				"Approved",
				"Created At",
				"Form Name",
			];

			// Function to escape commas, quotes, and newlines in the CSV fields
			const escapeCsvField = (field: string | null) => {
				if (field == null) return "N/A"; // Handle null/undefined
				const fieldStr = field.toString();
				if (/[,"\n]/.test(fieldStr)) {
					// Escape double quotes by doubling them
					return `"${fieldStr.replace(/"/g, '""')}"`;
				}
				return fieldStr;
			};

			// Convert the testimonials to CSV-friendly format, escaping necessary fields
			const csvRows = testimonialsToExport.map((t: any) => ({
				id: t.id,
				name: escapeCsvField(t.name || "N/A"),
				email: escapeCsvField(t.email || "N/A"),
				stars: escapeCsvField(t.stars || "N/A"),
				message: escapeCsvField(t.message || "N/A"),
				approved: t.approved ? "Yes" : "No",
				createdAt: escapeCsvField(
					new Date(t.createdAt).toLocaleDateString()
				),
				formName: escapeCsvField(t.form?.name || "N/A"),
			}));

			// Convert array of objects to CSV string
			const csvContent = [
				csvHeaders.join(","), // Add the header row
				...csvRows.map((row: any) => Object.values(row).join(",")), // Add each row of data
			].join("\n");

			// Create a Blob from the CSV string
			const blob = new Blob([csvContent], {
				type: "text/csv;charset=utf-8;",
			});

			// Create a temporary URL for the Blob
			const url = window.URL.createObjectURL(blob);

			// Create a temporary <a> element and trigger the download
			const a = document.createElement("a");
			a.href = url;
			a.download = "testimonials_export.csv"; // The file name for download
			a.style.display = "none";
			document.body.appendChild(a);
			a.click();

			// Clean up by revoking the Blob URL and removing the element
			window.URL.revokeObjectURL(url);
			document.body.removeChild(a);

			toast.success("Testimonials exported successfully!");
		} catch (err) {
			console.error("Error while exporting:", err);
			toast.error("Error while exporting");
		} finally {
			setLoading({ action: "", loading: false });
		}
	};

	return (
		<div className='flex'>
			<div className="px-8 py-5 relative w-full">
				{checkedItems.size > 0 && (
					// <div className="top absolute top-0 bg-black px-6 py-2 w-[50%] left-[25%] rounded-b-[25px] flex flex-wrap items-center justify-center gap-3">
					<div className="top absolute top-0 bg-black px-6 py-2 w-[50%] md:w-[100%] lg:w-[80%] left-[25%] md:left-0 lg:left-[10%] rounded-b-[25px] flex flex-wrap items-center justify-center gap-3">
						<div
							onClick={handleExport}
							className="flex items-center justify-center gap-2 cursor-pointer hover:opacity-60 bg-[#3c3b3b] px-[8px] py-[3px] rounded-[10px]"
						>
							<ArrowDownToLine
								size={14}
								className="text-gray-200"
							/>
							<span className="text-gray-200 font-[400] text-[13px]">
								{loading.action == "export" &&
								loading.loading ? (
									<Loader2
										size={11}
										className="spin my-[4px] mx-[4px]"
									/>
								) : (
									"Export"
								)}
							</span>
						</div>

						<TagTestimonials
							loading={loading}
							setLoading={setLoading}
							allUserTags={tags}
							testimonialsIds={Array.from(checkedItems) as string[]}
							setTags={setTags}
						/>

						<CreateWidgetModal
							loading={loading}
							//@ts-ignore
							selectedIds={Array.from(checkedItems)}
						/>

						<div
							onClick={() => updateForm("approve", true)}
							className="flex items-center justify-center gap-2 cursor-pointer hover:opacity-60 bg-[#3c3b3b] px-[8px] py-[3px] rounded-[10px]"
						>
							<BadgeCheck size={14} className="text-gray-200" />
							<span className="text-gray-200 font-[400] text-[13px]">
								{loading.action == "approve" &&
								loading.loading ? (
									<Loader2
										size={11}
										className="spin my-[4px] mx-[4px]"
									/>
								) : (
									"Approve"
								)}
							</span>
						</div>

						<div
							onClick={() => updateForm("unapprove", false)}
							className="flex items-center justify-center gap-2 cursor-pointer hover:opacity-60 bg-[#3c3b3b] px-[8px] py-[3px] rounded-[10px]"
						>
							<BadgeMinus size={14} className="text-gray-200" />
							<span className="text-gray-200 font-[400] text-[13px]">
								{loading.action == "unapprove" &&
								loading.loading ? (
									<Loader2
										size={11}
										className="spin my-[4px] mx-[4px]"
									/>
								) : (
									"Unapprove"
								)}
							</span>
						</div>
						<div
							onClick={handleDelete}
							className="flex items-center justify-center gap-2 cursor-pointer hover:opacity-60 bg-[#3c3b3b] px-[8px] py-[3px] rounded-[10px]"
						>
							<Trash2 size={14} className="text-red-600" />
							<span className="text-gray-200 font-[400] text-[13px]">
								{loading.action == "delete" &&
								loading.loading ? (
									<Loader2
										size={11}
										className="spin my-[4px] mx-[4px]"
									/>
								) : (
									"Delete"
								)}
							</span>
						</div>
					</div>
				)}
				<div className="mb-8 space-y-4">
					<div className="flex w-full justify-between items-start">
						<div className="flex flex-col ">
							<h2 className="text-[18px] font-bold ">
								Your Collected Testimonials ✨
							</h2>
							<p className="text-gray-500 font-light text-[14px]">
								These are all your testimonials put together
								from each of your forms.
							</p>
						</div>
						<div onClick={() => setShowFilterSidebar(true)} className='flex items-center gap-3 cursor-pointer px-4 py-2 transition-all hover:bg-gray-200 bg-gray-100 rounded-[6px]'>
							<span className='text-[16px] text-gray-500'>Filter</span>
							<Filter size={16} className='text-gray-500'/>
						</div>
					</div>
				</div>

				{isSearchingTestimonials ? (
					<div className="mt-10">
						<Loader />
					</div>
				) : (
					<>
						{filteredTestimonials?.length ? (
							<TestimonialsList
								testimonials={filteredTestimonials}
								tags={tags}
								isChecked={isChecked}
								setChecked={setChecked}
								checkedItems={checkedItems}
							/>
						) : (
							<div className="flex items-center justify-center mt-[100px]">
								<div className="flex flex-col items-center">
									<h1 className="font-semibold">
										No testimonials yet.
									</h1>
									<p className="text-gray-600 text-[14px]">
										Publish your form and share it to start
										collecting testimonials from users.
									</p>
								</div>
							</div>
						)}
					</>
				)}

			</div>
			{/* @ts-ignore */}
			<FiterTestimonialsSidebar testimonials={testimonials} filters={filters} setFilters={setFilters} showFilterSidebar={showFilterSidebar} setShowFilterSidebar={setShowFilterSidebar}/>
		</div>
	);
};

export default TestimonialsPage;
