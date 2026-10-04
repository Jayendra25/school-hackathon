"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

export default function FooterSection() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <footer
      className="py-20 border-t relative overflow-hidden"
      style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)", color: "var(--text)" }}
    >
      {/* Subtle ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] blur-[120px] rounded-full pointer-events-none animate-glow-pulse"
        style={{ backgroundColor: "var(--accent-glow)" }}
      />

      <div className="app-container flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative z-10">

        {/* Left: Brand */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-xl font-bold tracking-tight" style={{ color: "var(--text)" }}>
            Birla Institute of Applied Sciences
          </div>
          <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
            Organized in collaboration with{" "}
            <span className="font-semibold" style={{ color: "var(--text)" }}>Coding Blocks</span>
          </p>
        </motion.div>

        {/* Center: Made with love */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 text-sm font-medium"
          style={{ color: "var(--text-muted)" }}
        >
          <span>Built with</span>
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            className="text-red-500 text-base"
          >
            ♥
          </motion.span>
          <span>for student innovators</span>
        </motion.div>

        {/* Right: Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-xs sm:text-sm md:text-right font-mono"
          style={{ color: "var(--text-muted)" }}
        >
          &copy; {new Date().getFullYear()} HACKATHON 2026. ALL RIGHTS RESERVED.
        </motion.div>

      </div>
    </footer>
  );
}
