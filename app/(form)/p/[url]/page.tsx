"use client";

import TestimonialPopup from "@/components/popups/TestimonialPopup";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader } from "@/components/loader";
import { Form } from "@/types/Form";
import { useSearchParams } from 'next/navigation'

const LandingPage = ({ params }: { params: { url: string } }) => {
	const searchParams = useSearchParams()

	const [isRaw, setIsRaw] = useState(searchParams.get('raw'))
	const [isCentered, setIsCentered] = useState(searchParams.get('centered'))
	const [step, setStep] = useState(-1);
	const [isSearchingForm, setIsSearchingForm] = useState(true);
	const [form, setForm] = useState<Form | null>(null);
	const [startTime, setStartTime] = useState<number | null>(null); // Start time for time spent
	const [hasInteracted, setHasInteracted] = useState(false); // Track user interaction

	// Get device/browser data
	const getDeviceInfo = () => {
		const userAgent = navigator.userAgent;
		const platform = navigator.platform;
		return `${platform}, ${userAgent}`;
	};

	const trackMetric = async (eventType: string, timeSpent?: number, _form?: any) => {
		try {
			console.log(_form)
			await axios.post("/api/analytics/track-metrics", {
				formId: _form?.id,
				eventType,
				timeSpent,
				deviceInfo: getDeviceInfo(),
			});
		} catch (error) {
			console.error("Error tracking metric:", error);
		}
	};

	const handleGetFormByUrl = useCallback(async (formUrl: string) => {
		setIsSearchingForm(true);
		try {
			const response = await axios.get(`/api/get-form?url=${formUrl}`);
			const formResponse = response?.data?.form;

			if (!formResponse) {
				toast.error("Form not found!");
				return;
			}

			setForm(formResponse);
			if (formResponse.published) setStep(1);

			// Track view
			trackMetric("view", 0, formResponse);

			// Start time tracking
			setStartTime(Date.now());
		} catch (err) {
			toast.error("An error occurred while retrieving the form!");
		} finally {
			setIsSearchingForm(false);
		}
	}, []);

	const handleInteraction = () => {
		if (!hasInteracted) {
			setHasInteracted(true);
			trackMetric("interaction", 0, form);
		}
	};

	const handleSubmitForm = async () => {
		const timeSpent = (Date.now() - (startTime ?? 0)) / 1000; // Calculate time spent in seconds

		// Track form completion and time spent
		trackMetric("completion", timeSpent, form);
	};

	// Handle bounce (user exits without interacting)
	const handleBounce = () => {
		if (!hasInteracted && form) {
			trackMetric("bounce", 0, form);
		}
	};

	useEffect(() => {
		handleGetFormByUrl("/p/" + params.url);

		window.addEventListener("beforeunload", handleBounce);

		// Cleanup on component unmount
		return () => {
			if (startTime) {
				const timeSpent = (Date.now() - startTime) / 1000;
				trackMetric("time", timeSpent, form);
			}
			window.removeEventListener("beforeunload", handleBounce);
		};
	}, []);

	return (
		<>
			{isSearchingForm ? (
				<Loader />
			) : (
				<>
					{form ? (
						<TestimonialPopup
							backgroundColor={form.backgroundColor}
							primaryColor={form.primaryColor}
							withAnimatedBg={form.withAnimatedBg}
							availableOptions={form.formFields}
							published={form.published}
							isPaused={form.isPaused}
							step={step}
							setStep={setStep}
							questions={form.questions}
							textareaPlaceholder={form.textareaPlaceholder}
							buttonLabel={form.buttonLabel}
							title={form.title}
							description={form.description}
							formId={form.id}
							thankYouPageTitle={form.thankYouPageTitle}
							thankYouPageMessage={form.thankYouPageMessage}
							brandLogo={form.brandLogo}
							brandName={form.brandName}
							onInteraction={handleInteraction} 
							onSubmit={handleSubmitForm} 
							isRaw={isRaw ? true : false}
							isCentered={isCentered ? true : false}
						/>
					) : (
						<div className="flex items-center justify-center">
							<p className="mt-10">Not found</p>
						</div>
					)}
				</>
			)}
		</>
	);
};

export default LandingPage;
