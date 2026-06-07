import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#FF4D00",
};

export const metadata: Metadata = {
  title: "Prazence - Your business, seen online.",
  description:
    "Managed web presence for Indian small businesses. We build your website, set up your Google Business profile, handle your SEO - start to finish. You do nothing technical.",
  keywords:
    "website for small business India, Google Business Profile setup, local SEO India, web presence India, small business website",
  authors: [{ name: "Prazence" }],
  openGraph: {
    title: "Prazence - Your business, seen online.",
    description:
      "We build your website, set up Google Business, manage your SEO. You do nothing technical.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prazence - Your business, seen online.",
    description: "Managed web presence for Indian small businesses.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
