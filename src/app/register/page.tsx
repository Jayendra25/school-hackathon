"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Zap, Clock, Users, Layers, CheckCircle } from "lucide-react";
import Link from "next/link";

const FORM_URL = "https://forms.gle/wd3SGLHMUVhqeUDG6";

const steps = [
  { icon: Users,        text: "Form your team (1–5 school students)" },
  { icon: Layers,       text: "Pick your track — Web, Android or AI" },
  { icon: CheckCircle,  text: "Fill the registration form" },
  { icon: Clock,        text: "Build your prototype in 7 days" },
];

const checklist = [
  "Team name & track selection",
  "Details of all team members (name, class, school)",
  "Your initial problem statement / idea (2–3 lines)",
  "Teacher coordinator name, designation & contact number",
  "Team leader's WhatsApp number",
];

export default function RegisterPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}
    >
      {/* Top bar */}
      <div
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3"
        style={{
          background: "var(--nav-bg-scrolled)",
          borderBottom: "1px solid var(--border)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
          style={{ color: "var(--text-muted)" }}
        >
          <ArrowLeft style={{ width: 15, height: 15 }} />
          Back to site
        </Link>

        <span className="text-sm font-black tracking-tight" style={{ color: "var(--text)" }}>
          Tech<span className="text-gradient-royal">Spark</span>
          <span className="text-gradient-gold font-mono text-xs ml-1">2026</span>
        </span>

        <div
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
          style={{
            background: "var(--accent-dim)",
            border: "1px solid var(--border-accent)",
            color: "var(--accent)",
          }}
        >
          <Zap style={{ width: 10, height: 10 }} />
          Registration Open
        </div>
      </div>

      {/* Page content */}
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-xl mx-auto">

          {/* Heading */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <h1
              className="text-[38px] sm:text-[52px] font-black tracking-[-0.025em] leading-[1.05] mb-3"
              style={{ color: "var(--text)" }}
            >
              Register for{" "}
              <span className="text-gradient-royal">TechSpark</span>
            </h1>
            <p className="text-sm sm:text-base" style={{ color: "var(--text-muted)", lineHeight: "1.7" }}>
              One registration per team. The team leader fills the form on behalf of everyone.
            </p>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            className="grid grid-cols-3 gap-3 mb-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08, ease: "easeOut" }}
          >
            {[
              { val: "Free",   label: "No entry fee" },
              { val: "1–5",    label: "Team members" },
              { val: "7 Days", label: "Build time" },
            ].map((s) => (
              <div
                key={s.val}
                className="text-center py-3 rounded-xl"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <div className="text-base font-bold" style={{ color: "var(--text)" }}>{s.val}</div>
                <div className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* What you'll need */}
          <motion.div
            className="rounded-xl p-5 mb-5"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12, ease: "easeOut" }}
          >
            <p
              className="text-[10px] font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#f6d365" }}
            >
              Keep ready before you fill the form
            </p>
            <div className="flex flex-col gap-2">
              {checklist.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(246,211,101,0.12)", border: "1px solid rgba(246,211,101,0.35)" }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#f6d365" }} />
                  </div>
                  <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Steps */}
          <motion.div
            className="rounded-xl p-5 mb-8"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.16, ease: "easeOut" }}
          >
            <p
              className="text-[10px] font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--accent)" }}
            >
              How it works
            </p>
            <div className="flex flex-col gap-3">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--accent-dim)", border: "1px solid var(--border-accent)", color: "var(--accent)" }}
                    >
                      <Icon style={{ width: 13, height: 13 }} />
                    </div>
                    <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{step.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          >
            {/* Google Form embedded */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                border: "1px solid var(--border)",
                boxShadow: "0 0 32px rgba(139,92,246,0.08)",
              }}
            >
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSc4YywAlq2VNns3Mjym_BQZrTFAwE9U4nNCN0SENk30ZkJdfg/viewform?embedded=true"
                title="TechSpark 2026 Registration Form"
                width="100%"
                height="1100"
                style={{ border: "none", display: "block" }}
                loading="lazy"
              >
                Loading form…
              </iframe>
            </div>
          </motion.div>

          {/* Help */}
          <motion.p
            className="text-xs text-center mt-8"
            style={{ color: "var(--text-muted)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.28 }}
          >
            Need help?{" "}
            <a href="https://wa.me/917895310506" target="_blank" rel="noopener noreferrer"
              className="underline underline-offset-2 hover:opacity-80" style={{ color: "var(--text-secondary)" }}>
              WhatsApp Aditya
            </a>
            {" "}·{" "}
            <a href="https://wa.me/917017398809" target="_blank" rel="noopener noreferrer"
              className="underline underline-offset-2 hover:opacity-80" style={{ color: "var(--text-secondary)" }}>
              WhatsApp Bhumika
            </a>
          </motion.p>

        </div>
      </div>
    </div>
  );
}
