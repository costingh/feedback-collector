import React, { useState } from 'react'
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from '@/components/ui/card'
import {
	PieChart as PieChardRecharts,
	Pie,
	Sector,
	ResponsiveContainer,
} from 'recharts'

export function PieChart({ data }: { data: any }) {
	const [activeIndex, setActiveIndex] = useState<number>(0)

	const onPieEnter = (e: any, index: number) => {
		setActiveIndex(index)
	}

	const renderActiveShape = (props: any) => {
		const RADIAN = Math.PI / 180
		const {
			cx,
			cy,
			midAngle,
			innerRadius,
			outerRadius,
			startAngle,
			endAngle,
			fill,
			payload,
			percent,
			value,
		} = props
		const sin = Math.sin(-RADIAN * midAngle)
		const cos = Math.cos(-RADIAN * midAngle)
		const sx = cx + (outerRadius + 10) * cos
		const sy = cy + (outerRadius + 10) * sin
		const mx = cx + (outerRadius + 30) * cos
		const my = cy + (outerRadius + 30) * sin
		const ex = mx + (cos >= 0 ? 1 : -1) * 22
		const ey = my
		const textAnchor = cos >= 0 ? 'start' : 'end'

		return (
			<g>
				<text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
					{payload.name}
				</text>
				<Sector
					cx={cx}
					cy={cy}
					innerRadius={innerRadius}
					outerRadius={outerRadius}
					startAngle={startAngle}
					endAngle={endAngle}
					fill={fill}
				/>
				<Sector
					cx={cx}
					cy={cy}
					startAngle={startAngle}
					endAngle={endAngle}
					innerRadius={outerRadius + 6}
					outerRadius={outerRadius + 10}
					fill={fill}
				/>
				<path
					d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
					stroke={fill}
					fill="none"
				/>
				<circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
				<text
					x={ex + (cos >= 0 ? 1 : -1) * 12}
					y={ey}
					textAnchor={textAnchor}
					fill="#333"
				>{`PV ${value}`}</text>
				<text
					x={ex + (cos >= 0 ? 1 : -1) * 12}
					y={ey}
					dy={18}
					textAnchor={textAnchor}
					fill="#999"
				>
					{`(Rate ${(percent * 100).toFixed(2)}%)`}
				</text>
			</g>
		)
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Forms Split</CardTitle>
				<CardDescription>
					Showing a summary of forms split by their state (paused,
					published, draft)
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ResponsiveContainer width="100%" height={300}>
					<PieChardRecharts width={400} height={400}>
						<Pie
							activeIndex={activeIndex}
							activeShape={renderActiveShape}
							data={data}
							cx="50%"
							cy="50%"
							innerRadius={60}
							outerRadius={80}
							fill="#8884d8"
							dataKey="value"
							onMouseEnter={onPieEnter}
						/>
					</PieChardRecharts>
				</ResponsiveContainer>
			</CardContent>
			{/* <CardFooter>
            <div className="flex w-full items-start gap-2 text-sm">
					<div className="grid gap-2">
						<div className="flex items-center gap-2 font-medium leading-none">
							Trending up by 5.2% this month{" "}
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
