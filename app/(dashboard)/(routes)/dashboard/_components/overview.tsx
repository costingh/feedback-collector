import { useEffect, useState } from "react";
import { AreaGraph } from "./area-graph";
import PageContainer from "@/components/layouts/PageContainer";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { BookOpen, BrickWall, FolderKanban, Heart, Megaphone } from "lucide-react";
import { FormMetricsBarChart } from "./FormMetricsBarChart";
import { WeeklyVisitorsRadarChart } from "./WeeklyVisitorsRadarChart";

export default function OverViewPage() {
	const [dashboardData, setDashboardData] = useState<{
		projectsCount: number;
		formsCount: number;
		testimonialsCount: number;
		widgetsCount: number;
		totalVisits: any;
		mostAccessedForm: { formId: string; name: string; visits: number };
		formsWithMetrics: { id: string; name: string; metrics: { actionType: string; total: number }[] }[];
		transformedData :any;
	} | null>(null);

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Function to fetch data from your API endpoint
		const fetchData = async () => {
			try {
				const response = await fetch("/api/dashboard-stats");
				const resp = await response.json();
				console.log(resp.data)
				let transformedData = null;
				if(resp.data) {
					transformedData = resp.data.formsWithMetrics.map(form => {
						const viewMetric = form.metrics.find(metric => metric.actionType === 'view')?.total || 0;
						const completionMetric = form.metrics.find(metric => metric.actionType === 'completion')?.total || 0;
						const interactionMetric = form.metrics.find(metric => metric.actionType === 'interaction')?.total || 0;
					  
						return {
						  formName: form.name,
						  views: viewMetric,
						  completions: completionMetric,
						  interactions: interactionMetric,
						};
					  });
				}
				  
				setDashboardData({
					...resp.data,
					transformedData
				});
			} catch (error) {
				console.error("Error fetching dashboard data:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	// Loading state
	if (loading) {
		return <div>Loading...</div>;
	}

	// Error or no data state
	if (!dashboardData) {
		return <div>No data available</div>;
	}

	return (
		<PageContainer scrollable>
			<div className="space-y-4">
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">Number of Projects</CardTitle>
							<FolderKanban/>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">{dashboardData.projectsCount}</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">Number of Forms</CardTitle>
							<Megaphone/>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">{dashboardData.formsCount}</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">Collected Testimonials</CardTitle>
							<Heart/>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">{dashboardData.testimonialsCount}</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">Created Widgets</CardTitle>
							<BrickWall/>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">{dashboardData.widgetsCount}</div>
						</CardContent>
					</Card>
				</div>
				{/* Additional Card with Example Graph */}
				{/* <AreaGraph chartData={dashboardData.formsWithMetrics} /> */}

				<div className="grid gap-4 sm:grid-cols-12 md:grid-cols-9 lg:grid-cols-8">
					<div className="col-span-12 md:col-span-6 lg:col-span-5">
						<FormMetricsBarChart data={dashboardData.transformedData} />
					</div>

					{/* <div className="col-span-12 md:col-span-3 lg:col-span-3">
						<WeeklyVisitorsRadarChart />
					</div> */}
				</div>



			</div>
		</PageContainer>
	);
}
