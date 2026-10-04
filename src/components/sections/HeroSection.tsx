"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { useTheme } from "@/components/ThemeProvider";

const REGISTER_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeesu7fm6jiaN94gQX_J79xhD1qCbG2wyG83CsZdKjvsi4EWQ/viewform?usp=publish-editor";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

export default function HeroSection() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y     = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opac  = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-24 overflow-hidden bg-grid-pattern"
    >
      {/* Animated ambient glows */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none animate-glow-pulse"
        style={{ backgroundColor: "var(--accent-glow)", filter: "blur(150px)" }}
      />
      <motion.div
        className="absolute top-20 right-20 w-[300px] h-[300px] rounded-full pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ backgroundColor: "var(--accent)", filter: "blur(80px)" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-[250px] h-[250px] rounded-full pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.10, 0.04] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ backgroundColor: "var(--accent)", filter: "blur(90px)" }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full pointer-events-none"
          style={{ backgroundColor: "var(--accent)", left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, isLight ? 0.5 : 0.8, 0],
          }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.6 }}
        />
      ))}

      {/* Parallax content */}
      <motion.div
        style={{ y, opacity: opac }}
        className="app-container relative z-10 text-center flex flex-col items-center"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          {/* Collaborators tag */}
          <motion.div variants={itemVariants}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-8 backdrop-blur-md"
            style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border-nav)" }}
          >
            <div className="w-7 h-7 rounded-full overflow-hidden bg-white flex items-center justify-center flex-shrink-0 ring-1 ring-black/10">
              <Image src="/birla-logo.png" alt="Birla Institute Logo" width={28} height={28} className="object-contain w-full h-full" />
            </div>
            <span className="text-xs sm:text-sm font-medium" style={{ color: "var(--text)" }}>
              Birla Institute of Applied Sciences
            </span>
            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "var(--text-muted)" }} />
            <span className="text-xs sm:text-sm font-medium" style={{ color: "var(--text-muted)" }}>
              Powered by <span className="font-semibold" style={{ color: "var(--text)" }}>Coding Blocks</span>
            </span>
            <div className="w-7 h-7 rounded-full overflow-hidden bg-white flex items-center justify-center flex-shrink-0 ring-1 ring-black/10">
              <Image src="/codingblocksindia_logo.jpeg" alt="Coding Blocks Logo" width={28} height={28} className="object-contain w-full h-full" />
            </div>
          </motion.div>

          {/* Hero title with letter-by-letter reveal */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-7xl lg:text-[96px] font-bold tracking-[-0.03em] leading-[0.95] mb-8"
            style={{ color: "var(--text)" }}
          >
            HACKATHON{" "}
            <motion.span
              className="text-gradient-purple inline-block"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200%" }}
            >
              2026
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-[18px] max-w-2xl leading-relaxed mb-12 font-normal"
            style={{ color: "var(--text-muted)" }}
          >
            A premier school and college level hackathon engineered for builders,{" "}
            creators, and future engineers to solve real-world problems in 24 hours.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <motion.a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px var(--accent-glow)" }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Register Now</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </motion.a>
            <motion.a
              href="#about"
              className="btn-secondary w-full sm:w-auto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Learn More
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="mt-16 flex flex-col items-center gap-2"
            animate={{ y: [0, 8, 0], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1"
              style={{ borderColor: "var(--text-muted)" }}>
              <motion.div
                className="w-1 h-2 rounded-full"
                style={{ backgroundColor: "var(--accent)" }}
                animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
            <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>SCROLL</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
