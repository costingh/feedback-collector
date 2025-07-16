import React, { useState } from 'react'
import { Rating } from '@material-tailwind/react'
import { RatedIconVariant2 } from '@/app/(website)/_components/icons/rated-icon-variant-2'
import { UnratedIconVariant2 } from '@/app/(website)/_components/icons/unrated-icon-variant-2'

type StarsRatingProps = {
	ratingChanged?: (newRating: number) => void
	count?: number
	readonly?: boolean
	value?: number
	style?: any
	scale?: any
	marginLeft?: number
	variant: string | undefined
	color: string
}

const StarsRating: React.FC<StarsRatingProps> = ({
	ratingChanged,
	readonly,
	value,
	style,
	scale,
	marginLeft,
	variant,
	color,
}) => {


	if (variant == 'default') {
		return (
			//@ts-ignore
			<Rating
				value={value != undefined ? value : 5}
				className="text-[#FFBF00]"
				style={{
					transform: `scale(${scale})`,
					marginLeft: `${marginLeft}px`,
					...style,
				}}
				onChange={(value) => ratingChanged && ratingChanged(value)}
				readonly={readonly}
			/>
		)
	}

	if (variant == 'custom1') {
		return (
			//@ts-ignore
			<Rating
				value={value != undefined ? value : 5}
				style={{
					transform: `scale(${scale})`,
					marginLeft: `${marginLeft}px`,
					...style,
				}}
				onChange={(value) => ratingChanged && ratingChanged(value)}
				readonly={readonly}
				ratedIcon={<RatedIconVariant2 color={color} />}
				unratedIcon={<UnratedIconVariant2 color={color} />}
			/>
		)
	}

	return (
		//@ts-ignore
		<Rating
			value={value != undefined ? value : 5}
			// unratedColor="white"
			// ratedColor="white"
			// className="text-[#FFBF00]"
			style={{
				transform: `scale(${scale})`,
				marginLeft: `${marginLeft}px`,
				...style,
			}}
			onChange={(value) => ratingChanged && ratingChanged(value)}
			readonly={readonly}
			// ratedIcon={ratedIcon}
			// unratedIcon={unratedIcon}
		/>
	)
}

export default StarsRating
