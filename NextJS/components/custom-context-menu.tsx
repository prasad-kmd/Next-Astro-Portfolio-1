"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {
  ArrowUp,
  Copy,
  Home,
  User,
  Mail,
  Info,
  Moon,
  Sun,
  Sparkles
} from "lucide-react"

export function CustomContextMenu({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const { theme, setTheme } = useTheme()

  const copyUrl = () => {
    navigator.clipboard.writeText(window.location.href)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="min-h-screen w-full">{children}</div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem onClick={() => router.push("/")}>
          <Home className="mr-2 h-4 w-4" />
          Home
        </ContextMenuItem>
        <ContextMenuItem onClick={() => router.push("/personal-details")}>
          <User className="mr-2 h-4 w-4" />
          Profile
        </ContextMenuItem>
        <ContextMenuItem onClick={() => router.push("/contact")}>
          <Mail className="mr-2 h-4 w-4" />
          Contact
        </ContextMenuItem>
        <ContextMenuItem onClick={() => router.push("/about-site")}>
          <Info className="mr-2 h-4 w-4" />
          About Site
        </ContextMenuItem>

        <ContextMenuSeparator />

        <ContextMenuItem onClick={copyUrl}>
          <Copy className="mr-2 h-4 w-4" />
          Copy Page Link
          <ContextMenuShortcut>⌘C</ContextMenuShortcut>
        </ContextMenuItem>

        <ContextMenuItem onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? <Moon className="mr-2 h-4 w-4" /> : <Sun className="mr-2 h-4 w-4" />}
          Toggle Theme
          <ContextMenuShortcut>⌘T</ContextMenuShortcut>
        </ContextMenuItem>

        <ContextMenuItem onClick={scrollToTop}>
          <ArrowUp className="mr-2 h-4 w-4" />
          Scroll to Top
        </ContextMenuItem>

        <ContextMenuSeparator />

        <ContextMenuItem className="text-primary font-medium">
          <Sparkles className="mr-2 h-4 w-4" />
          Magic Mode: On
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
