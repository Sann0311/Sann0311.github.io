"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
    {
        label: "Resume",
        sub: "saniyabhaladhare.me/resume.pdf",
        href: "/resume.pdf",
        icon: "📄",
    },
    {
        label: "LinkedIn",
        sub: "linkedin.com/in/saniyb",
        href: "https://linkedin.com/in/saniyb",
        icon: "in",
    },
    {
        label: "Portfolio",
        sub: "saniyabhaladhare.me",
        href: "https://saniyabhaladhare.me",
        icon: "◈",
    },
    {
        label: "GitHub",
        sub: "github.com/Sann0311",
        href: "https://github.com/Sann0311",
        icon: "⌥",
    },
    {
        label: "Medium",
        sub: "AI security · GRC · LLM threat modeling",
        href: "https://medium.com/@saniyabhaladhare",
        icon: "✦",
    },
];

const Links = () => {
    return (
        <section id="links" className="relative z-10 py-12 flex flex-col items-center justify-center min-h-[60vh] px-5">
            <style jsx>{`
        .link-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          background: #111118;
          border: 1px solid #1e1e2e;
          border-radius: 6px;
          text-decoration: none;
          color: #e8e8f0;
          transition: border-color 0.2s, background 0.2s, transform 0.15s;
          position: relative;
          overflow: hidden;
          width: 100%;
          max-width: 420px;
          margin-bottom: 10px;
        }

        .link-card::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 2px;
          background: #7c6af7;
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.2s ease;
        }

        .link-card:hover {
          border-color: #3a3a5c;
          background: rgba(124, 106, 247, 0.04);
          transform: translateX(3px);
        }

        .link-card:hover::before { transform: scaleY(1); }

        .link-icon {
          width: 36px;
          height: 36px;
          border-radius: 4px;
          border: 1px solid #1e1e2e;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 15px;
          background: #0a0a0f;
        }

        .link-text { flex: 1; }

        .link-label {
          font-size: 13px;
          font-weight: 500;
          color: #e8e8f0;
          display: block;
          margin-bottom: 2px;
        }

        .link-sub {
          font-size: 10px;
          color: #7a7a9a;
          letter-spacing: 0.05em;
        }

        .link-arrow {
          font-size: 11px;
          color: #3a3a5c;
          transition: color 0.2s, transform 0.2s;
        }

        .link-card:hover .link-arrow {
          color: #7c6af7;
          transform: translateX(2px);
        }
      `}</style>

            <motion.header
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center mb-10"
            >
                <div className="w-[72px] h-[72px] rounded-full border-[1.5px] border-[#3a3a5c] flex items-center justify-center mx-auto mb-5 relative bg-[#111118]">
                    <div className="absolute inset-[-4px] rounded-full border border-transparent bg-gradient-to-br from-[#7c6af7] to-[#4af0a0] [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] [mask-composite:exclude]"></div>
                    <span className="font-['Fraunces'] text-[22px] font-light text-[#e8e8f0] tracking-[0.02em]">SB</span>
                </div>
                <h2 className="font-['Fraunces'] text-[28px] font-light tracking-[-0.01em] text-[#e8e8f0] mb-1.5">Saniya Bhaladhare</h2>
                <p className="text-[11px] tracking-[0.18em] uppercase text-[#7a7a9a] mb-3.5">Cybersecurity Engineer &nbsp;·&nbsp; M.S. UW Bothell &rsquo;26</p>
                <div className="flex gap-2 justify-center flex-wrap">
                    <span className="text-[10px] tracking-[0.1em] uppercase px-2.5 py-1 rounded-[3px] border border-[rgba(124,106,247,0.3)] text-[#7c6af7] bg-[rgba(124,106,247,0.08)]">AI Security</span>
                    <span className="text-[10px] tracking-[0.1em] uppercase px-2.5 py-1 rounded-[3px] border border-[rgba(124,106,247,0.3)] text-[#7c6af7] bg-[rgba(124,106,247,0.08)]">GRC</span>
                    <span className="text-[10px] tracking-[0.1em] uppercase px-2.5 py-1 rounded-[3px] border border-[rgba(74,240,160,0.2)] text-[#4af0a0] bg-[rgba(74,240,160,0.06)]">Open to Work · May 2026</span>
                </div>
            </motion.header>

            <nav className="w-full max-w-[420px] flex flex-col gap-2.5" aria-label="Profile links">
                {links.map((link, index) => (
                    <motion.a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener"
                        className="link-card"
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: index * 0.08 }}
                    >
                        <div className="link-icon">{link.icon}</div>
                        <div className="link-text">
                            <span className="link-label">{link.label}</span>
                            <span className="link-sub">{link.sub}</span>
                        </div>
                        <span className="link-arrow">→</span>
                    </motion.a>
                ))}
            </nav>

            <motion.footer
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.55 }}
                className="mt-9 text-center"
            >
                <p className="inline-flex items-center gap-[7px] text-[11px] text-[#7a7a9a] tracking-[0.08em]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4af0a0] shadow-[0_0_6px_#4af0a0] animate-pulse"></span>
                    Available for full-time roles · F-1 OPT eligible
                </p>
                <p className="mt-2.5 text-[10px] text-[#3a3a5c] tracking-[0.06em]">saniyabhaladhare.me/links</p>
            </motion.footer>
        </section>
    );
};

export default Links;
