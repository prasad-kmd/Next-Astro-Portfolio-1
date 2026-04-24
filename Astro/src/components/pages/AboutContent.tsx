"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs, SiReact, SiTailwindcss, SiTypescript,
  SiFramer, SiRadixui, SiVercel, SiAstro
} from "react-icons/si";
import { CheckCircle2, Cpu, Layout, Zap, History } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const techStack = [
  { name: "Next.js", icon: SiNextdotjs, desc: "App Router & SSR", color: "text-white" },
  { name: "React", icon: SiReact, desc: "Component Architecture", color: "text-blue-400" },
  { name: "TypeScript", icon: SiTypescript, desc: "Type Safety", color: "text-blue-600" },
  { name: "Tailwind CSS", icon: SiTailwindcss, desc: "Utility-first Styling", color: "text-teal-400" },
  { name: "Framer Motion", icon: SiFramer, desc: "Fluid Animations", color: "text-purple-500" },
  { name: "Radix UI", icon: SiRadixui, desc: "Accessible Primitives", color: "text-white" },
  { name: "Astro", icon: SiAstro, desc: "Static Site Generation", color: "text-orange-500" },
  { name: "Vercel", icon: SiVercel, desc: "Deployment & Edge", color: "text-white" },
];

const metrics = [
  { label: "Accessibility", value: 100, color: "bg-green-500" },
  { label: "Performance", value: 98, color: "bg-green-500" },
  { label: "SEO", value: 100, color: "bg-green-500" },
  { label: "Best Practices", value: 100, color: "bg-green-500" },
];

const changelog = [
  { version: "v2.0.0", date: "Jan 2025", notes: "Complete redesign with Tailwind v4 and Next.js 16." },
  { version: "v1.5.0", date: "Sep 2024", notes: "Added Astro-powered static blog section." },
  { version: "v1.0.0", date: "Mar 2024", notes: "Initial launch with Next.js 14." },
];

export default function AboutThisSite() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-black tracking-tighter">ABOUT THIS SITE</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto italic">
          "A deep dive into the architecture, design philosophy, and technology that powers this digital experience."
        </p>
      </section>

      <section className="space-y-12">
        <div className="flex items-center gap-4">
          <Cpu className="text-primary w-8 h-8" />
          <h2 className="text-3xl font-bold tracking-tight">The Tech Stack</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {techStack.map((tech, i) => (
            <Card key={i} className="glass border-white/5 hover:border-primary/50 transition-all duration-300 group overflow-hidden">
              <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                <tech.icon className={`w-10 h-10 ${tech.color} group-hover:scale-110 transition-transform`} />
                <div>
                  <div className="font-bold text-sm mb-1">{tech.name}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{tech.desc}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <Layout className="text-primary w-8 h-8" />
            <h2 className="text-3xl font-bold tracking-tight">Design Philosophy</h2>
          </div>
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              The aesthetic of this site is inspired by "Cyber-Modernism" – a blend of high-contrast typography,
              glass-morphism, and subtle glow effects. The goal was to create a "dense but clean" interface
              that provides immediate information without feeling overwhelming.
            </p>
            <blockquote className="border-l-2 border-primary pl-6 py-2 my-8 italic text-lg bg-white/5 rounded-r-xl">
              "Good design is not just what it looks like and feels like. Design is how it works."
            </blockquote>
            <p className="text-muted-foreground leading-relaxed">
              Every transition and animation is calculated to provide feedback to the user,
              leveraging Framer Motion for spring-based physics that feel organic and responsive.
            </p>
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-center gap-4">
            <Zap className="text-primary w-8 h-8" />
            <h2 className="text-3xl font-bold tracking-tight">Web Vitals</h2>
          </div>
          <div className="space-y-6">
            {metrics.map((metric, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="font-medium">{metric.label}</span>
                  </div>
                  <span className="text-sm font-mono">{metric.value}%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${metric.value}%` }}
                    className={`h-full ${metric.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="space-y-12">
        <div className="flex items-center gap-4">
          <History className="text-primary w-8 h-8" />
          <h2 className="text-3xl font-bold tracking-tight">Changelog</h2>
        </div>
        <div className="space-y-4">
          {changelog.map((entry, i) => (
            <div key={i} className="flex gap-8 p-6 glass border-white/5 rounded-2xl relative overflow-hidden group">
              <div className="flex flex-col items-center gap-2 shrink-0">
                <div className="text-primary font-black text-xl">{entry.version}</div>
                <div className="text-[10px] uppercase font-bold text-muted-foreground">{entry.date}</div>
              </div>
              <div className="w-px bg-white/10" />
              <div className="flex-1 text-sm text-muted-foreground flex items-center">
                {entry.notes}
              </div>
              <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-10 transition-opacity">
                <History className="w-12 h-12" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
