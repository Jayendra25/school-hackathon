"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleComplete = useCallback(onComplete, [onComplete]);

  useEffect(() => {
    const duration = 1400; // progress bar fills in 1.4s
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const raw = Math.min(elapsed / duration, 1);
      // ease-in-out cubic
      const eased = raw < 0.5 ? 4 * raw * raw * raw : 1 - Math.pow(-2 * raw + 2, 3) / 2;
      const p = Math.round(eased * 100);
      setProgress(p);

      if (p < 100) {
        requestAnimationFrame(tick);
      } else {
        // Progress bar is full — wait a beat, then fade out
        setTimeout(() => {
          setVisible(false);
          // Give fade-out animation time to finish before unmounting
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
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative z-10 flex flex-col items-center">
            {/* Logos */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 mb-6"
            >
              <div
                className="w-10 h-10 rounded-full overflow-hidden bg-white flex-shrink-0"
                style={{ border: "1px solid rgba(255,255,255,0.2)" }}
              >
                <img src="/birla-logo.png" alt="BIAS" width={40} height={40} className="object-contain w-full h-full" />
              </div>
              <span className="text-sm font-bold" style={{ color: "rgba(255,255,255,0.4)" }}>×</span>
              <div
                className="w-10 h-10 rounded-full overflow-hidden bg-white flex-shrink-0"
                style={{ border: "1px solid rgba(255,255,255,0.2)" }}
              >
                <img src="/codingblocksindia_logo.jpeg" alt="Coding Blocks" width={40} height={40} className="object-contain w-full h-full" />
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-black tracking-tight text-white mb-8"
              style={{ letterSpacing: "-0.03em" }}
            >
              Tech<span className="text-gradient-royal">Spark</span>{" "}
              <span className="text-gradient-gold font-mono text-lg">2026</span>
            </motion.h1>

            {/* Progress Bar */}
            <div className="w-48 h-[2px] bg-zinc-900 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#8B5CF6] rounded-full transition-all duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Percentage */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-3 text-xs font-mono tabular-nums"
              style={{ color: "rgba(255,255,255,0.25)" }}
            >
              {progress}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
