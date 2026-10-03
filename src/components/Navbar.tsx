"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Themes", href: "#themes" },
  { label: "Why Join", href: "#why-participate" },
  { label: "Prizes", href: "#prizes" },
  { label: "Timeline", href: "#timeline" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

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
          if (rect.top <= 250) {
            setActive(navItems[i].href);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 pointer-events-none transition-all duration-300">
      <nav
        className={`pointer-events-auto flex items-center justify-between gap-6 px-6 py-3 rounded-full transition-all duration-300 border ${
          scrolled
            ? "bg-black/85 backdrop-blur-xl border-white/15 shadow-2xl shadow-black/80"
            : "bg-zinc-950/70 backdrop-blur-md border-white/10"
        } max-w-[1280px] w-full`}
      >
        {/* Brand */}
        <a
          href="#"
          className="flex items-center gap-3 text-decoration-none group"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="w-8 h-8 rounded-full bg-white text-black font-extrabold text-sm flex items-center justify-center group-hover:bg-[#8B5CF6] group-hover:text-white transition-colors duration-200">
            H
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-sm font-bold tracking-tight text-white">
              HACKATHON
            </span>
            <span className="text-xs font-mono font-semibold text-[#8B5CF6]">
              2026
            </span>
          </div>
        </a>

        {/* Center Nav Items */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3.5 py-1.5 text-[13px] font-medium transition-all duration-200 rounded-full ${
                  isActive
                    ? "text-white bg-white/10"
                    : "text-[#A1A1AA] hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Right CTA */}
        <a
          href="#register"
          className="px-4 py-1.5 text-[13px] font-semibold rounded-full bg-white text-black hover:bg-[#8B5CF6] hover:text-white transition-all duration-200 shadow-sm"
        >
          Register Now
        </a>
      </nav>
    </header>
  );
}
