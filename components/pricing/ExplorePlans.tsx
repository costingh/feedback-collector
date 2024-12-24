import { CheckIcon } from "../icons/CheckIcon";
import { XIcon } from "../icons/XIcon";
import ExplorePlansMobileScreen from "./ExplorePlansMobileScreen";

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
				<ExplorePlansMobileScreen/>
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
									Boost your website feedback process to the
									max.
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
														Workspaces
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
										<tr>
											<th
												scope="row"
												className="w-1/4 py-3 pr-4 text-left text-sm font-normal leading-6 text-gray-900"
											>
												<div className="v-popper v-popper--theme-tooltip">
													<div className="flex items-center">
														Written Testimonials
													</div>
												</div>
												<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
											</th>
											<td className="relative w-1/4 px-4 py-0 text-center">
												<span className="relative h-full w-full py-3">
													<span className="text-gray-900 text-sm leading-6">
														Unlimited
													</span>
												</span>
											</td>
											<td className="relative w-1/4 px-4 py-0 text-center">
												<span className="relative h-full w-full py-3">
													<span className="font-semibold text-indigo-600 text-sm leading-6">
														Unlimited
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
														Tags
													</div>
												</div>
												<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
											</th>
											<td className="relative w-1/4 px-4 py-0 text-center">
												<span className="relative h-full w-full py-3">
													<span className="text-gray-900 text-sm leading-6">
														Unlimited
													</span>
												</span>
											</td>
											<td className="relative w-1/4 px-4 py-0 text-center">
												<span className="relative h-full w-full py-3">
													<span className="font-semibold text-indigo-600 text-sm leading-6">
														Unlimited
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
													<CheckIcon />
													<span className="sr-only">
														Yes
													</span>
												</span>
											</td>
											<td className="relative w-1/4 px-4 py-0 text-center">
												<span className="relative h-full w-full py-3">
													<CheckIcon />
													<span className="sr-only">
														Yes
													</span>
												</span>
											</td>
											<td className="relative w-1/4 px-4 py-0 text-center">
												<span className="relative h-full w-full py-3">
													<CheckIcon />
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
														Written testimonials
													</div>
												</div>
												<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
											</th>
											<td className="relative w-1/4 px-4 py-0 text-center">
												<span className="relative h-full w-full py-3">
													<CheckIcon />
													<span className="sr-only">
														Yes
													</span>
												</span>
											</td>
											<td className="relative w-1/4 px-4 py-0 text-center">
												<span className="relative h-full w-full py-3">
													<CheckIcon />
													<span className="sr-only">
														Yes
													</span>
												</span>
											</td>
											<td className="relative w-1/4 px-4 py-0 text-center">
												<span className="relative h-full w-full py-3">
													<CheckIcon />
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
													<XIcon />
													<span className="sr-only">
														No
													</span>
												</span>
											</td>
											<td className="relative w-1/4 px-4 py-0 text-center">
												<span className="relative h-full w-full py-3">
													<CheckIcon />
													<span className="sr-only">
														Yes
													</span>
												</span>
											</td>
											<td className="relative w-1/4 px-4 py-0 text-center">
												<span className="relative h-full w-full py-3">
													<CheckIcon />

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
														Customize widget colors
													</div>
												</div>
												<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
											</th>
											<td className="relative w-1/4 px-4 py-0 text-center">
												<span className="relative h-full w-full py-3">
													<XIcon />
													<span className="sr-only">
														No
													</span>
												</span>
											</td>
											<td className="relative w-1/4 px-4 py-0 text-center">
												<span className="relative h-full w-full py-3">
													<CheckIcon />
													<span className="sr-only">
														Yes
													</span>
												</span>
											</td>
											<td className="relative w-1/4 px-4 py-0 text-center">
												<span className="relative h-full w-full py-3">
													<CheckIcon />
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
													<XIcon />
													<span className="sr-only">
														No
													</span>
												</span>
											</td>
											<td className="relative w-1/4 px-4 py-0 text-center">
												<span className="relative h-full w-full py-3">
													<CheckIcon />
													<span className="sr-only">
														Yes
													</span>
												</span>
											</td>
											<td className="relative w-1/4 px-4 py-0 text-center">
												<span className="relative h-full w-full py-3">
													<CheckIcon />
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
													<XIcon />
													<span className="sr-only">
														No
													</span>
												</span>
											</td>
											<td className="relative w-1/4 px-4 py-0 text-center">
												<span className="relative h-full w-full py-3">
													<CheckIcon />
													<span className="sr-only">
														Yes
													</span>
												</span>
											</td>
											<td className="relative w-1/4 px-4 py-0 text-center">
												<span className="relative h-full w-full py-3">
													<CheckIcon />
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
														Remove &apos;Powered
														by&apos;
													</div>
												</div>
											</th>
											<td className="relative w-1/4 px-4 py-0 text-center">
												<span className="relative h-full w-full py-3">
													<XIcon />
													<span className="sr-only">
														No
													</span>
												</span>
											</td>
											<td className="relative w-1/4 px-4 py-0 text-center">
												<span className="relative h-full w-full py-3">
													<CheckIcon />
													<span className="sr-only">
														Yes
													</span>
												</span>
											</td>
											<td className="relative w-1/4 px-4 py-0 text-center">
												<span className="relative h-full w-full py-3">
													<CheckIcon />
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
													<CheckIcon />
													<span className="sr-only">
														Yes
													</span>
												</span>
											</td>
											<td className="relative w-1/4 px-4 py-0 text-center">
												<span className="relative h-full w-full py-3">
													<CheckIcon />
													<span className="sr-only">
														Yes
													</span>
												</span>
											</td>
											<td className="relative w-1/4 px-4 py-0 text-center">
												<span className="relative h-full w-full py-3">
													<CheckIcon />
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
														Priority support
													</div>
												</div>
												<div className="absolute inset-x-8 mt-3 h-px bg-gray-200"></div>
											</th>
											<td className="relative w-1/4 px-4 py-0 text-center">
												<span className="relative h-full w-full py-3">
													<XIcon />
													<span className="sr-only">
														No
													</span>
												</span>
											</td>
											<td className="relative w-1/4 px-4 py-0 text-center">
												<span className="relative h-full w-full py-3">
													<XIcon />
													<span className="sr-only">
														No
													</span>
												</span>
											</td>
											<td className="relative w-1/4 px-4 py-0 text-center">
												<span className="relative h-full w-full py-3">
													<CheckIcon />
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
													<XIcon />
													<span className="sr-only">
														No
													</span>
												</span>
											</td>
											<td className="relative w-1/4 px-4 py-0 text-center">
												<span className="relative h-full w-full py-3">
													<XIcon />
													<span className="sr-only">
														No
													</span>
												</span>
											</td>
											<td className="relative w-1/4 px-4 py-0 text-center">
												<span className="relative h-full w-full py-3">
													<CheckIcon />
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
