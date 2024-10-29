import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
	{
		question: "How are you different from X, Y, Z competitors?",
		answer: "Feedbackz is designed specifically for web agencies to streamline client feedback. Unlike competitors, we focus on features that directly address this need. Plus, we integrate seamlessly with your existing tools, so there’s no need to juggle another platform. Your team can manage all feedback right from the tools they already use.",
	},
	{
		question: "What is a project?",
		answer: "A project is a concept meant to help you organize the feedback you collect. You can use Feedbackz collector forms on as many websites as you like.",
	},
	{
		question: "Do I need to install anything?",
		answer: "To activate the Feedbackz widget, just add a few lines of Javascript to your website. It all works from the browser.",
	},
	{
		question: "What payment methods are accepted?",
		answer: "We accept Visa, MasterCard, and American Express credit cards. All payments are securely processed through Stripe. For those on the Enterprise plan, we also offer payment by invoice.",
	},
	{
		question: "Can I change or cancel my plan?",
		answer: "Want to change or cancel your plan? Easily do so from the billing panel. If you decide to cancel, your subscription will continue until the end of your paid billing period.",
	},
	{
		question: "Do you offer refunds?",
		answer: "We offer a 30-day refund guarantee from your first payment. No questions asked.",
	},
];

type FaqItemProps = {
	question: string;
	answer: string;
};

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="bg-white rounded-lg border shadow p-6">
			<button
				type="button"
				className="text-left w-full flex items-center justify-between text-gray-700 transition duration-400 hover:text-indigo-600"
				onClick={() => setIsOpen(!isOpen)}
			>
				<dt className="font-bold">{question}</dt>
				<div className="ml-4 flex-shrink-0">
					{isOpen ? (
						<ChevronUp className="w-5 h-5 text-gray-700" />
					) : (
						<ChevronDown className="w-5 h-5 text-gray-700" />
					)}
				</div>
			</button>
			{isOpen && <dd className="mt-6 text-gray-600">{answer}</dd>}
		</div>
	);
};

const Faq: React.FC = () => {
	return (
		<section className="bg-zinc-50 py-24 lg:py-32">
			<div className="text-center">
				<div className="text-indigo-600 font-semibold">FAQ</div>
				<p className="mt-2 text-4xl text-gray-900 font-extrabold leading-[2.75rem]">
					Frequently Asked Questions
				</p>
			</div>
			<dl className="mt-12 max-w-4xl mx-auto space-y-6 px-4 sm:px-6">
				{faqData.map((item, index) => (
					<FaqItem
						key={index}
						question={item.question}
						answer={item.answer}
					/>
				))}
			</dl>
			<div className="mt-12 text-center text-sm text-gray-500">
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
	);
};

export default Faq;
