"use client";

import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";
import TestimonialPopup from "@/components/popups/TestimonialPopup";
import { useState } from "react";

const LandingPage = () => {
	const [backgroundColor, setBackgroundColor] = useState("#fff");
	const [primaryColor, setPrimaryColor] = useState("#000");
	const [withAnimatedBg, setWithAnimatedBg] = useState(false);
	const [step, setStep] = useState(1);

	return (
		<TestimonialPopup
			backgroundColor={backgroundColor}
			primaryColor={primaryColor}
			withAnimatedBg={withAnimatedBg}
			step={step}
			setStep={setStep}
		/>
	);
};

export default LandingPage;
