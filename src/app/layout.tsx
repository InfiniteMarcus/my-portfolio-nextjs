import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import { Inter } from "next/font/google";
import "./global.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const pageTitle = "Marcus Natrielli | Engenheiro de Software";
const pageDescription =
  "Site portfólio profissional de Marcus Vinícius Natrielli Garcia, engenheiro de software especializado em React, Next.js e TypeScript.";
const siteUrl = "https://marcusnatrielli.com";

export const viewport: Viewport = {
  themeColor: "#ab0000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: pageTitle,
    template: "%s | Marcus Natrielli",
  },
  description: pageDescription,
  authors: [
    {
      name: "Marcus Vinícius Natrielli Garcia",
      url: siteUrl,
    },
  ],
  creator: "Marcus Vinícius Natrielli Garcia",
  keywords: [
    "Marcus Natrielli",
    "Engenheiro de Software",
    "Software Engineer",
    "Desenvolvedor Frontend",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
    "FullStack Developer",
  ],
  icons: {
    icon: "/images/favicon.ico",
    shortcut: "/images/favicon.ico",
    apple: "/images/icon.png",
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "pt-BR": siteUrl,
      "en-US": siteUrl,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary",
    site: "@marcusnatrielli",
    creator: "@marcusnatrielli",
    description: pageDescription,
    title: pageTitle,
    images: ["/images/photo.webp"],
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: pageTitle,
    description: pageDescription,
    siteName: "Marcus Natrielli Portfolio",
    images: [
      {
        url: "/images/photo.webp",
        width: 400,
        height: 400,
        alt: "Marcus Natrielli",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${inter.variable} font-sans`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
