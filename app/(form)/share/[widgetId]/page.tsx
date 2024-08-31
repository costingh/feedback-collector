"use client";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader } from "@/components/loader";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import StarsRating from "@/components/stars-rating";
import { Checkbox } from "@/components/ui/checkbox";
import { BadgeCheck, BadgeMinus, Eye, Loader2, MousePointerClick, Network, Percent, Tag, Trash2 } from "lucide-react";
import DisplayWidget from "@/components/widgets/DisplayWidget";

const LandingPage = ({params}: {params: {widgetId: string}}) => {
	const [isSearchingWidgets, setIsSearchingWidgets] =
		useState(true);
	const [widgets, setWidgets] = useState([]);

	const handleGetAllUserWidgets = useCallback(async () => {
		setIsSearchingWidgets(true);
		try {
			const response = await axios.get(
				"/api/widgets/get-all-user-widgets?url=" + params.widgetId
			);
			console.log(response.data.widgets);
			setWidgets(response.data.widgets);
		} catch (err) {
			toast.error("An error occurred while retrieving the widget!");
		} finally {
			setIsSearchingWidgets(false);
		}
	}, []);

	useEffect(() => {
		handleGetAllUserWidgets();
	}, []);

	const timeAgo = (date: string): string => {
		const now = new Date();
		const givenDate = new Date(date);
		const diffInSeconds = Math.floor((now.getTime() - givenDate.getTime()) / 1000);
	
		const intervals: { label: string; seconds: number }[] = [
			{ label: "year", seconds: 31536000 },
			{ label: "month", seconds: 2592000 },
			{ label: "day", seconds: 86400 },
			{ label: "hour", seconds: 3600 },
			{ label: "minute", seconds: 60 },
			{ label: "second", seconds: 1 },
		];
	
		for (const interval of intervals) {
			const count = Math.floor(diffInSeconds / interval.seconds);
			if (count >= 1) {
				return count === 1
					? `1 ${interval.label} ago`
					: `${count} ${interval.label}s ago`;
			}
		}
	
		return "just now";
	};
	
	const [checkedItems, setChecked] = useState(new Set());

	const isChecked = (id: number) => {
		return checkedItems.has(id);
	};

	const [loading, setLoading] = useState({
		action: "",
		loading: false,
	});

	const updateForm = async (action: string, approved: boolean) => {
		setLoading({ action, loading: true });
		try {
			const URL = "/api/widgets/edit";

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
					setWidgets((prevT) =>
						prevT.map((t) => {
							//@ts-ignore
							if (checkedItems.has(t.id)) return { ...t, approved };
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
			const rawResponse = await fetch("/api/widgets/delete", {
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
				toast.error("Could not delete widgets");
			} else {
				setWidgets((prevT) =>
					prevT.filter((t) => !checkedItems.has(t.id))
				);
				setChecked(new Set());
				toast.success("Widgets deleted successfully!");
			}
		} catch (err) {
			console.error(err);
			toast.error("Unexpected error");
		} finally {
			setLoading({ action: "", loading: false });
		}
	};

	return (
		<>
			<div className="px-8 py-5 relative bg-gray-100 min-h-[100vh]">

				{isSearchingWidgets ? (
					<div className="mt-10">
						<Loader />
					</div>
				) : (
					<>
						{widgets?.length && <>
							{widgets.map((t: any, index: number) => (
								<DisplayWidget key={t.id} widget={t}/>
							))}
						</>}
					</>
				)}
			</div>
		</>
	);
};

export default LandingPage;
