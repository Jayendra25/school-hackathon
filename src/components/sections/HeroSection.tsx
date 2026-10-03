"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-24 overflow-hidden bg-black bg-grid-pattern">
      {/* Very subtle purple spotlight in the background */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#8B5CF6]/10 blur-[150px] rounded-full pointer-events-none"
      />

      <div className="app-container relative z-10 text-center flex flex-col items-center">
        
        {/* Collaborators / Institution Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 mb-8 backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
          <span className="text-xs sm:text-sm font-medium text-white">
            Birla Institute of Applied Sciences
          </span>
          <span className="w-1 h-1 rounded-full bg-zinc-600" />
          <span className="text-xs sm:text-sm font-medium text-[#A1A1AA]">
            Powered by <span className="text-white font-semibold">Coding Blocks</span>
          </span>
        </motion.div>

        {/* 96px Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl lg:text-[96px] font-bold text-white tracking-[-0.03em] leading-[0.95] mb-8"
        >
          HACKATHON <span className="text-gradient-purple">2026</span>
        </motion.h1>

        {/* Short Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[18px] text-[#A1A1AA] max-w-2xl leading-relaxed mb-12 font-normal"
        >
          A premier school and college level hackathon engineered for builders, 
          creators, and future engineers to solve real-world problems in 24 hours.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a href="#register" className="btn-primary w-full sm:w-auto">
            <span>Register Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#about" className="btn-secondary w-full sm:w-auto">
            Learn More
          </a>
        </motion.div>

      </div>
    </section>
  );
}
