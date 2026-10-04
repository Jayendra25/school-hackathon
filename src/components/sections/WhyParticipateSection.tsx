"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Users, Gift, BookOpen, Briefcase } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Official Certificates",
    desc: "Recognized certificates of merit and participation issued by BIAS and Coding Blocks.",
  },
  {
    icon: Users,
    title: "Networking & Community",
    desc: "Direct interactions with expert mentors, industry judges, and fellow student builders.",
  },
  {
    icon: Gift,
    title: "Coding Blocks Goodies",
    desc: "Exclusive hackathon merchandise, developer swag bags, and educational vouchers.",
  },
  {
    icon: BookOpen,
    title: "Intensive Learning",
    desc: "Accelerate your programming skills, learn project architecture, and work under deadlines.",
  },
  {
    icon: Briefcase,
    title: "Internship Opportunities",
    desc: "Top performers get fast-tracked evaluation for internship roles and mentorship programs.",
  },
];

const specs = [
  { label: "Format",      value: "24-hour continuous hackathon" },
  { label: "Eligibility", value: "School & College students" },
  { label: "Team size",   value: "1 to 4 members" },
  { label: "Entry fee",   value: "Free to register" },
  { label: "Prize pool",  value: "₹25,000 + swag & certificates" },
  { label: "Partner",     value: "Coding Blocks" },
];

export default function WhyParticipateSection() {
  return (
    <section id="why-participate" className="section-wrapper">
      <div className="app-container">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: Heading + Benefits */}
          <div className="lg:col-span-7">
            <motion.div
              className="badge-pill mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              Why Participate
            </motion.div>
            <motion.h2
              className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold tracking-[-0.02em] leading-[1.1] mb-4"
              style={{ color: "var(--text)" }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.06, ease: "easeOut" }}
            >
              Elevate Your Skills.
            </motion.h2>
            <motion.p
              className="text-base sm:text-[17px] mb-10"
              style={{ color: "var(--text-muted)", lineHeight: "1.7" }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
            >
              More than just a hackathon — an opportunity to build real products, gain industry visibility, and turn curiosity into impact.
            </motion.p>

            <div className="space-y-4">
              {benefits.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="flex items-start gap-3 group"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: 0.08 + index * 0.05, ease: "easeOut" }}
                  >
                    <div
                      className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                      style={{
                        background: "var(--accent-dim)",
                        border: "1px solid var(--border-accent)",
                        color: "var(--accent)",
                      }}
                    >
                      <Check style={{ width: 11, height: 11, strokeWidth: 2.5 }} />
                    </div>
                    <div>
                      <span className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                        {item.title}
                      </span>
                      <span className="text-sm ml-1.5" style={{ color: "var(--text-muted)" }}>
                        — {item.desc}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Clean event details panel */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <div
              className="rounded-xl overflow-hidden"
              style={{ border: "1px solid var(--border)" }}
            >
              {/* Panel header */}
              <div
                className="px-5 py-4"
                style={{
                  background: "var(--bg-raised)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                  Event at a Glance
                </p>
              </div>

              {/* Spec rows */}
              <div style={{ background: "var(--surface)" }}>
                {specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    className="flex items-center justify-between px-5 py-3.5"
                    style={{
                      borderTop: i === 0 ? "none" : "1px solid var(--border)",
                    }}
                  >
                    <span
                      className="text-sm"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {spec.label}
                    </span>
                    <span
                      className="text-sm font-medium text-right"
                      style={{ color: "var(--text)" }}
                    >
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer note */}
              <div
                className="px-5 py-3.5"
                style={{
                  background: "var(--bg-raised)",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  Birla Institute of Applied Sciences &bull; 2026 Edition
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
