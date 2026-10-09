import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { StoryChoice, StoryIsland } from '../data/storyData';
import { ComicPanel } from './ComicGraphics';
import { RotateCcw, ArrowRight, Quote, Compass } from 'lucide-react';

interface ComicEpilogueProps {
  island: StoryIsland;
  choice: StoryChoice | null;
  onRewindChoice: () => void;
  onReturnToAstralMap: () => void;
  onNextIsland?: () => void;
}

export const ComicEpilogue: React.FC<ComicEpilogueProps> = ({
  island,
  choice,
  onRewindChoice,
  onReturnToAstralMap,
  onNextIsland
}) => {
  if (!choice) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
        
        {/* Full-width Graphic Novel Resolution Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.85, rotate: 2 }}
          transition={{ duration: 0.4 }}
          className="relative w-full max-w-3xl my-8 rounded-3xl bg-slate-950 border-4 border-amber-400 shadow-[12px_12px_0px_#000] p-6 sm:p-8 space-y-6 overflow-hidden select-none"
        >
          {/* Top Headline Banner */}
          <div className="bg-amber-500 border-b-4 border-black p-3.5 text-center shadow-md -mx-6 -mt-6 sm:-mx-8 sm:-mt-8">
            <div className="font-comic text-2xl sm:text-4xl text-slate-950 tracking-widest leading-none uppercase">
              ★ {choice.outcomeHeadline} ★
            </div>
            <p className="text-[11px] font-mono text-slate-950 font-bold uppercase mt-1">
              {island.title.toUpperCase()} • {choice.badge}
            </p>
          </div>

          {/* Central Widescreen Art Splash & Timeline Divergence Radial Meter */}
          <div className="relative rounded-2xl overflow-hidden border-4 border-black shadow-[6px_6px_0px_#000] h-48 sm:h-64 flex items-center justify-center bg-slate-900">
            <ComicPanel scene={island.backgroundKey} className="w-full h-full border-none rounded-none" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

            {/* Bottom Overlay Label */}
            <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
              <div className="bg-slate-950/90 border-2 border-black px-3 py-1 rounded-xl">
                <span className="text-[10px] font-mono text-amber-400 uppercase">
                  Choice Made: <strong className="text-amber-200 font-bold">{choice.label}</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Narrative Recap & Consequence */}
          <div className="space-y-3 p-4 rounded-xl bg-slate-900 border-2 border-black text-xs sm:text-sm text-slate-200 leading-relaxed font-serif">
            <h4 className="font-comic text-base text-amber-300">NARRATIVE RECAP</h4>
            <p className="font-sans leading-relaxed">{choice.narrativeRecap}</p>
          </div>

          {/* Sacred Quote */}
          <div className="p-4 rounded-xl bg-amber-500/10 border-2 border-amber-500/40 relative">
            <Quote className="w-5 h-5 text-amber-400/30 absolute top-2 right-3" />
            <p className="text-xs sm:text-sm text-amber-100 font-serif italic">
              "{choice.quote.text}"
            </p>
            <p className="text-[10px] text-amber-300/70 font-mono text-right mt-1">
              — {choice.quote.source}
            </p>
          </div>

          {/* Philosophical Analysis */}
          <div className="space-y-1">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
              Dharma Philosophical Analysis
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {choice.philosophicalAnalysis}
            </p>
          </div>

          {/* Action Buttons Footer */}
          <div className="pt-4 border-t-2 border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={onRewindChoice}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border-2 border-black text-slate-200 font-comic text-sm transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                [Rewind Choice (Replay)]
              </button>

              <button
                onClick={onReturnToAstralMap}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-purple-900 hover:bg-purple-800 border-2 border-black text-purple-100 font-comic text-sm transition-all"
              >
                <Compass className="w-4 h-4" />
                [Return to Astral Map]
              </button>
            </div>

            {onNextIsland && (
              <button
                onClick={onNextIsland}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-comic text-base border-2 border-black shadow-lg transition-all"
              >
                <span>NEXT ISLAND</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
