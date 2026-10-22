"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Lock, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRef } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { useTheme } from "@/components/ThemeProvider";

const DynamicGradient = dynamic(() => import("@/components/DynamicGradient"), { ssr: false });

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
        className="inline-flex items-center gap-1.5 text-[13px] font-semibold rounded-lg px-3 py-1.5 transition-all duration-150 hover:opacity-85 active:scale-95"
        style={{
          color: "var(--text)",
          background: "var(--bg-raised)",
          border: "1px solid var(--border-strong)",
          boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        }}
      >
        <ArrowLeft style={{ width: 14, height: 14 }} />
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

          {/* Registration Closed Notice */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
              style={{
                background: "rgba(239,68,68,0.10)",
                border: "1px solid rgba(239,68,68,0.30)",
              }}
            >
              <Lock style={{ width: 28, height: 28, color: "#ef4444" }} />
            </div>
            <h1
              className="text-[34px] sm:text-[44px] font-black tracking-[-0.025em] leading-[1.05] mb-3 w-full text-center"
              style={{ color: "var(--text)" }}
            >
              Registrations <span className="text-gradient-royal">Closed</span>
            </h1>
            <p className="text-sm sm:text-base max-w-md mx-auto" style={{ color: "var(--text-muted)", lineHeight: "1.7" }}>
              The registration form for TechSpark 2026 has been officially closed.
              Thank you to all the teams who registered. We hope to see you participate again next time!
            </p>
          </motion.div>

          {/* Helpdesk card */}
          <motion.div
            className="rounded-xl p-5 mb-8"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12, ease: "easeOut" }}
          >
            <p
              className="text-[10px] font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--accent)" }}
            >
              Helpdesk — Any Queries?
            </p>
            <p className="text-sm mb-4" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
              If you have any questions or need assistance, feel free to reach out to <strong style={{ color: "var(--text)" }}>Aditya Suyal</strong> directly via call or WhatsApp.
            </p>

            {/* Contact number display */}
            <div
              className="flex items-center gap-2.5 px-4 py-3 rounded-xl mb-4"
              style={{ background: "var(--bg-raised)", border: "1px solid var(--border)" }}
            >
              <Phone style={{ width: 14, height: 14, color: "var(--text-muted)", flexShrink: 0 }} />
              <span className="text-sm font-mono font-semibold tracking-wide" style={{ color: "var(--text)" }}>
                +91 78953 10506
              </span>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:+917895310506"
                className="flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-opacity duration-150 hover:opacity-80"
                style={{
                  background: "var(--accent-dim)",
                  border: "1px solid var(--border-accent)",
                  color: "var(--accent)",
                  padding: "10px 12px",
                }}
              >
                <Phone style={{ width: 14, height: 14, flexShrink: 0 }} />
                Call Aditya
              </a>
              <a
                href="https://wa.me/917895310506"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-opacity duration-150 hover:opacity-80"
                style={{
                  background: "rgba(34,197,94,0.10)",
                  border: "1px solid rgba(34,197,94,0.30)",
                  color: "#22c55e",
                  padding: "10px 12px",
                }}
              >
                <MessageCircle style={{ width: 14, height: 14, flexShrink: 0 }} />
                WhatsApp Aditya
              </a>
            </div>
          </motion.div>

          {/* Back to site */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold rounded-lg px-5 py-3 transition-opacity duration-150 hover:opacity-80"
              style={{
                background: "var(--bg-raised)",
                border: "1px solid var(--border-strong)",
                color: "var(--text)",
              }}
            >
              <ArrowLeft style={{ width: 14, height: 14 }} />
              Back to TechSpark
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}
