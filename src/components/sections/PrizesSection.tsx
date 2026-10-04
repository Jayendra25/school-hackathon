"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Gift, ShieldCheck, ArrowRight } from "lucide-react";

const REGISTER_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeesu7fm6jiaN94gQX_J79xhD1qCbG2wyG83CsZdKjvsi4EWQ/viewform?usp=publish-editor";

const rewards = [
  { icon: Award,      title: "₹25,000 Cash Pool",      desc: "Cash prize distributed among top innovative teams." },
  { icon: ShieldCheck, title: "Official Certificates",  desc: "Verified merit and participation credentials from BIAS." },
  { icon: Gift,       title: "Coding Blocks Swag",      desc: "Exclusive t-shirts, backpacks, stickers & merchandise." },
  { icon: Trophy,     title: "Mentorship & Perks",      desc: "Discount vouchers and direct guidance from industry pros." },
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
            Prize Pool
          </motion.div>
          <motion.h2
            className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold tracking-[-0.02em] leading-[1.1]"
            style={{ color: "var(--text)" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06, ease: "easeOut" }}
          >
            Recognizing Excellence.
          </motion.h2>
          <motion.p
            className="text-base sm:text-[17px] mt-3"
            style={{ color: "var(--text-muted)", lineHeight: "1.7" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
          >
            Compete for cash rewards, premium goodies, and certificates backed by Coding Blocks & Birla Institute.
          </motion.p>
        </div>

        {/* Prize card */}
        <motion.div
          className="card-glass max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Card header */}
          <div
            className="p-8 sm:p-10 text-center"
            style={{ borderBottom: "1px solid var(--border)" }}
          >
            <div className="icon-box mx-auto mb-5" style={{ width: 52, height: 52, borderRadius: 12 }}>
              <Trophy style={{ width: 22, height: 22 }} />
            </div>
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--accent)" }}
            >
              Grand Winner & Excellence Award
            </p>
            <div
              className="text-[56px] sm:text-[72px] font-bold tracking-tight leading-none mb-3"
              style={{ color: "var(--text)" }}
            >
              ₹25,000
            </div>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Total prize bounty along with certificates, goodies, and swag kits.
            </p>
          </div>

          {/* Rewards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {rewards.map((reward, i) => {
              const Icon = reward.icon;
              const isLastRow = i >= 2;
              const isOdd = i % 2 === 1;
              return (
                <div
                  key={reward.title}
                  className="p-6 flex items-start gap-4"
                  style={{
                    borderTop: "1px solid var(--border)",
                    borderLeft: isOdd ? "1px solid var(--border)" : undefined,
                  }}
                >
                  <div className="icon-box flex-shrink-0 mt-0.5" style={{ width: 36, height: 36, borderRadius: 8 }}>
                    <Icon style={{ width: 15, height: 15 }} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold mb-0.5" style={{ color: "var(--text)" }}>
                      {reward.title}
                    </div>
                    <div className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {reward.desc}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA footer */}
          <div
            className="p-6 sm:p-8 text-center"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Claim Your Spot
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
