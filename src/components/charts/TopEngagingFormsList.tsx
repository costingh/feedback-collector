import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

export default function TopEngagingFormsList({ forms }: { forms: any[] }) {
	// Ensure there are always 5 rows (fill with empty placeholders if needed)
	const displayedForms = [
		...forms,
		...Array(5 - forms.length).fill(null),
	].slice(0, 5)
	const maxEngagement = Math.max(
		...forms.map((form) => form.interactionRate),
		1,
	)

	return (
		<Card>
			<CardHeader>
				<CardTitle>⚡ Top 5 Most Engaging Forms</CardTitle>
				<CardDescription>
					Highest interaction rate (views vs. submissions)
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-4 h-[250px] flex flex-col justify-between">
					{displayedForms.map((form, index) =>
						form ? (
							<div
								key={form.formName}
								className="flex items-center space-x-4"
							>
								{/* Form Name */}
								<div className="flex-1">
									<p className="text-lg font-medium">
										{form.formName}
									</p>
									{/* Progress Bar for Engagement */}
									<Progress
										value={
											(form.interactionRate /
												maxEngagement) *
											100
										}
									/>
								</div>

								{/* Interaction Rate */}
								<span className="text-gray-600">
									{form.interactionRate.toFixed(1)}%
								</span>
							</div>
						) : (
							<div
								key={index}
								className="h-[40px] flex items-center justify-center text-gray-400"
							>
								— Empty —
							</div>
						),
					)}
				</div>
			</CardContent>
		</Card>
	)
}
