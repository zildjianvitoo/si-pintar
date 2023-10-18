import "./globals.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import ModalProvider from "@/components/Provider/ModalProvider";
import ToastProvider from "@/components/Provider/ToastProvider";
import CrispProvider from "@/components/Provider/CrispProvider";

export const metadata: Metadata = {
  title: "Si Pintar",
  description: "Si Pintar AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CrispProvider />
        <body>
          <ModalProvider />
          <ToastProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
