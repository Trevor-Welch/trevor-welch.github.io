// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@/lib/analytics";

import GrainOverlay from "@/components/GrainOverlay/GrainOverlay";
import Header from '@/components/Header/Header'; 
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Trevor Welch – WordPress & React Web Developer",
  description: "Freelance web developer in Raleigh, NC. Trevor Welch creates responsive, SEO-friendly websites for small businesses and startups.",
  authors: [{ name: "Trevor Welch" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
        <Header />
        <div id="page-body">
          {children}
        </div>
        
        <Footer />
        
        <Analytics />
        <GrainOverlay />
      </body>
    </html>
  );
}
