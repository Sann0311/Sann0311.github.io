"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, ShieldCheck, Cpu } from "lucide-react";

const About = () => {
    return (
        <section id="about" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 mono-font">
                        <span className="text-neon-green">{"> "}</span>About Me
                    </h2>
                    <div className="w-20 h-1 bg-neon-green mx-auto mb-8"></div>
                </motion.div>

                <div className="grid md:grid-rows-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <p className="text-lg text-foreground/80 leading-relaxed italic border-l-4 border-neon-green pl-6 py-2 bg-neon-green/5">
                            "My journey into cybersecurity started in the structured world of Governance, Risk, and Compliance. At KPMG India, I spent over a year working across 7 RBI/SEBI-regulated financial institutions — running maturity assessments, closing control gaps, drafting enterprise security policies, and sitting across the table from CISOs to walk through remediation roadmaps. That work gave me a deep understanding of how adversaries think, how organizations fail, and how controls either hold or collapse under pressure."
                        </p>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            But something shifted when AI systems started showing up in enterprise environments. Traditional security policies were not built for models that hallucinate, drift, or get manipulated through prompt injection. That gap became an obsession — and it pushed me toward the technical side of security in a way compliance work alone never could.
                        </p>
                        <p className="text-lg text-foreground/80 leading-relaxed text-left">
                            At Avaly.ai, I built LLM-powered audit agents, designed vendor self-assessment frameworks across 7 trustworthiness domains, and mapped 227 controls across NIST AI RMF and ISO/IEC 42001. Alongside that, I've built security tooling from scratch — a phishing detection system that flags AI-generated spoofing patterns, and a DevSecOps pipeline that automates SAST, SCA, and DAST scanning on every commit to catch vulnerabilities before they ship.
                        </p>
                        <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                            I care about how attacks actually work, how detection breaks down, and how security can be engineered into systems rather than bolted on afterward. I'm now formalizing that thinking into my Master's thesis at UW Bothell, building an AI Security Compliance Framework for LLM deployments. I'm looking for a team that operates at this intersection — where frameworks meet real threats, and where engineering and risk speak the same language."
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        <div className="cyber-card p-6 rounded-lg text-left">
                            <Terminal className="text-neon-green mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2 mono-font">Academic focus</h3>
                            <p className="text-sm text-foreground/60 leading-relaxed">
                                Cybersecurity Engineering at UW Bothell. Focus on AI RMF and Cloud Security.
                            </p>
                        </div>
                        <div className="cyber-card p-6 rounded-lg text-left">
                            <ShieldCheck className="text-cyber-purple mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2 mono-font">Industry Exp</h3>
                            <p className="text-sm text-foreground/60 leading-relaxed">
                                2+ years at KPMG and Avaly.AI in AI Security & GRC.
                            </p>
                        </div>
                        <div className="cyber-card p-6 rounded-lg text-left col-span-1 sm:col-span-2">
                            <Cpu className="text-cyber-blue mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2 mono-font">AI Security Mission</h3>
                            <p className="text-sm text-foreground/60 leading-relaxed">
                                Developing automated security agents that align with NIST AI RMF and ISO 27001 to scale secure AI adoption.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
