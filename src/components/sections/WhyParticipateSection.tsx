"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Users, Gift, BookOpen, Briefcase, Zap } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Official Certificates",
    desc: "Recognized certificates of merit and participation issued by BIAS and Coding Blocks.",
  },
  {
    icon: Users,
    title: "Networking & Community",
    desc: "Direct interactions with expert mentors, industry judges, and fellow student builders.",
  },
  {
    icon: Gift,
    title: "Coding Blocks Goodies",
    desc: "Exclusive hackathon merchandise, developer swag bags, and educational vouchers.",
  },
  {
    icon: BookOpen,
    title: "Intensive Learning",
    desc: "Accelerate your programming skills, learn project architecture, and work under deadlines.",
  },
  {
    icon: Briefcase,
    title: "Internship Opportunities",
    desc: "Top performers get fast-tracked evaluation for internship roles and mentorship programs.",
  },
];

export default function WhyParticipateSection() {
  return (
    <section id="why-participate" className="section-wrapper bg-black">
      <div className="app-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Description & Bullet points */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="badge-pill mb-4"
            >
              Why Participate
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-white tracking-[-0.03em] leading-tight mb-6"
            >
              Elevate Your Skills.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[18px] text-[#A1A1AA] leading-relaxed mb-10"
            >
              More than just a hackathon—an opportunity to build real products, gain industry visibility, and turn curiosity into impact.
            </motion.p>

            <div className="space-y-5">
              {benefits.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.06 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="mt-1 w-6 h-6 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 flex items-center justify-center text-[#8B5CF6] flex-shrink-0 group-hover:bg-[#8B5CF6] group-hover:text-white transition-colors duration-200">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div>
                      <h3 className="text-[18px] font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#A1A1AA] mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Modern Tech Feature Panel (Apple / Linear Spec Card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 card-glass p-8 relative overflow-hidden"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA]">
                <Zap className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <span>ENVIRONMENT_READY</span>
              </div>
            </div>

            {/* Spec items */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-[#A1A1AA] uppercase">Format</div>
                  <div className="text-base font-semibold text-white mt-0.5">24h Continuous Hack</div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-[#8B5CF6]/15 text-[#8B5CF6] border border-[#8B5CF6]/20">
                  Live
                </span>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-[#A1A1AA] uppercase">Eligibility</div>
                  <div className="text-base font-semibold text-white mt-0.5">School + College Level</div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-white/10 text-white">
                  Open
                </span>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-[#A1A1AA] uppercase">Prize Value</div>
                  <div className="text-base font-semibold text-white mt-0.5">₹25,000 + Swag Pool</div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Guaranteed
                </span>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono text-[#A1A1AA] uppercase">Partner</div>
                  <div className="text-base font-semibold text-white mt-0.5">Coding Blocks</div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-400">
                  Official
                </span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 text-center">
              <span className="text-xs font-mono text-[#A1A1AA]">
                Birla Institute of Applied Sciences &bull; 2026 Edition
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
