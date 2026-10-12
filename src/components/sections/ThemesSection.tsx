"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Bot } from "lucide-react";

const tracks = [
  {
    icon: Globe,
    title: "Web Development",
    tag: "Track 01",
    description:
      "Build a useful website or web application using HTML, CSS and JavaScript. Want extra points? Build using MERN, PHP or any other framework.",
    examples: ["School utility site", "Community platform", "Interactive web app", "E-learning portal"],
    color: "#8b5cf6",
  },
  {
    icon: Smartphone,
    title: "Android App",
    tag: "Track 02",
    description:
      "Turn an everyday idea into a mobile app. Use MIT App Inventor, Kotlin, Java or another beginner-friendly app-building tool.",
    examples: ["Habit tracker", "Campus app", "Attendance system", "Safety alert app"],
    color: "#f6d365",
    gold: true,
  },
  {
    icon: Bot,
    title: "AI & Innovation",
    tag: "Track 03",
    description:
      "Create an AI-powered solution — a chatbot, smart assistant, automation tool, or anything that uses AI meaningfully to solve a real problem.",
    examples: ["AI study helper", "Smart chatbot", "Recommendation system", "Automation tool"],
    color: "#c084fc",
  },
];

export default function ThemesSection() {
  return (
    <section id="themes" className="section-wrapper">
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
            Tracks
          </motion.div>
          <motion.h2
            className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold tracking-[-0.02em] leading-[1.1]"
            style={{ color: "var(--text)" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06, ease: "easeOut" }}
          >
            Choose Your Track.
          </motion.h2>
          <motion.p
            className="text-base sm:text-[17px] max-w-2xl mt-3"
            style={{ color: "var(--text-muted)", lineHeight: "1.7" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
          >
            Three focused domains — pick the one that matches your passion and start building.
          </motion.p>
        </div>

        {/* Track Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tracks.map((track, index) => {
            const Icon = track.icon;
            return (
              <motion.div
                key={track.title}
                className="card-glass p-7 flex flex-col group relative overflow-hidden"
                style={track.gold
                  ? {
                      borderColor: "rgba(246,211,101,0.45)",
                      boxShadow: "0 0 0 1px rgba(246,211,101,0.15), 0 4px 24px rgba(246,211,101,0.08)",
                    }
                  : {
                      borderColor: `${track.color}55`,
                      boxShadow: `0 0 0 1px ${track.color}15, 0 4px 24px ${track.color}0a`,
                    }
                }
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{
                    background: track.gold
                      ? "linear-gradient(90deg, transparent, rgba(246,211,101,0.8), transparent)"
                      : `linear-gradient(90deg, transparent, ${track.color}, transparent)`,
                  }}
                />
                {/* Corner glow */}
                <div
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full pointer-events-none"
                  style={{
                    background: track.gold
                      ? "radial-gradient(circle, rgba(246,211,101,0.08) 0%, transparent 70%)"
                      : `radial-gradient(circle, ${track.color}12 0%, transparent 70%)`,
                  }}
                />
                {/* Tag */}
                <span
                  className="text-[10px] font-bold uppercase tracking-widest mb-4"
                  style={{ color: "var(--text-muted)" }}
                >
                  {track.tag}
                </span>

                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${track.color}18`,
                      border: `1px solid ${track.color}40`,
                      color: track.color,
                    }}
                  >
                    <Icon style={{ width: 18, height: 18 }} />
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: "var(--text)" }}>
                    {track.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--text-muted)" }}
                >
                  {track.description}
                </p>

                {/* Example ideas */}
                <div className="mt-auto pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                  <p
                    className="text-[10px] font-semibold uppercase tracking-widest mb-2.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Example Ideas
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {track.examples.map((ex) => (
                      <span
                        key={ex}
                        className="text-xs px-2.5 py-1 rounded-full"
                        style={{
                          background: `${track.color}10`,
                          border: `1px solid ${track.color}25`,
                          color: track.color,
                        }}
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          className="text-sm text-center mt-8"
          style={{ color: "var(--text-muted)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
        >
          You can think of any idea you want to implement and launch it as your product.
        </motion.p>

      </div>
    </section>
  );
}
