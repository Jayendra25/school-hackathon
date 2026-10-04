"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

const REGISTER_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeesu7fm6jiaN94gQX_J79xhD1qCbG2wyG83CsZdKjvsi4EWQ/viewform?usp=publish-editor";

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
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: "14px 36px", fontSize: 15 }}
          >
            Register for TechSpark
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
