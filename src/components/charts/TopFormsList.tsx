import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy } from "lucide-react";

export default function TopFormsList({ forms }: { forms: any[] }) {
	// Ensure there are always 5 rows (empty placeholders if needed)
	const displayedForms = [...forms, ...Array(5 - forms.length).fill(null)].slice(0, 5);
	const maxViews = Math.max(...forms.map((form) => form.views), 1);

	return (
		<Card>
			<CardHeader>
				<CardTitle>🏆 Top 5 Forms by Visits</CardTitle>
				<CardDescription>Total visitors for the last month</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-4 h-[250px] flex flex-col justify-between">
					{displayedForms.map((form, index) =>
						form ? (
							<div key={form.formName} className="flex items-center space-x-4">
								{/* Trophy Icon for Top 3 Forms */}
								{index < 3 ? (
									<Trophy className="text-yellow-500 w-5 h-5" />
								) : (
									<span className="text-gray-500 font-semibold">{index + 1}.</span>
								)}

								{/* Form Name & Views */}
								<div className="flex-1">
									<p className="text-lg font-medium">{form.formName}</p>
									<Progress value={(form.views / maxViews) * 100} />
								</div>

								{/* Visit Count */}
								<span className="text-gray-600">{form.views.toLocaleString()} visits</span>
							</div>
						) : (
							<div key={index} className="h-[40px] flex items-center justify-center text-gray-400">
								— Empty —
							</div>
						)
					)}
				</div>
			</CardContent>
		</Card>
	);
}
