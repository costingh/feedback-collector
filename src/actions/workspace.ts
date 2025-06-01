'use server'

import { client } from '@/lib/prisma'
import { currentUser } from '@clerk/nextjs/server'
import { sendEmail } from './user'
import { createClient, OAuthStrategy } from '@wix/sdk'
import { items } from '@wix/data'
import axios from 'axios'

export const verifyAccessToWorkspace = async (workspaceId: string) => {
	try {
		const user = await currentUser()
		if (!user) return { status: 403 }

		const isUserInWorkspace = await client.workSpace.findUnique({
			where: {
				id: workspaceId,
				OR: [
					{
						User: {
							clerkid: user.id,
						},
					},
					{
						members: {
							every: {
								User: {
									clerkid: user.id,
								},
							},
						},
					},
				],
			},
		})
		return {
			status: 200,
			data: { workspace: isUserInWorkspace },
		}
	} catch (error) {
		return {
			status: 403,
			data: { workspace: null },
		}
	}
}

export const getWorkSpaces = async () => {
	try {
		const user = await currentUser()

		if (!user) return { status: 404 }

		let data = await client.user.findUnique({
			where: {
				clerkid: user.id,
			},
			select: {
				subscription: {
					select: {
						plan: true,
					},
				},
				workspace: {
					select: {
						id: true,
						name: true,
						type: true,
					},
				},
				members: {
					select: {
						WorkSpace: {
							select: {
								id: true,
								name: true,
								type: true,
							},
						},
					},
				},
			},
		})

		if (!data) return { status: 400 }

		data.workspace = [
			...data?.workspace,
			...data?.members?.map((wk: any, index: number) => ({
				id: wk?.WorkSpace?.id,
				name: wk?.WorkSpace?.name,
				type: wk?.WorkSpace?.type,
			})),
		]

		if (data) {
			return { status: 200, data: data }
		}
	} catch (error) {
		return { status: 400 }
	}
}

export const createWorkspace = async (name: string) => {
	try {
		const user = await currentUser()
		if (!user) return { status: 404 }
		const authorized = await client.user.findUnique({
			where: {
				clerkid: user.id,
			},
			select: {
				subscription: {
					select: {
						plan: true,
					},
				},
			},
		})

		if (authorized?.subscription?.plan === 'PRO') {
			const workspace = await client.user.update({
				where: {
					clerkid: user.id,
				},
				data: {
					workspace: {
						create: {
							name,
							type: 'PUBLIC',
						},
					},
				},
			})
			if (workspace) {
				return { status: 201, data: 'Workspace Created' }
			}
		}
		return {
			status: 401,
			data: 'You are not authorized to create a workspace.',
		}
	} catch (error) {
		return { status: 400 }
	}
}

export const howToPost = async () => {
	try {
		const response = await axios.get(process.env.CLOUD_WAYS_POST as string)
		if (response.data) {
			return {
				title: response.data[0].title.rendered,
				content: response.data[0].content.rendered,
			}
		}
	} catch (error) {
		return { status: 400 }
	}
}

export const getUserTestimonials = async (workspaceId: string) => {
	try {
		const user = await currentUser()

		if (!user) return { status: 404 }

		const testimonials = await client.formResponse.findMany({
			where: {
				form: {
					workspaceId: workspaceId,
				},
			},
			include: {
				form: true,
			},
		})

		return { status: 200, data: testimonials }
	} catch (error) {
		console.error('Error fetching testimonials:', error)
		return { status: 400 }
	}
}
