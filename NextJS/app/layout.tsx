import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { RootLayoutWrapper } from "@/components/layout/root-layout-wrapper";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Modern Portfolio | Senior Software Engineer",
    template: "%s | Modern Portfolio",
  },
  description: "A visually sophisticated portfolio showcasing high-performance web experiences built with Next.js and Astro.",
  keywords: ["Software Engineer", "Full Stack Developer", "Next.js", "Astro", "Tailwind CSS", "React"],
  authors: [{ name: "Modern Portfolio" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.com",
    siteName: "Modern Portfolio",
    title: "Modern Portfolio | Senior Software Engineer",
    description: "Building digital experiences that combine performance with sophisticated design aesthetics.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Modern Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Portfolio | Senior Software Engineer",
    description: "Building digital experiences that combine performance with sophisticated design aesthetics.",
    images: ["/og-image.jpg"],
    creator: "@portfolio",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <RootLayoutWrapper>
              {children}
            </RootLayoutWrapper>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
