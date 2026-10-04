"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@/components/ThemeProvider";

// Dynamic imports for code splitting & smooth performance
const DynamicGradient      = dynamic(() => import("@/components/DynamicGradient"),                    { ssr: false });
const LoadingScreen        = dynamic(() => import("@/components/LoadingScreen"),                      { ssr: false });
const Navbar               = dynamic(() => import("@/components/Navbar"),                             { ssr: false });
const HeroSection          = dynamic(() => import("@/components/sections/HeroSection"),               { ssr: false });
const AboutSection         = dynamic(() => import("@/components/sections/AboutSection"),              { ssr: false });
const ThemesSection        = dynamic(() => import("@/components/sections/ThemesSection"),             { ssr: false });
const WhyParticipateSection= dynamic(() => import("@/components/sections/WhyParticipateSection"),     { ssr: false });
const PrizesSection        = dynamic(() => import("@/components/sections/PrizesSection"),             { ssr: false });
const ScheduleSection      = dynamic(() => import("@/components/sections/ScheduleSection"),           { ssr: false });
const SponsorsSection      = dynamic(() => import("@/components/sections/SponsorsSection"),           { ssr: false });
const FAQSection           = dynamic(() => import("@/components/sections/FAQSection"),                { ssr: false });
const VenueSection         = dynamic(() => import("@/components/sections/VenueSection"),              { ssr: false });
const ContactSection       = dynamic(() => import("@/components/sections/ContactSection"),            { ssr: false });
const CTASection           = dynamic(() => import("@/components/sections/CTASection"),                { ssr: false });
const FooterSection        = dynamic(() => import("@/components/sections/FooterSection"),             { ssr: false });

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <ThemeProvider>
      {/* Animated gradient orbs — fixed, behind everything */}
      <DynamicGradient />

      {/* Sleek Minimal Loading Screen */}
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      {/* Navigation */}
      {loaded && <Navbar />}

      {/* Main Content — Strict Order */}
      <main
        className="min-h-screen overflow-x-hidden relative"
        style={{ backgroundColor: "transparent", color: "var(--text)", zIndex: 1 }}
      >
        <HeroSection />
        <AboutSection />
        <ThemesSection />
        <WhyParticipateSection />
        <PrizesSection />
        <ScheduleSection />
        <SponsorsSection />
        <VenueSection />
        <FAQSection />
        <ContactSection />
        <CTASection />
        <FooterSection />
      </main>
    </ThemeProvider>
  );
}
