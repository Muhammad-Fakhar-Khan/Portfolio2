import React, { useEffect } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Award, 
  CheckCircle2, 
  Code 
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo, experiences, education, certificationsAndAchievements, skillCategories } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity print:hidden"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#090d16] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 my-6 print:border-none print:shadow-none print:my-0 print:bg-white print:text-black">
        
        {/* Top Action Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0d1322] border-b border-slate-800 print:hidden">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
            <span>RESUME PREVIEW</span>
            <span>•</span>
            <span className="text-slate-400">Muhammad_Fakhar_Khan_CV.pdf</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 hover:text-white transition-colors"
            >
              <Printer size={14} />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close resume modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Container */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto space-y-8 print:max-h-none print:overflow-visible print:p-0">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {personalInfo.name}
                </h1>
                <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                  {personalInfo.title}
                </p>
                <p className="text-xs text-slate-400 mt-1 max-w-xl leading-relaxed">
                  {personalInfo.tagline}
                </p>
              </div>

              {/* Quick Contacts */}
              <div className="space-y-1.5 text-xs text-slate-300 font-mono">
                <div className="flex items-center gap-2">
                  <Mail size={13} className="text-cyan-400" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={13} className="text-purple-400" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github size={13} className="text-slate-400" />
                  <span>github.com/Muhammad-Fakhar-Khan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-4 flex items-center gap-2">
              <Briefcase size={14} />
              <span>Work Experience</span>
            </h2>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div key={idx} className="border-l-2 border-slate-800 pl-4 space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-white">
                      {exp.role} · <span className="text-cyan-300">{exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-slate-400">
                      {exp.period} | {exp.location}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    {exp.description}
                  </p>
                  <ul className="space-y-1 mt-2">
                    {exp.achievements.map((item, aIdx) => (
                      <li key={aIdx} className="text-xs text-slate-300 flex items-start gap-1.5">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Honors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 flex items-center gap-2">
                <GraduationCap size={14} />
                <span>Education</span>
              </h2>
              {education.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <h3 className="text-xs font-bold text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {edu.institution} ({edu.period})
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Capstone: {edu.capstone}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 flex items-center gap-2">
                <Award size={14} />
                <span>Awards &amp; Competitions</span>
              </h2>
              <div className="space-y-2">
                {certificationsAndAchievements.map((cert, idx) => (
                  <div key={idx} className="text-xs text-slate-300">
                    <span className="font-semibold text-white">{cert.title}</span>
                    <div className="text-[11px] text-slate-400">{cert.organization} ({cert.year})</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Skills Overview */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3 flex items-center gap-2">
              <Code size={14} />
              <span>Technical Skills Spectrum</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map(cat => (
                <div key={cat.id} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="font-semibold text-cyan-300 mb-1">{cat.title}:</div>
                  <div className="text-slate-300 text-[11px] leading-relaxed">
                    {cat.skills.map(s => s.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
