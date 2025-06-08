// app/api/scrape/route.ts (or .js depending on your setup)
import { NextResponse } from 'next/server'
import axios from 'axios'
import { g2ReviewsMock } from '@/mocks/g2-reviews-mock'
import { SUBSCRIPTION_PLAN } from '@prisma/client'
import { client } from '@/lib/prisma'
import { currentUser } from '@clerk/nextjs/server'

export async function POST(req: Request) {
  try {
    const { url, workspaceId } = await req.json()

    if (!url || !url.includes('g2.com/products/')) {
      return new NextResponse('Invalid URL', { status: 400 })
    }

    // Extract the product slug from the G2 URL (e.g., postman from g2.com/products/postman/)
    const match = url.match(/g2\.com\/products\/([^\/]+)/)
    const product = match?.[1]

    if (!product) {
      return new NextResponse('Product not found in URL', { status: 400 })
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

    const response = await axios.get('https://g2-data-api.p.rapidapi.com/g2-products', {
      params: {
        product,
        max_reviews: 1000,
      },
      headers: {
        'x-rapidapi-host': 'g2-data-api.p.rapidapi.com',
        'x-rapidapi-key': '6b22ed3204msh2bbb241e26ef785p12c1c2jsn323e67260591',
      },
    })

	// const response = {data: g2ReviewsMock}

    const reviews = response.data

    return NextResponse.json({ result: reviews })
  } catch (error) {
    console.error('SCRAPER ERROR:', error)
    return new NextResponse('Scraping failed', { status: 500 })
  }
}
