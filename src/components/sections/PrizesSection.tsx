"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Gift, ShieldCheck, ArrowRight } from "lucide-react";

const rewards = [
  {
    icon: Award,
    title: "₹25,000 Cash Pool",
    desc: "Cash prize distributed among top innovative teams.",
  },
  {
    icon: ShieldCheck,
    title: "Official Certificates",
    desc: "Verified merit and participation credentials from BIAS.",
  },
  {
    icon: Gift,
    title: "Coding Blocks Swag",
    desc: "Exclusive t-shirts, backpacks, stickers & merchandise.",
  },
  {
    icon: Trophy,
    title: "Mentorship & Perks",
    desc: "Discount vouchers and direct guidance from industry pros.",
  },
];

export default function PrizesSection() {
  return (
    <section id="prizes" className="section-wrapper bg-black">
      <div className="app-container">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="badge-pill mb-4"
          >
            Prize Pool
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-white tracking-[-0.03em] leading-tight"
          >
            Recognizing Excellence.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[18px] text-[#A1A1AA] mt-4 leading-relaxed"
          >
            Compete for cash rewards, premium goodies, and certificates backed by Coding Blocks &amp; Birla Institute.
          </motion.p>
        </div>

        {/* Central Apple-style Keynote Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-glass max-w-4xl mx-auto p-8 sm:p-12 text-center relative overflow-hidden"
        >
          {/* Subtle top spotlight */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#8B5CF6]/15 blur-3xl rounded-full pointer-events-none" />

          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-zinc-900 border border-white/10 text-[#8B5CF6] mb-6 shadow-lg">
            <Trophy className="w-8 h-8" />
          </div>

          <div className="text-xs font-mono uppercase tracking-widest text-[#8B5CF6] mb-2 font-semibold">
            Grand Winner &amp; Excellence Award
          </div>

          <h3 className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight mb-4">
            ₹25,000
          </h3>

          <p className="text-[18px] text-[#A1A1AA] max-w-md mx-auto mb-10">
            Total prize bounty along with certificates, goodies, and swag kits.
          </p>

          {/* 4 Feature Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-10 pt-8 border-t border-white/10">
            {rewards.map((reward) => {
              const Icon = reward.icon;
              return (
                <div
                  key={reward.title}
                  className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-start gap-4"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6] flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[18px] font-semibold text-white">
                      {reward.title}
                    </div>
                    <div className="text-xs sm:text-sm text-[#A1A1AA] mt-0.5">
                      {reward.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div>
            <a href="#register" className="btn-primary">
              <span>Claim Your Spot</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
