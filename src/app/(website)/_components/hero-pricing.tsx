"use client";
import Loader from "@/components/global/loader";
import { Button } from "@/components/ui/button";
import { useSubscription } from "@/hooks/useSubscription";
import { Check, Info } from "lucide-react";
import React from "react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { PLANS } from "@/constants/plans";

function HeroPricing() {
	const { onSubscribe, isProcessing } = useSubscription();

	return (
		<section
			id="pricing"
			className="container space-y-8 p-6 py-16 md:space-y-16 md:py-32"
		>
			{/* Header */}
			<div className="space-y-4 text-center md:space-y-6">
				<h2 className="text-4xl font-black leading-tight tracking-tight md:text-5xl md:leading-tight">
				Collect and share testimonials to boost trust and conversions.
				</h2>
				<p className="text-[#9e9fa2] text-[18px]">
					Start a 14 days free trial and take your
					reputation to the next level!
				</p>
			</div>

			{/* Pricing Cards */}
			<div className="mx-auto my-16 md:my-20 p-8 lg:p-12 bg-base-300 rounded-3xl flex flex-col lg:flex-row gap-8 lg:gap-12 lg:justify-between lg:mr-6 bg-[#20222c] ">
				{/* Features List */}
				<div className="space-y-6 flex-1 w-full">
					<p className="text-2xl tracking-tight font-bold">
						Empower Your Communication
					</p>
					<ul className="space-y-4 text-[#9e9fa2]">
						{[
							"Record videos effortlessly with AI tools",
							"Transcribe and summarize instantly",
							"Generate titles and descriptions automatically",
							"Share videos with chat-enabled features",
							"Streamline workflows with team collaboration",
							"Engage customers with personalized content",
							"Collaborate with your team members"
						].map((feature, index) => (
							<li key={index} className="flex gap-3 items-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									className="w-[18px] h-[18px] shrink-0 inline opacity-80"
								>
									<path
										fillRule="evenodd"
										d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
										clipRule="evenodd"
									/>
								</svg>
								<span>{feature}</span>
							</li>
						))}
					</ul>
				</div>

				{/* Pricing Options */}
				<div className="flex flex-col lg:flex-row gap-8 lg:gap-14">
					<div className="border border-base-content/10 bg-base-100 rounded-2xl lg:rounded-3xl text-center p-8 lg:p-12 -mx-4 -mb-4 lg:-my-8 bg-[#282a36] w-[350px]">
						<div className="flex flex-col gap-6 lg:gap-8 justify-center h-full">
							<p className="text-xl font-semibold">{PLANS?.[0]?.planName || 'Unknown Plan'}</p>
							<div className="flex items-baseline justify-center gap-x-2">
								<span className="text-lg tracking-tight text-gray-400/80 line-through decoration-[1.5px]">
									{PLANS?.[0]?.oldPrice || '$-'}
								</span>
								<div className="text-5xl font-bold tracking-tight">
									{PLANS?.[0]?.price || '$-'}

								</div>
								<span className="text-sm font-base leading-6 tracking-wide text-gray-400/80">
									USD
								</span>
							</div>
							<p className="text-sm text-gray-400 ">
							{PLANS?.[0]?.description || '-'}
								
							</p>

							<ul className="space-y-2 text-[#9e9fa2]">
								{PLANS?.[0]?.features?.map((feature, index) => (
									<li
										key={index}
										className="flex gap-3 items-center"
									>
										<CheckSvg/>
										<span>{feature}</span>
									</li>
								))}
							</ul>

							<div className="w-full">
								<Button
									className="text-[18px] my-[15px] p-[25px] bg-[#8000ff] hover:bg-[#8000ffda] text-white"
									onClick={() => onSubscribe('PRO')}
								>
									<Loader color="#000" state={isProcessing}>
										{PLANS?.[0]?.buttonCaption}
									</Loader>
								</Button>
							</div>
						</div>
					</div>

					<div className="border border-[#8000ff] relative lg:!py-16 lg:!-my-16 lg:!px-16 lg:!-mx-16 z-10 bg-base-100 rounded-2xl lg:rounded-3xl text-center p-8 lg:p-12 -mx-4 -mb-4 bg-[#282a36] w-[350px]">
						<div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 badge badge-accent badge-sm uppercase font-semibold bg-[#8000ff] rounded-xl px-3 text-[12px] text-[#282a36]">
							Popular
						</div>
						<div className="flex flex-col gap-6 lg:gap-8 justify-center h-full">
							<p className="text-xl font-semibold">
								{PLANS?.[1]?.planName}
							</p>
							<div className="flex items-baseline justify-center gap-x-2">
								<span className="text-lg tracking-tight text-gray-400/80 line-through decoration-[1.5px]">
									{PLANS?.[1]?.oldPrice}
								</span>
								<div className="text-5xl font-bold tracking-tight">
									{PLANS?.[1]?.price}
								</div>
								<span className="text-sm font-base leading-6 tracking-wide text-gray-400/80">
									USD
								</span>
							</div>
							<p className="text-sm text-gray-400">
								{PLANS?.[1]?.description}
							</p>
							<ul className="space-y-2 text-[#9e9fa2]">
								{PLANS?.[1]?.features?.map((feature, index) => (
									<li
										key={index}
										className="flex gap-3 items-center"
									>
										<CheckSvg/>

										{feature == "AI features" ? (
                                            <>
                                                <p>{feature}</p>
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <Info size={14} className='cursor-pointer hover:opacity-[0.4] '/>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p>
                                                                The AI features
                                                                consist in:
                                                            </p>
                                                            <ul>
                                                                <li>
                                                                    Video
                                                                    Transcription
                                                                </li>
                                                                <li>
                                                                    Title generation
                                                                </li>
                                                                <li>
                                                                    Description
                                                                    generation
                                                                </li>
                                                                <li>
                                                                    Sumarization
                                                                </li>
                                                                <li>
                                                                    Chat with video
                                                                    (search in video
                                                                    transcript)
                                                                </li>
                                                            </ul>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                                </>
                                            ) : (
											<span>{feature}</span>
										)}
									</li>
								))}
							</ul>

							<div className="w-full">
								<Button className="text-[18px] my-[15px] p-[25px] bg-[#8000ff] hover:bg-[#8000ffda] text-white">
										{PLANS?.[1]?.buttonCaption}
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroPricing;


const CheckSvg = () => {
	return <svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 20 20"
	fill="currentColor"
	className="w-[18px] h-[18px] shrink-0 inline opacity-80"
>
	<path
		fillRule="evenodd"
		d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
		clipRule="evenodd"
	/>
</svg>
}