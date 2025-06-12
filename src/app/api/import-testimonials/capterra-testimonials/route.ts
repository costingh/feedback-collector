import { NextResponse } from 'next/server'
import axios from 'axios'
import { g2ReviewsMock } from '@/mocks/g2-reviews-mock'
import { SUBSCRIPTION_PLAN } from '@prisma/client'
import { client } from '@/lib/prisma'
import { currentUser } from '@clerk/nextjs/server'
import { capterraReviewsMock } from '@/mocks/capterra-reviews-mock'

export async function POST(req: Request) {
    try {
        const { url, workspaceId } = await req.json()

        const product = url;

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

        if (currentUserImportCounter?.testiImportCounter && currentUserImportCounter.testiImportCounter >= importsLimit) {
            return NextResponse.json({ error: 'You have reached the maximum number of imports.' }, { status: 403 })
        }

        // const response = await axios.get('https://capterra-scraper.p.rapidapi.com/capterra/products', {
        //     params: {
        //         product,
        //         max_reviews: 1000,
        //     },
        //     headers: {
        //         'x-rapidapi-host': 'capterra-scraper.p.rapidapi.com',
        //         'x-rapidapi-key': '6b22ed3204msh2bbb241e26ef785p12c1c2jsn323e67260591',
        //     },
        // })

        const response = {data: capterraReviewsMock}

        const reviews = response.data

        return NextResponse.json({ result: reviews })
    } catch (error) {
        console.error('SCRAPER ERROR:', error)
        return new NextResponse('Scraping failed', { status: 500 })
    }
}
