"use client"

import * as React from "react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import {
  Download,
  Mail,
  MapPin,
  Globe,
  Briefcase,
  GraduationCap,
  Award,
  Heart,
  Code2,
  Languages,
  Trophy
} from "lucide-react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { motion } from "framer-motion"

const experience = [
  {
    title: "Senior Full Stack Developer",
    company: "TechFlow Solutions",
    period: "2021 - Present",
    description: "Leading the frontend team in developing high-performance React applications. Implemented a company-wide design system using Tailwind and Radix UI. Optimized build times by 40% through framework migration."
  },
  {
    title: "Web Developer",
    company: "Creative Pulse Agency",
    period: "2018 - 2021",
    description: "Developed custom e-commerce solutions for high-profile clients. Specialized in creating interactive animations and seamless user experiences using GSAP and Framer Motion."
  },
  {
    title: "Junior Developer",
    company: "Startup Hub",
    period: "2016 - 2018",
    description: "Collaborated on various MVPs for early-stage startups. Gained extensive experience in modern JavaScript ecosystems and responsive design principles."
  }
]

export function PersonalDetailsContent() {
  return (
    <div className="max-w-4xl mx-auto py-24 px-6 space-y-12">
      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="overflow-hidden border-none bg-gradient-to-br from-primary/10 via-background to-secondary/10 shadow-2xl relative">
          <div className="absolute top-0 right-0 p-4">
             <Badge variant="secondary" className="bg-primary/20 text-primary border-none">Available for Hire</Badge>
          </div>
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-background shadow-xl">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-4">
                <div>
                  <h1 className="text-4xl font-black tracking-tight">John Doe</h1>
                  <p className="text-xl text-primary font-semibold">Senior Full Stack Developer</p>
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> San Francisco, CA</span>
                  <span className="flex items-center gap-1.5"><Mail className="h-4 w-4" /> hello@johndoe.dev</span>
                  <span className="flex items-center gap-1.5"><Globe className="h-4 w-4" /> johndoe.dev</span>
                </div>
                <div className="flex justify-center md:justify-start gap-3 pt-2">
                  <Button size="icon" variant="outline" className="rounded-full h-10 w-10 hover:bg-primary hover:text-primary-foreground transition-all">
                    <FaGithub className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full h-10 w-10 hover:bg-primary hover:text-primary-foreground transition-all">
                    <FaLinkedin className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="outline" className="rounded-full h-10 w-10 hover:bg-primary hover:text-primary-foreground transition-all">
                    <FaTwitter className="h-5 w-5" />
                  </Button>
                  <Button variant="default" className="rounded-full px-6 ml-auto hidden md:flex h-10 font-bold">
                    <Download className="mr-2 h-4 w-4" /> Download Resume
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-12">
          {/* Experience */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Briefcase className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold uppercase tracking-wider">Experience</h2>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {experience.map((exp, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-border/50 rounded-2xl px-4 bg-card/50 shadow-sm overflow-hidden">
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex flex-col items-start text-left space-y-1">
                      <span className="text-lg font-bold group-hover:text-primary transition-colors">{exp.title}</span>
                      <span className="text-sm text-primary font-medium">{exp.company} • {exp.period}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {exp.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Education */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold uppercase tracking-wider">Education</h2>
            </div>
            <div className="space-y-4">
              <Card className="border-border/50 bg-card/50">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-1">
                    <span className="text-lg font-bold">B.S. in Computer Science</span>
                    <span className="text-sm text-primary font-medium">University of California, Berkeley • 2012 - 2016</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-12">
          {/* Skills Categorized */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Code2 className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-wider">Skills</h2>
            </div>
            <div className="space-y-6">
              {[
                { label: "Frontend", skills: ["React", "Next.js", "Tailwind"] },
                { label: "Backend", skills: ["Node.js", "PostgreSQL", "Redis"] },
                { label: "Tools", skills: ["Git", "Docker", "AWS"] },
              ].map((cat) => (
                <div key={cat.label} className="space-y-3">
                  <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">{cat.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map(skill => (
                      <Badge key={skill} variant="secondary" className="bg-secondary/50 border-none rounded-lg px-3 py-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section className="space-y-4">
             <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Languages className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-wider">Languages</h2>
            </div>
            <ul className="space-y-3">
              <li className="flex justify-between items-center text-sm">
                <span className="font-bold">English</span>
                <span className="text-muted-foreground">Native</span>
              </li>
              <li className="flex justify-between items-center text-sm">
                <span className="font-bold">Spanish</span>
                <span className="text-muted-foreground">Fluent</span>
              </li>
              <li className="flex justify-between items-center text-sm">
                <span className="font-bold">Japanese</span>
                <span className="text-muted-foreground">Basic</span>
              </li>
            </ul>
          </section>

           {/* Interests */}
           <section className="space-y-4">
             <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Heart className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-wider">Interests</h2>
            </div>
            <div className="flex flex-wrap gap-2">
               {["Photography", "Gaming", "Hiking", "Open Source", "Coffee"].map(interest => (
                 <span key={interest} className="text-sm px-3 py-1 bg-secondary/30 rounded-full border border-border/50 text-muted-foreground">
                   {interest}
                 </span>
               ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
