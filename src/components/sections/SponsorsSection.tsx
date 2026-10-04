"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="section-wrapper">
      <div className="app-container text-center">

        {/* Section Header */}
        <div className="mb-14 max-w-2xl mx-auto">
          <motion.div
            className="badge-pill mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            Organizer & Partner
          </motion.div>
          <motion.h2
            className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold tracking-[-0.02em] leading-[1.1]"
            style={{ color: "var(--text)" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06, ease: "easeOut" }}
          >
            Powered By.
          </motion.h2>
          <motion.p
            className="text-base sm:text-[17px] mt-3"
            style={{ color: "var(--text-muted)", lineHeight: "1.7" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
          >
            TechSpark is a collaboration between academia and industry — bringing structure, mentorship and excitement to school-level builders.
          </motion.p>
        </div>

        {/* Collab layout */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >

          {/* Birla */}
          <div
            className="card-glass flex flex-col items-center gap-4 p-8 flex-1 w-full"
            style={{
              borderColor: "rgba(246,211,101,0.35)",
              boxShadow: "0 0 28px rgba(246,211,101,0.12), inset 0 1px 0 rgba(246,211,101,0.08)",
            }}
          >
            <div
              className="w-20 h-20 rounded-full overflow-hidden bg-white"
              style={{ border: "2px solid var(--border-strong)" }}
            >
              <Image
                src="/birla-logo.png"
                alt="Birla Institute of Applied Sciences"
                width={80} height={80}
                className="object-contain w-full h-full"
              />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: "#f6d365" }}>
                Host Institution
              </p>
              <h3 className="text-base font-bold leading-snug" style={{ color: "var(--text)" }}>
                Birla Institute of Applied Sciences
              </h3>
            </div>
          </div>

          {/* X Collab badge */}
          <motion.div
            className="flex-shrink-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          >
            <div
              className="w-11 h-11 rounded-full flex items-center justify-center text-xl font-black"
              style={{
                background: "rgba(246,211,101,0.12)",
                border: "1px solid rgba(246,211,101,0.4)",
                color: "#f6d365",
                boxShadow: "0 0 20px rgba(246,211,101,0.55), 0 0 7px rgba(246,211,101,0.35)",
              }}
            >
              ×
            </div>
          </motion.div>

          {/* Coding Blocks */}
          <div
            className="card-glass flex flex-col items-center gap-4 p-8 flex-1 w-full"
            style={{
              borderColor: "rgba(246,211,101,0.35)",
              boxShadow: "0 0 28px rgba(246,211,101,0.12), inset 0 1px 0 rgba(246,211,101,0.08)",
            }}
          >
            <div
              className="w-20 h-20 rounded-full overflow-hidden bg-white"
              style={{ border: "2px solid var(--border-accent)" }}
            >
              <Image
                src="/codingblocksindia_logo.jpeg"
                alt="Coding Blocks"
                width={80} height={80}
                className="object-contain w-full h-full"
              />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest mb-1" style={{ color: "#f6d365" }}>
                Powered By
              </p>
              <h3 className="text-base font-bold" style={{ color: "var(--text)" }}>
                Coding Blocks
              </h3>
              <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                EdTech & Mentorship Partner
              </p>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
