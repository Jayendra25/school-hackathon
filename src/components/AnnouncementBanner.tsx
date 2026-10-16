"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Calendar, Clock, X, Zap } from "lucide-react";

const C = {
  bg:           "#111113",
  surface:      "#1a1a1f",
  border:       "rgba(255,255,255,0.09)",
  borderAccent: "rgba(139,92,246,0.35)",
  accent:       "#8b5cf6",
  accentDim:    "rgba(139,92,246,0.12)",
  text:         "#f4f4f5",
  textSec:      "#d4d4d8",
  textMuted:    "#a1a1aa",
};

export default function AnnouncementBanner() {
  const [dismissed, setDismissed] = useState(false);

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          key="announcement-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={() => setDismissed(true)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9500,
            /* scroll container so card never clips off-screen on small phones */
            overflowY: "auto",
            overflowX: "hidden",
            WebkitOverflowScrolling: "touch",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            /* top/bottom padding keeps card away from edges + notch */
            padding: "env(safe-area-inset-top, 24px) 16px env(safe-area-inset-bottom, 24px)",
            paddingTop: "max(env(safe-area-inset-top, 0px), 24px)",
            paddingBottom: "max(env(safe-area-inset-bottom, 0px), 24px)",
            background: "rgba(0,0,0,0.65)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          {/* ── Modal card — no overflow:hidden so X is never clipped ── */}
          <motion.div
            /* No scale on mobile — translateY only to avoid jitter */
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 620,
              /* no maxHeight / overflowY here — parent scroll handles it */
              borderRadius: 20,
              background: C.bg,
              border: `1px solid ${C.borderAccent}`,
              boxShadow:
                "0 24px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(139,92,246,0.1), 0 0 50px rgba(139,92,246,0.1)",
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              /* margin so card doesn't butt against top on tiny screens */
              marginTop: 8,
              marginBottom: 8,
            }}
          >
            {/* Gradient top bar */}
            <div
              style={{
                height: 3,
                borderRadius: "20px 20px 0 0",
                background: "linear-gradient(90deg, #8b5cf6 0%, #c084fc 50%, #f6d365 100%)",
                boxShadow: "0 0 16px rgba(139,92,246,0.4)",
              }}
            />

            {/* ✕ close — sticky inside the card, never clips */}
            <button
              onClick={() => setDismissed(true)}
              aria-label="Close announcement"
              style={{
                position: "sticky",
                top: 12,
                float: "right",
                /* pull it into the top-right corner */
                marginTop: -6,
                marginRight: 12,
                marginBottom: -30,
                width: 34,
                height: 34,
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: C.accentDim,
                border: `1px solid ${C.borderAccent}`,
                cursor: "pointer",
                color: C.accent,
                zIndex: 10,
                flexShrink: 0,
              }}
            >
              <X size={15} />
            </button>

            {/* ── Content ── */}
            <div
              style={{
                padding: "20px 20px 28px",
                /* clear the floated X */
                overflow: "hidden",
              }}
            >

              {/* Live badge */}
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    fontSize: "0.63rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#22c55e",
                    background: "rgba(34,197,94,0.1)",
                    border: "1px solid rgba(34,197,94,0.3)",
                    borderRadius: 999,
                    padding: "5px 14px",
                  }}
                >
                  <span style={{ position: "relative", display: "flex", width: 7, height: 7 }}>
                    <span
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "50%",
                        background: "#22c55e",
                        opacity: 0.5,
                        animation: "ping 1.2s cubic-bezier(0,0,0.2,1) infinite",
                      }}
                    />
                    <span
                      style={{
                        position: "relative",
                        borderRadius: "50%",
                        width: 7,
                        height: 7,
                        background: "#22c55e",
                        display: "inline-flex",
                      }}
                    />
                  </span>
                  Hackathon Now Live
                </span>
              </div>

              {/* Icon + heading */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: C.accentDim,
                    border: `1px solid ${C.borderAccent}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 14,
                    boxShadow: "0 0 20px rgba(139,92,246,0.18)",
                    color: C.accent,
                    flexShrink: 0,
                  }}
                >
                  <AlertTriangle size={22} />
                </div>

                <h2
                  style={{
                    fontSize: "clamp(1.15rem, 5vw, 1.55rem)",
                    fontWeight: 800,
                    color: C.text,
                    letterSpacing: "-0.025em",
                    lineHeight: 1.25,
                    margin: 0,
                  }}
                >
                  🚨 Attention — TechSpark Hackathon
                  <br />
                  <span
                    style={{
                      background:
                        "linear-gradient(135deg, #8b5cf6 0%, #c084fc 40%, #f6d365 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Has Officially Started!
                  </span>
                </h2>

                <p
                  style={{
                    marginTop: 8,
                    fontSize: "clamp(0.75rem, 3vw, 0.85rem)",
                    color: C.textMuted,
                    fontWeight: 500,
                  }}
                >
                  You can still join — here&apos;s what you need to know ↓
                </p>
              </div>

              {/* Date cards — stack on very small screens */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: 10,
                  marginBottom: 18,
                }}
              >
                {[
                  {
                    icon: <Calendar size={13} color={C.accent} />,
                    label: "Official Start",
                    date: "16 October 2026",
                    time: "4:00 PM IST",
                  },
                  {
                    icon: <Clock size={13} color={C.accent} />,
                    label: "Final Deadline",
                    date: "23 October 2026",
                    time: "3:00 PM IST",
                  },
                ].map((card) => (
                  <div
                    key={card.label}
                    style={{
                      background: C.surface,
                      border: `1px solid ${C.border}`,
                      borderRadius: 12,
                      padding: "12px 14px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        marginBottom: 6,
                      }}
                    >
                      {card.icon}
                      <span
                        style={{
                          fontSize: "0.6rem",
                          fontWeight: 700,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: C.accent,
                        }}
                      >
                        {card.label}
                      </span>
                    </div>
                    <div style={{ fontSize: "clamp(0.82rem, 3vw, 0.92rem)", fontWeight: 700, color: C.text }}>
                      {card.date}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: C.textMuted, marginTop: 2 }}>
                      {card.time}
                    </div>
                  </div>
                ))}
              </div>

              {/* Body */}
              <p
                style={{
                  fontSize: "clamp(0.78rem, 3vw, 0.82rem)",
                  color: C.textMuted,
                  lineHeight: 1.7,
                  textAlign: "center",
                  marginBottom: 16,
                }}
              >
                The TechSpark 2026 Hackathon officially commenced on{" "}
                <strong style={{ color: C.textSec }}>16 October 2026 at 4:00 PM IST</strong>.
                All participating teams are allotted a total duration of{" "}
                <strong style={{ color: C.textSec }}>7 days</strong>, with the final deadline
                set for <strong style={{ color: C.textSec }}>23 October 2026 at 3:00 PM IST</strong>.
              </p>

              {/* Rules */}
              <div
                style={{
                  background: C.accentDim,
                  border: `1px solid ${C.borderAccent}`,
                  borderRadius: 12,
                  padding: "12px 14px",
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    fontSize: "0.6rem",
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: C.accent,
                    marginBottom: 10,
                  }}
                >
                  Important Rules
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  {[
                    "The hackathon timer starts at the official commencement time of 4:00 PM on 16 October 2026.",
                    "Teams joining or registering after the official start time will have their available working time reduced proportionately according to their actual joining time.",
                    "No extension or additional time will be granted to teams joining late.",
                    "All teams must complete and submit their work by the final deadline of 23 October 2026 at 3:00 PM IST.",
                    "By registering, teams acknowledge and agree to comply with these timing rules.",
                  ].map((rule, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 9,
                        fontSize: "clamp(0.73rem, 3vw, 0.79rem)",
                        color: C.textMuted,
                        lineHeight: 1.6,
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          marginTop: "0.42em",
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: C.accent,
                        }}
                      />
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gold note */}
              <p
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  textAlign: "center",
                  marginBottom: 20,
                  background: "linear-gradient(135deg, #f6d365 0%, #fda085 40%, #f0a500 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Please register promptly and plan your work accordingly. ⚡
              </p>

              {/* CTA */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  onClick={() => setDismissed(true)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "12px 36px",
                    borderRadius: 8,
                    background: C.text,
                    color: C.bg,
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    border: "none",
                    cursor: "pointer",
                    width: "100%",
                    justifyContent: "center",
                    boxShadow: "0 0 20px rgba(139,92,246,0.2), 0 4px 16px rgba(0,0,0,0.3)",
                  }}
                >
                  <Zap size={15} />
                  Got it, let&apos;s go!
                </button>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
