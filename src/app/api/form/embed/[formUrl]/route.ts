import { NextRequest, NextResponse } from 'next/server'
import { client } from '@/lib/prisma'

// CORS headers
const corsHeaders = {
	'Access-Control-Allow-Origin': '*', // You can replace * with specific domains
	'Access-Control-Allow-Methods': 'GET, OPTIONS',
	'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

// Handle preflight requests
export async function OPTIONS() {
	return new NextResponse(null, {
		status: 200,
		headers: corsHeaders,
	})
}

export async function GET(
	req: NextRequest,
	{ params: { formUrl } }: { params: { formUrl: string } },
) {
	try {
		if (!formUrl) {
			return new NextResponse(JSON.stringify({ error: 'Not found' }), {
				status: 404,
				headers: corsHeaders,
			})
		}

		const formattedUrl = formUrl.includes('/p/') ? formUrl : '/p/' + formUrl

		// Combined query with nested include
		const form = await client.form.findFirst({
			where: { url: formattedUrl },
			include: {
				formFields: true,
				questions: true,
				workspace: {
					include: {
						User: {
							include: {
								subscription: true,
							},
						},
					},
				},
			},
		})

		if (!form || !form.workspace?.User) {
			return new NextResponse(
				JSON.stringify({ error: 'Form not found' }),
				{
					status: 404,
					headers: corsHeaders,
				},
			)
		}

		const user = form.workspace.User
		const subscription = user.subscription

		const hasCustomBranding =
			subscription?.plan === 'BUSINESS' || subscription?.plan === 'PRO'

		return new NextResponse(
			JSON.stringify({
				status: 200,
				data: {
					form: {
						...form,
						hasCustomBranding,
					},
				},
			}),
			{
				status: 200,
				headers: {
					...corsHeaders,
					'Content-Type': 'application/json',
				},
			},
		)
	} catch (error) {
		console.error('[FORM_ERROR]', error)
		return new NextResponse('Internal Error', {
			status: 500,
			headers: corsHeaders,
		})
	}
}
