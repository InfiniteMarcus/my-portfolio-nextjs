import type { Metadata } from "next";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import "./global.css";

const pageTitle = "Marcus Natrielli";
const pageDescription =
  "Site portfólio profissional de Marcus Vinícius Natrielli Garcia desenvolvido com React.js, Next.js, HTML e CSS";
const pageImageURL = "https://marcusnatrielli.com/images/photo.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://marcusnatrielli.com"),
  title: pageTitle,
  description: pageDescription,
  authors: {
    name: pageTitle,
    url: "https://marcusnatrielli.com",
  },
  icons: {
    icon: "images/favicon.ico",
  },
  twitter: {
    card: "summary",
    site: "@marcusnatrielli",
    creator: "@marcusnatrielli",
    description: pageDescription,
    title: pageTitle,
    images: pageImageURL,
  },
  openGraph: {
    type: "website",
    url: "https://marcusnatrielli.com",
    title: pageTitle,
    description: pageDescription,
    siteName: pageTitle,
    images: [
      {
        url: pageImageURL,
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
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
