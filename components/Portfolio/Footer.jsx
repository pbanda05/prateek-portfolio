import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo & Copyright */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <span className="text-xl font-bold text-white">
                            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Prateek</span> Banda
                        </span>
                        <p className="text-gray-500 text-sm flex items-center gap-1">
                            Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> in Dallas, TX
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {[
                            { icon: Github, href: "https://github.com/pbanda05", label: "GitHub" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/prateek-banda", label: "LinkedIn" },
                            { icon: Mail, href: "https://mail.google.com/mail/?view=cm&to=bandaprateek0@gmail.com", label: "Email" }
                        ].map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <social.icon className="w-4 h-4" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-gray-600 text-sm">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}