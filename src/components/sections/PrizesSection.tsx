"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Star, Globe, Smartphone, Bot, Lightbulb, Heart, Mic, ArrowRight } from "lucide-react";

const REGISTER_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeesu7fm6jiaN94gQX_J79xhD1qCbG2wyG83CsZdKjvsi4EWQ/viewform?usp=publish-editor";

const mainAwards = [
  {
    icon: Trophy,
    rank: "🥇 Champion",
    title: "Hackathon Champion",
    who: "Best overall team across all tracks",
    recognition: "Winner Trophy + Winner Certificates + Prize",
    border: "rgba(246,211,101,0.45)",
    glow: "rgba(246,211,101,0.13)",
    iconBg: "rgba(246,211,101,0.12)",
    iconBorder: "rgba(246,211,101,0.4)",
    iconColor: "#f6d365",
    rankColor: "#f6d365",
  },
  {
    icon: Medal,
    rank: "🥈 Runner-Up",
    title: "1st Runner-Up",
    who: "Second-highest overall team",
    recognition: "Runner-Up Trophy + Certificates + Prize",
    border: "rgba(192,200,215,0.45)",
    glow: "rgba(192,200,215,0.10)",
    iconBg: "rgba(192,200,215,0.10)",
    iconBorder: "rgba(192,200,215,0.35)",
    iconColor: "#c8d0db",
    rankColor: "#c8d0db",
  },
  {
    icon: Medal,
    rank: "🥉 Runner-Up",
    title: "2nd Runner-Up",
    who: "Third-highest overall team",
    recognition: "Runner-Up Trophy + Certificates + Prize",
    border: "rgba(205,127,50,0.45)",
    glow: "rgba(205,127,50,0.10)",
    iconBg: "rgba(205,127,50,0.10)",
    iconBorder: "rgba(205,127,50,0.35)",
    iconColor: "#cd7f32",
    rankColor: "#cd7f32",
  },
];

const trackAwards = [
  { icon: Globe,      title: "Best Web Project",    desc: "Strongest HTML/CSS/JS project" },
  { icon: Smartphone, title: "Best Android App",    desc: "Strongest mobile/app prototype" },
  { icon: Bot,        title: "Best AI Innovation",  desc: "Most meaningful AI-based solution" },
];

const specialAwards = [
  { icon: Lightbulb, title: "Most Innovative Idea",    desc: "Most creative & original problem-solution approach" },
  { icon: Heart,     title: "Best Social Impact",      desc: "Strongest school/community/environment value" },
  { icon: Mic,       title: "Best Presentation & Demo", desc: "Team that communicates and demonstrates exceptionally well" },
];

export default function PrizesSection() {
  return (
    <section id="prizes" className="section-wrapper">
      <div className="app-container">

        {/* Section Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <motion.div
            className="badge-pill mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            Awards & Recognition
          </motion.div>
          <motion.h2
            className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold tracking-[-0.02em] leading-[1.1]"
            style={{ color: "var(--text)" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06, ease: "easeOut" }}
          >
            Recognizing Every Kind of Talent.
          </motion.h2>
          <motion.p
            className="text-base sm:text-[17px] mt-3"
            style={{ color: "var(--text-muted)", lineHeight: "1.7" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
          >
            Overall winners, track champions and special category awards — multiple ways to be recognised.
          </motion.p>
        </div>

        {/* Overall Awards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {mainAwards.map((award, i) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={award.title}
                className="card-glass p-6 flex flex-col items-center text-center"
                style={{
                  borderColor: award.border,
                  boxShadow: `0 0 28px ${award.glow}, inset 0 1px 0 ${award.glow}`,
                }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: award.iconBg,
                    border: `1px solid ${award.iconBorder}`,
                    color: award.iconColor,
                  }}
                >
                  <Icon style={{ width: 20, height: 20 }} />
                </div>
                <span
                  className="text-xs font-bold uppercase tracking-widest mb-2"
                  style={{ color: award.rankColor }}
                >
                  {award.rank}
                </span>
                <h3 className="text-base font-bold mb-1" style={{ color: "var(--text)" }}>
                  {award.title}
                </h3>
                <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>
                  {award.who}
                </p>
                <p
                  className="text-xs px-3 py-1.5 rounded-full"
                  style={{ background: "var(--bg-raised)", color: "var(--text-secondary)", border: "1px solid var(--border)" }}
                >
                  {award.recognition}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Track Awards */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
            Track Awards — Trophy / Medal + Certificate per track
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {trackAwards.map((a, i) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.title}
                  className="card-glass p-4 flex items-center gap-3"
                  style={{ borderColor: "rgba(192,132,252,0.25)" }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(192,132,252,0.1)", border: "1px solid rgba(192,132,252,0.3)", color: "#c084fc" }}
                  >
                    <Icon style={{ width: 14, height: 14 }} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: "var(--text)" }}>{a.title}</div>
                    <div className="text-xs" style={{ color: "var(--text-muted)" }}>{a.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Special Awards */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
            Special Category Awards — Special Award + Certificate
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {specialAwards.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.title} className="card-glass p-4 flex items-center gap-3">
                  <div className="icon-box flex-shrink-0" style={{ width: 32, height: 32, borderRadius: 8 }}>
                    <Icon style={{ width: 14, height: 14 }} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: "var(--text)" }}>{a.title}</div>
                    <div className="text-xs" style={{ color: "var(--text-muted)" }}>{a.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Participation certificates note + CTA */}
        <motion.div
          className="card-glass p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
        >
          <div className="flex items-start gap-3">
            <Star style={{ width: 18, height: 18, color: "var(--accent)", flexShrink: 0, marginTop: 2 }} />
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              <span className="font-semibold" style={{ color: "var(--text)" }}>Participation Certificates</span>
              {" "}— Every eligible student who completes the final submission and showcase receives a Certificate of Participation.
            </p>
          </div>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-shrink-0"
          >
            Claim Your Spot
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
