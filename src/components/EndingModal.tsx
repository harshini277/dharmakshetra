import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { IslandEnding } from '../types';
import { Trophy, RotateCcw, ArrowRight, GitBranch, Quote } from 'lucide-react';

interface EndingModalProps {
  ending: IslandEnding | null;
  onRestartIsland: () => void;
  onNextIsland: () => void;
  onOpenTimelineView: () => void;
  hasNextIsland: boolean;
}

export const EndingModal: React.FC<EndingModalProps> = ({
  ending,
  onRestartIsland,
  onNextIsland,
  onOpenTimelineView,
  hasNextIsland
}) => {
  if (!ending) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.4 }}
          className="relative w-full max-w-2xl my-8 rounded-2xl bg-slate-950 border border-amber-500/50 shadow-2xl p-6 sm:p-8 space-y-6 overflow-hidden"
        >
          {/* Background Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-b from-amber-500/20 via-yellow-500/5 to-transparent pointer-events-none" />

          {/* Top Badge: Canonical vs Multiverse Fractured */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-400 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-amber-300">
                Timeline Resolution Reached
              </span>
            </div>

            <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
              ending.isCanonical
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                : 'bg-purple-500/20 text-purple-300 border-purple-500/40'
            }`}>
              {ending.isCanonical ? 'Canonical Vyasa Lore' : 'Fractured Timeline'}
            </span>
          </div>

          {/* Ending Title & Subtitle */}
          <div className="space-y-2 text-center">
            <div className="text-xs font-mono text-amber-400/80 uppercase tracking-widest">
              Title Earned: <span className="text-amber-200 font-bold">{ending.moralTitle}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold gold-text-gradient">
              {ending.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-serif italic">
              {ending.subtitle}
            </p>
          </div>

          {/* Summary & Epilogue Description */}
          <div className="space-y-3 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <p className="font-sans">{ending.description}</p>
            <p className="text-amber-200/90 italic border-t border-slate-800 pt-2 font-serif">
              "{ending.epilogueText}"
            </p>
          </div>

          {/* Sacred Quote */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-1 relative">
            <Quote className="w-5 h-5 text-amber-400/40 absolute top-2 right-3" />
            <p className="text-xs sm:text-sm text-amber-100 font-serif italic">
              "{ending.quote.text}"
            </p>
            <p className="text-[10px] text-amber-300/70 font-mono text-right">
              — {ending.quote.source}
            </p>
          </div>

          {/* Philosophical Analysis */}
          <div className="space-y-1">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Dharma Philosophical Analysis
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {ending.philosophicalAnalysis}
            </p>
          </div>

          {/* Action Footer Buttons */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={onRestartIsland}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Replay Island
              </button>

              <button
                onClick={onOpenTimelineView}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-purple-950/60 hover:bg-purple-900/60 border border-purple-500/40 text-purple-200 text-xs font-semibold transition-all"
              >
                <GitBranch className="w-3.5 h-3.5" />
                View Map
              </button>
            </div>

            {hasNextIsland && (
              <button
                onClick={onNextIsland}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/20 transition-all transform hover:scale-105"
              >
                <span>Advance to Next Island</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
