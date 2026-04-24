"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "./link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 max-w-4xl"
      >
        <Badge variant="outline" className="px-4 py-1 text-sm border-primary/50 text-primary animate-pulse">
          Open to new opportunities
        </Badge>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter">
          CRAFTING <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/40" style={{ WebkitTextFillColor: 'transparent' }}>DIGITAL</span> EXPERIENCES
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          I build premium, performance-first web applications using modern technologies like Next.js, Astro, and Tailwind CSS.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <Button size="lg" className="rounded-full px-8 h-12 text-base font-bold group" asChild>
            <Link href="/personal-details">
              View My Work <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base font-bold bg-background/50 backdrop-blur-sm" asChild>
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  )
}
