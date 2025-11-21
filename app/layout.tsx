import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: {
    default: "Rabbits Future Tech | Pioneering Tomorrow's Solutions",
    template: "%s | Rabbits Future Tech",
  },
  description: "We build cutting-edge software solutions that transform businesses. Specializing in AI, cloud architecture, and modern web development.",
  keywords: ["Software Development", "AI Solutions", "Cloud Architecture", "Web Development", "Enterprise Software", "Digital Transformation"],
  authors: [{ name: "Rabbits Future Tech" }],
  creator: "Rabbits Future Tech",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rabbitsfuturetech.com",
    title: "Rabbits Future Tech | Pioneering Tomorrow's Solutions",
    description: "We build cutting-edge software solutions that transform businesses. Specializing in AI, cloud architecture, and modern web development.",
    siteName: "Rabbits Future Tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rabbits Future Tech | Pioneering Tomorrow's Solutions",
    description: "We build cutting-edge software solutions that transform businesses. Specializing in AI, cloud architecture, and modern web development.",
    creator: "@rabbitsfuturetech",
  },
  metadataBase: new URL('https://rabbitsfuturetech.com'),
};

import { WhatsAppButton } from '@/components/ui/whatsapp-button'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-background text-foreground antialiased selection:bg-accent selection:text-accent-foreground`}>
        <Header />
        <main className="flex-1 relative">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
