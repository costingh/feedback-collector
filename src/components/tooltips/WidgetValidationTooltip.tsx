import { TriangleAlert } from 'lucide-react'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'

interface WidgetValidationTooltipProps {
	widgetType: string
	testimonialsCount: number
}

export function WidgetValidationTooltip({
	widgetType,
	testimonialsCount,
}: WidgetValidationTooltipProps) {
	const getValidationMessage = () => {
		switch (widgetType) {
			case 'rolling_wall':
				return 'You must have at least 10 testimonials selected for the rolling wall. We suggest you to add more testimonials for this to look more appealing.'
			case 'basic_wall':
				return 'You must have at least 3 testimonials selected for the basic wall. We suggest you to add more testimonials for this to look more appealing.'
			case 'social_star':
				return 'You must have at least 1 testimonial selected for the social star widget.'
			case 'rating_badge':
				return 'You must have at least 1 testimonial selected for the rating badge widget.'
			case 'avatars':
				return 'You must have at least 3 testimonials selected for the avatars widget.'
			case 'hero_quotes':
				return 'You must have at least 1 testimonial selected for the hero quotes widget.'
			default:
				return 'Please select at least one testimonial for this widget.'
		}
	}

	const shouldShowWarning = () => {
		switch (widgetType) {
			case 'rolling_wall':
				return testimonialsCount < 10
			case 'basic_wall':
				return testimonialsCount < 3
			case 'social_star':
			case 'rating_badge':
			case 'hero_quotes':
				return testimonialsCount < 1
			case 'avatars':
				return testimonialsCount < 3
			default:
				return testimonialsCount < 1
		}
	}

	if (!shouldShowWarning()) return null

	return (
		<TooltipProvider>
			<Tooltip delayDuration={0}>
				<TooltipTrigger asChild>
					<div className="rounded-[6px] p-1 bg-yellow-200 cursor-pointer">
						<TriangleAlert className="text-yellow-600" size={15} />
					</div>
				</TooltipTrigger>
				<TooltipContent>
					<p>{getValidationMessage()}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
