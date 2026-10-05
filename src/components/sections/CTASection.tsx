"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

const REGISTER_URL =
  "/register";

export default function CTASection() {
  return (
    <section
      id="register"
      className="section-wrapper text-center"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div className="app-container relative z-10">

        <motion.div
          className="badge-pill-gold mb-5 mx-auto w-fit"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Zap style={{ width: 11, height: 11 }} />
          Final Call
        </motion.div>

        <motion.h2
          className="text-[40px] sm:text-[56px] lg:text-[68px] font-black tracking-[-0.03em] leading-[1.0] mb-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.06, ease: "easeOut" }}
        >
          <span style={{ color: "var(--text)" }}>Start With a </span>
          <span className="text-gradient-royal">Problem.</span>
          <br />
          <span className="text-gradient-gold">Build Something</span>
          <span style={{ color: "var(--text)" }}> Real.</span>
        </motion.h2>

        <motion.p
          className="text-base sm:text-[17px] max-w-md mx-auto mb-10"
          style={{ color: "var(--text-muted)", lineHeight: "1.7" }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
        >
          7 days. 3 tracks. No perfect idea required.{" "}
          Join TechSpark and turn your idea into a working prototype.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.18, ease: "easeOut" }}
        >
          <a
            href={REGISTER_URL}
            className="btn-primary"
            style={{ padding: "14px 36px", fontSize: 15 }}
          >
            Register for TechSpark
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: 16, height: 16, display: "inline-block", flexShrink: 0 }}
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="sparkGradCta" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%"   stopColor="#8b5cf6" />
                  <stop offset="40%"  stopColor="#c084fc" />
                  <stop offset="100%" stopColor="#f6d365" />
                </linearGradient>
              </defs>
              <path
                d="M20 2 L22.5 17.5 L38 20 L22.5 22.5 L20 38 L17.5 22.5 L2 20 L17.5 17.5 Z"
                fill="url(#sparkGradCta)"
              />
              <path
                d="M32 4 L33 9 L38 10 L33 11 L32 16 L31 11 L26 10 L31 9 Z"
                fill="url(#sparkGradCta)"
                opacity="0.85"
              />
              <path
                d="M8 26 L9 30 L13 31 L9 32 L8 36 L7 32 L3 31 L7 30 Z"
                fill="url(#sparkGradCta)"
                opacity="0.7"
              />
            </svg>
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
