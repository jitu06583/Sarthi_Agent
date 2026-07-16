import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { AuthProvider } from "@/components/AuthProvider";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = Instrument_Sans({ subsets: ["latin"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "SARTHI Agent — Knows You. Grow With You.",
  description:
    "SARTHI is a self-improving AI agent that learns your world — it creates skills from experience, remembers you across sessions, and runs anywhere: terminal, desktop, or your favorite messaging app.",
  openGraph: {
    title: "SARTHI Agent",
    description: "The self-improving AI agent. Knows You. Grow With You.",
    images: ["/brand/banner.png"],
  },
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="paper-bg font-body antialiased">
        <AuthProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
