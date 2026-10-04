"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const REGISTER_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeesu7fm6jiaN94gQX_J79xhD1qCbG2wyG83CsZdKjvsi4EWQ/viewform?usp=publish-editor";

export default function CTASection() {
  return (
    <section id="register" className="section-wrapper relative overflow-hidden text-center">
      {/* Animated radial glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
        style={{ backgroundColor: "var(--accent-glow)", filter: "blur(160px)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="app-container relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="badge-pill mb-6"
        >
          Final Call For Innovators
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl lg:text-[96px] font-extrabold tracking-[-0.03em] leading-[0.95] mb-8"
          style={{ color: "var(--text)" }}
        >
          READY TO BUILD?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[18px] max-w-xl mx-auto mb-12 leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          Join 300+ student developers in 24 hours of non-stop building, learning, and competing for ₹25,000 in prizes and swag.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          className="inline-block"
        >
          <motion.a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xl px-12 py-5 shadow-2xl"
            whileHover={{ scale: 1.06, boxShadow: "0 0 60px var(--accent-glow)" }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Register Now</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
