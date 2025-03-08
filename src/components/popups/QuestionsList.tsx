import { Question } from "@/types/Question";

export const QuestionList = ({
	questions,
}: {
	questions: Question[] | undefined;
}) => {
	return (
		<ul className="my-2 md:my-4">
			{!questions
				? // Render skeletons when questions are undefined
				  Array.from({ length: 2 }).map((_, index) => (
						<li
							key={index}
							className="my-2 bg-gray-300 animate-pulse h-[25px] rounded-md w-full"
							style={{
								width: `${Math.random() * (100 - 80) + 80}%`,
							}} // Randomize width for each skeleton
						></li>
				  ))
				: // Render actual questions when loaded
				  questions?.map((question, index) => (
						<li
							key={index}
							className="my-1 text-gray-600 font-normal text-[13px] md:text-[16px]"
						>
							• {question.text}
						</li>
				  ))}
		</ul>
	);
};
