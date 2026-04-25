"use client";

import React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import {
  Home,
  Copy,
  Sun,
} from "lucide-react";
import { cn } from "../lib/utils";

export function CustomContextMenu({ children }: { children: React.ReactNode }) {
  const copyUrl = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const navigateTo = (url: string) => {
    if (typeof window !== "undefined") {
      window.location.href = url;
    }
  };

  return (
    <ContextMenuPrimitive.Root>
      <ContextMenuPrimitive.Trigger asChild>
        {children}
      </ContextMenuPrimitive.Trigger>

      <ContextMenuPrimitive.Portal>
        <ContextMenuPrimitive.Content
          className="min-w-[160px] glass-dark rounded-xl p-1.5 shadow-2xl animate-in fade-in zoom-in duration-200 z-[100]"
        >
          <ContextMenuPrimitive.Item
            onClick={() => navigateTo("/")}
            className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-300 rounded-lg hover:bg-accent-cyan/10 hover:text-accent-cyan outline-hidden cursor-pointer"
          >
            <Home className="w-4 h-4" />
            Navigate Home
          </ContextMenuPrimitive.Item>

          <ContextMenuPrimitive.Item
            onClick={copyUrl}
            className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-300 rounded-lg hover:bg-accent-cyan/10 hover:text-accent-cyan outline-hidden cursor-pointer"
          >
            <Copy className="w-4 h-4" />
            Copy Link
          </ContextMenuPrimitive.Item>

          <ContextMenuPrimitive.Separator className="h-px bg-white/5 my-1" />

          <ContextMenuPrimitive.Item
            className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-300 rounded-lg hover:bg-accent-cyan/10 hover:text-accent-cyan outline-hidden cursor-pointer"
          >
            <Sun className="w-4 h-4" />
            Toggle Theme
          </ContextMenuPrimitive.Item>

          <ContextMenuPrimitive.Separator className="h-px bg-white/5 my-1" />

          <div className="px-3 py-2 text-[10px] uppercase tracking-widest text-zinc-600 font-bold">
            Portfolio v1.0
          </div>
        </ContextMenuPrimitive.Content>
      </ContextMenuPrimitive.Portal>
    </ContextMenuPrimitive.Root>
  );
}
