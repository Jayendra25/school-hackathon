"use client";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

export default function FooterSection() {
  return (
    <footer className="py-20 bg-black border-t border-white/10 relative">
      <div className="app-container flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        
        {/* Left: Organization */}
        <div>
          <div className="text-xl font-bold text-white tracking-tight">
            Birla Institute of Applied Sciences
          </div>
          <p className="text-sm text-[#A1A1AA] mt-1">
            Organized in collaboration with <span className="text-white font-semibold">Coding Blocks</span>
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-[#A1A1AA] hover:text-white hover:bg-[#8B5CF6] hover:border-[#8B5CF6] transition-all duration-200"
            aria-label="GitHub"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-[#A1A1AA] hover:text-white hover:bg-[#8B5CF6] hover:border-[#8B5CF6] transition-all duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-[#A1A1AA] hover:text-white hover:bg-[#8B5CF6] hover:border-[#8B5CF6] transition-all duration-200"
            aria-label="Instagram"
          >
            <FaInstagram className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-xs sm:text-sm text-[#A1A1AA] md:text-right font-mono">
          &copy; {new Date().getFullYear()} HACKATHON 2026. ALL RIGHTS RESERVED.
        </div>

      </div>
    </footer>
  );
}
