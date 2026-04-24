"use client"
import Link from "./link"
import { Separator } from "./ui/separator"
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-background border-t border-border/50 pt-20 pb-10 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1 space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-black tracking-tighter text-primary">PORTFOLIO.</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Crafting premium digital experiences with a focus on performance, accessibility, and high-end design.
            </p>
          </div>
          <div className="flex gap-4">
            {[FaGithub, FaLinkedin, FaTwitter, FaInstagram].map((Icon, i) => (
              <a key={i} href="#" className="p-2 rounded-xl bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">Navigation</h4>
          <ul className="space-y-3 text-sm font-medium">
            {["Home", "Personal Details", "Contact", "About Site"].map((item) => (
              <li key={item}>
                <Link href={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`} className="text-muted-foreground hover:text-primary transition-colors flex items-center group">
                  {item}
                  <ExternalLink className="h-3 w-3 ml-2 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">Connect</h4>
          <ul className="space-y-4 text-sm font-medium">
            <li className="flex items-center gap-3 text-muted-foreground">
              <Mail className="h-4 w-4 text-primary" />
              hello@johndoe.dev
            </li>
            <li className="flex items-center gap-3 text-muted-foreground">
              <Phone className="h-4 w-4 text-primary" />
              +1 (555) 000-0000
            </li>
            <li className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              San Francisco, CA
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">Status</h4>
          <div className="p-6 rounded-3xl bg-primary/5 border border-primary/10 space-y-2">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-green-500">Available for hire</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Looking for new challenges and interesting projects to collaborate on.
            </p>
          </div>
        </div>
      </div>

      <Separator className="bg-border/50 mb-8" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
          © {currentYear} John Doe. All rights reserved.
        </p>
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-primary transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  )
}
