import { ClerkProvider } from "@clerk/nextjs";
import { constructMetadata } from "@/lib/metadata";

import { Toaster } from 'sonner'
import { ModalProvider } from "@/components/modal-provider";

import "./globals.css";
import '@fontsource-variable/dm-sans';

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
          <Toaster richColors/>
          <ModalProvider />

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
