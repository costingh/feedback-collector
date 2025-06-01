'use client'

import { TrendingUp } from 'lucide-react'
import {
	Area,
	AreaChart,
	CartesianGrid,
	XAxis,
	ResponsiveContainer,
} from 'recharts'

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart'

type ChartDataType = {
	day: string
	desktop: number
	mobile: number
}[]

const chartConfig = {
	desktop: {
		label: 'Desktop',
		color: '#4f46e5',
	},
	mobile: {
		label: 'Mobile',
		color: '#0b1624',
	},
} satisfies ChartConfig

export function AreaGraph({ chartData }: { chartData: ChartDataType }) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Visits Evolution - Mobile vs. Desktop</CardTitle>
				<CardDescription>
					Showing total visitors for the last month
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ResponsiveContainer width="100%" height={300}>
					<ChartContainer
						config={chartConfig}
						className="aspect-auto"
					>
						<AreaChart
							accessibilityLayer
							data={chartData}
							margin={{
								left: 12,
								right: 12,
							}}
						>
							<CartesianGrid
								vertical={false}
								strokeDasharray="3 3"
							/>
							<XAxis
								dataKey="day"
								tickLine={false}
								axisLine={false}
								tickMargin={8}
							/>
							<ChartTooltip
								cursor={false}
								content={
									<ChartTooltipContent indicator="dot" />
								}
							/>
							<Area
								dataKey="mobile"
								type="natural"
								fill="green"
								fillOpacity={0.2}
								stroke="green"
								stackId="a"
							/>
							<Area
								dataKey="desktop"
								type="natural"
								fill="#4f46e5"
								fillOpacity={0.2}
								stroke="#4f46e5"
								stackId="a"
							/>
						</AreaChart>
					</ChartContainer>
				</ResponsiveContainer>
			</CardContent>
			{/* <CardFooter>
				<div className="flex w-full items-start gap-2 text-sm">
					<div className="grid gap-2">
						<div className="flex items-center gap-2 font-medium leading-none">
							Trending up by 5.2% this month{" "}
							<TrendingUp className="h-4 w-4" />
						</div>
						<div className="flex items-center gap-2 leading-none text-muted-foreground">
							January - June 2024
						</div>
					</div>
				</div>
			</CardFooter> */}
		</Card>
	)
}
