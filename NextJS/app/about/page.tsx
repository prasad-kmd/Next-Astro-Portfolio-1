"use client";

import React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import Image from "next/image";
import {
  Download,
  MapPin,
  GraduationCap,
} from "lucide-react";

const experiences = [
  {
    company: "TechFlow Solutions",
    role: "Senior Frontend Engineer",
    period: "2021 - Present",
    desc: "Led the development of a cloud-native dashboard, improving performance by 40%."
  },
  {
    company: "Digital Craftsmen",
    role: "Full Stack Developer",
    period: "2018 - 2021",
    desc: "Built scalable e-commerce solutions for global brands using React and Node.js."
  }
];

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "PostgreSQL", "Prisma", "tRPC", "GraphQL"] },
  { category: "Tools", items: ["Docker", "AWS", "Git", "Figma", "Playwright"] }
];

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 md:px-24 py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column: Profile */}
        <div className="lg:col-span-5 space-y-8">
          <div className="relative group">
            <div className="absolute -inset-4 bg-linear-to-r from-accent-cyan to-accent-purple rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative aspect-square rounded-2xl overflow-hidden glass border-2 border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                alt="Profile"
                fill
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 glass rounded-2xl flex items-center justify-center p-4 shadow-2xl animate-bounce-slow">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-cyan">5+</div>
                <div className="text-[10px] uppercase font-bold text-zinc-500">Years Exp.</div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-12">
            <h1 className="text-4xl font-black tracking-tight">John Doe.</h1>
            <p className="text-zinc-400 leading-relaxed">
              Based in San Francisco, I'm a developer passionate about building tools that empower people. I specialize in the intersection of design and engineering.
            </p>
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <MapPin className="w-4 h-4 text-accent-cyan" />
              <span>Available for remote work</span>
            </div>

            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
              <Download className="w-4 h-4 group-hover:animate-bounce" />
              <span className="text-sm font-bold">Download Resume</span>
            </button>
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="lg:col-span-7">
          <Tabs.Root defaultValue="experience" className="w-full">
            <Tabs.List className="flex gap-4 border-b border-white/5 mb-8">
              <Tabs.Trigger
                value="experience"
                className="px-4 py-2 text-sm font-bold text-zinc-500 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-accent-cyan transition-all"
              >
                Experience
              </Tabs.Trigger>
              <Tabs.Trigger
                value="skills"
                className="px-4 py-2 text-sm font-bold text-zinc-500 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-accent-cyan transition-all"
              >
                Skills
              </Tabs.Trigger>
              <Tabs.Trigger
                value="education"
                className="px-4 py-2 text-sm font-bold text-zinc-500 data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-accent-cyan transition-all"
              >
                Education
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="experience" className="space-y-6 outline-hidden animate-in fade-in slide-in-from-bottom-4">
              {experiences.map((exp, idx) => (
                <div key={idx} className="p-6 rounded-2xl glass-dark border border-white/5 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-zinc-200">{exp.role}</h3>
                    <span className="text-xs font-bold text-accent-cyan bg-accent-cyan/10 px-2 py-1 rounded-md">{exp.period}</span>
                  </div>
                  <div className="text-sm font-medium text-zinc-500">{exp.company}</div>
                  <p className="text-sm text-zinc-400 leading-relaxed pt-2">{exp.desc}</p>
                </div>
              ))}
            </Tabs.Content>

            <Tabs.Content value="skills" className="grid grid-cols-1 md:grid-cols-2 gap-6 outline-hidden animate-in fade-in slide-in-from-bottom-4">
              {skills.map((skillGroup, idx) => (
                <div key={idx} className="p-6 rounded-2xl glass-dark border border-white/5">
                  <h3 className="text-sm font-black uppercase tracking-widest text-zinc-500 mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span key={skill} className="px-3 py-1.5 rounded-lg bg-white/5 text-xs font-bold text-zinc-300 border border-white/5">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </Tabs.Content>

            <Tabs.Content value="education" className="space-y-6 outline-hidden animate-in fade-in slide-in-from-bottom-4">
              <div className="p-6 rounded-2xl glass-dark border border-white/5 space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6 text-accent-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold">B.Sc. Computer Science</h3>
                    <p className="text-sm text-zinc-500">University of Engineering • 2014 - 2018</p>
                  </div>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Specialized in software architecture and human-computer interaction. Graduated with honors.
                </p>
              </div>
            </Tabs.Content>
          </Tabs.Root>

          <div className="mt-12 p-8 rounded-3xl glass bg-linear-to-br from-accent-cyan/5 to-accent-purple/5 border border-accent-cyan/10">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative">
                <span className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
                <span className="relative block w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <h4 className="text-sm font-black uppercase tracking-widest text-zinc-200">Currently</h4>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Learning Three.js for 3D web experiences and exploring AI-driven UI patterns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
