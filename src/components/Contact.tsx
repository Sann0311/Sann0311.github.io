"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, ExternalLink, Calendar } from "lucide-react";

const Contact = () => {
    const contactInfo = [
        {
            icon: Mail,
            label: "Email",
            value: "saniyabhaladhare@gmail.com",
            href: "mailto:saniyabhaladhare@gmail.com",
        },
        {
            icon: MapPin,
            label: "Location",
            value: "Seattle, WA",
            href: "#",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "linkedin.com/in/saniyb",
            href: "https://linkedin.com/in/saniyb",
        },
        {
            icon: Github,
            label: "GitHub",
            value: "github.com/Sann0311",
            href: "https://github.com/Sann0311",
        },
    ];

    return (
        <section id="contact" className="py-24 bg-background relative px-4">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 mono-font">
                        Get In <span className="text-neon-green">Touch</span>
                    </h2>
                    <div className="w-20 h-1 bg-neon-green mx-auto mb-8"></div>
                    <p className="text-foreground/60 max-w-xl mx-auto">
                        I&apos;m currently actively job searching for Cybersecurity and AI Security roles. Let&apos;s connect!
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Info Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <div className="space-y-6">
                                {contactInfo.map((info, idx) => (
                                    <a
                                        key={idx}
                                        href={info.href}
                                        target={info.href.startsWith("http") ? "_blank" : "_self"}
                                        className="flex items-center p-4 cyber-card rounded-xl group hover:border-neon-green transition-all"
                                    >
                                        <div className="p-3 bg-neon-green/10 rounded-lg text-neon-green mr-4 group-hover:bg-neon-green group-hover:text-background transition-all">
                                            <info.icon size={24} />
                                        </div>
                                        <div>
                                            <span className="text-xs text-foreground/40 block uppercase mono-font tracking-widest">{info.label}</span>
                                            <span className="text-sm font-semibold group-hover:text-neon-green transition-colors">{info.value}</span>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href="https://calendly.com/saniyabhaladhare/30min"
                                target="_blank"
                                className="flex items-center justify-between p-6 bg-neon-green text-background rounded-xl font-bold shadow-[0_0_20px_rgba(0,255,65,0.3)] group overflow-hidden relative"
                            >
                                <div className="z-10 flex items-center">
                                    <Calendar className="mr-3" />
                                    <span>Book a call - I&apos;m actively job searching</span>
                                </div>
                                <ExternalLink size={20} className="z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />

                                {/* Decorative pulse */}
                                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700"></span>
                            </motion.a>
                        </motion.div>

                        {/* Chatbot Column (Visual Representation or CTA) */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="cyber-card p-8 rounded-2xl border-dashed border-white/20 flex flex-col items-center justify-center text-center space-y-6"
                        >
                            <div className="w-20 h-20 bg-cyber-purple/10 rounded-full flex items-center justify-center text-cyber-purple border border-cyber-purple/20">
                                <Mail size={40} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2 mono-font">Chat With My Assistant</h3>
                                <p className="text-sm text-foreground/60 leading-relaxed">
                                    Have specific questions about my NIST AI RMF experience or GRC skills? Use the chat widget in the bottom right for instant answers.
                                </p>
                            </div>
                            <div className="flex items-center space-x-2 text-neon-green text-sm mono-font animate-bounce">
                                <span>Try it out</span>
                                <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Contact;
