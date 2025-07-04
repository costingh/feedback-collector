import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Tag } from '@/types/Tag'
import { Metadata } from 'next'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const truncateString = (string: string, slice?: number) => {
	return string.slice(0, slice || 30) + '...'
}

export function absoluteUrl(path: string) {
	return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}

export const timeAgo = (date: string): string => {
	const now = new Date()
	const givenDate = new Date(date)
	const diffInSeconds = Math.floor(
		(now.getTime() - givenDate.getTime()) / 1000,
	)

	const intervals: { label: string; seconds: number }[] = [
		{ label: 'year', seconds: 31536000 },
		{ label: 'month', seconds: 2592000 },
		{ label: 'day', seconds: 86400 },
		{ label: 'hour', seconds: 3600 },
		{ label: 'minute', seconds: 60 },
		{ label: 'second', seconds: 1 },
	]

	for (const interval of intervals) {
		const count = Math.floor(diffInSeconds / interval.seconds)
		if (count >= 1) {
			return count === 1
				? `1 ${interval.label} ago`
				: `${count} ${interval.label}s ago`
		}
	}

	return 'just now'
}

export const formatNumber = (num: number): string => {
	if (num >= 1_000_000) {
		return `${(num / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`
	} else if (num >= 1_000) {
		return `${(num / 1_000).toFixed(1).replace(/\.0$/, '')}k`
	} else {
		return num.toString()
	}
}

export const formatNumberOfReviews = (no: number) => {
	if (no < 100) {
		return '+' + no.toString()
	}
	if (no >= 100 && no < 1000) {
		return `${Math.floor(no / 100) * 100}+`
	}
	if (no >= 1000 && no < 3000) {
		return '1000+'
	}
	if (no >= 3000 && no < 5000) {
		return '3000+'
	}
	if (no >= 5000 && no < 10000) {
		return '5000+'
	}
	if (no >= 10000 && no < 100000) {
		return '10k+'
	}
	if (no >= 100000 && no < 1000000) {
		return '100k+'
	}
	return '1m+'
}

export const groupTagsByCategory = (tags: Tag[]) => {
	return tags.reduce(
		(acc, tag) => {
			if (!acc[tag.category]) {
				acc[tag.category] = []
			}
			acc[tag.category].push(tag)
			return acc
		},
		{} as { [category: string]: Tag[] },
	)
}

function normalizeHexColor(hex: string): string | null {
	hex = hex.replace('#', '').toLowerCase()

	if (hex.length === 3) {
		// e.g., "abc" → "aabbcc"
		return hex
			.split('')
			.map((c) => c + c)
			.join('')
	}

	if (hex.length === 6 || hex.length === 8) {
		return hex.slice(0, 6) // ignore alpha if present
	}

	return null
}

function hexToLuminance(hex: string): number {
	const r = parseInt(hex.slice(0, 2), 16) / 255
	const g = parseInt(hex.slice(2, 4), 16) / 255
	const b = parseInt(hex.slice(4, 6), 16) / 255

	const adjust = (c: number) =>
		c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)

	return 0.2126 * adjust(r) + 0.7152 * adjust(g) + 0.0722 * adjust(b)
}

export const needsDarkBackground = (widget: any): boolean => {
	if (
		widget?.type == 'avatars' &&
		widget?.variant == 'elite' &&
		(widget?.assetColorVariant == 'white' ||
			widget?.assetColorVariant == 'silver')
	)
		return true
	else if (
		widget?.type == 'avatars' &&
		widget?.variant == 'elite' &&
		(widget?.assetColorVariant == 'gold' ||
			widget?.assetColorVariant == 'black')
	)
		return false

	const rawHex = widget?.primaryTextColor

	if (!rawHex) return false

	const normalizedHex = normalizeHexColor(rawHex)
	if (!normalizedHex) return false

	const luminance = hexToLuminance(normalizedHex)

	// If luminance is high, background is bright, so we need dark text
	return luminance > 0.5
}

export const getAssetColorVariant = (widget: any) => {
	if (widget.type === 'avatars') {
		if (widget.assetColorVariant === 'gold') {
			return '/images/avatars-testimonial-grain-gold.png'
		} else if (widget.assetColorVariant === 'silver') {
			return '/images/avatars-testimonial-grain-silver.png'
		} else if (widget.assetColorVariant === 'black') {
			return '/images/avatars-testimonial-grain-black.png'
		} else if (widget.assetColorVariant === 'white') {
			return '/images/avatars-testimonial-grain.png'
		} else {
			return '/images/avatars-testimonial-grain.png'
		}
	}
}

export const extractWidgetColors = (widget: any) => {
	if (widget.type === 'rating_badge') {
		widget.cardBackground = '#000'
		widget.primaryTextColor = '#000'
		widget.secondaryTextColor = '#fff'
	} else if (widget.type === 'hero_quotes') {
		widget.cardBackground = 'transparent'
		widget.primaryTextColor = '#1a202c'
		widget.secondaryTextColor = '#cbd5e0'
		widget.thirdTextColor = '#90cdf4'
	} else if (widget.type === 'rating_badge') {
		widget.cardBackground = '#000'
		widget.primaryTextColor = '#000'
		widget.secondaryTextColor = '#fff'
	} else if (widget.type === 'hero_quotes') {
		widget.cardBackground = 'transparent'
		widget.primaryTextColor = '#1a202c'
		widget.secondaryTextColor = '#cbd5e0'
		widget.thirdTextColor = '#90cdf4'
	} else {
		widget.cardBackground = '#fff'
		widget.primaryTextColor = '#79797dff'
		widget.secondaryTextColor = '#4b5563'
		widget.thirdTextColor = '#374151'
	}

	widget.starsColor = '#FFBF00'
	widget.starsVariant = 'custom1'

	return widget
}

export const tagCategories = [
	{
		emoji: '📦',
		name: 'Product',
		description:
			'Use this category for tags related to the specific products or services you offer, such as features, usability, or overall satisfaction.',
		suggestions: [
			'Value for Money',
			'Ease of Use',
			'Feature-Rich',
			'Quality',
			'Support',
		],
	},
	{
		emoji: '🏢',
		name: 'Company Size',
		description:
			"Use this category to tag testimonials based on the size of your customer's company, which helps in segmenting feedback according to company scale.",
		suggestions: ['0-10', '11-50', '51-200', '201-500', '500+'],
	},
	{
		emoji: '💼',
		name: 'Business Type',
		description:
			'Use this category for tags related to the type of business your customers are involved in, such as the nature of their business or their business model.',
		suggestions: [
			'B2B',
			'B2C',
			'E-commerce',
			'Non-Profit',
			'Freelancer',
			'Startup',
			'Enterprise',
		],
	},
	{
		emoji: '🏭',
		name: 'Industry',
		description:
			'Use this category for tagging testimonials according to the industry your customers operate in, which can be helpful for industry-specific insights.',
		suggestions: [
			'Technology',
			'Finance',
			'Healthcare',
			'Education',
			'Agriculture',
			'Manufacturing',
			'Retail',
			'Real Estate',
		],
	},
	{
		emoji: '🌍',
		name: 'Geography',
		description:
			'Use this category to tag testimonials based on the geographic location of your customers, which can provide insights into regional differences.',
		suggestions: [
			'North America',
			'Europe',
			'Asia',
			'Australia',
			'Africa',
			'South America',
			'Global',
		],
	},
	{
		emoji: '💡',
		name: 'Use Case',
		description:
			'Use this category for tags that describe how customers are using your product or service, such as specific applications or problems they are solving.',
		suggestions: [
			'Marketing',
			'Sales',
			'Customer Support',
			'HR Management',
			'Project Management',
			'Data Analytics',
		],
	},
	{
		emoji: '⭐',
		name: 'Customer Satisfaction',
		description:
			'Use this category to tag testimonials based on customer satisfaction levels or specific aspects they appreciate about your product or service.',
		suggestions: [
			'Highly Satisfied',
			'Exceeds Expectations',
			'Good Value',
			'Would Recommend',
			'Loyal Customer',
		],
	},
	{
		emoji: '🚀',
		name: 'Growth Stage',
		description:
			"Use this category to tag testimonials based on the growth stage of your customer's business, which can offer insights into the needs of different stages.",
		suggestions: ['Startup', 'Scaling', 'Mature', 'Enterprise'],
	},
	{
		emoji: '🤝',
		name: 'Partnership',
		description:
			'Use this category for tags related to partnerships, collaborations, or the nature of the relationship between your business and the customer.',
		suggestions: [
			'Strategic Partner',
			'Reseller',
			'Distributor',
			'Affiliate',
			'Technology Partner',
		],
	},
	{
		emoji: '🔧',
		name: 'Technical',
		description:
			'Use this category for tags related to the technical aspects of your product or service, such as integration, performance, or reliability.',
		suggestions: [
			'Integration',
			'Reliability',
			'Performance',
			'Scalability',
			'Security',
		],
	},
	{
		emoji: '💬',
		name: 'Feedback Type',
		description:
			"Use this category to tag testimonials based on the type of feedback given, whether it's positive, negative, or constructive.",
		suggestions: [
			'Positive',
			'Negative',
			'Constructive Criticism',
			'Feature Request',
			'Bug Report',
		],
	},
	{
		emoji: '🎯',
		name: 'Goals',
		description:
			'Use this category for tags related to the specific goals or objectives your customers have achieved using your product or service.',
		suggestions: [
			'Increased Revenue',
			'Improved Efficiency',
			'Enhanced Customer Satisfaction',
			'Cost Savings',
			'Market Expansion',
		],
	},
	{
		emoji: '📊',
		name: 'Results',
		description:
			'Use this category for tagging testimonials based on the measurable results or outcomes that customers have experienced.',
		suggestions: [
			'ROI',
			'Growth',
			'Efficiency Gains',
			'Customer Retention',
			'Market Share',
		],
	},
	{
		emoji: '🔍',
		name: 'Discovery',
		description:
			'Use this category to tag testimonials that mention how customers discovered your product or service.',
		suggestions: [
			'Referral',
			'Online Search',
			'Social Media',
			'Advertisement',
			'Event/Conference',
		],
	},
	{
		emoji: '💻',
		name: 'Platform',
		description:
			'Use this category for tagging testimonials based on the platform or environment where your product or service is used.',
		suggestions: ['Web', 'Mobile', 'Desktop', 'Cloud', 'On-premises'],
	},
]

export function generateUniqueId(length = 8) {
	const characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	let uniqueId = ''
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length)
		uniqueId += characters[randomIndex]
	}
	return uniqueId
}

export function constructMetadata({
	title = 'Feedbackz - Collect and share testimonials | Free testimonial collection tool | Feedbackz',
	description = 'Feedbackz helps freelancers and businesses collect and showcase text and video testimonials with shareable pages, forms, and widgets.',
	image = '/images/app-preview.png',
	icons = '/favicon.ico',
	noIndex = false,
	keywords = [
		// Core & mid-difficulty
		'collect testimonials',
		'testimonial software',
		'free testimonial tool',
		'video testimonials',
		'customer testimonials',
		'user feedback platform',
		'testimonial collection tool',
		'testimonial request tool',
		'automated testimonials',
		'testimonials for websites',
		'social proof generator',
		'testimonial landing page',
		'testimonial widget',
		'testimonial SaaS',
		'share testimonials online',
		'testimonial platform free',
		'testimonial marketing',
		'testimonial automation',
		'testimonial builder',
		'feedback to testimonials',
		'get customer testimonials',
		'free tool to collect reviews',
		'showcase testimonials',
		'embed testimonials',
		'video review collection',
		'review collection software',
		'social proof for businesses',

		// Low-hanging fruits
		'how to collect testimonials for free',
		'best way to get customer testimonials',
		'tool to collect client reviews',
		'collect testimonials from clients easily',
		'testimonial collection form',
		'create testimonial page free',
		'best testimonial tool for freelancers',
		'testimonial tool for small business',
		'add testimonials to my website',
		'collect reviews without asking',
		'free review collection form',
		'simple testimonial tool',
		'no code testimonial app',
		'testimonial collection for solopreneurs',
		'how to collect video testimonials easily',
		'gather testimonials from customers',
		'freelancer testimonial showcase tool',
		'free feedback to testimonial converter',
		'tools like Senja',
		'alternatives to Senja.io',
		'free tool to get social proof',
		'freemium testimonial app',
		'turn customer feedback into testimonials',
		'free testimonial embed tool',
		'how to ask clients for testimonials',
		'testimonial platform for coaches',
		'easy testimonial builder',
		'freelancer feedback collection tool',
		'automate testimonial requests',
		'send testimonial request link',
	],
}: {
	title?: string
	description?: string
	image?: string
	icons?: string
	noIndex?: boolean
	keywords?: string[]
} = {}): Metadata {
	return {
		title,
		description,
		openGraph: {
			title,
			description,
			images: [
				{
					url: image,
					width: 1200,
					height: 630,
					alt: title,
				},
			],
			type: 'website',
			siteName: 'Feedbackz',
			locale: 'en_US',
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [image],
			creator: '@feedbackz',
		},
		icons,
		metadataBase: new URL('https://feedbackz.co'),
		...(noIndex && {
			robots: {
				index: false,
				follow: false,
			},
		}),
		keywords,
		alternates: {
			canonical: 'https://feedbackz.co',
		},
		verification: {
			google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
		},
		other: {
			'msapplication-TileColor': '#2b5797',
			'theme-color': '#ffffff',
		},
	}
}

export const generateSoftwareSchema = () => ({
	"@context": "https://schema.org",
	"@type": "SoftwareApplication",
	"name": "Feedbackz",
	"operatingSystem": "Web",
	"applicationCategory": "BusinessApplication",
	"description": "Feedbackz helps freelancers and businesses collect and showcase text and video testimonials with shareable pages, forms, and widgets.",
	"url": "https://feedbackz.co",
	"offers": {
		"@type": "Offer",
		"price": "0",
		"priceCurrency": "USD"
	}
})