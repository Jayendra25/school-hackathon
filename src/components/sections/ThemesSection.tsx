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
    <section id="themes" className="section-wrapper bg-black">
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
            Tracks &amp; Categories
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-white tracking-[-0.03em] leading-tight"
          >
            Choose Your Track.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[18px] text-[#A1A1AA] max-w-2xl mt-4 leading-relaxed"
          >
            Six curated domains designed to test your problem-solving capabilities, technical depth, and vision.
          </motion.p>
        </div>

        {/* 3x2 Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme, index) => {
            const Icon = theme.icon;
            return (
              <motion.div
                key={theme.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="card-glass p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-zinc-900/90 border border-white/10 flex items-center justify-center text-[#8B5CF6] mb-6 group-hover:bg-[#8B5CF6] group-hover:text-white group-hover:border-[#8B5CF6] transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-[28px] font-bold text-white tracking-tight mb-3">
                    {theme.title}
                  </h3>
                  <p className="text-[18px] text-[#A1A1AA] leading-relaxed line-clamp-2">
                    {theme.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
