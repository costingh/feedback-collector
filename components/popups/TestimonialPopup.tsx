"use client";

import React, { useState } from "react";
import StarsRating from "../stars-rating";
import { toast } from "sonner";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import {
	AtSign,
	BriefcaseBusiness,
	Building2,
	Earth,
	LucideOctagon,
} from "lucide-react";
import FormUnpublished from "../form-editor/FormUnpublished";
import UploadImage from "../form-editor/UploadImage";
import { UserInfo } from "@/types/UserInfo";

const options = [
	{
		key: "user_photo",
		text: "Collect User Photo",
		description:
			"Collect user photos to make widgets that convert better because they look more authentic.",
		isEnabled: true,
		isRequired: false,
		icon: <LucideOctagon size={18} />,
		input: {
			type: "file",
			key: "photo",
			accept: ".jpg,.png,.jpeg,.svg",
			text: "Photo with you",
			src: "/avatar-placeholder.jpg",
			alt: "Avatar",
			width: 50,
			height: 50,
		},
	},
	{
		key: "company_logo",
		text: "Collect Company Logo",
		description:
			"Collect company logos to create widgets that showcase the logos of your customers.",
		isEnabled: true,
		isRequired: false,
		icon: <LucideOctagon size={18} />,
		input: {
			type: "file",
			key: "logo",
			accept: ".jpg,.png,.jpeg,.svg",
			text: "Your Company Logo",
			src: "/company-placeholder-image.png",
			alt: "Logo",
			width: 70,
			height: 50,
		},
	},
	{
		key: "customer_email",
		text: "Collect customer email",
		description:
			"Collect email addresses so you can stay in touch and send a thank you note",
		isEnabled: true,
		isRequired: true,
		icon: <AtSign size={18} />,
		alwaysRequired: true,
		input: { label: "Your Name", placeholder: "John Doe", key: "name" },
	},
	{
		key: "job_title",
		text: "Job Title",
		description:
			"Collect job titles so you search by title, and group testimonials in some widgets.",
		isEnabled: true,
		isRequired: false,
		icon: <BriefcaseBusiness size={18} />,
		input: {
			label: "Job Title",
			placeholder: "Your Job Title",
			key: "jobTitle",
		},
	},
	{
		key: "website_url",
		text: "Collect Website URL",
		description:
			"Collect website URL so you can learn more about your customers, and include a link in some widgets.",
		isEnabled: true,
		isRequired: false,
		icon: <Earth size={22} />,
		input: {
			label: "Website",
			placeholder: "https://example.com",
			key: "website",
		},
	},
	{
		key: "collect_company",
		text: "Collect Company",
		description:
			"Collect company name so you can search for testimonials from the same company, and display it in some widgets.",
		isEnabled: true,
		isRequired: false,
		icon: <Building2 size={24} />,
		input: {
			label: "Company",
			placeholder: "Your Company",
			key: "company",
		},
	},
];

interface TestimonialPopupProps {
	backgroundColor: string;
	primaryColor: string;
	withAnimatedBg: boolean;
	published: boolean;
	isPaused: boolean;
	step: number;
	setStep: React.Dispatch<React.SetStateAction<number>>;
	availableOptions: any[];
}

const TestimonialPopup: React.FC<TestimonialPopupProps> = ({
	backgroundColor,
	primaryColor,
	withAnimatedBg,
	published,
	isPaused,
	step,
	setStep,
	availableOptions,
}) => {
	// constants
	const BASE_PRIMARY_COLOR = "rgb(34, 197, 94)";

	// state
	const [message, setMessage] = useState("");
	const [stars, setStars] = useState(0);
	const [focusedKey, setFocusedKey] = useState("");
	const [userInfoValue, setUserInfoValue] = useState<UserInfo>({
		name: "",
		email: "",
		company: "",
		jobTitle: "",
		website: "",
	});


	const handleFocus = (key: string) => setFocusedKey(key);
	const handleBlur = () => setFocusedKey("");

	const handleSubmit = async () => {
		if (step == 1) handleSubmitStepOne();
		else if (step == 2) handleSubmitStepTwo();
	};

	const handleSubmitStepOne = async () => {
		if (!message) {
			toast.error("Please write a message!");
			return;
		}

		if (!stars) {
			toast.error("Please give a star rating!");
			return;
		}

		const data = {
			message,
			stars,
		};

		const URL = "http://localhost:3000/api/review";

		const rawResponse = await fetch(URL, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ data }),
		});

		const content = await rawResponse.json();
		console.log(content);
	};

	const handleSubmitStepTwo = async () => {
		console.log(availableOptions);

		const requiredFieldsKeys : (keyof UserInfo)[] = availableOptions
			.filter((option) => option.isRequired && option.isEnabled)
			.map((option) => option.input.key);

		let isCompletedForm = true;
		requiredFieldsKeys.forEach((optionKey) => {
			if (!userInfoValue[optionKey]) {
				isCompletedForm = false;
			}
		});

		if (!isCompletedForm) {
			toast.error("Please complete all required fields");
			return;
		}
	};

	const ratingChanged = (newRating: number) => {
		console.log(newRating);
		setStars(newRating);
	};

	const RocketIcon = () => (
		<svg
			className="text-gray-50"
			fill="#fff"
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
		>
			<path d="M19.957 4.035c-.345-.024-.682-.035-1.012-.035-7.167 0-11.248 5.464-12.732 9.861l3.939 3.938c4.524-1.619 9.848-5.549 9.848-12.639 0-.367-.014-.741-.043-1.125zm-9.398 11.815l-2.402-2.402c1.018-2.383 3.91-7.455 10.166-7.767-.21 4.812-3.368 8.276-7.764 10.169zm4.559 1.282c-.456.311-.908.592-1.356.842-.156.742-.552 1.535-1.126 2.21-.001-.48-.135-.964-.369-1.449-.413.187-.805.348-1.179.49.551 1.424-.01 2.476-.763 3.462 1.08-.081 2.214-.61 3.106-1.504.965-.962 1.64-2.352 1.687-4.051zm-9.849-5.392c-.482-.232-.965-.364-1.443-.367.669-.567 1.453-.961 2.188-1.121.262-.461.556-.915.865-1.361-1.699.046-3.09.723-4.054 1.686-.893.893-1.421 2.027-1.503 3.106.986-.753 2.039-1.313 3.463-.762.145-.391.305-.785.484-1.181zm6.448.553c-.326-.325-.326-.853 0-1.178.325-.326.853-.326 1.178 0 .326.326.326.854 0 1.179-.326.325-.853.325-1.178-.001zm4.124-4.125c-.65-.65-1.706-.65-2.356 0-.651.651-.651 1.707 0 2.357.65.651 1.706.651 2.357 0 .65-.65.65-1.706-.001-2.357zm-1.591 1.592c-.228-.228-.228-.598 0-.825.227-.228.598-.228.826 0 .227.227.226.597 0 .825-.228.227-.598.227-.826 0zm-12.609 10.555l-.755-.755 4.341-4.323.755.755-4.341 4.323zm4.148 1.547l-.755-.755 3.03-3.054.756.755-3.031 3.054zm-5.034 2.138l-.755-.755 5.373-5.364.756.755-5.374 5.364zm21.083-14.291c-.188.618-.673 1.102-1.291 1.291.618.188 1.103.672 1.291 1.291.189-.619.673-1.103 1.291-1.291-.618-.188-1.102-.672-1.291-1.291zm-14.655-6.504c-.247.81-.881 1.443-1.69 1.69.81.247 1.443.881 1.69 1.69.248-.809.881-1.443 1.69-1.69-.81-.247-1.442-.88-1.69-1.69zm-1.827-3.205c-.199.649-.706 1.157-1.356 1.355.65.199 1.157.707 1.356 1.355.198-.649.706-1.157 1.354-1.355-.648-.198-1.155-.706-1.354-1.355zm5.387 0c-.316 1.035-1.127 1.846-2.163 2.163 1.036.316 1.847 1.126 2.163 2.163.316-1.036 1.127-1.846 2.162-2.163-1.035-.317-1.845-1.128-2.162-2.163zm11.095 13.64c-.316 1.036-1.127 1.846-2.163 2.163 1.036.316 1.847 1.162 2.163 2.197.316-1.036 1.127-1.881 2.162-2.197-1.035-.317-1.846-1.127-2.162-2.163z" />
		</svg>
	);

	const questions: string[] = [
		"What do you like best about our service?",
		"Would you suggest us to a friend?",
	];

	const QuestionList: React.FC = () => (
		<ul className="my-4">
			{questions.map((question, index) => (
				<li
					key={index}
					className="my-1 text-gray-600 font-normal text-[16px]"
				>
					• {question}
				</li>
			))}
		</ul>
	);

	const SubmitButton = () => (
		<button
			onClick={handleSubmit}
			className="p-2.5 rounded-lg text-gray-50 w-full mt-2.5 font-mediumtracking-wide text-[15px] flex items-center gap-4 justify-center"
			style={{ backgroundColor: primaryColor || BASE_PRIMARY_COLOR }}
		>
			<div>Submit</div> <RocketIcon />
		</button>
	);

	const FormHeader = () => (
		<div className="flex items-center justify-between mb-8">
			<div className="text-xl font-black text-gray-900 tracking-wide relative">
				Your brand here
				<div
					className="w-[80px] h-[3px] absolute bottom-[-10px] left-0"
					style={{
						backgroundColor: primaryColor || BASE_PRIMARY_COLOR,
					}}
				></div>
			</div>
			{step > 1 && (
				<div
					className="flex items-center justify-center w-10 h-10 hover:bg-gray-200 border-[1px] border-gray-300 rounded-full cursor-pointer"
					onClick={() => setStep((prevStep) => prevStep - 1)}
				>
					<svg
						className="w-6 h-6 text-gray-400"
						clipRule="evenodd"
						fillRule="evenodd"
						strokeLinejoin="round"
						strokeMiterlimit="2"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z"
							fill-rule="nonzero"
						/>
					</svg>
				</div>
			)}
		</div>
	);

	const CollectWrittenTestimonial = () => (
		<>
			<p className="my-2 text-gray-900 font-bold text-[16px]">
				Do you love using our product? We'd love to hear about it!😊
			</p>
			<QuestionList />
			<StarsRating ratingChanged={ratingChanged} />
			<textarea
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				className="mt-4 p-2.5 rounded-lg border border-gray-300 text-gray-700 min-h-[120px] w-full font-500"
				placeholder="Write a nice message here ✨"
			></textarea>
			<SubmitButton />
		</>
	);

	const getAllOptions = () => {
		const allOptions = options
			.map((option) => ({
				...option,
				...(availableOptions?.find((ao) => ao.key == option.key) || {}),
			}))
			.filter((option) => option.isEnabled);

		return allOptions;
	};

	const CollectReviewerPersonalInformation = () => (
		<>
			<p className="my-2 text-gray-900 font-bold text-[16px]">
				Almost done 🙌
			</p>

			<div className="flex items-center gap-4 mb-2 justify-center">
				{getAllOptions()
					.filter((option) => option.input.type == "file")
					.map(({ isEnabled, isRequired, input }) => (
						<div key={input.key}>
							<UploadImage
								text={input.text}
								src={input.src}
								alt={input.alt}
								width={input.width}
								height={input.height}
								isRequired={isRequired}
								baseColor={BASE_PRIMARY_COLOR}
							/>
						</div>
					))}
			</div>
			{getAllOptions()
				.filter((option) => option.input.type != "file")
				.map(({ isEnabled, isRequired, input }) => (
					<div key={input.key}>
						{isEnabled && (
							<>
								{input.type == "file" ? (
									<UploadImage
										text={input.text}
										src={input.src}
										alt={input.alt}
										width={input.width}
										height={input.height}
									/>
								) : (
									<div className="mb-2">
										<span className="font-[600] text-[13px] text-gray-400">
											{input.label}{" "}
											{isRequired && (
												<span className="text-red-500">
													*
												</span>
											)}
										</span>
										<input
											// @ts-ignore
											value={userInfoValue[input.key] || ""}
											onChange={(e) =>
												setUserInfoValue((prev) => ({
													...prev,
													[input.key]: e.target.value,
												}))
											}
											onFocus={() =>
												handleFocus(input.key)
											}
											onBlur={handleBlur}
											style={
												focusedKey == input.key
													? {
															border: `solid 1px ${
																primaryColor ||
																BASE_PRIMARY_COLOR
															}`,
													  }
													: {}
											}
											className="px-[15px] py-[8px] rounded-[5px] border border-gray-300 text-gray-700 w-full font-[500] text-[14px] outline-none"
											placeholder={input.placeholder}
										/>
									</div>
								)}
							</>
						)}
					</div>
				))}

			<div className="mb-6"></div>

			<SubmitButton />
		</>
	);

	const renderPopup = () => {
		return (
			<div className="px-[25px] py-[30px] bg-white shadow-lg rounded-[15px] min-w-[500px] max-w-full text-left border-[1px] border-gray-100 pointer-events ">
				<FormHeader />

				{!published && step == -1 ? (
					<FormUnpublished />
				) : (
					<>
						{step === 1 && <CollectWrittenTestimonial />}

						{step === 2 && <CollectReviewerPersonalInformation />}
					</>
				)}
			</div>
		);
	};

	return (
		<div
			className="relative inset-0 flex items-center justify-center w-full h-full"
			style={{ backgroundColor: backgroundColor || "white" }}
		>
			{withAnimatedBg ? (
				<BackgroundGradientAnimation>
					{renderPopup()}
				</BackgroundGradientAnimation>
			) : (
				<>{renderPopup()}</>
			)}
		</div>
	);
};

export default TestimonialPopup;
