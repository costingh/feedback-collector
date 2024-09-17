import { Metadata } from "next";

export function constructMetadata({
	title = "Feedbackz - Testimonial Collection Software",
	description = "Feedbackz is a powerful SaaS platform for collecting, managing, and showcasing customer testimonials and feedback. Enhance trust, improve conversions, and grow your business with automated feedback solutions.",

	noIndex = false,
}: {
	title?: string;
	description?: string;
	noIndex?: boolean;
} = {}): Metadata {
	return {
		title,
		description,
		applicationName: "Feedbackz",
		keywords: [
			"testimonial collection software",
			"customer feedback",
			"reviews management",
			"user experience",
			"SaaS feedback platform",
			"automated testimonial gathering",
			"reputation management",
			"AI-powered feedback",
			"feedback analysis",
			"Feedbackz",
		],
		authors: { name: "Duarte Dias", url: "" },
		creator: "Duarte Dias",
		openGraph: {
			title: "Feedbackz - Automate Testimonial Collection",
			description: "Feedbackz is your solution for managing customer feedback and testimonials, designed to boost trust and business growth.",
			type: "website",
			url: "https://feedbackz.co",
			// site_name: "Feedbackz",
		},
		twitter: {
			card: "summary_large_image",
			title: "Feedbackz - Testimonial Collection Software",
			description: "Easily collect and showcase customer testimonials with Feedbackz.",
			creator: "@feedbackz"
		},
		...(noIndex && {
			robots: {
				index: false,
				follow: false,
			},
		}),
	};
}
