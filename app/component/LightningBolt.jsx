// components/LightningBolt.jsx
"use client";

import React from "react";

/**
 * Custom lightning bolt SVG — scalable, accessible.
 * Props:
 *  - width, height: size (default 72)
 *  - className: tambahan class Tailwind
 *  - fill: fallback fill color (default gradient handled inside)
 */
export default function LightningBolt({ width = 80, height = 80, className = "" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Lightning bolt logo"
      className={className}
    >
      <defs>
        <linearGradient id="boltGrad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#2DAAFF" />
          <stop offset="50%" stopColor="#4F55FF" />
          <stop offset="100%" stopColor="#7B2BFF" />
        </linearGradient>

        <filter id="boltShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#000000" floodOpacity="0.45" />
        </filter>
      </defs>

      {/* main bolt shape (path drawn to be bold and stylized) */}
      <path
        d="M42 8 L142 8 L96 96 L156 96 L58 192 L96 104 L42 104 Z"
        fill="url(#boltGrad)"
        filter="url(#boltShadow)"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* subtle highlight */}
      <path
        d="M76 36 L120 36 L88 84 L124 84 L86 144 L100 116 L76 116 Z"
        fill="rgba(255,255,255,0.12)"
        opacity="0.35"
      />
    </svg>
  );
}
