"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, X, ExternalLink } from "lucide-react";

export default function AchievementsSection() {
  const [selected, setSelected] = useState(null);

  const achievements = [
    {
      icon: Award,
      title: "Dean’s List — UNT (Fall 2023)",
      detail: "Recognized for academic excellence (3.5+ GPA).",
      featured: true,
      image: "/achievements/deans-list-fall-2023.png",
    },
    {
      icon: Award,
      title: "Dean’s List — UNT (Spring 2025)",
      detail: "Recognized for academic excellence (3.5+ GPA).",
      featured: true,
      image: "/achievements/deans-list-spring-2025.jpeg", // ✅ KEEP .jpeg
    },
  ];

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="achievements" className="py-32 px-6 relative">
      {/* glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-4 block">
            Highlights
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Achievements
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Certifications for special recognition.
          </p>
        </motion.div>

        {/* cards */}
        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {achievements.map((a) => (
            <motion.div
              key={a.title}
              variants={item}
              whileHover={{ y: -6 }}
              className={`group p-6 rounded-3xl bg-gradient-to-br from-white/6 to-transparent border backdrop-blur-sm transition-all ${
                a.featured
                  ? "border-blue-500/40 shadow-lg shadow-blue-600/20"
                  : "border-white/10"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-white/10 border border-white/10 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-all">
                  <a.icon className="w-5 h-5 text-white" />
                </div>

                <div className="flex-1">
                  <p className="text-white font-semibold text-lg">{a.title}</p>
                  <p className="text-gray-400 mt-1">{a.detail}</p>

                  {/* image preview */}
                  {a.image && (
                    <button
                      type="button"
                      onClick={() => setSelected(a)}
                      className="mt-5 w-full relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-blue-500/30 transition-all"
                    >
                      <div className="absolute top-3 right-3 z-10 flex items-center gap-2 text-xs text-white/80 bg-black/40 border border-white/10 rounded-full px-3 py-1 backdrop-blur-sm">
                        <ExternalLink className="w-4 h-4" />
                        View
                      </div>

                      <img
                        src={a.image}
                        alt={a.title}
                        className="w-full h-40 object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </button>
                  )}

                  <div className="mt-5 h-px w-full bg-gradient-to-r from-blue-500/30 via-white/10 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl w-full rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 border-b border-white/10">
                <p className="text-white font-semibold text-xl">{selected.title}</p>
                <p className="text-gray-400 mt-1">{selected.detail}</p>
              </div>

              <div className="p-6">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full rounded-2xl border border-white/10"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
