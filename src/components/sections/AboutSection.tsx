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
    <section id="about" className="section-wrapper">
      <div className="app-container">

        {/* Section Header */}
        <div className="mb-12">
          <motion.div
            className="badge-pill mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            About The Event
          </motion.div>
          <motion.h2
            className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold tracking-[-0.02em] leading-[1.1]"
            style={{ color: "var(--text)" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06, ease: "easeOut" }}
          >
            Engineered for Innovators.
          </motion.h2>
          <motion.p
            className="text-base sm:text-[17px] max-w-2xl mt-3"
            style={{ color: "var(--text-muted)", lineHeight: "1.7" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
          >
            Organized by Birla Institute of Applied Sciences in collaboration with Coding Blocks
            to foster technical excellence and creative problem solving.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.unit}
                className="card-glass p-6 flex flex-col"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07, ease: "easeOut" }}
              >
                <div className="icon-box mb-5">
                  <Icon className="w-4.5 h-4.5" style={{ width: 18, height: 18 }} />
                </div>

                <div
                  className="text-[36px] font-bold tracking-tight leading-none"
                  style={{ color: "var(--text)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm font-semibold mt-0.5 mb-4"
                  style={{ color: "var(--accent)" }}
                >
                  {stat.unit}
                </div>

                <div className="mt-auto pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                  <div className="text-sm font-semibold mb-1" style={{ color: "var(--text)" }}>
                    {stat.title}
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
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
