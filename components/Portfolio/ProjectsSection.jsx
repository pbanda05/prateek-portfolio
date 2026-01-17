import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Sparkles, Server, Palette } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "LookBook",
        subtitle: "AI-Powered Digital Closet",
        period: "Sept 2025 – Present",
        description: "Cross-platform outfit-curation app using React Native with Firebase Authentication supporting multiple user flows.",
        fullDescription: "A comprehensive AI-powered digital closet application that revolutionizes how users manage and curate their wardrobe. Built with a focus on seamless user experience and intelligent outfit recommendations.",
        highlights: [
            "Built Node.js + Express API with MongoDB and AWS S3",
            "Optimized image uploads by ~40%",
            "Enforced secure authentication and token-based sessions",
            "Reduced unauthorized logins by 30%"
        ],
        tech: ["React Native", "Node.js", "Express", "MongoDB", "AWS S3", "Firebase Auth"],
        icon: Sparkles,
        gradient: "from-purple-500/20 to-blue-500/20",
        borderColor: "hover:border-purple-500/50",
        githubUrl: "https://github.com/pbanda05/lookbook"
    },
    {
        id: 2,
        title: "Annakshetra",
        subtitle: "Donor-NGO-Recipient Platform",
        period: "May 2025 – Present",
        description: "Full-stack platform connecting donors, NGOs, and recipients with secure, scalable architecture.",
        fullDescription: "A comprehensive platform designed to bridge the gap between donors, NGOs, and recipients, ensuring efficient resource distribution and transparent operations.",
        highlights: [
            "Developed with Spring Boot and React.js",
            "Implemented JWT-secured REST endpoints",
            "Scalable AWS deployment via Terraform-managed EKS with Kubernetes",
            "Role-based backend services ensuring 100% data isolation"
        ],
        tech: ["Spring Boot", "React.js", "JWT", "AWS EKS", "Terraform", "Kubernetes"],
        icon: Server,
        gradient: "from-green-500/20 to-teal-500/20",
        borderColor: "hover:border-green-500/50",
        githubUrl: "https://github.com/pbanda05/Annakshetra"
    },
    {
        id: 3,
        title: "Dream Ride",
        subtitle: "Interactive Car Buying Platform",
        period: "HackUTD X Toyota – Nov 2025",
        description: "Multi-stage car-buying platform capturing user preferences with immersive 3D visualization.",
        fullDescription: "An innovative hackathon project that reimagines the car buying experience through interactive 3D visualization and personalized user journeys.",
        highlights: [
            "Multi-stage platform capturing user preferences",
            "3D visualization using Three.js",
            "Optimized UI responsiveness by 30%",
            "Built with React, TypeScript, and ESLint"
        ],
        tech: ["React", "TypeScript", "Three.js", "ESLint", "Vite"],
        icon: Palette,
        gradient: "from-orange-500/20 to-red-500/20",
        borderColor: "hover:border-orange-500/50",
        githubUrl: "https://github.com/pbanda05/HackUTD"
    }
];

function ProjectModal({ project, onClose }) {
    if (!project) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#111111] rounded-3xl border border-white/10 p-8"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${project.gradient} mb-6`}>
                    <project.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-blue-400 font-medium mb-2">{project.subtitle}</p>
                <p className="text-gray-500 text-sm mb-6">{project.period}</p>

                <p className="text-gray-300 leading-relaxed mb-6">{project.fullDescription}</p>

                <h4 className="text-white font-semibold mb-3">Key Achievements</h4>
                <ul className="space-y-2 mb-8">
                    {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-400">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0" />
                            {highlight}
                        </li>
                    ))}
                </ul>

                <h4 className="text-white font-semibold mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1.5 text-sm bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-32 px-6 relative">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] pointer-events-none" />
            
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-4 block">Portfolio</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Featured <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Projects</span>
                    </h2>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setSelectedProject(project)}
                            className={`group cursor-pointer p-6 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 ${project.borderColor} transition-all duration-500`}
                            whileHover={{ y: -8, scale: 1.02 }}
                        >
                            <div className="flex items-start justify-between mb-5">
                                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${project.gradient} group-hover:scale-110 transition-transform duration-300`}>
                                    <project.icon className="w-6 h-6 text-white" />
                                </div>
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
                                >
                                    <Github className="w-4 h-4 text-gray-400 hover:text-blue-400" />
                                </a>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm font-medium mb-3">{project.subtitle}</p>
                            <p className="text-gray-500 text-xs mb-4">{project.period}</p>
                            <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.slice(0, 3).map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2.5 py-1 text-xs bg-white/5 text-gray-400 rounded-full border border-white/10"
                                    >
                                        {tech}
                                    </span>
                                ))}
                                {project.tech.length > 3 && (
                                    <span className="px-2.5 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full">
                                        +{project.tech.length - 3}
                                    </span>
                                )}
                            </div>

                            <div className="mt-5 pt-5 border-t border-white/5 flex items-center text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                View Details
                                <ExternalLink className="w-4 h-4 ml-2" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal 
                        project={selectedProject} 
                        onClose={() => setSelectedProject(null)} 
                    />
                )}
            </AnimatePresence>
        </section>
    );
}