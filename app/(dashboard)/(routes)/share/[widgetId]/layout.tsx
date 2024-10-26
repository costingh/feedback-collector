import { checkSubscription } from "@/lib/subscription";
import { getApiLimitCount } from "@/lib/api-limit";

export default async function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className="h-full relative">{children}</div>;
}
