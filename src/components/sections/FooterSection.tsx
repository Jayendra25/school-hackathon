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
          <p className="text-base font-black tracking-tight" style={{ color: "var(--text)" }}>
            Tech<span style={{ color: "var(--accent)" }}>Spark</span>
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
