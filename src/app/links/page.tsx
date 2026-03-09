"use client";

import Links from "@/components/Links";

export default function LinksPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0f] relative overflow-hidden">
            {/* Subtle grid background */}
            <div className="fixed inset-0 pointer-events-none opacity-40 z-0 bg-[linear-gradient(#1e1e2e_1px,transparent_1px),linear-gradient(90deg,#1e1e2e_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            {/* Radial glow behind content */}
            <div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse,rgba(124,106,247,0.07)_0%,transparent_70%)] pointer-events-none z-0"></div>

            <Links />
        </main>
    );
}
