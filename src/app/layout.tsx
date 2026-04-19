import type { Metadata } from "next";
import localFont from "next/font/local";

import { CookieBanner } from "@/components/cookies/CookieBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  SITE_DEFAULT_TITLE,
  SITE_DESCRIPTION,
  SITE_TWITTER_HANDLE,
  SITE_URL,
} from "@/lib/site";
import {
  buildOrganizationJsonLd,
  buildSiteNavigationJsonLd,
  buildWebSiteJsonLd,
} from "@/lib/structured-data";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_DEFAULT_TITLE,
    template: "%s | UMAI",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "enterprise AI control plane",
    "enterprise AI governance",
    "browser AI governance",
    "AI runtime enforcement",
    "tamper-evident audit evidence",
    "KVKK compliance",
    "EU AI Act",
    "PRE_LLM",
    "POST_LLM",
  ],
  icons: {
    icon: [
      { url: "/assets/favicon.ico", sizes: "any" },
      { url: "/assets/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "UMAI",
  },
  twitter: {
    card: "summary_large_image",
    site: SITE_TWITTER_HANDLE,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <JsonLd data={buildOrganizationJsonLd()} id="organization-jsonld" />
        <JsonLd data={buildWebSiteJsonLd()} id="website-jsonld" />
        <JsonLd data={buildSiteNavigationJsonLd()} id="site-navigation-jsonld" />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
