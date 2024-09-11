/**
 * v0 by Vercel.
 * @see https://v0.dev/t/HTpf71UBNhz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Waitlist() {
	return (
		<div className="bg-gray-50">
			<div className="py-12 lg:py-16 xl:py-24">
				<div className="container px-4 md:px-6">
					<div className="grid items-center gap-12 lg:grid-cols-2 xl:gap-20">
						<div className="space-y-4">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								Get early access
							</h1>
							<p className="text-gray-500 md:text-xl dark:text-gray-400">
								Sign up to get notified when we launch. Be the
								first to access our new product.
							</p>
							<form className="flex flex-col gap-2 md:flex-row md:gap-4 lg:gap-2">
								<Input
									type="email"
									placeholder="Enter your email"
									className="max-w-sm md:max-w-none"
								/>
								<Button
									type="submit"
									className="w-full md:w-auto"
								>
									Sign Up
								</Button>
							</form>
						</div>
						<img
							src="/demo/demo-create-form.png"
							width="600"
							// height="336"
							alt="Hero"
							className="mx-auto aspect-video overflow-hidden rounded-xl border-[1px] border-[#000]"
						/>
					</div>
				</div>
			</div>
			<div className="border-t border-gray-200">
				<div className="container px-4 md:px-6">
					<div className="grid gap-12 lg:grid-cols-2 xl:gap-20">
						<div className="flex flex-col justify-center space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
								Beautifully designed
								<span className="text-blue-600">
									{" "}
									components
								</span>
							</h2>
							<p className="text-gray-500 md:text-xl dark:text-gray-400">
								Accessible. Customizable. Open Source.
							</p>
						</div>
						<div className="">
							<div className="flex flex-col items-center space-y-2">
								<img
									src="/demo/demo-customize-form.png"
									width="1200"
									// height="200"
									alt="Feature 1"
									className="aspect-square object-cover rounded-lg overflow-hidden"
								/>
								<div className="flex flex-col items-center space-y-2">
									<h3 className="font-semibold">Feature 1</h3>
									<p className="text-sm text-center text-gray-500 md:text-base dark:text-gray-400">
										Description for feature 1 goes here. It
										can span multiple lines.
									</p>
								</div>
							</div>
							<div className="flex flex-col items-center space-y-2">
								<img
									src="/demo/demo-testimonials-list.png"
									width="600"
									// height="200"
									alt="Feature 2"
									className="aspect-square object-cover rounded-lg overflow-hidden"
								/>
								<div className="flex flex-col items-center space-y-2">
									<h3 className="font-semibold">Feature 2</h3>
									<p className="text-sm text-center text-gray-500 md:text-base dark:text-gray-400">
										Description for feature 2 goes here. It
										can span multiple lines.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="py-12 lg:py-16 xl:py-24">
				<div className="container flex flex-col items-center px-4 md:px-6 space-y-4">
					<div className="text-center space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
							Join the waitlist
						</h2>
						<p className="text-gray-500 md:text-base dark:text-gray-400">
							Enter your email to get early access to our new
							product and exclusive benefits.
						</p>
					</div>
					<form className="flex flex-col gap-2 md:flex-row md:gap-4">
						<Input
							type="email"
							placeholder="Enter your email"
							className="max-w-sm md:max-w-none"
						/>
						<Button type="submit" className="w-full md:w-auto">
							Sign Up
						</Button>
					</form>
				</div>
			</div>
			<div className="bg-gray-900">
				<div className="container flex flex-col items-center justify-center py-6 text-center md:flex-row md:py-4">
					<p className="text-sm text-gray-500 md:text-base dark:text-gray-400">
						&copy; 2024 Feedbackz. All rights reserved.
					</p>
					<div className="flex items-center space-x-4 md:ml-auto">
                        <p className="text-gray-500 hover:text-gray-300 dark:hover:text-gray-400">costin@feedbackz.co</p>
						{/* <Link
							href="#"
							className="text-gray-500 hover:text-gray-300 dark:hover:text-gray-400"
							prefetch={false}
						>
							<TwitterIcon className="w-5 h-5" />
							<span className="sr-only">Twitter</span>
						</Link>
						<Link
							href="#"
							className="text-gray-500 hover:text-gray-300 dark:hover:text-gray-400"
							prefetch={false}
						>
							<GithubIcon className="w-5 h-5" />
							<span className="sr-only">GitHub</span>
						</Link>
						<Link
							href="#"
							className="text-gray-500 hover:text-gray-300 dark:hover:text-gray-400"
							prefetch={false}
						>
							<DiscIcon className="w-5 h-5" />
							<span className="sr-only">Discord</span>
						</Link> */}
					</div>
				</div>
			</div>
		</div>
	);
}

function DiscIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
			<circle cx="12" cy="12" r="2" />
		</svg>
	);
}

function GithubIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
			<path d="M9 18c-4.51 2-5-2-7-2" />
		</svg>
	);
}

function TwitterIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
		</svg>
	);
}
