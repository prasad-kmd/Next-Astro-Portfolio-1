"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  Menu,
  X
} from "lucide-react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";
import { cn } from "@/lib/utils";

const socialLinks = [
  { name: "GitHub", icon: FaGithub, href: "https://github.com" },
  { name: "Twitter", icon: FaTwitter, href: "https://twitter.com" },
  { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com" },
  { name: "Instagram", icon: FaInstagram, href: "https://instagram.com" },
];

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed top-6 left-6 z-50 p-3 rounded-full glass-dark text-accent-cyan shadow-lg"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar Container */}
      <motion.aside
        initial={false}
        animate={{
          width: isExpanded ? 240 : 64,
          x: isMobileOpen ? 0 : (typeof window !== 'undefined' && window.innerWidth < 1024 ? -240 : 0)
        }}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className={cn(
          "fixed left-0 top-0 h-full z-50 glass-dark border-r border-white/5 flex flex-col items-center py-8 transition-all duration-300 ease-in-out",
          "lg:translate-x-0"
        )}
      >
        <div className="flex-1 flex flex-col items-center gap-8 w-full px-3">
          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-accent-cyan to-accent-purple flex items-center justify-center font-bold text-black text-xl mb-4 shadow-lg shadow-accent-cyan/20 shrink-0">
            P
          </div>

          <div className="flex flex-col gap-4 w-full">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-xl transition-all duration-200 hover:bg-white/5 group"
              >
                <social.icon className="w-5 h-5 text-zinc-400 group-hover:text-accent-cyan shrink-0" />
                {(isExpanded || isMobileOpen) && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-sm font-medium text-zinc-400 group-hover:text-white whitespace-nowrap"
                  >
                    {social.name}
                  </motion.span>
                )}
              </a>
            ))}
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="hidden lg:flex mb-4 p-2 rounded-full hover:bg-white/5 text-zinc-500 transition-colors"
        >
          {isExpanded ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
        </button>

        {/* Mobile Close Button */}
        {isMobileOpen && (
          <button
            onClick={() => setIsMobileOpen(false)}
            className="lg:hidden mb-4 p-3 rounded-full hover:bg-white/5 text-accent-cyan"
          >
            <X className="w-6 h-6" />
          </button>
        )}

        <div className="shrink-0 flex flex-col items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-[10px] font-bold">
            N
          </div>
        </div>
      </motion.aside>

      {/* Overlay for mobile */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
