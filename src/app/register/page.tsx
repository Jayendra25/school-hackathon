"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Clock, Users, Layers, CheckCircle } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { useTheme } from "@/components/ThemeProvider";

const DynamicGradient = dynamic(() => import("@/components/DynamicGradient"), { ssr: false });

const FORM_URL = "https://forms.gle/wd3SGLHMUVhqeUDG6";

const steps = [
  { icon: Users,        text: "Form your team (1–5 school students)" },
  { icon: Layers,       text: "Pick your track — Web, Android or AI" },
  { icon: CheckCircle,  text: "Fill the registration form" },
  { icon: Clock,        text: "Build your prototype in 7 days" },
];

const checklist = [
  "Team name & track selection",
  "Details of all team members (name, class, school)",
  "Your initial problem statement / idea (2–3 lines)",
  "Teacher coordinator name, designation & contact number",
  "Team leader's WhatsApp number",
];

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" style={{ width: 12, height: 12 }}>
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="2" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 11, height: 11 }}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
    </svg>
  );
}

function TopBar() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";
  const toggleRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    const btn = toggleRef.current;
    if (btn) {
      const rect = btn.getBoundingClientRect();
      toggleTheme(rect.left + rect.width / 2, rect.top + rect.height / 2);
    }
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3"
      style={{
        background: "var(--nav-bg-scrolled)",
        borderBottom: "1px solid var(--border)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
        style={{ color: "var(--text-muted)" }}
      >
        <ArrowLeft style={{ width: 15, height: 15 }} />
        Back to site
      </Link>

      <span className="text-sm font-black tracking-tight flex items-center gap-1" style={{ color: "var(--text)" }}>
        Tech<span className="text-gradient-royal">Spark</span>
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 13, height: 13, flexShrink: 0 }} aria-hidden="true">
          <defs>
            <linearGradient id="sparkGradRegNav" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="40%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#f6d365" />
            </linearGradient>
          </defs>
          <path d="M20 2 L22.5 17.5 L38 20 L22.5 22.5 L20 38 L17.5 22.5 L2 20 L17.5 17.5 Z" fill="url(#sparkGradRegNav)" />
          <path d="M32 4 L33 9 L38 10 L33 11 L32 16 L31 11 L26 10 L31 9 Z" fill="url(#sparkGradRegNav)" opacity="0.85" />
          <path d="M8 26 L9 30 L13 31 L9 32 L8 36 L7 32 L3 31 L7 30 Z" fill="url(#sparkGradRegNav)" opacity="0.7" />
        </svg>
      </span>

      {/* Theme Toggle */}
      <button
        ref={toggleRef}
        onClick={handleToggle}
        aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
        className="relative flex items-center rounded-full transition-colors duration-200 cursor-pointer"
        style={{
          width: 52,
          height: 26,
          background: isLight ? "#fef3c7" : "var(--bg-raised)",
          border: "1px solid var(--border-strong)",
          padding: "2px",
        }}
      >
        <span className="absolute transition-all duration-300" style={{ left: 7, color: "var(--text-muted)", opacity: isLight ? 0 : 0.6 }}>
          <MoonIcon />
        </span>
        <span className="absolute transition-all duration-300" style={{ right: 7, color: "#d97706", opacity: isLight ? 1 : 0 }}>
          <SunIcon />
        </span>
        <motion.span
          className="rounded-full shadow-sm flex items-center justify-center"
          animate={{ x: isLight ? 26 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 38 }}
          style={{
            width: 20,
            height: 20,
            background: isLight ? "#f59e0b" : "var(--text)",
            color: isLight ? "#fff" : "var(--bg)",
          }}
        >
          {isLight ? <SunIcon /> : <MoonIcon />}
        </motion.span>
      </button>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <ThemeProvider>
      <DynamicGradient />
      <div
        className="min-h-screen relative"
        style={{ backgroundColor: "transparent", color: "var(--text)", zIndex: 1 }}
      >
      {/* Top bar */}
      <TopBar />

      {/* Page content */}
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-xl mx-auto">

          {/* Heading */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <h1
              className="text-[38px] sm:text-[52px] font-black tracking-[-0.025em] leading-[1.05] mb-3 flex items-center flex-wrap gap-3"
              style={{ color: "var(--text)" }}
            >
              Register for{" "}
              <span className="inline-flex items-center gap-2">
                <span className="text-gradient-royal">TechSpark</span>
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "0.7em", height: "0.7em", flexShrink: 0 }} aria-hidden="true">
                  <defs>
                    <linearGradient id="sparkGradRegH1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="40%" stopColor="#c084fc" />
                      <stop offset="100%" stopColor="#f6d365" />
                    </linearGradient>
                  </defs>
                  <path d="M20 2 L22.5 17.5 L38 20 L22.5 22.5 L20 38 L17.5 22.5 L2 20 L17.5 17.5 Z" fill="url(#sparkGradRegH1)" />
                  <path d="M32 4 L33 9 L38 10 L33 11 L32 16 L31 11 L26 10 L31 9 Z" fill="url(#sparkGradRegH1)" opacity="0.85" />
                  <path d="M8 26 L9 30 L13 31 L9 32 L8 36 L7 32 L3 31 L7 30 Z" fill="url(#sparkGradRegH1)" opacity="0.7" />
                </svg>
              </span>
            </h1>
            <p className="text-sm sm:text-base" style={{ color: "var(--text-muted)", lineHeight: "1.7" }}>
              One registration per team. The team leader fills the form on behalf of everyone.
            </p>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            className="grid grid-cols-3 gap-3 mb-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08, ease: "easeOut" }}
          >
            {[
              { val: "Free",   label: "No entry fee" },
              { val: "1–5",    label: "Team members" },
              { val: "7 Days", label: "Build time" },
            ].map((s) => (
              <div
                key={s.val}
                className="text-center py-3 rounded-xl"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <div className="text-base font-bold" style={{ color: "var(--text)" }}>{s.val}</div>
                <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* What you'll need */}
          <motion.div
            className="rounded-xl p-5 mb-5"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12, ease: "easeOut" }}
          >
            <p
              className="text-[10px] font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#f6d365" }}
            >
              Keep ready before you fill the form
            </p>
            <div className="flex flex-col gap-2">
              {checklist.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(246,211,101,0.12)", border: "1px solid rgba(246,211,101,0.35)" }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#f6d365" }} />
                  </div>
                  <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Steps */}
          <motion.div
            className="rounded-xl p-5 mb-8"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.16, ease: "easeOut" }}
          >
            <p
              className="text-[10px] font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--accent)" }}
            >
              How it works
            </p>
            <div className="flex flex-col gap-3">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--accent-dim)", border: "1px solid var(--border-accent)", color: "var(--accent)" }}
                    >
                      <Icon style={{ width: 13, height: 13 }} />
                    </div>
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{step.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          >
            {/* Google Form embedded */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid var(--border)",
                boxShadow: "0 0 32px rgba(139,92,246,0.08)",
              }}
            >
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSc4YywAlq2VNns3Mjym_BQZrTFAwE9U4nNCN0SENk30ZkJdfg/viewform?embedded=true"
                title="TechSpark 2026 Registration Form"
                width="100%"
                height="1100"
                style={{ border: "none", display: "block" }}
                loading="lazy"
              >
                Loading form…
              </iframe>
            </div>
          </motion.div>

          {/* Help */}
          <motion.p
            className="text-xs text-center mt-8"
            style={{ color: "var(--text-muted)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.28 }}
          >
            Need help?{" "}
            <a href="https://wa.me/917895310506" target="_blank" rel="noopener noreferrer"
              className="underline underline-offset-2 hover:opacity-80" style={{ color: "var(--text-secondary)" }}>
              WhatsApp Aditya
            </a>
            {" "}·{" "}
            <a href="https://wa.me/917351932450" target="_blank" rel="noopener noreferrer"
              className="underline underline-offset-2 hover:opacity-80" style={{ color: "var(--text-secondary)" }}>
              WhatsApp Ritesh
            </a>
          </motion.p>

        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}
