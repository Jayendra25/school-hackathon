"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who can participate?",
    answer:
      "Students currently enrolled in schools (Classes 9–12) or colleges/universities (Undergraduate/Postgraduate) are eligible to participate. Both beginner and experienced coders are welcome!",
  },
  {
    question: "Team size?",
    answer:
      "You can participate individually or in teams of up to 4 members. Inter-college and inter-school teams are fully allowed and encouraged.",
  },
  {
    question: "Registration fee?",
    answer:
      "Registration is 100% FREE. There are no hidden fees for submitting ideas or participating in the 24-hour hackathon.",
  },
  {
    question: "Requirements?",
    answer:
      "A valid student ID card, a laptop with your development environment set up, and enthusiasm to build! High-speed WiFi and refreshments will be provided.",
  },
  {
    question: "Certificates?",
    answer:
      "Yes. All registered participants who submit a valid project will receive official verified certificates of participation from Birla Institute of Applied Sciences and Coding Blocks.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-wrapper">
      <div className="app-container">

        {/* Section Header */}
        <div className="mb-12">
          <motion.div
            className="badge-pill mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            FAQ
          </motion.div>
          <motion.h2
            className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold tracking-[-0.02em] leading-[1.1]"
            style={{ color: "var(--text)" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06, ease: "easeOut" }}
          >
            Frequently Asked.
          </motion.h2>
          <motion.p
            className="text-base sm:text-[17px] max-w-xl mt-3"
            style={{ color: "var(--text-muted)", lineHeight: "1.7" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
          >
            Everything you need to know before registering for Hackathon 2026.
          </motion.p>
        </div>

        {/* Accordion */}
        <div className="max-w-2xl space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                className="rounded-xl overflow-hidden"
                style={{ border: "1px solid var(--border)" }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 transition-colors duration-150"
                  style={{
                    background: isOpen ? "var(--bg-raised)" : "var(--surface)",
                    color: "var(--text)",
                  }}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className="flex-shrink-0 transition-transform duration-200"
                    style={{
                      width: 16,
                      height: 16,
                      color: "var(--text-muted)",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div
                        className="px-5 py-4 text-sm leading-relaxed"
                        style={{
                          color: "var(--text-muted)",
                          borderTop: "1px solid var(--border)",
                          background: "var(--surface)",
                        }}
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
