"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { ContextMenuWrapper } from "./context-menu-wrapper";

const Sidebar = dynamic(() => import("./sidebar").then((mod) => mod.Sidebar), {
  ssr: false,
});

export function RootLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <ContextMenuWrapper onOpenSidebar={() => setIsSidebarOpen(true)}>
      <Navbar onMenuClick={() => setIsSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </ContextMenuWrapper>
  );
}
