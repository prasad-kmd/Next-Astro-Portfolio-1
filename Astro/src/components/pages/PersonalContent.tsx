"use client";

import { motion } from "framer-motion";
import { Download, BookOpen, Award, Briefcase, GraduationCap, Heart, Code } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";

const timeline = [
  {
    year: "2022 - Present",
    title: "Senior Full Stack Engineer",
    company: "TechNova Solutions",
    description: "Leading the development of a micro-frontend architecture for a high-traffic e-commerce platform.",
  },
  {
    year: "2020 - 2022",
    title: "Web Developer",
    company: "Creative Pulse Agency",
    description: "Built performant React applications and interactive landing pages for diverse global clients.",
  },
  {
    year: "2018 - 2020",
    title: "Junior Frontend Developer",
    company: "StartUp Inc.",
    description: "Focused on UI/UX implementation and cross-browser compatibility using modern CSS techniques.",
  },
];

const skills = [
  { name: "React / Next.js", progress: 95 },
  { name: "TypeScript", progress: 90 },
  { name: "Node.js", progress: 85 },
  { name: "Tailwind CSS", progress: 98 },
  { name: "PostgreSQL", progress: 80 },
];

const interests = [
  { name: "Photography", icon: BookOpen },
  { name: "Open Source", icon: Code },
  { name: "Hiking", icon: Award },
  { name: "Gaming", icon: Heart },
];

export default function PersonalDetails() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-16">
          <section className="space-y-6">
            <div className="relative">
              <span className="absolute -top-10 -left-6 text-9xl text-primary/10 font-serif leading-none">"</span>
              <h2 className="text-4xl font-bold tracking-tight">Personal Statement</h2>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I am a passionate software engineer with a keen eye for design and performance.
              My journey in tech began with a curiosity for how things work on the web,
              and it has evolved into a career dedicated to creating seamless digital experiences.
              I believe that code is a tool for problem-solving, and design is the language
              we use to communicate those solutions.
            </p>
            <Button className="rounded-full gap-2 group">
              Download Resume <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </Button>
          </section>

          <section className="space-y-12">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Briefcase className="text-primary" /> Experience Timeline
            </h2>
            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/50 before:to-transparent">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-background group-[.is-active]:bg-primary group-[.is-active]:text-primary-foreground shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <div className="w-3 h-3 bg-current rounded-full" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl glass border-white/5 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-foreground">{item.title}</div>
                      <time className="font-mono text-xs text-primary">{item.year}</time>
                    </div>
                    <div className="text-muted-foreground font-medium mb-2">{item.company}</div>
                    <div className="text-muted-foreground text-sm">{item.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <Card className="border-white/5 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-sm uppercase tracking-widest text-primary">Technical Proficiency</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {skills.map((skill, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.progress}%</span>
                  </div>
                  <Progress value={skill.progress} className="h-1.5" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-white/5 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-sm uppercase tracking-widest text-primary flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="font-bold text-sm">B.Sc. Computer Science</div>
                <div className="text-xs text-muted-foreground italic">University of Technology, 2014 - 2018</div>
              </div>
              <p className="text-xs text-muted-foreground">
                Graduated with Honors. Focused on Distributed Systems and Human-Computer Interaction.
              </p>
            </CardContent>
          </Card>

          <section className="space-y-4 pt-4">
             <h3 className="text-sm font-bold uppercase tracking-widest text-primary px-1">Interests</h3>
             <div className="grid grid-cols-2 gap-3">
               {interests.map((interest, i) => (
                 <div key={i} className="flex flex-col items-center justify-center p-4 rounded-xl glass border-white/5 hover:bg-primary/5 transition-colors text-center gap-2">
                    <interest.icon className="w-5 h-5 text-primary" />
                    <span className="text-xs font-medium">{interest.name}</span>
                 </div>
               ))}
             </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
