"use client";

import React, { useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Trophy, Users, Cloud, Sparkles } from "lucide-react";

// Small animated counter for “12+”, “20+”, etc.
function Stat({ value, suffix = "+", label, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // animate number from 0 -> value
  return (
    <div ref={ref} className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay }}
        className="flex items-end gap-2"
      >
        <motion.span
          className="text-4xl md:text-5xl font-bold tracking-tight text-white"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: delay + 0.1 }}
        >
          {inView ? value : 0}
        </motion.span>
        <span className="text-xl font-semibold text-blue-400">{suffix}</span>
      </motion.div>
      <p className="text-gray-400 mt-2">{label}</p>
    </div>
  );
}

// Card with “spotlight” hover that follows cursor
function SpotlightCard({ icon: Icon, title, subtitle, bullets, tag }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="relative overflow-hidden p-7 rounded-3xl bg-gradient-to-br from-white/6 to-transparent border border-white/10 backdrop-blur-sm hover:border-blue-500/30"
    >
      {/* Spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(260px circle at ${pos.x}px ${pos.y}px, rgba(59,130,246,0.18), transparent 60%)`,
        }}
      />

      {/* Subtle inner border */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
        }}
      />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-white/10 text-white">
              <Icon className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-white text-lg md:text-xl font-semibold">
                {title}
              </h3>
              <p className="text-gray-400 mt-1">{subtitle}</p>
            </div>
          </div>

          {tag ? (
            <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
              {tag}
            </span>
          ) : null}
        </div>

        <ul className="mt-5 space-y-2 text-gray-300">
          {bullets.map((b, idx) => (
            <li key={idx} className="flex gap-2 leading-relaxed">
              <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-blue-400/80 shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function AchievementsSection() {
  const cards = useMemo(
    () => [
      {
        icon: Trophy,
        title: "Dream Ride — HackUTD x Toyota",
        subtitle: "Interactive car-buying platform with real-time 3D customization.",
        tag: "3D / React / TS",
        bullets: [
          "Built a multi-stage preference flow to capture user inputs before recommendations.",
          "Implemented a real-time 3D viewer with Three.js for 6+ vehicle attributes.",
          "Optimized rendering + modern React patterns for a smoother UI.",
        ],
      },
      {
        icon: Users,
        title: "Co-founded C/C++ Mentorship Club",
        subtitle: "Teaching + mentoring beginners through core programming fundamentals.",
        tag: "Leadership",
        bullets: [
          "Led 12+ weekly sessions for ~15–20 students (variables → OOP).",
          "Provided 20+ hours of 1:1 mentorship and debugging support.",
          "Helped peers build confidence with clean coding habits and problem-solving.",
        ],
      },
      {
        icon: Cloud,
        title: "AWS Certified Cloud Practitioner",
        subtitle: "Cloud fundamentals across IAM, networking, pricing, and security.",
        tag: "AWS",
        bullets: [
          "Strong grasp of core AWS services, identity + access, and cloud economics.",
          "Applies cloud best practices in real projects (S3, IAM, deployment thinking).",
        ],
      },
      {
        icon: Award,
        title: "AWS Solutions Architect (In Progress)",
        subtitle: "Studying scalable architectures, security, and production patterns.",
        tag: "In Progress",
        bullets: [
          "Focused on designing reliable, cost-efficient systems and secure access models.",
          "Building a stronger infrastructure mindset alongside full-stack development.",
        ],
      },
    ],
    []
  );

  return (
    <section id="achievements" className="py-32 px-6 relative">
      {/* Background glows */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[420px] h-[420px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-4 block">
            Highlights
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Achievements{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              & Momentum
            </span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            A few milestones that reflect impact, leadership, and technical growth —
            with a focus on building real, polished software.
          </p>
        </motion.div>

        {/* Stats row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          <Stat value={12} suffix="+" label="Weekly sessions led" delay={0.05} />
          <Stat value={15} suffix="–20" label="Students/session" delay={0.12} />
          <Stat value={20} suffix="+" label="1:1 mentorship hours" delay={0.19} />
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-white/10 text-white">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <p className="text-white font-semibold">Certifications</p>
                <p className="text-gray-400">AWS CCP + SA (pursuing)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <SpotlightCard {...c} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
