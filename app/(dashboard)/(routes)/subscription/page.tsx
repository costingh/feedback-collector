// "use client";

import { Button } from "@/components/ui/button";
import { getPlanName } from "@/lib/get-plan-name";
// import axios from "axios";
// import { useState } from "react";
// import { toast } from "sonner";

const SettingsPage = async () => {
	const { planType } = await getPlanName();
	// const [loading, setLoading] = useState(false);

	// const onCancelSubscription = async () => {
	// 	try {
	// 		setLoading(true);
	// 		const response = await axios.post(
	// 			"/api/stripe/cancel-subscription"
	// 		);
	// 		toast.success("Your subscription has been canceled.");
	// 	} catch (error) {
	// 		toast.error(
	// 			"Something went wrong while canceling the subscription."
	// 		);
	// 	} finally {
	// 		setLoading(false);
	// 	}
	// };

	return (
		<div className="py-8 px-6 w-full">
			<div className="mb-8 space-y-4">
				<div className="flex w-full justify-between items-start">
					<div className="flex flex-col">
						<h2 className="text-[18px] font-bold">
							Account Subscription
						</h2>
						<p className="text-gray-500 font-light text-[14px]">
							Manage your subscription details
						</p>
					</div>
				</div>
			</div>

			<div className="space-y-8">
				{/* Current Plan */}
				<div className="bg-gray-100 p-4 rounded-lg">
					<h3 className="text-lg font-semibold">Your Current Plan</h3>
					<p className="text-gray-700">
						Plan Type:{" "}
						<span className="font-bold">
							{planType || "Expired"}
						</span>
					</p>
					<p className="text-gray-500 text-sm mb-5">
						Renewal Date: TBD
					</p>
					<Button
						variant="outline"
						className="rounded-[12px] border-[2px] border-indigo-600 bg-indigo-600 px-[15px] py-[10px] text-white text-[14px] font-[500] hover:text-indigo-600"
					>
						Upgrade Plan
					</Button>
				</div>

				{/* Billing History */}
				{/* <div className="bg-gray-100 p-4 rounded-lg">
					<h3 className="text-lg font-semibold">Billing History</h3>
					<p className="text-gray-500 text-sm mb-5">
						View and download your past invoices.
					</p>
					<Button
						variant="outline"
						className="rounded-[12px] border-[2px] border-indigo-600 bg-indigo-600 px-[15px] py-[10px] text-white text-[14px] font-[500] hover:text-indigo-600"
					>
						View Invoices
					</Button>
				</div> */}

				{/* Payment Method */}
				{/* <div className="bg-gray-100 p-4 rounded-lg">
					<h3 className="text-lg font-semibold">Payment Method</h3>
					<p className="text-gray-500 text-sm mb-5">
						Visa **** **** **** 4242
					</p>
					<Button
						variant="outline"
						className="rounded-[12px] border-[2px] border-indigo-600 bg-indigo-600 px-[15px] py-[10px] text-white text-[14px] font-[500] hover:text-indigo-600"
					>
						Update Payment Method
					</Button>
				</div> */}

				{/* Cancellation */}
				{/* <div className="bg-gray-100 p-4 rounded-lg">
					<h3 className="text-lg font-semibold text-red-600">
						Cancel Subscription
					</h3>
					<p className="text-gray-500 text-sm mb-5">
						If you cancel, your plan will remain active until the
						end of your current billing cycle.
					</p>
					<Button
						onClick={onCancelSubscription}
						variant="outline"
						className="rounded-[12px] border-[2px] border-red-600 bg-red-600 px-[15px] py-[10px] text-white text-[14px] font-[500] hover:text-red-600"
					>
						Cancel Subscription
					</Button>
				</div> */}
			</div>
		</div>
	);
};

export default SettingsPage;
