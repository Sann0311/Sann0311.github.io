"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, X, User, Bot, AlertCircle } from "lucide-react";

type Message = {
    id: number;
    type: "user" | "bot";
    text: string;
    isForm?: boolean;
};

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            type: "bot",
            text: "Hello! I am Saniya's Portfolio Assistant. Ask me about her skills, experience, or education.",
        },
    ]);
    const [inputText, setInputText] = useState("");
    const [emailText, setEmailText] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const renderMessageText = (text: string) => {
        const parts = text.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, i) => {
            if (part.startsWith("**") && part.endsWith("**")) {
                return (
                    <strong key={i} className="text-neon-green font-bold">
                        {part.slice(2, -2)}
                    </strong>
                );
            }
            return part;
        });
    };

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        const userMsg: Message = { id: Date.now(), type: "user", text: inputText };
        setMessages((prev) => [...prev, userMsg]);
        setInputText("");

        // Bot logic
        setTimeout(() => {
            const lowerText = inputText.toLowerCase();
            let botResponse = "";
            let isForm = false;

            if (lowerText.includes("education") || lowerText.includes("degree") || lowerText.includes("study")) {
                botResponse = "Saniya is pursuing an MS in Cybersecurity Engineering at UW Bothell (3.7 GPA) and holds a B.Tech in IT.";
            } else if (lowerText.includes("skills") || lowerText.includes("tools") || lowerText.includes("proficient")) {
                botResponse = "Saniya's core strength is **Governance & Risk Management** (NIST CSF, ISO 27001). She specializes in **AI Security Compliance** (NIST AI RMF) and conducting **LLM Risk Assessments** to ensure safe AI adoption.";
            } else if (lowerText.includes("experience") || lowerText.includes("work") || lowerText.includes("job")) {
                botResponse = "Saniya has over 1.7 years of experience in GRC and AI Security, including roles at Avaly.AI and KPMG India, where she focused on automating audits and managing enterprise risk.";
            } else {
                botResponse = "I don't have that specific detail yet. Please enter your email below, and I will forward your query to Saniya immediately.";
                isForm = true;
            }

            setMessages((prev) => [
                ...prev,
                { id: Date.now() + 1, type: "bot", text: botResponse, isForm },
            ]);
        }, 1000);
    };

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!emailText.trim()) return;

        setMessages((prev) => [
            ...prev,
            { id: Date.now(), type: "bot", text: "Thank you! Saniya will get back to you soon." }
        ]);
        setEmailText("");
    };

    return (
        <>
            <div className="fixed bottom-8 right-8 z-50">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-neon-green text-background p-4 rounded-full shadow-[0_0_20px_rgba(0,255,65,0.4)] relative"
                >
                    {isOpen ? <X /> : <MessageSquare />}
                    {!isOpen && (
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-cyber-purple rounded-full animate-ping"></span>
                    )}
                </motion.button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-24 right-8 w-full max-w-[350px] h-[500px] bg-[#111] border border-neon-green/30 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/10 bg-neon-green text-background flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <Bot size={20} />
                                <span className="font-bold mono-font text-sm uppercase">Saniya Assistant</span>
                            </div>
                            <X size={18} className="cursor-pointer" onClick={() => setIsOpen(false)} />
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                                    <div className={`max-w-[80%] p-3 rounded-xl text-sm ${msg.type === "user"
                                        ? "bg-cyber-purple text-white rounded-tr-none"
                                        : "bg-white/5 border border-white/10 text-foreground/90 rounded-tl-none"
                                        }`}>
                                        <div className="flex items-center space-x-2 mb-1 opacity-50 text-[10px] uppercase font-bold">
                                            {msg.type === "user" ? <User size={12} /> : <Bot size={12} />}
                                            <span>{msg.type === "user" ? "You" : "Assistant"}</span>
                                        </div>
                                        {renderMessageText(msg.text)}

                                        {msg.isForm && (
                                            <form onSubmit={handleEmailSubmit} className="mt-3 space-y-2">
                                                <input
                                                    type="email"
                                                    placeholder="Enter your email"
                                                    className="w-full bg-black/30 border border-white/10 rounded p-2 text-xs focus:border-neon-green outline-none"
                                                    value={emailText}
                                                    onChange={(e) => setEmailText(e.target.value)}
                                                    required
                                                />
                                                <button
                                                    type="submit"
                                                    className="w-full bg-neon-green text-background font-bold text-xs py-2 rounded hover:bg-neon-green/80 transition-all uppercase"
                                                >
                                                    Send Message
                                                </button>
                                            </form>
                                        )}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-black/20">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Ask about skills, education..."
                                    className="w-full bg-white/5 border border-white/10 rounded-full py-2 px-4 pr-10 text-xs focus:border-neon-green outline-none transition-all"
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-1/2 -translate-y-1/2 text-neon-green hover:text-white transition-colors"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
