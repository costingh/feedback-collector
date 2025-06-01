import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqData = [
	{
		question: 'How are you different from X, Y, Z competitors?',
		answer: 'Feedbackz is designed specifically for web agencies to streamline client feedback. Unlike competitors, we focus on features that directly address this need. Plus, we integrate seamlessly with your existing tools, so there’s no need to juggle another platform. Your team can manage all feedback right from the tools they already use.',
	},
	{
		question: 'What is a project?',
		answer: 'A project is a concept meant to help you organize the feedback you collect. You can use Feedbackz collector forms on as many websites as you like.',
	},
	{
		question: 'Do I need to install anything?',
		answer: 'To activate the Feedbackz widget, just add a few lines of Javascript to your website. It all works from the browser.',
	},
	{
		question: 'What payment methods are accepted?',
		answer: 'We accept Visa, MasterCard, and American Express credit cards. All payments are securely processed through Stripe. For those on the Enterprise plan, we also offer payment by invoice.',
	},
	{
		question: 'Can I change or cancel my plan?',
		answer: 'Want to change or cancel your plan? Easily do so from the billing panel. If you decide to cancel, your subscription will continue until the end of your paid billing period.',
	},
	{
		question: 'Do you offer refunds?',
		answer: 'We offer a 30-day refund guarantee from your first payment. No questions asked.',
	},
]

type FaqItemProps = {
	question: string
	answer: string
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
	return (
		<details className="group appearance-none rounded-3xl border border-white/20 outline-none transition duration-300 hover:cursor-pointer hover:bg-white/5">
			<summary className="flex w-full appearance-none items-center justify-between px-6 py-6">
				<span className="pr-10 text-lg text-white">{question}</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-[22px] w-[22px] min-w-[22px] fill-white transition duration-500 group-open:rotate-180"
					viewBox="0 0 256 256"
				>
					<path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path>
				</svg>
			</summary>
			<article className="px-6 pb-6 transition-opacity duration-500 ease-in-out">
				<p className="text-gray-DEFAULT-400 font-[300]">{answer}</p>
			</article>
		</details>
	)
}

const Faq: React.FC = () => {
	return (
		<>
			<section className="px-6 py-12" id="faq">
				<div className="bg-transparent mx-auto flex w-full max-w-[900px] flex-col overflow-hidden bg-[#050520] pt-6 backdrop-blur-xl md:pt-20">
					<div className="mb-12 flex flex-col gap-6">
						<h2 className="text-transparent mx-auto bg-clip-text text-center text-3xl font-extrabold lg:text-5xl lg:leading-[60px]">
							<span className="text-transparent bg-gradient-to-b from-white from-40% to-[#b2b2b2] bg-clip-text">
								Frequently Asked Questions
							</span>
						</h2>
						<div className="mx-auto max-w-2xl text-center text-lg text-white lg:text-xl">
							Need more information about Feedbackz.co? Find all
							your answers here.
						</div>
					</div>
					<div className="flex flex-col gap-6">
						{faqData.map((item, index) => (
							<FaqItem
								key={index}
								question={item.question}
								answer={item.answer}
							/>
						))}
					</div>
				</div>
				<div className="mt-12 text-center text-sm text-gray-DEFAULT-400">
					Still have questions?{' '}
					<button
						type="button"
						className="text-indigo-600 py-2 hover:text-indigo-900"
					>
						Chat with us now
					</button>
					.
				</div>
			</section>
		</>
	)
}

export default Faq
