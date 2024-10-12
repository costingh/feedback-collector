import React from "react";

function Faq() {
	return (
		<section className="bg-zinc-50 py-24 lg:py-32">
			<div className="text-center">
				<div className="text-indigo-600 font-semibold text-center">
					FAQ
				</div>
				<p className="mt-2 text-center text-4xl text-gray-900 font-extrabold leading-[2.75rem]">
					Frequently Asked Questions
				</p>
			</div>
			<dl className="mt-12 max-w-4xl mx-auto space-y-6 px-4 sm:px-6">
				<div className="bg-white rounded-lg border shadow p-6">
					<button
						type="button"
						className="text-left w-full flex items-center justify-between text-gray-700 transition duration-400 hover:text-indigo-600"
					>
						<dt className="font-bold text-indigo-600">
							What's the difference between a reporter and team
							member?
						</dt>
						<div className="ml-4 flex-shrink-0">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
								className="w-5 h-5 text-indigo-600"
							>
								<path
									fill-rule="evenodd"
									d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
									clip-rule="evenodd"
								></path>
							</svg>
						</div>
					</button>
					<dd className="mt-6 text-gray-600">
						A reporter is typically a client or stakeholder who can
						submit and comment on feedback using the Feedbucket
						widget without needing an account. They provide insights
						without directly managing the projects. On the other
						hand, a team member has access to the Feedbucket
						dashboard and an account. They actively manage projects,
						organize feedback, and work behind-the-scenes.
					</dd>
				</div>
				<div className="bg-white rounded-lg border shadow p-6">
					<button
						type="button"
						className="text-left w-full flex items-center justify-between text-gray-700 transition duration-400 hover:text-indigo-600"
					>
						<dt className="font-bold">
							How are you different from X, Y, Z competitors?
						</dt>
						<div className="ml-4 flex-shrink-0">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
								className="w-5 h-5 text-gray-700"
							>
								<path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
							</svg>
						</div>
					</button>
					<dd className="mt-6 text-gray-600" >
						Feedbucket is designed specifically for web agencies to
						streamline client feedback. Unlike competitors, we focus
						on features that directly address this need. Plus, we
						integrate seamlessly with your existing tools, so
						there’s no need to juggle another platform. Your team
						can manage all feedback right from the tools they
						already use.
					</dd>
				</div>
				<div className="bg-white rounded-lg border shadow p-6">
					<button
						type="button"
						className="text-left w-full flex items-center justify-between text-gray-700 transition duration-400 hover:text-indigo-600"
					>
						<dt className="font-bold">What is a project?</dt>
						<div className="ml-4 flex-shrink-0">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
								className="w-5 h-5 text-gray-700"
							>
								<path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
							</svg>
						</div>
					</button>
					<dd className="mt-6 text-gray-600" >
						A project is a website that you want to collect feedback
						on. You can install Feedbucket on as many websites as
						you like.
					</dd>
				</div>
				<div className="bg-white rounded-lg border shadow p-6">
					<button
						type="button"
						className="text-left w-full flex items-center justify-between text-gray-700 transition duration-400 hover:text-indigo-600"
					>
						<dt className="font-bold">
							Do I need to install anything?
						</dt>
						<div className="ml-4 flex-shrink-0">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
								className="w-5 h-5 text-gray-700"
							>
								<path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
							</svg>
						</div>
					</button>
					<dd className="mt-6 text-gray-600" >
						To activate the Feedbucket widget, just add one line of
						Javascript to your website. For a no-code option, you
						can use some of our plugins. Your clients and
						stakeholders do not have to install anything. It all
						works from the browser.
					</dd>
				</div>
				<div className="bg-white rounded-lg border shadow p-6">
					<button
						type="button"
						className="text-left w-full flex items-center justify-between text-gray-700 transition duration-400 hover:text-indigo-600"
					>
						<dt className="font-bold">
							What payment methods are accepted?
						</dt>
						<div className="ml-4 flex-shrink-0">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
								className="w-5 h-5 text-gray-700"
							>
								<path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
							</svg>
						</div>
					</button>
					<dd className="mt-6 text-gray-600" >
						We accept Visa, MasterCard, and American Express credit
						cards. All payments are securely processed through
						Stripe. For those on the Enterprise plan, we also offer
						payment by invoice.
					</dd>
				</div>
				<div className="bg-white rounded-lg border shadow p-6">
					<button
						type="button"
						className="text-left w-full flex items-center justify-between text-gray-700 transition duration-400 hover:text-indigo-600"
					>
						<dt className="font-bold">
							Can I change or cancel my plan?
						</dt>
						<div className="ml-4 flex-shrink-0">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
								className="w-5 h-5 text-gray-700"
							>
								<path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
							</svg>
						</div>
					</button>
					<dd className="mt-6 text-gray-600" >
						Want to change or cancel your plan? Easily do so from
						the billing panel. If you decide to cancel, your
						subscription will continue until the end of your paid
						billing period
					</dd>
				</div>
				<div className="bg-white rounded-lg border shadow p-6">
					<button
						type="button"
						className="text-left w-full flex items-center justify-between text-gray-700 transition duration-400 hover:text-indigo-600"
					>
						<dt className="font-bold">Do you offer refunds?</dt>
						<div className="ml-4 flex-shrink-0">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
								className="w-5 h-5 text-gray-700"
							>
								<path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
							</svg>
						</div>
					</button>
					<dd className="mt-6 text-gray-600">
						We offer a 60-day refund guarantee from your first
						payment. No questions asked.
					</dd>
				</div>
			</dl>
			<div className="mt-12 text-center text-sm text-gray-500">
				Still have questions?
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
}

export default Faq;
