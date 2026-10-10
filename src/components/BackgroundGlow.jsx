import React from 'react';

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Primary Cyan Glow Orb Top Left */}
      <div 
        className="absolute -top-40 -left-40 w-96 h-96 md:w-[540px] md:h-[540px] rounded-full bg-cyan-500/10 blur-[130px] animate-pulse-slow"
      />

      {/* Secondary Violet Glow Orb Middle Right */}
      <div 
        className="absolute top-1/3 -right-40 w-96 h-96 md:w-[500px] md:h-[500px] rounded-full bg-purple-600/10 blur-[140px]"
      />

      {/* Emerald Glow Bottom Left */}
      <div 
        className="absolute bottom-1/4 -left-32 w-80 h-80 md:w-[480px] md:h-[480px] rounded-full bg-emerald-500/10 blur-[140px]"
      />

      {/* Indigo Ambient Bottom Right */}
      <div 
        className="absolute -bottom-40 right-10 w-96 h-96 md:w-[600px] md:h-[600px] rounded-full bg-indigo-600/10 blur-[160px]"
      />

      {/* Subtle Vignette Overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#05070b]/80" />
    </div>
  );
}
