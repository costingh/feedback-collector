import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
	return (
		<Link href="/">
			<div>
				<Image width={200} height={35} alt="Feedbackz." src="/logo-full.png" />
			</div>
		</Link>
	);
}

export default Logo;
