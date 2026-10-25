"use client";

import { motion } from "framer-motion";
import { Zap, Timer } from "lucide-react";
import { useState, useEffect } from "react";

// 24 October 2026, 9:00 AM IST (UTC+5:30) — stable constant
const COUNTDOWN_TARGET = new Date("2026-10-24T09:00:00+05:30");

function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, isOver: false });

  useEffect(() => {
    const tick = () => {
      const now = new Date().getTime();
      const diff = target.getTime() - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isOver: false });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [target]);

  return timeLeft;
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-[60px] sm:w-[72px] h-[60px] sm:h-[72px] rounded-2xl flex items-center justify-center"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          boxShadow: "0 0 20px rgba(139,92,246,0.12), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        <span
          className="text-[22px] sm:text-[28px] font-black tabular-nums tracking-tight"
          style={{ color: "var(--text)" }}
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span
        className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest mt-2"
        style={{ color: "var(--text-muted)" }}
      >
        {label}
      </span>
    </div>
  );
}

function Countdown() {
  const { days, hours, minutes, seconds, isOver } = useCountdown(COUNTDOWN_TARGET);

  if (isOver) {
    return null;
  }

  return (
    <motion.div
      className="flex flex-col items-center gap-4"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
    >
      {/* Label */}
      <div className="flex items-center gap-2">
        <Timer style={{ width: 14, height: 14, color: "var(--accent)" }} />
        <span
          className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest"
          style={{ color: "var(--text-muted)" }}
        >
          Time to Start — 24 Oct 2026, 9:00 AM IST
        </span>
      </div>

      {/* Timer units */}
      <div className="flex items-center gap-3 sm:gap-4">
        <CountdownUnit value={days} label="Days" />
        <span className="text-2xl font-black" style={{ color: "var(--text-muted)", opacity: 0.4 }}>:</span>
        <CountdownUnit value={hours} label="Hours" />
        <span className="text-2xl font-black" style={{ color: "var(--text-muted)", opacity: 0.4 }}>:</span>
        <CountdownUnit value={minutes} label="Min" />
        <span className="text-2xl font-black" style={{ color: "var(--text-muted)", opacity: 0.4 }}>:</span>
        <CountdownUnit value={seconds} label="Sec" />
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-x-hidden bg-grid-pattern">
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
          className="text-[48px] sm:text-[80px] lg:text-[100px] font-black tracking-[-0.03em] leading-[0.95] mb-4 flex items-center justify-center gap-2 sm:gap-3 w-full"
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

        {/* Countdown Timer */}
        <div className="mt-10 mb-2">
          <Countdown />
        </div>

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
