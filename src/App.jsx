import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import BackgroundGlow from './components/BackgroundGlow';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#06080d] text-slate-100 relative selection:bg-cyan-500 selection:text-black font-sans">
      {/* Background Animated Gradient Lights and Grid */}
      <BackgroundGlow />

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Sticky Glass Navbar */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Core Main Sections */}
        <main className="flex-grow">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <About onOpenResume={() => setIsResumeOpen(true)} />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>

        {/* Footer */}
        <Footer onOpenResume={() => setIsResumeOpen(true)} />
      </div>

      {/* Resume Viewer / Downloader Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
