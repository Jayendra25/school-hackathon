"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Dynamic imports for code splitting & smooth performance
const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"), {
  ssr: false,
});
const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});
const HeroSection = dynamic(
  () => import("@/components/sections/HeroSection"),
  { ssr: false }
);
const AboutSection = dynamic(
  () => import("@/components/sections/AboutSection"),
  { ssr: false }
);
const ThemesSection = dynamic(
  () => import("@/components/sections/ThemesSection"),
  { ssr: false }
);
const WhyParticipateSection = dynamic(
  () => import("@/components/sections/WhyParticipateSection"),
  { ssr: false }
);
const PrizesSection = dynamic(
  () => import("@/components/sections/PrizesSection"),
  { ssr: false }
);
const ScheduleSection = dynamic(
  () => import("@/components/sections/ScheduleSection"),
  { ssr: false }
);
const SponsorsSection = dynamic(
  () => import("@/components/sections/SponsorsSection"),
  { ssr: false }
);
const FAQSection = dynamic(
  () => import("@/components/sections/FAQSection"),
  { ssr: false }
);
const CTASection = dynamic(
  () => import("@/components/sections/CTASection"),
  { ssr: false }
);
const FooterSection = dynamic(
  () => import("@/components/sections/FooterSection"),
  { ssr: false }
);

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Sleek Minimal Loading Screen */}
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      {/* Navigation */}
      {loaded && <Navbar />}

      {/* Main Content — Strict Order */}
      <main className="bg-black text-white min-h-screen overflow-x-hidden selection:bg-[#8B5CF6]/30 selection:text-white">
        <HeroSection />
        <AboutSection />
        <ThemesSection />
        <WhyParticipateSection />
        <PrizesSection />
        <ScheduleSection />
        <SponsorsSection />
        <FAQSection />
        <CTASection />
        <FooterSection />
      </main>
    </>
  );
}
