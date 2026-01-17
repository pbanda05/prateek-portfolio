"use client";
import Navigation from '@/components/Portfolio/Navigation';
import HeroSection from '@/components/Portfolio/HeroSection';
import AboutSection from '@/components/Portfolio/AboutSection';
import SkillsSection from '@/components/Portfolio/SkillsSection';
import ProjectsSection from '@/components/Portfolio/ProjectsSection';
import ContactSection from '@/components/Portfolio/ContactSection';
import Footer from '@/components/Portfolio/Footer';
import AchievementsSection from "@/components/Portfolio/AchievementsSection";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Noise Texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.015] z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Grid Background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundSize: '60px 60px',
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
        }}
      />

      <Navigation />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
