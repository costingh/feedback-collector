import { NextResponse } from 'next/server'
import { client } from '@/lib/prisma'
import { generateUniqueId } from '@/lib/utils'
import { currentUser } from '@clerk/nextjs/server'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { SUBSCRIPTION_PLAN, Type } from '@prisma/client'

const s3 = new S3Client({
	region: process.env.NEXT_PUBLIC_BUCKET_REGION!,
	credentials: {
		accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY!,
		secretAccessKey: process.env.NEXT_PUBLIC_SECRET_KEY!,
	},
})

async function uploadFromUrl(url: string, prefix: string): Promise<string> {
	if (!url) return '';
	try {
		const res = await fetch(url)
		if (!res.ok) throw new Error(`Failed to fetch image: ${url}`)
		const buffer = Buffer.from(await res.arrayBuffer())

		const extMatch = url.match(/\.(\w{3,4})(?:$|\?)/)
		const extension = extMatch?.[1] || 'jpg'
		const uniqueName = `${prefix}/${Date.now()}-${Math.floor(Math.random() * 1e6)}.${extension}`

		await s3.send(new PutObjectCommand({
			Bucket: process.env.NEXT_PUBLIC_BUCKET_NAME!,
			Key: uniqueName,
			Body: buffer,
			ContentType: res.headers.get('content-type') || 'application/octet-stream',
		}))

		return `https://${process.env.NEXT_PUBLIC_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_BUCKET_REGION}.amazonaws.com/${uniqueName}`
	} catch (error) {
		console.error(`[UPLOAD_ERROR] Failed to upload ${url}`, error)
		return ''
	}
}

export async function POST(req: Request) {
	try {
		const { workspaceId, testimonials } = await req.json()

		if (!workspaceId || !Array.isArray(testimonials)) {
			return NextResponse.json({ error: 'Invalid input.' }, { status: 400 })
		}

		const user = await currentUser()
		if (!user) {
			return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 })
		}

		const currentUserData = await client.user.findUnique({
			where: {
				clerkid: user.id,
			},
		})
		
		const plan = await client.subscription.findUnique({
			where: {
				userId: currentUserData?.id,
			},
			select: {
				plan: true,
			},
		})

		let importsLimit = 1;

		if (plan?.plan == SUBSCRIPTION_PLAN.FREE) {
			importsLimit = 1;
		} else if (plan?.plan == SUBSCRIPTION_PLAN.PRO) {
			importsLimit = 10;
		} else if (plan?.plan == SUBSCRIPTION_PLAN.BUSINESS) {
			importsLimit = 25;
		}

		const currentUserImportCounter = await client.user.findUnique({
			where: {
				clerkid: user.id,
			},
			select: {
				testiImportCounter: true,
			},
		})

		if(currentUserImportCounter?.testiImportCounter && currentUserImportCounter.testiImportCounter >= importsLimit) {
			return NextResponse.json({ error: 'You have reached the maximum number of imports.' }, { status: 403 })
		}

		const existingGhostForm = await client.form.findFirst({
			where: {
				userId: user.id,
				workspaceId,
				isGhostForm: true,
			},
		})

		const ghostForm = existingGhostForm || await client.form.create({
			data: {
				userId: user.id,
				workspaceId,
				name: '',
				backgroundColor: '',
				brandLogo: '',
				brandName: '',
				primaryColor: '',
				withAnimatedBg: false,
				title: '',
				description: '',
				textareaPlaceholder: '',
				buttonLabel: '',
				published: false,
				isPaused: false,
				pausedUntil: null,
				url: '/p/' + generateUniqueId(),
				customUrl: '',
				thankYouPageTitle: '',
				thankYouPageMessage: '',
				thankYouCustomURL: '',
				isGhostForm: true,
			},
		})

		const created = []
		const skipped = []

		for (const testimonial of testimonials) {
			const email = testimonial.email || null

			const exists = email && await client.formResponse.findFirst({
				where: {
					email,
					formId: ghostForm.id,
				},
			})

			if (exists) {
				skipped.push({ email, reason: 'duplicate' })
				continue
			}

			const avatarUrl = await uploadFromUrl(testimonial.avatar || '', 'avatars')
			const videoUrl = testimonial.video ? await uploadFromUrl(testimonial.video, 'videos') : ''

			const result = await client.formResponse.create({
				data: {
					stars: testimonial.stars || 0,
					message: testimonial.message || '',
					email: email || '',
					name: testimonial.name || '',
					company: testimonial.company || '',
					jobTitle: testimonial.jobTitle != 'NOT GIVEN' ? testimonial.jobTitle : '',
					website: testimonial.link || '',
					formId: ghostForm.id,
					avatar: avatarUrl,
					logo: '',
					video: videoUrl,
					approved: false,
					source: 'imported_from_g2',
					createdAt: testimonial.createdAt ?new Date(testimonial.createdAt) : new Date(),
				},
			})

			created.push(result)
		}

		await client.user.update({
			where: { clerkid: user.id },
			data: { testiImportCounter: { increment: 1 } },
		})

		return NextResponse.json({
			createdCount: created.length,
			skippedCount: skipped.length,
			skipped,
		})
	} catch (error) {
		console.error('[G2_IMPORT_ERROR]', error)
		return NextResponse.json({ error: 'Bulk import failed.' }, { status: 500 })
	}
}
