"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Trophy, ExternalLink, ShieldCheck, Zap, Globe } from "lucide-react";

const certifications = [
    {
        title: "CompTIA Security+",
        issuer: "CompTIA",
        icon: ShieldCheck,
        color: "#10b981",
        link: "/CompTIA_Security_Plus.pdf",
    },
    {
        title: "AWS Certified AI Practitioner",
        issuer: "Amazon Web Services",
        icon: Zap,
        color: "#fbbf24",
        status: "In-Progress",
        link: "#",
    },
    {
        title: "Multi-Cloud Red Team Analyst",
        issuer: "Cyberwarfare Labs",
        icon: Award,
        color: "#ef4444",
        link: "/Saniya_Bhaladhare_MCRTA.pdf",
    },
    {
        title: "Network Defense Essentials",
        issuer: "EC-Council CodeRed",
        icon: Globe,
        color: "#8b5cf6",
        link: "#",
    },
    {
        title: "Ethical Hacking Essentials",
        issuer: "EC-Council CodeRed",
        icon: Award,
        color: "#8b5cf6",
        link: "#",
    },
    {
        title: "Dark Web Series",
        issuer: "EC-Council CodeRed",
        icon: Zap,
        color: "#8b5cf6",
        link: "#",
    },
];

const achievements = [
    {
        title: "CTF Winner at UWB GreyHats",
        description: "Successfully solved complex challenges across OSINT, cryptography, web-exploitation, and reverse-engineering categories.",
        icon: Trophy,
    },
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-24 bg-background px-4">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 mono-font">
                        Certifications & <span className="text-neon-green">Awards</span>
                    </h2>
                    <div className="w-20 h-1 bg-neon-green mx-auto mb-8"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {certifications.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="cyber-card p-6 rounded-xl flex items-start space-x-4 group"
                        >
                            <div
                                className="p-3 rounded-lg bg-opacity-10 group-hover:bg-opacity-20 transition-all"
                                style={{ backgroundColor: `${cert.color}1a`, color: cert.color }}
                            >
                                <cert.icon size={28} />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-sm mb-1 group-hover:text-neon-green transition-colors">
                                        {cert.title}
                                    </h3>
                                    {cert.link !== "#" && (
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/30 hover:text-neon-green transition-colors"
                                        >
                                            <ExternalLink size={16} />
                                        </a>
                                    )}
                                </div>
                                <p className="text-xs text-foreground/50 mono-font">{cert.issuer}</p>
                                {cert.status && (
                                    <span className="inline-block mt-2 px-2 py-0.5 bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-[10px] rounded uppercase font-bold tracking-wider">
                                        {cert.status}
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto">
                    <h3 className="text-xl font-bold mb-8 mono-font flex items-center">
                        <span className="text-neon-green mr-2">$</span> Notable Achievements
                    </h3>
                    <div className="space-y-4">
                        {achievements.map((ach, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-cyber-purple/30 transition-all group"
                            >
                                <div className="p-4 bg-cyber-purple/10 text-cyber-purple rounded-full mr-6 group-hover:bg-cyber-purple group-hover:text-background transition-all">
                                    <ach.icon size={32} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1 group-hover:text-cyber-purple transition-colors">{ach.title}</h4>
                                    <p className="text-sm text-foreground/60">{ach.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
