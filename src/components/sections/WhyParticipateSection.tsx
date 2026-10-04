"use client";

import { motion } from "framer-motion";
import { Check, Trophy, Users, BookOpen, Presentation, Sparkles, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "Real-World Experience",
    desc: "Experience how an idea becomes a technology product — from problem to prototype.",
  },
  {
    icon: Users,
    title: "Teamwork & Collaboration",
    desc: "Learn to divide work, communicate ideas and ship together under a deadline.",
  },
  {
    icon: Presentation,
    title: "Presentation Skills",
    desc: "Gain confidence presenting your work — explain the problem, solution and impact clearly.",
  },
  {
    icon: Sparkles,
    title: "Early Tech Exposure",
    desc: "Get early hands-on exposure to web development, mobile apps and AI as a school student.",
  },
  {
    icon: ShieldCheck,
    title: "Participation Certificates",
    desc: "Every eligible student who completes the final showcase receives an official Certificate of Participation.",
  },
  {
    icon: Trophy,
    title: "Trophies & Awards",
    desc: "Win trophies, track awards, special recognition and prizes across multiple award categories.",
  },
];

const specs = [
  { label: "Who Can Join",   value: "School students" },
  { label: "Team Size",      value: "1 to 5 members" },
  { label: "Build Time",     value: "7 days" },
  { label: "Demo Format",    value: "7–10 min per team" },
  { label: "Submission",     value: "Working prototype + source files + short explanation" },
  { label: "Entry Fee",      value: "Free" },
  { label: "AI Tools",       value: "Allowed (must understand usage)" },
  { label: "Teacher POC",    value: "1 teacher coordinator per team" },
];

export default function WhyParticipateSection() {
  return (
    <section id="why-participate" className="section-wrapper">
      <div className="app-container">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: Heading + Benefits */}
          <div className="lg:col-span-7">
            <motion.div
              className="badge-pill mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              Why Participate
            </motion.div>
            <motion.h2
              className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold tracking-[-0.02em] leading-[1.1] mb-4"
              style={{ color: "var(--text)" }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.06, ease: "easeOut" }}
            >
              Explore. Build. Improve.
            </motion.h2>
            <motion.p
              className="text-base sm:text-[17px] mb-10"
              style={{ color: "var(--text-muted)", lineHeight: "1.7" }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
            >
              No perfect idea required. Start with a problem. Build something you care about.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.08 + index * 0.05, ease: "easeOut" }}
                  >
                    <div
                      className="mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "var(--accent-dim)",
                        border: "1px solid var(--border-accent)",
                        color: "var(--accent)",
                      }}
                    >
                      <Icon style={{ width: 13, height: 13 }} />
                    </div>
                    <div>
                      <span className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                        {item.title}
                      </span>
                      <p className="text-xs mt-0.5 leading-relaxed" style={{ color: "var(--text-muted)" }}>
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Event at a Glance */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <div
              className="rounded-xl overflow-hidden"
              style={{ border: "1px solid var(--border)" }}
            >
              {/* Panel header */}
              <div
                className="px-5 py-4"
                style={{
                  background: "var(--bg-raised)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                  Event at a Glance
                </p>
              </div>

              {/* Spec rows */}
              <div style={{ background: "var(--surface)" }}>
                {specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    className="flex items-center justify-between px-5 py-3"
                    style={{
                      borderTop: i === 0 ? "none" : "1px solid var(--border)",
                    }}
                  >
                    <span className="text-sm" style={{ color: "var(--text-muted)" }}>
                      {spec.label}
                    </span>
                    <span
                      className="text-sm font-medium text-right"
                      style={{ color: "var(--text)" }}
                    >
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer note */}
              <div
                className="px-5 py-3.5"
                style={{
                  background: "var(--bg-raised)",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  TechSpark &bull; School Innovation Hackathon &bull; 2026 Edition
                </p>
              </div>
            </div>

            {/* AI tools note */}
            <div
              className="mt-4 p-4 rounded-xl text-sm"
              style={{
                background: "var(--accent-dim)",
                border: "1px solid var(--border-accent)",
                color: "var(--accent)",
              }}
            >
              <span className="font-semibold">AI tools are allowed</span>
              <span style={{ color: "var(--text-muted)" }}>
                {" "}— but you must understand what you build. Judges will ask questions and may request a small live change.
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
