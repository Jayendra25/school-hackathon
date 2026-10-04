"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Smartphone, Bot, Lightbulb, Gamepad2 } from "lucide-react";

const themes = [
  {
    icon: Cpu,
    title: "Artificial Intelligence",
    description: "Build intelligent systems, LLM agents, computer vision models, and predictive tools.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Create sleek, responsive web applications and decentralized platforms with modern stacks.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Craft fluid, user-first mobile experiences for iOS and Android that tackle practical problems.",
  },
  {
    icon: Bot,
    title: "Robotics & IoT",
    description: "Combine hardware sensors and microcontrollers to bridge physical devices with cloud software.",
  },
  {
    icon: Lightbulb,
    title: "Open Innovation",
    description: "Solve any meaningful challenge with unrestricted creativity, original architecture, and passion.",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    description: "Design immersive games, interactive mechanics, and engaging simulations across modern engines.",
  },
];

export default function ThemesSection() {
  return (
    <section id="themes" className="section-wrapper">
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
            Tracks & Categories
          </motion.div>
          <motion.h2
            className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold tracking-[-0.02em] leading-[1.1]"
            style={{ color: "var(--text)" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06, ease: "easeOut" }}
          >
            Choose Your Track.
          </motion.h2>
          <motion.p
            className="text-base sm:text-[17px] max-w-2xl mt-3"
            style={{ color: "var(--text-muted)", lineHeight: "1.7" }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
          >
            Six curated domains designed to test your problem-solving capabilities, technical depth, and vision.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {themes.map((theme, index) => {
            const Icon = theme.icon;
            return (
              <motion.div
                key={theme.title}
                className="card-glass p-6 group"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
              >
                <div className="icon-box mb-4 group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] group-hover:[color:white] transition-all duration-200">
                  <Icon style={{ width: 18, height: 18 }} />
                </div>
                <h3
                  className="text-base font-semibold mb-2 leading-snug"
                  style={{ color: "var(--text)" }}
                >
                  {theme.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {theme.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
