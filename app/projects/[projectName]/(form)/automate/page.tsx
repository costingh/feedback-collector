"use client";

import { Button } from "@/components/ui/button"; // shadcn button
import { Lightbulb, CalendarClock } from "lucide-react"; // lucide icons
import Link from "next/link";

const AutomatePage = () => {
	return (
		<div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg text-center">
			{/* Icon */}
			<div className="flex justify-center mb-6">
				<Lightbulb className="w-16 h-16 text-yellow-500" />
			</div>

			{/* Title */}
			<h1 className="text-2xl font-semibold text-gray-800 mb-4">
				Automation is on the Way!
			</h1>

			{/* Description */}
			<p className="text-gray-600 text-lg mb-6">
				Our automations and integrations are coming soon. You&apos;ll soon be
				able to connect your testimonials with your favorite tools to
				streamline your workflow effortlessly.
			</p>

			{/* Button to Request Feature */}
			<div className="mb-8">
				<Link href="/feature-request">
					<Button
						variant="outline"
						className="flex items-center gap-2 mx-auto"
					>
						<CalendarClock className="w-5 h-5" />
						Request an Integration
					</Button>
				</Link>
			</div>

			{/* Placeholder section for future automations */}
			<div className="border-t border-gray-200 pt-6">
				<h2 className="text-xl font-medium text-gray-700 mb-4">
					Coming Soon:
				</h2>
				<ul className="text-left list-disc list-inside text-gray-600 space-y-2">
					<li>Zapier Integration</li>
					<li>Slack Notifications</li>
					<li>Email Automation</li>
					<li>Google Sheets Sync</li>
					<li>More to come...</li>
				</ul>
			</div>
		</div>
	);
};

export default AutomatePage;
