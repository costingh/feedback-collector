import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Tag } from "@/types/Tag";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const truncateString = (string: string, slice?: number) => {
	return string.slice(0, slice || 30) + '...'
}

export function absoluteUrl(path: string) {
	return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export const timeAgo = (date: string): string => {
	const now = new Date();
	const givenDate = new Date(date);
	const diffInSeconds = Math.floor(
		(now.getTime() - givenDate.getTime()) / 1000
	);

	const intervals: { label: string; seconds: number }[] = [
		{ label: "year", seconds: 31536000 },
		{ label: "month", seconds: 2592000 },
		{ label: "day", seconds: 86400 },
		{ label: "hour", seconds: 3600 },
		{ label: "minute", seconds: 60 },
		{ label: "second", seconds: 1 },
	];

	for (const interval of intervals) {
		const count = Math.floor(diffInSeconds / interval.seconds);
		if (count >= 1) {
			return count === 1
				? `1 ${interval.label} ago`
				: `${count} ${interval.label}s ago`;
		}
	}

	return "just now";
};

export const formatNumber = (num: number): string => {
	if (num >= 1_000_000) {
		return `${(num / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`;
	} else if (num >= 1_000) {
		return `${(num / 1_000).toFixed(1).replace(/\.0$/, '')}k`;
	} else {
		return num.toString();
	}
};

export const groupTagsByCategory = (tags: Tag[]) => {
	return tags.reduce((acc, tag) => {
		if (!acc[tag.category]) {
			acc[tag.category] = [];
		}
		acc[tag.category].push(tag);
		return acc;
	}, {} as { [category: string]: Tag[] });
};

export const tagCategories = [
	{
		emoji: "📦",
		name: "Product",
		description:
			"Use this category for tags related to the specific products or services you offer, such as features, usability, or overall satisfaction.",
		suggestions: [
			"Value for Money",
			"Ease of Use",
			"Feature-Rich",
			"Quality",
			"Support",
		],
	},
	{
		emoji: "🏢",
		name: "Company Size",
		description:
			"Use this category to tag testimonials based on the size of your customer's company, which helps in segmenting feedback according to company scale.",
		suggestions: [
			"0-10",
			"11-50",
			"51-200",
			"201-500",
			"500+",
		],
	},
	{
		emoji: "💼",
		name: "Business Type",
		description:
			"Use this category for tags related to the type of business your customers are involved in, such as the nature of their business or their business model.",
		suggestions: [
			"B2B",
			"B2C",
			"E-commerce",
			"Non-Profit",
			"Freelancer",
			"Startup",
			"Enterprise",
		],
	},
	{
		emoji: "🏭",
		name: "Industry",
		description:
			"Use this category for tagging testimonials according to the industry your customers operate in, which can be helpful for industry-specific insights.",
		suggestions: [
			"Technology",
			"Finance",
			"Healthcare",
			"Education",
			"Agriculture",
			"Manufacturing",
			"Retail",
			"Real Estate",
		],
	},
	{
		emoji: "🌍",
		name: "Geography",
		description:
			"Use this category to tag testimonials based on the geographic location of your customers, which can provide insights into regional differences.",
		suggestions: [
			"North America",
			"Europe",
			"Asia",
			"Australia",
			"Africa",
			"South America",
			"Global",
		],
	},
	{
		emoji: "💡",
		name: "Use Case",
		description:
			"Use this category for tags that describe how customers are using your product or service, such as specific applications or problems they are solving.",
		suggestions: [
			"Marketing",
			"Sales",
			"Customer Support",
			"HR Management",
			"Project Management",
			"Data Analytics",
		],
	},
	{
		emoji: "⭐",
		name: "Customer Satisfaction",
		description:
			"Use this category to tag testimonials based on customer satisfaction levels or specific aspects they appreciate about your product or service.",
		suggestions: [
			"Highly Satisfied",
			"Exceeds Expectations",
			"Good Value",
			"Would Recommend",
			"Loyal Customer",
		],
	},
	{
		emoji: "🚀",
		name: "Growth Stage",
		description:
			"Use this category to tag testimonials based on the growth stage of your customer's business, which can offer insights into the needs of different stages.",
		suggestions: ["Startup", "Scaling", "Mature", "Enterprise"],
	},
	{
		emoji: "🤝",
		name: "Partnership",
		description:
			"Use this category for tags related to partnerships, collaborations, or the nature of the relationship between your business and the customer.",
		suggestions: [
			"Strategic Partner",
			"Reseller",
			"Distributor",
			"Affiliate",
			"Technology Partner",
		],
	},
	{
		emoji: "🔧",
		name: "Technical",
		description:
			"Use this category for tags related to the technical aspects of your product or service, such as integration, performance, or reliability.",
		suggestions: [
			"Integration",
			"Reliability",
			"Performance",
			"Scalability",
			"Security",
		],
	},
	{
		emoji: "💬",
		name: "Feedback Type",
		description:
			"Use this category to tag testimonials based on the type of feedback given, whether it's positive, negative, or constructive.",
		suggestions: [
			"Positive",
			"Negative",
			"Constructive Criticism",
			"Feature Request",
			"Bug Report",
		],
	},
	{
		emoji: "🎯",
		name: "Goals",
		description:
			"Use this category for tags related to the specific goals or objectives your customers have achieved using your product or service.",
		suggestions: [
			"Increased Revenue",
			"Improved Efficiency",
			"Enhanced Customer Satisfaction",
			"Cost Savings",
			"Market Expansion",
		],
	},
	{
		emoji: "📊",
		name: "Results",
		description:
			"Use this category for tagging testimonials based on the measurable results or outcomes that customers have experienced.",
		suggestions: [
			"ROI",
			"Growth",
			"Efficiency Gains",
			"Customer Retention",
			"Market Share",
		],
	},
	{
		emoji: "🔍",
		name: "Discovery",
		description:
			"Use this category to tag testimonials that mention how customers discovered your product or service.",
		suggestions: [
			"Referral",
			"Online Search",
			"Social Media",
			"Advertisement",
			"Event/Conference",
		],
	},
	{
		emoji: "💻",
		name: "Platform",
		description:
			"Use this category for tagging testimonials based on the platform or environment where your product or service is used.",
		suggestions: ["Web", "Mobile", "Desktop", "Cloud", "On-premises"],
	},
]