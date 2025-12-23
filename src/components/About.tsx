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
                            "My journey didn't start in AI—it started in the structured world of Governance, Risk, and Compliance (GRC). At KPMG, I spent over a year navigating the complexities of ISO 27001 and NIST CSF, helping banking institutions close control gaps and manage enterprise risk."
                        </p>
                        <p className="text-lg text-foreground/80 leading-relaxed">
                            But the turning point came during my internship as an AI Security Engineer at Avaly.AI. While building automated audit agents, I saw firsthand how traditional security policies struggled to keep pace with Generative AI. I became fascinated by the challenge of securing these unpredictable systems.
                        </p>
                        <p className="text-lg text-foreground/80 leading-relaxed font-medium">
                            That spark became my mission: <span className="text-neon-green">bridging the gap between rigorous GRC standards and fast-paced AI innovation.</span> I am now dedicating my Master's thesis to developing an 'AI Security Compliance and Risk Assessment Framework for Large Language Model Systems', ensuring that the future of AI is not just powerful, but secure.
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
                                1.7+ years at KPMG and Avaly.AI in AI Security & GRC.
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
