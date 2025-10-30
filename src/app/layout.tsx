

import type { Metadata } from "next";
import localFont from "next/font/local";

import PHProvider from "@app/providers/posthog";


import "./globals.css";
import "./embla.css";
import ClientLayout from "./client-layout";

const gedinarone = localFont({
  src: "../../public/assets/fonts/gedinarone.ttf",
  variable: "--font-gedinarone",
  weight: "700",
  display: "swap",
});

const sora = localFont({
  src: "../../public/assets/fonts/sora.ttf",
  variable: "--font-sora",
  weight: "100 400 700 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Freelance Academy - تعلم الفريلانس من الصفر",
  description:
    "أكاديمية الفريلانس - تعلم مهارات الفريلانس وابدأ عملك الخاص. دورات شاملة في البرمجة، التصميم، التسويق الرقمي والمزيد.",
  keywords: "فريلانس، عمل حر، برمجة، تصميم، تسويق رقمي، دورات تعليمية",
  authors: [{ name: "Freelance Academy" }],
  creator: "Freelance Academy",
  publisher: "Freelance Academy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.freelanceacademy.tn"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://www.freelanceacademy.tn/",
    title: "Freelance Academy - تعلم الفريلانس من الصفر",
    description:
      "أكاديمية الفريلانس - تعلم مهارات الفريلانس وابدأ عملك الخاص. دورات شاملة في البرمجة، التصميم، التسويق الرقمي والمزيد.",
    siteName: "Freelance Academy",
    images: [
      {
        url: "/assets/images/hero-section/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Freelance Academy - تعلم الفريلانس من الصفر",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Academy - تعلم الفريلانس من الصفر",
    description: "أكاديمية الفريلانس - تعلم مهارات الفريلانس وابدأ عملك الخاص",
    images: ["/assets/images/hero-section/thumbnail.png"],
  },
  icons: {
    icon: [
      {
        url: "/assets/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/assets/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/assets/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/assets/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/assets/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {




  return (
    <html lang="en" dir="rtl">
      <head>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=785636104090927&ev=
            PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body
        className={`${gedinarone.variable} ${sora.variable} antialiased bg-background relative`}
      >
        <PHProvider>
          <ClientLayout>{children}</ClientLayout>
        </PHProvider>
      </body>
    </html>
  );
}
