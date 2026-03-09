"use client";

import Links from "@/components/Links";

export default function LinksPage() {
    return (
        <main className="min-h-screen bg-[#030303] relative overflow-hidden selection:bg-[#7c6af7]/30">
            {/* Base Grid */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            </div>

            {/* Ambient Background Glows */}
            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#7c6af7]/10 blur-[120px] rounded-full opacity-30"></div>
                <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-[#4af0a0]/10 blur-[120px] rounded-full opacity-20"></div>
            </div>

            <Links />
        </main>
    );
}
