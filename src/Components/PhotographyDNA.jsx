import React from 'react';
import { motion } from 'framer-motion';

const PhotographyDNA = ({ data }) => {
  // Config
  const size = 300;
  const center = size / 2;
  const radius = size * 0.4;
  
  // Define the axes/metrics for your "DNA"
  const metrics = [
    { key: 'composition', label: 'Structure', value: data.composition || 0 },
    { key: 'lighting', label: 'Luminance', value: data.lighting || 0 },
    { key: 'color', label: 'Chroma', value: data.color || 0 },
    { key: 'story', label: 'Narrative', value: data.story || 0 },
    { key: 'technical', label: 'Clarity', value: data.technical || 0 },
  ];

  // Helper: Convert Polar coordinates to Cartesian (SVG x,y)
  const getCoordinates = (index, total, value) => {
    const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
    const distance = (value / 100) * radius;
    return {
      x: center + distance * Math.cos(angle),
      y: center + distance * Math.sin(angle),
    };
  };

  // Generate the path string for the DNA shape
  const points = metrics.map((m, i) => getCoordinates(i, metrics.length, m.value));
  const pathData = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
        {/* 1. Background Grid (Concentric Pentagons) */}
        {[0.2, 0.4, 0.6, 0.8, 1].map((tick) => {
            const gridPoints = metrics.map((_, i) => getCoordinates(i, metrics.length, tick * 100));
            const gridPath = gridPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ') + ' Z';
            return (
                <path key={tick} d={gridPath} fill="none" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
            );
        })}

        {/* 2. Axis Lines */}
        {metrics.map((_, i) => {
          const p = getCoordinates(i, metrics.length, 100);
          return (
            <line key={i} x1={center} y1={center} x2={p.x} y2={p.y} stroke="white" strokeOpacity="0.1" strokeDasharray="4 4" />
          );
        })}

        {/* 3. The Animated DNA Shape */}
        <motion.path
          d={pathData}
          fill="rgba(var(--primary-rgb), 0.3)" // Assumes you have a primary color variable
          stroke="var(--primary)"
          strokeWidth="3"
          initial={{ pathLength: 0, opacity: 0, scale: 0.5 }}
          animate={{ pathLength: 1, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "circOut" }}
        />

        {/* 4. Labels */}
        {metrics.map((m, i) => {
          const p = getCoordinates(i, metrics.length, 120); // Place labels outside the max radius
          return (
            <text
              key={i}
              x={p.x}
              y={p.y}
              fill="white"
              fillOpacity="0.5"
              fontSize="10"
              fontWeight="bold"
              textAnchor="middle"
              className="uppercase tracking-tighter"
            >
              {m.label}
            </text>
          );
        })}
      </svg>
      
      {/* Center Glow Decorator */}
      <div className="absolute w-2 h-2 bg-primary rounded-full blur-sm animate-pulse" />
    </div>
  );
};

export default PhotographyDNA;