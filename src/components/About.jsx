import React from 'react';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  Sparkles, 
  Code, 
  ShieldCheck, 
  Compass, 
  Cpu,
  Layers,
  CheckCircle2,
  ExternalLink,
  Glasses
} from 'lucide-react';
import { personalInfo, certificationsAndAchievements } from '../data/portfolioData';

export default function About({ onOpenResume }) {
  const highlights = [
    {
      title: "B.S. in Computer Engineering",
      subtitle: "Sir Syed University of Engineering & Tech (SSUET)",
      description: "Solid theoretical foundation in Computer Networks, Operating Systems, Microprocessor Architecture, Data Structures, and Software Engineering.",
      icon: GraduationCap,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10 border-cyan-500/20"
    },
    {
      title: "Enterprise IT Support Engineer",
      subtitle: "Samba Bank Limited",
      description: "Managing mission-critical banking infrastructure, Active Directory domain controllers, desktop deployments, network switches, and rapid incident resolution.",
      icon: ShieldCheck,
      color: "text-amber-400",
      bgColor: "bg-amber-500/10 border-amber-500/20"
    },
    {
      title: "Senior WordPress & Full-Stack",
      subtitle: "Stolidzone Technologies",
      description: "Architected custom high-performance themes, optimized database bottlenecks, and integrated modern frontend interfaces with 50%+ speed improvements.",
      icon: Code,
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10 border-emerald-500/20"
    },
    {
      title: "3D & Immersive VR Innovation",
      subtitle: "MindScape-VR Creator",
      description: "Pioneered interactive VR educational simulations using Unity, C#, Flutter, and Blender. Awarded at both the 40th IEEEP Symposium and Technova 2025.",
      icon: Glasses,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10 border-purple-500/20"
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
            <Sparkles size={13} className="text-cyan-400" />
            <span>KNOW ME BETTER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-cyan">Muhammad Fakhar Khan</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mt-3">
            Bridging enterprise-grade IT infrastructure reliability with cutting-edge frontend engineering and immersive interactive tech.
          </p>
        </div>

        {/* Top Story & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Left Narrative Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-7 rounded-2xl bg-[#0d1322]/80 border border-slate-800 shadow-xl backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block"></span>
                My Background &amp; Engineering Philosophy
              </h3>
              
              <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
                <p>
                  I hold a <strong className="text-cyan-300">Bachelor of Science in Computer Engineering</strong> from <strong>Sir Syed University of Engineering and Technology (SSUET)</strong>. Throughout my academic and professional journey, I have cultivated a unique blend of hardware/network system operations and modern software craftsmanship.
                </p>
                <p>
                  At <strong className="text-amber-300">Samba Bank Limited</strong>, I serve as an <strong className="text-white">IT Support Engineer</strong>, overseeing crucial enterprise workstation configurations, Active Directory systems, and high-availability network diagnostics in a regulated financial environment.
                </p>
                <p>
                  Prior to that, as a <strong className="text-emerald-300">Senior WordPress &amp; Frontend Developer</strong> at <strong>Stolidzone Technologies</strong>, I led development on client web portals, mastering backend workflows, PHP/MySQL tuning, and responsive UI performance.
                </p>
                <p>
                  Beyond web frameworks, I have a deep passion for <strong className="text-purple-300">3D web experiences and immersive VR</strong>. My flagship project, <em>MindScape-VR</em>, earned prestigious recognition at the 40th IEEEP International Symposium and Technova 2025.
                </p>
              </div>

              {/* Personal values / skills badges */}
              <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-2 gap-3 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-cyan-400" />
                  <span>Problem Solver &amp; Troubleshooter</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-cyan-400" />
                  <span>Performance-First Mindset</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-cyan-400" />
                  <span>Enterprise Security Awareness</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-cyan-400" />
                  <span>Rapid Tech Adopter</span>
                </div>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenResume}
                className="px-5 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <span>Download Full CV / Resume</span>
                <ExternalLink size={13} />
              </button>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* Right 4 Pillars Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-[#0c111e]/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-10 h-10 rounded-xl ${item.bgColor} border flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform`}>
                      <Icon className={item.color} size={20} />
                    </div>
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs font-semibold text-slate-400 mb-2">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Awards & Honors Strip */}
        <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-cyan-950/30 via-slate-900/60 to-purple-950/30 border border-cyan-500/20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-mono font-semibold mb-1">
                <Award size={15} />
                <span>HONORS &amp; RECOGNITION</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white">
                Award-Winning Engineering &amp; Innovation
              </h3>
              <p className="text-slate-400 text-xs md:text-sm mt-1 max-w-xl">
                Recognized at major national symposia and competitions for technical innovation and project execution.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="px-4 py-2.5 rounded-xl bg-slate-900/90 border border-amber-500/30 text-xs">
                <span className="text-amber-300 font-bold">🥈 2nd Place</span>
                <span className="text-slate-300 ml-1.5">40th IEEEP Int'l Symposium 2025</span>
              </div>
              <div className="px-4 py-2.5 rounded-xl bg-slate-900/90 border border-cyan-500/30 text-xs">
                <span className="text-cyan-300 font-bold">🥉 3rd Place</span>
                <span className="text-slate-300 ml-1.5">Technova 2025 National</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
