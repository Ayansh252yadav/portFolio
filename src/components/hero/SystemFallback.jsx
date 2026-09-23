import React from 'react';

/**
 * High-performance, accessible SVG/CSS fallback for the distributed system visual.
 * Used when WebGL is unavailable, failed, or on ultra low-power devices.
 */
export function SystemFallback() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 dark:opacity-20 flex items-center justify-center">
      <svg
        className="w-full h-full max-w-4xl"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-300 dark:text-slate-700" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" opacity="0.6" />
        
        {/* System Topology Graph Lines */}
        <path d="M150 300 L300 200 L450 250 L600 180" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />
        <path d="M300 200 L350 400 L500 380 L600 180" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.3" />
        <path d="M450 250 L500 380 L650 420" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />

        {/* Nodes */}
        <circle cx="150" cy="300" r="4" fill="#38bdf8" opacity="0.8" />
        <circle cx="300" cy="200" r="5" fill="#38bdf8" opacity="0.9" />
        <circle cx="450" cy="250" r="5" fill="#38bdf8" opacity="0.9" />
        <circle cx="600" cy="180" r="6" fill="#38bdf8" opacity="0.9" />
        <circle cx="350" cy="400" r="4" fill="#38bdf8" opacity="0.7" />
        <circle cx="500" cy="380" r="5" fill="#38bdf8" opacity="0.8" />
        <circle cx="650" cy="420" r="4" fill="#38bdf8" opacity="0.6" />
      </svg>
    </div>
  );
}
