import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Scroll, BookOpen, Shield, Sparkles } from 'lucide-react';
import type { WebtoonIsland } from '../data/webtoonData';

interface LoreDrawerProps {
  isOpen: boolean;
  island: WebtoonIsland | null;
  onClose: () => void;
}

export const LoreDrawer: React.FC<LoreDrawerProps> = ({ isOpen, island, onClose }) => {
  if (!isOpen || !island) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs">
        {/* Backdrop click */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Sliding Drawer Container */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative w-full max-w-md h-full bg-[#FFFDF7] border-l-4 border-[#D4AF37] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto text-[#2C1810] font-serif z-10"
        >
          {/* Header */}
          <div>
            <div className="flex items-center justify-between pb-4 border-b-2 border-[#D4AF37]">
              <div className="flex items-center space-x-2">
                <Scroll className="w-5 h-5 text-[#8E2800]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#8E2800]">
                  Original Itihasa Lore
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-[#FAF4E6] text-[#8E2800] transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="mt-6 space-y-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#A06D12] bg-[#FAF2E1] px-2.5 py-0.5 rounded border border-[#D4AF37]">
                  {island.parva} • {island.era}
                </span>
                <h2 className="text-2xl font-extrabold text-[#8E2800] mt-2 leading-tight">
                  {island.title}
                </h2>
              </div>

              {/* Key Figures */}
              <div className="p-4 bg-[#FAF4E6] rounded-xl border border-[#D4AF37]">
                <div className="flex items-center space-x-2 text-xs font-bold text-[#8E2800] mb-2">
                  <Shield className="w-4 h-4" />
                  <span>Key Historical Figures</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {island.keyCharacters?.map((char, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-bold bg-[#FFFDF7] border border-[#D4AF37] text-[#2C1810] px-2.5 py-1 rounded-md shadow-xs"
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </div>

              {/* Epilogue Lore Summary */}
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-[#8E2800] flex items-center space-x-1.5">
                  <BookOpen className="w-4 h-4" />
                  <span>Canonical Narrative Impact</span>
                </h3>
                <p className="text-xs text-[#5D4037] leading-relaxed">
                  {island.epilogue?.summary || "This pivotal event in the epic establishes the karmic trajectory of the Kuru dynasty, directly influencing the resolution at Kurukshetra."}
                </p>
              </div>

              {/* Philosophical Note */}
              <div className="p-4 bg-[#FAF2E1] rounded-xl border-l-4 border-[#8E2800] text-xs text-[#2C1810] italic">
                <Sparkles className="w-4 h-4 text-[#A06D12] mb-1 inline mr-1" />
                "Dharma is subtle. A single choice made in the sacred forest or dicing hall echoes through generations."
              </div>
            </div>
          </div>

          {/* Footer Close Button */}
          <div className="pt-6 border-t border-[#D4AF37]/40 mt-6">
            <button
              onClick={onClose}
              className="w-full py-2.5 bg-[#8E2800] hover:bg-[#6D1F00] text-white font-bold text-xs uppercase tracking-wider rounded border border-[#D4AF37] transition shadow cursor-pointer"
            >
              Close Lore Scroll
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
