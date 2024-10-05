import { Lock } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

function TrialPopup() {
	return (
		<div className="max-w-lg w-full bg-white shadow-md rounded-[15px] p-8 text-center">
			<Lock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
			<h1 className="text-2xl font-semibold text-gray-800">
				Your Trial has Expired
			</h1>
			<p className="text-gray-500 mt-2">
				Upgrade to unlock all features and continue using the platform.
			</p>

			<div className="mt-6 space-y-2">
				<Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700">
					Upgrade to Pro
				</Button>
				<Button
					variant="outline"
					className="w-full text-indigo-600 border-indigo-600 hover:bg-indigo-100"
				>
					Learn More
				</Button>
			</div>

			<div className="text-sm text-gray-400 mt-6">
				Need help?{" "}
				<a href="/support" className="text-indigo-600 hover:underline">
					Contact Support
				</a>
			</div>
		</div>
	);
}

export default TrialPopup;
