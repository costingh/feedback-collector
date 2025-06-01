// const devMode = process.env.NEXT_PUBLIC_HOST_URL == 'http://localhost:3000' ? 'test' : 'prod';
const devMode = 'prod'

const PLANS_CONFIG = {
	test: {
		yearly: {
			pro: {
				stripePriceId: 'price_1R3ExrGnu4Pi9vJZ58X9iHRU',
				stripeProductId: 'prod_Rx9G7p7BNExaP8',
			},
			business: {
				stripePriceId: 'price_1Q7I6bGnu4Pi9vJZjSlOtHD1',
				stripeProductId: 'prod_QzGdkgta0oU98i',
			},
		},
		monthly: {
			pro: {
				stripePriceId: 'price_1Q7I4BGnu4Pi9vJZIrt1t5ky',
				stripeProductId: 'prod_QzGbK3R3n7BIFi',
			},
			business: {
				stripePriceId: 'price_1Q7I5wGnu4Pi9vJZMwaWe5I6',
				stripeProductId: 'prod_QzGdjaWewrA6wv',
			},
		},
	},
	prod: {
		yearly: {
			pro: {
				stripePriceId: 'price_1R3ExrGnu4Pi9vJZ58X9iHRU',
				stripeProductId: 'prod_Rx9G7p7BNExaP8',
			},
			business: {
				stripePriceId: 'price_1Q7I6bGnu4Pi9vJZjSlOtHD1',
				stripeProductId: 'prod_QzGdkgta0oU98i',
			},
		},
		monthly: {
			pro: {
				stripePriceId: 'price_1Q7I4BGnu4Pi9vJZIrt1t5ky',
				stripeProductId: 'prod_QzGbK3R3n7BIFi',
			},
			business: {
				stripePriceId: 'price_1QoRPYGnu4Pi9vJZvRjdSnOu',
				stripeProductId: 'prod_Rhr7G7EzS0CJw0',
			},
		},
	},
}

export const PLANS = {
	yearly: [
		{
			name: 'Pro',
			price: '$90',
			stripePriceId: PLANS_CONFIG[devMode].yearly.pro.stripePriceId,
			stripeProductId: PLANS_CONFIG[devMode].yearly.pro.stripeProductId,
			interval: 'yearly',
			planType: 'PRO_YEARLY',
			description:
				'Start taking control of your website feedback process.',
			forms: 1,
			workspaces: 1,
			members: 1,
			details: [
				'1 workspace',
				'1 team member',
				'Written testimonials',
				'Unlimited tags',
				'Custom branding',
				'Remove the "Powered By"',
				'Integrations',
				'Export data',
			],
		},
		{
			name: 'Business',
			price: '$160',
			stripePriceId: PLANS_CONFIG[devMode].yearly.business.stripePriceId,
			stripeProductId:
				PLANS_CONFIG[devMode].yearly.business.stripePriceId,
			interval: 'yearly',
			planType: 'BUSINESS_YEARLY',
			description: 'Boost your website feedback process to the max.',
			mostPopular: true,
			forms: 3,
			workspaces: 3,
			members: 5,
			details: [
				'3 workspaces',
				'5 team members',
				'Written testimonials',
				'Unlimited tags',
				'Custom branding',
				'Remove the "Powered By"',
				'Integrations',
				'Export data',
				// "Custom metadata"
			],
		},
		{
			name: 'Enterprise',
			price: 'Custom',
			stripePriceId: 'price_1234EnterpriseYearly', // Stripe Price ID for yearly Enterprise plan
			stripeProductId: 'prod_1234Enterprise',
			interval: 'yearly',
			description: 'For your enterprise needs and priority support.',
			forms: Infinity,
			workspaces: Infinity,
			members: Infinity,
			planType: 'CUSTOM_ENTERPRISE',
			details: [
				'All in Business & Pro',
				'Everything Unlimited',
				'Priority support',
				'Pay by invoice',
				'Custom features',
			],
		},
	],
	monthly: [
		{
			name: 'Pro',
			price: '$9',
			stripePriceId: PLANS_CONFIG[devMode].monthly.pro.stripePriceId,
			stripeProductId: PLANS_CONFIG[devMode].monthly.pro.stripePriceId,
			interval: 'monthly',
			planType: 'PRO_MONTHLY',
			description:
				'Start taking control of your website feedback process.',
			forms: 1,
			workspaces: 1,
			members: 1,
			details: [
				'1 workspace',
				'1 team member',
				'Written testimonials',
				'Unlimited tags',
				'Custom branding',
				'Remove the "Powered By"',
				'Integrations',
				'Export data',
			],
		},
		{
			name: 'Business',
			price: '$16',
			stripePriceId: PLANS_CONFIG[devMode].monthly.business.stripePriceId,
			stripeProductId:
				PLANS_CONFIG[devMode].monthly.business.stripePriceId,
			interval: 'monthly',
			description: 'Boost your website feedback process to the max.',
			mostPopular: true,
			planType: 'BUSINESS_MONTHLY',
			forms: 3,
			workspaces: 3,
			members: 5,
			details: [
				'3 workspaces',
				'5 team members',
				'Written testimonials',
				'Unlimited tags',
				'Custom branding',
				'Remove the "Powered By"',
				'Integrations',
				'Export data',
				// "Custom metadata"
			],
		},
		{
			name: 'Enterprise',
			price: 'Custom',
			stripePriceId: 'price_1234EnterpriseMonthly', // Stripe Price ID for monthly Enterprise plan
			stripeProductId: 'prod_1234Enterprise',
			interval: 'monthly',
			description: 'For your enterprise needs and priority support.',
			forms: Infinity,
			workspaces: Infinity,
			members: Infinity,
			planType: 'CUSTOM_ENTERPRISE',
			details: [
				'All in Business & Pro',
				'Everything Unlimited',
				'Priority support',
				'Pay by invoice',
				'Custom features',
			],
		},
	],
}
