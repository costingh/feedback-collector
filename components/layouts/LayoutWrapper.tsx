// components/LayoutWrapper.tsx

import { ReactNode } from "react";
import { checkSubscription } from "@/lib/subscription";
import { checkTrial } from "@/lib/trial";
import Sidebar from "@/components/sidebar";
import TrialPopup from "@/components/popups/TrialPopup";

interface LayoutWrapperProps {
	children: ReactNode;
}

export default async function LayoutWrapper({ children }: LayoutWrapperProps) {
	const isPro = await checkSubscription();
	const isTrial = await checkTrial();
	const apiLimitCount = 100; // Set default or customize per layout as needed

	return (
		<div className="h-full relative bg-white">
			<div className="hidden h-full md:flex md:w-[255px] md:flex-col md:fixed md:inset-y-0 z-80 border-r-[1px] border-gray-200">
				<Sidebar isPro={isPro!} apiLimitCount={apiLimitCount} />
			</div>

			{/* Render content if trial is active or user is pro */}
			{(isTrial || isPro) && (
				<main className="md:pl-[255px]">{children}</main>
			)}

			{/* Show trial expired popup */}
			{!isTrial && !isPro && (
				<main className="md:pl-[255px] flex items-center justify-center min-h-screen bg-gray-100">
					<TrialPopup />
				</main>
			)}
		</div>
	);
}
