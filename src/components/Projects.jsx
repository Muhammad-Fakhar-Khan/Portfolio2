import React, { useState } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  Award, 
  Layers, 
  Eye, 
  Check, 
  Filter,
  ArrowRight
} from 'lucide-react';
import { Github } from './Icons';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const categories = ["All Projects", "3D & VR", "Web Apps", "E-Commerce", "IT & Systems"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "All Projects"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <Sparkles size={13} className="text-cyan-400" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-cyan">Work &amp; Innovations</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mt-3">
            A curated showcase of full-stack web applications, award-winning VR simulations, and enterprise IT toolsets.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-slate-900/90 border border-slate-800 rounded-2xl backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-[#0c1220]/90 border border-slate-800 hover:border-cyan-500/40 shadow-xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Image Area */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220] via-transparent to-black/30" />
                
                {/* Category Pill Top Left */}
                <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-700/80 text-[11px] font-mono font-medium text-cyan-300 backdrop-blur-md">
                    {project.category}
                  </span>
                  {project.award && (
                    <span className="px-2.5 py-1 rounded-md bg-amber-500/90 text-slate-950 text-[11px] font-bold flex items-center gap-1 shadow-md shadow-amber-500/20">
                      <Award size={12} />
                      <span>{project.award}</span>
                    </span>
                  )}
                </div>

                {/* Quick View Button Hover Overlay */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute bottom-3.5 right-3.5 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-cyan-500 text-slate-200 hover:text-slate-950 text-xs font-semibold border border-slate-700/80 hover:border-cyan-400 backdrop-blur-md transition-all duration-200 flex items-center gap-1.5"
                >
                  <Eye size={13} />
                  <span>Quick View</span>
                </button>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-xs font-mono text-slate-400 mb-3 font-semibold">
                    {project.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800/90 text-[11px] font-mono text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800/90">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Read Case Study</span>
                      <ArrowRight size={13} />
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-slate-800/80 border border-slate-800 transition-colors"
                        title="View Source on GitHub"
                      >
                        <Github size={16} />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-slate-800/80 border border-slate-800 transition-colors"
                        title="Explore Live Website"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Modal Popup */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
