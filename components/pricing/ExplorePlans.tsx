export default function ExplorePlans() {
	return (
		<div className="relative py-24 lg:py-32">
	<div className="mx-auto max-w-7xl px-6 lg:px-8">
		<div className="mx-auto max-w-2xl text-center">
			<p className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
				Features
			</p>
			<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				Explore what&apos;s in each plan
			</p>
		</div>
		<section
			aria-labelledby="mobile-comparison-heading"
			className="mt-8 lg:hidden"
		>
			<p id="mobile-comparison-heading" className="sr-only">
				Feature comparison
			</p>
			<div className="mx-auto max-w-2xl space-y-16">
				<div className="border-t border-gray-900/10">
					<div className="border-transparent -mt-px w-72 border-t-2 pt-10 md:w-80">
						<p className="text-gray-900 text-sm font-semibold leading-6">
							Pro
						</p>
						<p className="mt-1 text-sm leading-6 text-gray-600">
							Start taking control of your website
							feedback process.
						</p>
					</div>
					<div className="mt-10 space-y-10">
						<div>
							<p className="text-sm font-semibold leading-6 text-gray-900">
								Usage
							</p>
							<div className="relative mt-6">
								<div
									aria-hidden="true"
									className="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block"
								></div>
								<div className="ring-1 ring-gray-900/10 relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0">
									<dl className="divide-y divide-gray-200 text-sm leading-6">
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Team members
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<span className="text-gray-900">
													3
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Reporters
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<span className="text-gray-900">
													Unlimited
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Projects
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<span className="text-gray-900">
													1
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Testimonials
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<span className="text-gray-900">
													Unlimited
												</span>
											</dd>
										</div>
										{/* <div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Websites
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<span className="text-gray-900">
													Unlimited
												</span>
											</dd>
										</div> */}
									</dl>
								</div>
								<div
									aria-hidden="true"
									className="ring-1 ring-gray-900/10 pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block"
								></div>
							</div>
						</div>
						<div>
							<p className="text-sm font-semibold leading-6 text-gray-900">
								Capture &amp; collect feedback
							</p>
							<div className="relative mt-6">
								<div
									aria-hidden="true"
									className="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block"
								></div>
								<div className="ring-1 ring-gray-900/10 relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0">
									<dl className="divide-y divide-gray-200 text-sm leading-6">
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Feedback widget
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Screenshot feedback
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Annotation tools
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Video feedback
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Technical details
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												JavaScript
												installation
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Console logs
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-gray-400"
												>
													<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
												</svg>
												<span className="sr-only">
													No
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Custom metadata
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-gray-400"
												>
													<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
												</svg>
												<span className="sr-only">
													No
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Personal feedback
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-gray-400"
												>
													<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
												</svg>
												<span className="sr-only">
													No
												</span>
											</dd>
										</div>
									</dl>
								</div>
								<div
									aria-hidden="true"
									className="ring-1 ring-gray-900/10 pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block"
								></div>
							</div>
						</div>
						<div>
							<p className="text-sm font-semibold leading-6 text-gray-900">
								Collaborate
							</p>
							<div className="relative mt-6">
								<div
									aria-hidden="true"
									className="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block"
								></div>
								<div className="ring-1 ring-gray-900/10 relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0">
									<dl className="divide-y divide-gray-200 text-sm leading-6">
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Feedback comments
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Comment from
												integration
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Feedback status
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Integration status
												sync
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Attachments
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Notifications
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
									</dl>
								</div>
								<div
									aria-hidden="true"
									className="ring-1 ring-gray-900/10 pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block"
								></div>
							</div>
						</div>
						<div>
							<p className="text-sm font-semibold leading-6 text-gray-900">
								Branding
							</p>
							<div className="relative mt-6">
								<div
									aria-hidden="true"
									className="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block"
								></div>
								<div className="ring-1 ring-gray-900/10 relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0">
									<dl className="divide-y divide-gray-200 text-sm leading-6">
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Customize widget
												colors
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-gray-400"
												>
													<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
												</svg>
												<span className="sr-only">
													No
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Own logo
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-gray-400"
												>
													<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
												</svg>
												<span className="sr-only">
													No
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Remove &apos;Powered by&apos;
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-gray-400"
												>
													<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
												</svg>
												<span className="sr-only">
													No
												</span>
											</dd>
										</div>
									</dl>
								</div>
								<div
									aria-hidden="true"
									className="ring-1 ring-gray-900/10 pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block"
								></div>
							</div>
						</div>
						<div>
							<p className="text-sm font-semibold leading-6 text-gray-900">
								Integrations
							</p>
							<div className="relative mt-6">
								<div
									aria-hidden="true"
									className="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block"
								></div>
								<div className="ring-1 ring-gray-900/10 relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0">
									<dl className="divide-y divide-gray-200 text-sm leading-6">
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<a
													href="/integrations/asana-visual-feedback/"
													className="inline-flex items-center"
												>
													<img
														src="/img/asana.png"
														className="w-5 h-5 mr-3"
													/>
													Asana
												</a>
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<a
													href="/integrations/clickup-visual-feedback/"
													className="inline-flex items-center"
												>
													<img
														src="/img/clickup.png"
														className="w-5 h-5 mr-3"
													/>
													ClickUp
												</a>
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<a
													href="/integrations/trello-visual-feedback/"
													className="inline-flex items-center"
												>
													<img
														src="/img/trello.png"
														className="w-5 h-5 mr-3"
													/>
													Trello
												</a>
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<a
													href="/integrations/jira-visual-feedback/"
													className="inline-flex items-center"
												>
													<img
														src="/img/jira.png"
														className="w-5 h-5 mr-3"
													/>
													Jira
												</a>
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<a
													href="/integrations/teamwork-visual-feedback/"
													className="inline-flex items-center"
												>
													<img
														src="/img/teamwork.png"
														className="w-5 h-5 mr-3"
													/>
													Teamwork
												</a>
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<img
													src="/img/monday.png"
													className="w-5 h-5 mr-3"
												/>
												Monday
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<img
													src="/img/gitlab.png"
													className="w-5 h-5 mr-3"
												/>
												Gitlab
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<a
													href="/integrations/slack-issue-tracking/"
													className="inline-flex items-center"
												>
													<img
														src="/img/slack.png"
														className="w-5 h-5 mr-3"
													/>
													Slack
												</a>
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<img
													src="/img/github.png"
													className="w-5 h-5 mr-3"
												/>
												Github
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<a
													href="/integrations/notion-website-feedback/"
													className="inline-flex items-center"
												>
													<img
														src="/img/notion.png"
														className="w-5 h-5 mr-3"
													/>
													Notion
												</a>
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<a
													href="/integrations/linear-issue-tracking/"
													className="inline-flex items-center"
												>
													<img
														src="/img/linear.svg"
														className="w-5 h-5 mr-3"
													/>
													Linear
												</a>
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<a
													href="/integrations/shortcut-bug-tracking/"
													className="inline-flex items-center"
												>
													<img
														src="/img/shortcut.png"
														className="w-5 h-5 mr-3"
													/>
													Shortcut
												</a>
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<img
													src="/img/email.png"
													className="w-5 h-5 mr-3"
												/>
												Email
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<img
													src="/img/webhook.png"
													className="w-5 h-5 mr-3"
												/>
												Webhooks
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
									</dl>
								</div>
								<div
									aria-hidden="true"
									className="ring-1 ring-gray-900/10 pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block"
								></div>
							</div>
						</div>
						<div>
							<p className="text-sm font-semibold leading-6 text-gray-900">
								Services
							</p>
							<div className="relative mt-6">
								<div
									aria-hidden="true"
									className="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block"
								></div>
								<div className="ring-1 ring-gray-900/10 relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0">
									<dl className="divide-y divide-gray-200 text-sm leading-6">
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Export to CSV
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-gray-400"
												>
													<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
												</svg>
												<span className="sr-only">
													No
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Dedicated success
												manager
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-gray-400"
												>
													<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
												</svg>
												<span className="sr-only">
													No
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Priority support
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-gray-400"
												>
													<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
												</svg>
												<span className="sr-only">
													No
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Pay by invoice
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-gray-400"
												>
													<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
												</svg>
												<span className="sr-only">
													No
												</span>
											</dd>
										</div>
									</dl>
								</div>
								<div
									aria-hidden="true"
									className="ring-1 ring-gray-900/10 pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block"
								></div>
							</div>
						</div>
					</div>
				</div>
				<div className="border-t border-gray-900/10">
					<div className="border-indigo-600 -mt-px w-72 border-t-2 pt-10 md:w-80">
						<p className="text-indigo-600 text-sm font-semibold leading-6">
							Business
						</p>
						<p className="mt-1 text-sm leading-6 text-gray-600">
							Boost your website feedback process to
							the max.
						</p>
					</div>
					<div className="mt-10 space-y-10">
						<div>
							<p className="text-sm font-semibold leading-6 text-gray-900">
								Usage
							</p>
							<div className="relative mt-6">
								<div
									aria-hidden="true"
									className="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block"
								></div>
								<div className="ring-2 ring-indigo-600 relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0">
									<dl className="divide-y divide-gray-200 text-sm leading-6">
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Team members
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<span className="font-semibold text-indigo-600">
													5
												</span>
											</dd>
										</div>
										{/* <div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Reporters
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<span className="font-semibold text-indigo-600">
													Unlimited
												</span>
											</dd>
										</div> */}
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Projects
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<span className="font-semibold text-indigo-600">
													3
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Testimonials
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<span className="font-semibold text-indigo-600">
													Unlimited
												</span>
											</dd>
										</div>
										{/* <div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Websites
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<span className="font-semibold text-indigo-600">
													Unlimited
												</span>
											</dd>
										</div> */}
									</dl>
								</div>
								<div
									aria-hidden="true"
									className="ring-2 ring-indigo-600 pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block"
								></div>
							</div>
						</div>
						<div>
							<p className="text-sm font-semibold leading-6 text-gray-900">
								Capture &amp; collect feedback
							</p>
							<div className="relative mt-6">
								<div
									aria-hidden="true"
									className="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block"
								></div>
								<div className="ring-2 ring-indigo-600 relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0">
									<dl className="divide-y divide-gray-200 text-sm leading-6">
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Feedback widget
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Screenshot feedback
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Annotation tools
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Video feedback
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Technical details
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												JavaScript
												installation
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Console logs
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Custom metadata
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Personal feedback
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
									</dl>
								</div>
								<div
									aria-hidden="true"
									className="ring-2 ring-indigo-600 pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block"
								></div>
							</div>
						</div>
						<div>
							<p className="text-sm font-semibold leading-6 text-gray-900">
								Collaborate
							</p>
							<div className="relative mt-6">
								<div
									aria-hidden="true"
									className="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block"
								></div>
								<div className="ring-2 ring-indigo-600 relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0">
									<dl className="divide-y divide-gray-200 text-sm leading-6">
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Feedback comments
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Comment from
												integration
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Feedback status
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Integration status
												sync
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Attachments
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Notifications
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
									</dl>
								</div>
								<div
									aria-hidden="true"
									className="ring-2 ring-indigo-600 pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block"
								></div>
							</div>
						</div>
						<div>
							<p className="text-sm font-semibold leading-6 text-gray-900">
								Branding
							</p>
							<div className="relative mt-6">
								<div
									aria-hidden="true"
									className="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block"
								></div>
								<div className="ring-2 ring-indigo-600 relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0">
									<dl className="divide-y divide-gray-200 text-sm leading-6">
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Customize widget
												colors
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Own logo
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Remove &apos;Powered by&apos;
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
									</dl>
								</div>
								<div
									aria-hidden="true"
									className="ring-2 ring-indigo-600 pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block"
								></div>
							</div>
						</div>
						<div>
							<p className="text-sm font-semibold leading-6 text-gray-900">
								Integrations
							</p>
							<div className="relative mt-6">
								<div
									aria-hidden="true"
									className="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block"
								></div>
								<div className="ring-2 ring-indigo-600 relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0">
									<dl className="divide-y divide-gray-200 text-sm leading-6">
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<a
													href="/integrations/asana-visual-feedback/"
													className="inline-flex items-center"
												>
													<img
														src="/img/asana.png"
														className="w-5 h-5 mr-3"
													/>
													Asana
												</a>
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<a
													href="/integrations/clickup-visual-feedback/"
													className="inline-flex items-center"
												>
													<img
														src="/img/clickup.png"
														className="w-5 h-5 mr-3"
													/>
													ClickUp
												</a>
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<a
													href="/integrations/trello-visual-feedback/"
													className="inline-flex items-center"
												>
													<img
														src="/img/trello.png"
														className="w-5 h-5 mr-3"
													/>
													Trello
												</a>
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<a
													href="/integrations/jira-visual-feedback/"
													className="inline-flex items-center"
												>
													<img
														src="/img/jira.png"
														className="w-5 h-5 mr-3"
													/>
													Jira
												</a>
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<a
													href="/integrations/teamwork-visual-feedback/"
													className="inline-flex items-center"
												>
													<img
														src="/img/teamwork.png"
														className="w-5 h-5 mr-3"
													/>
													Teamwork
												</a>
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<img
													src="/img/monday.png"
													className="w-5 h-5 mr-3"
												/>
												Monday
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<img
													src="/img/gitlab.png"
													className="w-5 h-5 mr-3"
												/>
												Gitlab
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<a
													href="/integrations/slack-issue-tracking/"
													className="inline-flex items-center"
												>
													<img
														src="/img/slack.png"
														className="w-5 h-5 mr-3"
													/>
													Slack
												</a>
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<img
													src="/img/github.png"
													className="w-5 h-5 mr-3"
												/>
												Github
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<a
													href="/integrations/notion-website-feedback/"
													className="inline-flex items-center"
												>
													<img
														src="/img/notion.png"
														className="w-5 h-5 mr-3"
													/>
													Notion
												</a>
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<a
													href="/integrations/linear-issue-tracking/"
													className="inline-flex items-center"
												>
													<img
														src="/img/linear.svg"
														className="w-5 h-5 mr-3"
													/>
													Linear
												</a>
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<a
													href="/integrations/shortcut-bug-tracking/"
													className="inline-flex items-center"
												>
													<img
														src="/img/shortcut.png"
														className="w-5 h-5 mr-3"
													/>
													Shortcut
												</a>
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<img
													src="/img/email.png"
													className="w-5 h-5 mr-3"
												/>
												Email
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<img
													src="/img/webhook.png"
													className="w-5 h-5 mr-3"
												/>
												Webhooks
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
									</dl>
								</div>
								<div
									aria-hidden="true"
									className="ring-2 ring-indigo-600 pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block"
								></div>
							</div>
						</div>
						<div>
							<p className="text-sm font-semibold leading-6 text-gray-900">
								Services
							</p>
							<div className="relative mt-6">
								<div
									aria-hidden="true"
									className="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block"
								></div>
								<div className="ring-2 ring-indigo-600 relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0">
									<dl className="divide-y divide-gray-200 text-sm leading-6">
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Export to CSV
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Dedicated success
												manager
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-gray-400"
												>
													<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
												</svg>
												<span className="sr-only">
													No
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Priority support
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-gray-400"
												>
													<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
												</svg>
												<span className="sr-only">
													No
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Pay by invoice
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-gray-400"
												>
													<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
												</svg>
												<span className="sr-only">
													No
												</span>
											</dd>
										</div>
									</dl>
								</div>
								<div
									aria-hidden="true"
									className="ring-2 ring-indigo-600 pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block"
								></div>
							</div>
						</div>
					</div>
				</div>
				<div className="border-t border-gray-900/10">
					<div className="border-transparent -mt-px w-72 border-t-2 pt-10 md:w-80">
						<p className="text-gray-900 text-sm font-semibold leading-6">
							Enterprise
						</p>
						<p className="mt-1 text-sm leading-6 text-gray-600">
							For your enterprise needs and priority
							support.
						</p>
					</div>
					<div className="mt-10 space-y-10">
						<div>
							<p className="text-sm font-semibold leading-6 text-gray-900">
								Usage
							</p>
							<div className="relative mt-6">
								<div
									aria-hidden="true"
									className="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block"
								></div>
								<div className="ring-1 ring-gray-900/10 relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0">
									<dl className="divide-y divide-gray-200 text-sm leading-6">
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Team members
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<span className="text-gray-900">
													Unlimited
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Reporters
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<span className="text-gray-900">
													Unlimited
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Projects
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<span className="text-gray-900">
													Unlimited
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Feedback
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<span className="text-gray-900">
													Unlimited
												</span>
											</dd>
										</div>
										{/* <div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Websites
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<span className="text-gray-900">
													Unlimited
												</span>
											</dd>
										</div> */}
									</dl>
								</div>
								<div
									aria-hidden="true"
									className="ring-1 ring-gray-900/10 pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block"
								></div>
							</div>
						</div>
						<div>
							<p className="text-sm font-semibold leading-6 text-gray-900">
								Capture &amp; collect feedback
							</p>
							<div className="relative mt-6">
								<div
									aria-hidden="true"
									className="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block"
								></div>
								<div className="ring-1 ring-gray-900/10 relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0">
									<dl className="divide-y divide-gray-200 text-sm leading-6">
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Feedback widget
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Screenshot feedback
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Annotation tools
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Video feedback
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Technical details
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												JavaScript
												installation
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Console logs
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Custom metadata
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Personal feedback
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
									</dl>
								</div>
								<div
									aria-hidden="true"
									className="ring-1 ring-gray-900/10 pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block"
								></div>
							</div>
						</div>
						<div>
							<p className="text-sm font-semibold leading-6 text-gray-900">
								Collaborate
							</p>
							<div className="relative mt-6">
								<div
									aria-hidden="true"
									className="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block"
								></div>
								<div className="ring-1 ring-gray-900/10 relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0">
									<dl className="divide-y divide-gray-200 text-sm leading-6">
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Feedback comments
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Comment from
												integration
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Feedback status
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Integration status
												sync
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Attachments
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Notifications
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
									</dl>
								</div>
								<div
									aria-hidden="true"
									className="ring-1 ring-gray-900/10 pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block"
								></div>
							</div>
						</div>
						<div>
							<p className="text-sm font-semibold leading-6 text-gray-900">
								Branding
							</p>
							<div className="relative mt-6">
								<div
									aria-hidden="true"
									className="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block"
								></div>
								<div className="ring-1 ring-gray-900/10 relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0">
									<dl className="divide-y divide-gray-200 text-sm leading-6">
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Customize widget
												colors
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Own logo
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Remove &apos;Powered by&apos;
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
									</dl>
								</div>
								<div
									aria-hidden="true"
									className="ring-1 ring-gray-900/10 pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block"
								></div>
							</div>
						</div>
						<div>
							<p className="text-sm font-semibold leading-6 text-gray-900">
								Integrations
							</p>
							<div className="relative mt-6">
								<div
									aria-hidden="true"
									className="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block"
								></div>
								<div className="ring-1 ring-gray-900/10 relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0">
									<dl className="divide-y divide-gray-200 text-sm leading-6">
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<a
													href="/integrations/asana-visual-feedback/"
													className="inline-flex items-center"
												>
													<img
														src="/img/asana.png"
														className="w-5 h-5 mr-3"
													/>
													Asana
												</a>
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<a
													href="/integrations/clickup-visual-feedback/"
													className="inline-flex items-center"
												>
													<img
														src="/img/clickup.png"
														className="w-5 h-5 mr-3"
													/>
													ClickUp
												</a>
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<a
													href="/integrations/trello-visual-feedback/"
													className="inline-flex items-center"
												>
													<img
														src="/img/trello.png"
														className="w-5 h-5 mr-3"
													/>
													Trello
												</a>
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<a
													href="/integrations/jira-visual-feedback/"
													className="inline-flex items-center"
												>
													<img
														src="/img/jira.png"
														className="w-5 h-5 mr-3"
													/>
													Jira
												</a>
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<a
													href="/integrations/teamwork-visual-feedback/"
													className="inline-flex items-center"
												>
													<img
														src="/img/teamwork.png"
														className="w-5 h-5 mr-3"
													/>
													Teamwork
												</a>
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<img
													src="/img/monday.png"
													className="w-5 h-5 mr-3"
												/>
												Monday
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<img
													src="/img/gitlab.png"
													className="w-5 h-5 mr-3"
												/>
												Gitlab
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<a
													href="/integrations/slack-issue-tracking/"
													className="inline-flex items-center"
												>
													<img
														src="/img/slack.png"
														className="w-5 h-5 mr-3"
													/>
													Slack
												</a>
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<img
													src="/img/github.png"
													className="w-5 h-5 mr-3"
												/>
												Github
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<a
													href="/integrations/notion-website-feedback/"
													className="inline-flex items-center"
												>
													<img
														src="/img/notion.png"
														className="w-5 h-5 mr-3"
													/>
													Notion
												</a>
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<a
													href="/integrations/linear-issue-tracking/"
													className="inline-flex items-center"
												>
													<img
														src="/img/linear.svg"
														className="w-5 h-5 mr-3"
													/>
													Linear
												</a>
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<a
													href="/integrations/shortcut-bug-tracking/"
													className="inline-flex items-center"
												>
													<img
														src="/img/shortcut.png"
														className="w-5 h-5 mr-3"
													/>
													Shortcut
												</a>
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<img
													src="/img/email.png"
													className="w-5 h-5 mr-3"
												/>
												Email
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												<img
													src="/img/webhook.png"
													className="w-5 h-5 mr-3"
												/>
												Webhooks
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
									</dl>
								</div>
								<div
									aria-hidden="true"
									className="ring-1 ring-gray-900/10 pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block"
								></div>
							</div>
						</div>
						<div>
							<p className="text-sm font-semibold leading-6 text-gray-900">
								Services
							</p>
							<div className="relative mt-6">
								<div
									aria-hidden="true"
									className="absolute inset-y-0 right-0 hidden w-1/2 rounded-lg bg-white shadow-sm sm:block"
								></div>
								<div className="ring-1 ring-gray-900/10 relative rounded-lg bg-white shadow-sm sm:rounded-none sm:bg-transparent sm:shadow-none sm:ring-0">
									<dl className="divide-y divide-gray-200 text-sm leading-6">
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Export to CSV
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Dedicated success
												manager
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Priority support
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
										<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
											<dt className="pr-4 text-gray-600 flex items-center">
												Pay by invoice
											</dt>
											<dd className="flex items-center justify-end sm:justify-center sm:px-4">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
													aria-hidden="true"
													className="mx-auto h-5 w-5 text-indigo-600"
												>
													<path
														fill-rule="evenodd"
														d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="sr-only">
													Yes
												</span>
											</dd>
										</div>
									</dl>
								</div>
								<div
									aria-hidden="true"
									className="ring-1 ring-gray-900/10 pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 rounded-lg sm:block"
								></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section
			aria-labelledby="comparison-heading"
			className="mt-20 hidden lg:block"
		>
			<p id="comparison-heading" className="sr-only">
				Feature comparison
			</p>
			<div className="grid grid-cols-4 gap-x-8 border-t border-gray-900/10 before:block">
				<div aria-hidden="true" className="-mt-px">
					<div className="border-transparent border-t-2 pt-10">
						<p className="text-gray-900 text-sm font-semibold leading-6">
							Pro
						</p>
						<p className="mt-1 text-sm leading-6 text-gray-600">
							Start taking control of your website
							feedback process.
						</p>
					</div>
				</div>
				<div aria-hidden="true" className="-mt-px">
					<div className="border-indigo-600 border-t-2 pt-10">
						<p className="text-indigo-600 text-sm font-semibold leading-6">
							Business
						</p>
						<p className="mt-1 text-sm leading-6 text-gray-600">
							Boost your website feedback process to
							the max.
						</p>
					</div>
				</div>
				<div aria-hidden="true" className="-mt-px">
					<div className="border-transparent border-t-2 pt-10">
						<p className="text-gray-900 text-sm font-semibold leading-6">
							Enterprise
						</p>
						<p className="mt-1 text-sm leading-6 text-gray-600">
							For your enterprise needs and priority
							support.
						</p>
					</div>
				</div>
			</div>
			<div className="mt-10 space-y-16">
				<div>
					<p className="text-sm font-semibold leading-6 text-gray-900">
						Usage
					</p>
					<div className="relative -mx-8 mt-10">
						<div
							className="absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
							aria-hidden="true"
						>
							<div className="h-full w-full rounded-lg bg-white shadow-sm"></div>
							<div className="h-full w-full rounded-lg bg-white shadow-sm"></div>
							<div className="h-full w-full rounded-lg bg-white shadow-sm"></div>
						</div>
						<table className="relative w-full border-separate border-spacing-x-8">
							<thead>
								<tr className="text-left">
									<th scope="col">
										<span className="sr-only">
											Feature
										</span>
									</th>
									<th scope="col">
										<span className="sr-only">
											Pro tier
										</span>
									</th>
									<th scope="col">
										<span className="sr-only">
											Business tier
										</span>
									</th>
									<th scope="col">
										<span className="sr-only">
											Enterprise tier
										</span>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="v-popper v-popper--theme-tooltip">
											<div className="flex items-center">
												Widgets
											</div>
										</div>
										<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<span className="text-gray-900 text-sm leading-6">
												2
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<span className="font-semibold text-indigo-600 text-sm leading-6">
												5
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<span className="text-gray-900 text-sm leading-6">
												Unlimited
											</span>
										</span>
									</td>
								</tr>
								<tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="v-popper v-popper--theme-tooltip">
											<div className="flex items-center">
												Forms
											</div>
										</div>
										<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<span className="text-gray-900 text-sm leading-6">
												2
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<span className="font-semibold text-indigo-600 text-sm leading-6">
												5
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<span className="text-gray-900 text-sm leading-6">
												Unlimited
											</span>
										</span>
									</td>
								</tr>
								<tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="v-popper v-popper--theme-tooltip">
											<div className="flex items-center">
												Projects
											</div>
										</div>
										<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<span className="text-gray-900 text-sm leading-6">
												1
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<span className="font-semibold text-indigo-600 text-sm leading-6">
												3
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<span className="text-gray-900 text-sm leading-6">
												Unlimited
											</span>
										</span>
									</td>
								</tr>
								{/* <tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="v-popper v-popper--theme-tooltip">
											<div className="flex items-center">
												Testimonials
											</div>
										</div>
										<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<span className="text-gray-900 text-sm leading-6">
												Unlimited Written Testimonials
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<span className="font-semibold text-indigo-600 text-sm leading-6">
                                                Unlimited Written Testimonials
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<span className="text-gray-900 text-sm leading-6">
                                                Unlimited Written Testimonials
											</span>
										</span>
									</td>
								</tr> */}
								<tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="v-popper v-popper--theme-tooltip">
											<div className="flex items-center">
												Reports
											</div>
										</div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<span className="text-gray-900 text-sm leading-6">
												XLSX, CSV
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<span className="font-semibold text-indigo-600 text-sm leading-6">
												XLSX, CSV
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<span className="text-gray-900 text-sm leading-6">
												XLSX, CSV
											</span>
										</span>
									</td>
								</tr>
							</tbody>
						</table>
						<div
							className="pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
							aria-hidden="true"
						>
							<div className="ring-1 ring-gray-900/10 rounded-lg"></div>
							<div className="ring-2 ring-indigo-600 rounded-lg"></div>
							<div className="ring-1 ring-gray-900/10 rounded-lg"></div>
						</div>
					</div>
				</div>
				<div>
					<p className="text-sm font-semibold leading-6 text-gray-900">
						Capture &amp; collect feedback
					</p>
					<div className="relative -mx-8 mt-10">
						<div
							className="absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
							aria-hidden="true"
						>
							<div className="h-full w-full rounded-lg bg-white shadow-sm"></div>
							<div className="h-full w-full rounded-lg bg-white shadow-sm"></div>
							<div className="h-full w-full rounded-lg bg-white shadow-sm"></div>
						</div>
						<table className="relative w-full border-separate border-spacing-x-8">
							<thead>
								<tr className="text-left">
									<th scope="col">
										<span className="sr-only">
											Feature
										</span>
									</th>
									<th scope="col">
										<span className="sr-only">
											Pro tier
										</span>
									</th>
									<th scope="col">
										<span className="sr-only">
											Business tier
										</span>
									</th>
									<th scope="col">
										<span className="sr-only">
											Enterprise tier
										</span>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="v-popper v-popper--theme-tooltip">
											<div className="flex items-center">
												Access to all widgets
											</div>
										</div>
										<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
								</tr>
								
								{/* <tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="v-popper v-popper--theme-tooltip">
											<div className="flex items-center">
												Annotation tools
											</div>
										</div>
										<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
								</tr> */}
								<tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="v-popper v-popper--theme-tooltip">
											<div className="flex items-center">
												Written testimonials
											</div>
										</div>
										<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
								</tr>
								<tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="v-popper v-popper--theme-tooltip">
											<div className="flex items-center">
                                                Custom metadata
											</div>
										</div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-gray-400"
											>
												<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
											</svg>
											<span className="sr-only">
												No
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
								</tr>
							</tbody>
						</table>
						<div
							className="pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
							aria-hidden="true"
						>
							<div className="ring-1 ring-gray-900/10 rounded-lg"></div>
							<div className="ring-2 ring-indigo-600 rounded-lg"></div>
							<div className="ring-1 ring-gray-900/10 rounded-lg"></div>
						</div>
					</div>
				</div>
				{/* <div>
					<p className="text-sm font-semibold leading-6 text-gray-900">
						Collaborate
					</p>
					<div className="relative -mx-8 mt-10">
						<div
							className="absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
							aria-hidden="true"
						>
							<div className="h-full w-full rounded-lg bg-white shadow-sm"></div>
							<div className="h-full w-full rounded-lg bg-white shadow-sm"></div>
							<div className="h-full w-full rounded-lg bg-white shadow-sm"></div>
						</div>
						<table className="relative w-full border-separate border-spacing-x-8">
							<thead>
								<tr className="text-left">
									<th scope="col">
										<span className="sr-only">
											Feature
										</span>
									</th>
									<th scope="col">
										<span className="sr-only">
											Pro tier
										</span>
									</th>
									<th scope="col">
										<span className="sr-only">
											Business tier
										</span>
									</th>
									<th scope="col">
										<span className="sr-only">
											Enterprise tier
										</span>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="v-popper v-popper--theme-tooltip">
											<div className="flex items-center">
												Feedback comments
											</div>
										</div>
										<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
								</tr>
								<tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="v-popper v-popper--theme-tooltip">
											<div className="flex items-center">
												Comment from
												integration
											</div>
										</div>
										<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
								</tr>
								<tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="v-popper v-popper--theme-tooltip">
											<div className="flex items-center">
												Feedback status
											</div>
										</div>
										<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
								</tr>
								<tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="v-popper v-popper--theme-tooltip">
											<div className="flex items-center">
												Integration status
												sync
											</div>
										</div>
										<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
								</tr>
								<tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="v-popper v-popper--theme-tooltip">
											<div className="flex items-center">
												Attachments
											</div>
										</div>
										<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
								</tr>
								<tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="v-popper v-popper--theme-tooltip">
											<div className="flex items-center">
												Notifications
											</div>
										</div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
								</tr>
							</tbody>
						</table>
						<div
							className="pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
							aria-hidden="true"
						>
							<div className="ring-1 ring-gray-900/10 rounded-lg"></div>
							<div className="ring-2 ring-indigo-600 rounded-lg"></div>
							<div className="ring-1 ring-gray-900/10 rounded-lg"></div>
						</div>
					</div>
				</div> */}
				<div>
					<p className="text-sm font-semibold leading-6 text-gray-900">
						Branding
					</p>
					<div className="relative -mx-8 mt-10">
						<div
							className="absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
							aria-hidden="true"
						>
							<div className="h-full w-full rounded-lg bg-white shadow-sm"></div>
							<div className="h-full w-full rounded-lg bg-white shadow-sm"></div>
							<div className="h-full w-full rounded-lg bg-white shadow-sm"></div>
						</div>
						<table className="relative w-full border-separate border-spacing-x-8">
							<thead>
								<tr className="text-left">
									<th scope="col">
										<span className="sr-only">
											Feature
										</span>
									</th>
									<th scope="col">
										<span className="sr-only">
											Pro tier
										</span>
									</th>
									<th scope="col">
										<span className="sr-only">
											Business tier
										</span>
									</th>
									<th scope="col">
										<span className="sr-only">
											Enterprise tier
										</span>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="v-popper v-popper--theme-tooltip">
											<div className="flex items-center">
												Customize widget
												colors
											</div>
										</div>
										<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-gray-400"
											>
												<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
											</svg>
											<span className="sr-only">
												No
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
								</tr>
								<tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="v-popper v-popper--theme-tooltip">
											<div className="flex items-center">
												Custom text
											</div>
										</div>
										<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-gray-400"
											>
												<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
											</svg>
											<span className="sr-only">
												No
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
								</tr>
                                <tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="v-popper v-popper--theme-tooltip">
											<div className="flex items-center">
												Own logo
											</div>
										</div>
										<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-gray-400"
											>
												<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
											</svg>
											<span className="sr-only">
												No
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
								</tr>
								<tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="v-popper v-popper--theme-tooltip">
											<div className="flex items-center">
												Remove &apos;Powered by&apos;
											</div>
										</div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-gray-400"
											>
												<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
											</svg>
											<span className="sr-only">
												No
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
								</tr>
							</tbody>
						</table>
						<div
							className="pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
							aria-hidden="true"
						>
							<div className="ring-1 ring-gray-900/10 rounded-lg"></div>
							<div className="ring-2 ring-indigo-600 rounded-lg"></div>
							<div className="ring-1 ring-gray-900/10 rounded-lg"></div>
						</div>
					</div>
				</div>
				{/* <div>
					<p className="text-sm font-semibold leading-6 text-gray-900">
						Integrations
					</p>
					<div className="relative -mx-8 mt-10">
						<div
							className="absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
							aria-hidden="true"
						>
							<div className="h-full w-full rounded-lg bg-white shadow-sm"></div>
							<div className="h-full w-full rounded-lg bg-white shadow-sm"></div>
							<div className="h-full w-full rounded-lg bg-white shadow-sm"></div>
						</div>
						<table className="relative w-full border-separate border-spacing-x-8">
							<thead>
								<tr className="text-left">
									<th scope="col">
										<span className="sr-only">
											Feature
										</span>
									</th>
									<th scope="col">
										<span className="sr-only">
											Pro tier
										</span>
									</th>
									<th scope="col">
										<span className="sr-only">
											Business tier
										</span>
									</th>
									<th scope="col">
										<span className="sr-only">
											Enterprise tier
										</span>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="flex items-center">
											<a
												href="/integrations/asana-visual-feedback/"
												className="inline-flex items-center"
											>
												<img
													src="/img/asana.png"
													className="w-6 h-6 mr-3"
												/>
												Asana
											</a>
										</div>
										<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
								</tr>
								<tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="flex items-center">
											<a
												href="/integrations/clickup-visual-feedback/"
												className="inline-flex items-center"
											>
												<img
													src="/img/clickup.png"
													className="w-6 h-6 mr-3"
												/>
												ClickUp
											</a>
										</div>
										<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
								</tr>
								<tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="flex items-center">
											<a
												href="/integrations/trello-visual-feedback/"
												className="inline-flex items-center"
											>
												<img
													src="/img/trello.png"
													className="w-6 h-6 mr-3"
												/>
												Trello
											</a>
										</div>
										<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
								</tr>
								<tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="flex items-center">
											<a
												href="/integrations/jira-visual-feedback/"
												className="inline-flex items-center"
											>
												<img
													src="/img/jira.png"
													className="w-6 h-6 mr-3"
												/>
												Jira
											</a>
										</div>
										<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
								</tr>
								<tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="flex items-center">
											<a
												href="/integrations/teamwork-visual-feedback/"
												className="inline-flex items-center"
											>
												<img
													src="/img/teamwork.png"
													className="w-6 h-6 mr-3"
												/>
												Teamwork
											</a>
										</div>
										<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
								</tr>
								<tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="flex items-center">
											<img
												src="/img/monday.png"
												className="w-6 h-6 mr-3"
											/>
											Monday
										</div>
										<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
								</tr>
								<tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="flex items-center">
											<img
												src="/img/gitlab.png"
												className="w-6 h-6 mr-3"
											/>
											Gitlab
										</div>
										<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
								</tr>
								<tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="flex items-center">
											<a
												href="/integrations/slack-issue-tracking/"
												className="inline-flex items-center"
											>
												<img
													src="/img/slack.png"
													className="w-6 h-6 mr-3"
												/>
												Slack
											</a>
										</div>
										<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
								</tr>
								<tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="flex items-center">
											<img
												src="/img/github.png"
												className="w-6 h-6 mr-3"
											/>
											Github
										</div>
										<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
								</tr>
								<tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="flex items-center">
											<a
												href="/integrations/notion-website-feedback/"
												className="inline-flex items-center"
											>
												<img
													src="/img/notion.png"
													className="w-6 h-6 mr-3"
												/>
												Notion
											</a>
										</div>
										<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
								</tr>
								<tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="flex items-center">
											<a
												href="/integrations/linear-issue-tracking/"
												className="inline-flex items-center"
											>
												<img
													src="/img/linear.svg"
													className="w-6 h-6 mr-3"
												/>
												Linear
											</a>
										</div>
										<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
								</tr>
								<tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="flex items-center">
											<a
												href="/integrations/shortcut-bug-tracking/"
												className="inline-flex items-center"
											>
												<img
													src="/img/shortcut.png"
													className="w-6 h-6 mr-3"
												/>
												Shortcut
											</a>
										</div>
										<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
								</tr>
								<tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="flex items-center">
											<img
												src="/img/email.png"
												className="w-6 h-6 mr-3"
											/>
											Email
										</div>
										<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
								</tr>
								<tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="flex items-center">
											<img
												src="/img/webhook.png"
												className="w-6 h-6 mr-3"
											/>
											Webhooks
										</div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
								</tr>
							</tbody>
						</table>
						<div
							className="pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
							aria-hidden="true"
						>
							<div className="ring-1 ring-gray-900/10 rounded-lg"></div>
							<div className="ring-2 ring-indigo-600 rounded-lg"></div>
							<div className="ring-1 ring-gray-900/10 rounded-lg"></div>
						</div>
					</div>
				</div> */}
				<div>
					<p className="text-sm font-semibold leading-6 text-gray-900">
						Services
					</p>
					<div className="relative -mx-8 mt-10">
						<div
							className="absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
							aria-hidden="true"
						>
							<div className="h-full w-full rounded-lg bg-white shadow-sm"></div>
							<div className="h-full w-full rounded-lg bg-white shadow-sm"></div>
							<div className="h-full w-full rounded-lg bg-white shadow-sm"></div>
						</div>
						<table className="relative w-full border-separate border-spacing-x-8">
							<thead>
								<tr className="text-left">
									<th scope="col">
										<span className="sr-only">
											Feature
										</span>
									</th>
									<th scope="col">
										<span className="sr-only">
											Pro tier
										</span>
									</th>
									<th scope="col">
										<span className="sr-only">
											Business tier
										</span>
									</th>
									<th scope="col">
										<span className="sr-only">
											Enterprise tier
										</span>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="v-popper v-popper--theme-tooltip">
											<div className="flex items-center">
												Export to CSV
											</div>
										</div>
										<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-gray-400"
											>
												<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
											</svg>
											<span className="sr-only">
												No
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
								</tr>
								{/* <tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="v-popper v-popper--theme-tooltip">
											<div className="flex items-center">
												Dedicated success
												manager
											</div>
										</div>
										<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-gray-400"
											>
												<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
											</svg>
											<span className="sr-only">
												No
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-gray-400"
											>
												<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
											</svg>
											<span className="sr-only">
												No
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
								</tr> */}
								<tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="v-popper v-popper--theme-tooltip">
											<div className="flex items-center">
												Priority support
											</div>
										</div>
										<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-gray-400"
											>
												<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
											</svg>
											<span className="sr-only">
												No
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-gray-400"
											>
												<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
											</svg>
											<span className="sr-only">
												No
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
								</tr>
								<tr>
									<th
										scope="row"
										className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
									>
										<div className="v-popper v-popper--theme-tooltip">
											<div className="flex items-center">
												Pay by invoice
											</div>
										</div>
									</th>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-gray-400"
											>
												<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
											</svg>
											<span className="sr-only">
												No
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-gray-400"
											>
												<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
											</svg>
											<span className="sr-only">
												No
											</span>
										</span>
									</td>
									<td className="relative w-1/4 px-4 py-0 text-center">
										<span className="relative h-full w-full py-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												className="mx-auto h-5 w-5 text-indigo-600"
											>
												<path
													fill-rule="evenodd"
													d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
													clip-rule="evenodd"
												></path>
											</svg>
											<span className="sr-only">
												Yes
											</span>
										</span>
									</td>
								</tr>
							</tbody>
						</table>
						<div
							className="pointer-events-none absolute inset-x-8 inset-y-0 grid grid-cols-4 gap-x-8 before:block"
							aria-hidden="true"
						>
							<div className="ring-1 ring-gray-900/10 rounded-lg"></div>
							<div className="ring-2 ring-indigo-600 rounded-lg"></div>
							<div className="ring-1 ring-gray-900/10 rounded-lg"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</div>
	);
}
