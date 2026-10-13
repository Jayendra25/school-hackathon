"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/** Lightweight light-mode gradient orbs, self-contained for the loading screen */
function LoadingGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const orbs = [
      {
        baseX: 0.15, baseY: -0.05,
        ampX: 0.08,  ampY: 0.06,
        freqX: 0.00016, freqY: 0.00020,
        phaseX: 0, phaseY: Math.PI / 4,
        radius: 0.65,
        color: "rgba(167, 139, 250,",
        alpha: 0.80,
      },
      {
        baseX: 0.85, baseY: -0.02,
        ampX: 0.07,  ampY: 0.05,
        freqX: 0.00013, freqY: 0.00018,
        phaseX: Math.PI / 2, phaseY: Math.PI / 6,
        radius: 0.55,
        color: "rgba(110, 231, 183,",
        alpha: 0.75,
      },
      {
        baseX: 0.50, baseY: 0.04,
        ampX: 0.10,  ampY: 0.04,
        freqX: 0.00019, freqY: 0.00012,
        phaseX: Math.PI, phaseY: Math.PI * 0.6,
        radius: 0.42,
        color: "rgba(253, 211, 140,",
        alpha: 0.75,
      },
    ];

    const draw = (timestamp: number) => {
      const W = canvas.width;
      const H = canvas.height;
      const minDim = Math.min(W, H);
      ctx.clearRect(0, 0, W, H);

      for (const orb of orbs) {
        const cx = (orb.baseX + orb.ampX * Math.sin(timestamp * orb.freqX + orb.phaseX)) * W;
        const cy = (orb.baseY + orb.ampY * Math.sin(timestamp * orb.freqY + orb.phaseY)) * H;
        const r  = orb.radius * minDim;

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        grad.addColorStop(0,    `${orb.color}${orb.alpha})`);
        grad.addColorStop(0.45, `${orb.color}${(orb.alpha * 0.35).toFixed(3)})`);
        grad.addColorStop(1,    `${orb.color}0)`);

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
      }}
    />
  );
}

export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleComplete = useCallback(onComplete, [onComplete]);

  useEffect(() => {
    const duration = 1400;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const raw = Math.min(elapsed / duration, 1);
      const eased = raw < 0.5 ? 4 * raw * raw * raw : 1 - Math.pow(-2 * raw + 2, 3) / 2;
      const p = Math.round(eased * 100);
      setProgress(p);

      if (p < 100) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setVisible(false);
          setTimeout(handleComplete, 500);
        }, 300);
      }
    };

    requestAnimationFrame(tick);
  }, [handleComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#fafafa" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Animated gradient orbs */}
          <LoadingGradient />

          {/* Content sits above the canvas */}
          <div className="relative z-10 flex flex-col items-center">

            {/* TechSpark wordmark + spark icon */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 mb-2"
            >
              <h1
                className="font-black tracking-tight"
                style={{
                  fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
                  letterSpacing: "-0.04em",
                  color: "#09090b",
                  lineHeight: 1,
                }}
              >
                Tech<span className="text-gradient-royal">Spark</span>
              </h1>

              {/* Spark SVG icon */}
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  width: "clamp(2rem, 5vw, 3.5rem)",
                  height: "clamp(2rem, 5vw, 3.5rem)",
                  flexShrink: 0,
                  marginBottom: "0.1em",
                }}
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="sparkGradLoading" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"   stopColor="#8b5cf6" />
                    <stop offset="40%"  stopColor="#c084fc" />
                    <stop offset="100%" stopColor="#f6d365" />
                  </linearGradient>
                </defs>
                <path
                  d="M20 2 L22.5 17.5 L38 20 L22.5 22.5 L20 38 L17.5 22.5 L2 20 L17.5 17.5 Z"
                  fill="url(#sparkGradLoading)"
                />
                <path
                  d="M32 4 L33 9 L38 10 L33 11 L32 16 L31 11 L26 10 L31 9 Z"
                  fill="url(#sparkGradLoading)"
                  opacity="0.85"
                />
                <path
                  d="M8 26 L9 30 L13 31 L9 32 L8 36 L7 32 L3 31 L7 30 Z"
                  fill="url(#sparkGradLoading)"
                  opacity="0.7"
                />
              </svg>
            </motion.div>

            {/* 2026 badge */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="text-gradient-gold font-mono font-bold mb-8"
              style={{ fontSize: "clamp(0.9rem, 2vw, 1.2rem)", letterSpacing: "0.08em" }}
            >
              2026
            </motion.span>

            {/* Gradient Progress Bar */}
            <div
              className="rounded-full overflow-hidden"
              style={{ width: 220, height: 3, background: "#e4e4e7" }}
            >
              <div
                className="h-full rounded-full"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #8b5cf6 0%, #c084fc 50%, #f6d365 100%)",
                  boxShadow: "0 0 8px rgba(139,92,246,0.6)",
                  transition: "width 0.15s linear",
                }}
              />
            </div>

            {/* Percentage */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-3 text-xs font-mono tabular-nums"
              style={{ color: "#a1a1aa" }}
            >
              {progress}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
