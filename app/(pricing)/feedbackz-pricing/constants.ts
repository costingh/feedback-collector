export const PLANS = {
    yearly: [
        {
            name: "Pro",
            price: "$190",
            stripePriceId: "price_1Q7I7DGnu4Pi9vJZJ97ceVP2",
            stripeProductId: "prod_QzGeAf3NLkjgDQ",
            interval: "yearly",
            description: "Start taking control of your website feedback process.",
            details: [
                "Unlimited projects & feedback",
                "Unlimited reporters",
                "5 team members",
                "Screenshot feedback",
                "Video feedback",
                "Feedback collaboration",
                "Integrations",
            ],
        },
        {
            name: "Business",
            price: "$490",
            stripePriceId: "price_1Q7I6bGnu4Pi9vJZjSlOtHD1", // Stripe Price ID for yearly Business plan
            stripeProductId: "prod_QzGdkgta0oU98i",
            interval: "yearly",
            description: "Boost your website feedback process to the max.",
            mostPopular: true,
            details: [
                "All in Pro",
                "25 team members",
                "Console logs",
                "JavaScript API",
                "Custom branding",
                'Remove the "Powered By"',
                "Custom metadata",
                "Export data",
            ],
        },
        {
            name: "Enterprise",
            price: "Custom",
            stripePriceId: "price_1234EnterpriseYearly", // Stripe Price ID for yearly Enterprise plan
            stripeProductId: "prod_1234Enterprise",
            interval: "yearly",
            description: "For your enterprise needs and priority support.",
            details: [
                "All in Business",
                "Dedicated success manager",
                "Priority support",
                "Pay by invoice",
                "SSO (coming soon)",
            ],
        },
    ],
    monthly: [
        {
            name: "Pro",
            price: "$19",
            stripePriceId: "price_1Q7I4BGnu4Pi9vJZIrt1t5ky", // Stripe Price ID for monthly Pro plan
            stripeProductId: "prod_QzGbK3R3n7BIFi",
            interval: "monthly",
            description: "Start taking control of your website feedback process.",
            details: [
                "Unlimited projects & feedback",
                "Unlimited reporters",
                "5 team members",
                "Screenshot feedback",
                "Video feedback",
                "Feedback collaboration",
                "Integrations",
            ],
        },
        {
            name: "Business",
            price: "$49",
            stripePriceId: "price_1Q7I5wGnu4Pi9vJZMwaWe5I6", // Stripe Price ID for monthly Business plan
            stripeProductId: "prod_QzGdjaWewrA6wv",
            interval: "monthly",
            description: "Boost your website feedback process to the max.",
            mostPopular: true,
            details: [
                "All in Pro",
                "25 team members",
                "Console logs",
                "JavaScript API",
                "Custom branding",
                'Remove the "Powered By"',
                "Custom metadata",
                "Export data",
            ],
        },
        {
            name: "Enterprise",
            price: "Custom",
            stripePriceId: "price_1234EnterpriseMonthly", // Stripe Price ID for monthly Enterprise plan
            stripeProductId: "prod_1234Enterprise",
            interval: "monthly",
            description: "For your enterprise needs and priority support.",
            details: [
                "All in Business",
                "Dedicated success manager",
                "Priority support",
                "Pay by invoice",
                "SSO (coming soon)",
            ],
        },
    ],
};
