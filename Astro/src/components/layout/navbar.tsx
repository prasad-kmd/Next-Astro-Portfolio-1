"use client";

 // This will FAIL in Astro
import { motion } from "framer-motion";
import { Home, User, Mail, Info, Menu } from "lucide-react";
import { cn } from "../../lib/utils";
import { useScroll } from "../../hooks/use-scroll";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Personal", href: "/personal", icon: User },
  { name: "Contact", href: "/contact", icon: Mail },
  { name: "About", href: "/about", icon: Info },
];

interface NavbarProps {
  onMenuClick: () => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {
  const [pathname, setPathname] = useState("");
  const scrolled = useScroll();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPathname(window.location.pathname);
    }
  }, []);

  return (
    <header
      className={cn(
        "fixed top-4 right-4 z-50 transition-all duration-300 ease-in-out",
        scrolled ? "top-2 right-2" : "top-4 right-4"
      )}
    >
      <nav
        className={cn(
          "flex items-center gap-2 p-1.5 rounded-full glass transition-all duration-300",
          scrolled ? "px-3 py-1 shadow-lg" : "px-4 py-2"
        )}
      >
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <a key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "relative rounded-full gap-2 px-4 transition-all duration-300",
                    isActive
                      ? "text-primary-foreground"
                      : "hover:bg-white/10 text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 bg-primary rounded-full glow-primary"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <item.icon className="w-4 h-4 relative z-10" />
                  <span className="relative z-10 hidden lg:inline">
                    {item.name}
                  </span>
                </Button>
              </a>
            );
          })}
        </div>

        <div className="md:hidden flex items-center gap-1">
          {navItems.map((item) => {
             const isActive = pathname === item.href;
             return (
               <a key={item.href} href={item.href}>
                 <Button
                    variant={isActive ? "default" : "ghost"}
                    size="icon"
                    className={cn(
                      "rounded-full w-8 h-8",
                      isActive && "glow-primary"
                    )}
                 >
                    <item.icon className="w-4 h-4" />
                 </Button>
               </a>
             )
          })}
        </div>

        <div className="w-px h-4 bg-white/20 mx-1" />

        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuClick}
          aria-label="Open Menu"
          className="rounded-full hover:bg-white/10"
        >
          <Menu className="w-4 h-4" />
        </Button>
      </nav>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </header>
  );
}
