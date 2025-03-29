"use client";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const HeroSection = () => {
	const { isSignedIn } = useAuth();

	return (
		<div className="px-5 py-3 flex flex-col min-h-[100vh] animate-in fade-in items-center justify-center overflow-x-hidden">
			<div className="h-full items-center justify-center flex flex-col">
				<div className="flex flex-wrap gap-4 flex-col items-center justify-center">
					<div className="max-w-3xl text-center relative">
						<h1 className="font-fredoka text-[4rem] text-[#111827] font-[900] leading-[60px] mb-6 line-">
							<span className="text-[#4f46e5] relative">
								Collect and share
								<Image
									src="/images/hero-vector.svg"
									alt=""
									width={180}
									height={180}
									className="max-w-full absolute bottom-0 right-[-180px]"
								/>
							</span> 
							<br/>testimonials to boost trust and conversions.
						</h1>
						<p className="text-[18px] text-gray-500 font-[300] mb-6 leading-[30px]">
							Feedbackz enables you to seamlessly collect and
							showcase client testimonials through customizable
							forms and popups. Easily embed these on your
							website, share them with customers, and create
							dynamic widgets or testimonial walls to display on
							your SaaS platform, website, or blog. Enhance
							customer satisfaction and build trust effortlessly.
						</p>

						<Image
							src="/images/hero-image.png"
							alt=""
							width={500}
							height={500}
							className="max-w-full absolute top-[-50px] right-[-550px] object-contain"
						/>

						<Image
							src="/images/demo-image-2.png"
							alt=""
							width={500}
							height={500}
							className="max-w-full absolute bottom-[-60px] left-[-500px] object-contain"
						/>

						<Image
							src="/images/demo-image-3.png"
							alt=""
							width={500}
							height={500}
							className="max-w-full max-h-full absolute bottom-[-300px] left-[-300px] z-[-2] object-contain"
						/>

						<Image
							src="/images/hero-image-5.png"
							alt=""
							width={500}
							height={500}
							className="max-w-full max-h-full absolute bottom-[-450px] right-[-400px] z-[-2] object-contain"
						/>
					</div>

					<div className="flex items-center justify-center gap-4 relative">
						<Link href="/auth/sign-up">
							<Button
								variant="outline"
								className="rounded-[17px] border-[2px] border-indigo-600 bg-indigo-600 px-[25px] !py-[22px] text-white text-[14px] font-[500] hover:text-indigo-600 w-[220px]"
							>
								Start Free Trial
							</Button>
						</Link>
						<Link href="/auth/sign-up" className="relative">
							<Button
								variant="outline"
								className="rounded-[17px] border-[2px] border-indigo-600 text-indigo-600 px-[25px] !py-[22px] text-[14px] font-[500] w-[220px]"
							>
								Sign In
							</Button>
							<Image
								src="/images/no-credit-card.png"
								width={160}
								height={160}
								alt="No credit card required*"
								className="absolute top-[-30px] right-[-160px]"
							/>
						</Link>
					</div>
					<span className="text-gray-500 text-[12px] font-light mr-2 mt-3">
						Free 14 days trial
					</span>
					<div className="flex  items-center justify-center">
						<div
							data-widget="feedbackz-widget"
							data-widget-id="MKR3po8"
						></div>
					</div>
				</div>
			</div>

			
		</div>
	);
};
