"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who can participate in TechSpark?",
    answer:
      "TechSpark is open to school students. Each team must also have one school teacher as a coordinator. Teams of 1 to 5 students are eligible to participate.",
  },
  {
    question: "What is the team size?",
    answer:
      "You can participate solo or in a team of up to 5 students. Every team must bring their school-teacher coordinator on the final day.",
  },
  {
    question: "Is there a registration fee?",
    answer:
      "No, participation is completely free. There are no hidden fees for registration or submission.",
  },
  {
    question: "What are the 3 tracks?",
    answer:
      "TechSpark has three tracks: Web Development (HTML, CSS, JavaScript or frameworks like MERN/PHP), Android App Development (MIT App Inventor, Kotlin, Java or similar), and AI & Innovation (chatbots, smart assistants, automation or any meaningful AI solution).",
  },
  {
    question: "Can we use AI tools to build our project?",
    answer:
      "Yes — AI tools are allowed for brainstorming, learning, debugging and development. However, during evaluation you must be able to explain your idea, code/logic, prompts and implementation. Judges may ask questions or request a small live change.",
  },
  {
    question: "What do we need to submit?",
    answer:
      "A working prototype, source/project files and a short explanation of your problem and solution. On the final day, bring your laptop/tablet/phone to demonstrate the project, a backup of your files, your school ID and your teacher coordinator.",
  },
  {
    question: "How is the judging done?",
    answer:
      "Judges evaluate teams on: Idea & Creativity, Problem Relevance, Working Prototype, Technical Understanding, Live Modification (a small change requested on the spot) and Presentation. The focus is on useful ideas and genuine understanding — not just complexity.",
  },
  {
    question: "What do winners receive?",
    answer:
      "There are overall awards (Hackathon Champion, 1st & 2nd Runner-Up), track awards (Best Web Project, Best Android App, Best AI Innovation), and special awards (Most Innovative Idea, Best Social Impact, Best Presentation). All finalists receive Participation Certificates.",
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
            Everything you need to know before registering for TechSpark 2026.
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
                transition={{ duration: 0.35, delay: index * 0.04, ease: "easeOut" }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
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
