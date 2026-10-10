import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Building, 
  Sparkles, 
  Award, 
  CheckCircle, 
  ArrowUpRight 
} from 'lucide-react';
import { experiences, education, certificationsAndAchievements } from '../data/portfolioData';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <Sparkles size={13} className="text-cyan-400" />
            <span>CAREER TRACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient-cyan">Journey &amp; Experience</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mt-3">
            A chronological timeline of my roles in IT infrastructure support, full-stack web development, and computer engineering.
          </p>

          {/* Tab Selector */}
          <div className="flex items-center gap-2 p-1.5 mt-8 bg-slate-900/90 border border-slate-800 rounded-2xl backdrop-blur-md">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'experience'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Briefcase size={16} />
              <span>Work Experience</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === 'education'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <GraduationCap size={16} />
              <span>Education &amp; Credentials</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Work Experience Timeline */}
        {activeTab === 'experience' && (
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical timeline glowing center line */}
            <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-slate-800 -translate-x-1/2 hidden sm:block" />

            <div className="space-y-10 sm:space-y-12">
              {experiences.map((exp, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div 
                    key={idx} 
                    className={`relative flex flex-col sm:flex-row items-start ${
                      isEven ? 'sm:flex-row-reverse' : ''
                    } gap-6 group`}
                  >
                    {/* Timeline center node dot */}
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#080d17] border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/30 z-10 group-hover:scale-110 group-hover:border-purple-400 transition-all">
                      <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 group-hover:bg-purple-400 transition-colors" />
                    </div>

                    {/* Timeline Content Card */}
                    <div className="w-full sm:w-[calc(50%-2.5rem)] ml-10 sm:ml-0">
                      <div className="p-6 rounded-2xl bg-[#0c1220]/90 border border-slate-800/90 shadow-xl backdrop-blur-md group-hover:border-cyan-500/40 transition-all duration-300">
                        
                        {/* Header info */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
                            {exp.type}
                          </span>
                          <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
                            <Calendar size={13} />
                            {exp.period}
                          </span>
                        </div>

                        {/* Role & Company */}
                        <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mt-2">
                          {exp.role}
                        </h3>
                        
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 mb-3.5">
                          <span className="flex items-center gap-1 text-purple-300 font-semibold">
                            <Building size={13} />
                            {exp.company}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1 text-slate-400">
                            <MapPin size={13} />
                            {exp.location}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                          {exp.description}
                        </p>

                        {/* Achievements Bullet List */}
                        <div className="space-y-2 mb-4">
                          {exp.achievements.map((item, aIdx) => (
                            <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300">
                              <CheckCircle size={14} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tech Tag Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                          {exp.skills.map((skill, sIdx) => (
                            <span 
                              key={sIdx}
                              className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                      </div>
                    </div>

                    {/* Empty placeholder for alignment */}
                    <div className="hidden sm:block sm:w-[calc(50%-2.5rem)]" />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: Education & Honors */}
        {activeTab === 'education' && (
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Degree Card */}
            {education.map((edu, idx) => (
              <div 
                key={idx}
                className="p-7 rounded-2xl bg-[#0c1220]/90 border border-cyan-500/30 shadow-xl backdrop-blur-md"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold border border-cyan-500/40">
                    Graduated with Honors
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Calendar size={14} />
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sm font-semibold text-purple-300 mb-4 flex items-center gap-2">
                  <Building size={15} />
                  {edu.institution} ({edu.location})
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {edu.details}
                </p>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                  <strong className="text-cyan-300 font-mono block mb-1">Capstone Final Project:</strong>
                  <span className="text-slate-300">{edu.capstone}</span>
                </div>
              </div>
            ))}

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {certificationsAndAchievements.map((cert, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-[#0c1220]/90 border border-slate-800 flex items-start gap-4 hover:border-cyan-500/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                    <Award className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wide">
                      {cert.type} · {cert.year}
                    </span>
                    <h4 className="text-sm font-bold text-white mt-0.5">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      {cert.organization}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
