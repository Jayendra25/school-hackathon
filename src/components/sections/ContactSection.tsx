"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const studentContacts = [
  {
    name: "Aditya Suyal",
    phone: "7895310506",
    initial: "A",
    color: "var(--accent)",
    colorDim: "var(--accent-dim)",
    colorBorder: "var(--border-accent)",
    whatsapp: true,
  },
  {
    name: "Bhumika Mehra",
    phone: "7017398809",
    initial: "B",
    color: "#f6d365",
    colorDim: "rgba(246,211,101,0.10)",
    colorBorder: "rgba(246,211,101,0.35)",
    whatsapp: true,
  },
];

const facultyContacts = [
  {
    name: "Mr. Manish Bhatt",
    role: "Faculty Coordinator",
    phone: "9897501077",
    initial: "M",
    color: "#c084fc",
    colorDim: "rgba(192,132,252,0.10)",
    colorBorder: "rgba(192,132,252,0.35)",
    whatsapp: false,
  },
];

function ContactCard({
  person,
  index,
}: {
  person: (typeof studentContacts)[0] | (typeof facultyContacts)[0];
  index: number;
}) {
  return (
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
          {"role" in person && person.role && (
            <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
              {person.role}
            </p>
          )}
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
        {person.whatsapp && (
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
        )}
      </div>
    </motion.div>
  );
}

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

        {/* Student Support + Faculty Support — side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Student Support */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>
              Student Support
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {studentContacts.map((person, index) => (
                <ContactCard key={person.name} person={person} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Faculty Support */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>
              Faculty Support
            </p>
            <div className="grid grid-cols-1 gap-5">
              {facultyContacts.map((person, index) => (
                <ContactCard key={person.name} person={person} index={index} />
              ))}
            </div>
          </motion.div>

        </div>

        {/* Bottom note */}
        <motion.p
          className="text-xs text-center mt-4"
          style={{ color: "var(--text-muted)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Support hours: 10:00 AM – 10:00 PM &nbsp;·&nbsp; WhatsApp and Call available on the same numbers
        </motion.p>

      </div>
    </section>
  );
}
