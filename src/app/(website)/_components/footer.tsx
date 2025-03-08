import Link from "next/link";
import React from "react";
import Logo from "./logo";

function Footer() {
	return (
		<>
			<div className="w-full flex py-10">
				<div className="w-[30%] flex flex-col gap-5">
					<Logo />
					<p>Built with 🧠 in 🇷🇴</p>
				</div>
				<div className="w-[70%] flex items-start justify-between">
					<div className="w-[25%] flex flex-col gap-3">
						<h3 className="text-[15px] font-semibold text-gray-900">
							Product
						</h3>
						<Link
							href="#"
							className="text-[15px] text-gray-500 cursor-pointer transition-all hover:pl-2 hover:text-gray-900 font-[300]"
						>
							Sign In
						</Link>
						<Link
							href="#"
							className="text-[15px] text-gray-500 cursor-pointer transition-all hover:pl-2 hover:text-gray-900 font-[300]"
						>
							Register
						</Link>
						<Link
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
						</Link>
					</div>

					<div className="w-[25%] flex flex-col gap-3">
						<h3 className="text-[15px] font-semibold text-gray-900">
							Product
						</h3>
						<Link
							href="#"
							className="text-[15px] text-gray-500 cursor-pointer transition-all hover:pl-2 hover:text-gray-900 font-[300]"
						>
							Sign In
						</Link>
						<Link
							href="#"
							className="text-[15px] text-gray-500 cursor-pointer transition-all hover:pl-2 hover:text-gray-900 font-[300]"
						>
							Register
						</Link>
						<Link
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
						</Link>
					</div>

					<div className="w-[25%] flex flex-col gap-3">
						<h3 className="text-[15px] font-semibold text-gray-900">
							Product
						</h3>
						<Link
							href="#"
							className="text-[15px] text-gray-500 cursor-pointer transition-all hover:pl-2 hover:text-gray-900 font-[300]"
						>
							Sign In
						</Link>
						<Link
							href="#"
							className="text-[15px] text-gray-500 cursor-pointer transition-all hover:pl-2 hover:text-gray-900 font-[300]"
						>
							Register
						</Link>
						<Link
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
						</Link>
					</div>

					<div className="w-[25%] flex flex-col gap-3">
						<h3 className="text-[15px] font-semibold text-gray-900">
							Product
						</h3>
						<Link
							href="#"
							className="text-[15px] text-gray-500 cursor-pointer transition-all hover:pl-2 hover:text-gray-900 font-[300]"
						>
							Sign In
						</Link>
						<Link
							href="#"
							className="text-[15px] text-gray-500 cursor-pointer transition-all hover:pl-2 hover:text-gray-900 font-[300]"
						>
							Register
						</Link>
						<Link
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
						</Link>
					</div>
				</div>
			</div>
			<div className="w-full text-center py-5 text-[15px] text-gray-500 font-[300] border-t-[1px] border-gray-200">
				© 2024 Feedbackz. All rights reserved.
			</div>
		</>
	);
}

export default Footer;
