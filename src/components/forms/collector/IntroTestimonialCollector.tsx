'use client'

import { RocketIcon } from '@/app/(website)/_components/icons/rocket-icon'

export const IntroTestimonialCollector = ({
	setStep,
	primaryColor,
}: {
	setStep: any | undefined
	primaryColor: any | undefined
}) => {
	return (
		<>
			<p className="my-2 text-gray-800 font-medium text-[13px] md:text-[16px]">
				Do you love using our product? We'd love to hear about it!
			</p>

			<ul className="text-gray-800 font-normal text-[13px] md:text-[16px] my-4">
				<li>
					• Share your experience with a quick video or text
					testimonial
				</li>
				<li>• Recording a video? Don't forget to smile 😊</li>
			</ul>

			<button
				onClick={() => {
					setStep(1)
				}}
				className="p-1.5 md:p-2.5 rounded-lg text-gray-50 w-full mt-2.5 font-normal tracking-wide text-[13px] md:text-[15px] flex items-center gap-4 justify-center"
				style={{
					backgroundColor: primaryColor,
				}}
			>
				<div>Write a Testimonial</div> <RocketIcon />
			</button>

			<button
				onClick={() => {
					setStep(2)
				}}
				className="p-1.5 md:p-2.5 rounded-lg w-full mt-2.5 font-normal tracking-wide text-[13px] md:text-[15px] flex items-center gap-4 justify-center"
				style={{
					color: primaryColor,
					fill: primaryColor,
					border: `1px solid ${primaryColor}`,
				}}
			>
				<div>Record a Testimonial</div> <RocketIcon />
			</button>
		</>
	)
}
