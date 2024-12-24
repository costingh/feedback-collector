"use client";

import { Button } from "@/components/ui/button";
import { LandingNavbar } from "@/components/landing-navbar";
import Link from "next/link";
import Faq from "@/components/landing-page/Faq";
import PricingTabs from "@/components/pricing/PricingTabs";
import ExplorePlans from "@/components/pricing/ExplorePlans";
import Footer from "@/components/footer";

export default function Pricing() {
	return (
		<>
			<div className="min-h-screen bg-white text-center py-16">
				<LandingNavbar />
				<div className="mb-[100px]"></div>
				{/* Pricing Header */}
				<h1 className="text-sm text-indigo-600 font-semibold mb-2">
					Pricing
				</h1>
				<h2 className="text-4xl font-bold mb-4">
					Start a 14-day free trial today
				</h2>
				<p className="text-lg text-gray-500 mb-8">
					Experience Feedbackz firsthand. No credit card needed to
					start.
				</p>

				<Link href="/sign-up">
					<Button
						variant="outline"
						className="rounded-[17px] border-[2px] border-indigo-600 bg-indigo-600 px-[25px] !py-[22px] text-white text-[14px] font-[500] hover:text-indigo-600 w-[220px]"
					>
						Start Free 14-days Trial
					</Button>
				</Link>

				<div className="mb-10"></div>

				<PricingTabs />

				<Faq />

				<ExplorePlans />

				<div className="mt-12 md:max-w-[85%] xl:max-w-[65%] mx-auto space-y-6 px-4 sm:px-6">
					<div className="w-full bg-indigo-600 rounded-[40px] py-[80px] px-[100px] flex flex-col items-center justify-center gap-5 relative overflow-hidden">
						<div className="absolute -bottom-28 -left-20 w-56 h-56 bg-opacity-25 rounded-full bg-indigo-500"></div>
						<div className="absolute -top-28 -right-24 bg-opacity-75 w-64 h-64 rounded-full bg-indigo-800"></div>
						<h1 className="text-white text-[32px] font-black text-center max-w-2xl leading-[38px]">
							Overwhelmed by scattered client testimonials?
						</h1>
						<span className="text-gray-300 text-[18px] text-bold">
							Start your free 14-day trial with Feedbackz today
							and effortlessly gather, showcase, and share client
							feedback. Boost trust and conversions with
							customizable forms and dynamic displays on your
							website or SaaS platform!{" "}
						</span>
						<Link href="/sign-up">
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
				</div>
			</div>
			<div className="mt-12"></div>
			<div className="max-w-full md:max-w-[85%] xl:max-w-[65%] mx-auto px-5 h-gull">
				<Footer />
			</div>
		</>
	);
}

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
