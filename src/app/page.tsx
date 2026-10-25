"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@/components/ThemeProvider";

// Dynamic imports for code splitting & smooth performance
const DynamicGradient      = dynamic(() => import("@/components/DynamicGradient"),                    { ssr: false });
const LoadingScreen        = dynamic(() => import("@/components/LoadingScreen"),                      { ssr: false });
const HackathonWrapUp      = dynamic(() => import("@/components/HackathonWrapUp"),                    { ssr: false });
const Navbar               = dynamic(() => import("@/components/Navbar"),                             { ssr: false });
const HeroSection          = dynamic(() => import("@/components/sections/HeroSection"),               { ssr: false });
const AboutSection         = dynamic(() => import("@/components/sections/AboutSection"),              { ssr: false });
const ThemesSection        = dynamic(() => import("@/components/sections/ThemesSection"),             { ssr: false });
const Day8EventsSection    = dynamic(() => import("@/components/sections/Day8EventsSection"),          { ssr: false });
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
  const [visible, setVisible] = useState(false);
  const [wrapUpDismissed, setWrapUpDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ThemeProvider>
      {/* Animated gradient orbs — fixed, behind everything */}
      <DynamicGradient />

      {/* Hackathon wrap-up / thank-you screen — shows first on launch */}
      {!wrapUpDismissed && (
        <HackathonWrapUp onEnter={() => setWrapUpDismissed(true)} />
      )}

      {/* Sleek Minimal Loading Screen */}
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      {/* Navigation */}
      {loaded && <Navbar />}

      {/* Floating sticky Register button — bottom-right */}
      {loaded && (
        <a
          href="/register"
          aria-label="Registrations closed for TechSpark"
          style={{
            position: "fixed",
            bottom: "28px",
            right: "24px",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 20px",
            borderRadius: "999px",
            background: "var(--text)",
            color: "var(--bg)",
            fontWeight: 700,
            fontSize: "13px",
            letterSpacing: "0.01em",
            boxShadow: "0 0 16px 4px rgba(139,92,246,0.45), 0 0 40px 8px rgba(192,132,252,0.2), 0 4px 24px rgba(0,0,0,0.35)",
            animation: "floatGlow 2.5s ease-in-out infinite",
            textDecoration: "none",
            opacity: visible ? 0.7 : 0,
            transform: visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.95)",
            transition: "opacity 0.28s ease, transform 0.28s ease",
            pointerEvents: visible ? "auto" : "none",
          }}
        >
          Registrations Closed
        </a>
      )}

      {/* Main Content — Strict Order */}
      <main
        className="min-h-screen overflow-x-hidden relative"
        style={{ backgroundColor: "transparent", color: "var(--text)", zIndex: 1 }}
      >
        <HeroSection />
        <AboutSection />
        <ThemesSection />
        <Day8EventsSection />
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
