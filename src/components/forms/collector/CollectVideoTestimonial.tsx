"use client";

import { Question } from "@/types/Question";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { QuestionList } from "../../popups/QuestionsList";
import StarsRating from "@/components/stars/stars-rating";
import { RocketIcon } from "@/app/(website)/_components/icons/rocket-icon";
import VideoRecorder from "./VideoRecorder";

export const CollectVideoTestimonial = ({
	questions,
	description,
	setStep,
	primaryColor,
	setVideo
}: {
	questions: Question[] | undefined;
	description: string | undefined;
	setStep: any | undefined;
	primaryColor: any | undefined;
	setVideo: any | undefined;
}) => {
	const [stars, setStars] = useState<number>(0);

	const onVideoChange = (file: File | null) => {
		setVideo(file);
	};

	const ratingChanged = (newRating: number) => {
		setStars(newRating);
	};

	const handleGoToNextStep = async () => {
		if (!stars) {
			toast.error("Please give a star rating!");
			return;
		}

		setStep(3);
	};

	return (
		<>
			<p className="my-2 text-gray-900 font-bold text-[13px] md:text-[16px]">
				{description}
			</p>
			<QuestionList questions={questions} />
			<StarsRating 
				value={0} 
				ratingChanged={ratingChanged}
				variant='custom1'
				color='#FFBF00'
			/>
			
			<VideoRecorder onVideoChange={onVideoChange}/>
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
	);
};
