"use client";

import React from "react";
import { motion } from "framer-motion";
import { Image } from "astro:assets";
import {
  ArrowRight,
  Sparkles,
  ExternalLink,
  ChevronRight
} from "lucide-react";

const stats = [
  { label: "Projects Completed", value: 42, prefix: "" },
  { label: "Years Experience", value: 5, prefix: "+" },
  { label: "Technologies Used", value: 18, prefix: "" },
];

const featuredProjects = [
  {
    title: "Nova Dashboard",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Aether Engine",
    category: "Developer Tool",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Lumina App",
    category: "Mobile UI",
    image: "https://images.unsplash.com/photo-1618761767630-0114737b88b1?auto=format&fit=crop&q=80&w=800",
  },
];

const techLogos = ["React", "Next.js", "Astro", "Tailwind", "Radix", "Framer", "TypeScript", "Node.js"];

export default function HomeContent() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-8 pt-20">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-cyan/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-accent-purple/10 rounded-full blur-[100px]" />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="max-w-4xl text-center space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-accent-cyan mb-4"
          >
            <Sparkles className="w-3 h-3" />
            <span>Available for new projects</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white"
          >
            CRAFTING <br />
            <span className="text-white text-gradient">DIGITAL</span> <br />
            EXCELLENCE.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            I build high-performance web applications with a focus on polished UI, seamless interactions, and scalable architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <a
              href="/contact"
              className="px-8 py-4 rounded-full bg-white text-black font-bold flex items-center gap-2 hover:bg-accent-cyan transition-all hover:scale-105 active:scale-95"
            >
              Start Project
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/about"
              className="px-8 py-4 rounded-full glass hover:bg-white/10 font-bold transition-all"
            >
              My Story
            </a>
          </motion.div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 px-8 md:px-24 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">Featured Work</h2>
            <div className="w-20 h-1 bg-accent-cyan rounded-full" />
          </div>
          <a href="/about-site" className="text-sm font-medium text-zinc-400 hover:text-white flex items-center gap-2 group">
            View Details <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl overflow-hidden glass aspect-4/5"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 w-full">
                <p className="text-xs font-bold uppercase tracking-widest text-accent-cyan mb-2">{project.category}</p>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <div className="w-0 h-1 bg-accent-cyan transition-all duration-300 group-hover:w-full" />
              </div>

              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-12 border-y border-white/5 bg-white/2">
        <div className="max-w-7xl mx-auto px-8 md:px-24 grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center md:text-left">
              <div className="text-5xl font-black text-gradient mb-2">
                {stat.prefix}{stat.value}
              </div>
              <div className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-24 overflow-hidden border-b border-white/5">
        <div className="flex gap-12 whitespace-nowrap animate-infinite-scroll">
          {[...techLogos, ...techLogos].map((logo, idx) => (
            <span key={idx} className="text-4xl md:text-6xl font-black text-white/10 hover:text-white/40 transition-colors cursor-default">
              {logo}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
