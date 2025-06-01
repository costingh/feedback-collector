'use client'

import { Question } from '@/types/Question'
import { useRef, useState } from 'react'
import { toast } from 'sonner'
import { QuestionList } from '../../popups/QuestionsList'
import StarsRating from '@/components/stars/stars-rating'
import { RocketIcon } from '@/app/(website)/_components/icons/rocket-icon'

export const CollectWrittenTestimonial = ({
	questions,
	textareaPlaceholder,
	buttonLabel,
	setFinalResponse,
	description,
	setStep,
	primaryColor,
}: {
	questions: Question[] | undefined
	textareaPlaceholder: string | undefined
	buttonLabel: string | undefined
	setFinalResponse: any | undefined
	description: string | undefined
	setStep: any | undefined
	primaryColor: any | undefined
}) => {
	const messageRef = useRef<HTMLTextAreaElement>(null)
	const [stars, setStars] = useState<number>(0)

	const ratingChanged = (newRating: number) => {
		setStars(newRating)
	}

	const handleGoToNextStep = async () => {
		if (!messageRef?.current?.value) {
			toast.error('Please write a message!')
			return
		}

		if (!stars) {
			toast.error('Please give a star rating!')
			return
		}

		// @ts-ignore
		setFinalResponse((prev) => ({
			...prev,
			stars,
			message: messageRef?.current?.value,
		}))
		setStep(3)
	}

	const handleTextareaChange = () => {
		if (messageRef.current) {
			console.log(messageRef.current.value)
		}
	}

	return (
		<>
			<p className="my-2 text-gray-900 font-bold text-[13px] md:text-[16px]">
				{description}
			</p>
			<QuestionList questions={questions} />
			<StarsRating
				value={0}
				ratingChanged={ratingChanged}
				variant="custom1"
				color="#FFBF00"
			/>
			<textarea
				ref={messageRef}
				onChange={handleTextareaChange}
				className="mt-2 md:mt-4 p-2.5 rounded-lg border border-gray-300 text-gray-700 min-h-[100px] md:min-h-[130px] w-full font-500 text-[13px] md:text-[15px]"
				placeholder={textareaPlaceholder}
			></textarea>
			<button
				onClick={handleGoToNextStep}
				className="p-1.5 md:p-2.5 rounded-lg text-gray-50 w-full mt-2.5 font-mediumtracking-wide text-[13px] md:text-[15px] flex items-center gap-4 justify-center"
				style={{
					backgroundColor: primaryColor,
				}}
			>
				<div>Next</div> <RocketIcon />
			</button>
		</>
	)
}
