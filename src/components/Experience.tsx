"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        title: "AI Security Engineer Intern",
        company: "Avaly.AI",
        period: "Jun 2025 - Aug 2025",
        description: [
            "Designed secure LLM-based audit agent using Dockerized FastAPI.",
            <>Reduced manual evidence processing by <span className="text-neon-green font-bold">60%</span> aligned with NIST AI RMF.</>,
            <>Achieved <span className="text-neon-green font-bold">98% detection rate</span> for security anomalies in automated audit workflows.</>,
        ],
    },
    {
        title: "Cybersecurity Analyst",
        company: "KPMG India",
        period: "Jul 2023 - Jul 2024",
        description: [
            <>Led CSMA assessments for 4 banking institutions; identified <span className="text-neon-green font-bold">80+ control gaps</span>.</>,
            "Maintained security control checklists for AWS, Azure, and GCP.",
        ],
    },
    {
        title: "Cybersecurity Intern",
        company: "KPMG India",
        period: "Jan 2023 - Jul 2023",
        description: [
            "Validated SOC tool network architecture and supported policy development.",
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
