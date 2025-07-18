'use client'

import Link from 'next/link'
import { HeroSection } from './_components/hero-section'
import LandingPageNavBar from './_components/navbar'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { MoveRight } from 'lucide-react'
import Footer from './_components/footer'
import { CrispChat } from './_components/crisp-chat'
import { PartnersLogoCarousel } from './_components/partners-logo-carousel'
import { KpisSection } from './_components/kpis-section'
import { DemoVideo } from './_components/demo-video'
import { WidgetShowcase } from './_components/widget-showcase'
import { HeroButton } from './_components/hero-button'
import UseSteps from './_components/use-steps'
import WhyUseFeedbackz from './_components/why-use-feedbackz'
import Faq from './_components/faq'
import CallToAction from './_components/call-to-action'
import Container from '@/components/layout/container'
import IntroBanner from './_components/intro-banner'
import { CTABanner2 } from './_components/cta-banner-2'
import FeaturesSection from './_components/features-section'

const LandingPage = () => {
	return (
		<>
			<div className="max-w-full h-full">
				<div className="bg-[#050520]">
					<LandingPageNavBar />
					<HeroSection />
					<PartnersLogoCarousel />
					<KpisSection />
					<WidgetShowcase />
					<DemoVideo />
					<CTABanner2 />
				</div>
			</div>
			<div
				id="features"
				className="w-full bg-[#050520] pt-[80px] px-[100px] pb-[130px]"
			>
				<div className="flex items-center justify-center flex-col gap-4">
					<div className="text-center">
						<h2 className="text-transparent bg-clip-text text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight bg-gradient-to-b from-white to-[#7496F8] text-transparent bg-clip-text">
							<span className="bg-gradient-to-b from-white from-70% to-[#b2b2b2] bg-clip-text">
								Unlock the full potential of Feedbackz, <br />
							</span>
							<span className="bg-gradient-to-b from-[#b2b2b2] from-30% to-[#7496F8] bg-clip-text">
								the ultimate testimonial collector, <br />
							</span>
							<span className="bg-gradient-to-b from-white from-70% to-[#b2b2b2] bg-clip-text">
								seamlessly integrated into your website!
							</span>
						</h2>
						<span className="text-[35px]">🚀</span>
					</div>

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
					<div className="divider h-[20px]"></div>
					<HeroButton variant="md" text="Try Feedbackz for free" />
				</div>

				<IntroBanner />
				<UseSteps />
				<WhyUseFeedbackz />
				<FeaturesSection />

				<Faq />
				<CallToAction />
			</div>

			<div className="w-full bg-indigo-600 rounded-t-[30px] py-[80px] px-[100px] flex flex-col items-center justify-center gap-5 relative overflow-hidden mt-[-30px]">
				<div className="absolute -bottom-28 -left-20 w-56 h-56 bg-opacity-25 rounded-full bg-indigo-500"></div>
				<div className="absolute -top-28 -right-24 bg-opacity-75 w-64 h-64 rounded-full bg-indigo-800"></div>
				<h1 className="text-white text-[32px] font-black text-center max-w-2xl leading-[38px]">
					Tired of unorganized client feedback? Start you free 14-day
					trial now.
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

			<Container>
				<Footer />
			</Container>
			<CrispChat />
		</>
	)
}

export default LandingPage

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
)
