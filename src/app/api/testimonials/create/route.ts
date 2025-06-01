// app/api/testimonials/create/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { client } from '@/lib/prisma'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

const s3 = new S3Client({
	region: process.env.NEXT_PUBLIC_BUCKET_REGION!,
	credentials: {
		accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY!,
		secretAccessKey: process.env.NEXT_PUBLIC_SECRET_KEY!,
	},
})

const uploadToS3 = async (file: File, prefix: string): Promise<string> => {
	const extension = file.name.split('.').pop() || 'jpg'
	const uniqueName = `${prefix}/${Date.now()}-${Math.floor(Math.random() * 1e6)}.${extension}`
	const buffer = Buffer.from(await file.arrayBuffer())

	await s3.send(
		new PutObjectCommand({
			Bucket: process.env.NEXT_PUBLIC_BUCKET_NAME!,
			Key: uniqueName,
			Body: buffer,
			ContentType: file.type || 'application/octet-stream', // fallback
		}),
	)

	return `https://${process.env.NEXT_PUBLIC_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_BUCKET_REGION}.amazonaws.com/${uniqueName}`
}

export async function POST(request: NextRequest) {
	try {
		const formData = await request.formData()
		const dataRaw = formData.get('data')

		if (!dataRaw || typeof dataRaw !== 'string') {
			return NextResponse.json(
				{ error: 'Missing or invalid form data.' },
				{ status: 400 },
			)
		}

		const data = JSON.parse(dataRaw)

		if (data.email) {
			const existing = await client.formResponse.findFirst({
				where: {
					email: data.email,
					formId: data.formId,
				},
			})

			if (existing) {
				return NextResponse.json({
					result: null,
					error: 'A review was already submitted with this email.',
				})
			}
		}

		let avatarUrl = ''
		let logoUrl = ''
		let videoUrl = ''

		const avatar = formData.get('avatar')
		const logo = formData.get('logo')
		const video = formData.get('video')

		if (avatar instanceof File && avatar.size > 0) {
			avatarUrl = await uploadToS3(avatar, 'avatars')
		}

		if (logo instanceof File && logo.size > 0) {
			logoUrl = await uploadToS3(logo, 'logos')
		}

		if (video instanceof File && video.size > 0) {
			videoUrl = await uploadToS3(video, 'videos')
		}

		const result = await client.formResponse.create({
			data: {
				stars: Number(data.stars) || 0,
				message: data.message || '',
				email: data.email || '',
				name: data.name || '',
				company: data.company || '',
				jobTitle: data.jobTitle || '',
				website: data.website || '',
				formId: data.formId || '',
				avatar: avatarUrl,
				logo: logoUrl,
				video: videoUrl,
				approved: false,
			},
		})

		return NextResponse.json({ result, error: null })
	} catch (err) {
		console.error('[REVIEW_ERROR]', err)
		return NextResponse.json(
			{ error: 'Internal Server Error' },
			{ status: 500 },
		)
	}
}
