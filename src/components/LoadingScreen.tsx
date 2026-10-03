"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "reveal">("loading");

  const handleComplete = useCallback(onComplete, [onComplete]);

  useEffect(() => {
    const duration = 1200; // Fast 1.2s loading animation
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const raw = Math.min(elapsed / duration, 1);
      const eased = raw < 0.5 ? 4 * raw * raw * raw : 1 - Math.pow(-2 * raw + 2, 3) / 2;
      const p = Math.round(eased * 100);

      setProgress(p);

      if (p >= 100) {
        setPhase("reveal");
        setTimeout(handleComplete, 400);
        return;
      }
      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [handleComplete]);

  if (phase === "reveal" && progress >= 100) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative z-10 flex flex-col items-center">
          {/* Logo Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-14 h-14 rounded-full bg-white text-black font-bold text-xl flex items-center justify-center mb-6 shadow-xl"
          >
            H
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold text-white tracking-tight mb-8"
          >
            HACKATHON <span className="text-[#8B5CF6]">2026</span>
          </motion.h1>

          {/* Minimal Progress Bar */}
          <div className="w-48 h-[2px] bg-zinc-900 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#8B5CF6] transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
