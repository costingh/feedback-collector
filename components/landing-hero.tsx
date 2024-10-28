"use client";

import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const LandingHero = () => {
	const { isSignedIn } = useAuth();

	return (
		<div className="flex flex-col min-h-[90vh] animate-in fade-in items-center justify-center">
			<div className="h-full items-center justify-center flex flex-col">
				<div className="flex flex-wrap gap-4 xs:flex-col xl:flex-row">
					<div className="flex-1 max-w-[50%]">
						<h1 className='font-fredoka text-[3rem] text-[#111827] font-black leading-[48px] mb-6'>
							Collect and share testimonials to boost trust and conversions.
						</h1>
						<p className='text-[18px] text-gray-500 font-[300] mb-6 leading-[30px]'>
						Feedbackz enables you to seamlessly collect and showcase client testimonials through customizable forms and popups. Easily embed these on your website, share them with customers, and create dynamic widgets or testimonial walls to display on your SaaS platform, website, or blog. Enhance customer satisfaction and build trust effortlessly.
						</p>
						<div className="flex items-center gap-4 relative">
							<Link href="/sign-up">
								<Button variant="outline" className="rounded-[17px] border-[2px] border-indigo-600 bg-indigo-600 px-[25px] !py-[22px] text-white text-[14px] font-[500] hover:text-indigo-600 w-[220px]">
									Start Free Trial
								</Button>
							</Link>
							<Link href="/sign-up" className="relative">
								<Button variant="outline" className="rounded-[17px] border-[2px] border-indigo-600 text-indigo-600 px-[25px] !py-[22px] text-[14px] font-[500] w-[220px]">
									Sign In
								</Button>
								<Image
									src='/no-credit-card.png'
									width={160}
									height={160}
									alt='No credit card required*'
									className="absolute top-[-30px] right-[-160px]"
								/>
							</Link>
						</div>
						<span className="text-gray-500 text-[12px] font-light mr-2 mt-3">Free 14 days trial</span>
					</div>
					<div className="flex-1 flex items-center justify-center">
						<Image
							src='/hero-image.png'
							alt=''
							width={450}
							height={450}
							className='max-w-full max-h-full'
					/>
					</div>
				</div>
			</div>
			
			{/* <div className="grow flex flex-col items-center justify-evenly">
				<section className="space-y-6 pt-10 pb-6">
					<div className="container flex flex-col items-center gap-8 text-center">
						<div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-sm text-white">
							🔥 Production-ready web apps
						</div>
						<h1 className="font-black text-3xl lg:text-6xl tracking-tight md:-mb-4 flex flex-col items-center">
							<span className="relative z-10 text-white">
								Your Collected Testimonials  Collect
								<br />
								<span className="text-5xl lg:text-7xl inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 dark:from-green-500 dark:to-blue-400">
									User Testimonials
								</span>
							</span>
							<span className="whitespace-nowrap relative">
								<span className="mr-3 sm:mr-4 md:mr-5 text-white">
									in
								</span>
								<span className="relative whitespace-nowrap">
									<span className="absolute bg-gray-700 bg-opacity-50 -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1 z-0"></span>
									<span className="relative text-white">
										minutes
									</span>
								</span>
							</span>
						</h1>
						<p className="max-w-2xl leading-normal text-muted-foreground text-xl pt-6 sm:leading-8">
							<span>
								NextJS app to save you endless hours of
								development time,
								<br />
								Focus on launching web apps faster
							</span>
							<span className="whitespace-nowrap">
								<span className="inline relative">
									<svg
										width="150"
										className="absolute inset-x-0 -bottom-1.5 translate-y-full fill-green-600"
										viewBox="0 0 666 42"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M220.475 4.24483C147.138 3.4005 73.5014 6.48612 2.51671 19.4427C1.25022 19.6729 0.724462 20.1258 0.62084 20.2294C0.0144608 20.8435 -0.0508949 21.4959 0.0258619 22.0332C0.071916 22.3594 0.382916 23.7372 2.08308 23.8792C3.25746 23.9751 11.5931 23.3035 14.8092 23.1308C29.9495 22.321 45.0593 21.1659 60.1612 19.8303C94.4024 16.8138 128.597 14.204 162.892 11.8284C182.147 10.4928 201.409 9.3875 220.66 8.48177C266.971 9.02291 313.167 11.1338 358.5 13.3136C340.481 14.4228 323.925 15.5473 310.197 16.2765C287.047 17.5046 263.939 18.9552 240.835 20.8665C228.965 21.8451 217.11 22.9083 205.262 24.1632C203.95 24.3052 200.96 24.4511 199.513 24.6238C198.899 24.6928 198.454 24.8042 198.254 24.8809C197.003 25.3645 196.846 26.3546 196.831 26.8535C196.823 27.1567 196.926 28.8108 199.037 29.1332C297.182 44.262 399.576 26.6617 498.074 41.3683C499.229 41.541 500.312 40.7427 500.484 39.5837C500.657 38.4285 499.859 37.3462 498.7 37.1735C405.932 23.3227 309.705 38.133 216.818 27.2604C224.935 26.4736 233.056 25.7636 241.184 25.092C264.246 23.1846 287.311 21.7377 310.423 20.5096C333.68 19.2777 365.12 16.8713 398.029 15.3554C426.272 16.9289 454.499 18.6943 482.746 20.191C494.662 20.8204 506.583 21.3424 518.495 21.9833C523.393 22.2443 535.992 23.3381 537.819 22.9313C539.239 22.6127 539.58 21.5957 539.665 21.0853C539.753 20.5326 539.699 19.8456 539.055 19.1894C538.855 18.9821 538.257 18.5523 537.028 18.1992C503.812 8.6852 449.422 8.83487 398.482 11.1337C387.525 10.5197 376.568 9.93633 365.607 9.41055C340.516 8.20163 315.147 6.98885 289.633 6.03323C361.535 4.25631 433.472 4.76676 505.427 6.05243C535.639 6.59357 617.074 9.85575 649.147 12.738C648.756 13.1409 648.525 13.7013 648.552 14.3115C648.606 15.4782 649.6 16.3839 650.77 16.3302C657.387 16.0232 661.213 15.6317 662.729 15.2287C663.673 14.9793 664.188 14.5801 664.425 14.3192C665.009 13.6898 665.116 13.0143 665.001 12.3733C664.928 11.9742 664.748 11.5367 664.333 11.1337C664.057 10.8574 663.382 10.4353 662.23 10.1474C649.623 7.01191 541.476 2.45636 505.504 1.8116C410.445 0.115274 315.424 -0.230098 220.475 4.24483ZM511.315 17.3625C492.74 14.8411 470.964 13.9545 448.248 14.0121C459.819 14.6837 471.394 15.34 482.972 15.9541C492.417 16.4568 501.866 16.8867 511.315 17.3625ZM132.865 9.72143C108.495 11.5175 84.1514 13.4595 59.7888 15.6087C56.9757 15.8543 54.1664 16.0961 51.3532 16.334C78.2949 13.0335 105.517 10.9342 132.865 9.72143Z"
										></path>
									</svg>
									and start earning.
								</span>
							</span>
						</p>
						<div className="space-x-4 my-4">
							<a href="/auth">
								<button className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-12 rounded-md px-8 text-lg bg-transparent text-white">
									<span className="pr-1 font-[700]">🚀</span>
									Demo
								</button>
							</a>
							<a href="#pricing">
								<button className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-green-500 to-[#178389] dark:text-white hover:from-green-400 hover:to-[#178389] h-12 rounded-md px-8 text-lg">
									<span className="pr-1 font-[700]">⚡️</span>
									Get access
								</button>
							</a>
						</div>
						<div className="text-muted-foreground align-middle justify-center text-center">
							<div className="z-10 flex -space-x-4 rtl:space-x-reverse">
								<img
									alt="Avatar 1"
									loading="lazy"
									width="40"
									height="40"
									decoding="async"
									data-nimg="1"
									className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
								/>
								<img
									alt="Avatar 2"
									loading="lazy"
									width="40"
									height="40"
									decoding="async"
									data-nimg="1"
									className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
								/>
								<img
									alt="Avatar 3"
									loading="lazy"
									width="40"
									height="40"
									decoding="async"
									data-nimg="1"
									className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
									src="/_next/image?url=%2Fmedia%2Fmantas.webp&amp;w=96&amp;q=75"
								/>
								<img
									alt="Avatar 4"
									loading="lazy"
									width="40"
									height="40"
									decoding="async"
									data-nimg="1"
									className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
								/>
								<img
									alt="Avatar 5"
									loading="lazy"
									width="40"
									height="40"
									decoding="async"
									data-nimg="1"
									className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
									src="/_next/image?url=%2Fmedia%2Fdominik.webp&amp;w=96&amp;q=75"
								/>
							</div>
							<p className="text-center pt-2">30 happy makers</p>
							<div className="relative inline-flex text-yellow-400">
								<svg
									width="20"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
										clip-rule="evenodd"
									></path>
								</svg>
								<svg
									width="20"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
										clip-rule="evenodd"
									></path>
								</svg>
								<svg
									width="20"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
										clip-rule="evenodd"
									></path>
								</svg>
								<svg
									width="20"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
										clip-rule="evenodd"
									></path>
								</svg>
								<svg
									width="20"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
										clip-rule="evenodd"
									></path>
								</svg>
							</div>
						</div>
					</div>
				</section>

				<div className="py-20" id="pricing">
					<section className="text-center">
						<h2 className="text-sm md:text-xl font-bold text-gray-400">
							Pricing
						</h2>
						<p className="text-2xl md:text-4xl font-bold mt-4 bg-gradient-to-b from-white/60 to-gray-200 text-transparent bg-clip-text font-[900]">
							Skip the tedious work.
							<br />
							Create unlimited projects!
						</p>
						<br />
						<div>
							<p className="pb-2 text-white">
								No vendor lock-in. Own the source code.
							</p>
							<div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-green-600 text-sm">
								$200 off
							</div>
							<span className="text-white ml-3">
								for the first 100 customers
							</span>
						</div>
						<div>
							<div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 text-xs animate-pulse">
								70 left
							</div>
						</div>
					</section>
					<section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-20">
						<div className="rounded-lg border bg-card text-card-foreground shadow-sm relative w-72 md:w-96 flex flex-col justify-between py-1 mx-auto sm:mx-0 overflow-hidden bg-transparent">
							<div>
								<div className="flex flex-col space-y-1.5 p-6 pb-8 pt-4">
									<h3 className="font-semibold tracking-tight text-zinc-700 dark:text-zinc-300 text-lg">
										STARTER
									</h3>
									<div className="flex gap-0.5">
										<p className="text-sm line-through text-gray-400">
											$299
										</p>
										<h3 className="text-5xl font-bold">
											$99
										</h3>
										<b>USD</b>
										<span className="flex flex-col justify-end text-sm mb-1"></span>
									</div>
								</div>
								<div className="p-6 pt-0 flex flex-col gap-2">
									<div className="flex gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-circle-check text-green-400"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
											></circle>
											<path d="m9 12 2 2 4-4"></path>
										</svg>
										<p className="pt-0.5 text-sm text-zinc-400  ">
											NextJS boilerplate
										</p>
									</div>
									<div className="flex gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-circle-check text-green-400"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
											></circle>
											<path d="m9 12 2 2 4-4"></path>
										</svg>
										<p className="pt-0.5 text-sm text-zinc-400  ">
											Authentication
										</p>
									</div>
									<div className="flex gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-circle-check text-green-400"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
											></circle>
											<path d="m9 12 2 2 4-4"></path>
										</svg>
										<p className="pt-0.5 text-sm text-zinc-400  ">
											Landing page
										</p>
									</div>
									<div className="flex gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-circle-check text-green-400"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
											></circle>
											<path d="m9 12 2 2 4-4"></path>
										</svg>
										<p className="pt-0.5 text-sm text-zinc-400  ">
											Emails
										</p>
									</div>
									<div className="flex gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-circle-check text-green-400"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
											></circle>
											<path d="m9 12 2 2 4-4"></path>
										</svg>
										<p className="pt-0.5 text-sm text-zinc-400  ">
											Payments
										</p>
									</div>
									<div className="flex gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-circle-check text-green-400"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
											></circle>
											<path d="m9 12 2 2 4-4"></path>
										</svg>
										<p className="pt-0.5 text-sm text-zinc-400  ">
											Database
										</p>
									</div>
									<div className="flex gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-circle-check text-green-400"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
											></circle>
											<path d="m9 12 2 2 4-4"></path>
										</svg>
										<p className="pt-0.5 text-sm text-zinc-400  ">
											API integration
										</p>
									</div>
									<div className="flex gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-circle-check text-green-400"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
											></circle>
											<path d="m9 12 2 2 4-4"></path>
										</svg>
										<p className="pt-0.5 text-sm text-zinc-400  ">
											AI integration
										</p>
									</div>
									<div className="flex gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-circle-check text-green-400"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
											></circle>
											<path d="m9 12 2 2 4-4"></path>
										</svg>
										<p className="pt-0.5 text-sm text-zinc-400  ">
											Blog optimised for SEO
										</p>
									</div>
									<div className="flex gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-circle-check text-green-400"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
											></circle>
											<path d="m9 12 2 2 4-4"></path>
										</svg>
										<p className="pt-0.5 text-sm text-zinc-400  ">
											Analytics
										</p>
									</div>
									<div className="flex gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-circle-check text-green-400"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
											></circle>
											<path d="m9 12 2 2 4-4"></path>
										</svg>
										<p className="pt-0.5 text-sm text-zinc-400  ">
											Documentation UI
										</p>
									</div>
									<div className="flex gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-circle-check text-green-400"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
											></circle>
											<path d="m9 12 2 2 4-4"></path>
										</svg>
										<p className="pt-0.5 text-sm text-zinc-400  ">
											50+ components
										</p>
									</div>
									<div className="flex gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-circle-check text-green-400"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
											></circle>
											<path d="m9 12 2 2 4-4"></path>
										</svg>
										<p className="pt-0.5 text-sm text-zinc-400  ">
											Saves you 40+ hours
										</p>
									</div>
									<div className="flex gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-circle-check text-green-400"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
											></circle>
											<path d="m9 12 2 2 4-4"></path>
										</svg>
										<p className="pt-0.5 text-sm text-zinc-400  ">
											Lifetime updates
										</p>
									</div>
									<div className="flex gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-circle-x text-gray-700"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
											></circle>
											<path d="m15 9-6 6"></path>
											<path d="m9 9 6 6"></path>
										</svg>
										<p className="pt-0.5 text-sm text-gray-700 ">
											Bonus: Chrome extension (Youtube
											Summarizer)
										</p>
									</div>
								</div>
							</div>
							<div className="flex items-center p-6 pt-0 mt-2">
								<button className="bg-primary text-primary-foreground hover:bg-primary/90 py-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-green-500 to-[#178389] dark:text-white hover:from-green-400 hover:to-[#178389] h-12 px-8 text-lg relative inline-flex w-full items-center font-medium justify-center rounded-md">
									<span className="pr-1">⚡️</span>Get access
								</button>
							</div>
							<p className="text-sm text-zinc-400 text-center pb-2">
								Pay once. Use forever.
							</p>
						</div>
						<div className="rounded-lg border text-card-foreground shadow-sm relative w-72 md:w-96 flex flex-col justify-between py-1 mx-auto sm:mx-0 overflow-hidden animate-background-shine dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors">
							<div className="pointer-events-none absolute inset-[0] rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]"></div>
							<div>
								<div className="flex flex-col space-y-1.5 p-6 pb-8 pt-4">
									<div className="flex justify-between">
										<h3 className="font-semibold tracking-tight text-zinc-700 dark:text-zinc-300 text-lg">
											PRO
										</h3>
										<div className="px-2.5 rounded-xl h-fit text-xs py-1 bg-zinc-200 text-white dark:bg-zinc-800 bg-gradient-to-r from-green-500 to-[#178389] dark:text-white">
											Most popular
										</div>
									</div>
									<div className="flex gap-0.5">
										<p className="text-sm line-through text-gray-400">
											$349
										</p>
										<h3 className="text-5xl font-bold">
											$149
										</h3>
										<b>USD</b>
										<span className="flex flex-col justify-end text-sm mb-1"></span>
									</div>
								</div>
								<div className="p-6 pt-0 flex flex-col gap-2">
									<div className="flex gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-circle-check text-green-400"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
											></circle>
											<path d="m9 12 2 2 4-4"></path>
										</svg>
										<p className="pt-0.5 text-sm text-zinc-400  ">
											NextJS boilerplate
										</p>
									</div>
									<div className="flex gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-circle-check text-green-400"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
											></circle>
											<path d="m9 12 2 2 4-4"></path>
										</svg>
										<p className="pt-0.5 text-sm text-zinc-400  ">
											Authentication
										</p>
									</div>
									<div className="flex gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-circle-check text-green-400"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
											></circle>
											<path d="m9 12 2 2 4-4"></path>
										</svg>
										<p className="pt-0.5 text-sm text-zinc-400  ">
											Landing page
										</p>
									</div>
									<div className="flex gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-circle-check text-green-400"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
											></circle>
											<path d="m9 12 2 2 4-4"></path>
										</svg>
										<p className="pt-0.5 text-sm text-zinc-400  ">
											Emails
										</p>
									</div>
									<div className="flex gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-circle-check text-green-400"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
											></circle>
											<path d="m9 12 2 2 4-4"></path>
										</svg>
										<p className="pt-0.5 text-sm text-zinc-400  ">
											Payments
										</p>
									</div>
									<div className="flex gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-circle-check text-green-400"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
											></circle>
											<path d="m9 12 2 2 4-4"></path>
										</svg>
										<p className="pt-0.5 text-sm text-zinc-400  ">
											Database
										</p>
									</div>
									<div className="flex gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-circle-check text-green-400"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
											></circle>
											<path d="m9 12 2 2 4-4"></path>
										</svg>
										<p className="pt-0.5 text-sm text-zinc-400  ">
											API integration
										</p>
									</div>
									<div className="flex gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-circle-check text-green-400"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
											></circle>
											<path d="m9 12 2 2 4-4"></path>
										</svg>
										<p className="pt-0.5 text-sm text-zinc-400  ">
											AI integration
										</p>
									</div>
									<div className="flex gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-circle-check text-green-400"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
											></circle>
											<path d="m9 12 2 2 4-4"></path>
										</svg>
										<p className="pt-0.5 text-sm text-zinc-400  ">
											Blog optimised for SEO
										</p>
									</div>
									<div className="flex gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-circle-check text-green-400"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
											></circle>
											<path d="m9 12 2 2 4-4"></path>
										</svg>
										<p className="pt-0.5 text-sm text-zinc-400  ">
											Analytics
										</p>
									</div>
									<div className="flex gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-circle-check text-green-400"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
											></circle>
											<path d="m9 12 2 2 4-4"></path>
										</svg>
										<p className="pt-0.5 text-sm text-zinc-400  ">
											Documentation UI
										</p>
									</div>
									<div className="flex gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-circle-check text-green-400"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
											></circle>
											<path d="m9 12 2 2 4-4"></path>
										</svg>
										<p className="pt-0.5 text-sm text-zinc-400  ">
											50+ components
										</p>
									</div>
									<div className="flex gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-circle-check text-green-400"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
											></circle>
											<path d="m9 12 2 2 4-4"></path>
										</svg>
										<p className="pt-0.5 text-sm text-zinc-400  ">
											Saves you 40+ hours
										</p>
									</div>
									<div className="flex gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-circle-check text-green-400"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
											></circle>
											<path d="m9 12 2 2 4-4"></path>
										</svg>
										<p className="pt-0.5 text-sm text-zinc-400  ">
											Lifetime updates
										</p>
									</div>
									<div className="flex gap-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="18"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											className="lucide lucide-circle-check text-green-400"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
											></circle>
											<path d="m9 12 2 2 4-4"></path>
										</svg>
										<p className="pt-0.5 text-sm text-zinc-400  ">
											Bonus: Chrome extension (Youtube
											Summarizer)
										</p>
									</div>
								</div>
							</div>
							<div className="flex items-center p-6 pt-0 mt-2">
								<button className="bg-primary text-primary-foreground hover:bg-primary/90 py-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-green-500 to-[#178389] dark:text-white hover:from-green-400 hover:to-[#178389] h-12 px-8 text-lg relative inline-flex w-full items-center font-medium justify-center rounded-md">
									<span className="pr-1">⚡️</span>Get access
								</button>
							</div>
							<p className="text-sm text-zinc-400 text-center pb-2">
								Pay once. Use forever.
							</p>
						</div>
					</section>
				</div>
			</div> */}
		</div>
	);
};

// <div className="text-white font-bold py-36 text-center space-y-5">
// 	<div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
// 		<h1>The Best AI Platform for</h1>
// 		<div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
// 			<TypewriterComponent
// 				options={{
// 					strings: [
// 						"Chatbot.",
// 						"Photo Generation.",
// 						"Blog Writing.",
// 						"Mail Writing.",
// 					],
// 					autoStart: true,
// 					loop: true,
// 				}}
// 			/>
// 		</div>
// 	</div>
// 	<div className="text-sm md:text-xl font-light text-zinc-400">
// 		Create content using AI 10x faster.
// 	</div>
// 	<div>
// 		<Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
// 			<Button
// 				variant="premium"
// 				className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
// 			>
// 				Start Generating For Free
// 			</Button>
// 		</Link>
// 	</div>
// 	<div className="text-zinc-400 text-xs md:text-sm font-normal">
// 		No credit card required.
// 	</div>
// </div>
