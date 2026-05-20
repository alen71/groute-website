import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { StatsTrio } from "@/components/landing/StatsTrio";
import { BeforeAfter } from "@/components/landing/BeforeAfter";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { OperativaBlock } from "@/components/landing/OperativaBlock";
import { Hardware } from "@/components/landing/Hardware";
import { ForWho } from "@/components/landing/ForWho";
import { ComplianceBlock } from "@/components/landing/ComplianceBlock";
import { PlatformBento } from "@/components/landing/PlatformBento";
import { OnboardingTimeline } from "@/components/landing/OnboardingTimeline";
import { Testimonials } from "@/components/landing/Testimonials";
import { PilotBanner } from "@/components/landing/PilotBanner";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  return buildMetadata({
    locale,
    path: "",
    title: t("homeTitle"),
    description: t("homeDescription"),
  });
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Nav />
      <Hero />
      <StatsTrio />
      <BeforeAfter />
      <HowItWorks />
      <OperativaBlock />
      <Hardware />
      <ForWho />
      <ComplianceBlock />
      <PlatformBento />
      <OnboardingTimeline />
      {/* <Testimonials /> */}
      <PilotBanner />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
