"use client";

import { motion } from "framer-motion";
import { Map, Brain, CheckCircle2 } from "lucide-react";

const events = [
  {
    icon: Map,
    tag: "Day 8 — Event 01",
    title: "Treasure Hunt",
    description:
      "A campus-wide team treasure hunt with tech-themed clues hidden across the college. Solve puzzles, decode hints, and race to the finish — a fun warm-up before the main judging begins.",
    highlights: [
      "Tech-themed clues & puzzles",
      "Campus-wide exploration",
      "Team-based challenge",
      "Scores count toward overall ranking",
    ],
    color: "#f6d365",
    gold: true,
  },
  {
    icon: Brain,
    tag: "Day 8 — Event 02",
    title: "General Awareness Quiz",
    description:
      "A fun and engaging quiz open to all participants, covering general awareness, regional knowledge and basic geography — with a special focus on Uttarakhand. Test your knowledge beyond tech and earn points for your team.",
    highlights: [
      "General awareness questions",
      "Regional & geography quiz",
      "Uttarakhand special round",
      "Scores count toward overall ranking",
    ],
    color: "#c084fc",
  },
];

export default function Day8EventsSection() {
  return (
    <section id="day8-events" className="section-wrapper">
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
            Day 8 Activities
          </motion.div>
          <motion.h2
            className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold tracking-[-0.02em] leading-[1.1]"
            style={{ color: "var(--text)" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06, ease: "easeOut" }}
          >
            Beyond the Hackathon.
          </motion.h2>
          <motion.p
            className="text-base sm:text-[17px] max-w-2xl mt-3"
            style={{ color: "var(--text-muted)", lineHeight: "1.7" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
          >
            On Day 8, it's not just about your project. Two extra events — and their scores go straight into your overall ranking.
          </motion.p>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={event.title}
                className="card-glass p-7 flex flex-col"
                style={event.gold ? { borderColor: "rgba(246,211,101,0.3)" } : { borderColor: `${event.color}30` }}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
              >
                {/* Tag */}
                <span
                  className="text-[10px] font-bold uppercase tracking-widest mb-4"
                  style={{ color: "var(--text-muted)" }}
                >
                  {event.tag}
                </span>

                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${event.color}18`,
                      border: `1px solid ${event.color}40`,
                      color: event.color,
                    }}
                  >
                    <Icon style={{ width: 18, height: 18 }} />
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: "var(--text)" }}>
                    {event.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--text-muted)" }}
                >
                  {event.description}
                </p>

                {/* Highlights */}
                <div className="mt-auto pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                  <p
                    className="text-[10px] font-semibold uppercase tracking-widest mb-2.5"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Highlights
                  </p>
                  <div className="flex flex-col gap-2">
                    {event.highlights.map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2
                          style={{ width: 13, height: 13, color: event.color, flexShrink: 0 }}
                        />
                        <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                          {item}
                        </span>
                      </div>
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
          transition={{ duration: 0.4, delay: 0.25, ease: "easeOut" }}
        >
          Overall winners are ranked on the{" "}
          <span style={{ color: "var(--text)" }}>combined score</span> from Hackathon + Quiz + Treasure Hunt.
        </motion.p>

      </div>
    </section>
  );
}
