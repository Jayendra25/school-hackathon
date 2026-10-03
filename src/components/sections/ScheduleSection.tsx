"use client";

import { motion } from "framer-motion";
import { UserPlus, Lightbulb, Code2, Gavel, Trophy } from "lucide-react";

const steps = [
  {
    step: "01",
    phase: "Registration",
    icon: UserPlus,
    badge: "Phase 1",
    desc: "Form your team (1-4 members) and register on the official portal.",
  },
  {
    step: "02",
    phase: "Idea Submission",
    icon: Lightbulb,
    badge: "Phase 2",
    desc: "Select a track and submit your problem statement and architecture.",
  },
  {
    step: "03",
    phase: "Hackathon",
    icon: Code2,
    badge: "Phase 3",
    desc: "24-hour sprint to build, test, and polish a functional prototype.",
  },
  {
    step: "04",
    phase: "Judging",
    icon: Gavel,
    badge: "Phase 4",
    desc: "Pitch live to the judging panel with working demos and code reviews.",
  },
  {
    step: "05",
    phase: "Winner Announcement",
    icon: Trophy,
    badge: "Phase 5",
    desc: "Closing ceremony, distribution of ₹25k prize pool and goodies.",
  },
];

export default function ScheduleSection() {
  return (
    <section id="timeline" className="section-wrapper bg-black">
      <div className="app-container">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="badge-pill mb-4"
          >
            Event Roadmap
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-white tracking-[-0.03em] leading-tight"
          >
            Event Timeline.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[18px] text-[#A1A1AA] max-w-2xl mt-4 leading-relaxed"
          >
            A clear horizontal roadmap guiding your journey from registration to the winners&apos; podium.
          </motion.p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-7 left-8 right-8 h-[1px] bg-white/10 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="card-glass p-6 flex flex-col justify-between group"
                >
                  <div>
                    {/* Node / Badge row */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/15 flex items-center justify-center text-white group-hover:border-[#8B5CF6] group-hover:bg-[#8B5CF6]/10 group-hover:text-[#8B5CF6] transition-colors duration-200">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#8B5CF6]">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-white transition-colors">
                      {item.phase}
                    </h3>

                    <p className="text-sm text-[#A1A1AA] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500">
                    <span>STEP {item.step}</span>
                    <span>2026</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
