"use client";

import DisplayWidget from "@/components/widgets/DisplayWidget";
import { getUserWidget } from "@/actions/widgets";
import { useQueryData } from "@/hooks/useQueryData";
import { LoadingSpinner } from "@/components/animations/loading-spinner";

const LandingPage = ({ params }: { params: { url: string } }) => {
    const { data: widgetResponse, isFetching: isSearchingWidget } = useQueryData(
		["shared-widget"],
		() => getUserWidget('/' + params.url)
	);

	const widget = (widgetResponse as any)?.widget || [];

	return (
		<>
			{isSearchingWidget ? (
				<div className="w-full h-full flex items-center justify-center">
					<span className="inline-block">
						<LoadingSpinner size={30} />
					</span>
				</div>
			) : (
				<>
					{widget?.testimonials?.length > 0 && (
						<DisplayWidget widget={widget} />
					)}
					{!widget && <div>An error occured</div>}
					{/* @ts-ignore */}
					{!widget?.testimonials?.length > 0 && (
						<div className="w-full h-full flex items-center justify-center">
							<div className="flex flex-col items-center justify-center max-w-lg text-center">
								<h1 className="text-black font-700 text-[20px] mb-2">
									Oops, looks like you didnt link any
									testimonials
								</h1>
								<p className="text-gray-700 text-[16px] mb-2">
									You cant share this widget
									like this, so please select some
									testimonials to include them in the
									carousel.
								</p>
								<span className="text-gray-500 text-[14px]">
									Very important: only &quot;approved&quot;
									testimonials will appear here.
								</span>
							</div>
						</div>
					)}
				</>
			)}
		</>
	);
};

export default LandingPage;
