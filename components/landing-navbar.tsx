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
	const [isRedirecting, setIsRedirecting] = useState(false)

	const handleScroll = () => {
		setIsScrolled(window.scrollY > 0);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	

	const handleDashboardClick = async () => {
		if(!isSignedIn) {
			toast.error('You are unauthenticated!')
			return;
		}

		// prevent multiple button click
		if(isRedirecting) {
			return;
		}

		try {
			setIsRedirecting(true);
			const response = await axios.get("/api/project/get-all-user-projects");
			const projects = response?.data?.projects;
		
			if (projects.length > 0) {
				const encodedProjectName = encodeURIComponent(projects[0].name);
				router.push(`/projects/${encodedProjectName}/forms`);
			} else {
				// Try creating empty project
				const firstProject = await createFirstUserProject();
				if (firstProject?.name) {
					const encodedFirstProjectName = encodeURIComponent(firstProject.name);
					router.push(`/projects/${encodedFirstProjectName}/forms`);
				} else {
					toast.error('Could not redirect you beacause there was an error creating your first project :(')
				}
			}
			setIsRedirecting(false);
		} catch (error) {
			console.error('Failed to fetch projects', error);
			toast.error("Could not retrieve your forms");
			setIsRedirecting(false);
		}
    };

	const createFirstUserProject = async () => {
		const response = await axios.post("/api/project/create", {
			data: {
				name: 'New Project',
				description: 'Empty project',
			},
		});

		const createdWorkspace = response?.data?.result;

		if (!createdWorkspace) {
			toast.error("Could not create your first workspace");
			return null;
		} else {
			return createdWorkspace
		}
	} 

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
						<SignUpButton variant='outlined' href='/sign-in' text='Sign In'/>
						<SignUpButton variant='solid' href='/sign-up' text='Start Free Trial'/>
					</div>
				)}

				{!isWaitlist && isSignedIn && (
					<div className="hidden md:flex items-center gap-x-2">
						<Button
							variant="outline"
							className="rounded-[12px] border-[2px] border-indigo-600 bg-indigo-600 px-[15px] py-[10px] text-white text-[14px] font-[500] hover:text-indigo-600 w-[150px]"
							onClick={handleDashboardClick}
						>
							{isRedirecting ? (
								<Loader2 size={14} className="spin mx-auto" />
							) : (
								"Dashboard"
							)} 
						</Button>
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
							<Button
								variant="outline"
								className="rounded-[12px] border-[2px] border-indigo-600 bg-indigo-600 px-[15px] py-[10px] text-white text-[14px] font-[500] hover:text-indigo-600 w-[150px]"
								onClick={handleDashboardClick}
							>
								{isRedirecting ? (
									<Loader2 size={14} className="spin mx-auto" />
								) : (
									"Dashboard"
								)} 
							</Button>
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
