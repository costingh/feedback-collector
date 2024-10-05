import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
	return (
		<Link href="/" className="flex items-center">
			<div className="relative h-8 w-8 mr-4">
				<Image fill alt="Logo" src="/logo.png" />
			</div>
			<h1
				className={cn(
					"fredoka text-[26px] font-[900] text-[#000] relative"
				)}
			>
				Feedbackz
				<span className="w-[6px] h-[6px] bg-green-400 rounded-full absolute right-[-10px] bottom-[5px]"></span>
			</h1>
		</Link>
	);
}

export default Logo;
