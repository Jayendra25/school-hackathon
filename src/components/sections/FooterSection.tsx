"use client";

import { motion } from "framer-motion";

export default function FooterSection() {
  return (
    <footer
      className="py-14"
      style={{
        borderTop: "1px solid var(--border)",
        color: "var(--text)",
      }}
    >
      <div className="app-container flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

        {/* Left: Brand */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <p className="text-base font-black tracking-tight" style={{ color: "var(--text)", display: "flex", alignItems: "center", gap: 6 }}>
            Tech<span className="text-gradient-royal">Spark</span>
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 14, height: 14, flexShrink: 0, overflow: "visible", display: "block" }} aria-hidden="true">
              <defs>
                <linearGradient id="sg-footer-unique" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="40%" stopColor="#c084fc" />
                  <stop offset="100%" stopColor="#f6d365" />
                </linearGradient>
              </defs>
              <path d="M20 2 L22.5 17.5 L38 20 L22.5 22.5 L20 38 L17.5 22.5 L2 20 L17.5 17.5 Z" fill="url(#sg-footer-unique)" />
              <path d="M32 4 L33 9 L38 10 L33 11 L32 16 L31 11 L26 10 L31 9 Z" fill="url(#sg-footer-unique)" opacity="0.85" />
              <path d="M8 26 L9 30 L13 31 L9 32 L8 36 L7 32 L3 31 L7 30 Z" fill="url(#sg-footer-unique)" opacity="0.7" />
            </svg>
          </p>
          <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
            School Innovation Hackathon &bull; 2026 Edition
          </p>
          <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
            Think it. Build it. Bring it to life.
          </p>
        </motion.div>

        {/* Right: Copyright */}
        <motion.p
          className="text-xs font-mono"
          style={{ color: "var(--text-muted)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.08, ease: "easeOut" }}
        >
          &copy; {new Date().getFullYear()} TechSpark School Innovation Hackathon.<br />
          Birla Institute of Applied Sciences, powered by Coding Blocks.
        </motion.p>

      </div>
    </footer>
  );
}
