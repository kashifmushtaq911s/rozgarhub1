import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { getSiteSettings } from "@/actions/settings";

export async function generateMetadata() {
  const { data } = await getSiteSettings()
  const siteName = data?.site_name || "Rozgarhub"
  const metaDesc = data?.meta_description || "Find your dream job in Pakistan. Build your CV, apply to jobs, and get hired."
  
  return {
    title: `${siteName} | Modern Job Portal Pakistan`,
    description: metaDesc,
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body
        className={`${inter.variable} ${geistMono.variable} min-h-screen flex flex-col text-[17px] leading-relaxed`}
      >
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
