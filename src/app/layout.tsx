import { ClerkProvider } from '@clerk/nextjs'
import ReactQueryProvider from '@/react-query'
import { ReduxProvider } from '@/redux/provider'
import { Toaster } from 'sonner'
import Script from 'next/script'
import StructuredData from '@/components/global/StructuredData'

// vercel analytics
import { Analytics } from '@vercel/analytics/react'
// import { SpeedInsights } from "@vercel/speed-insights/next"

// seo
import { constructMetadata } from '@/lib/utils'

// styles
import './globals.css'
import { Fredoka } from 'next/font/google'
import { SchemaOrg } from '@/components/seo/SchemaOrg'
const fredoka = Fredoka({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	variable: '--font-fredoka',
	display: 'swap',
})

export const metadata = constructMetadata()

const organizationSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	"name": "Feedbackz",
	"url": "https://feedbackz.co",
	"logo": "https://feedbackz.co/images/logo.png",
	"sameAs": [
		"https://twitter.com/costingh_07",
		"https://www.linkedin.com/company/feedbackz-co"
	]
}

const websiteSchema = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	"name": "Feedbackz",
	"url": "https://feedbackz.co"
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	// const formId = "kJ3GK61u"; // Example form ID
	// const width = "100%";
	// const height = "12000";
	// const allow = "camera;microphone";

	return (
		<ClerkProvider>
			<html lang="en" className={fredoka.className}>
				<head>
					<StructuredData
						type="Organization"
						data={{
							name: 'Feedbackz',
							url: 'https://feedbackz.co',
							logo: 'https://feedbackz.co/images/app-preview.png',
							description:
								'Feedbackz helps freelancers and businesses collect and showcase text and video testimonials with shareable pages, forms, and widgets.',
							sameAs: [
								'https://twitter.com/feedbackz',
								'https://linkedin.com/company/feedbackz',
							],
						}}
					/>
					<SchemaOrg schema={organizationSchema} />
					<SchemaOrg schema={websiteSchema} />
				</head>
				<body>
					<Analytics />
					{/* <SpeedInsights/> */}
					<ReduxProvider>
						<ReactQueryProvider>
							{children}
							<Toaster />
						</ReactQueryProvider>
					</ReduxProvider>

					{/* Google Analytics */}
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

					{/* Widget Scripts */}
					<Script
						src={`${process.env.NEXT_PUBLIC_HOST_URL}/widget-embed.iife.js`}
						strategy="afterInteractive"
					/>

					<Script
						src={`${process.env.NEXT_PUBLIC_HOST_URL}/form-embed.iife.js`}
						strategy="afterInteractive"
					/>

					<Script
						src="https://js.howdygo.com/v1.2.1/index.js"
						strategy="afterInteractive"
					/>
				</body>
				{/* <Script
					src='http://localhost:3000/embed.js?formId=YWByDh4R&width=100%&height=100%&allow=camera;microphone'
					strategy="afterInteractive"
				/> */}
			</html>
		</ClerkProvider>
	)
}
