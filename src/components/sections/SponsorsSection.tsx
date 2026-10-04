"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, Sparkles } from "lucide-react";

const orgs = [
  {
    icon: GraduationCap,
    label: "Host Institution",
    name: "Birla Institute",
    sub: "of Applied Sciences, Bhimtal",
  },
  {
    icon: Code2,
    label: "Powered By",
    name: "Coding Blocks",
    sub: "EdTech & Mentorship Partner",
    featured: true,
  },
  {
    icon: Sparkles,
    label: "Student Body",
    name: "BIAS Tech Club",
    sub: "Student Innovation Cell",
  },
];

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="section-wrapper">
      <div className="app-container text-center">

        {/* Section Header */}
        <div className="mb-12 max-w-2xl mx-auto">
          <motion.div
            className="badge-pill mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            Organizers & Partners
          </motion.div>
          <motion.h2
            className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold tracking-[-0.02em] leading-[1.1]"
            style={{ color: "var(--text)" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06, ease: "easeOut" }}
          >
            Backed by Leaders.
          </motion.h2>
          <motion.p
            className="text-base sm:text-[17px] mt-3"
            style={{ color: "var(--text-muted)", lineHeight: "1.7" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
          >
            Combining academic heritage with industry-leading technical mentorship.
          </motion.p>
        </div>

        {/* Org Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {orgs.map((org, index) => {
            const Icon = org.icon;
            return (
              <motion.div
                key={org.name}
                className="card-glass p-6 flex flex-col items-center text-center"
                style={org.featured ? { borderColor: "var(--border-accent)" } : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07, ease: "easeOut" }}
              >
                <div
                  className="icon-box mb-4"
                  style={{
                    width: 44,
                    height: 44,
                    background: org.featured ? "var(--accent-dim)" : undefined,
                    borderColor: org.featured ? "var(--border-accent)" : undefined,
                  }}
                >
                  <Icon style={{ width: 20, height: 20 }} />
                </div>
                <p
                  className="text-[10px] font-semibold uppercase tracking-widest mb-1"
                  style={{ color: org.featured ? "var(--accent)" : "var(--text-muted)" }}
                >
                  {org.label}
                </p>
                <h3
                  className="text-base font-semibold"
                  style={{ color: "var(--text)" }}
                >
                  {org.name}
                </h3>
                <p
                  className="text-xs mt-0.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  {org.sub}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
