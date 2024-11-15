"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	CartesianGrid,
	ResponsiveContainer,
} from "recharts";
import { CardContent, CardTitle } from "@/components/ui/Card";
import OverViewPage from "./_components/overview";

// Types for dashboard data
type DashboardData = {
	userName: string;
	projects: number;
	teamUsers: number;
	forms: number;
	testimonials: number;
	tags: number;
	widgets: number;
	viewsData: { date: string; views: number; bounceRate: number }[];
	testimonialsByForm: { formId: string; formName: string; count: number }[];
};

// Dummy data for development
const dummyDashboardData: DashboardData = {
	userName: "John Doe",
	projects: 4,
	teamUsers: 10,
	forms: 15,
	testimonials: 75,
	tags: 12,
	widgets: 6,
	viewsData: [
		{ date: "2023-01-01", views: 100, bounceRate: 20 },
		{ date: "2023-02-01", views: 150, bounceRate: 25 },
		{ date: "2023-03-01", views: 120, bounceRate: 22 },
	],
	testimonialsByForm: [
		{ formId: "form1", formName: "Customer Feedback", count: 30 },
		{ formId: "form2", formName: "Product Review", count: 45 },
	],
};

export default function DashboardPage() {
	const router = useRouter();
	const { userId } = useAuth();
	const [dashboardData, setDashboardData] = useState<DashboardData | null>(
		null
	);

	useEffect(() => {
		// Set dummy data for development
		setDashboardData(dummyDashboardData);
	}, []);

	return (
		<div className="px-8 py-5">
			<div className="mb-8 space-y-4">
				<div className="flex w-full justify-between items-start">
					<div className="flex flex-col">
						<h2 className="text-[18px] font-bold">
							Welcome back, {dashboardData?.userName || "User"}
						</h2>
						<p className="text-gray-500 font-light text-[14px]">
							Here is the summary of your overall data.
						</p>
					</div>
				</div>
			</div>

			<OverViewPage/>
		</div>
	);
}

// Individual StatCard component
interface StatCardProps {
	title: string;
	value: number | undefined;
}

const StatCard: React.FC<StatCardProps> = ({ title, value }) => (
	<div className="border rounded-lg p-4 shadow-md bg-white">
		<CardTitle className="text-gray-700 text-sm font-medium">
			{title}
		</CardTitle>
		<CardContent className="text-2xl font-semibold text-blue-600">
			{value ?? 0}
		</CardContent>
	</div>
);

// ChartCard component for analytics sections
interface ChartCardProps {
	title: string;
	children: React.ReactNode;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, children }) => (
	<div className="border rounded-lg p-4 shadow-md bg-white">
		<CardTitle className="text-gray-700 text-sm font-medium mb-4">
			{title}
		</CardTitle>
		{children}
	</div>
);
