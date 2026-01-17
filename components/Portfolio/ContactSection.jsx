import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileText, Send, ArrowUpRight, Loader2 } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Initialize EmailJS with public key
            emailjs.init('VeCH3SUBln5UYpdrt');
            
            // Send email using EmailJS
            await emailjs.send(
                'service_wew8q54',
                'template_vuszjuf',
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_name: 'Prateek Banda'
                }
            );
            
            toast.success("Message sent successfully! I'll get back to you soon.");
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Email error:', error);
            toast.error("Failed to send message. Please try again or email me directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactLinks = [
        { 
            icon: Mail, 
            label: "Email", 
            value: "bandaprateek0@gmail.com",
            href: "mailto:bandaprateek0@gmail.com",
            color: "hover:border-red-500/50 hover:bg-red-500/10"
        },
        { 
            icon: Linkedin, 
            label: "LinkedIn", 
            value: "linkedin.com/in/prateek-banda",
            href: "https://www.linkedin.com/in/prateek-banda",
            color: "hover:border-blue-500/50 hover:bg-blue-500/10"
        },
        { 
            icon: Github, 
            label: "GitHub", 
            value: "github.com/pbanda05",
            href: "https://github.com/pbanda05",
            color: "hover:border-purple-500/50 hover:bg-purple-500/10"
        },
        { 
            icon: FileText, 
            label: "Resume", 
            value: "Download PDF",
            href: "https://docs.google.com/document/d/1q7lvyPWDFEhE2HW01N1Gz3w-mL4GXI2EBqhuJcqtlrE/edit?usp=sharing",
            color: "hover:border-green-500/50 hover:bg-green-500/10"
        }
    ];

    return (
        <section id="contact" className="py-32 px-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
            
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-4 block">Get In Touch</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Let's <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Connect</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        I'm actively seeking software engineering internships. Feel free to reach out for opportunities, collaborations, or just to say hello!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Links */}
                    <motion.div 
                        className="space-y-4"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {contactLinks.map((link, index) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target={link.label !== "Email" ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                className={`flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 group ${link.color}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ x: 8 }}
                            >
                                <div className="p-3 rounded-xl bg-white/10 text-white group-hover:scale-110 transition-transform">
                                    <link.icon className="w-5 h-5" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-gray-500 text-xs uppercase tracking-wider">{link.label}</p>
                                    <p className="text-white font-medium">{link.value}</p>
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                            <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
                            
                            <div className="space-y-5">
                                <div>
                                    <label className="text-gray-400 text-sm mb-2 block">Your Name</label>
                                    <Input
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="John Doe"
                                        required
                                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl h-12"
                                    />
                                </div>
                                
                                <div>
                                    <label className="text-gray-400 text-sm mb-2 block">Email Address</label>
                                    <Input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="john@example.com"
                                        required
                                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl h-12"
                                    />
                                </div>
                                
                                <div>
                                    <label className="text-gray-400 text-sm mb-2 block">Message</label>
                                    <Textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Tell me about your project or opportunity..."
                                        required
                                        rows={4}
                                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-xl resize-none"
                                    />
                                </div>
                                
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-6 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4 mr-2" />
                                            Send Message
                                        </>
                                    )}
                                </Button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}