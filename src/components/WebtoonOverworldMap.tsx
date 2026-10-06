import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { WebtoonIsland } from '../data/webtoonData';
import { ASSETS } from '../assets/gameAssets';
import { Scroll, Sparkles } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface WebtoonOverworldMapProps {
  islands: WebtoonIsland[];
  onSelectIsland: (island: WebtoonIsland) => void;
  completedIslandIds: string[];
}

export const WebtoonOverworldMap: React.FC<WebtoonOverworldMapProps> = ({
  islands,
  onSelectIsland,
  completedIslandIds,
}) => {
  const [hoveredIslandId, setHoveredIslandId] = useState<string | null>(null);

  // 10 Coordinates for Floating Medallions across Aryavarta Map
  const nodePositions = [
    { top: '18%', left: '15%' }, // 1. Forest of Shatashringa
    { top: '22%', left: '42%' }, // 2. Arena of Prodigies
    { top: '34%', left: '26%' }, // 3. House of Lac
    { top: '46%', left: '16%' }, // 4. Swayamvara of Panchala
    { top: '38%', left: '60%' }, // 5. Khandavaprastha
    { top: '56%', left: '48%' }, // 6. Hall of Loaded Dice
    { top: '64%', left: '25%' }, // 7. Banishment Pact
    { top: '72%', left: '68%' }, // 8. Shadow in Matsya
    { top: '80%', left: '38%' }, // 9. Peace Envoy in Dwarka
    { top: '85%', left: '80%' }, // 10. Fall of Guru at Kurukshetra
  ];

  return (
    <div className="relative min-h-[calc(100vh-65px)] w-full bg-[#fffdf7] text-[#2a1810] overflow-hidden flex flex-col items-center justify-center p-4">
      
      {/* Background Layer: Real Local Map Image with Warm Parchment Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.mapBg}
          alt="Map of Aryavarta"
          className="w-full h-full object-cover object-center opacity-40 mix-blend-multiply"
          onError={(e) => {
            // Fallback if image path fails
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
        {/* Soft Parchment Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fffdf7]/80 via-[#f5eedb]/70 to-[#ead8b1]/80" />
      </div>

      {/* Rotating Sacred Yantra Motif */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-25 z-0">
        <svg className="w-[700px] h-[700px] text-[#aa7c11] animate-yantra" viewBox="0 0 100 100">
          <polygon points="50,5 90,85 10,85" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <polygon points="50,95 90,15 10,15" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Connecting Golden Ley-Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-60">
        {nodePositions.map((pos, idx) => {
          if (idx === nodePositions.length - 1) return null;
          const next = nodePositions[idx + 1];
          return (
            <line
              key={`line-${idx}`}
              x1={pos.left}
              y1={pos.top}
              x2={next.left}
              y2={next.top}
              stroke="#aa7c11"
              strokeWidth="2.5"
              strokeDasharray="6,4"
              className="animate-pulse"
            />
          );
        })}
      </svg>

      {/* Header Banner */}
      <div className="relative z-20 text-center max-w-2xl my-4 px-4">
        <div className="inline-flex items-center gap-2 bg-[#fffdf7] border-2 border-[#d4af37] px-4 py-1.5 rounded-full shadow-md mb-2">
          <Sparkles className="w-4 h-4 text-[#8c3b22]" />
          <span className="text-xs font-parchment text-[#8c3b22] font-bold tracking-widest uppercase">
            SACRED OVERWORLD MAP OF ARYAVARTA
          </span>
        </div>
        <h2 className="font-vedic text-3xl sm:text-4xl text-[#8c3b22] font-extrabold drop-shadow-sm">
          Tales of the 10 Sacred Isles
        </h2>
        <p className="text-sm font-parchment text-[#2a1810] font-medium mt-1 max-w-xl mx-auto">
          Click any floating temple medallion to unroll the vertical Webtoon comic scroll.
        </p>
      </div>

      {/* Interactive Map Stage (10 Floating Medallions) */}
      <div className="relative z-20 w-full max-w-5xl h-[620px] my-2 rounded-2xl border-4 border-[#d4af37] bg-[#f5eedb]/80 shadow-2xl overflow-hidden backdrop-blur-sm">
        
        {/* Render 10 Floating Medallion Nodes */}
        {islands.map((island, index) => {
          const pos = nodePositions[index] || { top: '50%', left: '50%' };
          const isHovered = hoveredIslandId === island.id;
          const isCompleted = completedIslandIds.includes(island.id);

          return (
            <div
              key={island.id}
              style={{ top: pos.top, left: pos.left }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
              onMouseEnter={() => {
                setHoveredIslandId(island.id);
                audioEngine.playSoundFx('click');
              }}
              onMouseLeave={() => setHoveredIslandId(null)}
            >
              {/* Floating Medallion Node Button */}
              <motion.button
                onClick={() => {
                  audioEngine.playSoundFx('gong');
                  onSelectIsland(island);
                }}
                animate={{
                  y: [0, -10, 0],
                  scale: isHovered ? 1.15 : 1,
                }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 },
                  scale: { duration: 0.2 },
                }}
                className={`group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full cursor-pointer transition-all ${
                  isHovered
                    ? 'bg-gradient-to-br from-[#d4af37] via-[#e25822] to-[#8c3b22] shadow-[0_0_25px_#d4af37]'
                    : isCompleted
                    ? 'bg-[#8c3b22] border-4 border-[#d4af37] shadow-md'
                    : 'bg-[#fffdf7] border-4 border-[#aa7c11] shadow-md'
                }`}
              >
                {/* Medallion Inner Ring */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#d4af37] flex items-center justify-center bg-[#f5eedb]">
                  <span className={`font-heading text-base font-bold ${isHovered || isCompleted ? 'text-[#8c3b22]' : 'text-[#aa7c11]'}`}>
                    {index + 1}
                  </span>
                </div>

                {/* Status Indicator Badge */}
                {isCompleted && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#d4af37] text-[#8c3b22] text-[10px] font-bold rounded-full flex items-center justify-center shadow">
                    ✓
                  </span>
                )}

                {/* Pulse Ring on Hover */}
                {isHovered && (
                  <span className="absolute inset-0 rounded-full border-2 border-[#8c3b22] animate-ping pointer-events-none" />
                )}
              </motion.button>

              {/* Hover Parchment Preview Card */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64 sm:w-72 bg-[#fffdf7] text-[#2a1810] p-4 rounded-xl border-4 border-[#d4af37] gold-card-shadow z-50 pointer-events-auto"
                  >
                    {/* Parva Tag & Era */}
                    <div className="flex items-center justify-between mb-1">
                      <span className="bg-[#8c3b22] text-[#fffdf7] text-[10px] font-bold font-ui px-2 py-0.5 rounded uppercase tracking-wider">
                        {island.parva}
                      </span>
                      <span className="text-[10px] font-parchment italic text-[#aa7c11] font-bold">
                        Isle #{index + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-base font-bold text-[#8c3b22] leading-tight mb-1">
                      {island.title}
                    </h3>
                    <p className="text-xs font-parchment text-[#2a1810]/80 italic mb-2">
                      {island.era}
                    </p>

                    {/* Key Figures */}
                    <div className="text-[11px] font-parchment border-t border-[#d8c4a0] pt-2 mb-3">
                      <span className="font-bold text-[#aa7c11]">Key Figures: </span>
                      {island.keyCharacters.join(', ')}
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => {
                        audioEngine.playSoundFx('gong');
                        onSelectIsland(island);
                      }}
                      className="w-full py-2 bg-gradient-to-r from-[#aa7c11] via-[#d4af37] to-[#aa7c11] hover:brightness-110 text-[#fffdf7] font-ui font-extrabold text-xs uppercase tracking-widest rounded border border-[#aa7c11] shadow transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-1"
                    >
                      <Scroll className="w-3.5 h-3.5" />
                      <span>Enter the Scroll →</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          );
        })}

      </div>

      {/* Footer Info */}
      <div className="relative z-20 text-center text-xs font-parchment text-[#8c3b22] font-bold mt-2">
        <span>Chronicles Unlocked: {completedIslandIds.length} / {islands.length}</span>
      </div>

    </div>
  );
};
