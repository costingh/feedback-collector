"use client";

import Link from "next/link";
import { HeroSection } from "./_components/hero-section";
import LandingPageNavBar from "./_components/navbar";
import { Button } from "@/components/ui/button";
import SignUpButton from "@/components/global/buttons/SignUpButton";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import Footer from "./_components/footer";
import { CrispChat } from "./_components/crisp-chat";

const LandingPage = () => {
	return (
		<>
			<div className="max-w-full h-full">
				{/* md:max-w-[85%] lg:max-w-[80%] xl:max-w-[75%]  */}
				<LandingPageNavBar />
				<HeroSection />

				<div className=" md:max-w-[85%] lg:max-w-[80%] xl:max-w-[75%] bg-indigo-600 rounded-[40px] py-[80px] px-[100px] mx-auto">
					<div className="flex-wrap flex items-center">
						<div className="w-[80%]">
							{/* <p className="text-gray-100 text-[18px] font-black">
									Our Customers
								</p> */}
							<h1 className="text-white text-[30px] font-black">
								Boost your sales and enhance customer trust with
								authentic testimonials
							</h1>
							<span className="text-gray-300 text-[18px] text-bold">
								Leverage genuine testimonials to showcase
								customer satisfaction and build credibility,
								driving conversions and loyalty for your
								business
							</span>
						</div>
						<div className="w-[20%] flex flex-col gap-2 items-center justify-center">
							<Link href="/auth/sign-up">
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
						Empower your clients to submit testimonials without
						leaving the website
					</h1>
					<p className="text-gray-500 font-light text-[17px]">
						No extensions or registrations needed by your clients.
					</p>
					<SignUpButton
						variant="solid"
						href="/auth/sign-up"
						text="Start Free Trial"
					/>
				</div>
			</div>
			<div className="divider h-[100px]"></div>
			<div className="w-full bg-[#0B1624] py-[80px] px-[100px]">
				<div className="flex items-center justify-center flex-col gap-4">
					<h2 className="text-4xl max-w-2xl font-bold mb-4 text-white text-center">
						Unlock the full potential of Feedbackz, the ultimate
						testimonial collector, seamlessly integrated into your
						website! 🚀
					</h2>
					<Image
						src="/images/webp-optimized/demo-image-1.webp" // Converted to WebP
						alt="Demo of Feedbackz testimonial UI"
						width={1800}
						height={400}
						// priority // above the fold
						sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 65vw"
						placeholder="blur"
						blurDataURL="/images/webp-blured/demo-image-1.webp"
						className="w-full max-w-[1800px] rounded-[15px]"
					/>
					<Link href="/auth/sign-up">
						<Button
							variant="outline"
							className="rounded-[14px] border-[1px] border-white-900 bg-white px-[18px] py-[0px] text-gray-900 text-[13px] font-bold hover:text-gray-500"
						>
							Try Feedbackz for free
						</Button>
					</Link>
				</div>
			</div>
			<div className="divider h-[100px]"></div>
			<div
				id="#features"
				className="max-w-full md:max-w-[85%] lg:max-w-[80%] xl:max-w-[75%] mx-auto px-5 h-full"
			>
				<div className="flex">
					<div className="w-[50%]">
						<p className="text-indigo-600 font-bold text-[18px] mb-4">
							Seamless Testimonial Collection
						</p>
						<h1 className="text-gray-900 font-black text-[32px] mb-4 !leading-[32px] tracking-normal">
							Easily gather authentic testimonials directly from
							your website with customizable forms and popups.
						</h1>
						<span className="text-gray-500 font-normal text-[18px]">
							Say goodbye to missed opportunities and let your
							customers share their positive experiences
							effortlessly.
						</span>
						<Link href="/auth/sign-up" className="block mt-4">
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
							src="/images/webp-optimized/image-1.webp"
							alt="Feedbackz form embedded on site"
							width={400}
							height={400}
							sizes="(max-width: 768px) 100vw, 50vw"
							placeholder="blur"
							blurDataURL="/images/webp-blured/image-1.webp"
							className="mx-auto max-w-[400px]"
						/>
					</div>
				</div>

				<div className="divider h-[100px]"></div>

				<div className="flex">
					<div className="w-[50%]">
						<Image
							src="/images/webp-optimized/demo-showcase-options.webp"
							alt="Testimonial wall and widgets"
							width={400}
							height={400}
							sizes="(max-width: 768px) 100vw, 50vw"
							placeholder="blur"
							blurDataURL="/images/webp-blured/demo-showcase-options.webp"
							className="w-full max-w-[400px]"
						/>
					</div>
					<div className="w-[50%]">
						<p className="text-indigo-600 font-bold text-[18px] mb-4">
							Dynamic Showcase Options
						</p>
						<h1 className="text-gray-900 font-black text-[32px] mb-4 !leading-[32px] tracking-normal">
							Display testimonials in style with customizable
							widgets and testimonial walls.
						</h1>
						<span className="text-gray-500 font-normal text-[18px]">
							Transform your website into a trust-building
							platform that highlights real customer satisfaction
							and boosts credibility.
						</span>
						<Link href="/auth/sign-up" className="block mt-4">
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

				<div className="flex">
					<div className="w-[50%]">
						<p className="text-indigo-600 font-bold text-[18px] mb-4">
							Effortless Integration
						</p>
						<h1 className="text-gray-900 font-black text-[32px] mb-4 !leading-[32px] tracking-normal">
							Integrate Feedbackz seamlessly into your existing
							website or SaaS platform.
						</h1>
						<span className="text-gray-500 font-normal text-[18px]">
							Enjoy a hassle-free setup that allows you to start
							collecting and showcasing testimonials without any
							technical headaches.
						</span>
						<Link href="/auth/sign-up" className="block mt-4">
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
							src="/images/webp-optimized/demo-website-integration.webp"
							alt="Integrate Feedbackz with your SaaS"
							width={400}
							height={400}
							sizes="(max-width: 768px) 100vw, 50vw"
							placeholder="blur"
							blurDataURL="/images/webp-blured/demo-website-integration.webp"
							className="mx-auto w-[400px]"
						/>
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
					<Link href="/auth/sign-up">
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

				<Footer />
				<CrispChat />
			</div>
		</>
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
			fillRule="evenodd"
			d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
			clipRule="evenodd"
		></path>
	</svg>
);
