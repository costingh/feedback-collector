import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";
import Waitlist from "@/components/landing-page/Waitlist";
import Head from "next/head";
import { CrispChat } from "@/components/CustomerSupport/CrispChat";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Footer from "@/components/footer";

const LandingPage = () => {
	return (
		<div className="h-full">
			<LandingNavbar />
			<div className="max-w-full xl:max-w-[65%] mx-auto">
				<LandingHero />

				<div className="w-full bg-indigo-600 rounded-[40px] py-[80px] px-[100px]">
					<div className="flex-wrap flex items-center">
						<div className="w-[80%]">
							{/* <p className="text-gray-100 text-[18px] font-black">
								Our Customers
							</p> */}
							<h1 className="text-white text-[40px] font-black">
								Back your product decisions with real user
								feedback
							</h1>
							{/* <span className="text-gray-300 text-[18px] text-bold">
								We haveve purchased or tested the majority of tools
								on the market for getting website feedback from our
								clients and Feedbucket has to be the best!
							</span> */}
						</div>
						<div className="w-[20%] flex flex-col gap-2 items-center justify-center">
							<Link href="/forms">
								<Button
									variant="outline"
									className="rounded-[14px] border-[1px] border-white-900 bg-white px-[18px] py-[0px] text-gray-900 text-[13px] font-bold hover:text-gray-500"
								>
									Try Feedbackz for free
								</Button>
							</Link>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-5 min-h-[50vh] items-center justify-center p-5">
					<p className="text-[16px] font-bold text-indigo-600">
						With Feedbackz
					</p>
					<h1 className="text-[42px] text-gray-900 font-black max-w-3xl text-center font-fredoka !leading-[42px] tracking-tight">
						Empower your clients to submit feedback without leaving
						the website
					</h1>
					<p className="text-gray-500 font-light text-[17px]">
						No extensions or registrations needed by your clients.
					</p>
					<Link href="/sign-up">
						<Button
							variant="outline"
							className="rounded-[14px] border-[1px] border-indigo-600 bg-indigo-600 px-[18px] py-[0px] text-white text-[13px] font-bold hover:bg-white hover:text-indigo-600"
						>
							Start Free Trial
						</Button>
					</Link>
				</div>

				<div className="divider h-[100px]"></div>

				<div className="flex">
					<div className="w-[50%]">
						<p className="text-indigo-600 font-bold text-[18px] mb-4">
							Feedback capture
						</p>
						<h1 className="text-gray-900 font-black text-[32px] mb-4 !leading-[32px] tracking-normal">
							Ensure all feedback comes with a screenshot,
							recording, and essential details
						</h1>
						<span className="text-gray-500 font-normal text-[18px]">
							Stop struggling with vague and unclear client
							feedback, directly pinpoint what needs changing by
							automatically capturing screenshots, recordings, and
							key details.
						</span>
						<Link href="/sign-up" className="block">
							<Button
								variant="outline"
								className="text-[15px] font-medium !text-indigo-600 cursor-pointer background-none border-none hover:border-indigo-600 border-transparent border-b border-[1px] hover:bg-transparent p-0"
							>
								<span className="hover:pr-[15px] pr-[5px] transition-all">
									Try now for free
								</span>
								<MoveRight className="text-inherit" size={13} />
							</Button>
						</Link>
					</div>
					<div className="w-[50%]">
						<Image
							src="/demo-image-1.png"
							alt=""
							width={400}
							height={400}
							className="w-full"
						/>
					</div>
				</div>

				<div className="divider h-[100px]"></div>

				<div className="flex">
					<div className="w-[50%]">
						<Image
							src="/demo-image-1.png"
							alt=""
							width={400}
							height={400}
							className="w-full"
						/>
					</div>
					<div className="w-[50%]">
						<p className="text-indigo-600 font-bold text-[18px] mb-4">
							Feedback capture
						</p>
						<h1 className="text-gray-900 font-black text-[32px] mb-4 !leading-[32px] tracking-normal">
							Ensure all feedback comes with a screenshot,
							recording, and essential details
						</h1>
						<span className="text-gray-500 font-normal text-[18px]">
							Stop struggling with vague and unclear client
							feedback, directly pinpoint what needs changing by
							automatically capturing screenshots, recordings, and
							key details.
						</span>
						<Link href="/sign-up" className="block">
							<Button
								variant="outline"
								className="text-[15px] font-medium !text-indigo-600 cursor-pointer background-none border-none hover:border-indigo-600 border-transparent border-b border-[1px] hover:bg-transparent p-0"
							>
								<span className="hover:pr-[15px] pr-[5px] transition-all">
									Try now for free
								</span>
								<MoveRight className="text-inherit" size={13} />
							</Button>
						</Link>
					</div>
				</div>

				<div className="divider h-[100px]"></div>

				<div className="w-full bg-indigo-600 rounded-[40px] py-[80px] px-[100px] flex flex-col items-center justify-center gap-5 relative overflow-hidden">
					<div className="absolute -bottom-28 -left-20 w-56 h-56 bg-opacity-25 rounded-full bg-indigo-500"></div>
					<div className="absolute -top-28 -right-24 bg-opacity-75 w-64 h-64 rounded-full bg-indigo-800"></div>
					<h1 className="text-white text-[32px] font-black text-center max-w-2xl leading-[38px]">
						Tired of unorganized client feedback? Start you free
						14-day trial now.
					</h1>
					<Link href="/forms">
						<Button
							variant="outline"
							className="rounded-[14px] border-[1px] border-white-900 bg-white px-[18px] py-[0px] text-indigo-600 text-[13px] font-bold hover:text-white hover:bg-transparent"
						>
							Start Free Trial
						</Button>
					</Link>

					<div className="md:flex md:items-center md:justify-center space-y-2 md:space-y-0 md:space-x-6 font-medium">
						<div className="flex items-center space-x-2">
							<CheckIconSvg />

							<span className="text-indigo-200 text-[14px]">
								14-day trial
							</span>
						</div>
						<div className="flex items-center space-x-2">
							<CheckIconSvg />

							<span className="text-indigo-200 text-[14px]">
								No credit card upfront
							</span>
						</div>
						<div className="flex items-center space-x-2">
							<CheckIconSvg />
							<span className="text-indigo-200 text-[14px]">
								Fast support during trial
							</span>
						</div>
					</div>
				</div>

				<div className="divider h-[100px]"></div>

				<Footer/>
			</div>

			<CrispChat />
		</div>
	);
};

export default LandingPage;

const CheckIconSvg = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		aria-hidden="true"
		className="w-6 h-6 text-indigo-400"
	>
		<path
			fill-rule="evenodd"
			d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
			clip-rule="evenodd"
		></path>
	</svg>
);
