import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  Layout, 
  Server, 
  Wrench, 
  Shield, 
  Code, 
  Cpu, 
  CheckCircle2,
  Terminal
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categoryIcons = {
    frontend: Layout,
    backend: Server,
    tools: Wrench,
    'it-infra': Shield,
  };

  // Filter skills by search query and category
  const filteredCategories = skillCategories.map(cat => {
    if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
      return { ...cat, skills: [] };
    }
    const filteredSkills = cat.skills.filter(skill =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...cat, skills: filteredSkills };
  }).filter(cat => cat.skills.length > 0);

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <Sparkles size={13} className="text-cyan-400" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills &amp; <span className="text-gradient-cyan">Expertise</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mt-3">
            A comprehensive spectrum of frontend technologies, backend architectures, 3D engines, and IT system tools.
          </p>

          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-8 w-full max-w-2xl">
            {/* Search Input */}
            <div className="relative w-full sm:flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search skills (e.g., React, Active Directory, Node, C#)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/60 transition-colors"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                All
              </button>
              {skillCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {cat.title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Layout;
            return (
              <div
                key={category.id}
                className="p-6 sm:p-7 rounded-2xl bg-[#0c1220]/90 border border-slate-800/90 hover:border-cyan-500/40 shadow-xl backdrop-blur-md transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-2">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-md`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Badges Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-200 group"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className="text-sm">{skill.icon}</span>
                          <span className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-500 group-hover:from-cyan-300 group-hover:to-purple-400"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Quick Badges Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1.5">
            <Terminal size={14} className="text-cyan-400" />
            Core Stack:
          </span>
          {[
            "React.js", "Next.js", "Tailwind CSS", "JavaScript (ES6+)",
            "Node.js", "Express", "PHP / Laravel", "MySQL / MongoDB",
            "C# / .NET", "Active Directory", "Network Ops", "Unity & Blender"
          ].map((item, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-xs font-mono text-cyan-300 hover:border-cyan-400 hover:bg-cyan-950/50 transition-colors"
            >
              {item}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
