import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Island } from '../types';
import { COMIC_ART_MANIFEST } from '../data/comicAssets';
import { Sparkles, Swords, Play } from 'lucide-react';

interface OverworldCosmosMapProps {
  islands: Island[];
  onBreachRealm: (islandId: string) => void;
}

export const OverworldCosmosMap: React.FC<OverworldCosmosMapProps> = ({ islands, onBreachRealm }) => {
  const [hoveredIslandId, setHoveredIslandId] = useState<string | null>(null);
  const [breachingIslandId, setBreachingIslandId] = useState<string | null>(null);

  const handleIslandClick = (islandId: string) => {
    setBreachingIslandId(islandId);
    setTimeout(() => {
      onBreachRealm(islandId);
      setBreachingIslandId(null);
    }, 600);
  };

  return (
    <div className="relative w-full min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-4 sm:p-8 overflow-hidden select-none bg-halftone">
      
      {/* Background Cosmic Starfield & Dark Nebulas */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 opacity-90 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-purple-900/10 to-transparent pointer-events-none" />

      {/* SVG Connecting Ley-Lines Graph */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <linearGradient id="leyline-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#dc2626" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {islands.map((isl, idx) => {
          if (idx === islands.length - 1) return null;
          const nextIsl = islands[idx + 1];
          const currCoords = COMIC_ART_MANIFEST[isl.id]?.leyLineCoords || { x: 10 + idx * 8, y: 30 };
          const nextCoords = COMIC_ART_MANIFEST[nextIsl.id]?.leyLineCoords || { x: 18 + idx * 8, y: 40 };

          return (
            <line
              key={isl.id}
              x1={`${currCoords.x}%`}
              y1={`${currCoords.y}%`}
              x2={`${nextCoords.x}%`}
              y2={`${nextCoords.y}%`}
              stroke="url(#leyline-grad)"
              strokeWidth="2.5"
              className="animate-leyline"
            />
          );
        })}
      </svg>

      {/* Header Banner */}
      <div className="relative z-10 text-center space-y-2 mb-8 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
          The Cosmic Crossroads • 10 Mythic Sandboxes
        </div>

        <h1 className="text-3xl sm:text-5xl font-comic text-amber-100 tracking-wider drop-shadow-[0_4px_12px_rgba(245,158,11,0.4)]">
          SELECT YOUR DECISION REALM
        </h1>

        <p className="text-xs sm:text-sm text-slate-300 font-epic italic">
          Hover over floating landmasses to preview the epic dilemma, then Breach the Realm to rewrite history.
        </p>
      </div>

      {/* Interactive 10 Floating Mythic Isles Map */}
      <div className="relative w-full max-w-6xl h-[520px] z-10">
        {islands.map((island, index) => {
          const asset = COMIC_ART_MANIFEST[island.id];
          const coords = asset?.leyLineCoords || { x: 10 + index * 8, y: 30 };
          const isHovered = hoveredIslandId === island.id;
          const isBreaching = breachingIslandId === island.id;

          return (
            <div
              key={island.id}
              style={{
                left: `${coords.x}%`,
                top: `${coords.y}%`,
                animationDelay: `${index * 0.4}s`
              }}
              onMouseEnter={() => setHoveredIslandId(island.id)}
              onMouseLeave={() => setHoveredIslandId(null)}
              onClick={() => handleIslandClick(island.id)}
              className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 animate-float-island ${
                isBreaching ? 'scale-150 filter blur-sm opacity-50' : isHovered ? 'scale-125 z-30' : 'z-10'
              }`}
            >
              {/* Island Floating Card Node */}
              <div className={`relative p-3 rounded-2xl bg-slate-950 border-2 transition-all shadow-2xl flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 ${
                isHovered
                  ? 'border-amber-400 gold-glow bg-slate-900 ring-4 ring-amber-500/30'
                  : 'border-amber-500/40 hover:border-amber-400'
              }`}>
                
                {/* Mythic Icon Illustration */}
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-amber-500/50 shadow-md mb-1 relative">
                  <img
                    src={asset?.islandIcon || 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=300&q=80'}
                    alt={island.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                </div>

                {/* Number & Title */}
                <div className="text-[11px] font-comic text-amber-300 text-center leading-tight truncate max-w-full px-1">
                  ISLAND {island.number}
                </div>
                <div className="text-[9px] font-mono text-slate-400 text-center truncate max-w-full">
                  {island.era}
                </div>

                {/* Hover Glow Particle Badge */}
                {isHovered && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-[10px] animate-bounce shadow-md">
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
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 p-4 rounded-xl bg-slate-950/95 border-2 border-amber-400 shadow-2xl z-50 pointer-events-none space-y-2 backdrop-blur-xl"
                  >
                    <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                      <span className="font-comic text-sm text-amber-300">
                        {island.number}. {island.title}
                      </span>
                      <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded">
                        {island.era}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-300 leading-relaxed font-serif italic line-clamp-3">
                      "{island.summary}"
                    </p>

                    <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-amber-400">
                      <span className="flex items-center gap-1">
                        <Swords className="w-3 h-3 text-amber-400" />
                        {island.heroCharacter.name} vs {island.opponentCharacter.name}
                      </span>
                      <span className="font-bold flex items-center gap-0.5 text-amber-300">
                        Breach Realm <Play className="w-2.5 h-2.5 fill-amber-300" />
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

    </div>
  );
};
