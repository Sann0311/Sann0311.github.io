import type { Metadata } from "next";
import React from "react";
import { Geist, Geist_Mono, DM_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Saniya Bhaladhare | AI Security Engineer",
  description: "Portfolio of Saniya Bhaladhare - AI Security Engineer specializing in AI Security & Governance, GRC, and Cloud Security.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmMono.variable} ${fraunces.variable} antialiased selection:bg-neon-green/30 selection:text-neon-green`}
      >
        <Navbar />
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
