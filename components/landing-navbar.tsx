"use client";

import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Logo from "./logo";
import Link from "next/link";
import { Loader2, MenuIcon, XIcon } from "lucide-react";
import SignUpButton from "./buttons/SignUpButton";
import { useProjects } from "@/hooks/useProjects";
import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const LandingNavbar = ({ isWaitlist }: { isWaitlist?: boolean }) => {
	const { isSignedIn } = useAuth();
	const router = useRouter();
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to handle mobile menu

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
			className={`fixed w-full top-0 left-0 transition-all z-50 bg-white ${
				isScrolled ? "shadow-lg" : ""
			}`}
		>
			<div className="max-w-full md:max-w-[85%] xl:max-w-[65%] mx-auto px-5 py-3 flex items-center justify-between">
				<Logo />

				{/* Hamburger Menu for Mobile */}
				<div className="md:hidden">
					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className="focus:outline-none"
					>
						{isMobileMenuOpen ? (
							<XIcon className="h-6 w-6 text-black" />
						) : (
							<MenuIcon className="h-6 w-6 text-black" />
						)}
					</button>
				</div>

				{/* Desktop Menu */}
				<div className="hidden md:flex items-center gap-x-10">
					<div className="text-sm font-medium text-black cursor-pointer transition-all hover:text-gray-500">
						Features
					</div>
					<Link href="/feedbackz-pricing">
						<div className="text-sm font-medium text-black cursor-pointer transition-all hover:text-gray-500">
							Pricing
						</div>
					</Link>
				</div>

				{/* Conditional Sign-in/Sign-up Buttons */}
				{!isWaitlist && !isSignedIn && (
					<div className="hidden md:flex items-center gap-x-4">
						<SignUpButton
							variant="outlined"
							href="/sign-in"
							text="Sign In"
						/>
						<SignUpButton
							variant="solid"
							href="/sign-up"
							text="Start Free Trial"
						/>
					</div>
				)}

				{!isWaitlist && isSignedIn && (
					<div className="hidden md:flex items-center gap-x-2">
						<Link href='/dashboard'>
							<Button
								variant="outline"
								className="rounded-[12px] border-[2px] border-indigo-600 bg-indigo-600 px-[15px] py-[10px] text-white text-[14px] font-[500] hover:text-indigo-600"
							>
								Dashboard
							</Button>
						</Link>
					</div>
				)}

				{isWaitlist && (
					<div className="hidden md:flex items-center gap-x-2">
						<Button disabled className="rounded-full">
							Try it now!
						</Button>
					</div>
				)}
			</div>

			{/* Mobile Menu (Visible on small screens) */}
			{isMobileMenuOpen && (
				<div className="md:hidden flex flex-col items-center bg-white py-3 space-y-2">
					<div className="text-sm font-medium text-black cursor-pointer transition-all hover:text-gray-500">
						Features
					</div>
					<div className="text-sm font-medium text-black cursor-pointer transition-all hover:text-gray-500">
						Pricing
					</div>

					{!isWaitlist && !isSignedIn && (
						<div className="flex flex-col items-center gap-y-2">
							<Link href="/sign-up">
								<Button className="rounded-lg border border-indigo-600 bg-indigo-600 text-white text-sm font-bold hover:text-indigo-600">
									Sign In
								</Button>
							</Link>
							<Link href="/sign-up">
								<Button className="rounded-lg border border-indigo-600 bg-indigo-600 text-white text-sm font-bold hover:text-indigo-600">
									Start Free Trial
								</Button>
							</Link>
						</div>
					)}

					{!isWaitlist && isSignedIn && (
						<div className="flex flex-col items-center gap-y-2">
						<Link href='/dashboard'>
							<Button
								variant="outline"
								className="rounded-[12px] border-[2px] border-indigo-600 bg-indigo-600 px-[15px] py-[10px] text-white text-[14px] font-[500] hover:text-indigo-600"
							>
								Dashboard
							</Button>
						</Link>

						</div>
					)}

					{isWaitlist && (
						<div className="flex items-center gap-y-2">
							<Button disabled className="rounded-full">
								Try it now!
							</Button>
						</div>
					)}
				</div>
			)}
		</nav>
	);
};
