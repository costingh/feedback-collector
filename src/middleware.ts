import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const corsOptions = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
	'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

const isProtectedRoutes = createRouteMatcher(['/dashboard(.*)', '/payment(.*)'])
const isPublicApiRoute = createRouteMatcher(['/api/widgets/get(.*)'])

export default clerkMiddleware(async (auth, req: NextRequest) => {
	const isPublic = isPublicApiRoute(req)

	if (req.method === 'OPTIONS') {
		return NextResponse.json({}, {
			status: 200,
			headers: isPublic ? corsOptions : {},
		})
	}

	if (isProtectedRoutes(req)) {
		auth().protect()
	}

	const response = NextResponse.next()

	if (isPublic) {
		Object.entries(corsOptions).forEach(([key, value]) => {
			response.headers.set(key, value)
		})
	}

	return response
})

export const config = {
	matcher: [
		'/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
		'/(api|trpc)(.*)',
	],
}
