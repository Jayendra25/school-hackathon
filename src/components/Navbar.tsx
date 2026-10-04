"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

const REGISTER_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeesu7fm6jiaN94gQX_J79xhD1qCbG2wyG83CsZdKjvsi4EWQ/viewform?usp=publish-editor";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Themes", href: "#themes" },
  { label: "Why Join", href: "#why-participate" },
  { label: "Prizes", href: "#prizes" },
  { label: "Timeline", href: "#timeline" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "FAQ", href: "#faq" },
];

/* ── Sun icon ── */
function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
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

/* ── Moon icon ── */
function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
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
      setScrolled(window.scrollY > 30);
      const sections = navItems.map((item) =>
        document.querySelector(item.href)
      );
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 250) { setActive(navItems[i].href); break; }
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
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      toggleTheme(x, y);
    }
  };

  const navBg = isLight
    ? scrolled
      ? "bg-white/92 backdrop-blur-xl border-black/10 shadow-2xl shadow-black/10"
      : "bg-zinc-100/85 backdrop-blur-md border-black/08"
    : scrolled
      ? "bg-black/85 backdrop-blur-xl border-white/15 shadow-2xl shadow-black/80"
      : "bg-zinc-950/70 backdrop-blur-md border-white/10";

  const textColor = isLight ? "text-zinc-800" : "text-white";
  const mutedColor = isLight ? "text-zinc-500" : "text-[#A1A1AA]";
  const activeColor = isLight ? "text-zinc-900 bg-zinc-200" : "text-white bg-white/10";
  const hoverColor = isLight ? "hover:text-zinc-900 hover:bg-zinc-200/70" : "hover:text-white hover:bg-white/5";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 pointer-events-none transition-all duration-300">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto flex items-center justify-between gap-4 px-5 py-2.5 rounded-full transition-all duration-300 border ${navBg} max-w-[1280px] w-full`}
      >
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-3 group shrink-0"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <div className="w-8 h-8 rounded-full overflow-hidden border border-white/20 group-hover:border-[#8B5CF6] transition-colors duration-200 bg-white flex items-center justify-center">
            <Image src="/birla-logo.png" alt="BIAS Logo" width={32} height={32} className="object-contain w-full h-full" />
          </div>
          <div className="flex items-baseline gap-1">
            <span className={`text-sm font-bold tracking-tight ${textColor}`}>HACKATHON</span>
            <span className="text-xs font-mono font-semibold text-[#8B5CF6]">2026</span>
          </div>
        </a>

        {/* Center Nav Items */}
        <div className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => {
            const isAct = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-1.5 text-[13px] font-medium transition-all duration-200 rounded-full ${isAct ? activeColor : `${mutedColor} ${hoverColor}`
                  }`}
              >
                {item.label}
                {isAct && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full z-[-1]"
                    transition={{ type: "spring", stiffness: 380, damping: 35 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right: Theme Toggle + Register */}
        <div className="flex items-center gap-3 shrink-0">

          {/* ── Theme Toggle ── */}
          <button
            ref={toggleRef}
            onClick={handleToggle}
            aria-label="Toggle theme"
            className={`relative flex items-center w-14 h-7 rounded-full border transition-all duration-300 cursor-pointer overflow-hidden ${isLight
              ? "bg-amber-50 border-amber-200 shadow-inner shadow-amber-100"
              : "bg-zinc-900 border-white/15"
              }`}
          >
            {/* Track icons */}
            <span className={`absolute left-1.5 text-amber-500 transition-all duration-300 ${isLight ? "opacity-0 scale-50" : "opacity-60 scale-100"}`}>
              <MoonIcon />
            </span>
            <span className={`absolute right-1.5 text-amber-500 transition-all duration-300 ${isLight ? "opacity-80 scale-100" : "opacity-0 scale-50"}`}>
              <SunIcon />
            </span>

            {/* Sliding thumb */}
            <motion.span
              className={`absolute w-5 h-5 rounded-full shadow-md flex items-center justify-center text-[10px] ${isLight ? "bg-amber-400 text-white" : "bg-white text-zinc-900"
                }`}
              animate={{ x: isLight ? 30 : 2 }}
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
            >
              {isLight ? <SunIcon /> : <MoonIcon />}
            </motion.span>
          </button>

          {/* Register CTA */}
          <motion.a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className={`hidden sm:inline-flex px-4 py-1.5 text-[13px] font-semibold rounded-full transition-all duration-200 shadow-sm ${isLight
              ? "bg-zinc-900 text-white hover:bg-[#8B5CF6]"
              : "bg-white text-black hover:bg-[#8B5CF6] hover:text-white"
              }`}
          >
            Register Now
          </motion.a>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden flex flex-col gap-1 p-1.5 ${mutedColor}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Open menu"
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className={`block w-5 h-0.5 rounded-full ${isLight ? "bg-zinc-700" : "bg-white"} transition-colors`} />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className={`block w-5 h-0.5 rounded-full ${isLight ? "bg-zinc-700" : "bg-white"} transition-colors`} />
            <motion.span animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className={`block w-5 h-0.5 rounded-full ${isLight ? "bg-zinc-700" : "bg-white"} transition-colors`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={`pointer-events-auto absolute top-20 left-4 right-4 rounded-2xl border p-4 flex flex-col gap-1 ${isLight
              ? "bg-white/95 border-black/08 shadow-xl"
              : "bg-zinc-950/95 border-white/10 shadow-2xl shadow-black"
              } backdrop-blur-xl`}
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${isLight
                  ? "text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100"
                  : "text-[#A1A1AA] hover:text-white hover:bg-white/5"
                  }`}
              >
                {item.label}
              </motion.a>
            ))}
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full text-center px-4 py-2.5 text-sm font-semibold rounded-full bg-[#8B5CF6] text-white"
            >
              Register Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
