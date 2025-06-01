import Image from 'next/image'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '../ui/tooltip'

const SOURCES = [
	{
		key: 'G2',
		logo: '/images/testimonials-import-sources/g2.png',
		alt: 'G2 testimonials source logo',
		description: 'Source of this testimonial is G2.com',
	},
	{
		key: 'trustpilot',
		logo: '/images/testimonials-import-sources/trustpilot.png',
		alt: 'Trustpilot testimonials source logo',
		description: 'Source of this testimonial is Trustpilot.com',
	},
	{
		key: 'feedbackz',
		logo: '/favicon.ico',
		alt: 'Feedbackz testimonials source logo',
		description: 'Source of this testimonial is Feedbackz.co',
	},
	{
		key: 'capterra',
		logo: '/images/testimonials-import-sources/capterra.png',
		alt: 'Capterra testimonials source logo',
		description: 'Source of this testimonial is Capterra.com',
	},
	{
		key: 'imported_from_file',
		logo: '/images/testimonials-import-sources/imported_from_file.png',
		alt: 'Imported from file testimonials source logo',
		description: 'This testimonials were imported from a file',
	},
]

export default function TestimonialsSourceComponent({
	source,
}: {
	source: string
}) {
	const matchedSource = SOURCES.find(
		(s) => s.key.toLowerCase() === source.toLowerCase(),
	)

	if (!matchedSource) return null

	return (
		<TooltipProvider>
			<Tooltip delayDuration={0}>
				<TooltipTrigger asChild>
					<Image
						src={matchedSource.logo}
						alt={matchedSource.alt}
						width={25}
						height={25}
					/>
				</TooltipTrigger>
				<TooltipContent>
					<p>{matchedSource.description}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
