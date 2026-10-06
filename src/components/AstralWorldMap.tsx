import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ASSETS } from '../assets/gameAssets';
import type { StoryIsland } from '../data/storyData';
import { ComicAvatar } from './ComicGraphics';
import { Sparkles, Swords, Play } from 'lucide-react';

interface AstralWorldMapProps {
  islands: StoryIsland[];
  onSelectIsland: (island: StoryIsland) => void;
}

export const AstralWorldMap: React.FC<AstralWorldMapProps> = ({ islands, onSelectIsland }) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [zoomingId, setZoomingId] = useState<string | null>(null);
  const [bgFailed, setBgFailed] = useState(false);

  // Position coordinates for the 10 Mythic Floating Isles
  const islandPositions = [
    { x: 14, y: 32 },
    { x: 30, y: 20 },
    { x: 46, y: 42 },
    { x: 62, y: 18 },
    { x: 76, y: 34 },
    { x: 88, y: 55 },
    { x: 70, y: 72 },
    { x: 50, y: 82 },
    { x: 30, y: 74 },
    { x: 14, y: 60 }
  ];

  const handleNodeClick = (island: StoryIsland) => {
    setZoomingId(island.id);
    setTimeout(() => {
      onSelectIsland(island);
      setZoomingId(null);
    }, 600);
  };

  return (
    <div className="relative w-full min-h-[calc(100vh-70px)] flex flex-col items-center justify-center p-4 sm:p-8 overflow-hidden select-none bg-halftone">
      
      {/* Background Image with Fallback */}
      {!bgFailed ? (
        <img
          src={ASSETS.mapBg}
          alt="Astral Map Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40 filter brightness-50 contrast-125 z-0 pointer-events-none"
          onError={() => setBgFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 bg-[#090a0f] z-0 pointer-events-none" />
      )}

      {/* Atmospheric Dark Overlay & Floating Celestial Particles */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090a0f]/90 via-[#0f172a]/60 to-[#090a0f]/95 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-purple-950/20 to-transparent pointer-events-none z-0" />

      {/* Floating Dust Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-amber-400 animate-pulse"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 4 + 2}s`
            }}
          />
        ))}
      </div>

      {/* SVG Connecting Golden Ley-Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <linearGradient id="astral-leyline" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#dc2626" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {islands.map((isl, idx) => {
          if (idx === islands.length - 1) return null;
          const currCoords = islandPositions[idx] || { x: 10 + idx * 8, y: 30 };
          const nextCoords = islandPositions[idx + 1] || { x: 18 + idx * 8, y: 40 };

          return (
            <line
              key={isl.id}
              x1={`${currCoords.x}%`}
              y1={`${currCoords.y}%`}
              x2={`${nextCoords.x}%`}
              y2={`${nextCoords.y}%`}
              stroke="url(#astral-leyline)"
              strokeWidth="2.5"
              className="animate-leyline"
            />
          );
        })}
      </svg>

      {/* Header Banner */}
      <div className="relative z-10 text-center space-y-2 mb-8 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border-2 border-amber-500/50 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase shadow-lg">
          <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
          ASTRAL MAP • 10 MYTHIC ISLAND PORTALS
        </div>

        <h1 className="text-4xl sm:text-6xl font-comic text-amber-100 tracking-wider drop-shadow-[0_4px_16px_rgba(245,158,11,0.5)]">
          MAHABHARATA: FRACTURED FATES
        </h1>

        <p className="text-xs sm:text-sm text-slate-300 font-epic italic">
          Hover over portals to reveal the scenario, then click to launch the Graphic Novel Stage.
        </p>
      </div>

      {/* 10 Floating Octagonal/Circular Portals */}
      <div className="relative w-full max-w-6xl h-[540px] z-10">
        {islands.map((island, index) => {
          const coords = islandPositions[index] || { x: 10 + index * 8, y: 30 };
          const isHovered = hoveredId === island.id;
          const isZooming = zoomingId === island.id;

          return (
            <motion.div
              key={island.id}
              style={{
                left: `${coords.x}%`,
                top: `${coords.y}%`
              }}
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.3
              }}
              onMouseEnter={() => setHoveredId(island.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => handleNodeClick(island)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                isZooming ? 'scale-150 filter blur-sm opacity-40' : isHovered ? 'scale-125 z-30' : 'z-10'
              }`}
            >
              {/* Floating Octagonal / Circular Island Portal Node */}
              <div className={`relative p-3 rounded-2xl bg-slate-950 border-4 transition-all shadow-[8px_8px_0px_#000] flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 ${
                isHovered ? 'border-amber-400 gold-glow ring-4 ring-amber-400/40 bg-slate-900' : 'border-black hover:border-amber-400'
              }`}>
                
                {/* Character Avatar / Scene Graphic */}
                <div className="w-16 h-14 rounded-lg overflow-hidden border-2 border-black mb-1 relative flex items-center justify-center bg-slate-900">
                  <ComicAvatar character={island.characterKey} className="w-16 h-20 scale-125" />
                </div>

                {/* Island Title & Era */}
                <div className="text-xs font-comic text-amber-300 text-center leading-none truncate max-w-full px-1">
                  ISLAND {island.number}
                </div>
                <div className="text-[9px] font-mono text-slate-400 text-center truncate max-w-full mt-0.5">
                  {island.era}
                </div>

                {/* Hover Runic Glow Star Badge */}
                {isHovered && (
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-xs animate-bounce shadow-md border-2 border-black">
                    ★
                  </span>
                )}
              </div>

              {/* Hover Preview Card Popup */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 p-4 rounded-2xl bg-slate-950 border-3 border-amber-400 shadow-[8px_8px_0px_#000] z-50 pointer-events-none space-y-2"
                  >
                    <div className="flex items-center justify-between border-b-2 border-slate-800 pb-1.5">
                      <span className="font-comic text-base text-amber-300">
                        {island.number}. {island.title}
                      </span>
                      <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded border border-amber-500/40">
                        {island.era}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-300 leading-relaxed font-serif italic line-clamp-3">
                      "{island.summary}"
                    </p>

                    <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-amber-400">
                      <span className="flex items-center gap-1">
                        <Swords className="w-3.5 h-3.5 text-amber-400" />
                        {island.speakerName}
                      </span>
                      <span className="font-bold flex items-center gap-1 text-amber-300">
                        LAUNCH SCENARIO <Play className="w-3 h-3 fill-amber-300" />
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

    </div>
  );
};
