"use client";

import { motion } from 'framer-motion';

// We generate the snowflakes OUTSIDE the component to prevent 
// React's "impure function" and hydration errors.
const snowflakes = Array.from({ length: 75 }).map((_, i) => ({
  id: i,
  left: `${Math.random() * 150 - 50}%`, 
  animationDuration: `${Math.random() * 10 + 10}s`, 
  animationDelay: `-${Math.random() * 20}s`, 
  opacity: Math.random() * 0.4 + 0.1, 
  size: `${Math.random() * 4 + 2}px`,
  // 50% chance to be cyan or blue
  isCyan: Math.random() > 0.5 
}));

export default function Background() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-neutral-950 pointer-events-none">
      {/* Subtle Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay z-10" 
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' 
        }}
      />
      
      {/* NEW: Animated Cyber-Grid Matrix */}
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{
          // Creates the grid lines using your brand colors
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
          // Fades the grid out at the edges of the screen so it isn't harsh
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
          // Slowly pans the grid diagonally
          animation: 'grid-pan 20s linear infinite'
        }}
      />

      {/* Dynamic Snow Moving Right */}
      {snowflakes.map(flake => (
        <div
          key={flake.id}
          className={`absolute rounded-full z-10 ${flake.isCyan ? 'bg-cyan-400' : 'bg-blue-500'}`}
          style={{
            left: flake.left,
            top: '-10%',
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
            boxShadow: `0 0 ${flake.size} ${flake.isCyan ? 'rgba(34, 211, 238, 0.5)' : 'rgba(59, 130, 246, 0.5)'}`,
            animation: `snow-fall-right ${flake.animationDuration} linear infinite`,
            animationDelay: flake.animationDelay
          }}
        />
      ))}

      {/* CSS Keyframes for both the Snow and the Grid */}
      <style>{`
        @keyframes snow-fall-right {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40vw, 110vh); }
        }
        
        @keyframes grid-pan {
          0% { background-position: 0 0; }
          /* 4rem matches the backgroundSize exactly, creating a seamless infinite loop */
          100% { background-position: 4rem 4rem; } 
        }
      `}</style>
    </div>
  );
}