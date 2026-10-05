"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";


export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-grid-pattern">
      <div className="app-container relative z-10 text-center flex flex-col items-center">

        {/* Event badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
          style={{
            background: "var(--accent-dim)",
            border: "1px solid var(--border-accent)",
            color: "var(--accent)",
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <Zap style={{ width: 12, height: 12 }} />
          <span className="text-xs font-semibold uppercase tracking-widest">
            School Innovation Hackathon
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-[64px] sm:text-[80px] lg:text-[100px] font-black tracking-[-0.03em] leading-[0.95] mb-4 flex items-center justify-center gap-3"
          style={{ color: "var(--text)" }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
        >
          Tech<span className="text-gradient-royal">Spark</span>
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "0.75em", height: "0.75em", display: "inline-block", flexShrink: 0 }}
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="sparkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#8b5cf6" />
                <stop offset="40%"  stopColor="#c084fc" />
                <stop offset="100%" stopColor="#f6d365" />
              </linearGradient>
            </defs>
            {/* Centre star */}
            <path
              d="M20 2 L22.5 17.5 L38 20 L22.5 22.5 L20 38 L17.5 22.5 L2 20 L17.5 17.5 Z"
              fill="url(#sparkGrad)"
            />
            {/* Top-right small star */}
            <path
              d="M32 4 L33 9 L38 10 L33 11 L32 16 L31 11 L26 10 L31 9 Z"
              fill="url(#sparkGrad)"
              opacity="0.85"
            />
            {/* Bottom-left small star */}
            <path
              d="M8 26 L9 30 L13 31 L9 32 L8 36 L7 32 L3 31 L7 30 Z"
              fill="url(#sparkGrad)"
              opacity="0.7"
            />
          </svg>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-lg sm:text-xl font-semibold tracking-wide mb-4 uppercase"
          style={{ color: "var(--text-secondary)", letterSpacing: "0.08em" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.14, ease: "easeOut" }}
        >
          Think it. Build it.{" "}
          <span className="text-gradient-gold">Bring it to life.</span>
        </motion.p>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg max-w-lg mb-10 mt-2"
          style={{ color: "var(--text-muted)", lineHeight: "1.7" }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18, ease: "easeOut" }}
        >
          7 days to build from home or school, then present your prototype live on Day 8 at the Birla campus. Web Development, Android Apps and AI — pick your track and ship it.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.24, ease: "easeOut" }}
        >
          <a href="#about" className="btn-primary w-full sm:w-auto">
            Learn More
          </a>
          <a href="#themes" className="btn-secondary w-full sm:w-auto">
            View Tracks
          </a>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 mt-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
        >
          {[
            { val: "7 Days",   label: "Build Time" },
            { val: "3 Tracks", label: "Web · Android · AI" },
            { val: "1–5",      label: "Team Size" },
            { val: "Free",     label: "To Participate" },
          ].map((s) => (
            <div key={s.val} className="text-center">
              <div className="text-sm font-bold" style={{ color: "var(--text)" }}>{s.val}</div>
              <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
