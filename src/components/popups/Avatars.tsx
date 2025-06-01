import { Widget } from '@prisma/client'
import SimpleAvatarsVariant from '../widgets/SimpleAvatarsVariant'
import EliteAvatarsVariant from '../widgets/EliteAvatarsVariant'
import InlineAvatarsVariant from '../widgets/InlineAvatarsVariant'

function Avatars({
	transition,
	testimonials,
	widget,
	numberOfReviews,
	style,
}: {
	transition?: boolean
	testimonials: any
	widget:
		| (Widget & { _count: { testimonials: number } } & { avgStars: number })
		| null
		| undefined
	numberOfReviews: string
	style?: React.CSSProperties
}) {
	return (
		<div style={style}>
			{widget?.type == 'avatars' && widget?.variant == 'simple' && (
				<SimpleAvatarsVariant
					transition={transition}
					testimonials={testimonials}
					widget={widget}
				/>
			)}
			{widget?.type == 'avatars' && widget?.variant == 'elite' && (
				<EliteAvatarsVariant
					transition={transition}
					testimonials={testimonials}
					widget={widget}
					numberOfReviews={numberOfReviews}
				/>
			)}
			{widget?.type == 'avatars' && widget?.variant == 'inline' && (
				<InlineAvatarsVariant
					transition={transition}
					testimonials={testimonials}
					widget={widget}
					numberOfReviews={numberOfReviews}
				/>
			)}
		</div>
	)
}

export default Avatars
