"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail } from "lucide-react";

const contacts = [
  {
    name: "Aditya Suyal",
    role: "Event Coordinator",
    phone: "7895310506",
    initial: "A",
    color: "var(--accent)",
    colorDim: "var(--accent-dim)",
    colorBorder: "var(--border-accent)",
  },
  {
    name: "Bhumika Mehra",
    role: "Event Coordinator",
    phone: "7017398809",
    initial: "B",
    color: "#f6d365",
    colorDim: "rgba(246,211,101,0.10)",
    colorBorder: "rgba(246,211,101,0.35)",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-wrapper">
      <div className="app-container">

        {/* Header */}
        <div className="mb-12 text-center max-w-xl mx-auto">
          <motion.div
            className="badge-pill mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            Contact & Queries
          </motion.div>
          <motion.h2
            className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold tracking-[-0.02em] leading-[1.1]"
            style={{ color: "var(--text)" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06, ease: "easeOut" }}
          >
            We&apos;re Here to Help.
          </motion.h2>
          <motion.p
            className="text-base sm:text-[17px] mt-3"
            style={{ color: "var(--text-muted)", lineHeight: "1.7" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
          >
            Have a question about registration, tracks or the event? Reach out to our coordinators directly via call or WhatsApp.
          </motion.p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {contacts.map((person, index) => (
            <motion.div
              key={person.name}
              className="card-glass p-7 flex flex-col gap-5"
              style={{
                borderColor: person.colorBorder,
                boxShadow: `0 0 28px ${person.colorDim}, inset 0 1px 0 ${person.colorDim}`,
              }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
            >
              {/* Avatar + Name */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-black flex-shrink-0"
                  style={{
                    background: person.colorDim,
                    border: `1px solid ${person.colorBorder}`,
                    color: person.color,
                  }}
                >
                  {person.initial}
                </div>
                <div>
                  <h3 className="text-base font-bold" style={{ color: "var(--text)" }}>
                    {person.name}
                  </h3>
                </div>
              </div>

              {/* Phone number display */}
              <div
                className="flex items-center gap-2.5 px-4 py-3 rounded-xl"
                style={{ background: "var(--bg-raised)", border: "1px solid var(--border)" }}
              >
                <Phone style={{ width: 14, height: 14, color: "var(--text-muted)", flexShrink: 0 }} />
                <span className="text-sm font-mono font-semibold tracking-wide" style={{ color: "var(--text)" }}>
                  +91 {person.phone}
                </span>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3">
                <a
                  href={`tel:+91${person.phone}`}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-opacity duration-150 hover:opacity-80"
                  style={{
                    background: person.colorDim,
                    border: `1px solid ${person.colorBorder}`,
                    color: person.color,
                  }}
                >
                  <Phone style={{ width: 14, height: 14 }} />
                  Call
                </a>
                <a
                  href={`https://wa.me/91${person.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-opacity duration-150 hover:opacity-80"
                  style={{
                    background: person.colorDim,
                    border: `1px solid ${person.colorBorder}`,
                    color: person.color,
                  }}
                >
                  <MessageCircle style={{ width: 14, height: 14 }} />
                  WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          className="text-xs text-center mt-8"
          style={{ color: "var(--text-muted)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Support hours: 10:00 AM – 6:00 PM &nbsp;·&nbsp; WhatsApp and Call available on the same numbers
        </motion.p>

      </div>
    </section>
  );
}
