'use client'

import Image from 'next/image'
import { HeroButton } from './hero-button'

export const HeroSection = () => {
	return (
		<div className="px-5 py-3 flex flex-col min-h-[100vh] animate-in fade-in items-center justify-center overflow-x-hidden">
			<div className="h-full items-center justify-center flex flex-col">
				<div className="flex flex-wrap gap-4 flex-col items-center justify-center">
					<div className="max-w-3xl text-center relative">
						<div className="flex flex-col items-center justify-center">
							{/* @ts-ignore */}
							<feedbackz-widget data-widget-id="uOQcCM3"></feedbackz-widget>

							{/* prettier-ignore */}
							{/* @ts-ignore */}
							<feedbackz-form data-form-id="KAVTPAry" data-widget-type="chat-style-floading-widget"></feedbackz-form>

							<Image
								src={'/images/made-with-feedbackz-white.png'}
								alt="Made with Feedbackz"
								width={150}
								height={150}
								className="mt-[-25px]"
							/>
						</div>

						<div className="relative flex max-w-[425px] flex-col items-center justify-center pb-4 text-center sm:max-w-[700px] lg:max-w-6xl lg:pb-0">
							<h1 className="text-transparent bg-clip-text text-3xl font-extrabold leading-[40px] sm:text-5xl sm:leading-[55px] lg:text-6xl lg:leading-[80px] 2xl:text-7xl">
								<span className="bg-gradient-to-b from-white from-70% to-[#b2b2b2] bg-clip-text">
									Social proof that <br />
								</span>
								<span className="bg-gradient-to-b from-white from-30% to-[#7496F8] bg-clip-text">
									builds trust and drives{' '}
								</span>
								<span className="bg-gradient-to-b from-white from-30% to-[#7496F8] bg-clip-text">
									sales
								</span>
							</h1>
						</div>

						<div className="max-w-3xl text-center text-lg !leading-8 text-white lg:pb-0 lg:text-xl my-[30px]">
							Collect and showcase testimonials{' '}
							<span className="underline underline-offset-[6px]">
								with customizable forms and popups.
							</span>{' '}
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
						<HeroButton
							variant="lg"
							text="Start Your Free Trial Now"
						/>
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

					<div className="flex items-center gap-10 mt-4">
						<a
							href="https://startupfa.me/s/feedbackz.co?utm_source=feedbackz.co"
							target="_blank"
						>
							<img
								src="https://startupfa.me/badges/featured/dark-rounded.webp"
								alt="Featured on Startup Fame"
								width="171"
								height="54"
							/>
						</a>

						<a href="https://www.producthunt.com/products/feedbackz-2?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-feedbackz&#0045;2" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=973036&theme=dark&t=1748935237964" alt="Feedbackz - Social&#0032;proof&#0032;that&#0032;builds&#0032;trust&#0032;and&#0032;drives&#0032;sales | Product Hunt" style={{width: '250px', height: '54px'}} width="250" height="54" /></a>
						<a
							href="https://peerlist.io/costingh/project/feedbackzco"
							target="_blank"
						>
							<img
								src="/images/landing-page/peerlist-launch-dark-badge.svg"
								alt="Peerlist Launch Badge"
								width="171"
								height="54"
							/>
						</a>

						<a href="https://frogdr.com/feedbackz.co?utm_source=feedbackz.co" target="_blank">
							<img
								src="https://frogdr.com/feedbackz.co/badge-dark.svg?round=1"
								alt="Monitor your Domain Rating with FrogDR"
								width="250"
								height="54"
							/>
						</a>

						<a href="https://twelve.tools" target="_blank">
							<img
								src="https://twelve.tools/badge0-dark.svg"
								alt="Featured on Twelve Tools"
								width="200"
								height="54"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
