import { ClerkProvider } from "@clerk/nextjs";
import { constructMetadata } from "@/lib/metadata";

import { Toaster } from "sonner";
import { ModalProvider } from "@/components/modal-provider";

import "./globals.css";
import "@fontsource-variable/dm-sans";
import Head from "next/head";
import Script from "next/script";
import { ProjectProvider } from "@/context/ProjectContext";
// import { Analytics } from "@vercel/analytics/react"

export const metadata = constructMetadata();

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const formId = "kJ3GK61u"; // Example form ID
	const width = "100%";
	const height = "12000";
	const allow = "camera;microphone";

	return (
		<ClerkProvider>
			<ProjectProvider>
				<html lang="en" suppressHydrationWarning>
					<body>
						{/* <Analytics/> */}
						<Toaster richColors />
						<ModalProvider />
						{children}
					</body>

					{/* <Script
						src={`http://localhost:3000/embed.js?formId=${formId}&width=${width}&height=${height}&allow=${allow}`}
						// src={`https://feedbackz.co/embed.js?formId=${formId}&width=${width}&height=${height}&allow=${allow}`}
						strategy="afterInteractive"
					/> */}
				</html>
			</ProjectProvider>
		</ClerkProvider>
	);
}
