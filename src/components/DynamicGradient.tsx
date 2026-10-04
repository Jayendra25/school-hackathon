"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

/**
 * DynamicGradient
 * Soft animated orbs — concentrated at the top of the page, fading downward.
 * Dark mode:  screen blend — glowing purple/gold on dark bg
 * Light mode: multiply blend — soft lavender/mint/peach on white bg
 * Orbs are small (not full-screen) so they feel like accent splashes, not a wash.
 */
export default function DynamicGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isLight = theme === "light";

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    /**
     * Orbs stay anchored toward the TOP of the viewport.
     * radius is expressed as a fraction of Math.min(W, H) so orbs
     * never grow to cover the full screen — they're accent blobs.
     *
     * Dark:  purple + gold + rose  — screen blend
     * Light: lavender + mint + peach — multiply blend
     */
    const darkOrbs = [
      {
        // Purple — top-left
        baseX: 0.18, baseY: -0.05,
        ampX: 0.08, ampY: 0.06,
        freqX: 0.00016, freqY: 0.00020,
        phaseX: 0, phaseY: Math.PI / 4,
        radius: 0.55,          // fraction of min(W,H)
        color: "rgba(139, 92, 246,",
        alpha: 0.55,
      },
      {
        // Gold — top-right
        baseX: 0.82, baseY: -0.02,
        ampX: 0.07, ampY: 0.05,
        freqX: 0.00013, freqY: 0.00018,
        phaseX: Math.PI / 2, phaseY: Math.PI / 6,
        radius: 0.45,
        color: "rgba(246, 211, 101,",
        alpha: 0.45,
      },
      {
        // Rose — top-center (smaller)
        baseX: 0.50, baseY: 0.05,
        ampX: 0.10, ampY: 0.04,
        freqX: 0.00019, freqY: 0.00012,
        phaseX: Math.PI, phaseY: Math.PI * 0.6,
        radius: 0.30,
        color: "rgba(253, 160, 133,",
        alpha: 0.35,
      },
    ];

    const lightOrbs = [
      {
        // Soft lavender — top-left
        baseX: 0.15, baseY: -0.05,
        ampX: 0.08, ampY: 0.06,
        freqX: 0.00016, freqY: 0.00020,
        phaseX: 0, phaseY: Math.PI / 4,
        radius: 0.65,
        color: "rgba(167, 139, 250,",  // violet-400
        alpha: 0.80,
      },
      {
        // Soft mint/teal — top-right
        baseX: 0.85, baseY: -0.02,
        ampX: 0.07, ampY: 0.05,
        freqX: 0.00013, freqY: 0.00018,
        phaseX: Math.PI / 2, phaseY: Math.PI / 6,
        radius: 0.55,
        color: "rgba(110, 231, 183,",  // emerald-300
        alpha: 0.75,
      },
      {
        // Soft peach/gold — top-center
        baseX: 0.50, baseY: 0.04,
        ampX: 0.10, ampY: 0.04,
        freqX: 0.00019, freqY: 0.00012,
        phaseX: Math.PI, phaseY: Math.PI * 0.6,
        radius: 0.42,
        color: "rgba(253, 211, 140,",  // amber-200
        alpha: 0.75,
      },
    ];

    const orbs = isLight ? lightOrbs : darkOrbs;

    let t = 0;

    const draw = (timestamp: number) => {
      if (!prefersReduced) t = timestamp;

      const W = canvas.width;
      const H = canvas.height;
      const minDim = Math.min(W, H);

      ctx.clearRect(0, 0, W, H);

      for (const orb of orbs) {
        const cx = (orb.baseX + orb.ampX * Math.sin(t * orb.freqX + orb.phaseX)) * W;
        const cy = (orb.baseY + orb.ampY * Math.sin(t * orb.freqY + orb.phaseY)) * H;
        const r  = orb.radius * minDim;  // stays proportional, never full-screen

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
  }, [theme]); // re-run when theme switches

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        // screen = adds light to dark bg; multiply = tints white bg
        mixBlendMode: theme === "light" ? "multiply" : "screen",
      }}
    />
  );
}
