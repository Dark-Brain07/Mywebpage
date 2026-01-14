"use client";
import { motion } from "framer-motion";
import { Github, Mail, Twitter, ExternalLink, Send, Copy, Check, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const socialLinks = [
    {
        name: "X",
        url: "https://x.com/rajuice007",
        icon: Twitter,
        color: "hover:text-sky-400",
    },
    {
        name: "Telegram",
        url: "https://t.me/Rajju96",
        icon: Send,
        color: "hover:text-blue-500",
    },
    {
        name: "Email",
        url: "#",
        icon: Mail,
        color: "hover:text-red-400",
    },
    {
        name: "GitHub",
        url: "https://github.com/Dark-Brain07",
        icon: Github,
        color: "hover:text-gray-400",
    },
    {
        name: "Fiverr",
        url: "https://www.fiverr.com/md_raju_ahmed07",
        icon: ExternalLink, // Placeholder for Fiverr
        color: "hover:text-green-500",
        label: "Fiverr",
    },
];

export default function Hero() {
    const [showEmailPopup, setShowEmailPopup] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const handleEmailClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowEmailPopup(true);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText("rajusupercell007@gmail.com");
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-32 md:pt-20 relative overflow-hidden">
            {/* Background Grid Animation */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-48 h-48 bg-gradient-to-tr from-primary to-secondary rounded-full mb-8 border-4 border-white flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.5)] overflow-hidden relative"
                >
                    <Image
                        src="/avatar.jpg"
                        alt="Rajuice Avatar"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-6xl mb-6 text-white tracking-wider"
                >
                    <span className="text-primary drop-shadow-[2px_2px_0_rgba(255,255,255,0.5)]">RAJUICE</span> SPACE
                </motion.h1>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-sm md:text-lg text-secondary mb-8 max-w-2xl leading-relaxed border-l-4 border-pixel-green pl-4 bg-white/5 p-4 rounded-r-lg"
                >
                    <p>Blockchain Developer (EVM & Solana)</p>
                    <p className="mt-2 text-gray-300">Building decentralized applications since 2021.</p>
                </motion.div>

                {/* Socials */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap gap-6 justify-center"
                >
                    {socialLinks.map((social) => (
                        <Link
                            key={social.name}
                            href={social.url}
                            target={social.name === "Email" ? undefined : "_blank"}
                            rel={social.name === "Email" ? undefined : "noopener noreferrer"}
                            onClick={social.name === "Email" ? handleEmailClick : undefined}
                            className={`flex flex-col items-center gap-2 group ${social.color} transition-colors cursor-pointer`}
                        >
                            <div className="p-4 border-2 border-white/20 rounded-lg bg-white/5 group-hover:border-primary group-hover:bg-primary/10 transition-all pixel-shadow-sm">
                                <social.icon size={24} />
                            </div>
                            <span className="text-xs uppercase tracking-widest opacity-70 group-hover:opacity-100">{social.label || social.name}</span>
                        </Link>
                    ))}
                </motion.div>

                {/* Email Popup Modal */}
                {showEmailPopup && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowEmailPopup(false)}>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-[#0a0a0f] border-2 border-primary p-6 rounded-xl max-w-sm w-full shadow-[0_0_30px_rgba(124,58,237,0.3)] relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setShowEmailPopup(false)}
                                className="absolute top-2 right-2 text-gray-500 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <h3 className="text-xl font-pixel text-white mb-4 text-center">Contact Email</h3>

                            <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-3 rounded-lg mb-4">
                                <Mail size={20} className="text-gray-400" />
                                <span className="text-gray-200 font-mono text-sm break-all">rajusupercell007@gmail.com</span>
                            </div>

                            <button
                                onClick={copyToClipboard}
                                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/80 text-white font-bold py-3 px-4 rounded-lg transition-all pixel-shadow-sm active:scale-95"
                            >
                                {isCopied ? <Check size={20} /> : <Copy size={20} />}
                                {isCopied ? "Copied!" : "Copy Address"}
                            </button>
                        </motion.div>
                    </div>
                )}
            </div>
        </section>
    )
}
