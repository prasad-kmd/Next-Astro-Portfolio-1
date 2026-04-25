"use client";

import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import {
  Cpu,
  Layers,
  Palette,
  Zap,
  History,
  ExternalLink,
  ChevronDown
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";

const techStack = [
  {
    name: "Next.js",
    icon: <Zap className="w-5 h-5 text-accent-cyan" />,
    desc: "Chosen for its robust App Router architecture, server components, and excellent developer experience."
  },
  {
    name: "Astro",
    icon: <Zap className="w-5 h-5 text-accent-purple" />,
    desc: "Used to demonstrate Island Architecture and performance optimization via partial hydration."
  },
  {
    name: "Tailwind CSS",
    icon: <Palette className="w-5 h-5 text-accent-amber" />,
    desc: "The foundational styling engine for rapid, consistent UI development with modern CSS features."
  },
  {
    name: "Radix UI & shadcn/ui",
    icon: <Layers className="w-5 h-5 text-accent-cyan" />,
    desc: "Provided accessible, unstyled primitives and beautifully designed components."
  },
  {
    name: "Framer Motion",
    icon: <Zap className="w-5 h-5 text-accent-purple" />,
    desc: "Handled complex layout transitions and micro-interactions with ease."
  }
];

const changelog = [
  { version: "1.2.0", date: "May 2024", changes: ["Added Astro implementation", "Improved dark mode tokens", "Performance audit"] },
  { version: "1.1.0", date: "April 2024", changes: ["Integrated Radix UI components", "Added custom context menu"] },
  { version: "1.0.0", date: "March 2024", changes: ["Initial Next.js release", "Hero section design"] }
];

export default function AboutSitePage() {
  return (
    <div className="max-w-7xl mx-auto px-8 md:px-24 py-32">
      <div className="mb-16">
        <h1 className="text-6xl font-black tracking-tight mb-4 uppercase">Colophon.</h1>
        <p className="text-zinc-400 max-w-xl text-lg">
          A deep dive into the technical architecture, design decisions, and evolution of this portfolio.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Tech Stack */}
        <div className="space-y-8">
          <h2 className="flex items-center gap-3 text-xl font-bold uppercase tracking-widest text-zinc-500">
            <Cpu className="w-5 h-5" />
            Tech Stack
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {techStack.map((tech) => (
              <div key={tech.name} className="p-6 rounded-2xl glass-dark border border-white/5 flex gap-4">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center shrink-0">
                  {tech.icon}
                </div>
                <div>
                  <h3 className="font-bold mb-1">{tech.name}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Design & Evolution */}
        <div className="space-y-12">
          <div className="space-y-8">
            <h2 className="flex items-center gap-3 text-xl font-bold uppercase tracking-widest text-zinc-500">
              <History className="w-5 h-5" />
              Changelog
            </h2>

            <Accordion.Root type="single" collapsible className="space-y-4">
              {changelog.map((entry, idx) => (
                <Accordion.Item key={entry.version} value={`item-${idx}`} className="glass-dark border border-white/5 rounded-2xl overflow-hidden">
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left group">
                      <div>
                        <span className="text-xs font-black uppercase tracking-widest text-accent-cyan">{entry.date}</span>
                        <h3 className="font-bold">v{entry.version}</h3>
                      </div>
                      <ChevronDown className="w-5 h-5 text-zinc-500 transition-transform group-data-[state=open]:rotate-180" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-6 pb-6 animate-slideDown overflow-hidden">
                    <ul className="space-y-2">
                      {entry.changes.map((change, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-zinc-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-purple mt-1.5 shrink-0" />
                          {change}
                        </li>
                      ))}
                    </ul>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>

          <div className="p-8 rounded-3xl glass bg-linear-to-br from-accent-purple/10 to-accent-cyan/10 border border-white/10 space-y-6">
            <h3 className="text-xl font-bold">Open Source</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              This site is fully open-source. Feel free to explore the code, report issues, or suggest improvements on GitHub.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-black hover:bg-accent-cyan transition-all group"
            >
              <FaGithub className="w-4 h-4" />
              View Repository
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
