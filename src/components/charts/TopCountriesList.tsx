import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

export default function TopCountriesList({
	topCountries,
}: {
	topCountries: any[]
}) {
	// Ensure there are always 5 rows (fill with empty placeholders if needed)
	const displayedCountries = [
		...topCountries,
		...Array(5 - topCountries.length).fill(null),
	].slice(0, 5)
	const maxVisits = Math.max(...topCountries.map((c) => c.visits), 1)

	return (
		<Card>
			<CardHeader>
				<CardTitle>🌍 Top 5 Countries by Visits</CardTitle>
				<CardDescription>
					Most traffic in the last month
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-4 h-[250px] flex flex-col justify-between">
					{displayedCountries.map((country, index) =>
						country ? (
							<div
								key={country.country}
								className="flex items-center space-x-4"
							>
								{/* Country Flag */}
								<span className="text-xl">
									{getFlagEmoji(country.country)}
								</span>

								{/* Country Name & Visits */}
								<div className="flex-1">
									<p className="text-lg font-medium">
										{country.country}
									</p>
									<Progress
										value={
											(country.visits / maxVisits) * 100
										}
									/>
								</div>

								{/* Visit Count */}
								<span className="text-gray-600">
									{country?.visits?.toLocaleString() || '-'}
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

// Helper function to get flag emoji from country name
function getFlagEmoji(country: string) {
	const flags: Record<string, string> = {
		'United States': '🇺🇸',
		France: '🇫🇷',
		Germany: '🇩🇪',
		Ireland: '🇮🇪',
		Spain: '🇪🇸',
		Netherlands: '🇳🇱',
		Poland: '🇵🇱',
		Italy: '🇮🇹',
		Belgium: '🇧🇪',
		Australia: '🇦🇺',
	}
	return flags[country] || '🏳'
}
