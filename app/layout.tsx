import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Orion Nebula",
    template: "%s | Orion Nebula",
  },
  description: "Orion Nebula is an IT company that builds games and digital products, with design and marketing strategy.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Suspense fallback={<div className="navbar" style={{ height: 66 }} />}>
          <Navbar />
        </Suspense>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
