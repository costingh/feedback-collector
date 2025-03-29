"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { BrickWall, FolderKanban, Heart, Megaphone } from "lucide-react";
import { getDashboardStats } from "@/actions/dashboard";
import { useQueryData } from "@/hooks/useQueryData";
import { useUser } from "@clerk/nextjs";
import { AreaGraph } from "@/components/charts/area-graph";
import { PieChart } from "@/components/charts/PieChart";
import { LoadingSpinner } from "@/components/animations/loading-spinner";
import TopFormsList from "@/components/charts/TopFormsList";
import TopCountriesList from "@/components/charts/TopCountriesList";
import TopEngagingFormsList from "@/components/charts/TopEngagingFormsList";

type Props = {
	params: { workspaceId: string };
};

type DashboardDataType = {
	data: {
		workspacesCount: number;
		formsCount: number;
		testimonialsCount: number;
		widgetsCount: number;
		totalVisits: number;
		formsWithMetrics: {
			id: string;
			name: string;
			metrics: { actionType: string; total: number }[];
		}[];
		transformedData: any;
		visitsEvolutionChart: {day: string, desktop: number, mobile: number}[];
		formsSplitByStateChart: {name: string, value: number}[];
		topFormsListData: {id: string, formName: string, views: number}[];
		topCountriesData: {country: string, visits: number}[];
		topEngagingForms: {formName: string, interactionRate: number}[];
	};
};

const Page = ({ params: { workspaceId } }: Props) => {
	const { user } = useUser();

	const { data, isFetching } = useQueryData(["dashboard-stats"], () =>
		getDashboardStats(workspaceId)
	);

	if(!data) return (
		<div className="w-full h-full flex items-center justify-center">
			<span className="inline-block">
				<LoadingSpinner size={40} />
			</span>
		</div>
	);

	const dashboardData = data as DashboardDataType;

	return (
		<div className="space-y-4 py-[40px] px-[20px]">
			<h1 className="text-2xl font-semibold">
				Welcome back, {user?.firstName || (user as any)?.email}
			</h1>
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">
							Number of Projects
						</CardTitle>
						<FolderKanban />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">
							{dashboardData?.data?.workspacesCount || 0}
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">
							Number of Forms
						</CardTitle>
						<Megaphone />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">
							{dashboardData?.data?.formsCount || 0}
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">
							Collected Testimonials
						</CardTitle>
						<Heart />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">
							{dashboardData?.data?.testimonialsCount || 0}
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">
							Created Widgets
						</CardTitle>
						<BrickWall />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">
							{dashboardData?.data?.widgetsCount || 0}
						</div>
					</CardContent>
				</Card>
			</div>


			<div className="grid gap-4 sm:grid-cols-12 md:grid-cols-9 lg:grid-cols-8">
				<div className="col-span-12 md:col-span-6 lg:col-span-5">
					<AreaGraph chartData={dashboardData.data.visitsEvolutionChart} />
				</div>

				<div className="col-span-12 md:col-span-3 lg:col-span-3">
					<PieChart data={dashboardData.data.formsSplitByStateChart} />
				</div>
			</div>

			<div className="grid gap-4 sm:grid-cols-12 md:grid-cols-9">
				<div className="col-span-12 md:col-span-6 lg:col-span-3">
					<TopFormsList forms={dashboardData.data.topFormsListData}/>
				</div>

				<div className="col-span-12 md:col-span-6 lg:col-span-3">
					<TopCountriesList topCountries={dashboardData.data.topCountriesData}/>
				</div>

				<div className="col-span-12 md:col-span-6 lg:col-span-3">
					<TopEngagingFormsList forms={dashboardData.data.topEngagingForms}/>
				</div>
			</div>

		</div>
	);
};

export default Page;
