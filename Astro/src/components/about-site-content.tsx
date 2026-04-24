"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import {
  Code2,
  Cpu,
  Palette,
  Zap,
  ShieldCheck,
  Rocket,
  Globe,
  Layers,
  Component,
  Boxes
} from "lucide-react"
import { FaReact, FaGithub } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiFramer, SiRadixui, SiAstro } from "react-icons/si"
import { motion } from "framer-motion"

const techStack = [
  { name: "Next.js 15", icon: SiNextdotjs, desc: "React Framework for the Web", color: "text-white" },
  { name: "Astro 5", icon: SiAstro, desc: "The web framework for content-driven websites", color: "text-[#FF5D01]" },
  { name: "React 19", icon: FaReact, desc: "The library for web and native user interfaces", color: "text-[#61DAFB]" },
  { name: "TypeScript", icon: SiTypescript, desc: "JavaScript with syntax for types", color: "text-[#3178C6]" },
  { name: "Tailwind CSS 4", icon: SiTailwindcss, desc: "A utility-first CSS framework", color: "text-[#06B6D4]" },
  { name: "Framer Motion", icon: SiFramer, desc: "A production-ready motion library for React", color: "text-[#0055FF]" },
  { name: "Radix UI", icon: SiRadixui, desc: "Unstyled, accessible components for React", color: "text-white" },
  { name: "Lucide Icons", icon: Code2, desc: "Beautiful & consistent icons", color: "text-[#F59E0B]" },
]

export function AboutSiteContent() {
  return (
    <div className="max-w-7xl mx-auto py-24 px-6 space-y-24">
      {/* Header */}
      <section className="text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Badge variant="outline" className="rounded-full px-6 py-1 border-primary/50 text-primary bg-primary/5">
            v2.0.0 Stable
          </Badge>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-black tracking-tighter"
        >
          ABOUT THIS <span className="text-primary">PROJECT</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          A deep dive into the architecture, design decisions, and technology stack behind this dual-framework portfolio implementation.
        </motion.p>
      </section>

      {/* Main Content Tabs */}
      <Tabs defaultValue="stack" className="w-full">
        <div className="flex justify-center mb-12">
          <TabsList className="bg-background/50 backdrop-blur-md border border-border/50 p-1 rounded-2xl h-14">
            <TabsTrigger value="stack" className="rounded-xl px-8 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Tech Stack</TabsTrigger>
            <TabsTrigger value="design" className="rounded-xl px-8 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Design Philosophy</TabsTrigger>
            <TabsTrigger value="performance" className="rounded-xl px-8 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Performance</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="stack" className="animate-in fade-in slide-in-from-bottom-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all group overflow-hidden">
                  <CardHeader>
                    <div className="p-3 w-fit bg-secondary/50 rounded-xl mb-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <tech.icon className={`h-6 w-6 ${tech.color} group-hover:text-inherit`} />
                    </div>
                    <CardTitle className="text-xl">{tech.name}</CardTitle>
                    <CardDescription>{tech.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="design" className="animate-in fade-in slide-in-from-bottom-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Compact Density", icon: Boxes, desc: "Information-dense layout that feels organized and premium, avoiding excessive whitespace." },
              { title: "Glassmorphism", icon: Layers, desc: "Layered backgrounds and frosted glass effects to create depth and visual hierarchy." },
              { title: "Micro-interactions", icon: Zap, desc: "Satisfying hover states and transitions that provide immediate feedback to the user." },
            ].map((item, i) => (
              <Card key={item.title} className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <item.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="performance" className="animate-in fade-in slide-in-from-bottom-4">
          <div className="max-w-3xl mx-auto space-y-6">
             {[
              { title: "Optimized Assets", icon: Rocket, desc: "All images are served in modern formats with proper sizing and lazy loading." },
              { title: "Type Safety", icon: ShieldCheck, desc: "100% TypeScript implementation ensures codebase reliability and developer experience." },
              { title: "Island Architecture", icon: Cpu, desc: "In the Astro version, only interactive components are hydrated, minimizing client-side JS." },
            ].map((item) => (
              <div key={item.title} className="flex gap-6 p-6 rounded-3xl bg-secondary/20 border border-border/50">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
