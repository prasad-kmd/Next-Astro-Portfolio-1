"use client";

import { useState } from "react";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";
import { Footer } from "./footer";
import { ContextMenuWrapper } from "./context-menu-wrapper";

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
