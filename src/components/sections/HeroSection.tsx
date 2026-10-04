"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const REGISTER_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeesu7fm6jiaN94gQX_J79xhD1qCbG2wyG83CsZdKjvsi4EWQ/viewform?usp=publish-editor";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-grid-pattern">
      {/* Single static ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[420px] rounded-full pointer-events-none"
        style={{ backgroundColor: "var(--accent-glow)", filter: "blur(120px)" }}
      />

      <div className="app-container relative z-10 text-center flex flex-col items-center">

        {/* Institution tag */}
        <motion.div
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
          style={{ background: "var(--surface)", border: "1px solid var(--border-strong)" }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="w-6 h-6 rounded-full overflow-hidden bg-white flex-shrink-0">
            <Image src="/birla-logo.png" alt="BIAS" width={24} height={24} className="object-contain" />
          </div>
          <span className="text-xs sm:text-sm font-medium" style={{ color: "var(--text)" }}>
            Birla Institute of Applied Sciences
          </span>
          <span className="w-px h-3" style={{ backgroundColor: "var(--border-strong)" }} />
          <span className="text-xs sm:text-sm" style={{ color: "var(--text-muted)" }}>
            with <span className="font-medium" style={{ color: "var(--text-secondary)" }}>Coding Blocks</span>
          </span>
          <div className="w-6 h-6 rounded-full overflow-hidden bg-white flex-shrink-0">
            <Image src="/codingblocksindia_logo.jpeg" alt="Coding Blocks" width={24} height={24} className="object-contain" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-[48px] sm:text-[62px] lg:text-[76px] font-bold tracking-[-0.025em] leading-[1.05] mb-6"
          style={{ color: "var(--text)" }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
        >
          HACKATHON{" "}
          <span className="text-gradient-purple">2026</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-base sm:text-lg max-w-xl mb-10"
          style={{ color: "var(--text-muted)", lineHeight: "1.7" }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
        >
          A premier school and college level hackathon engineered for builders,
          creators, and future engineers to solve real-world problems in 24 hours.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.22, ease: "easeOut" }}
        >
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto"
          >
            Register Now
            <ArrowRight style={{ width: 15, height: 15 }} />
          </a>
          <a href="#about" className="btn-secondary w-full sm:w-auto">
            Learn More
          </a>
        </motion.div>

      </div>
    </section>
  );
}
