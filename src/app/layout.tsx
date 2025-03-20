import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import ReactQueryProvider from "@/react-query";
import { ReduxProvider } from "@/redux/provider";
import { Toaster } from "sonner";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
	title: "Feedbackz",
	description: "Collect and share testimonials",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// const formId = "kJ3GK61u"; // Example form ID
	// const width = "100%";
	// const height = "12000";
	// const allow = "camera;microphone";

	return (
		<ClerkProvider>
			<html lang="en">
				{/* <!-- Google tag (gtag.js) --> */}
				<Script
					id="gtm-script-1"
					strategy="lazyOnload"
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
				/>

				<Script id="gtm-script-2" strategy="lazyOnload">
					{`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
				</Script>
				<body >
					<Analytics/>
					<SpeedInsights/>
					<ReduxProvider>
						<ReactQueryProvider>
							{children}
							<Toaster />
						</ReactQueryProvider>
					</ReduxProvider>
				</body>

				{/* <Script
						src={`http://localhost:3000/embed.js?formId=${formId}&width=${width}&height=${height}&allow=${allow}`}
						// src={`https://feedbackz.co/embed.js?formId=${formId}&width=${width}&height=${height}&allow=${allow}`}
						strategy="afterInteractive"
					/> */}

					{/* <Script
						src='http://localhost:3000/widget-embed.js'
						strategy="afterInteractive"
					/> */}

					<Script
						src='https://feedbackz.co/widget-embed.js'
						strategy="afterInteractive"
					/>
			</html>
		</ClerkProvider>
	);
}
