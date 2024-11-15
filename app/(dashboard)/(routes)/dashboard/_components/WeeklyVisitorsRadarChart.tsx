import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	Legend,
	ResponsiveContainer,
} from "recharts";

const visitorData = [
	{ day: "Mon", newVisitors: 300, returningVisitors: 200 },
	{ day: "Tue", newVisitors: 400, returningVisitors: 300 },
	{ day: "Wed", newVisitors: 200, returningVisitors: 150 },
	{ day: "Thu", newVisitors: 500, returningVisitors: 400 },
	{ day: "Fri", newVisitors: 350, returningVisitors: 250 },
	{ day: "Sat", newVisitors: 450, returningVisitors: 300 },
	{ day: "Sun", newVisitors: 300, returningVisitors: 200 },
];

export function WeeklyVisitorsRadarChart() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Weekly Visitors</CardTitle>
			</CardHeader>
				<ResponsiveContainer width="100%" height={395}>
					<RadarChart data={visitorData}  margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
						<PolarGrid />
						<PolarAngleAxis dataKey="day" />
						<PolarRadiusAxis angle={30} domain={[0, 600]} />
						<Radar
							name="New visitors"
							dataKey="newVisitors"
							stroke="#8884d8"
							fill="#8884d8"
							fillOpacity={0.6}
						/>
						<Radar
							name="Returning visitors"
							dataKey="returningVisitors"
							stroke="#82ca9d"
							fill="#82ca9d"
							fillOpacity={0.6}
						/>
						<Legend />
					</RadarChart>
				</ResponsiveContainer>
		</Card>
	);
}
