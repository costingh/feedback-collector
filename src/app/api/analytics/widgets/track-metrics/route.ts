import { NextResponse } from 'next/server'
import { client } from '@/lib/prisma'

export async function POST(req: Request) {
	try {
		const { widgetId, eventType, timeSpent, deviceInfo } = await req.json()

		const validEventTypes = ['view', 'time', 'bounce', 'interaction']
		if (!validEventTypes.includes(eventType)) {
			return NextResponse.json({
				success: false,
				message: 'Invalid eventType',
			})
		}

		let value: number
		switch (eventType) {
			case 'view':
			case 'bounce':
			case 'interaction':
			case 'time':
				value = timeSpent || 0
				break
			default:
				return NextResponse.json({
					success: false,
					message: 'Invalid eventType',
				})
		}

		await client.widgetAnalytics.create({
			data: {
				widgetId,
				actionType: eventType,
				value,
			},
		})

		return NextResponse.json({ success: true })
	} catch (error) {
		console.error('Error tracking analytics:', error)
		return new NextResponse('Internal Server Error', { status: 500 })
	}
}
