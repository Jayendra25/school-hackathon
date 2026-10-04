"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Smartphone, Bot, Lightbulb, Gamepad2 } from "lucide-react";

const themes = [
  {
    icon: Cpu,
    title: "Artificial Intelligence",
    description: "Build intelligent systems, LLM agents, computer vision models, and predictive tools.",
    color: "#8B5CF6",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Create sleek, responsive web applications and decentralized platforms with modern stacks.",
    color: "#06b6d4",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Craft fluid, user-first mobile experiences for iOS and Android that tackle practical problems.",
    color: "#10b981",
  },
  {
    icon: Bot,
    title: "Robotics & IoT",
    description: "Combine hardware sensors and microcontrollers to bridge physical devices with cloud software.",
    color: "#f59e0b",
  },
  {
    icon: Lightbulb,
    title: "Open Innovation",
    description: "Solve any meaningful challenge with unrestricted creativity, original architecture, and passion.",
    color: "#ec4899",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    description: "Design immersive games, interactive mechanics, and engaging simulations across modern engines.",
    color: "#f97316",
  },
];

export default function ThemesSection() {
  return (
    <section id="themes" className="section-wrapper">
      <div className="app-container">

        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="badge-pill mb-4"
          >
            Tracks &amp; Categories
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-[64px] font-bold tracking-[-0.03em] leading-tight"
            style={{ color: "var(--text)" }}
          >
            Choose Your Track.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[18px] max-w-2xl mt-4 leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            Six curated domains designed to test your problem-solving capabilities, technical depth, and vision.
          </motion.p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme, index) => {
            const Icon = theme.icon;
            return (
              <motion.div
                key={theme.title}
                initial={{ opacity: 0, y: 30, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="card-glass p-8 flex flex-col group cursor-default relative overflow-hidden"
                style={{ perspective: "800px" }}
              >
                {/* Color splash on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 rounded-3xl"
                  style={{ backgroundColor: theme.color }}
                />

                <motion.div
                  className="w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 transition-all duration-300"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    borderColor: "var(--border)",
                    color: theme.color,
                  }}
                  whileHover={{ scale: 1.15, rotate: -8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.div>

                <h3 className="text-[22px] font-bold tracking-tight mb-3" style={{ color: "var(--text)" }}>
                  {theme.title}
                </h3>
                <p className="text-[16px] leading-relaxed line-clamp-3" style={{ color: "var(--text-muted)" }}>
                  {theme.description}
                </p>

                {/* Bottom accent */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px] rounded-b-3xl"
                  style={{ backgroundColor: theme.color }}
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
