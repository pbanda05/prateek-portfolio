"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Database, Wrench, Award, ChevronRight } from 'lucide-react';

export default function SkillsSection() {
    const [activeCategory, setActiveCategory] = useState('languages');

    const skillCategories = {
        languages: {
            title: "Programming Languages",
            icon: Code2,
            skills: [
                { name: "Java", level: 90 },
                { name: "C/C++", level: 85 },
                { name: "Python", level: 88 },
                { name: "JavaScript", level: 85 },
                { name: "Assembly", level: 70 },
                { name: "Bash", level: 75 }
            ]
        },
        web: {
            title: "Web & Frameworks",
            icon: Globe,
            skills: [
                { name: "React.js", level: 88 },
                { name: "React Native", level: 85 },
                { name: "Node.js", level: 82 },
                { name: "Express", level: 80 },
                { name: "Spring Boot", level: 78 },
                { name: "REST APIs", level: 90 }
            ]
        },
        databases: {
            title: "Databases & Cloud",
            icon: Database,
            skills: [
                { name: "MongoDB", level: 85 },
                { name: "MySQL", level: 80 },
                { name: "AWS S3", level: 78 },
                { name: "AWS IAM", level: 75 },
                { name: "Firebase Auth", level: 82 },
                { name: "Kubernetes", level: 70 }
            ]
        },
        tools: {
            title: "Developer Tools",
            icon: Wrench,
            skills: [
                { name: "Git", level: 90 },
                { name: "UNIX/Linux", level: 85 },
                { name: "TypeScript", level: 82 },
                { name: "Agile", level: 85 },
                { name: "Vite", level: 78 },
                { name: "ESLint", level: 80 }
            ]
        }
    };

    const certifications = [
        { name: "AWS Certified Cloud Practitioner", status: "Completed", color: "text-green-400" },
        { name: "AWS Solutions Architect", status: "Pursuing", color: "text-blue-400" }
    ];

    return (
        <section id="skills" className="py-32 px-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] pointer-events-none" />
            
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-4 block">Technical Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Skills & <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Technologies</span>
                    </h2>
                </motion.div>

                {/* Category Tabs */}
                <motion.div 
                    className="flex flex-wrap justify-center gap-3 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    {Object.entries(skillCategories).map(([key, category]) => (
                        <motion.button
                            key={key}
                            onClick={() => setActiveCategory(key)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                                activeCategory === key
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <category.icon className="w-4 h-4" />
                            {category.title}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <motion.div 
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    key={activeCategory}
                >
                    {skillCategories[activeCategory].skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="group p-5 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                            whileHover={{ y: -4 }}
                        >
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-white font-medium">{skill.name}</span>
                                <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                            </div>
                            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${skill.level}%` }}
                                    transition={{ duration: 0.8, delay: index * 0.05 + 0.2 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <Award className="w-5 h-5 text-blue-400" />
                        <h3 className="text-xl font-semibold text-white">Certifications</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.name}
                                className="p-5 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-white font-medium text-sm">{cert.name}</p>
                                        <p className={`text-xs mt-1 ${cert.color}`}>{cert.status}</p>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}