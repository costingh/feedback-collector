import { auth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

import { client } from '@/lib/prisma'

export async function PUT(req: Request) {
	try {
		const { userId } = auth()
		const body = await req.json()
		const { id, tagName, category, tagDescription, formResponsesIds } =
			body.data

		if (!userId) {
			return new NextResponse('Unauthorized', { status: 401 })
		}

		if (!id) {
			return new NextResponse('Tag ID is required', { status: 400 })
		}

		const existingTag = await client.tag.findUnique({
			where: { id },
		})

		if (!existingTag) {
			return new NextResponse('Tag not found', { status: 404 })
		}

		const updatedTag = await client.tag.update({
			where: { id },
			data: {
				tagName: tagName || existingTag.tagName,
				category: category || existingTag.category,
				tagDescription: tagDescription || existingTag.tagDescription,
				userId,
				formResponsesIds:
					formResponsesIds || existingTag.formResponsesIds,
			},
		})

		return NextResponse.json({ result: updatedTag, error: null })
	} catch (error) {
		console.error('[TAG_UPDATE_ERROR]', error)
		return new NextResponse('Internal Error', { status: 500 })
	}
}
