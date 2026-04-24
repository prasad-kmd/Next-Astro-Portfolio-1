"use client"
import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Home, User, Mail, Info, Menu, X } from "lucide-react"
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const sidebarItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/personal-details", label: "Profile", icon: User },
  { href: "/contact", label: "Contact", icon: Mail },
  { href: "/about-site", label: "About Site", icon: Info },
]

const socialItems = [
  { icon: FaGithub, href: "#", label: "GitHub" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
]

export function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)
  const pathname = usePathname()

  // Close mobile drawer on path change
  React.useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  const SidebarContent = ({ mobile = false }) => (
    <div className={cn("flex flex-col h-full", mobile ? "w-full" : "w-full")}>
      <div className="flex items-center justify-between p-4 h-16 border-b border-border/50">
        <div className={cn("font-black text-primary overflow-hidden transition-all duration-300 whitespace-nowrap", (isOpen || mobile) ? "w-32 opacity-100" : "w-0 opacity-0")}>
          PORTFOLIO
        </div>
        {!mobile ? (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl hover:bg-primary/10 hover:text-primary"
          >
            {isOpen ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
          </Button>
        ) : (
          <Button variant="ghost" size="icon" onClick={() => setIsMobileOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>

      <div className="flex flex-col items-center gap-6 py-8 px-2">
        <Avatar className={cn("transition-all duration-300 shadow-lg", (isOpen || mobile) ? "h-20 w-20" : "h-10 w-10")}>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        {(isOpen || mobile) && (
          <div className="text-center animate-in fade-in slide-in-from-top-2">
            <p className="font-bold">John Doe</p>
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-tighter">Full Stack Dev</p>
          </div>
        )}
      </div>

      <nav className="flex-1 px-3 space-y-2">
        <TooltipProvider delayDuration={0}>
          {sidebarItems.map((item) => (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-4 p-3 rounded-xl transition-all group",
                    pathname === item.href ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "hover:bg-primary/10 text-muted-foreground hover:text-primary"
                  )}
                >
                  <item.icon className="h-5 w-5 shrink-0" />
                  <span className={cn("font-medium whitespace-nowrap transition-all duration-300", (isOpen || mobile) ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden")}>
                    {item.label}
                  </span>
                </Link>
              </TooltipTrigger>
              {(!isOpen && !mobile) && <TooltipContent side="right">{item.label}</TooltipContent>}
            </Tooltip>
          ))}
        </TooltipProvider>
      </nav>

      <div className="p-4 border-t border-border/50 space-y-4">
        <div className={cn("flex justify-center gap-4 transition-all duration-300", (isOpen || mobile) ? "flex-row" : "flex-col items-center")}>
           {socialItems.map((social, i) => (
             <a key={i} href={social.href} className="text-muted-foreground hover:text-primary transition-colors">
               <social.icon className="h-5 w-5" />
             </a>
           ))}
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Toggle */}
      <div className="md:hidden fixed bottom-6 left-6 z-50">
        <Button
          size="icon"
          className="rounded-full h-14 w-14 shadow-2xl shadow-primary/20"
          onClick={() => setIsMobileOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm transition-opacity duration-300",
          isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileOpen(false)}
      >
        <div
          className={cn(
            "fixed inset-y-0 left-0 w-3/4 max-w-sm bg-background border-r border-border transition-transform duration-300 ease-in-out shadow-2xl",
            isMobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <SidebarContent mobile />
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div
        className={cn(
          "hidden md:flex flex-col fixed left-0 top-0 h-screen bg-background/80 backdrop-blur-xl border-r border-border transition-all duration-300 z-40 shadow-2xl",
          isOpen ? "w-64" : "w-16"
        )}
      >
        <SidebarContent />
      </div>
    </>
  )
}
