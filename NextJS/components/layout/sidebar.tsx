"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Home, User, Mail, Info, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Personal Details", href: "/personal", icon: User },
  { name: "Contact", href: "/contact", icon: Mail },
  { name: "About This Site", href: "/about", icon: Info },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 z-[70] h-full w-full sm:w-80 glass border-l border-white/10 p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-xl font-bold tracking-tight">Navigation</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                aria-label="Close Menu"
                className="rounded-full"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <nav className="flex-1 flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link key={item.href} href={item.href} onClick={onClose}>
                    <div
                      className={cn(
                        "flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group",
                        isActive
                          ? "bg-primary text-primary-foreground glow-primary"
                          : "hover:bg-white/5 text-muted-foreground hover:text-foreground"
                      )}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </div>
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto space-y-4 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between p-2 rounded-xl bg-white/5">
                <span className="text-sm font-medium px-2">Theme</span>
                <div className="flex gap-1">
                  <Button
                    variant={theme === "light" ? "default" : "ghost"}
                    size="icon"
                    onClick={() => setTheme("light")}
                    className="w-8 h-8 rounded-lg"
                  >
                    <Sun className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={theme === "dark" ? "default" : "ghost"}
                    size="icon"
                    onClick={() => setTheme("dark")}
                    className="w-8 h-8 rounded-lg"
                  >
                    <Moon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <Button className="w-full rounded-xl" variant="outline">
                Download CV
              </Button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
