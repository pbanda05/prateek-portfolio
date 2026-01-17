import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, BookOpen, Award } from 'lucide-react';

export default function AboutSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="about" className="py-32 px-6 relative">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-4 block">About Me</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Passionate about <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">building</span>
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-2 gap-12"
                >
                    {/* Bio */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm">
                            <p className="text-gray-300 leading-relaxed text-lg">
                                I'm a Computer Science student at UTD with a strong foundation in systems programming, algorithms, and full-stack development, passionate about building scalable, user-focused software.
                            </p>
                            <p className="text-gray-400 leading-relaxed mt-4">
                                I've worked across the stack using Java, C/C++, Python, and JavaScript, and enjoy turning complex problems into clean, efficient solutions. My experience includes cross-platform mobile apps, secure REST APIs, and cloud technologies like AWS and Firebase.
                            </p>
                            <p className="text-gray-400 leading-relaxed mt-4">
                                Beyond development, I co-founded and instructed a C++ learning club, mentoring students and leading weekly sessions. I'm actively seeking software engineering internships to contribute to real-world products and grow as a developer in fast-paced, impact-driven environments.
                            </p>
                        </div>
                    </motion.div>

                    {/* Education & Leadership Cards */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        {/* Education Card */}
                        <motion.div 
                            className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group"
                            whileHover={{ y: -4 }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 transition-colors">
                                    <GraduationCap className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg mb-1">Education</h3>
                                    <p className="text-blue-400 font-medium">Bachelor's in Computer Science</p>
                                    <p className="text-gray-400 text-sm mt-1">The University of Texas at Dallas</p>
                                    <p className="text-gray-500 text-sm">Fall 2025 – Spring 2027</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Leadership Card */}
                        <motion.div 
                            className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all duration-300 group"
                            whileHover={{ y: -4 }}
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-white/10 text-white group-hover:bg-white/15 transition-colors">
                                    <Users className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg mb-1">Leadership Experience</h3>
                                    <p className="text-gray-300 font-medium">C++ Learning Club Co-Founder & Instructor</p>
                                    <ul className="text-gray-400 text-sm mt-2 space-y-1">
                                        <li className="flex items-center gap-2">
                                            <div className="w-1 h-1 bg-blue-500 rounded-full" />
                                            Led 12+ weekly sessions for 15-20 students
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="w-1 h-1 bg-blue-500 rounded-full" />
                                            20+ hours of one-on-one mentorship
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="w-1 h-1 bg-blue-500 rounded-full" />
                                            Covered variables, loops, functions, OOP
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { value: "12+", label: "Sessions Led" },
                                { value: "20+", label: "Mentoring Hours" },
                                { value: "15-20", label: "Students Taught" }
                            ].map((stat, index) => (
                                <motion.div 
                                    key={stat.label}
                                    className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center"
                                    whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
                                >
                                    <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                                    <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}