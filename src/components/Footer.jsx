import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  Heart, 
  Code2, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import Logo from './Logo';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#05080e] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Bio */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <Logo size="sm" />
              <span className="text-lg font-bold text-white tracking-tight">
                Muhammad Fakhar Khan
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              IT Support Engineer at Samba Bank Limited &amp; Full-Stack Web Developer. Designing performant, resilient digital infrastructure and modern web applications.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-[11px] font-mono text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>System Status: 100% Operational &amp; Available</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase text-slate-300 font-bold tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#home" className="hover:text-cyan-300 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-300 transition-colors">About Background</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-300 transition-colors">Experience &amp; Career</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-300 transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-300 transition-colors">Technical Skills</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact / Inquire</a>
              </li>
            </ul>
          </div>

          {/* Connect & Resume */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase text-slate-300 font-bold tracking-wider">
              Connect &amp; Resources
            </h4>
            
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-300 transition-all"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-300 transition-all"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-400 hover:text-cyan-300 transition-all"
                title="Email"
              >
                <Mail size={18} />
              </a>
            </div>

            <button
              onClick={onOpenResume}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-xs font-semibold text-cyan-300 transition-colors flex items-center justify-center gap-2"
            >
              <span>View Interactive CV</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <span>© {currentYear} Muhammad Fakhar Khan. Crafted with React.js &amp; Tailwind CSS.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-300 border border-slate-800 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>

      </div>
    </footer>
  );
}
