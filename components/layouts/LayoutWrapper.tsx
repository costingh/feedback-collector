import { ReactNode } from "react";
import { checkSubscription } from "@/lib/subscription";
import { checkTrial } from "@/lib/trial";
import Sidebar from "@/components/sidebar";
import TrialPopup from "@/components/popups/TrialPopup";

interface LayoutWrapperProps {
	children: ReactNode;
	projectName: string;
}

export default async function LayoutWrapper({
	children,
	projectName,
}: LayoutWrapperProps) {
	const isPro = await checkSubscription();
	const isTrial = await checkTrial();
	const apiLimitCount = 100; 

	return (
		<div className="h-full relative bg-white">
			<div className="hidden h-full md:flex md:w-[255px] md:flex-col md:fixed md:inset-y-0 z-80 border-r-[1px] border-gray-200">
				<Sidebar isPro={isPro!} apiLimitCount={apiLimitCount} projectName={projectName} />
			</div>

			{/* Render content if trial is active or user is pro */}
			{/* or Show trial expired popup */}
			{isTrial || isPro ? (
				<main className="md:pl-[255px]">{children}</main>
			) : (
				<TrialPopup>{children}</TrialPopup>
			)}
		</div>
	);
}
