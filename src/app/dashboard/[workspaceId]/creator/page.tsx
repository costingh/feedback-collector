"use client";

import ShareableElement from "@/components/popups/ShareableElement";

type Props = {
	params: { workspaceId: string };
};

const CreatorPage = ({ params: { workspaceId } }: Props) => {
	return (
		<>
			<div className="px-8 py-5 relative">
				<div className="mb-8 space-y-4">
					<div className="flex w-full justify-between items-start">
						<div className="flex flex-col ">
							<h2 className="text-[18px] font-bold ">
								Testimonial Showcase Hub 🚀
							</h2>
							<p className="text-gray-500 font-light text-[14px]">
								Elevate your brand by converting customer
								testimonials into engaging, shareable social
								proof that builds trust and encourages new
								clients to take action.
							</p>
						</div>
					</div>
				</div>

				<div className="mb-8 space-y-4">
					<div className="flex w-full justify-between items-start">
						<div className="flex flex-col ">
							<h2 className="text-[18px] font-bold ">Widgets</h2>
							<p className="text-gray-500 font-light text-[14px]">
								Embed testimonials on your website without code.
							</p>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
					<ShareableElement workspaceId={workspaceId} type='basic_wall'/>
					<ShareableElement workspaceId={workspaceId} type='rolling_wall'/>
					<ShareableElement workspaceId={workspaceId} type='rating_badge'/>
					<ShareableElement workspaceId={workspaceId} type='avatars'/>
					<ShareableElement workspaceId={workspaceId} type='social_star'/>
				</div>
			</div>
		</>
	);
};

export default CreatorPage;
