import Image from "next/image";

export const sources = [
	{
		name: 'G2',
		id: 'g2',
		key: 'imported_from_g2',
		logo: (
			<Image
				src="/images/testimonials-import-sources/g2.png"
				alt="G2 logo"
				width={20}
				height={20}
			/>
		),
		example: 'https://www.g2.com/products/feedbackz',
		placeholder: 'https://www.g2.com/products/[business-name]',
		pattern: /^https:\/\/www\.g2\.com\/products\/[a-zA-Z0-9-]+$/,
	},
	{
		name: 'Capterra',
		id: 'capterra',
		key: 'imported_from_capterra',
		logo: (
			<Image
				src="/images/testimonials-import-sources/capterra.png"
				alt="Capterra logo"
				width={20}
				height={20}
			/>
		),
		example: 'https://www.capterra.com/p/1234567890/feedbackz',
		placeholder: 'https://www.capterra.com/p/[product-id]',
		pattern: /^https:\/\/www\.capterra\.com\/p\/[0-9]+\/[a-zA-Z0-9-]+$/,
	},
	// {
	// 	name: 'Trustpilot',
	// 	id: 'trustpilot',
	// 	key: 'imported_from_trustpilot',
	// 	logo: (
	// 		<Image
	// 			src="/images/testimonials-import-sources/trustpilot.png"
	// 			alt="Trustpilot logo"
	// 			width={20}
	// 			height={20}
	// 		/>
	// 	),
	// 	example: 'https://www.trustpilot.com/review/feedbackz.com',
	// 	placeholder: 'https://www.trustpilot.com/reviews/[website.com]',
	// 	pattern:
	// 		/^https:\/\/www\.trustpilot\.com\/review\/[a-zA-Z0-9.-]+\.[a-z]+$/,
	// },
	// {
	// 	name: 'X (Twitter)',
	// 	id: 'x',
	// 	key: 'imported_from_x',
	// 	logo: (
	// 		<Image
	// 			src="/images/testimonials-import-sources/twitterx.png"
	// 			alt="X logo"
	// 			width={20}
	// 			height={20}
	// 		/>
	// 	),
	// 	example: 'https://x.com/feedbackz/status/1234567890',
	// 	placeholder: 'https://x.com/[username]/status/[tweet-id]',
	// 	pattern: /^https:\/\/x\.com\/[a-zA-Z0-9_]+\/status\/[0-9]+$/,
	// },
]