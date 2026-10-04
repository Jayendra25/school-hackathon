"use client";

import { motion } from "framer-motion";
import { Megaphone, ClipboardList, BookOpen, UserCheck, Clock, Code2, Presentation, Trophy } from "lucide-react";

const steps = [
  {
    step: "01",
    phase: "Announcement",
    icon: Megaphone,
    desc: "Official TechSpark teaser and poster released across school and student channels.",
  },
  {
    step: "02",
    phase: "Registration Opens",
    icon: ClipboardList,
    desc: "Participation form goes live. Students select their track, enter team details and submit an initial problem statement.",
  },
  {
    step: "03",
    phase: "Orientation",
    icon: BookOpen,
    desc: "Rules, tracks, example projects, judging criteria, AI-use policy and submission process are explained to all participants.",
  },
  {
    step: "04",
    phase: "Registration Closes",
    icon: UserCheck,
    desc: "No new team registrations after the deadline. Registered teams receive confirmation and official channel access.",
  },
  {
    step: "05",
    phase: "Build Week Begins",
    icon: Clock,
    desc: "The 7-day implementation period starts. Students ideate, design, code, test and improve their prototypes.",
  },
  {
    step: "06",
    phase: "7-Day Build Sprint",
    icon: Code2,
    desc: "Students work on their projects. Important notices and mentor instructions are shared on the official WhatsApp channel.",
  },
  {
    step: "07",
    phase: "Final Showcase",
    icon: Presentation,
    desc: "Teams report at the venue, present their project with a 7–10 min demo, answer judge questions and tackle the live modification challenge.",
  },
  {
    step: "08",
    phase: "Results & Awards",
    icon: Trophy,
    desc: "Winners announced. Trophies, prizes and certificates distributed. Special category awards presented.",
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
            How It Works.
          </motion.h2>
          <motion.p
            className="text-base sm:text-[17px] max-w-2xl mt-3"
            style={{ color: "var(--text-muted)", lineHeight: "1.7" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
          >
            From announcement to award ceremony — a clear roadmap for your TechSpark journey.
          </motion.p>
        </div>

        {/* Timeline grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === steps.length - 1;
            return (
              <motion.div
                key={item.step}
                className="card-glass p-5 flex flex-col gap-3"
                style={isLast ? { borderColor: "rgba(246,211,101,0.35)" } : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              >
                <div className="flex items-center justify-between">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={
                      isLast
                        ? { background: "rgba(246,211,101,0.12)", border: "1px solid rgba(246,211,101,0.35)", color: "#f6d365" }
                        : { background: "var(--accent-dim)", border: "1px solid var(--border-accent)", color: "var(--accent)" }
                    }
                  >
                    <Icon style={{ width: 15, height: 15 }} />
                  </div>
                  <span
                    className="text-xs font-mono font-semibold"
                    style={{ color: isLast ? "#f6d365" : "var(--text-muted)" }}
                  >
                    {item.step}
                  </span>
                </div>

                <div>
                  <h3
                    className="text-sm font-semibold mb-1"
                    style={{ color: isLast ? "#f6d365" : "var(--text)" }}
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
