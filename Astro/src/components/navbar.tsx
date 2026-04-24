"use client"
import * as React from "react"
import Link from "./link"
import { usePathname } from "./use-router"
import { cn } from "../lib/utils"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu"
import { ThemeToggle } from "./theme-toggle"
import { Home, User, Mail, Info } from "lucide-react"

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/personal-details", label: "Profile", icon: User },
  { href: "/contact", label: "Contact", icon: Mail },
  { href: "/about-site", label: "About", icon: Info },
]

export function Navbar() {
  const pathname = usePathname()
  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="flex items-center gap-2 bg-background/60 backdrop-blur-lg border border-border/50 rounded-full px-2 py-1.5 shadow-xl">
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link href={item.href} className={cn(navigationMenuTriggerStyle(), "bg-transparent rounded-full px-4 transition-all duration-300", (pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href))) ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground")}>
                  <item.icon className="md:hidden h-5 w-5" />
                  <span className="hidden md:inline">{item.label}</span>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="w-[1px] h-6 bg-border/50 mx-1" />
        <ThemeToggle />
      </div>
    </div>
  )
}
