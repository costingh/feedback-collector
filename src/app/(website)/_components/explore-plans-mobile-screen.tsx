import React from 'react'
import { CheckIcon } from './icons/check-icon'
import { XIcon } from './icons/x-icon'

function ExplorePlansMobileScreen() {
	return (
		<>
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
								Start taking control of your website feedback
								process.
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
													Workspaces
												</dt>
												<dd className="flex items-center justify-end sm:justify-center sm:px-4">
													<span className="text-gray-900">
														1
													</span>
												</dd>
											</div>
											<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
												<dt className="pr-4 text-gray-600 flex items-center">
													Forms
												</dt>
												<dd className="flex items-center justify-end sm:justify-center sm:px-4">
													<span className="text-gray-900">
														1
													</span>
												</dd>
											</div>
											<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
												<dt className="pr-4 text-gray-600 flex items-center">
													Written Testimonials
												</dt>
												<dd className="flex items-center justify-end sm:justify-center sm:px-4">
													<span className="text-gray-900">
														Unlimited
													</span>
												</dd>
											</div>

											<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
												<dt className="pr-4 text-gray-600 flex items-center">
													Tags
												</dt>
												<dd className="flex items-center justify-end sm:justify-center sm:px-4">
													<span className="text-gray-900">
														Unlimited
													</span>
												</dd>
											</div>
											<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
												<dt className="pr-4 text-gray-600 flex items-center">
													Reports
												</dt>
												<dd className="flex items-center justify-end sm:justify-center sm:px-4">
													<span className="text-gray-900">
														XLSX, CSV
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
													Access to all widgets
												</dt>
												<dd className="flex items-center justify-end sm:justify-center sm:px-4">
													<CheckIcon />
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
													<CheckIcon />
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
													<XIcon />
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
													Customize widget colors
												</dt>
												<dd className="flex items-center justify-end sm:justify-center sm:px-4">
													<CheckIcon />
													<span className="sr-only">
														Yes
													</span>
												</dd>
											</div>
											<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
												<dt className="pr-4 text-gray-600 flex items-center">
													Custom Text
												</dt>
												<dd className="flex items-center justify-end sm:justify-center sm:px-4">
													<CheckIcon />
													<span className="sr-only">
														Yes
													</span>
												</dd>
											</div>
											<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
												<dt className="pr-4 text-gray-600 flex items-center">
													Own Logo
												</dt>
												<dd className="flex items-center justify-end sm:justify-center sm:px-4">
													<XIcon />
													<span className="sr-only">
														No
													</span>
												</dd>
											</div>
											<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
												<dt className="pr-4 text-gray-600 flex items-center">
													Remove &apos;Powered
													by&apos;
												</dt>
												<dd className="flex items-center justify-end sm:justify-center sm:px-4">
													<XIcon />
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
													<CheckIcon />
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
													<XIcon />
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
													<XIcon />
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
								Boost your website feedback process to the max.
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
													Workspaces
												</dt>
												<dd className="flex items-center justify-end sm:justify-center sm:px-4">
													<span className="font-semibold text-indigo-600">
														3
													</span>
												</dd>
											</div>
											<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
												<dt className="pr-4 text-gray-600 flex items-center">
													Forms
												</dt>
												<dd className="flex items-center justify-end sm:justify-center sm:px-4">
													<span className="font-semibold text-indigo-600">
														Unlimited
													</span>
												</dd>
											</div>
											<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
												<dt className="pr-4 text-gray-600 flex items-center">
													Written Testimonials
												</dt>
												<dd className="flex items-center justify-end sm:justify-center sm:px-4">
													<span className="font-semibold text-indigo-600">
														Unlimited
													</span>
												</dd>
											</div>
											<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
												<dt className="pr-4 text-gray-600 flex items-center">
													Tags
												</dt>
												<dd className="flex items-center justify-end sm:justify-center sm:px-4">
													<span className="font-semibold text-indigo-600">
														Unlimited
													</span>
												</dd>
											</div>
											<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
												<dt className="pr-4 text-gray-600 flex items-center">
													Reports
												</dt>
												<dd className="flex items-center justify-end sm:justify-center sm:px-4">
													<span className="font-semibold text-indigo-600">
														XLSX, CSV
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
													Access to all widgets
												</dt>
												<dd className="flex items-center justify-end sm:justify-center sm:px-4">
													<CheckIcon />
													<span className="sr-only">
														Yes
													</span>
												</dd>
											</div>
											<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
												<dt className="pr-4 text-gray-600 flex items-center">
													Written testimonials
												</dt>
												<dd className="flex items-center justify-end sm:justify-center sm:px-4">
													<CheckIcon />
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
													<XIcon />
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
													Customize widget colors
												</dt>
												<dd className="flex items-center justify-end sm:justify-center sm:px-4">
													<CheckIcon />
													<span className="sr-only">
														Yes
													</span>
												</dd>
											</div>
											<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
												<dt className="pr-4 text-gray-600 flex items-center">
													Custom Text
												</dt>
												<dd className="flex items-center justify-end sm:justify-center sm:px-4">
													<CheckIcon />
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
													<CheckIcon />
													<span className="sr-only">
														Yes
													</span>
												</dd>
											</div>
											<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
												<dt className="pr-4 text-gray-600 flex items-center">
													Remove &apos;Powered
													by&apos;
												</dt>
												<dd className="flex items-center justify-end sm:justify-center sm:px-4">
													<CheckIcon />
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
													<CheckIcon />
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
													<XIcon />
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
													<XIcon />
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
								For your enterprise needs and priority support.
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
													Workspaces
												</dt>
												<dd className="flex items-center justify-end sm:justify-center sm:px-4">
													<span className="text-gray-900">
														Unlimited
													</span>
												</dd>
											</div>
											<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
												<dt className="pr-4 text-gray-600 flex items-center">
													Forms
												</dt>
												<dd className="flex items-center justify-end sm:justify-center sm:px-4">
													<span className="text-gray-900">
														Unlimited
													</span>
												</dd>
											</div>
											<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
												<dt className="pr-4 text-gray-600 flex items-center">
													Written Testimonials
												</dt>
												<dd className="flex items-center justify-end sm:justify-center sm:px-4">
													<span className="text-gray-900">
														Unlimited
													</span>
												</dd>
											</div>
											<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
												<dt className="pr-4 text-gray-600 flex items-center">
													Tags
												</dt>
												<dd className="flex items-center justify-end sm:justify-center sm:px-4">
													<span className="text-gray-900">
														Unlimited
													</span>
												</dd>
											</div>
											<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
												<dt className="pr-4 text-gray-600 flex items-center">
													Reports
												</dt>
												<dd className="flex items-center justify-end sm:justify-center sm:px-4">
													<span className="text-gray-900">
														Unlimited
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
													Access to all widgets
												</dt>
												<dd className="flex items-center justify-end sm:justify-center sm:px-4">
													<CheckIcon />
													<span className="sr-only">
														Yes
													</span>
												</dd>
											</div>
											<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
												<dt className="pr-4 text-gray-600 flex items-center">
													Written testimonials
												</dt>
												<dd className="flex items-center justify-end sm:justify-center sm:px-4">
													<CheckIcon />
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
													<CheckIcon />
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
													Customize widget colors
												</dt>
												<dd className="flex items-center justify-end sm:justify-center sm:px-4">
													<CheckIcon />
													<span className="sr-only">
														Yes
													</span>
												</dd>
											</div>
											<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
												<dt className="pr-4 text-gray-600 flex items-center">
													Custom text
												</dt>
												<dd className="flex items-center justify-end sm:justify-center sm:px-4">
													<CheckIcon />
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
													<CheckIcon />
													<span className="sr-only">
														Yes
													</span>
												</dd>
											</div>
											<div className="flex items-center justify-between px-4 py-3 sm:grid sm:grid-cols-2 sm:px-0">
												<dt className="pr-4 text-gray-600 flex items-center">
													Remove &apos;Powered
													by&apos;
												</dt>
												<dd className="flex items-center justify-end sm:justify-center sm:px-4">
													<CheckIcon />
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
													<CheckIcon />
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
													<CheckIcon />
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
													<CheckIcon />
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
		</>
	)
}

export default ExplorePlansMobileScreen
