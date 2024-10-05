"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Logo from "./logo";

export const LandingNavbar = ({ isWaitlist }: { isWaitlist?: boolean }) => {
	const { isSignedIn } = useAuth();
	const [isScrolled, setIsScrolled] = useState(false);

	const handleScroll = () => {
		setIsScrolled(window.scrollY > 0);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className="fixed w-full top-0 left-0 transition-all py-3 z-1000"
		>
			<div className="max-w-full xl:max-w-[65%] mx-auto px-[35px] py-[12px] flex items-center justify-between bg-[#f4f4f4] rounded-[20px] shadow-lg">
				<Logo/>
				<div className="flex items-center gap-x-10">
					<div className="text-[13px] font-[400] text-[#000] cursor-pointer transition-all hover:text-gray-500">
						Features
					</div>
					<div className="text-[13px] font-[400] text-[#000] cursor-pointer transition-all hover:text-gray-500">
						Pricing
					</div>
				</div>

				{!isWaitlist && !isSignedIn && (
					<div className="flex items-center gap-x-4">
						<Link href="/sign-up">
							<Button
								variant="outline"
								className="rounded-[14px] border-[1px] border-gray-900 bg-gray-900 px-[18px] py-[0px] text-white text-[13px] font-bold hover:text-gray-900"
							>
								Sign In
							</Button>
						</Link>
						<Link href="/sign-up">
							<Button
								variant="outline"
								className="rounded-[14px] border-[1px] border-gray-900 bg-gray-900 px-[18px] py-[0px] text-white text-[13px] font-bold hover:text-gray-900"
							>
								Start Free Trial
							</Button>
						</Link>
					</div>
				)}
				{!isWaitlist && isSignedIn && (
					<div className="flex items-center gap-x-2">
						<Link href="/forms">
							<Button
								variant="outline"
								className="rounded-[14px] border-[1px] border-gray-900 bg-gray-900 px-[18px] py-[0px] text-white text-[13px] font-bold hover:text-gray-900"
							>
								Dashboard
							</Button>
						</Link>
					</div>
				)}
				{isWaitlist && (
					<div className="flex items-center gap-x-2">
						<Button
							disabled
							variant="outline"
							className="rounded-full"
						>
							Try it now!
						</Button>
					</div>
				)}
			</div>
		</nav>
	);
};
