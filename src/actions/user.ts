'use server'

import { client } from '@/lib/prisma'
import { currentUser } from '@clerk/nextjs/server'
import { SUBSCRIPTION_PLAN } from '@prisma/client'
import nodemailer from 'nodemailer'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_CLIENT_SECRET as string)

export const sendEmail = async (
	to: string,
	subject: string,
	text: string,
	html?: string,
) => {
	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: process.env.MAILER_EMAIL,
			pass: process.env.MAILER_PASSWORD,
		},
	})

	const mailOptions = {
		to,
		subject,
		text,
		html,
	}
	return { transporter, mailOptions }
}

export const onAuthenticateUser = async () => {
	try {
		const user = await currentUser()
		if (!user) {
			return { status: 403 }
		}

		const userExist = await client.user.findUnique({
			where: {
				clerkid: user.id,
			},
			include: {
				workspace: {
					where: {
						User: {
							clerkid: user.id,
						},
					},
				},
			},
		})
		if (userExist) {
			return { status: 200, user: userExist }
		}

		const newUser = await client.user.create({
			data: {
				clerkid: user.id,
				email: user.emailAddresses[0].emailAddress,
				firstname: user.firstName,
				lastname: user.lastName,
				image: user.imageUrl,
				subscription: {
					create: {},
				},
				workspace: {
					create: {
						name: `${user.firstName || user.fullName || user?.emailAddresses?.[0]?.emailAddress?.split('@')?.[0] || 'Unknown'}'s Workspace`,
						type: 'PERSONAL',
					},
				},
			},
			include: {
				workspace: {
					where: {
						User: {
							clerkid: user.id,
						},
					},
				},
				subscription: {
					select: {
						plan: true,
					},
				},
			},
		})
		if (newUser) {
			return { status: 201, user: newUser }
		}
		return { status: 400 }
	} catch (error) {
		console.log('🔴 ERROR', error)
		return { status: 500 }
	}
}

export const getNotifications = async () => {
	try {
		const user = await currentUser()
		if (!user) return { status: 404 }

		// Fetch everything in parallel
		const [userData, invites] = await Promise.all([
			client.user.findUnique({
				where: { clerkid: user.id },
				select: {
					id: true,
					notification: true,
					_count: {
						select: { notification: true },
					},
				},
			}),
			client.invite.findMany({
				where: {
					reciever: {
						clerkid: user.id,
					},
				},
				select: {
					id: true,
					content: true,
					accepted: true,
					sender: {
						select: {
							id: true,
							firstname: true,
							lastname: true,
							email: true,
							image: true,
						},
					},
					WorkSpace: {
						select: {
							id: true,
							name: true,
							type: true,
							createdAt: true,
						},
					},
				},
			}),
		])

		if (!userData) return { status: 404 }

		return { status: 200, data: { notifications: userData, invites } }
	} catch (error) {
		console.error('Error in getNotifications:', error)
		return { status: 400, data: [] }
	}
}

export const searchUsers = async (query: string) => {
	try {
		const user = await currentUser()
		if (!user) return { status: 404 }

		const users = await client.user.findMany({
			where: {
				OR: [
					{ firstname: { contains: query } },
					{ email: { contains: query } },
					{ lastname: { contains: query } },
				],
				NOT: [{ clerkid: user.id }],
			},
			select: {
				id: true,
				subscription: {
					select: {
						plan: true,
					},
				},
				firstname: true,
				lastname: true,
				image: true,
				email: true,
			},
		})

		if (users && users.length > 0) {
			return { status: 200, data: users }
		}

		return { status: 404, data: undefined }
	} catch (error) {
		return { status: 500, data: undefined }
	}
}

export const getPaymentInfo = async () => {
	try {
		const user = await currentUser()
		if (!user) return { status: 404 }

		const payment = await client.user.findUnique({
			where: {
				clerkid: user.id,
			},
			select: {
				subscription: {
					select: { plan: true },
				},
			},
		})
		if (payment) {
			return { status: 200, data: payment }
		}
	} catch (error) {
		return { status: 400 }
	}
}

export const getUserPlanType = async () => {
	try {
		const user = await currentUser()
		if (!user) return { status: 404 }

		const payment = await client.user.findUnique({
			where: {
				clerkid: user.id,
			},
			select: {
				createdAt: true,
				subscription: {
					select: { plan: true },
				},
			},
		})

		if (!payment) {
			return { status: 400 }
		}

		const currentUserPlan = payment?.subscription?.plan
		const trialStart = payment?.createdAt

		const trialDuration = 14 * 24 * 60 * 60 * 1000
		const now = Date.now()
		const trialStartTimestamp = new Date(trialStart).getTime()

		if (
			now - trialStartTimestamp > trialDuration &&
			currentUserPlan === 'FREE'
		) {
			return { status: 200, data: 'TRIAL_EXPIRED' }
		} else if (
			currentUserPlan === 'FREE' &&
			now - trialStartTimestamp <= trialDuration
		) {
			return { status: 200, data: 'TRIAL' }
		} else {
			return { status: 200, data: currentUserPlan }
		}
	} catch (error) {
		return { status: 400 }
	}
}

export const enableFirstView = async (state: boolean) => {
	try {
		const user = await currentUser()

		if (!user) return { status: 404 }

		const view = await client.user.update({
			where: {
				clerkid: user.id,
			},
			data: {
				firstView: state,
			},
		})

		if (view) {
			return { status: 200, data: 'Setting updated' }
		}
	} catch (error) {
		return { status: 400 }
	}
}

export const getFirstView = async () => {
	try {
		const user = await currentUser()
		if (!user) return { status: 404 }
		const userData = await client.user.findUnique({
			where: {
				clerkid: user.id,
			},
			select: {
				firstView: true,
			},
		})
		if (userData) {
			return { status: 200, data: userData.firstView }
		}
		return { status: 400, data: false }
	} catch (error) {
		return { status: 400 }
	}
}

export const getUserProfile = async () => {
	try {
		const user = await currentUser()
		if (!user) return { status: 404 }
		const profileIdAndImage = await client.user.findUnique({
			where: {
				clerkid: user.id,
			},
			select: {
				image: true,
				id: true,
			},
		})

		if (profileIdAndImage) return { status: 200, data: profileIdAndImage }
	} catch (error) {
		return { status: 400 }
	}
}

export const inviteMembers = async (
	workspaceId: string,
	recieverId: string,
	email: string,
) => {
	try {
		const user = await currentUser()
		if (!user) return { status: 404 }
		const senderInfo = await client.user.findUnique({
			where: {
				clerkid: user.id,
			},
			select: {
				id: true,
				firstname: true,
				lastname: true,
			},
		})
		if (senderInfo?.id) {
			const workspace = await client.workSpace.findUnique({
				where: {
					id: workspaceId,
				},
				select: {
					name: true,
				},
			})
			if (workspace) {
				const invitation = await client.invite.create({
					data: {
						senderId: senderInfo.id,
						recieverId,
						workSpaceId: workspaceId,
						content: `You are invited to join ${workspace.name} Workspace, click accept to confirm`,
					},
					select: {
						id: true,
					},
				})

				await client.user.update({
					where: {
						clerkid: user.id,
					},
					data: {
						notification: {
							create: {
								content: `${user.primaryEmailAddress || user.fullName} ${user.lastName} invited ${senderInfo.firstname} into ${workspace.name}`,
							},
						},
					},
				})

				return { status: 200, data: 'Invite sent' }
				// if (invitation) {
				// 	const { transporter, mailOptions } = await sendEmail(
				// 		email,
				// 		'You got an invitation',
				// 		`You are invited to join ${workspace.name} Workspace, click accept to confirm`,
				// 		`<a href="${process.env.NEXT_PUBLIC_HOST_URL}/invite/${invitation.id}" style="background-color: #000; padding: 5px 10px; border-radius: 10px;">Accept Invite</a>`
				// 	)

				// 	transporter.sendMail(mailOptions, (error, info) => {
				// 		if (error) {
				// 			console.log('🔴', error.message)
				// 		} else {
				// 			console.log('✅ Email send')
				// 		}
				// 	})
				// 	return { status: 200, data: 'Invite sent' }
				// }
				// return { status: 400, data: 'invitation failed' }
			}
			return { status: 404, data: 'workspace not found' }
		}
		return { status: 404, data: 'recipient not found' }
	} catch (error) {
		console.log(error)
		return { status: 400, data: 'Oops! something went wrong' }
	}
}

export const acceptInvite = async (inviteId: string) => {
	try {
		const user = await currentUser()
		if (!user)
			return {
				status: 404,
			}
		const invitation = await client.invite.findUnique({
			where: {
				id: inviteId,
			},
			select: {
				workSpaceId: true,
				reciever: {
					select: {
						clerkid: true,
					},
				},
			},
		})

		if (user.id !== invitation?.reciever?.clerkid) return { status: 401 }
		const acceptInvite = client.invite.update({
			where: {
				id: inviteId,
			},
			data: {
				accepted: true,
			},
		})

		const updateMember = client.user.update({
			where: {
				clerkid: user.id,
			},
			data: {
				members: {
					create: {
						workSpaceId: invitation.workSpaceId,
					},
				},
			},
		})

		const membersTransaction = await client.$transaction([
			acceptInvite,
			updateMember,
		])

		if (membersTransaction) {
			return { status: 200 }
		}
		return { status: 400 }
	} catch (error) {
		return { status: 400 }
	}
}

export const completeSubscription = async (
	session_id: string,
	planType?: SUBSCRIPTION_PLAN,
) => {
	try {
		const user = await currentUser()
		if (!user) return { status: 404 }
		if (!planType) return { status: 404 }

		const session = await stripe.checkout.sessions.retrieve(session_id)
		if (session) {
			const customer = await client.user.update({
				where: {
					clerkid: user.id,
				},
				data: {
					subscription: {
						update: {
							data: {
								customerId: session.customer as string,
								plan: planType,
							},
						},
					},
				},
			})
			if (customer) {
				return { status: 200 }
			}
		}
		return { status: 404 }
	} catch (error) {
		return { status: 400 }
	}
}
