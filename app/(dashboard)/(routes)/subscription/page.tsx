import { Settings } from "lucide-react";

import Heading from "@/components/heading";
import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";

const SettingsPage = async () => {
	const { isValid: isPro, planType } = await checkSubscription();

	return (
		<div className="py-8">
			<div className="px-4 lg:px-8 space-y-4">
				<div className="text-muted-foreground text-sm">
					{isPro
						? "You are currently on a Pro plan."
						: "You are currently on a free plan."}
				</div>
				<SubscriptionButton isPro={isPro} />
			</div>
		</div>
	);
};

export default SettingsPage;
