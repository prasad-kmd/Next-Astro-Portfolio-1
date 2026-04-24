"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { ArrowUp } from "lucide-react";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-background/80 border-t border-white/5 pt-16 pb-8 px-6 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-bold mb-4 tracking-tighter">PORTFOLIO.</h3>
          <p className="text-muted-foreground max-w-sm">
            Building digital experiences that combine performance with sophisticated design aesthetics.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-6 uppercase text-xs tracking-widest text-primary">Links</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
            <li><a href="/personal" className="text-muted-foreground hover:text-primary transition-colors">Personal</a></li>
            <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-6 uppercase text-xs tracking-widest text-primary">Connect</h4>
          <div className="flex gap-4">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <Separator className="mb-8 bg-white/5" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Modern Portfolio. All rights reserved.
        </p>

        <Button
          variant="ghost"
          size="sm"
          onClick={scrollToTop}
          className="group rounded-full hover:bg-white/5"
        >
          <span className="text-xs mr-2">Back to top</span>
          <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
        </Button>
      </div>
    </footer>
  );
}
