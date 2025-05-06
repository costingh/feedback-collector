"use client";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
	const { isSignedIn } = useAuth();

	return (
		<div className="px-5 py-3 flex flex-col min-h-[100vh] animate-in fade-in items-center justify-center overflow-x-hidden bg-[#0B1624] mb-5">
			<div className="h-full items-center justify-center flex flex-col">
				<div className="flex flex-wrap gap-4 flex-col items-center justify-center">
					<div className="max-w-3xl text-center relative">
						<div className="flex flex-col items-center justify-center">
							{/* @ts-ignore */}
							<feedbackz-widget data-widget-id="3xznjqW"></feedbackz-widget>

							<Image
								src={
									"/images/made-with-feedbackz-white.png"
								}
								alt="Made with Feedbackz"
								width={200}
								height={200}
							/>
						</div>

						{/* <span className="text-[14px] text-gray-500 bg-gray-200 border-[1px] border-gray-300 px-[10px] py-[4px] rounded-full">All-In-One platform to grow your business</span> */}

						{/* <h1 className=" text-[3.5rem] text-[#111827] font-[900] leading-[60px] mb-6 mt-4">
							<span className="text-white relative">
								Collect and share
								<Image
									src="/images/hero-vector.svg"
									alt=""
									width={180}
									height={180}
									className="max-w-full absolute bottom-0 right-[-180px]"
								/>
							</span>
							<br />
							<span className="bg-gradient-to-b from-white to-[#4f46e5] bg-clip-text text-transparent">
								testimonials to boost trust and conversions.
							</span>
						</h1> */}

						<div className="relative flex max-w-[425px] flex-col items-center justify-center pb-4 text-center sm:max-w-[700px] lg:max-w-6xl lg:pb-0">
							<h1 className="text-transparent bg-clip-text text-3xl font-extrabold leading-[40px] sm:text-5xl sm:leading-[55px] lg:text-6xl lg:leading-[80px] 2xl:text-7xl">
								<span className="bg-gradient-to-b from-white from-70% to-[#b2b2b2] bg-clip-text">
									Share testimonials <br />
								</span>
								<span className="bg-gradient-to-b from-white from-30% to-[#7496F8] bg-clip-text">
									to build trust{" "}
								</span>
								<span className="bg-gradient-to-b from-white from-70% to-[#b2b2b2] bg-clip-text">
									and increase{" "}
								</span>
								<span className="bg-gradient-to-b from-white from-30% to-[#7496F8] bg-clip-text">
									conversions
								</span>
							</h1>
						</div>

						{/* <p className="text-[16px] text-white font-[300] mb-6 leading-[30px]">
							Feedbackz enables you to seamlessly collect and
							showcase client testimonials through customizable
							forms and popups. Easily embed these on your
							website, share them with customers, and create
							dynamic widgets or testimonial walls to display on
							your SaaS platform, website, or blog. Enhance
							customer satisfaction and build trust effortlessly.
						</p> */}

						<div className="max-w-3xl text-center text-lg !leading-8 text-white lg:pb-0 lg:text-xl my-[30px]">
							Collect and showcase testimonials{" "}
							<span className="underline underline-offset-[6px]">
								with customizable forms and popups.
							</span>{" "}
							Embed them on your site, share with customers, or
							display as widgets or walls.
						</div>

						{/* <Image
							src="/images/webp-optimized/hero-image.webp"
							alt=""
							width={500}
							height={500}
							className="max-w-full absolute top-[-50px] right-[-550px] object-contain"
						/> */}

						{/* <Image
							src="/images/webp-optimized/demo-image-2.webp"
							alt=""
							width={500}
							height={500}
							className="max-w-full absolute bottom-[-60px] left-[-500px] object-contain"
						/> */}

						{/* <Image
							src="/images/webp-optimized/demo-image-3.webp"
							alt=""
							width={500}
							height={500}
							className="max-w-full max-h-full absolute bottom-[-300px] left-[-300px] z-[9] object-contain"
						/> */}

						<Image
							src="/images/webp-optimized/hero-image-5.webp"
							alt=""
							width={500}
							height={500}
							className="max-w-full max-h-full absolute bottom-[-200px] left-[-500px] z-[9] object-contain"
						/>
					</div>

					<div className="relative">
						<div className="relative w-full overflow-hidden rounded-2xl p-[1px] sm:max-w-[400px] z-[99]">
							<div className="absolute inset-0 z-10 h-[1000px] animate-rotate rounded-lg bg-[conic-gradient(#6756ff_20deg,transparent_120deg)]"></div>
							<div className="relative z-20 flex w-full flex-col items-center justify-center gap-6 rounded-2xl border-4 border-black lg:flex-row lg:gap-10 lg:pt-0 overflow-hidden">
								<Link
									href="/auth/sign-up"
									className="btn-landing flex w-full max-w-full flex-col text-center font-semibold"
									data-discover="true"
								>
									<div>Start Your Free Trial Now</div>
								</Link>
							</div>
						</div>
						<Image
							src="/images/no-credit-card-white.png"
							width={160}
							height={160}
							alt="No credit card required*"
							className="absolute top-[-30px] right-[-160px] z-[99]"
						/>
					</div>

					<div className="flex flex-wrap items-center justify-center gap-2 text-green-200 hover:cursor-pointer sm:gap-0">
						<span className="text-xs md:text-sm">
							No client testimonials yet?
						</span>
						<span className="mx-2 hidden text-lg text-green-200 opacity-50 sm:flex">
							|
						</span>
						<span className="text-xs underline underline-offset-8 md:text-sm">
							Set up a form in minutes to boost trust and customer
							satisfaction.
						</span>
					</div>

					{/* <div className="flex items-center justify-center gap-4 relative">
						<Link href="/auth/sign-up" className="relative">
							<Button
								variant="outline"
								className="rounded-full border-[1px] border-indigo-600 bg-indigo-600 !py-[20px] text-white text-[14px] font-[500] hover:text-indigo-600 w-[200px]"
							>
								Get Started For Free{" "}
								<ArrowRight size={18} className="ml-2" />
							</Button>
							<Image
								src="/images/webp-optimized/no-credit-card.webp"
								width={160}
								height={160}
								alt="No credit card required*"
								className="absolute top-[-30px] right-[-160px]"
							/>
						</Link>
					</div> */}
					{/* <span className="text-gray-500 text-[12px] font-light mr-2 mt-3">
						Free 14 days trial
					</span> */}
				</div>
			</div>
		</div>
	);
};
