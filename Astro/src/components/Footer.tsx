
import { Mail, ExternalLink } from "lucide-react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-black/20 backdrop-blur-sm pt-16 pb-8 px-8 md:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gradient">Portfolio.</h3>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
            Crafting digital experiences with precision, performance, and a touch of magic. Let's build something extraordinary together.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-200">Navigation</h4>
          <ul className="space-y-2">
            <li><a href="/" className="text-sm text-zinc-400 hover:text-accent-cyan transition-colors">Home</a></li>
            <li><a href="/about" className="text-sm text-zinc-400 hover:text-accent-cyan transition-colors">About</a></li>
            <li><a href="/contact" className="text-sm text-zinc-400 hover:text-accent-cyan transition-colors">Contact</a></li>
            <li><a href="/about-site" className="text-sm text-zinc-400 hover:text-accent-cyan transition-colors">About Site</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-200">Highlights</h4>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
              Next.js 15+ Integration
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
              Astro Island Architecture
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-amber" />
              Radix UI Primitives
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-200">Connect</h4>
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-accent-cyan/10 hover:text-accent-cyan transition-all">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-accent-purple/10 hover:text-accent-purple transition-all">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-accent-amber/10 hover:text-accent-amber transition-all">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-accent-cyan/10 hover:text-accent-cyan transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Built with <span className="text-red-500">❤️</span> using Next.js & Astro
        </p>
      </div>
    </footer>
  );
}
