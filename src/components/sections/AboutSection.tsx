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
    color: "#8B5CF6",
  },
  {
    icon: Users,
    value: "300+",
    unit: "Participants",
    title: "School & College",
    desc: "Talented students and developers coming together across educational institutions.",
    color: "#06b6d4",
  },
  {
    icon: Layers,
    value: "6",
    unit: "Tracks",
    title: "Specialized Domains",
    desc: "Diverse problem tracks spanning Artificial Intelligence to Open Innovation.",
    color: "#10b981",
  },
  {
    icon: Trophy,
    value: "₹25,000",
    unit: "Prize Pool",
    title: "Rewards & Swag",
    desc: "Cash prizes, official BIAS certificates, and exclusive Coding Blocks goodies.",
    color: "#f59e0b",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function AboutSection() {
  return (
    <section id="about" className="section-wrapper">
      <div className="app-container">

        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="badge-pill mb-4"
          >
            About The Event
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-[64px] font-bold tracking-[-0.03em] leading-tight"
            style={{ color: "var(--text)" }}
          >
            Engineered for Innovators.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[18px] max-w-2xl mt-4 leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Organized by Birla Institute of Applied Sciences in collaboration with Coding Blocks
            to foster technical excellence and creative problem solving.
          </motion.p>
        </div>

        {/* 4 Statistic Cards with stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.unit}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.25 } }}
                className="card-glass p-8 flex flex-col justify-between group cursor-default"
              >
                <div>
                  <motion.div
                    className="w-10 h-10 rounded-xl border flex items-center justify-center mb-6 transition-transform duration-200"
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      borderColor: "var(--border)",
                      color: stat.color,
                    }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>

                  <motion.div
                    className="text-4xl lg:text-5xl font-extrabold tracking-tight"
                    style={{ color: "var(--text)" }}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-[18px] font-semibold mt-1" style={{ color: stat.color }}>
                    {stat.unit}
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t" style={{ borderColor: "var(--border)" }}>
                  <div className="text-sm font-semibold mb-1.5" style={{ color: "var(--text)" }}>
                    {stat.title}
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {stat.desc}
                  </p>
                </div>

                {/* Color accent line on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-3xl"
                  style={{ backgroundColor: stat.color }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
