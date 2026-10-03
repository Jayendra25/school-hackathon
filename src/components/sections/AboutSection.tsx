"use client";

import { motion } from "framer-motion";
import { Clock, Users, Layers, Trophy } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "24",
    unit: "Hours",
    title: "Non-Stop Sprint",
    desc: "An intense 24-hour cycle of collaborative building, mentoring, and shipping.",
  },
  {
    icon: Users,
    value: "300+",
    unit: "Participants",
    title: "School & College",
    desc: "Talented students and developers coming together across educational institutions.",
  },
  {
    icon: Layers,
    value: "6",
    unit: "Tracks",
    title: "Specialized Domains",
    desc: "Diverse problem tracks spanning Artificial Intelligence to Open Innovation.",
  },
  {
    icon: Trophy,
    value: "₹25,000",
    unit: "Prize Pool",
    title: "Rewards & Swag",
    desc: "Cash prizes, official BIAS certificates, and exclusive Coding Blocks goodies.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-wrapper bg-black">
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
            About The Event
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-white tracking-[-0.03em] leading-tight"
          >
            Engineered for Innovators.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[18px] text-[#A1A1AA] max-w-2xl mt-4 leading-relaxed"
          >
            Organized by Birla Institute of Applied Sciences in collaboration with Coding Blocks to foster technical excellence and creative problem solving.
          </motion.p>
        </div>

        {/* 4 Equal Statistic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.unit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="card-glass p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-zinc-900/80 border border-white/10 flex items-center justify-center text-[#8B5CF6] mb-6 group-hover:scale-105 transition-transform duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[18px] font-semibold text-[#8B5CF6] mt-1">
                    {stat.unit}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-white/10">
                  <div className="text-sm font-semibold text-white mb-1.5">
                    {stat.title}
                  </div>
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
