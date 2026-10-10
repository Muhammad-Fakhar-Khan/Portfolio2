import React from 'react';

export default function Logo({ size = 'md', className = '', glow = true }) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const imgSizeClass = sizeClasses[size] || sizeClasses.md;

  return (
    <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-950/40 via-slate-900/90 to-purple-950/30 border border-cyan-500/30 p-1.5 backdrop-blur-md transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_18px_rgba(6,182,212,0.45)] ${imgSizeClass} ${className}`}>
      <img
        src="/logo-f.png"
        alt="Fakhar Khan Logo"
        className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(34,211,238,0.8)] group-hover:scale-105 transition-transform duration-300"
      />
      {glow && (
        <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#080c14] animate-pulse" />
      )}
    </div>
  );
}
