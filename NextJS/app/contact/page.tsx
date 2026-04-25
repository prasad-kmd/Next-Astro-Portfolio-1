"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  Check,
  Copy,
  Calendar,
  AlertCircle
} from "lucide-react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const email = "hello@johndoe.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const userEmail = formData.get("email") as string;
    const message = formData.get("message") as string;

    const newErrors: Record<string, string> = {};
    if (!name) newErrors.name = "Name is required";
    if (!userEmail || !userEmail.includes("@")) newErrors.email = "Valid email is required";
    if (!message) newErrors.message = "Message cannot be empty";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-8 md:px-24 py-32">
      <div className="mb-16">
        <h1 className="text-6xl font-black tracking-tight mb-4">GET IN TOUCH.</h1>
        <p className="text-zinc-400 max-w-xl text-lg">
          Have a project in mind or just want to chat? I'm always open to new opportunities and interesting collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Contact Form */}
        <div className="lg:col-span-7">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="John Smith"
                  className={cn(
                    "w-full px-6 py-4 rounded-xl glass-dark border outline-hidden transition-all text-sm",
                    errors.name ? "border-red-500/50 focus:border-red-500" : "border-white/5 focus:border-accent-cyan"
                  )}
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-[10px] text-red-500 font-bold flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  className={cn(
                    "w-full px-6 py-4 rounded-xl glass-dark border outline-hidden transition-all text-sm",
                    errors.email ? "border-red-500/50 focus:border-red-500" : "border-white/5 focus:border-accent-cyan"
                  )}
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-[10px] text-red-500 font-bold flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Subject</label>
              <input
                name="subject"
                type="text"
                placeholder="How can I help?"
                className="w-full px-6 py-4 rounded-xl glass-dark border border-white/5 focus:border-accent-cyan outline-hidden transition-all text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">Message</label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me more about your project..."
                className={cn(
                  "w-full px-6 py-4 rounded-xl glass-dark border outline-hidden transition-all text-sm resize-none",
                  errors.message ? "border-red-500/50 focus:border-red-500" : "border-white/5 focus:border-accent-cyan"
                )}
              />
              <AnimatePresence>
                {errors.message && (
                  <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-[10px] text-red-500 font-bold flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <button
              disabled={isSubmitting}
              className="w-full md:w-auto px-12 py-4 rounded-xl bg-white text-black font-black flex items-center justify-center gap-2 hover:bg-accent-cyan transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : submitted ? "Message Sent!" : "Send Message"}
              {!isSubmitting && !submitted && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              {submitted && <Check className="w-4 h-4 text-green-600" />}
            </button>
          </form>
        </div>

        {/* Alternative Methods */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-8 rounded-3xl glass-dark border border-white/5 space-y-6">
            <h3 className="text-xl font-bold">Contact Details</h3>

            <div className="space-y-4">
              <div className="group flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-accent-cyan/50 transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent-cyan" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Email</p>
                    <p className="text-sm font-medium">{email}</p>
                  </div>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="p-2 rounded-lg hover:bg-white/10 text-zinc-500 hover:text-white transition-all"
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent-purple" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Phone</p>
                  <p className="text-sm font-medium">+1 (555) 000-0000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl glass bg-linear-to-br from-accent-cyan/5 to-accent-purple/5 border border-accent-cyan/10">
            <h3 className="text-xl font-bold mb-6">Social Profiles</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "GitHub", icon: FaGithub, color: "hover:text-white" },
                { name: "Twitter", icon: FaTwitter, color: "hover:text-blue-400" },
                { name: "LinkedIn", icon: FaLinkedin, color: "hover:text-blue-600" },
                { name: "Meeting", icon: Calendar, color: "hover:text-accent-cyan" }
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className={cn(
                    "flex flex-col items-center gap-3 p-6 rounded-2xl glass-dark border border-white/5 transition-all group",
                    social.color
                  )}
                >
                  <social.icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                  <span className="text-xs font-bold uppercase tracking-widest">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
