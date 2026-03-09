"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    FileText,
    Linkedin,
    Github,
    Globe,
    BookOpen,
    ExternalLink,
    ArrowRight
} from "lucide-react";

const links = [
    {
        label: "Resume",
        sub: "Professional Experience & Education",
        href: "/SaniyaBhaladhare_Resume.pdf",
        icon: FileText,
        color: "#7c6af7"
    },
    {
        label: "LinkedIn",
        sub: "Professional Network & Portfolio",
        href: "https://linkedin.com/in/saniyb",
        icon: Linkedin,
        color: "#0077b5"
    },
    {
        label: "GitHub",
        sub: "Codebase & Technical Projects",
        href: "https://github.com/Sann0311",
        icon: Github,
        color: "#f0f6fc"
    },
    {
        label: "Medium",
        sub: "AI Security & GRC Articles",
        href: "https://medium.com/@saniyabhaladhare",
        icon: BookOpen,
        color: "#ffc017"
    },
    {
        label: "Portfolio",
        sub: "Personal Website & Project Showcase",
        href: "https://saniyabhaladhare.me",
        icon: Globe,
        color: "#4af0a0"
    },
];

const Links = () => {
    return (
        <section id="links" className="relative z-10 py-16 flex flex-col items-center justify-center min-h-screen px-6">
            <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
            >
                <div className="relative w-24 h-24 mx-auto mb-6 group">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#7c6af7] to-[#4af0a0] opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-500"></div>
                    <div className="relative w-full h-full rounded-full border border-white/10 bg-[#111118] flex items-center justify-center overflow-hidden">
                        <span className="font-['Fraunces'] text-3xl font-light text-white tracking-wider">SB</span>
                    </div>
                </div>

                <h1 className="font-['Fraunces'] text-4xl font-medium text-white mb-2 tracking-tight">
                    Saniya Bhaladhare
                </h1>
                <p className="text-sm tracking-[0.15em] uppercase text-[#7a7a9a] mb-6 font-medium">
                    Cybersecurity Engineer &nbsp;·&nbsp; MS UW Bothell &rsquo;26
                </p>

                <div className="flex gap-3 justify-center">
                    <span className="text-[10px] tracking-wider uppercase px-3 py-1 rounded-full border border-white/5 bg-white/5 text-[#7c6af7]">AI Security</span>
                    <span className="text-[10px] tracking-wider uppercase px-3 py-1 rounded-full border border-white/5 bg-white/5 text-[#4af0a0]">GRC</span>
                </div>
            </motion.header>

            <nav className="w-full max-w-md flex flex-col gap-4" aria-label="Social and professional links">
                {links.map((link, index) => {
                    const Icon = link.icon;
                    return (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300"
                        >
                            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300" style={{ color: link.color }}>
                                <Icon size={22} strokeWidth={1.5} />
                            </div>

                            <div className="flex-1">
                                <span className="block text-sm font-semibold text-white mb-0.5 group-hover:text-[#7c6af7] transition-colors">
                                    {link.label}
                                </span>
                                <span className="block text-xs text-[#7a7a9a]">
                                    {link.sub}
                                </span>
                            </div>

                            <div className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#7a7a9a]">
                                <ArrowRight size={18} />
                            </div>
                        </motion.a>
                    );
                })}
            </nav>

            <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-16 text-center"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02]">
                    <span className="w-2 h-2 rounded-full bg-[#4af0a0] animate-pulse"></span>
                    <span className="text-[11px] text-[#7a7a9a] font-medium tracking-wide">
                        Open to Roles Starting May 2026
                    </span>
                </div>
                <p className="mt-4 text-[10px] text-[#3a3a5c] tracking-widest uppercase">
                    saniyabhaladhare.me
                </p>
            </motion.footer>
        </section>
    );
};

export default Links;
