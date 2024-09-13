import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";
import Waitlist from "@/components/landing-page/Waitlist";
import Head from "next/head";

const LandingPage = () => {
  return (
    <div className="h-full ">
     
      {/* <LandingNavbar />
      <LandingHero />
      <LandingContent /> */}
      <Waitlist/>
    </div>
  );
};

export default LandingPage;
