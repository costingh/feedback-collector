"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Form } from "@/types/Form";
import TestimonialPopup from "@/components/popups/TestimonialPopup";

const FormWidget = ({
	isRaw,
	isCentered,
	form,
	isSearchingForm,
}: {
	formUrl: string;
	isRaw: string | undefined;
	isCentered: string | undefined;
	form: Form;
	isSearchingForm: boolean;
}) => {
	const [step, setStep] = useState(1);
	// const [isSearchingForm, setIsSearchingForm] = useState(true);
	// const [form, setForm] = useState<Form | null>(null);
	const [startTime, setStartTime] = useState<number>(0); // Start time for time spent
	const [hasInteracted, setHasInteracted] = useState(false); // Track user interaction

	// Get device/browser data
	const getDeviceInfo = () => {
		const userAgent = navigator.userAgent;
		const platform = navigator.platform;
		const width = window.innerWidth;
		const deviceType = width <= 768 ? "Mobile" : "Desktop";

		return { userAgent, platform, deviceType };
	};

	const trackMetric = async (
		eventType: string,
		timeSpent: number,
		_form?: any
	) => {
		try {
			await axios.post("/api/analytics/track-metrics", {
				formId: _form?.id,
				eventType,
				timeSpent: timeSpent / 100,
				deviceInfo: getDeviceInfo(),
				countryData: getUserCountry(),
			});
		} catch (error) {
			console.error("Error tracking metric:", error);
		}
	};

	const getUserCountry = () => {
		if (typeof window !== "undefined" && window.navigator) {
			const language = navigator.language;
			const countryCode = language.split("-")[1] || "Unknown";
			return countryCode;
		} else return null;
	};

	const handleInteraction = async () => {
		if (!hasInteracted) {
			setHasInteracted(true);
			await trackMetric("interaction", 0, form);
		}
	};

	const handleSubmitForm = async () => {
		const timeSpent = performance.now() - startTime; // Calculate time spent in seconds

		// Track form completion and time spent
		await trackMetric("completion", timeSpent, form);
	};

	// Handle bounce (user exits without interacting)
	const handleBounce = () => {
		if (!hasInteracted && form) {
			const timeSpent = performance.now() - startTime;
			trackMetric("bounce", timeSpent, form);
		}
	};

	const handleUnload = (startTime: number) => {
		const timeSpent = performance.now() - startTime;
		trackMetric("time", timeSpent, form);
	};

	useEffect(() => {
		const localStartTime = performance.now(); // More precise timing

		setStartTime(localStartTime);
		trackMetric("view", 0, form);

		return () => {
			handleUnload(performance.now() - localStartTime);
			handleBounce();
		};
	}, []);

	return (
		<>
			<TestimonialPopup
				backgroundColor={form?.backgroundColor}
				primaryColor={form?.primaryColor}
				withAnimatedBg={form?.withAnimatedBg}
				availableOptions={form?.formFields}
				published={form?.published}
				isPaused={form?.isPaused}
				step={step}
				setStep={setStep}
				questions={form?.questions}
				textareaPlaceholder={form?.textareaPlaceholder}
				buttonLabel={form?.buttonLabel}
				title={form?.title}
				description={form?.description}
				formId={form?.id}
				thankYouPageTitle={form?.thankYouPageTitle}
				thankYouPageMessage={form?.thankYouPageMessage}
				brandLogo={form?.brandLogo}
				brandName={form?.brandName}
				onInteraction={handleInteraction}
				onSubmit={handleSubmitForm}
				isRaw={isRaw == 'true' ? true : false}
				isCentered={isCentered == 'true' ? true : false}
				isSearchingForm={isSearchingForm}
				hasCustomBranding={form?.hasCustomBranding}
			/>
		</>
	);
};

export default FormWidget;
