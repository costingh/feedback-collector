import { Settings, User, CreditCard, Calendar, LogOut } from "lucide-react";
import { auth, currentUser } from "@clerk/nextjs/server";
import { checkSubscription } from "@/lib/subscription";
import { getUserTrialData } from "@/lib/trial";
import { Button } from "@/components/ui/button";
import { getPlanName } from "@/lib/get-plan-name";

const SettingsPage = async () => {
	const { userId } = auth();
	const { isValid: isPro } = await checkSubscription();
	const { planType } = await getPlanName();

	const trialData = await getUserTrialData();

	// Assume currentUser returns user object with displayName and other details
	const user = await currentUser();

	return (
		<div className="py-10 px-6 w-full">
			{/* Page Heading */}
			<div className="mb-8 space-y-4">
				<div className="flex w-full justify-between items-start">
					<div className="flex flex-col">
						<h2 className="text-[18px] font-bold">
							Account Settings
						</h2>
						<p className="text-gray-500 font-light text-[14px]">
							Manage your account details and preferences
						</p>
					</div>
				</div>
			</div>

			{/* User Details */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
				{/* Display Name */}
				<div className="p-4 border border-gray-200 rounded-lg">
					<h2 className="text-lg font-medium text-gray-700 mb-1">
						Display Name
					</h2>
					<p className="text-gray-600">{user?.firstName || "User"}</p>
				</div>

				{/* Current Subscription */}
				<div className="p-4 border border-gray-200 rounded-lg">
					<h2 className="text-lg font-medium text-gray-700 mb-1">
						Subscription Status
					</h2>
					<p
						className={`text-gray-600 ${
							isPro ? "text-green-600" : "text-red-600"
						}`}
					>
						{planType || 'Expired'}
					</p>
				</div>

				{/* Trial Start Date */}
				<div className="p-4 border border-gray-200 rounded-lg">
					<h2 className="text-lg font-medium text-gray-700 mb-1">
						Trial Start Date
					</h2>
					<p className="text-gray-600">
						{trialData
							? new Date(
									trialData.trialStartData
							  ).toLocaleDateString()
							: "N/A"}
					</p>
				</div>

				{/* Trial End Date */}
				<div className="p-4 border border-gray-200 rounded-lg">
					<h2 className="text-lg font-medium text-gray-700 mb-1">
						Trial End Date
					</h2>
					<p className="text-gray-600">
						{trialData
							? new Date(
									trialData.trialEndDate
							  ).toLocaleDateString()
							: "N/A"}
					</p>
				</div>
			</div>

			{/* Settings Options */}
			<div className="space-y-6">
				{/* Profile Settings */}
				<div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
					<div className="flex items-center space-x-4">
						<User className="text-gray-500" />
						<span className="text-lg font-medium text-gray-700">
							Profile
						</span>
					</div>
					<Button
						variant="ghost"
						className="text-gray-500 hover:text-gray-700"
					>
						<Settings className="h-5 w-5" />
					</Button>
				</div>

				{/* Subscription Settings */}
				{/* <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
					<div className="flex items-center space-x-4">
						<CreditCard className="text-gray-500" />
						<span className="text-lg font-medium text-gray-700">
							Subscription
						</span>
					</div>
					<Button
						variant="ghost"
						className="text-gray-500 hover:text-gray-700"
					>
						<Settings className="h-5 w-5" />
					</Button>
				</div> */}

				{/* Trial Information */}
				<div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
					<div className="flex items-center space-x-4">
						<Calendar className="text-gray-500" />
						<div className="space-y-1">
							<p className="text-lg font-medium text-gray-700">
								Trial Information
							</p>
							{trialData && (
								<p className="text-sm text-gray-600">
									Trial ends on:{" "}
									{new Date(
										trialData.trialEndDate
									).toLocaleDateString()}
								</p>
							)}
						</div>
					</div>
				</div>

				{/* Logout Button */}
				{/* <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
					<div className="flex items-center space-x-4">
						<LogOut className="text-gray-500" />
						<span className="text-lg font-medium text-gray-700">
							Log Out
						</span>
					</div>
					<Button
						variant="ghost"
						className="text-gray-500 hover:text-gray-700"
					>
						<Settings className="h-5 w-5" />
					</Button>
				</div> */}
			</div>
		</div>
	);
};

export default SettingsPage;
