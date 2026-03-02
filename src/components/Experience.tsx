"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        title: "AI Security Engineer Intern",
        company: "Avaly.ai",
        period: "Jun 2025 to Aug 2025",
        description: [
            "Architected and prototyped an LLM-powered AI Audit Agent that operationalized 227 mapped controls across NIST AI RMF and ISO/IEC 42001, standardizing AI vendor self-assessments and reducing manual audit effort by ~20%.",
            "Designed a comprehensive AI Security Vendor Self-Assessment framework spanning 7 trustworthiness domains, enabling structured evidence validation, control traceability, and maturity-based scoring across simulated GenAI deployment scenarios.",
            "Conducted AI threat modeling and risk assessments for LLM-powered applications, mapping emerging threats (prompt injection, model inversion, data leakage, misuse) to NIST AI RMF mitigation strategies.",
            "Contributed to AI-focused tabletop exercises and incident simulations to enhance organizational preparedness for model abuse and AI system failures.",
        ],
    },
    {
        title: "Cybersecurity Analyst",
        company: "KPMG India",
        period: "Jul 2023 to Jul 2024",
        description: [
            "Led cybersecurity maturity and compliance assessments across 7 RBI/SEBI-regulated financial institutions (4 large banks, 2 mid-size banks, 1 early-stage institution), evaluating 70+ controls per engagement. Identified 80+ control gaps at a large bank, supporting remediation that elevated maturity from 2.5 to 3.8.",
            "Drafted 5 enterprise security policies and SOPs (Asset Management, Change Management, BCP/DR, Security Awareness, Tabletop Exercises); owned Asset Management workstream end-to-end improving control effectiveness by ~30%. Presented findings to CISOs and senior leadership across 7 to 10 stakeholder sessions per engagement.",
            "Assessed IAM configurations, SIEM platforms (QRadar), GRC workflows (RSA Archer), and cloud security controls across AWS, Azure, and GCP to evaluate detection coverage and enterprise control maturity.",
        ],
    },
    {
        title: "Cybersecurity Intern",
        company: "KPMG India",
        period: "Jan 2023 to Jul 2023",
        description: [
            "Supported regulatory cybersecurity audits by performing control walkthroughs, evidence validation, and compliance documentation reviews across financial sector clients.",
            "Assisted in policy drafting and ISO 27001/NIST CSF alignment activities, contributing to improved audit preparedness and governance documentation quality.",
            "Gained exposure to end-to-end engagement execution prior to transition into full workstream ownership as Analyst.",
        ],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-[#050505] relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 mono-font">
                        Professional <span className="text-neon-green">Timeline</span>
                    </h2>
                    <div className="w-20 h-1 bg-neon-green mx-auto"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-white/10"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className={`relative flex items-center justify-between w-full ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                <div className="hidden md:block w-5/12"></div>

                                {/* Dot */}
                                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-neon-green border-4 border-background z-20 shadow-[0_0_10px_#00FF41]"></div>

                                <div className="w-full md:w-5/12 ml-8 md:ml-0 bg-white/5 p-6 rounded-lg border border-white/10 hover:border-neon-green/50 transition-colors group">
                                    <span className="text-neon-green font-bold text-sm mono-font block mb-1">
                                        {exp.period}
                                    </span>
                                    <h3 className="text-xl font-bold text-white group-hover:text-neon-green transition-colors">
                                        {exp.title}
                                    </h3>
                                    <p className="text-cyber-purple font-medium mb-4">{exp.company}</p>
                                    <ul className="space-y-4">
                                        {exp.description.map((desc, i) => (
                                            <li key={i} className="flex items-start text-sm text-foreground/70 leading-relaxed text-left">
                                                <span className="text-neon-green mr-2 mt-1 shrink-0">▹</span>
                                                <span className="flex-1">{desc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
