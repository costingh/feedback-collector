"use client";

import TestimonialPopup from "@/components/popups/TestimonialPopup";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader } from "@/components/loader";
import { Form } from "@/types/Form";

const LandingPage = ({ params }: { params: { url: string } }) => {
	// -1, if unpublished, others if published
	const [step, setStep] = useState(-1);
	const [isSearchingForm, setIsSearchingForm] = useState(true);
	const [form, setForm] = useState<Form | null>(null);

	const handleGetFormByUrl = useCallback(
		async (formUrl: string) => {
			setIsSearchingForm(true);
			try {
				const response = await axios.get(
					`/api/get-form?url=${formUrl}`
				);
				const formResponse = response?.data?.form;

				if (!formResponse) {
					toast.error("Form not found!");
					return;
				}
				console.log("Got form: ", formResponse);
				
				setForm(formResponse);

				// if form is published, set step to 1
				if(formResponse.published) setStep(1)
			} catch (err) {
				toast.error("An error occurred while retrieving the form!");
			} finally {
				setIsSearchingForm(false);
			}
		},
		[]
	);

	useEffect(() => {
		handleGetFormByUrl("/p/" + params.url);
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
