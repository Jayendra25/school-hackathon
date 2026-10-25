"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, Heart, Trophy, Users, Code2, Calendar } from "lucide-react";

/* ───────────────────────────────────────────────
   Lightweight canvas confetti — self-contained
   ─────────────────────────────────────────────── */
function Confetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const colors = [
      "#8b5cf6", "#c084fc", "#f6d365", "#fda085",
      "#6ee7b7", "#f0a500", "#a78bfa", "#fbbf24",
    ];

    type Particle = {
      x: number; y: number; vx: number; vy: number;
      size: number; color: string; rotation: number;
      rotationSpeed: number; shape: number; life: number; maxLife: number;
    };

    const particles: Particle[] = [];

    // initial burst
    const burst = (originX: number, originY: number, count: number) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 8;
        particles.push({
          x: originX,
          y: originY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 2,
          size: 4 + Math.random() * 7,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.3,
          shape: Math.floor(Math.random() * 3),
          life: 0,
          maxLife: 180 + Math.random() * 120,
        });
      }
    };

    // two bursts from top corners
    burst(canvas.width * 0.2, -20, 80);
    burst(canvas.width * 0.8, -20, 80);
    // centre burst slightly delayed via timeout
    const centerBurst = setTimeout(() => burst(canvas.width * 0.5, canvas.height * 0.25, 120), 400);

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.12; // gravity
        p.vx *= 0.992;
        p.rotation += p.rotationSpeed;

        const fadeIn = Math.min(p.life / 15, 1);
        const fadeOut = Math.max(1 - (p.life - p.maxLife + 40) / 40, 0);
        const alpha = Math.min(fadeIn, fadeOut);

        if (p.life > p.maxLife || p.y > canvas.height + 40) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.color;

        if (p.shape === 0) {
          // rect
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        } else if (p.shape === 1) {
          // circle
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // triangle
          ctx.beginPath();
          ctx.moveTo(0, -p.size / 2);
          ctx.lineTo(p.size / 2, p.size / 2);
          ctx.lineTo(-p.size / 2, p.size / 2);
          ctx.closePath();
          ctx.fill();
        }
        ctx.restore();
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(centerBurst);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 2,
      }}
    />
  );
}

/* ───────────────────────────────────────────────
   Soft gradient orbs background
   ─────────────────────────────────────────────── */
function WrapUpGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const orbs = [
      { baseX: 0.2, baseY: 0.15, ampX: 0.06, ampY: 0.04, freqX: 0.00012, freqY: 0.00016, phaseX: 0, phaseY: 0, radius: 0.55, color: "rgba(167, 139, 250,", alpha: 0.7 },
      { baseX: 0.8, baseY: 0.2, ampX: 0.05, ampY: 0.04, freqX: 0.00010, freqY: 0.00014, phaseX: Math.PI / 2, phaseY: Math.PI / 6, radius: 0.45, color: "rgba(110, 231, 183,", alpha: 0.6 },
      { baseX: 0.5, baseY: 0.5, ampX: 0.08, ampY: 0.03, freqX: 0.00015, freqY: 0.00010, phaseX: Math.PI, phaseY: Math.PI * 0.6, radius: 0.5, color: "rgba(253, 211, 140,", alpha: 0.65 },
    ];

    const draw = (timestamp: number) => {
      const W = canvas.width;
      const H = canvas.height;
      const minDim = Math.min(W, H);
      ctx.clearRect(0, 0, W, H);
      for (const orb of orbs) {
        const cx = (orb.baseX + orb.ampX * Math.sin(timestamp * orb.freqX + orb.phaseX)) * W;
        const cy = (orb.baseY + orb.ampY * Math.sin(timestamp * orb.freqY + orb.phaseY)) * H;
        const r = orb.radius * minDim;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        grad.addColorStop(0, `${orb.color}${orb.alpha})`);
        grad.addColorStop(0.45, `${orb.color}${(orb.alpha * 0.35).toFixed(3)})`);
        grad.addColorStop(1, `${orb.color}0)`);
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }
      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        mixBlendMode: "multiply",
        zIndex: 1,
      }}
    />
  );
}

/* ── Spark icon (shared SVG) ── */
function SparkIcon({ size = 48 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: size, height: size, flexShrink: 0, display: "block" }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sparkGradWrap" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="40%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#f6d365" />
        </linearGradient>
      </defs>
      <path d="M20 2 L22.5 17.5 L38 20 L22.5 22.5 L20 38 L17.5 22.5 L2 20 L17.5 17.5 Z" fill="url(#sparkGradWrap)" />
      <path d="M32 4 L33 9 L38 10 L33 11 L32 16 L31 11 L26 10 L31 9 Z" fill="url(#sparkGradWrap)" opacity="0.85" />
      <path d="M8 26 L9 30 L13 31 L9 32 L8 36 L7 32 L3 31 L7 30 Z" fill="url(#sparkGradWrap)" opacity="0.7" />
    </svg>
  );
}

/* ───────────────────────────────────────────────
   Stats data
   ─────────────────────────────────────────────── */
const STATS = [
  { icon: Calendar, label: "7 Days", sub: "of Building" },
  { icon: Code2,    label: "3 Tracks", sub: "Web · Android · AI" },
  { icon: Users,    label: "Many Teams", sub: "Young Innovators" },
  { icon: Trophy,   label: "1 Showcase", sub: "Live Demo Day" },
];

/* ───────────────────────────────────────────────
   Main Component
   ─────────────────────────────────────────────── */
export default function HackathonWrapUp({
  onEnter,
}: {
  onEnter: () => void;
}) {
  const [exiting, setExiting] = useState(false);

  const handleEnter = useCallback(() => {
    setExiting(true);
    setTimeout(onEnter, 600);
  }, [onEnter]);

  // Lock scroll while wrap-up is visible
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  // Allow Enter key to dismiss
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") handleEnter();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleEnter]);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="wrapup"
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#fafafa" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Background gradient orbs */}
          <WrapUpGradient />

          {/* Confetti */}
          <Confetti />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl">

            {/* Spark + wordmark */}
            <motion.div
              className="flex items-center gap-3 mb-3"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <SparkIcon size={40} />
              <h1
                className="font-black tracking-tight"
                style={{ fontSize: "clamp(2rem, 5vw, 3rem)", letterSpacing: "-0.04em", color: "#09090b", lineHeight: 1 }}
              >
                Tech<span className="text-gradient-royal">Spark</span>
              </h1>
            </motion.div>

            {/* 2026 badge */}
            <motion.span
              className="text-gradient-gold font-mono font-bold mb-6"
              style={{ fontSize: "clamp(0.8rem, 2vw, 1rem)", letterSpacing: "0.1em" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              2026
            </motion.span>

            {/* Success badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: "rgba(34,197,94,0.10)",
                border: "1px solid rgba(34,197,94,0.35)",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
            >
              <CheckCircle2 style={{ width: 16, height: 16, color: "#22c55e" }} />
              <span className="text-sm font-bold" style={{ color: "#22c55e" }}>
                Hackathon Successfully Concluded!
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h2
              className="font-black tracking-[-0.03em] leading-[1.0] mb-5"
              style={{
                fontSize: "clamp(2rem, 7vw, 4rem)",
                color: "#09090b",
              }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28, ease: "easeOut" }}
            >
              Thank You for <span className="text-gradient-royal">Building</span>
              <br />
              the Future with Us.
            </motion.h2>

            {/* Thank-you message */}
            <motion.p
              className="text-base sm:text-lg mb-10"
              style={{ color: "#71717a", lineHeight: 1.7, maxWidth: 480 }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.36, ease: "easeOut" }}
            >
              TechSpark 2026 has officially wrapped up! From the first spark of an idea to the final
              demo-day pitch — every team brought something remarkable to the table. Thank you to all
              the participants, mentors, judges, and organisers who made this hackathon a resounding
              success.{" "}
              <span style={{ color: "#3f3f46", fontWeight: 600 }}>
                You proved that school students can think it, build it, and bring it to life.
              </span>
            </motion.p>

            {/* Stats row */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-10"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.44, ease: "easeOut" }}
            >
              {STATS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.label}
                    className="flex items-center gap-2.5"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.08, ease: "easeOut" }}
                  >
                    <div
                      className="flex items-center justify-center rounded-xl"
                      style={{
                        width: 36, height: 36,
                        background: "var(--accent-dim)",
                        border: "1px solid var(--border-accent)",
                        color: "var(--accent)",
                        flexShrink: 0,
                      }}
                    >
                      <Icon style={{ width: 17, height: 17 }} />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-bold" style={{ color: "#09090b", lineHeight: 1.2 }}>{s.label}</div>
                      <div className="text-[11px]" style={{ color: "#a1a1aa" }}>{s.sub}</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Heart line */}
            <motion.p
              className="flex items-center gap-2 text-sm mb-8"
              style={{ color: "#a1a1aa" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Organised by Birla Institute of Applied Sciences
              <span style={{ color: "#e4e4e7" }}>·</span>
              Powered by Coding Blocks
            </motion.p>

            {/* Enter Site button */}
            <motion.button
              onClick={handleEnter}
              className="btn-primary"
              style={{ padding: "15px 40px", fontSize: 15 }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore the Site
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            {/* Subtle hint */}
            <motion.span
              className="mt-4 text-xs font-mono"
              style={{ color: "#d4d4d8" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              Press Enter to continue
            </motion.span>

          </div>

          {/* Floating hearts decoration */}
          <motion.div
            className="absolute bottom-6 right-6 flex items-center gap-1.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            style={{ color: "#a1a1aa", zIndex: 3 }}
          >
            <Heart style={{ width: 13, height: 13, color: "#f6d365", fill: "#f6d365" }} />
            <span className="text-xs font-medium">Made with passion</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
