import type { Metadata } from "next";
import localFont from "next/font/local";
import { Suspense } from "react";

import "./globals.css";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter"

const font = localFont({
  src: [
    {
      path: "../fonts/sarabun-v15-latin_thai-regular.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "../fonts/sarabun-v15-latin_thai-600.woff2",
      style: "normal",
      weight: "600",
    },
  ],
  fallback: ["Helvetica", "sans-serif"],
  preload: false,
});

export const metadata: Metadata = {
  title: "World Wire Game Center",
  description: "World Wire Game Center website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Suspense>
          <SiteHeader />
        </Suspense>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
