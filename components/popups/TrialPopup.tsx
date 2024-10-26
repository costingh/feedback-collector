"use client";

import { Lock } from "lucide-react";
import React, { ReactNode } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

function TrialPopup({ children }: { children: ReactNode }) {
	const pathname = usePathname();

	return (
		<>
			{!pathname?.includes("/settings") &&
			!pathname?.includes("/subscription") ? (
				<main className="md:pl-[255px] flex items-center justify-center min-h-screen bg-gray-100">
					<div className="max-w-lg w-full bg-white shadow-md rounded-[15px] p-8 text-center">
						<Lock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
						<h1 className="text-2xl font-semibold text-gray-800">
							Your Trial has Expired
						</h1>
						<p className="text-gray-500 mt-2">
							Upgrade to unlock all features and continue using
							the platform.
						</p>

						<div className="mt-6 space-y-4">
							<Link href="/feedbackz-pricing">
								<Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700">
									Upgrade to Pro
								</Button>
							</Link>
							<div className="my-2"></div>
							<Link href="/feedbackz-pricing">
								<Button
									variant="outline"
									className="w-full text-indigo-600 border-indigo-600 hover:bg-indigo-100"
								>
									Learn More
								</Button>
							</Link>
						</div>

						<div>
							<div className="text-sm text-gray-400 mt-6">
								Need help?{" "}
								<Link
									href="/support"
									className="text-indigo-600 hover:underline"
								>
									Contact Support
								</Link>
							</div>
						</div>
					</div>
				</main>
			) : (
				<>
					<main className="md:pl-[255px]">{children}</main>
				</>
			)}
		</>
	);
}

export default TrialPopup;
