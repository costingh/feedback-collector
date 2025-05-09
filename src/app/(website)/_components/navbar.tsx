"use client";

import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import Logo from "./logo";
import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const LandingPageNavBar = () => {
	const { isSignedIn } = useAuth();
	const router = useRouter();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to handle mobile menu
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrolledPast100vh = window.scrollY >= 250;
			setIsScrolled(scrolledPast100vh);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll(); // Check on mount in case the user is already scrolled

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleHashChange = (url: string) => {
		const element = document.getElementById(url);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<nav className={`fixed w-full top-0 left-0 transition-all z-[999]`}>
			<div
				className={cn(
					"max-w-full md:max-w-[85%] xl:max-w-[65%] mx-auto px-3 py-3 mt-[20px] flex items-center justify-between rounded-[20px]",
					isScrolled ? "bg-[#0B1624]" : "bg-transparent"
				)}
			>
				<Logo isTransparentBg={true} />

				{/* Hamburger Menu for Mobile */}
				<div className="lg:hidden">
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className="focus:outline-none"
					>
						{isMobileMenuOpen ? (
							<XIcon className="h-6 w-6 text-white" />
						) : (
							<MenuIcon className="h-6 w-6 text-white" />
						)}
					</button>
				</div>

				{/* Desktop Menu */}
				<div className="hidden lg:flex items-center gap-x-10">
					<Link
						href="/"
						className="text-sm text-slate-100 hover:cursor-pointer hover:text-gray-200"
					>
						Home
					</Link>
					<Link
						onClick={() => handleHashChange("#features")}
						href="#features"
						className="text-sm text-slate-100 hover:cursor-pointer hover:text-gray-200"
					>
						Features
					</Link>
					<Link href="/feedbackz-pricing">
						<div className="text-sm text-slate-100 hover:cursor-pointer hover:text-gray-200">
							Pricing
						</div>
					</Link>
					<Link href="/tos">
						<div className="text-sm text-slate-100 hover:cursor-pointer hover:text-gray-200">
							Terms of Service
						</div>
					</Link>
					<Link href="/privacy-policy">
						<div className="text-sm text-slate-100 hover:cursor-pointer hover:text-gray-200">
							Privacy Policy
						</div>
					</Link>
				</div>

				{!isSignedIn && (
					<div className="flex items-center gap-2">
						<Link href="/auth/sign-up">
							<div className="items-center justify-center gap-1 rounded-lg border border-brandLinear from-brandLinear to-blueSecondary px-4 py-3 text-center font-medium leading-snug text-white transition duration-150 ease-in-out bg-gradient-to-br shadow-2xl shadow-indigo-500 sm:px-6 sm:py-4 ">
								Sign In
							</div>
						</Link>
						<Link href="/auth/sign-up">
							<div className="items-center justify-center gap-1 rounded-lg border border-brandLinear from-brandLinear to-blueSecondary px-4 py-3 text-center font-medium leading-snug text-white transition duration-150 ease-in-out sm:px-6 sm:py-4 ">
								Start Free Trial
							</div>
						</Link>
					</div>
				)}
				{isSignedIn && (
					<div className="hidden lg:flex items-center gap-x-2">
						<Link href="/dashboard">
							<div className="hidden items-center justify-center gap-1 rounded-lg border border-brandLinear from-brandLinear to-blueSecondary px-4 py-3 text-center font-medium leading-snug text-white transition duration-150 ease-in-out hover:bg-gradient-to-br hover:shadow-2xl hover:shadow-indigo-500 sm:px-6 sm:py-4 lg:inline-flex">
								Dashboard
							</div>
						</Link>
					</div>
				)}
			</div>

			{/* Mobile Menu (Visible on small screens) */}
			{isMobileMenuOpen && (
				<div className="md:hidden flex flex-col items-center bg-[#0B1624] py-3 space-y-2 h-[100vh]">
					<Link
						href="/"
						className="text-md text-slate-100 hover:cursor-pointer hover:text-gray-200"
					>
						Home
					</Link>
					<Link
						href="#features"
						className="text-md text-slate-100 hover:cursor-pointer hover:text-gray-200"
					>
						Features
					</Link>
					<Link
						href="/feedbackz-pricing"
						className="text-md text-slate-100 hover:cursor-pointer hover:text-gray-200"
					>
						Pricing
					</Link>

					<Link
						href="/tos"
						className="text-md text-slate-100 hover:cursor-pointer hover:text-gray-200"
					>
						Terms of Service
					</Link>
					<Link
						href="/privacy-policy"
						className="text-md text-slate-100 hover:cursor-pointer hover:text-gray-200"
					>
						Privacy Policy
					</Link>

					{!isSignedIn && (
						<div className="flex flex-col items-center gap-y-2">
							<Link href="/auth/sign-up">
								<div className="items-center justify-center gap-1 rounded-lg border border-brandLinear from-brandLinear to-blueSecondary px-4 py-3 text-center font-medium leading-snug text-white transition duration-150 ease-in-out bg-gradient-to-br shadow-2xl shadow-indigo-500 sm:px-6 sm:py-4 ">
									Sign In
								</div>
							</Link>
							<Link href="/auth/sign-up">
								<div className="items-center justify-center gap-1 rounded-lg border border-brandLinear from-brandLinear to-blueSecondary px-4 py-3 text-center font-medium leading-snug text-white transition duration-150 ease-in-out sm:px-6 sm:py-4 ">
									Start Free Trial
								</div>
							</Link>
						</div>
					)}

					{isSignedIn && (
						<div className="flex flex-col items-center gap-y-2">
							<Link href="/dashboard">
								<div className="items-center justify-center gap-1 rounded-lg border border-brandLinear from-brandLinear to-blueSecondary px-4 py-3 text-center font-medium leading-snug text-white transition duration-150 ease-in-out bg-gradient-to-br shadow-2xl shadow-indigo-500 sm:px-6 sm:py-4 ">
									Dashboard
								</div>
							</Link>
						</div>
					)}
				</div>
			)}
		</nav>
	);
};

export default LandingPageNavBar;
