"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

const REGISTER_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeesu7fm6jiaN94gQX_J79xhD1qCbG2wyG83CsZdKjvsi4EWQ/viewform?usp=publish-editor";

const navItems = [
  { label: "About",    href: "#about" },
  { label: "Tracks",   href: "#themes" },
  { label: "Why Join", href: "#why-participate" },
  { label: "Prizes",   href: "#prizes" },
  { label: "Timeline", href: "#timeline" },
  { label: "Venue",    href: "#venue" },
  { label: "FAQ",      href: "#faq" },
  { label: "Contact",  href: "#contact" },
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navItems.map((item) => document.querySelector(item.href));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.getBoundingClientRect().top <= 220) {
          setActive(navItems[i].href);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleToggle = () => {
    const btn = toggleRef.current;
    if (btn) {
      const rect = btn.getBoundingClientRect();
      toggleTheme(rect.left + rect.width / 2, rect.top + rect.height / 2);
    }
  };

  const navBg = scrolled
    ? "var(--nav-bg-scrolled)"
    : "var(--nav-bg)";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-3 pointer-events-none">
      <nav
        className="pointer-events-auto flex items-center justify-between gap-4 px-5 py-2.5 rounded-full w-full max-w-[1120px] transition-all duration-200"
        style={{
          background: navBg,
          border: "1px solid var(--nav-border)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: scrolled
            ? "0 4px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)"
            : "0 2px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-2 shrink-0"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          {/* Birla logo */}
          <div
            className="w-7 h-7 rounded-full overflow-hidden bg-white flex-shrink-0"
            style={{ border: "1px solid var(--border-strong)" }}
          >
            <Image src="/birla-logo.png" alt="BIAS" width={28} height={28} className="object-contain w-full h-full" />
          </div>

          {/* X collab */}
          <span className="text-[11px] font-bold" style={{ color: "var(--text-muted)" }}>×</span>

          {/* Coding Blocks logo */}
          <div
            className="w-7 h-7 rounded-full overflow-hidden bg-white flex-shrink-0"
            style={{ border: "1px solid var(--border-strong)" }}
          >
            <Image src="/codingblocksindia_logo.jpeg" alt="Coding Blocks" width={28} height={28} className="object-contain w-full h-full" />
          </div>

          {/* Name */}
          <div className="flex items-baseline gap-1 ml-0.5">
            <span
              className="text-[13px] font-black tracking-tight"
              style={{ color: "var(--text)" }}
            >
              Tech<span className="text-gradient-royal">Spark</span>
            </span>
            <span
              className="text-[11px] font-mono font-semibold text-gradient-gold"
            >
              2026
            </span>
          </div>
        </a>

        {/* Center Nav */}
        <div className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => {
            const isAct = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className="relative px-3 py-1.5 text-[13px] font-medium rounded-lg transition-colors duration-150"
                style={{
                  color: isAct ? "var(--text)" : "var(--text-muted)",
                  background: isAct ? "var(--bg-raised)" : "transparent",
                }}
              >
                {item.label}
                {isAct && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: "var(--bg-raised)", zIndex: -1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 40 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right: Theme toggle + Register */}
        <div className="flex items-center gap-2.5 shrink-0">

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
            <span
              className="absolute transition-all duration-300"
              style={{
                left: 7,
                color: "var(--text-muted)",
                opacity: isLight ? 0 : 0.6,
              }}
            >
              <MoonIcon />
            </span>
            <span
              className="absolute transition-all duration-300"
              style={{
                right: 7,
                color: "#d97706",
                opacity: isLight ? 1 : 0,
              }}
            >
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

          {/* Register CTA */}
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[13px] font-semibold rounded-lg transition-opacity duration-150 hover:opacity-85"
            style={{
              background: "var(--text)",
              color: "var(--bg)",
            }}
          >
            Register
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-1.5 rounded-lg transition-colors duration-150"
            style={{ color: "var(--text-muted)" }}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" style={{ width: 18, height: 18 }}>
              {menuOpen ? (
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="pointer-events-auto absolute top-[60px] left-4 right-4 rounded-2xl p-2 flex flex-col gap-0.5"
            style={{
              background: "var(--nav-bg-scrolled)",
              border: "1px solid var(--nav-border)",
              backdropFilter: "blur(16px)",
              boxShadow: "var(--shadow-md)",
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text)"; (e.currentTarget as HTMLElement).style.background = "var(--bg-raised)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-1.5 mt-1" style={{ borderTop: "1px solid var(--border)" }}>
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-3.5 py-2.5 rounded-lg text-sm font-semibold"
                style={{ background: "var(--text)", color: "var(--bg)" }}
              >
                Register Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
