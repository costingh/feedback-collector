import { HeroButton } from './hero-button'

export const CTABanner2 = () => {
	return (
		<div className="flex flex-col gap-5 min-h-[100vh] items-center justify-center p-5 bg-[#fefefe] relative">
			<div className="to-transparent absolute top-0 left-0 right-0 h-[200px] w-full bg-gradient-to-b from-[#272943]"></div>

			<p className="text-[16px] font-bold text-indigo-600">
				With Feedbackz
			</p>
			<h1 className="text-gray-900 font-extrabold max-w-3xl text-center leading-[40px] sm:text-5xl sm:leading-[55px] lg:text-6xl lg:leading-[80px] 2xl:text-7xl">
				Empower your clients to submit testimonials without leaving the
				website
			</h1>
			<p className="text-gray-500 font-light text-[17px]">
				No extensions or registrations needed by your clients.
			</p>
			<HeroButton variant="sm" text="Start Your Free Trial Now" />

			<div className="to-transparent absolute bottom-0 left-0 right-0 h-[200px] w-full bg-gradient-to-t from-[#272943]"></div>
		</div>
	)
}
