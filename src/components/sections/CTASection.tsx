"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const REGISTER_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeesu7fm6jiaN94gQX_J79xhD1qCbG2wyG83CsZdKjvsi4EWQ/viewform?usp=publish-editor";

export default function CTASection() {
  return (
    <section
      id="register"
      className="section-wrapper text-center"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Subtle static glow — no animation */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[360px] rounded-full pointer-events-none"
        style={{ backgroundColor: "var(--accent-glow)", filter: "blur(130px)" }}
      />

      <div className="app-container relative z-10">

        <motion.div
          className="badge-pill mb-5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          Final Call
        </motion.div>

        <motion.h2
          className="text-[40px] sm:text-[56px] lg:text-[68px] font-bold tracking-[-0.025em] leading-[1.05] mb-5"
          style={{ color: "var(--text)" }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.06, ease: "easeOut" }}
        >
          Ready to Build?
        </motion.h2>

        <motion.p
          className="text-base sm:text-[17px] max-w-md mx-auto mb-10"
          style={{ color: "var(--text-muted)", lineHeight: "1.7" }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
        >
          Join 300+ student developers in 24 hours of non-stop building, learning, and competing for ₹25,000 in prizes and swag.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.18, ease: "easeOut" }}
        >
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: "14px 32px", fontSize: 15 }}
          >
            Register Now
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
