import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function DisplayWidget({ widget }: { widget: any }) {
	return (
		<div className="w-full h-full py-5">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1200px] mx-auto">
				{widget?.testimonials
					?.filter((t) => t.approved)
					?.map((t) => (
						<div key={t.id} className='bg-white border-[1px] border-gray-200 rounded-[15px] p-4'>
							<div className="flex items-center gap-2">
								<Avatar>
									<AvatarImage src={t?.avatar} />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
                                <div>
                                    <p className="text-zinc-700 text-[14px] font-[600] m-0 p-0">
                                        {t?.name}
                                    </p>
                                    <span className="text-gray-600 text-[12px] font-[400] m-0 p-0">
                                        {t?.jobTitle || t?.email}
                                    </span>
                                </div>
							</div>
                            <div className="flex items-center mt-3">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <svg
                                        key={i}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="23"
                                        height="23"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="text-gray-200 duration-200 hover:scale-110"
                                        style={
                                            t.stars >= i
                                                ? {
                                                        color: "#fbbf24",
                                                    }
                                                : {}
                                        }
                                    >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                    </svg>
                                ))}
                            </div>
							<p className="text-[#374151] mt-3 mb-4">{t.message}</p>
                            <span className="text-gray-400 text-[14px] font-[500]">{t.createdAt}</span>
						</div>
					))}
			</div>
		</div>
	);
}

export default DisplayWidget;
