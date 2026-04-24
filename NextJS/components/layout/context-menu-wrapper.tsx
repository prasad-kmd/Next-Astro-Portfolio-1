"use client";

import { useRouter } from "next/navigation";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
} from "@/components/ui/context-menu";
import { Home, User, Mail, Info, Link2, SunMoon, PanelRight } from "lucide-react";
import { useTheme } from "next-themes";

interface ContextMenuWrapperProps {
  children: React.ReactNode;
  onOpenSidebar: () => void;
}

export function ContextMenuWrapper({ children, onOpenSidebar }: ContextMenuWrapperProps) {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const copyUrl = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>
        <div className="min-h-screen flex flex-col">{children}</div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-56">
        <ContextMenuItem onClick={() => router.push("/")} className="gap-2">
          <Home className="w-4 h-4" />
          <span>Home</span>
        </ContextMenuItem>
        <ContextMenuItem onClick={() => router.push("/personal")} className="gap-2">
          <User className="w-4 h-4" />
          <span>Personal Details</span>
        </ContextMenuItem>
        <ContextMenuItem onClick={() => router.push("/contact")} className="gap-2">
          <Mail className="w-4 h-4" />
          <span>Contact</span>
        </ContextMenuItem>
        <ContextMenuItem onClick={() => router.push("/about")} className="gap-2">
          <Info className="w-4 h-4" />
          <span>About This Site</span>
        </ContextMenuItem>

        <ContextMenuSeparator />

        <ContextMenuItem onClick={copyUrl} className="gap-2">
          <Link2 className="w-4 h-4" />
          <span>Copy Page URL</span>
        </ContextMenuItem>
        <ContextMenuItem onClick={toggleTheme} className="gap-2">
          <SunMoon className="w-4 h-4" />
          <span>Toggle Theme</span>
        </ContextMenuItem>
        <ContextMenuItem onClick={onOpenSidebar} className="gap-2">
          <PanelRight className="w-4 h-4" />
          <span>Open Sidebar</span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
