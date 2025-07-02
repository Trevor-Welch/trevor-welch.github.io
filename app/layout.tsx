import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GrainOverlay from "./components/GrainOverlay/GrainOverlay";
import Header from './components/Header/Header'; 
import Footer from "./components/Footer/Footer";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trevor Welch – WordPress & React Web Developer",
  description: "Freelance web developer in Raleigh, NC. Trevor Welch creates responsive, SEO-friendly websites for small businesses and startups."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
          <filter id="splotchyEffect" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="4" result="turb" />
            <feDisplacementMap in="SourceGraphic" in2="turb" scale="4" xChannelSelector="R" yChannelSelector="G" edgeMode="duplicate"/>

            <feComponentTransfer color-interpolation-filters="sRGB">
              <feFuncR type="discrete" tableValues="0.235 0.35 0.5 0.65 0.784" />
  <feFuncG type="discrete" tableValues="0.225 0.33 0.5 0.63 0.761" />
  <feFuncB type="discrete" tableValues="0.195 0.3 0.5 0.6 0.678" />

            </feComponentTransfer>
          </filter>
        </svg>
        </div>
        <GrainOverlay />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
