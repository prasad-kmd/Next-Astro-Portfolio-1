"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Code2, Rocket, Zap, BarChart3 } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const projects = [
  {
    title: "Quantum Nexus",
    description: "A decentralized cloud computing platform for AI workloads.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&h=400&auto=format&fit=crop",
  },
  {
    title: "EcoSphere API",
    description: "Real-time environmental data monitoring with predictive analytics.",
    tech: ["React", "D3.js", "Node.js"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&h=400&auto=format&fit=crop",
  },
  {
    title: "Aura Design System",
    description: "A high-performance design system for enterprise applications.",
    tech: ["React", "Storybook", "CSS"],
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=600&h=400&auto=format&fit=crop",
  },
  {
    title: "Lumina Vault",
    description: "Secure, encrypted asset management for digital creators.",
    tech: ["Next.js", "Prisma", "Postgres"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&h=400&auto=format&fit=crop",
  },
];

const stats = [
  { label: "Projects Completed", value: 124 },
  { label: "Happy Clients", value: 89 },
  { label: "Lines of Code", value: "250K+" },
  { label: "Cups of Coffee", value: 1400 },
];

const skills = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Astro", "Framer Motion", "Radix UI", "Node.js", "GraphQL", "PostgreSQL"];

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Background Decorative Shapes */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5 pointer-events-none"
               style={{ backgroundImage: "radial-gradient(circle at 2px 2px, gray 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        </div>

        <div className="max-w-4xl text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-tight text-foreground">
              CRAFTING <br />
              <span className="text-primary italic">DIGITAL</span> NEXUS
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          >
            Independent Software Engineer specializing in building sophisticated,
            high-performance web experiences with meticulous attention to detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" className="rounded-full gap-2 group px-8">
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8">
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="pt-12 flex flex-wrap justify-center gap-2 max-w-2xl mx-auto"
          >
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-xs font-medium backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Marquee/Scrolling Container */}
      <div className="w-full overflow-hidden py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center">
              <span className="flex items-center gap-2 text-2xl font-bold text-muted-foreground/30 uppercase tracking-widest"><Code2 /> INNOVATION</span>
              <span className="flex items-center gap-2 text-2xl font-bold text-muted-foreground/30 uppercase tracking-widest"><Zap /> PERFORMANCE</span>
              <span className="flex items-center gap-2 text-2xl font-bold text-muted-foreground/30 uppercase tracking-widest"><Rocket /> SCALE</span>
              <span className="flex items-center gap-2 text-2xl font-bold text-muted-foreground/30 uppercase tracking-widest"><BarChart3 /> ANALYTICS</span>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tight">FEATURED WORK</h2>
            <p className="text-muted-foreground">A selection of recent projects and contributions.</p>
          </div>
          <Button variant="link" className="gap-2">
            All Projects <ExternalLink className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="group overflow-hidden border-white/5 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-8 space-y-4">
                  <div className="flex gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] uppercase tracking-widest font-bold text-primary">{t}</span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Row */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center space-y-2 p-8 rounded-2xl bg-white/[0.02] border border-white/5"
            >
              <div className="text-4xl font-black text-primary">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
