"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section id="register" className="section-wrapper bg-black relative overflow-hidden text-center">
      {/* Subtle purple radial glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#8B5CF6]/10 blur-[160px] rounded-full pointer-events-none"
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-7xl lg:text-[96px] font-extrabold text-white tracking-[-0.03em] leading-[0.95] mb-8"
        >
          READY TO BUILD?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[18px] text-[#A1A1AA] max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Join 300+ student developers in 24 hours of non-stop building, learning, and competing for ₹25,000 in prizes and swag.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-block"
        >
          <a href="#register" className="btn-primary text-xl px-12 py-5 shadow-2xl">
            <span>Register Now</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
