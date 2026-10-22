"use client";

import { motion } from "framer-motion";
import { Megaphone, ClipboardList, BookOpen, Clock, Code2, Presentation, Trophy, Map, Brain } from "lucide-react";
import { ArrowRight, ArrowLeft, ArrowDown } from "lucide-react";

const steps = [
  {
    step: "01",
    phase: "Announcement",
    icon: Megaphone,
    desc: "Official TechSpark teaser and poster released across school and student channels.",
    color: "#8b5cf6",
  },
  {
    step: "02",
    phase: "Registration Opens",
    icon: ClipboardList,
    desc: "Participation form goes live. Students select their track, enter team details and submit an initial problem statement.",
    color: "#a78bfa",
  },
  {
    step: "03",
    phase: "Orientation",
    icon: BookOpen,
    desc: "Birla Institute faculty & student coordinators visit schools to walk through rules, tracks, judging criteria, AI-use policy and the submission process.",
    color: "#c084fc",
  },
  {
    step: "04",
    phase: "Build Week Begins",
    icon: Clock,
    date: "16 October 2026 — 4:00 PM",
    desc: "The 7-day build phase kicks off today! Students work from home or school — no need to come to campus during these days. The clock is running — start building now.",
    color: "#38bdf8",
    highlight: true,
  },
  {
    step: "05",
    phase: "7-Day Build Sprint",
    icon: Code2,
    desc: "Build at your own pace from anywhere — home, school, library. Mentor instructions and updates shared on the official WhatsApp channel.",
    color: "#34d399",
  },
  {
    step: "06",
    phase: "Showcase & Judging",
    icon: Presentation,
    date: "24 October 2026 — Final Deadline 3:00 PM IST",
    desc: "All teams report to the Birla campus. Live demo (7–10 min), judge Q&A, and an on-the-spot live modification challenge. Submission deadline: 3:00 PM IST.",
    color: "#fb923c",
  },
  {
    step: "07",
    phase: "Coding Treasure Hunt",
    icon: Map,
    date: "24 October 2026 — Day 8 at Birla Campus",
    desc: "A team-based challenge where coding meets adventure — test your Python knowledge, logical reasoning and problem-solving skills through a series of engaging challenges.",
    color: "#f472b6",
  },
  {
    step: "08",
    phase: "Knowledge & Aptitude Quiz",
    icon: Brain,
    date: "24 October 2026 — Day 8 at Birla Campus",
    desc: "Covers general awareness, Uttarakhand geography and basic aptitude & logical reasoning. Top scorers earn special prizes and boost their team's score.",
    color: "#818cf8",
  },
  {
    step: "09",
    phase: "Results & Awards",
    icon: Trophy,
    date: "24 October 2026 — Day 8 at Birla Campus",
    desc: "Announced once all three events wrap up. Winners decided on combined scores — Hackathon, Quiz & Treasure Hunt. Trophies, prizes and certificates on stage.",
    color: "#f6d365",
    gold: true,
  },
];

const COLS = 4;

export default function ScheduleSection() {
  const rows: typeof steps[] = [];
  for (let i = 0; i < steps.length; i += COLS) {
    rows.push(steps.slice(i, i + COLS));
  }

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
            Your Journey, Step by Step.
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

        {/* Serpent Layout — desktop */}
        <div className="hidden sm:block">
          {rows.map((row, rowIdx) => {
            const isReversed = rowIdx % 2 === 1;
            const displayRow = isReversed ? [...row].reverse() : row;
            const globalOffset = rowIdx * COLS;

            return (
              <div key={rowIdx}>
                {/* Cards row */}
                <div className="grid grid-cols-4 gap-4 items-stretch">
                  {displayRow.map((item, colIdx) => {
                    const Icon = item.icon;
                    const stepIdx = isReversed
                      ? globalOffset + (row.length - 1 - colIdx)
                      : globalOffset + colIdx;
                    const isLastInRow = colIdx === displayRow.length - 1;

                    return (
                      <div key={item.step} className="relative flex">
                        {/* Card */}
                        <motion.div
                          className="relative w-full rounded-2xl p-5 flex flex-col gap-3 overflow-hidden"
                          style={{
                            background: "var(--surface)",
                            border: `1px solid ${item.color}35`,
                            boxShadow: `0 0 20px ${item.color}10`,
                          }}
                          initial={{ opacity: 0, y: 18 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: stepIdx * 0.06, ease: "easeOut" }}
                          whileHover={{ y: -3, boxShadow: `0 8px 28px ${item.color}22` }}
                        >
                          {/* Subtle top gradient bar */}
                          <div
                            className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                            style={{ background: `linear-gradient(90deg, ${item.color}00, ${item.color}, ${item.color}00)` }}
                          />

                          {/* Step number + Icon */}
                          <div className="flex items-center justify-between">
                            <div
                              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                              style={{
                                background: `${item.color}18`,
                                border: `1px solid ${item.color}40`,
                                color: item.color,
                              }}
                            >
                              <Icon style={{ width: 16, height: 16 }} />
                            </div>
                            <span
                              className="text-2xl font-black font-mono leading-none"
                              style={{ color: `${item.color}30` }}
                            >
                              {item.step}
                            </span>
                          </div>

                          {/* Text */}
                          <div>
                            <h3
                              className="text-sm font-bold mb-1.5 leading-snug line-clamp-1"
                              style={{ color: "var(--text)" }}
                            >
                              {item.phase}
                            </h3>
                            {item.date && (
                              <div
                                className="inline-flex items-center mb-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold"
                                style={{
                                  background: `${item.color}18`,
                                  border: `1px solid ${item.color}40`,
                                  color: item.color,
                                  letterSpacing: "0.01em",
                                }}
                              >
                                {item.date}
                              </div>
                            )}
                            <p className="text-xs leading-relaxed line-clamp-4" style={{ color: "var(--text-muted)" }}>
                              {item.desc}
                            </p>
                          </div>
                        </motion.div>

                        {/* Horizontal arrow — sits to the right of each card except last */}
                        {!isLastInRow && (
                          <div className="absolute -right-4 top-8 z-10 flex items-center justify-center w-8 h-8">
                            <div
                              className="flex items-center justify-center w-7 h-7 rounded-full"
                              style={{
                                background: `${item.color}20`,
                                border: `1px solid ${item.color}60`,
                                boxShadow: `0 0 8px ${item.color}30`,
                              }}
                            >
                              {isReversed
                                ? <ArrowLeft style={{ width: 12, height: 12, color: item.color }} />
                                : <ArrowRight style={{ width: 12, height: 12, color: item.color }} />
                              }
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Down arrow between rows */}
                {rowIdx < rows.length - 1 && (() => {
                  // last card in the current row (rightmost on even, leftmost on odd — but always step at end of row)
                  const lastStep = row[row.length - 1];
                  const arrowColor = lastStep.color;
                  return (
                    <motion.div
                      className="flex my-4"
                      style={{ justifyContent: rowIdx % 2 === 0 ? "flex-end" : "flex-start" }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.35 }}
                    >
                      <div
                        style={{
                          width: "calc(25% - 8px)",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          className="flex items-center justify-center w-7 h-7 rounded-full"
                          style={{
                            background: `${arrowColor}20`,
                            border: `1px solid ${arrowColor}60`,
                            boxShadow: `0 0 8px ${arrowColor}30`,
                          }}
                        >
                          <ArrowDown style={{ width: 12, height: 12, color: arrowColor }} />
                        </div>
                      </div>
                    </motion.div>
                  );
                })()}
              </div>
            );
          })}
        </div>

        {/* Mobile — vertical timeline */}
        <div className="flex flex-col sm:hidden">
          {steps.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === steps.length - 1;
            return (
              <motion.div
                key={item.step}
                className="relative flex gap-4"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04, ease: "easeOut" }}
              >
                {/* Left column — icon + connecting line */}
                <div className="flex flex-col items-center flex-shrink-0" style={{ width: 40 }}>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 z-10"
                    style={{
                      background: `${item.color}18`,
                      border: `1px solid ${item.color}50`,
                      color: item.color,
                    }}
                  >
                    <Icon style={{ width: 15, height: 15 }} />
                  </div>
                  {/* Vertical connector */}
                  {!isLast && (
                    <div
                      className="flex-1 w-px mt-1"
                      style={{
                        background: `linear-gradient(180deg, ${item.color}50, ${steps[index + 1].color}20)`,
                        minHeight: 16,
                      }}
                    />
                  )}
                </div>

                {/* Right column — card */}
                <div className="flex-1 pb-4">
                  <div
                    className="rounded-2xl p-4 relative overflow-hidden"
                    style={{
                      background: "var(--surface)",
                      border: `1px solid ${item.color}30`,
                      boxShadow: `0 0 14px ${item.color}0d`,
                    }}
                  >
                    {/* Top colored bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}00)` }}
                    />
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-bold leading-snug" style={{ color: "var(--text)" }}>
                        {item.phase}
                      </h3>
                      <span
                        className="text-lg font-black font-mono leading-none ml-2 flex-shrink-0"
                        style={{ color: `${item.color}35` }}
                      >
                        {item.step}
                      </span>
                    </div>
                    {item.date && (
                      <div
                        className="inline-flex items-center mb-2 px-2 py-0.5 rounded-full text-[10px] font-semibold"
                        style={{
                          background: `${item.color}18`,
                          border: `1px solid ${item.color}40`,
                          color: item.color,
                          letterSpacing: "0.01em",
                        }}
                      >
                        {item.date}
                      </div>
                    )}
                    <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

