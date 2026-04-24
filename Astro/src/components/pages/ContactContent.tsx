"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Copy, Check, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("hello@portfolio.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-20 space-y-4">
        <h1 className="text-5xl font-black tracking-tighter">GET IN TOUCH</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Have a project in mind or just want to chat? I'm always open to new opportunities and interesting conversations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Contact Form */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <Card className="border-white/5 p-4">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Name</label>
                    <Input placeholder="John Doe" required className="bg-white/5 border-white/10 focus:border-primary/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                    <Input type="email" placeholder="john@example.com" required className="bg-white/5 border-white/10 focus:border-primary/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Subject</label>
                  <Input placeholder="Project Inquiry" required className="bg-white/5 border-white/10 focus:border-primary/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                  <textarea
                    className="flex min-h-[150px] w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary/50 md:text-sm transition-colors"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                <Button className="w-full rounded-xl py-6 text-md font-bold transition-all group" disabled={isSubmitting || submitted}>
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : submitted ? (
                    <span className="flex items-center gap-2 text-green-400">
                      <Check className="w-5 h-5" /> Message Sent!
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.section>

        {/* Alternative Contact & FAQ */}
        <motion.section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="glass border-white/5 p-6 hover:border-primary/30 transition-all duration-300">
              <Mail className="text-primary mb-4 w-6 h-6" />
              <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">Email</div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-medium">hello@portfolio.com</span>
                <Button variant="ghost" size="icon" onClick={copyEmail} className="h-8 w-8 rounded-lg">
                  {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            </Card>

            <Card className="glass border-white/5 p-6 hover:border-primary/30 transition-all duration-300">
              <MapPin className="text-primary mb-4 w-6 h-6" />
              <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">Location</div>
              <div className="text-sm font-medium">San Francisco, CA</div>
              <div className="text-xs text-muted-foreground">GMT-8 (PST)</div>
            </Card>
          </div>

          <div className="flex gap-4">
            {[FaGithub, FaLinkedin, FaTwitter].map((Icon, i) => (
              <Button key={i} variant="outline" size="icon" className="w-12 h-12 rounded-xl border-white/10 hover:border-primary/50 hover:bg-primary/5 group">
                <Icon className="w-5 h-5 group-hover:text-primary transition-colors" />
              </Button>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-white/5">
                <AccordionTrigger className="text-sm font-bold uppercase tracking-widest hover:no-underline">What is your typical turnaround time?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Depending on the scope, a typical project takes between 4-8 weeks from initial discovery to deployment.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-white/5">
                <AccordionTrigger className="text-sm font-bold uppercase tracking-widest hover:no-underline">Do you offer ongoing maintenance?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes, I provide monthly maintenance packages to ensure your platform remains secure, performant, and up-to-date.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-white/5">
                <AccordionTrigger className="text-sm font-bold uppercase tracking-widest hover:no-underline">What is your pricing structure?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  I offer both project-based fixed pricing and hourly rates depending on the nature of the engagement.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
