import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative px-6 pt-20">
            {/* Background gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
            
            <motion.div 
                className="relative z-10 flex flex-col items-center text-center max-w-4xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Profile Image */}
                <motion.div 
                    className="relative mb-8"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-blue-500/50 p-1 bg-gradient-to-br from-blue-500/20 to-transparent">
                        <img 
                            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696aba8467d08fe9a645c782/b71d06cd2_IMG_2895.jpg"
                            alt="Prateek Banda"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-[#0a0a0a]" />
                </motion.div>

                {/* Name */}
                <motion.h1 
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <span className="text-white">Prateek </span>
                    <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Banda</span>
                </motion.h1>

                {/* Title */}
                <motion.p 
                    className="text-lg md:text-xl text-gray-400 font-medium mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Computer Science Student | Full-Stack Developer
                </motion.p>

                {/* Tagline */}
                <motion.p 
                    className="text-gray-500 text-base md:text-lg max-w-2xl leading-relaxed mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    Building scalable, user-focused software with modern technologies.
                    <br className="hidden md:block" />
                    Passionate about systems programming and full-stack development.
                </motion.p>

                {/* Social Links */}
                <motion.div 
                    className="flex items-center gap-4 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    {[
                        { icon: Github, href: "https://github.com/pbanda05", label: "GitHub" },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/prateek-banda", label: "LinkedIn" },
                        { icon: Mail, href: "https://mail.google.com/mail/?view=cm&to=bandaprateek0@gmail.com", label: "Email" }
                    ].map((item, index) => (
                        <motion.a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <item.icon className="w-5 h-5" />
                        </motion.a>
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div 
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    <motion.a
                        href="#projects"
                        className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-full transition-all duration-300 shadow-lg shadow-blue-600/25"
                        whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -15px rgba(0, 102, 255, 0.4)" }}
                        whileTap={{ scale: 0.98 }}
                    >
                        View My Work
                    </motion.a>
                    <motion.a
                        href="#contact"
                        className="px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/10 hover:border-white/20 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Get In Touch
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div 
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2 text-gray-500"
                >
                    <span className="text-xs tracking-widest uppercase">Scroll</span>
                    <ChevronDown className="w-4 h-4" />
                </motion.div>
            </motion.div>
        </section>
    );
}