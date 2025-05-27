import React, { useEffect, useState } from "react";
import DisplayWidget from "@/components/widgets/DisplayWidget";
import { LoadingSpinner } from "@/components/animations/loading-spinner";

type WidgetType = {
	testimonials: any[];
	_count?: {
		testimonials: number;
		[key: string]: any;
	};
	[key: string]: any;
};

const EmbeddableWidget = ({ params }: { params: { url: string } }) => {
	const [widget, setWidget] = useState<WidgetType | null>(null);
	const [page, setPage] = useState(1);
	const [isFetching, setIsFetching] = useState(false);
	const [hasMore, setHasMore] = useState(true);

	const fetchWidget = async (pageParam: number) => {
		try {
			const res = await fetch(
				`https://www.feedbackz.co/api/widgets/get/${params.url}?page=${pageParam}&limit=6`
			);
			const data = await res.json();

			const newTestimonials = data?.widget?.widget?.testimonials || [];
			const baseWidget = data?.widget?.widget || {};

			setHasMore(data?.widget?.pagination?.hasMore);

			setWidget((prev) => {
				const prevTestimonials = prev?.testimonials || [];
				return {
					...baseWidget,
					pagination: data?.widget?.pagination,
					testimonials: [...prevTestimonials, ...newTestimonials],
					_count: {
						...baseWidget._count,
						testimonials:
							prevTestimonials.length + newTestimonials.length,
					},
				};
			});
		} catch (err) {
			console.error("Failed to fetch widget:", err);
			setWidget(null);
		} finally {
			setIsFetching(false);
		}
	};

	useEffect(() => {
		fetchWidget(page);
	}, [page])

	const handlePageChange = () => {
		if (hasMore && !isFetching) {
			setPage((prev) => prev + 1);
		}
	};

	// if (loading) {
	// 	return (
	// 		<div className="w-full flex items-center justify-center">
	// 			<LoadingSpinner size={30} />
	// 		</div>
	// 	);
	// }

	if (!widget || !widget.testimonials?.length) {
		return (
			<div className="w-full min-h-screen flex items-center justify-center">
				<div className="flex flex-col items-center justify-center max-w-lg text-center">
					<h1 className="text-black font-bold text-[20px] mb-2">
						Oops, no testimonials found
					</h1>
					<p className="text-gray-700 text-[16px] mb-2">
						Make sure you have approved testimonials to display.
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className='py-6'>
			<DisplayWidget
				widget={widget}
				setPage={handlePageChange}
				isFetching={isFetching}
				paginationData={widget?.pagination ? widget?.pagination : { page, hasMore }}
			/>
		</div>
	);
};

export default EmbeddableWidget;
