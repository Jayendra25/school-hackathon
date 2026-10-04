"use client";

import { motion } from "framer-motion";
import { Clock, Users, Layers, Lightbulb } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "7",
    unit: "Days",
    title: "Build Period",
    desc: "Work from home or school for 7 days, then come to the Birla campus on Day 8 for the live showcase and judging.",
  },
  {
    icon: Users,
    value: "1–5",
    unit: "Members",
    title: "Team Size",
    desc: "Solo or squad — form a team of up to 5 school students and build together.",
  },
  {
    icon: Layers,
    value: "3",
    unit: "Tracks",
    title: "Choose Your Domain",
    desc: "Web Development, Android App Development, or AI & Innovation — pick what excites you.",
  },
  {
    icon: Lightbulb,
    value: "7–10",
    unit: "Min Demo",
    title: "Final Showcase",
    desc: "Present your problem, solution, tech stack and live demo to the judging panel.",
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
            About TechSpark
          </motion.div>
          <motion.h2
            className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold tracking-[-0.02em] leading-[1.1]"
            style={{ color: "var(--text)" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06, ease: "easeOut" }}
          >
            Creators, Not Just Users.
          </motion.h2>
          <motion.p
            className="text-base sm:text-[17px] max-w-2xl mt-3"
            style={{ color: "var(--text-muted)", lineHeight: "1.7" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
          >
            TechSpark is designed to make school students <strong style={{ color: "var(--text-secondary)" }}>creators of technology, not just users of it.</strong>{" "}
            Students identify a real problem, choose a track, build a prototype in one week and present it to a judging panel.
            It&apos;s always about looking for a problem and building a solution for it.
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
                  <Icon style={{ width: 18, height: 18 }} />
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
