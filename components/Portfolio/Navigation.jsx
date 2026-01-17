"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("#about");

  const navItems = useMemo(
    () => [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Achievements", href: "#achievements" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  // Smooth scroll + close mobile menu
  const handleNavClick = (href) => (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section highlight (IntersectionObserver)
  useEffect(() => {
    const sections = navItems
      .map((i) => document.querySelector(i.href))
      .filter(Boolean);

    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        // pick the most visible section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActive(`#${visible.target.id}`);
      },
      { root: null, threshold: [0.2, 0.35, 0.5], rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [navItems]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#"
              onClick={handleNavClick("#about")}
              className="text-xl font-bold text-white relative"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                P
              </span>
              B
              {/* tiny glow */}
              <span className="absolute -inset-3 -z-10 rounded-full bg-blue-600/0 group-hover:bg-blue-600/10 blur-xl transition-all" />
            </motion.a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = active === item.href;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={handleNavClick(item.href)}
                    className={`px-4 py-2 text-sm transition-colors relative group ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.label}

                    {/* underline (hover) */}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-500 group-hover:w-1/2 transition-all duration-300" />

                    {/* underline (active) */}
                    {isActive ? (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-blue-500/80" />
                    ) : null}
                  </motion.a>
                );
              })}

              <motion.a
                href="#contact"
                onClick={handleNavClick("#contact")}
                className="ml-4 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-full transition-colors shadow-lg shadow-blue-600/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col items-center gap-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={handleNavClick(item.href)}
                  className={`text-2xl transition-colors ${
                    active === item.href ? "text-white" : "text-gray-300 hover:text-white"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                onClick={handleNavClick("#contact")}
                className="mt-4 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-full transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
