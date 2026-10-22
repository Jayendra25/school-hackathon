"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Star, Globe, Smartphone, Bot, Lightbulb, Heart, Mic } from "lucide-react";

const mainAwards = [
  {
    icon: Trophy,
    rank: "🥇 Champion",
    title: "Hackathon Champion",
    who: "Highest combined score across Hackathon + Quiz + Treasure Hunt",
    perks: "Winner Trophy + Winner Certificates",
    prize: "₹25,000",
    border: "rgba(246,211,101,0.45)",
    glow: "rgba(246,211,101,0.13)",
    iconBg: "rgba(246,211,101,0.12)",
    iconBorder: "rgba(246,211,101,0.4)",
    iconColor: "#f6d365",
    rankColor: "#f6d365",
    prizeGlow: "rgba(246,211,101,0.25)",
    prizeBorder: "rgba(246,211,101,0.5)",
    prizeColor: "#f6d365",
  },
  {
    icon: Medal,
    rank: "🥈 Runner-Up",
    title: "1st Runner-Up",
    who: "Second-highest combined score across all three events",
    perks: "Runner-Up Trophy + Certificates",
    prize: "₹15,000",
    border: "rgba(192,200,215,0.45)",
    glow: "rgba(192,200,215,0.10)",
    iconBg: "rgba(192,200,215,0.10)",
    iconBorder: "rgba(192,200,215,0.35)",
    iconColor: "#c8d0db",
    rankColor: "#c8d0db",
    prizeGlow: "rgba(192,200,215,0.2)",
    prizeBorder: "rgba(192,200,215,0.5)",
    prizeColor: "#c8d0db",
  },
  {
    icon: Medal,
    rank: "🥉 Runner-Up",
    title: "2nd Runner-Up",
    who: "Third-highest combined score across all three events",
    perks: "Runner-Up Trophy + Certificates",
    prize: "₹10,000",
    border: "rgba(205,127,50,0.45)",
    glow: "rgba(205,127,50,0.10)",
    iconBg: "rgba(205,127,50,0.10)",
    iconBorder: "rgba(205,127,50,0.35)",
    iconColor: "#cd7f32",
    rankColor: "#cd7f32",
    prizeGlow: "rgba(205,127,50,0.2)",
    prizeBorder: "rgba(205,127,50,0.5)",
    prizeColor: "#cd7f32",
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

        {/* Combined scoring note */}
        <motion.div
          className="card-glass p-4 mb-6 flex items-start gap-3"
          style={{ borderColor: "rgba(246,211,101,0.25)" }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Trophy style={{ width: 16, height: 16, color: "#f6d365", flexShrink: 0, marginTop: 2 }} />
          <p className="text-sm" style={{ color: "var(--text-muted)", lineHeight: "1.7" }}>
            <span className="font-semibold" style={{ color: "var(--text)" }}>Overall rankings are based on combined scores</span>
            {" "}— your team's final position is calculated from the total score across all three Day 8 events:{" "}
            <span style={{ color: "var(--text)" }}>Hackathon Showcase</span>,{" "}
            <span style={{ color: "var(--text)" }}>Quiz</span>, and{" "}
            <span style={{ color: "var(--text)" }}>Treasure Hunt</span>.
          </p>
        </motion.div>

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
                {/* Fixed height so voucher box always sits at the same vertical position */}
                <p className="text-xs mb-3 flex items-center justify-center" style={{ color: "var(--text-muted)", minHeight: "2.5rem" }}>
                  {award.who}
                </p>

                {/* Prize Voucher — highlighted */}
                <div
                  className="w-full rounded-xl px-4 py-3 mb-3 flex flex-col items-center"
                  style={{
                    background: award.prizeGlow,
                    border: `1.5px solid ${award.prizeBorder}`,
                  }}
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: award.prizeColor, opacity: 0.8 }}>
                    Prize Voucher
                  </span>
                  <span className="text-2xl font-extrabold tracking-tight" style={{ color: award.prizeColor }}>
                    {award.prize}
                  </span>
                  <span className="text-[10px] mt-0.5" style={{ color: award.prizeColor, opacity: 0.7 }}>
                    worth of vouchers
                  </span>
                </div>

                <p
                  className="text-xs px-3 py-1.5 rounded-full"
                  style={{ background: "var(--bg-raised)", color: "var(--text-secondary)", border: "1px solid var(--border)" }}
                >
                  {award.perks}
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
            Track Awards — ₹10,000 Voucher + Trophy / Medal + Certificate per track
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {trackAwards.map((a, i) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.title}
                  className="card-glass p-4 flex items-center gap-3 relative overflow-hidden"
                  style={{
                    borderColor: "rgba(192,132,252,0.45)",
                    boxShadow: "0 0 0 1px rgba(192,132,252,0.12), 0 4px 20px rgba(192,132,252,0.08)",
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(192,132,252,0.8), transparent)" }}
                  />
                  <div
                    className="absolute -top-8 -right-8 w-20 h-20 rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(192,132,252,0.1) 0%, transparent 70%)" }}
                  />
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
            Special Category Awards — ₹10,000 Voucher + Trophy / Medal + Certificate
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {specialAwards.map((a) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.title}
                  className="card-glass p-4 flex items-center gap-3 relative overflow-hidden"
                  style={{
                    borderColor: "rgba(139,92,246,0.45)",
                    boxShadow: "0 0 0 1px rgba(139,92,246,0.12), 0 4px 20px rgba(139,92,246,0.08)",
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px]"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.8), transparent)" }}
                  />
                  <div
                    className="absolute -top-8 -right-8 w-20 h-20 rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)" }}
                  />
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

        {/* Participation certificates note + voucher */}
        <motion.div
          className="card-glass p-6 relative overflow-hidden"
          style={{
            borderColor: "rgba(34,197,94,0.40)",
            boxShadow: "0 0 28px rgba(34,197,94,0.10), inset 0 1px 0 rgba(34,197,94,0.08)",
          }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
        >
          {/* Top gradient line */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: "linear-gradient(90deg, transparent, rgba(34,197,94,0.8), transparent)" }}
          />
          {/* Glow orb */}
          <div
            className="absolute -top-10 -right-10 w-28 h-28 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(34,197,94,0.10) 0%, transparent 70%)" }}
          />

          <div className="flex flex-col sm:flex-row items-center gap-5 relative z-10">
            {/* Icon badge */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(34,197,94,0.12)",
                border: "1px solid rgba(34,197,94,0.35)",
                color: "#22c55e",
              }}
            >
              <Star style={{ width: 22, height: 22 }} />
            </div>

            {/* Text content */}
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-base font-bold mb-1" style={{ color: "var(--text)" }}>
                Participation Voucher + Certificate
              </h3>
              <p className="text-sm" style={{ color: "var(--text-muted)", lineHeight: "1.7" }}>
                Every eligible student who completes the final submission and showcase receives a{" "}
                <span className="font-bold" style={{ color: "#22c55e" }}>₹10,000 Voucher</span>{" "}
                and a{" "}
                <span className="font-semibold" style={{ color: "var(--text)" }}>Certificate of Participation</span>.
              </p>
            </div>

            {/* Voucher pill */}
            <div
              className="flex flex-col items-center justify-center rounded-xl px-5 py-3 flex-shrink-0"
              style={{
                background: "rgba(34,197,94,0.12)",
                border: "1.5px solid rgba(34,197,94,0.40)",
              }}
            >
              <span className="text-[10px] font-bold uppercase tracking-widest mb-0.5" style={{ color: "#22c55e", opacity: 0.8 }}>
                Voucher
              </span>
              <span className="text-xl font-extrabold tracking-tight" style={{ color: "#22c55e" }}>
                ₹10,000
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
