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
import OverViewPage from "./_components/overview";
import { CardContent, CardTitle } from "@/components/ui/card";


export default function DashboardPage() {
	return (
		<div className="px-8 py-5">
			<div className="mb-8 space-y-4">
				<div className="flex w-full justify-between items-start">
					<div className="flex flex-col">
						<h2 className="text-[18px] font-bold">
							Welcome back
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
