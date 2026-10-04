"use client";

import { motion } from "framer-motion";
import { UserPlus, Lightbulb, Code2, Gavel, Trophy } from "lucide-react";

const steps = [
  {
    step: "01",
    phase: "Registration",
    icon: UserPlus,
    desc: "Form your team (1–4 members) and register on the official portal.",
  },
  {
    step: "02",
    phase: "Idea Submission",
    icon: Lightbulb,
    desc: "Select a track and submit your problem statement and architecture.",
  },
  {
    step: "03",
    phase: "Hackathon",
    icon: Code2,
    desc: "24-hour sprint to build, test, and polish a functional prototype.",
  },
  {
    step: "04",
    phase: "Judging",
    icon: Gavel,
    desc: "Pitch live to the judging panel with working demos and code reviews.",
  },
  {
    step: "05",
    phase: "Winners",
    icon: Trophy,
    desc: "Closing ceremony, distribution of ₹25k prize pool and goodies.",
  },
];

export default function ScheduleSection() {
  return (
    <section id="timeline" className="section-wrapper">
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
            Event Roadmap
          </motion.div>
          <motion.h2
            className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold tracking-[-0.02em] leading-[1.1]"
            style={{ color: "var(--text)" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06, ease: "easeOut" }}
          >
            Event Timeline.
          </motion.h2>
          <motion.p
            className="text-base sm:text-[17px] max-w-2xl mt-3"
            style={{ color: "var(--text-muted)", lineHeight: "1.7" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
          >
            A clear roadmap guiding your journey from registration to the winners&apos; podium.
          </motion.p>
        </div>

        {/* Timeline Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                className="card-glass p-5 flex flex-col gap-3 group"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07, ease: "easeOut" }}
              >
                <div className="flex items-center justify-between">
                  <div className="icon-box">
                    <Icon style={{ width: 16, height: 16 }} />
                  </div>
                  <span
                    className="text-xs font-mono font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.step}
                  </span>
                </div>

                <div>
                  <h3
                    className="text-sm font-semibold mb-1"
                    style={{ color: "var(--text)" }}
                  >
                    {item.phase}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {item.desc}
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
