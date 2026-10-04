"use client";

import { motion } from "framer-motion";
import { MapPin, Building2, Navigation, ExternalLink } from "lucide-react";

const MAPS_URL = "https://maps.google.com/?q=Birla+Institute+of+Applied+Sciences+Bhimtal+Uttarakhand";

const details = [
  {
    icon: Building2,
    label: "Venue",
    value: "Computer Labs, Birla Institute of Applied Sciences",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Birla Institute of Applied Sciences, Bhimtal, Nainital, Uttarakhand — 263136",
  },
  {
    icon: Navigation,
    label: "City",
    value: "Bhimtal, Uttarakhand",
  },
];

export default function VenueSection() {
  return (
    <section id="venue" className="section-wrapper">
      <div className="app-container">

        {/* Header */}
        <div className="mb-12">
          <motion.div
            className="badge-pill mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            Venue
          </motion.div>
          <motion.h2
            className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold tracking-[-0.02em] leading-[1.1]"
            style={{ color: "var(--text)" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06, ease: "easeOut" }}
          >
            Where It Happens.
          </motion.h2>
          <motion.p
            className="text-base sm:text-[17px] max-w-xl mt-3"
            style={{ color: "var(--text-muted)", lineHeight: "1.7" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
          >
            The final showcase takes place on campus — teams present their projects live to mentors and judges.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

          {/* Left: Address details */}
          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            {details.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-start gap-4 p-5 rounded-xl"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: "rgba(246,211,101,0.10)",
                      border: "1px solid rgba(246,211,101,0.35)",
                      color: "#f6d365",
                    }}
                  >
                    <Icon style={{ width: 15, height: 15 }} />
                  </div>
                  <div>
                    <p
                      className="text-[10px] font-semibold uppercase tracking-widest mb-1"
                      style={{ color: "#f6d365" }}
                    >
                      {item.label}
                    </p>
                    <p className="text-sm font-medium leading-relaxed" style={{ color: "var(--text)" }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Map CTA */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-85 hover:-translate-y-0.5"
              style={{
                background: "rgba(246,211,101,0.10)",
                border: "1px solid rgba(246,211,101,0.4)",
                color: "#f6d365",
                boxShadow: "0 0 18px rgba(246,211,101,0.12)",
              }}
            >
              <ExternalLink style={{ width: 14, height: 14 }} />
              Open in Google Maps
            </a>
          </motion.div>

          {/* Right: Embedded map iframe */}
          <motion.div
            className="rounded-xl overflow-hidden"
            style={{
              border: "1px solid rgba(246,211,101,0.3)",
              boxShadow: "0 0 28px rgba(246,211,101,0.08)",
              height: 320,
            }}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
          >
            <iframe
              title="Birla Institute of Applied Sciences, Bhimtal"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Birla+Institute+of+Applied+Sciences+Bhimtal+Uttarakhand&output=embed&z=15"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
