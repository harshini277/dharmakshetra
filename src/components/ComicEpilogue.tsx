import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { IslandEnding } from '../types';
import { ComicPanel } from './ComicGraphics';
import { RotateCcw, ArrowRight, Quote, Compass } from 'lucide-react';

interface ComicEpilogueProps {
  ending: IslandEnding | null;
  onRewindIssue: () => void;
  onReturnToOverworld: () => void;
  onNextIssue: () => void;
  hasNextIssue: boolean;
}

export const ComicEpilogue: React.FC<ComicEpilogueProps> = ({
  ending,
  onRewindIssue,
  onReturnToOverworld,
  onNextIssue,
  hasNextIssue
}) => {
  if (!ending) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
        
        {/* "WHAT IF...?" SPECIAL ISSUE COMIC COVER MODAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.85, rotate: 2 }}
          transition={{ duration: 0.4 }}
          className="relative w-full max-w-2xl my-8 rounded-3xl bg-slate-950 border-4 border-amber-400 shadow-[12px_12px_0px_#000] p-6 sm:p-8 space-y-6 overflow-hidden select-none"
        >
          {/* Top Banner: WHAT IF...? SPECIAL ISSUE */}
          <div className="bg-amber-500 border-b-4 border-black p-3 text-center shadow-md -mx-6 -mt-6 sm:-mx-8 sm:-mt-8">
            <div className="font-comic text-2xl sm:text-4xl text-slate-950 tracking-widest leading-none">
              ★ WHAT IF...? SPECIAL ISSUE ★
            </div>
            <p className="text-[11px] font-mono text-slate-950 font-bold uppercase mt-1">
              DHARMAKSHETRA MULTIVERSE CHRONICLES • ISSUE #{ending.isCanonical ? '0-CANON' : `${ending.divergencePercentage}-ALT`}
            </p>
          </div>

          {/* Central Dramatic Art Splash */}
          <div className="relative rounded-2xl overflow-hidden border-4 border-black shadow-[6px_6px_0px_#000] h-48 sm:h-56">
            <ComicPanel scene={ending.isCanonical ? 'kurukshetra_dust' : 'dice_chamber'} className="w-full h-full border-none rounded-none" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />
            
            <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold bg-amber-400 text-slate-950 px-2 py-0.5 rounded border border-black uppercase">
                  TIMELINE FATE: {ending.moralTitle}
                </span>
                <h3 className="font-comic text-2xl sm:text-3xl text-amber-100 tracking-wide mt-1">
                  {ending.title}
                </h3>
              </div>

              <div className="px-3 py-1 bg-purple-950 border-2 border-purple-400 text-purple-200 font-mono text-xs font-bold rounded-lg shadow">
                {ending.divergencePercentage}% DIVERGENCE
              </div>
            </div>
          </div>

          {/* Epilogue & Narrative Description */}
          <div className="space-y-3 p-4 rounded-xl bg-slate-900 border-2 border-black text-xs sm:text-sm text-slate-200 leading-relaxed font-serif">
            <p className="font-sans">{ending.description}</p>
            <p className="text-amber-300 italic border-t border-slate-800 pt-2">
              "{ending.epilogueText}"
            </p>
          </div>

          {/* Sacred Quote */}
          <div className="p-4 rounded-xl bg-amber-500/10 border-2 border-amber-500/40 relative">
            <Quote className="w-5 h-5 text-amber-400/30 absolute top-2 right-3" />
            <p className="text-xs sm:text-sm text-amber-100 font-serif italic">
              "{ending.quote.text}"
            </p>
            <p className="text-[10px] text-amber-300/70 font-mono text-right mt-1">
              — {ending.quote.source}
            </p>
          </div>

          {/* Philosophical Analysis */}
          <div className="space-y-1">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
              Dharma Philosophical Analysis
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {ending.philosophicalAnalysis}
            </p>
          </div>

          {/* Action Buttons Footer */}
          <div className="pt-4 border-t-2 border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={onRewindIssue}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border-2 border-black text-slate-200 font-comic text-sm transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                [REWIND ISSUE (REPLAY)]
              </button>

              <button
                onClick={onReturnToOverworld}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-purple-900 hover:bg-purple-800 border-2 border-black text-purple-100 font-comic text-sm transition-all"
              >
                <Compass className="w-4 h-4" />
                [RETURN TO ASTRAL OVERWORLD]
              </button>
            </div>

            {hasNextIssue && (
              <button
                onClick={onNextIssue}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-comic text-base border-2 border-black shadow-lg transition-all"
              >
                <span>NEXT ISSUE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
