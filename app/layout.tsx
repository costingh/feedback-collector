import { ClerkProvider } from "@clerk/nextjs";
import { constructMetadata } from "@/lib/metadata";

import { Toaster } from "sonner";
import { ModalProvider } from "@/components/modal-provider";

import "./globals.css";
import "@fontsource-variable/dm-sans";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react"
import { CrispChat } from "@/components/CustomerSupport/CrispChat";

export const metadata = constructMetadata();

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<html lang="en" suppressHydrationWarning>
				<body>
					<CrispChat/>
					<Analytics/>
					<Toaster richColors />
					<ModalProvider />
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
