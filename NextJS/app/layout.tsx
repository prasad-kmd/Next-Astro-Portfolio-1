import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { CustomContextMenu } from "@/components/CustomContextMenu";
import { PageTransition } from "@/components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Portfolio | Next.js",
  description: "A modern, compact portfolio with rich interactive components.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-screen bg-background text-foreground flex overflow-x-hidden">
        <CustomContextMenu>
          <div className="flex w-full">
            <Sidebar />
            <div className="flex flex-col flex-1 min-h-screen ml-16 md:ml-16 transition-all duration-300">
              <Navbar />
              <main className="flex-1 flex flex-col">
                <PageTransition>{children}</PageTransition>
              </main>
              <Footer />
            </div>
          </div>
        </CustomContextMenu>
      </body>
    </html>
  );
}
