"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    SiPython, SiDocker, SiGit, SiJira, SiLinux, SiGnubash,
    SiWireshark, SiBurpsuite, SiSplunk,
    SiGooglecloud, SiLangchain, SiOpenai
} from "react-icons/si";
import { Activity, ShieldCheck, Cpu, Binary, Cloud, Database, FileCode, CheckCircle2 } from "lucide-react";

const skillGroups = [
    {
        title: "GRC & Compliance",
        focus: "Primary Focus",
        frameworks: ["NIST CSF", "ISO 27001", "SOC 2", "TPRM"],
        skills: [
            { name: "ServiceNow", icon: Database, color: "#293335" },
            { name: "OneTrust", icon: ShieldCheck, color: "#00B5E2" },
            { name: "Archer", icon: CheckCircle2, color: "#0052CC" },
            { name: "Jira", icon: SiJira, color: "#0052CC" },
        ],
    },
    {
        title: "AI Security",
        focus: "Specialization",
        frameworks: ["NIST AI RMF", "OWASP LLM Top 10"],
        skills: [
            { name: "Security Copilot", icon: SiOpenai, color: "#74aa9c" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "LangChain", icon: Binary, color: "#ffffff" },
        ],
    },
    {
        title: "SecOps & Pentesting",
        focus: "Core Skills",
        skills: [
            { name: "Burp Suite", icon: SiBurpsuite, color: "#FF6633" },
            { name: "Wireshark", icon: SiWireshark, color: "#1679A7" },
            { name: "Nessus", icon: Activity, color: "#00A3E0" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Splunk", icon: SiSplunk, color: "#ED1C24" },
        ],
        clouds: [
            { name: "AWS", icon: Cloud, color: "#FF9900" },
            { name: "Azure", icon: Cloud, color: "#0078D4" },
            { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
        ]
    },
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

                <div className="space-y-20">
                    {skillGroups.map((group, groupIdx) => (
                        <motion.div
                            key={groupIdx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: groupIdx * 0.1 }}
                        >
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-white/10">
                                <div>
                                    <h3 className="text-2xl font-bold mono-font flex items-center">
                                        <span className="text-neon-green mr-3">$</span> {group.title}
                                    </h3>
                                    <span className="text-xs text-neon-green/60 uppercase tracking-widest mt-1 block font-semibold">{group.focus}</span>
                                </div>
                                {group.frameworks && (
                                    <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                                        {group.frameworks.map((fw) => (
                                            <span key={fw} className="px-3 py-1 bg-neon-green/5 border border-neon-green/20 rounded-full text-[10px] mono-font text-neon-green">
                                                {fw}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                {group.skills.map((skill, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className="flex flex-col items-center p-6 cyber-card rounded-xl group"
                                    >
                                        <skill.icon
                                            size={40}
                                            className="mb-4 transition-all duration-300 grayscale group-hover:grayscale-0"
                                            style={{ color: skill.color }}
                                        />
                                        <span className="text-xs mono-font font-medium text-center">{skill.name}</span>
                                    </motion.div>
                                ))}
                                {group.clouds?.map((cloud, idx) => (
                                    <motion.div
                                        key={`cloud-${idx}`}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className="flex flex-col items-center p-6 cyber-card rounded-xl group border-cyber-purple/20"
                                    >
                                        <cloud.icon
                                            size={40}
                                            className="mb-4 transition-all duration-300 grayscale group-hover:grayscale-0"
                                            style={{ color: cloud.color }}
                                        />
                                        <span className="text-xs mono-font font-medium text-center">{cloud.name}</span>
                                    </motion.div>
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
