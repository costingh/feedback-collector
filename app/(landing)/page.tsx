import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";
import Waitlist from "@/components/landing-page/Waitlist";
import Head from "next/head";
import { CrispChat } from "@/components/CustomerSupport/CrispChat";

const LandingPage = () => {
	return (
		<div className="h-full ">
			{/* <LandingNavbar />
      <LandingHero />
      <LandingContent /> */}
			<CrispChat />
			<Waitlist />
		</div>
	);
};

export default LandingPage;
