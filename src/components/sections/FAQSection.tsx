"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who can participate?",
    answer:
      "Students currently enrolled in schools (Classes 9-12) or colleges/universities (Undergraduate/Postgraduate) are eligible to participate. Both beginner and experienced coders are welcome!",
  },
  {
    question: "Team size?",
    answer:
      "You can participate individually or in teams of up to 4 members. Inter-college and inter-school teams are fully allowed and encouraged.",
  },
  {
    question: "Registration fee?",
    answer:
      "Registration is 100% FREE! There are no hidden fees for submitting ideas or participating in the 24-hour hackathon.",
  },
  {
    question: "Requirements?",
    answer:
      "A valid student ID card, a laptop with your development environment set up, and enthusiasm to build! High-speed WiFi and refreshments will be provided.",
  },
  {
    question: "Certificates?",
    answer:
      "Yes! All registered participants who submit a valid project will receive official verified certificates of participation from Birla Institute of Applied Sciences and Coding Blocks.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-wrapper">
      <div className="app-container">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="badge-pill mb-4"
          >
            Got Questions?
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-white tracking-[-0.03em] leading-tight"
          >
            Frequently Asked.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[18px] text-[#A1A1AA] max-w-2xl mt-4 leading-relaxed"
          >
            Everything you need to know before registering for Hackathon 2026.
          </motion.p>
        </div>

        {/* 5 Distinct Glass Accordion Cards */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`card-glass transition-all duration-300 ${
                  isOpen ? "border-[#8B5CF6]/40 shadow-lg shadow-[#8B5CF6]/5" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="text-xl sm:text-[22px] font-semibold text-white tracking-tight">
                    {faq.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-white flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#8B5CF6] text-white border-[#8B5CF6]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-7 pb-7 pt-1 border-t border-white/5 text-base sm:text-[18px] text-[#A1A1AA] leading-relaxed">
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
