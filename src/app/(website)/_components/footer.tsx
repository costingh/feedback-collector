import Link from 'next/link'
import React from 'react'
import Logo from './logo'
import { LinkedInLogoIcon } from '@radix-ui/react-icons'

function Footer() {
	return (
		<>
			<div className="w-full flex py-10">
				<div className="w-[30%] flex flex-col gap-5">
					<Logo />
					<p>Built with 🧠 in 🇷🇴</p>
					<Link href="https://www.linkedin.com/company/feedbackz-co/" target="_blank" className="flex items-center gap-2">
						<LinkedInLogoIcon className="w-4 h-4" />
						<span>
							Follow us on LinkedIn
						</span>
					</Link>

				</div>
				<div className="w-[70%] flex items-start justify-between">
					<div className="w-[25%] flex flex-col gap-3">
						<h3 className="text-[15px] font-semibold text-gray-900">
							Product
						</h3>

						<Link
							href="/#features"
							className="text-[15px] text-gray-500 cursor-pointer transition-all hover:pl-2 hover:text-gray-900 font-[300]"
						>
							Features
						</Link>
						<Link
							href="/#faq"
							className="text-[15px] text-gray-500 cursor-pointer transition-all hover:pl-2 hover:text-gray-900 font-[300]"
						>
							FAQ
						</Link>
						<Link
							href="/feedbackz-pricing"
							className="text-[15px] text-gray-500 cursor-pointer transition-all hover:pl-2 hover:text-gray-900 font-[300]"
						>
							Pricing
						</Link>
						<Link
							href="/auth/sign-in"
							className="text-[15px] text-gray-500 cursor-pointer transition-all hover:pl-2 hover:text-gray-900 font-[300]"
						>
							Sign In
						</Link>
						<Link
							href="/auth/sign-up"
							className="text-[15px] text-gray-500 cursor-pointer transition-all hover:pl-2 hover:text-gray-900 font-[300]"
						>
							Register
						</Link>
					</div>

					<div className="w-[25%] flex flex-col gap-3">
						<h3 className="text-[15px] font-semibold text-gray-900">
							Legal
						</h3>
						<Link
							href="/tos"
							className="text-[15px] text-gray-500 cursor-pointer transition-all hover:pl-2 hover:text-gray-900 font-[300]"
						>
							Terms of Service
						</Link>
						<Link
							href="/privacy-policy"
							className="text-[15px] text-gray-500 cursor-pointer transition-all hover:pl-2 hover:text-gray-900 font-[300]"
						>
							Privacy Policy
						</Link>
						{/* <Link
							href="#"
							className="text-[15px] text-gray-500 cursor-pointer transition-all hover:pl-2 hover:text-gray-900 font-[300]"
						>
							Features
						</Link>
						<Link
							href="#"
							className="text-[15px] text-gray-500 cursor-pointer transition-all hover:pl-2 hover:text-gray-900 font-[300]"
						>
							Integrations
						</Link> */}
					</div>

					<div className="w-[25%] flex flex-col gap-3">
						<h3 className="text-[15px] font-semibold text-gray-900">
							Blog
						</h3>
						<Link
							href="#"
							className="text-[15px] text-gray-500 cursor-pointer transition-all hover:pl-2 hover:text-gray-900 font-[300]"
						>
							How to use Feedbackz
						</Link>
						<Link
							href="#"
							className="text-[15px] text-gray-500 cursor-pointer transition-all hover:pl-2 hover:text-gray-900 font-[300]"
						>
							How to get more reviews
						</Link>
						<Link
							href="#"
							className="text-[15px] text-gray-500 cursor-pointer transition-all hover:pl-2 hover:text-gray-900 font-[300]"
						>
							How to get more testimonials
						</Link>
					</div>

					<div className="w-[25%] flex flex-col gap-3">
						<h3 className="text-[15px] font-semibold text-gray-900">
							More
						</h3>
						<Link
							href="#"
							className="text-[15px] text-gray-500 cursor-pointer transition-all hover:pl-2 hover:text-gray-900 font-[300]"
						>
							Support
						</Link>
						<Link
							href="mailto:gheorghe.costin2001@yahoo.com"
							className="text-[15px] text-gray-500 cursor-pointer transition-all hover:pl-2 hover:text-gray-900 font-[300]"
						>
							Contact
						</Link>
						{/* <Link
							href="#"
							className="text-[15px] text-gray-500 cursor-pointer transition-all hover:pl-2 hover:text-gray-900 font-[300]"
						>
							Integrations
						</Link> */}
					</div>
				</div>
			</div>
			<div className="w-full text-center py-5 text-[15px] text-gray-500 font-[300] border-t-[1px] border-gray-200">
				© 2025 Feedbackz. All rights reserved.
			</div>
		</>
	)
}

export default Footer
