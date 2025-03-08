export const PLANS = [
    {
        planName: 'PRO',
        oldPrice: '$10',
        price: '$5',
        description: 'Subscription billed monthly.',
        features: [
            "1 video recording",
            "5m recording",
            "Shareable links",
            
        ],
        priceId: process.env.STRIPE_SUBSCRIPTION_PRICE_ID,
        buttonCaption: 'Subscribe'
    },
    {
        planName: 'Bussiness',
        oldPrice: '$15',
        price: '$10',
        description: 'Subscription billed monthly.',
        features: [
            "All in PRO plan",
            "Maximum 25mb/video",
            "Unlimited recordings",
            "Unlimited video size",
            "AI features",
            "Workspaces & team",
        ],
        priceId: process.env.STRIPE_SUBSCRIPTION_PRICE_ID,
        buttonCaption: 'Subscribe'
    },
]