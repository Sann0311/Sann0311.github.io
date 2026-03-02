"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Calendar, Award } from "lucide-react";

const Leadership = () => {
    return (
        <section id="leadership" className="py-24 bg-[#050505] relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 mono-font">
                        Community <span className="text-neon-green">Leadership</span>
                    </h2>
                    <div className="w-20 h-1 bg-neon-green mx-auto mb-8"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="cyber-card p-8 rounded-2xl border border-neon-green/20 bg-neon-green/5 hover:border-neon-green/40 transition-all group"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-white group-hover:text-neon-green transition-colors mono-font">
                                    President, Women in Cybersecurity (WiCyS)
                                </h3>
                                <p className="text-cyber-purple font-medium text-lg">UW Bothell Student Chapter</p>
                            </div>
                            <div className="mt-2 md:mt-0 px-4 py-1 bg-white/5 border border-white/10 rounded-full text-xs mono-font text-foreground/60">
                                Aug 2025 to Present
                            </div>
                        </div>

                        <p className="text-foreground/80 leading-relaxed mb-8 text-lg">
                            Leading an 8-member team to host hackathons and events for 80+ students, fostering cybersecurity education and community across the university.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-neon-green/10 rounded-lg text-neon-green">
                                    <Users size={20} />
                                </div>
                                <span className="text-sm font-medium">8-Member Team</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-cyber-purple/10 rounded-lg text-cyber-purple">
                                    <Calendar size={20} />
                                </div>
                                <span className="text-sm font-medium">Hackathons & Events</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="p-2 bg-cyber-blue/10 rounded-lg text-cyber-blue">
                                    <Award size={20} />
                                </div>
                                <span className="text-sm font-medium">80+ Students Impacted</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Leadership;
