"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, Info } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "InboxGuard - Phishing Email Analysis Tool",
        tech: ["Python", "AI Detection", "Scikit-Learn"],
        summary: "Built a system flagging AI-generated spoofing/URLs. Achieved 98% detection on 10K+ emails.",
        details: "InboxGuard is a comprehensive security tool designed to detect and mitigate phishing attempts in real-time. Using advanced machine learning models, it analyzes email headers, content body, and embedded URLs to identify spoofing and malicious intent. The system achieved a high precision rate, significantly reducing the impact of spoofing attacks on enterprise networks.",
        github: "https://github.com/Sann0311",
        demo: "#",
    },
    {
        id: 2,
        title: "Keylogger Malware Simulation",
        tech: ["Python", "Cybersecurity", "Malware Analysis"],
        summary: "Simulated malware TTPs, anti-forensics, and persistence features to test system resilience.",
        details: "This project involved the development of a controlled keylogger simulation to understand how malware maintains persistence and evades detection. It includes features like anti-forensics (binary obfuscation), registry persistence, and encrypted C2 communication. The simulation helped in identifying gaps in current EDR solutions and improving host-based security controls.",
        github: "https://github.com/Sann0311",
        demo: "#",
    },
    {
        id: 3,
        title: "WiCyS UW Bothell Leadership",
        tech: ["Leadership", "Social Engineering Awareness", "Team Management"],
        summary: "Led 8-member team, hosted hackathon for 80+ students as President.",
        details: "As the President of WiCyS (Women in Cybersecurity) at UW Bothell, I led a team of 8 to organize technical workshops, industry networking events, and an annual hackathon. Under my leadership, we grew the chapter membership by 40% and successfully hosted a 24-hour hackathon with 80+ participants, focusing on diversity and inclusion in cybersecurity.",
        github: "#",
        demo: "#",
    },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <section id="projects" className="py-24 bg-background px-4">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 mono-font">
                        Featured <span className="text-neon-green">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-neon-green mx-auto mb-8"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="cyber-card p-6 rounded-xl cursor-pointer flex flex-col justify-between group"
                            onClick={() => setSelectedProject(project)}
                        >
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-neon-green/10 rounded-lg text-neon-green">
                                        <Info size={24} />
                                    </div>
                                    <div className="flex space-x-2">
                                        <Github size={20} className="text-foreground/40 hover:text-neon-green transition-colors" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-neon-green transition-colors mono-font">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-foreground/60 mb-4 line-clamp-3">
                                    {project.summary}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.tech.map((t) => (
                                    <span key={t} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] mono-font text-cyber-purple">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        ></motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-[#111] border border-neon-green/30 w-full max-w-2xl rounded-2xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
                        >
                            {/* Decorative accent */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-green to-cyber-purple"></div>

                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 text-foreground/40 hover:text-neon-green transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="mb-6">
                                <span className="text-neon-green mono-font text-xs tracking-tighter mb-2 block uppercase">Project Breakdown</span>
                                <h3 className="text-2xl md:text-3xl font-bold mono-font">{selectedProject.title}</h3>
                            </div>

                            <div className="space-y-6">
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.tech.map((t) => (
                                        <span key={t} className="px-3 py-1 bg-neon-green/5 border border-neon-green/20 rounded-full text-xs mono-font text-neon-green">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-foreground/80 leading-relaxed">
                                    {selectedProject.details}
                                </p>

                                <div className="flex space-x-4 pt-4">
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        className="flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-neon-green/10 hover:border-neon-green transition-all"
                                    >
                                        <Github size={20} className="mr-2" /> GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
