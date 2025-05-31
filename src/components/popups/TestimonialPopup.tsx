"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { toast } from "sonner";
import { UserInfo } from "@/types/UserInfo";
import { Question } from "@/types/Question";
import { cn } from "@/lib/utils";
import Link from "next/link";
import UploadImage from "../forms/form-editor/UploadImage";
import { FormHeader } from "../forms/form-editor/FormHeader";
import FormPaused from "../forms/form-editor/FormPaused";
import FormUnpublished from "../forms/form-editor/FormUnpublished";
import { FormLoaderSkeleton } from "../global/skeletons/FormLoaderSkeleton";
import { BackgroundGradientAnimation } from "../background-animations/background-gradient-animation";
import options from "../forms/form-editor/CustomerDetailsOptionList";

import { ThankYouScreen } from "./ThankYouScreen";
import { BASE_PRIMARY_COLOR } from "@/constants/colors";
import { SubmitTestimonialButton } from "./SubmitTestimonialButton";
import { CollectWrittenTestimonial } from "../forms/collector/CollectWrittenTestimonial";
import { IntroTestimonialCollector } from "../forms/collector/IntroTestimonialCollector";
import { CollectVideoTestimonial } from "../forms/collector/CollectVideoTestimonial";

interface TestimonialPopupProps {
	backgroundColor: string | undefined;
	primaryColor: string | undefined;
	withAnimatedBg: boolean | undefined;
	published: boolean | undefined;
	isPaused: boolean | undefined;
	step: number | undefined;
	setStep: React.Dispatch<React.SetStateAction<number>>;
	availableOptions: any[] | undefined;
	questions: any[] | undefined;
	textareaPlaceholder: string | undefined;
	buttonLabel: string | undefined;
	title: string | undefined;
	description: string | undefined;
	formId: string | undefined;
	thankYouPageTitle: string | undefined,
	thankYouPageMessage: string | undefined;
	brandLogo: string| undefined;
	brandName: string| undefined;
	onSubmit: any| undefined;
	onInteraction: any| undefined;
	isRaw?: boolean| undefined;
	isCentered?: boolean| undefined;
	isSearchingForm?: boolean
	hasCustomBranding?: boolean
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
	questions,
	textareaPlaceholder,
	buttonLabel,
	title,
	description,
	formId,
	thankYouPageTitle,
	thankYouPageMessage,
	brandLogo,
	brandName,
	onSubmit,
	onInteraction,
	isRaw,
	isCentered,
	isSearchingForm,
	hasCustomBranding
}) => {
	const [finalResponse, setFinalResponse] = useState({
		stars: 0,
		message: "",
	});

	const [video, setVideo] = useState<File | null>(null);


	const getAllOptions = () => {
		const allOptions = options
			.map((option) => ({
				...option,
				...(availableOptions?.find((ao) => ao.key == option.key) || {}),
			}))
			.filter((option) => option.isEnabled);

		return allOptions;
	};

	const CollectReviewerPersonalInformation = React.memo(
		({ buttonLabel }: { buttonLabel: string | undefined }) => {
			const [userInfoValue, setUserInfoValue] = useState<UserInfo>({
				name: '',
				email: '',
				company: '',
				jobTitle: '',
				website: '',
			});
			const [isSubmitting, setIsSubmitting] = useState(false)
			const [focusedKey, setFocusedKey] = useState<string | null>(null);

			const [images, setImages] = useState<any>({
				avatar: '',
				logo: '',
			})

			const handleSubmit = async () => {
				setIsSubmitting(true);
			
				await onInteraction("submitButton");
			
				const requiredFieldsKeys = availableOptions
					?.filter((option) => option.isRequired && option.isEnabled)
					?.map((option) => option.key) || [];
			
				const responseToSubmit = { ...finalResponse, ...userInfoValue, formId };
			
				let isCompletedForm = true;
				requiredFieldsKeys.forEach((optionKey) => {
					if (optionKey === "avatar" && !images.avatar) isCompletedForm = false;
					else if (optionKey === "logo" && !images.logo) isCompletedForm = false;
					else if (optionKey === "name" && !responseToSubmit.name) isCompletedForm = false;
					else if (optionKey === "customer_email" && !responseToSubmit.email) isCompletedForm = false;
					else if (optionKey === "collect_company" && !responseToSubmit.company) isCompletedForm = false;
					else if (optionKey === "job_title" && !responseToSubmit.jobTitle) isCompletedForm = false;
					else if (optionKey === "website_url" && !responseToSubmit.website) isCompletedForm = false;
				});
			
				if (!isCompletedForm) {
					toast.error("Please complete all required fields");
					setIsSubmitting(false);
					return;
				}
			
				const formData = new FormData();
				formData.append("data", JSON.stringify(responseToSubmit));
			
				// Add files if they exist
				if (images.avatar instanceof File) {
					formData.append("avatar", images.avatar);
				}
			
				if (images.logo instanceof File) {
					formData.append("logo", images.logo);
				}

				if (video instanceof File) {
					formData.append("video", video);
				}
			
				const res = await fetch("/api/testimonials/create", {
					method: "POST",
					body: formData,
				});
			
				const response = await res.json();
			
				if (response?.error) {
					toast.error(response.error);
				} else {
					toast.success("Response submitted successfully!");
					setStep(4);
					onSubmit && onSubmit();
				}
			
				setIsSubmitting(false);
			};
			

			const handleInputChange = useCallback(
				(key: string, value: string) => {
					setUserInfoValue((prev) => ({
						...prev,
						[key]: value,
					}));
				},
				[]
			);

			const handleFocus = (key: string) => setFocusedKey(key);

			const handleBlur = () => setFocusedKey(null);

			return (
				<>
					<p className="my-2 text-gray-900 font-bold text-[16px]">
						Almost done 🙌
					</p>

					<div className="flex items-center gap-4 mb-2 justify-center">
						{getAllOptions()
							.filter((option) => option.input.type === "file")
							.map(({ isEnabled, isRequired, input }) => (
								<div key={input.key}>
									<UploadImage
										text={input.text}
										src={input.src}
										alt={input.alt}
										width={input.width}
										height={input.height}
										isRequired={isRequired}
										baseColor={
											primaryColor || BASE_PRIMARY_COLOR
										}
										setImages={setImages}
										inputType={input.key}
									/>
								</div>
							))}
					</div>
					{getAllOptions()
						.filter((option) => option.input.type !== "file")
						.map(({ isEnabled, isRequired, input }) => (
							<div key={input.key}>
								{isEnabled && (
									<>
										{input.type === "file" ? (
											<UploadImage
												text={input.text}
												src={input.src}
												alt={input.alt}
												width={input.width}
												height={input.height}
												inputType={input.key}
												setImages={setImages}
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
														handleInputChange(
															input.key,
															e.target.value
														)
													}
													onFocus={() =>
														handleFocus(input.key)
													}
													onBlur={handleBlur}
													style={
														focusedKey === input.key
															? {
																	border: `solid 1px ${
																		primaryColor ||
																		BASE_PRIMARY_COLOR
																	}`,
															  }
															: {}
													}
													className="px-[15px] py-[8px] rounded-[5px] border border-gray-300 text-gray-700 w-full font-[500] text-[14px] outline-none"
													placeholder={
														input.placeholder
													}
												/>
											</div>
										)}
									</>
								)}
							</div>
						))}

					<div className="mb-6"></div>

					<SubmitTestimonialButton
						buttonLabel={buttonLabel}
						handleSubmit={handleSubmit}
						loading={isSubmitting}
						primaryColor={primaryColor || BASE_PRIMARY_COLOR}
					/>
				</>
			);
		}
	);

	CollectReviewerPersonalInformation.displayName = "CollectReviewerPersonalInformation";

	const renderPopup = (
		questions: Question[] | undefined,
		textareaPlaceholder: string | undefined,
		title: string  | undefined,
		description: string | undefined,
		buttonLabel: string | undefined,
		thankYouPageTitle: string | undefined,
		thankYouPageMessage: string | undefined,
		brandName: string | undefined,
		brandLogo: string | undefined,
		isSearchingForm?: boolean
	) => {

		return (

			<div className="px-[15px] md:px-[25px] py-[15px] md:py-[30px] bg-white shadow-lg rounded-[15px] w-full max-w-[480px] text-left border-[1px] border-gray-100 pointer-events testimonial-modal relative">
				{displayPowerdByLabel()}
				<FormHeader
					brandName={brandName} 
					brandLogo={brandLogo} 
					primaryColor={primaryColor}
					BASE_PRIMARY_COLOR={BASE_PRIMARY_COLOR}
					step={step}
					setStep={setStep}
					onInteraction={onInteraction}
				/>

				{isPaused ? (
					<FormPaused />
				) : (
					<div className="w-full">
						{!published && !isSearchingForm ? (
							<FormUnpublished />
						) : (
							<div className="w-full">
								{isSearchingForm ? (
									<FormLoaderSkeleton />
								) : (
									<>
										{step === 0 && (
											<IntroTestimonialCollector
												setStep={setStep}
												primaryColor={primaryColor || BASE_PRIMARY_COLOR}
											/>
										)}

										{step === 1 && (
											<CollectWrittenTestimonial
												questions={questions}
												textareaPlaceholder={textareaPlaceholder}
												buttonLabel={buttonLabel}
												setFinalResponse={setFinalResponse}
												setStep={setStep}
												description={description}
												primaryColor={primaryColor || BASE_PRIMARY_COLOR}
											/>
										)}

										{step === 2 && (
											<CollectVideoTestimonial
												questions={questions}
												setStep={setStep}
												setVideo={setVideo}
												description={description}
												primaryColor={primaryColor || BASE_PRIMARY_COLOR}
											/>
										)}

										{step === 3 && (
											<CollectReviewerPersonalInformation
												buttonLabel={buttonLabel}
											/>
										)}

										{step === 4 && (
											<ThankYouScreen
												thankYouPageTitle={thankYouPageTitle}
												thankYouPageMessage={thankYouPageMessage}
											/>
										)}
									</>
								)}
							</div>
						)}
					</div>
				)}

			</div>
		);
	};

	const displayPowerdByLabel = () => {
		return !hasCustomBranding && <Link href={process.env.NEXT_PUBLIC_HOST_URL || 'https://feedbackz.co'} className='absolute top-[-10px] right-[15px] px-[10px] py-[2px] rounded-[10px] bg-indigo-600 text-[11px] text-white font-[400] transition-all hover:bg-indigo-500'>Powered by Feedbackz </Link>
	}

	return (
		<div
			className={cn(!isRaw && "relative inset-0 flex items-center justify-center w-full h-full", isCentered && "flex items-center justify-center w-full h-full")}
			style={{ backgroundColor: !isRaw ? (backgroundColor || "white") : 'transparent' }}
		>
			{withAnimatedBg ? (
				<BackgroundGradientAnimation>
					{renderPopup(
						questions,
						textareaPlaceholder,
						title,
						description,
						buttonLabel,
						thankYouPageTitle,
						thankYouPageMessage,
						brandName,
						brandLogo,
						isSearchingForm
					)}
				</BackgroundGradientAnimation>
			) : (
				<>
					{renderPopup(
						questions,
						textareaPlaceholder,
						title,
						description,
						buttonLabel,
						thankYouPageTitle,
						thankYouPageMessage,
						brandName,
						brandLogo,
						isSearchingForm
					)}
				</>
			)}
		</div>
	);
};

export default TestimonialPopup;
