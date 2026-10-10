import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Terminal as TerminalIcon, 
  Copy, 
  Check, 
  Download, 
  ExternalLink,
  Shield,
  Layers,
  Code2,
  Cpu,
  Boxes,
  Zap
} from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('config');

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const codeSnippets = {
    config: `// engineer.config.ts
export const engineer = {
  name: "Muhammad Fakhar Khan",
  degree: "B.S. Computer Engineering @ SSUET (2021-2025)",
  currentRole: "IT Support Engineer @ Samba Bank Ltd",
  specialization: [
    "High-Performance Web (React, Next.js, Tailwind)",
    "Mission-Critical IT & Network Infrastructure",
    "Immersive 3D & VR Engineering (MindScape-VR)"
  ],
  awards: [
    "2nd Place - 40th IEEEP Symposium 2025",
    "3rd Place - Technova National 2025"
  ],
  status: "Available for ambitious opportunities 🚀"
};`,
    terminal: `> fakhar.getTechStack()
[
  "React.js", "Next.js", "Tailwind CSS", "JavaScript (ES6+)",
  "Node.js", "Express", "PHP / Laravel", "C# / .NET",
  "Active Directory", "Network Ops", "Unity", "Blender"
]

> fakhar.checkStatus()
✓ System Infrastructure: 99.9% Uptime
✓ Lighthouse Web Audits: 98+ Performance
✓ Ready for new projects & full-time roles.`,
  };

  const techBadges = [
    { name: "React.js", icon: "⚛️", color: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30" },
    { name: "Next.js", icon: "▲", color: "from-white/10 to-slate-400/10 border-white/20" },
    { name: "Tailwind CSS", icon: "🎨", color: "from-cyan-400/20 to-teal-400/20 border-cyan-400/30" },
    { name: "Node.js / Express", icon: "🟢", color: "from-emerald-500/20 to-green-500/20 border-emerald-500/30" },
    { name: "IT Infrastructure", icon: "🛡️", color: "from-amber-500/20 to-orange-500/20 border-amber-500/30" },
    { name: "Unity & VR", icon: "🎮", color: "from-purple-500/20 to-indigo-500/20 border-purple-500/30" },
  ];

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Floating Badge */}
        <div className="flex items-center justify-start mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-cyan-200">
              Open for Frontend, Full-Stack &amp; IT Roles
            </span>
          </div>
        </div>

        {/* Main Grid: Left Pitch & Right Interactive Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h2 className="text-sm md:text-base font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-2">
              Welcome to my portfolio
            </h2>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-5">
              Hi, I'm{' '}
              <span className="text-gradient-cyan relative">
                Muhammad Fakhar Khan
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-cyan-400/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="transparent" />
                </svg>
              </span>{' '}
              <span className="inline-block animate-wave origin-bottom-right">👋</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed mb-6 max-w-2xl">
              <span className="text-cyan-300 font-semibold">IT Support Engineer</span> at Samba Bank &amp;{' '}
              <span className="text-purple-300 font-semibold">Frontend / Full-Stack Developer</span> specializing in building high-performance web experiences, reliable enterprise infrastructure, and award-winning 3D/VR platforms.
            </p>

            {/* Quick Points with Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full max-w-xl">
              <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-300 bg-slate-900/50 p-2.5 rounded-xl border border-slate-800">
                <Shield className="text-cyan-400 flex-shrink-0" size={16} />
                <span>Enterprise Banking Systems Support</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-300 bg-slate-900/50 p-2.5 rounded-xl border border-slate-800">
                <Code2 className="text-purple-400 flex-shrink-0" size={16} />
                <span>React.js, Next.js &amp; Tailwind Expert</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-300 bg-slate-900/50 p-2.5 rounded-xl border border-slate-800">
                <Boxes className="text-emerald-400 flex-shrink-0" size={16} />
                <span>Award-Winning VR (MindScape-VR)</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs md:text-sm text-slate-300 bg-slate-900/50 p-2.5 rounded-xl border border-slate-800">
                <Zap className="text-amber-400 flex-shrink-0" size={16} />
                <span>B.S. Computer Engineering (SSUET)</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-teal-300 hover:from-cyan-300 hover:to-teal-200 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all duration-200 active:scale-95"
              >
                <span>Explore Projects</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/80 hover:border-cyan-500/50 rounded-xl shadow-sm transition-all duration-200 active:scale-95"
              >
                <span>Get in Touch</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-cyan-300 hover:text-cyan-200 bg-cyan-950/30 hover:bg-cyan-950/50 border border-cyan-500/30 rounded-xl transition-all duration-200"
              >
                <Download size={15} />
                <span>Resume / CV</span>
              </button>
            </div>

            {/* Copy Email Quick Interaction */}
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="font-mono text-slate-500">Quick contact:</span>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-cyan-300 font-mono transition-colors"
                title="Click to copy email address"
              >
                {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                <span>{personalInfo.email}</span>
                {copied && <span className="text-[10px] text-emerald-400 font-sans ml-1">Copied!</span>}
              </button>
            </div>
          </div>

          {/* Right Interactive Tech Terminal Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl bg-[#0b101b]/90 border border-slate-800/90 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl overflow-hidden group hover:border-cyan-500/30 transition-all duration-300">
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#080d16] border-b border-slate-800/90">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                    <TerminalIcon size={12} className="text-cyan-400" />
                    fakhar-workspace
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-slate-800 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveTab('config')}
                    className={`px-2 py-0.5 rounded ${
                      activeTab === 'config'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    config.ts
                  </button>
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-2 py-0.5 rounded ${
                      activeTab === 'terminal'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    status.sh
                  </button>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-5 font-mono text-xs md:text-[13px] leading-relaxed overflow-x-auto text-slate-300 min-h-[290px] max-h-[360px]">
                <pre className="text-cyan-300/90 whitespace-pre-wrap font-mono">
                  {codeSnippets[activeTab]}
                </pre>
              </div>

              {/* Terminal Footer Status Bar */}
              <div className="px-4 py-2.5 bg-[#080d16]/90 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
                  <span>main* · utf-8</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-cyan-400">React 18</span>
                  <span>Node.js</span>
                  <span>Tailwind</span>
                </div>
              </div>
            </div>

            {/* Tech Badges Grid below terminal */}
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 mt-4">
              {techBadges.map((badge) => (
                <div
                  key={badge.name}
                  className={`flex items-center gap-2 p-2 rounded-xl bg-gradient-to-r ${badge.color} border backdrop-blur-sm transition-transform hover:-translate-y-0.5`}
                >
                  <span className="text-sm">{badge.icon}</span>
                  <span className="text-xs font-semibold text-slate-200 truncate">{badge.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Key Stats Bar */}
        <div className="mt-14 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/70 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-mono group-hover:text-cyan-300 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
