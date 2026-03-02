"use client";

import { motion } from "framer-motion";
import React from "react";

const skillCategories = [
    {
        title: "GRC & Compliance",
        focus: "Primary Focus",
        skills: ["NIST CSF", "ISO 27001", "SOC 2", "PCI DSS", "NIST RMF", "COBIT", "TPRM", "Vendor Risk"]
    },
    {
        title: "AI Security",
        focus: "Specialization",
        skills: ["NIST AI RMF", "ISO/IEC 42001", "OWASP LLM Top 10", "LLM Risk Assessment", "AI Threat Modeling"]
    },
    {
        title: "Security Operations",
        focus: "Core Skills",
        skills: ["Burp Suite", "Nessus", "Wireshark", "QRadar SIEM", "IAM", "Incident Response"]
    },
    {
        title: "Cloud & Development",
        skills: ["AWS", "Azure", "GCP", "Python", "FastAPI", "Docker"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-[#050505] relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 mono-font">
                        Technical <span className="text-neon-green">Arsenal</span>
                    </h2>
                    <div className="w-20 h-1 bg-neon-green mx-auto mb-8"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-neon-green/30 transition-all group"
                        >
                            <div className="mb-6">
                                <h3 className="text-xl font-bold mono-font flex items-center mb-2">
                                    <span className="text-neon-green mr-3">$</span> {category.title}
                                </h3>
                                {category.focus && (
                                    <span className="text-[10px] text-neon-green/60 uppercase tracking-widest font-semibold">
                                        {category.focus}
                                    </span>
                                )}
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm mono-font hover:border-neon-green/50 hover:text-neon-green transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-neon-green/5 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-cyber-purple/5 blur-[120px] rounded-full"></div>
        </section>
    );
};

export default Skills;
