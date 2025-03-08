import React from "react";
import LandingPageNavBar from "./_components/navbar";
import { HeroSection } from "./_components/hero-section";
import Footer from "./_components/footer";
import ReactQueryProvider from "@/react-query";

type Props = {
	children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {
	return (
		
				<ReactQueryProvider>
						{/* <LandingPageNavBar />
				<HeroSection />
				<Footer/> */}
						{children}
				</ReactQueryProvider>
	);
};

export default Layout;
