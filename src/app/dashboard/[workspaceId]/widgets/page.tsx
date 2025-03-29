'use client'

import { getUserWidgets } from "@/actions/widgets";
import { redirect } from 'next/navigation'
import Loader from "@/components/global/loader";
import { useQueryData } from "@/hooks/useQueryData";
import Widget from "@/components/popups/Widget";
import { useRouter } from "next/navigation";
import { LoadingSpinner } from "@/components/animations/loading-spinner";

type Props = {
	params: { workspaceId: string };
};

const WidgetsPage = ({ params: { workspaceId } }: Props) => {
	const router = useRouter()
	const { data: widgetsResponse, isFetching } = useQueryData(['user-widgets'], () =>
		getUserWidgets(workspaceId)
	)

    const widgets = (widgetsResponse as any)?.data || [];
	
	return (
		<>
			<div className="px-8 py-5 relative">
				<div className="mb-8 space-y-4">
					<div className="flex w-full justify-between items-start">
						<div className="flex flex-col ">
							<h2 className="text-[18px] font-bold ">
								Your Created Widgets ✨
							</h2>
							<p className="text-gray-500 font-light text-[14px]">
								These are all widgets you have created to share testimonials
							</p>
						</div>
					</div>
				</div>

				{isFetching ? (
					<div className="w-full h-full flex items-center justify-center">
						<span className="inline-block">
							<LoadingSpinner size={40} />
						</span>
					</div>
				) : (
					<>
						{widgets?.length ? (
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
								{widgets.map((t: any, index: number) => (
									<div
										key={t.id}>
										<Widget t={t} workspaceId={workspaceId}/>
									</div>
								))}
							</div>
						) : (
							<div className="flex items-center justify-center mt-[100px]">
								<div className="flex flex-col items-center">
									<h1 className="font-semibold">
										No widgets yet.
									</h1>
									<p className="text-gray-600 text-[14px]">
										Go to your &quot;Testimonials&quot; tab, and bulk share testimonials as a widget.
									</p>
								</div>
							</div>
						)}
					</>
				)}
			</div>
		</>
	);
};

export default WidgetsPage;
