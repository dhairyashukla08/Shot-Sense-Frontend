import React, { useState } from 'react';
import { Focus, Grid3X3, Target, Maximize } from 'lucide-react';

export const VirtualViewfinder = ({ children }) => {
  const [showGrid, setShowGrid] = useState(true);

  return (
    <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-black">
      {/* 1. The Image Content */}
      <div className="relative z-0">
        {children}
      </div>

      {/* 2. Scanning Laser Animation */}
     <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
  <div className="absolute left-0 w-full h-[2px] bg-primary shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-[scan_3s_linear_infinite]" />
</div>

      {/* 3. Viewfinder UI Overlays */}
      <div className="absolute inset-0 z-20 p-4 pointer-events-none flex flex-col justify-between">
        {/* Top Row: Camera Stats */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-2 py-1 rounded border border-white/10">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] font-mono text-white tracking-tighter">AI_SENSE_ACTIVE</span>
            </div>
            <span className="text-[10px] font-mono text-white/40">RAW_DATA_V.2.6</span>
          </div>
          <button 
            onClick={() => setShowGrid(!showGrid)}
            className="pointer-events-auto p-2 rounded-full bg-white/5 hover:bg-white/20 backdrop-blur-md transition-all"
          >
            <Grid3X3 className={`h-4 w-4 ${showGrid ? 'text-primary' : 'text-white/20'}`} />
          </button>
        </div>

        {/* Center: Composition Grid */}
        {showGrid && (
          <div className="absolute inset-0 flex">
            <div className="flex-1 border-r border-white/10" />
            <div className="flex-1 border-r border-white/10" />
            <div className="flex-1" />
            <div className="absolute inset-0 flex flex-col">
              <div className="flex-1 border-b border-white/10" />
              <div className="flex-1 border-b border-white/10" />
              <div className="flex-1" />
            </div>
          </div>
        )}

        {/* Center Target */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
          <Target className="h-12 w-12 text-white" strokeWidth={1} />
        </div>

        {/* Bottom Row: Metadata Sim */}
        <div className="flex justify-between items-end font-mono text-[10px] text-white/60">
          <div className="flex gap-4">
            <span>F2.8</span>
            <span>1/250</span>
            <span>ISO 400</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-primary">AF-C</span>
            <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="w-2/3 h-full bg-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};