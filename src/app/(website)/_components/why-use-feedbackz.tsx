import React from 'react'
import { GreenCheckIcon } from './icons/green-check-icon'

const XIcon = () => {
	return (
		<svg
			className="h-6 w-6 fill-red-700"
			viewBox="-3.5 0 19 19"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"></path>
		</svg>
	)
}

const beforeList = [
	'Poor conversion performance',
	'No credibility or trust signals',
	'Weak, uninspiring messaging',
	'Wasted ad spend with no ROI',
]

const afterList = [
	{ text: '3x higher conversion rates', bold: '3x' },
	{ text: 'Authentic, trust-building testimonials', bold: 'trust-building' },
	{ text: 'Persuasive, on-brand copywriting', bold: 'copywriting' },
	{ text: 'Positive ROAS from day one', bold: 'Positive ROAS' },
]

export default function WhyUseFeedbackz() {
	return (
		<section id="why-use-feedbackz">
			<div className="container-lp relative z-10 mx-auto pb-[100px]">
				<div className="mx-auto flex max-w-5xl flex-col gap-6 px-4">
					<h2 className="text-transparent mx-auto bg-clip-text text-center text-3xl font-extrabold lg:text-5xl lg:leading-[60px]">
						<span className="text-transparent bg-gradient-to-b from-white from-70% to-[#b2b2b2] bg-clip-text">
							How we{' '}
						</span>
						<span className="text-transparent bg-gradient-to-b from-white from-30% to-[#7496F8] bg-clip-text">
							transform{' '}
						</span>
						<span className="text-transparent bg-gradient-to-b from-white from-70% to-[#b2b2b2] bg-clip-text">
							a low converting page <br /> and make it a winner
						</span>
					</h2>
					<div className="mx-auto max-w-[350px] text-center text-lg text-white md:max-w-3xl lg:text-xl">
						You built the product page — now let your customers do
						the selling. With Feedbackz, collect and showcase
						powerful testimonials that build trust and boost
						conversions.
					</div>
				</div>
				<div className="relative grid grid-cols-1 gap-6 pt-10 lg:grid-cols-2 lg:gap-0">
					<div className="card-bg relative z-10 mt-auto flex w-full flex-col bg-black/30 p-6 backdrop-blur-xl before:border-r-0 lg:rounded-r-none">
						<div className="px-8 pb-6 pt-6">
							<h3 className="mb-8 text-center text-2xl font-medium text-white">
								Your current product page
							</h3>
							<div className="relative mb-10 flex flex-col gap-2 overflow-hidden rounded-lg">
								<div className="to-transparent absolute bottom-0 left-0 right-0 h-[200px] w-full bg-gradient-to-t from-[#272943]"></div>
								<img
									src="/images/landing-page/meme-image1.png"
									className="w-full rounded-xl"
									alt="Dropshipping Product Page Example"
									width="484"
									height="431"
								/>
							</div>
							<ul className="flex flex-col gap-2">
								{beforeList.map((item, idx) => (
									<li
										key={idx}
										className="flex md:items-center"
									>
										<XIcon />
										<span className="ml-3 text-base text-white md:text-lg md:text-gray-DEFAULT-400">
											{item}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div className="card-bg !absolute left-0 right-0 top-1/2 z-20 mx-auto mt-10 flex h-14 w-14 items-center justify-center rounded-full bg-bluePrimary text-xl font-bold text-white !opacity-1">
						VS
					</div>
					<div className="card-bg relative top-10 z-10 flex w-full flex-col border border-green-700 bg-black/30 p-6 backdrop-blur-xl md:top-10 md:mt-20 md:py-16 lg:mt-0">
						<div className="relative px-8 pb-6 pt-6">
							<h3 className="mb-8 text-center text-3xl font-semibold text-white">
								Using Feedbackz.co 🤑
							</h3>
							<div className="relative mb-10 overflow-hidden rounded-2xl">
								<div className="to-transparent absolute bottom-0 left-0 right-0 h-[100px] w-full bg-gradient-to-t from-[#272943] via-[#272943]/70"></div>
								{/* <video src="https://cdn.shopify.com/videos/c/o/v/a83ff33d85ce4fd49dc9f9d6faf557eb.mp4"
                                    className="rounded-2xl" loop="" autoplay="" playsinline=""
                                    title="Feedbackz.ai Product Page Demo"
                                    aria-label="How Feedbackz.ai works? Product Page Generation Demo" preload="metadata"></video> */}
								<img
									src="/images/landing-page/meme-image2.png"
									className="w-full rounded-xl"
									alt="Dropshipping Product Page Example"
									width="484"
									height="431"
								/>
							</div>
							<ul className="flex flex-col gap-2">
								{afterList.map((item, idx) => (
									<li
										key={idx}
										className="flex md:items-center"
									>
										<GreenCheckIcon />
										<span className="ml-3 text-base text-white md:text-lg">
											{item.text
												.split(item.bold)
												.map((part, i, arr) => (
													<React.Fragment key={i}>
														{part}
														{i < arr.length - 1 && (
															<strong className="font-bold">
																{item.bold}
															</strong>
														)}
													</React.Fragment>
												))}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
