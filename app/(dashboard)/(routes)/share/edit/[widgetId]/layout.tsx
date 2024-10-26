import Sidebar from "@/components/sidebar";

import { checkSubscription } from "@/lib/subscription";
import { getApiLimitCount } from "@/lib/api-limit";

export default async function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// const apiLimitCount = await getApiLimitCount();
	// const isPro = await checkSubscription();

	return (
		<div className="h-full relative">
			{children}
		</div>
	);
}
