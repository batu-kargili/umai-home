import type { Metadata } from "next";

import { PremiumBusinessLandingPage } from "@/components/home/PremiumBusinessLandingPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { FAQ_ITEMS } from "@/components/home/premium-landing-content";
import { SITE_DEFAULT_TITLE } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo";
import { buildFaqJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = buildPageMetadata({
  path: "/",
  title: { absolute: SITE_DEFAULT_TITLE },
  ogTitle: SITE_DEFAULT_TITLE,
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildFaqJsonLd(FAQ_ITEMS)} id="home-faq-jsonld" />
      <PremiumBusinessLandingPage />
    </>
  );
}
