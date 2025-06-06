import { NextResponse } from 'next/server'
import { client } from '@/lib/prisma'

export async function GET(req: Request) {
	try {
		// Extract query parameters from the request
		const { searchParams } = new URL(req.url)
		const widgetId = searchParams.get('widgetId')
		const actionType = searchParams.get('actionType')

		// Validate the required parameters
		if (!widgetId || !actionType) {
			return NextResponse.json(
				{ error: 'widgetId and actionType are required' },
				{ status: 400 },
			)
		}

		// Query the database to sum the value for the specific widgetId and actionType
		const sumResult = await client.widgetAnalytics.aggregate({
			_sum: {
				value: true, // Sum the 'value' column
			},
			where: {
				widgetId: widgetId,
				actionType: actionType,
			},
		})

		// Return the result
		return NextResponse.json({
			widgetId,
			actionType,
			totalValue: sumResult._sum.value || 0, // Return 0 if no records found
		})
	} catch (error) {
		console.error('Error fetching analytics:', error)
		return new NextResponse('Internal Server Error', { status: 500 })
	}
}
