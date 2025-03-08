"use client";

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import React from "react";
import { BrickWall, FolderKanban, Heart, Megaphone } from "lucide-react";
import { getDashboardStats } from "@/actions/dashboard";
import { useQueryData } from "@/hooks/useQueryData";
import { useUser } from '@clerk/nextjs';
import { FormMetricsBarChart } from "@/components/charts/FormMetricsBarChart";

type Props = {
	params: { workspaceId: string };
};

type DashboardDataType = {
	workspacesCount: number;
	formsCount: number;
	testimonialsCount: number;
	widgetsCount: number;
	totalVisits: number;
	mostAccessedForm: { formId: string; name: string; visits: number };
	formsWithMetrics: { id: string; name: string; metrics: { actionType: string; total: number }[] }[];
	transformedData :any;
} | null

const Page = ({ params: { workspaceId } }: Props) => {
	const { user } = useUser();

	const { data, isFetching } = useQueryData(
		["dashboard-stats"],
		() => getDashboardStats(workspaceId)
	);

	const dashboardData = data as DashboardDataType;

	return (
			<div className="space-y-4 py-[40px] px-[20px]">
				<h1 className='text-2xl font-semibold'>Welcome back, {user?.firstName || (user as any)?.email}</h1>
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">Number of Projects</CardTitle>
							<FolderKanban/>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">{dashboardData?.workspacesCount || 0}</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">Number of Forms</CardTitle>
							<Megaphone/>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">{dashboardData?.formsCount|| 0}</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">Collected Testimonials</CardTitle>
							<Heart/>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">{dashboardData?.testimonialsCount|| 0}</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">Created Widgets</CardTitle>
							<BrickWall/>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">{dashboardData?.widgetsCount|| 0}</div>
						</CardContent>
					</Card>
				</div>
				{/* Additional Card with Example Graph */}
				{/* <AreaGraph chartData={dashboardData?.formsWithMetrics} /> */}

				<div className="grid gap-4 sm:grid-cols-12 md:grid-cols-9 lg:grid-cols-8">
					<div className="col-span-12 md:col-span-6 lg:col-span-5">
						<FormMetricsBarChart data={dashboardData?.transformedData} />
					</div>

					{/* <div className="col-span-12 md:col-span-3 lg:col-span-3">
						<WeeklyVisitorsRadarChart />
					</div> */}
				</div>



			</div>
	);
};

export default Page;
