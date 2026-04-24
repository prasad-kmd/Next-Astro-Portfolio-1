"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react"
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@johndoe.dev",
    href: "mailto:hello@johndoe.dev",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Open for new projects",
    href: null,
  },
]

const socials = [
  { name: "GitHub", icon: FaGithub, href: "#", color: "hover:text-white" },
  { name: "LinkedIn", icon: FaLinkedin, href: "#", color: "hover:text-[#0A66C2]" },
  { name: "Twitter", icon: FaTwitter, href: "#", color: "hover:text-[#1DA1F2]" },
  { name: "Instagram", icon: FaInstagram, href: "#", color: "hover:text-[#E4405F]" },
]

export default function Contact() {
  const [formStatus, setFormStatus] = React.useState<"idle" | "sending" | "sent">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("sending")
    setTimeout(() => setFormStatus("sent"), 1500)
  }

  return (
    <div className="max-w-7xl mx-auto py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 space-y-4"
      >
        <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase">Get in <span className="text-primary">Touch</span></h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Have a project in mind or just want to chat? I'm always open to discussing new opportunities and creative ideas.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-8">
          <div className="grid grid-cols-1 gap-4">
            {contactDetails.map((detail, i) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden group hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <detail.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-1">{detail.label}</p>
                      {detail.href ? (
                        <a href={detail.href} className="font-bold text-lg hover:text-primary transition-colors">{detail.value}</a>
                      ) : (
                        <p className="font-bold text-lg">{detail.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="font-bold uppercase tracking-wider text-sm text-muted-foreground">Follow Me</h3>
            <div className="flex gap-4">
              <TooltipProvider>
                {socials.map((social) => (
                  <Tooltip key={social.name}>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" className={`rounded-full h-12 w-12 bg-background/50 border-border/50 ${social.color} transition-all hover:scale-110`} asChild>
                        <a href={social.href}><social.icon className="h-5 w-5" /></a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{social.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="aspect-video rounded-3xl overflow-hidden border border-border/50 bg-secondary/20 relative group">
            <div className="absolute inset-0 flex items-center justify-center">
               <MapPin className="h-12 w-12 text-primary/20 group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-xs font-bold uppercase tracking-widest text-center">
              Based in San Francisco, CA
            </div>
          </div>
        </div>

        {/* Form */}
        <Card className="lg:col-span-2 border-border/50 shadow-2xl relative overflow-hidden bg-card/30 backdrop-blur-xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-bold">Send a Message</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <AnimatePresence mode="wait">
              {formStatus === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center space-y-4"
                >
                  <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Message Sent!</h3>
                  <p className="text-muted-foreground max-w-xs">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  <Button variant="outline" onClick={() => setFormStatus("idle")} className="rounded-full px-8">Send Another</Button>
                </motion.div>
              ) : (
                <motion.form
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Your Name</label>
                    <Input placeholder="John Doe" required className="bg-secondary/20 border-none rounded-xl h-14 focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                    <Input type="email" placeholder="john@example.com" required className="bg-secondary/20 border-none rounded-xl h-14 focus-visible:ring-primary" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Subject</label>
                    <Input placeholder="Project Inquiry" required className="bg-secondary/20 border-none rounded-xl h-14 focus-visible:ring-primary" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      required
                      className="bg-secondary/20 border-none rounded-2xl min-h-[150px] focus-visible:ring-primary resize-none"
                    />
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <Button
                      type="submit"
                      disabled={formStatus === "sending"}
                      className="w-full h-16 rounded-2xl text-lg font-bold group relative overflow-hidden"
                    >
                      {formStatus === "sending" ? (
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          Send Message <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </div>
                      )}
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
