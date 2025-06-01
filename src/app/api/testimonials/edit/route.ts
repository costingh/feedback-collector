import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { client } from '@/lib/prisma'

export async function POST(req: Request) {
	try {
		const { userId } = auth()
		const body = await req.json()
		const { data } = body

		if (!userId) {
			return new NextResponse('Unauthorized', { status: 401 })
		}

		const existingReview = await client.formResponse.findFirst({
			where: { id: data.id },
		})

		if (existingReview) {
			const updatedReview = await client.formResponse.update({
				where: { id: existingReview.id },
				data: {
					stars: data.stars || existingReview.stars,
					message: data.message || existingReview.message,
					name: data.name || existingReview.name,
					company: data.company || existingReview.company,
					jobTitle: data.jobTitle || existingReview.jobTitle,
					website: data.website || existingReview.website,
					avatar: data.avatar || existingReview.avatar,
					logo: data.logo || existingReview.logo,
					approved: data.approved || existingReview.approved,
				},
			})

			return NextResponse.json({ result: updatedReview, error: null })
		} else {
			return new NextResponse('Form response not found', { status: 404 })
		}
	} catch (error) {
		console.log('[REVIEW_ERROR]', error)
		return new NextResponse('Internal Error', { status: 500 })
	}
}
