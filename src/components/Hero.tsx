"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronRight, X, Download } from "lucide-react";

import MatrixBackground from "./MatrixBackground";

const phrases = [
    "AI Security & Governance",
    "Automating Compliance (NIST/ISO)",
    "Cloud Security & Risk Management",
];

const Hero = () => {
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(100);
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentPhrase = phrases[index];

            if (!isDeleting) {
                setDisplayText(currentPhrase.substring(0, displayText.length + 1));
                setTypingSpeed(100);

                if (displayText === currentPhrase) {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                setDisplayText(currentPhrase.substring(0, displayText.length - 1));
                setTypingSpeed(50);

                if (displayText === "") {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % phrases.length);
                }
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, index, isDeleting, typingSpeed]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <MatrixBackground />

            {/* Background Grid (Subtle Overlay) */}
            <div className="absolute inset-0 z-[1] opacity-5 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>

            <div className="container mx-auto px-4 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Recruitment Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="inline-flex items-center px-4 py-1.5 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm group hover:border-neon-green/50 transition-colors"
                    >
                        <span className="relative flex h-2 w-2 mr-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green"></span>
                        </span>
                        <span className="text-[10px] md:text-xs uppercase mono-font tracking-[0.2em] text-foreground/60 group-hover:text-neon-green transition-colors">
                            Actively Seeking Full-Time Opportunities
                        </span>
                    </motion.div>

                    <h1 className="text-4xl md:text-7xl font-bold mb-6">
                        Hi, I&apos;m <span className="text-neon-green neon-glow">Saniya Bhaladhare</span>
                    </h1>

                    <div className="text-xl md:text-3xl font-medium mb-12 h-12 flex items-center justify-center">
                        <span className="text-foreground/80">I am a Cybersecurity Engineer specializing in&nbsp;</span>
                        <span className="text-cyber-purple purple-glow mono-font border-r-2 border-cyber-purple px-1">
                            {displayText}
                        </span>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <button
                                onClick={() => setIsResumeOpen(true)}
                                className="group flex items-center px-8 py-4 bg-transparent border-2 border-neon-green text-neon-green font-bold text-lg rounded hover:bg-neon-green/10 transition-all shadow-[0_0_15px_rgba(0,255,65,0.1)] hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]"
                            >
                                View Resume <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link
                                href="#contact"
                                className="flex items-center px-8 py-4 bg-neon-green text-background border-2 border-neon-green font-bold text-lg rounded shadow-[0_0_25px_rgba(0,255,65,0.4)] hover:shadow-[0_0_40px_rgba(0,255,65,0.6)] transition-all"
                            >
                                Contact Me
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Resume Modal */}
            <AnimatePresence>
                {isResumeOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsResumeOpen(false)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-md"
                        ></motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 50, rotateX: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 50, rotateX: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-5xl h-[90vh] bg-[#0a0a0a] border border-neon-green/30 rounded-2xl shadow-[0_0_50px_rgba(0,255,65,0.15)] flex flex-col overflow-hidden"
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/40 backdrop-blur-md z-10">
                                <div className="flex items-center space-x-3">
                                    <button
                                        onClick={() => setIsResumeOpen(false)}
                                        className="group relative w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 transition-colors shadow-inner flex items-center justify-center"
                                        title="Close"
                                    >
                                        <X size={8} className="text-black/60 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={4} />
                                    </button>
                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e] opacity-50"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#27c93f] opacity-50"></div>
                                    <span className="ml-4 text-xs mono-font text-foreground/40 uppercase tracking-widest hidden md:block">
                                        SaniyaBhaladhare_Resume.pdf
                                    </span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <a
                                        href="/SaniyaBhaladhare_Resume.pdf"
                                        download
                                        className="p-2 hover:bg-white/5 rounded-lg text-foreground/60 hover:text-neon-green transition-all group"
                                        title="Download PDF"
                                    >
                                        <Download size={20} />
                                    </a>
                                </div>
                            </div>

                            {/* PDF Loader/Viewer */}
                            <div className="flex-1 bg-[#111] relative">
                                <iframe
                                    src="/SaniyaBhaladhare_Resume.pdf#toolbar=0"
                                    className="w-full h-full border-none"
                                    title="Saniya Bhaladhare Resume"
                                ></iframe>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Hero;
