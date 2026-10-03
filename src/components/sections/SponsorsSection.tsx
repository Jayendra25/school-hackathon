"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Sparkles } from "lucide-react";

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="section-wrapper bg-black">
      <div className="app-container text-center">
        
        {/* Section Header */}
        <div className="mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="badge-pill mb-4"
          >
            Organizers &amp; Partners
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-white tracking-[-0.03em] leading-tight"
          >
            Backed by Leaders.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[18px] text-[#A1A1AA] mt-4 leading-relaxed"
          >
            Combining academic heritage with industry-leading technical mentorship.
          </motion.p>
        </div>

        {/* Clean Centered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Birla Institute */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-glass p-8 flex flex-col items-center justify-center text-center group"
          >
            <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-[#8B5CF6] mb-5 group-hover:scale-105 transition-transform duration-200">
              <GraduationCap className="w-7 h-7" />
            </div>
            <span className="text-xs uppercase font-mono tracking-widest text-[#A1A1AA] mb-1 font-semibold">
              Host Institution
            </span>
            <h3 className="text-[24px] font-bold text-white tracking-tight">
              Birla Institute
            </h3>
            <p className="text-sm text-[#A1A1AA] mt-1">
              of Applied Sciences, Bhimtal
            </p>
          </motion.div>

          {/* Coding Blocks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-glass p-8 flex flex-col items-center justify-center text-center group border-[#8B5CF6]/30"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 flex items-center justify-center text-[#8B5CF6] mb-5 group-hover:scale-105 transition-transform duration-200">
              <Code2 className="w-7 h-7" />
            </div>
            <span className="text-xs uppercase font-mono tracking-widest text-[#8B5CF6] mb-1 font-semibold">
              Powered By
            </span>
            <h3 className="text-[24px] font-bold text-white tracking-tight">
              Coding Blocks
            </h3>
            <p className="text-sm text-[#A1A1AA] mt-1">
              EdTech &amp; Mentorship Partner
            </p>
          </motion.div>

          {/* Student Innovation Cell */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-glass p-8 flex flex-col items-center justify-center text-center group"
          >
            <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-[#8B5CF6] mb-5 group-hover:scale-105 transition-transform duration-200">
              <Sparkles className="w-7 h-7" />
            </div>
            <span className="text-xs uppercase font-mono tracking-widest text-[#A1A1AA] mb-1 font-semibold">
              Student Body
            </span>
            <h3 className="text-[24px] font-bold text-white tracking-tight">
              BIAS Tech Club
            </h3>
            <p className="text-sm text-[#A1A1AA] mt-1">
              Student Innovation Cell
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
