"use client";

import { motion } from "framer-motion";

export default function FooterSection() {
  return (
    <footer
      className="py-16"
      style={{
        backgroundColor: "var(--bg)",
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
          <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
            Birla Institute of Applied Sciences
          </p>
          <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
            Organized in collaboration with{" "}
            <span style={{ color: "var(--text-secondary)" }}>Coding Blocks</span>
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
          &copy; {new Date().getFullYear()} Hackathon 2026. All rights reserved.
        </motion.p>

      </div>
    </footer>
  );
}
