"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { routes } from "@/constants/sidebar-constants";
import { FreeCounter } from "./free-counter";
import SidebarUserButton from "./SidebarUserButton";

const poppins = Montserrat({ weight: "600", subsets: ["latin"] });

interface ISidebarProps {
	apiLimitCount: number;
	isPro: boolean;
}

export default function Sidebar({
	apiLimitCount = 0,
	isPro = false,
}: ISidebarProps) {
	const pathname = usePathname();

	return (
		<div className="space-y-4 py-4 flex flex-col h-full">
			<div className="px-3 py-2 flex-1">
				<div>
					{routes.map((route) => (
						<div key={route.section}>
							<div className="text-[11px] font-[600] text-gray-400 mb-3 mt-[10px]">{route.section}</div>
							{route?.routes?.map((r) => (
								<div key={r.href}>
									<Link
										key={r.href}
										href={r.href}
										className={cn(
											"text-sm group flex w-full justify-start font-[400] cursor-pointer hover:bg-gray-100 rounded-lg transition mb-[4px] px-[6px] py-[5px]",
											pathname === r.href
												? "text-gray-700 bg-gray-100"
												: "text-gray-700"
										)}
									>
										<div className="flex items-center flex-1 ">
											<r.icon
												className={cn(
													"h-5 w-5 mr-3",
													r.color
												)}
											/>
											{r.label}
										</div>
									</Link>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
			{/* <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro} /> */}
			<div className="px-3">
				<SidebarUserButton />
			</div>
		</div>
	);
}
