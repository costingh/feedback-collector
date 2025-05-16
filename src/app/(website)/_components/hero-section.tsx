"use client";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { HeroButton } from "./hero-button";

export const HeroSection = () => {
	const { isSignedIn } = useAuth();

	return (
		<div className="px-5 py-3 flex flex-col min-h-[100vh] animate-in fade-in items-center justify-center overflow-x-hidden">
			<div className="h-full items-center justify-center flex flex-col">
				<div className="flex flex-wrap gap-4 flex-col items-center justify-center">
					<div className="max-w-3xl text-center relative">
						<div className="flex flex-col items-center justify-center">
							{/* @ts-ignore */}
							<feedbackz-widget data-widget-id="uOQcCM3"></feedbackz-widget>

							{/* @ts-ignore */}
							{/* <feedbackz-form data-form-type="inline" data-form-id="EAxV479U"></feedbackz-form> */}

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

						<div className="absolute top-[150px] right-[-350px] w-[400px] h-[400px]">
							<div className="w-[200px] h-[200px] rounded-full bg-gradient-to-br from-brandLinear to-blueSecondary opacity-30 blur-2xl absolute left-[30px] top-[30px] z-[0] shadow-2xl shadow-indigo-500"></div>
							<Image
								src="/images/webp-optimized/hero-image.webp"
								alt=""
								width={400}
								height={400}
								className="max-w-full absolute top-0 right-0 object-contain z-[2]"
							/>
						</div>


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

						<div className="absolute bottom-[0px] left-[-300px] w-[300px] h-[300px]">
							<div className="w-[200px] h-[200px] rounded-full bg-gradient-to-br from-brandLinear to-blueSecondary opacity-30 blur-xl absolute left-[30px] top-[30px] z-[0] shadow-2xl shadow-indigo-500"></div>
							<Image
								src="/images/webp-optimized/hero-image-5.webp"
								alt=""
								width={300}
								height={300}
								className="max-w-full max-h-full top-0 right-0 absolute object-contain z-[2]"
							/>
						</div>
					</div>

					<div className="relative">
						<HeroButton variant="lg" text="Start Your Free Trial Now" />
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
				</div>
			</div>
		</div>
	);
};
