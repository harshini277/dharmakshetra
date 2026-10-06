import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { StoryIsland, StoryChoice } from '../data/storyData';
import { ComicAvatar, ComicPanel } from './ComicGraphics';
import { TypewriterText } from './TypewriterText';
import { ArrowLeft, Activity, Flame } from 'lucide-react';

interface ComicBookStageProps {
  island: StoryIsland;
  divergenceScore: number;
  onSelectChoice: (choice: StoryChoice) => void;
  onReturnToCosmos: () => void;
}

export const ComicBookStage: React.FC<ComicBookStageProps> = ({
  island,
  divergenceScore,
  onSelectChoice,
  onReturnToCosmos
}) => {
  const [bgFailed, setBgFailed] = useState(false);
  const [charFailed, setCharFailed] = useState(false);

  const getChoiceBadge = (choice: StoryChoice) => {
    switch (choice.type) {
      case 'CANON':
        return { text: '[ORIGINAL ITIHASA]', badgeBg: 'bg-amber-500 text-slate-950 border-amber-300', border: 'border-amber-400 hover:border-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.4)]' };
      case 'SUBVERSIVE':
        return { text: '[SUBVERSIVE PATH]', badgeBg: 'bg-cyan-500 text-slate-950 border-cyan-300', border: 'border-cyan-400 hover:border-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.4)]' };
      case 'RADICAL':
      default:
        return { text: '[RADICAL PATH]', badgeBg: 'bg-rose-600 text-slate-100 border-rose-400', border: 'border-rose-500 hover:border-rose-400 shadow-[0_0_15px_rgba(225,29,72,0.4)]' };
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 space-y-6 select-none relative">
      
      {/* Top Bar HUD */}
      <div className="p-4 rounded-2xl bg-slate-950 border-4 border-black shadow-[8px_8px_0px_#000] flex flex-wrap items-center justify-between gap-4 z-20 relative">
        <div className="flex items-center gap-3">
          <button
            onClick={onReturnToCosmos}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-comic text-sm border-2 border-black transition-all shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← Return to Cosmos</span>
          </button>

          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-amber-400">
              <span className="font-bold bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/40">
                ISLAND {island.number}
              </span>
              <span>• {island.era}</span>
            </div>
            <h2 className="font-comic text-xl sm:text-2xl text-amber-100 leading-none mt-0.5">
              {island.title}
            </h2>
          </div>
        </div>

        {/* Pulsing Fate Divergence Meter */}
        <div className="flex items-center gap-3 bg-slate-900 px-4 py-2 rounded-xl border-2 border-black font-mono text-xs">
          <Activity className="w-4 h-4 text-purple-400 animate-pulse" />
          <div className="space-y-1 w-36 sm:w-48">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Fate Divergence Meter</span>
              <span className="text-purple-300 font-bold">{divergenceScore}%</span>
            </div>
            <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-purple-500/30">
              <div
                className="h-full bg-gradient-to-r from-amber-500 via-purple-500 to-rose-500 transition-all duration-700 shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                style={{ width: `${divergenceScore}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Visual Novel Stage Canvas Container */}
      <div className="relative w-full h-[440px] sm:h-[500px] rounded-3xl overflow-hidden border-4 border-black shadow-[10px_10px_0px_#000] bg-slate-950 flex flex-col justify-between p-4 sm:p-8">
        
        {/* Widescreen Scene Background Image with Vignette & Fallback */}
        <div className="absolute inset-0 z-0">
          {!bgFailed ? (
            <img
              src={island.bgUrl}
              alt={island.title}
              className="w-full h-full object-cover filter brightness-50 contrast-125 saturate-110"
              onError={() => setBgFailed(true)}
            />
          ) : (
            <ComicPanel scene={island.backgroundKey} className="w-full h-full border-none rounded-none" />
          )}
          <div className="absolute inset-0 bg-halftone opacity-30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/80 pointer-events-none" />
        </div>

        {/* Stage Content: Character Cutout (Left/Center) & Comic Speech Bubble (Right) */}
        <div className="relative z-10 w-full h-full flex flex-col sm:flex-row justify-between items-center sm:items-end gap-4 pb-2">
          
          {/* Character Cutout Portrait (Left/Center) */}
          <motion.div
            initial={{ opacity: 0, x: -60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col items-center flex-shrink-0"
          >
            <div className="w-48 sm:w-64 h-64 sm:h-80 relative flex items-end justify-center">
              {!charFailed ? (
                <img
                  src={island.characterUrl}
                  alt={island.speakerName}
                  className="max-h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)] animate-float-island"
                  onError={() => setCharFailed(true)}
                />
              ) : (
                <ComicAvatar character={island.characterKey} emotion="normal" className="w-48 h-64" />
              )}
            </div>

            {/* Saffron Speaker Name Plate Badge */}
            <div className="mt-2 px-3.5 py-1 rounded-xl bg-amber-500 text-slate-950 border-2 border-black font-comic text-sm font-bold shadow-xl">
              [{island.speakerName}]
            </div>
          </motion.div>

          {/* Comic Speech Bubble (Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full sm:w-7/12 relative"
          >
            <div className="relative p-5 sm:p-6 rounded-3xl bg-amber-100 text-slate-950 border-4 border-black shadow-[8px_8px_0px_#000] speech-bubble-tail-left space-y-2">
              <div className="text-xs font-mono font-bold bg-slate-950 text-amber-300 px-2.5 py-0.5 rounded inline-block uppercase border border-amber-500/40">
                [{island.speakerName} - {island.speakerTag}]
              </div>

              <TypewriterText
                text={island.dialogue}
                speed={20}
                className="text-slate-950 font-serif"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* THE CHOICE BOX (Pops up when dialogue finishes or for interactive picks) */}
      <div className="pt-4 space-y-4">
        <div className="flex items-center gap-2 px-2">
          <Flame className="w-6 h-6 text-amber-400 animate-bounce" />
          <h3 className="font-comic text-2xl sm:text-3xl text-amber-100 tracking-wider">
            ⚡ THE AXIS OF DHARMA SHIFTS — WHAT CHOICE IS MADE?
          </h3>
        </div>

        {/* 3 Distinct Choice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {island.choices.map((choice, idx) => {
            const badge = getChoiceBadge(choice);

            return (
              <motion.div
                key={choice.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onSelectChoice(choice)}
                className={`group relative cursor-pointer p-5 rounded-2xl bg-slate-950 border-4 border-black shadow-[8px_8px_0px_#000] transition-all duration-300 space-y-3 flex flex-col justify-between ${badge.border}`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between border-b-2 border-slate-800 pb-2">
                    <span className="text-xs font-mono font-bold text-amber-400">
                      CARD #{idx + 1}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${badge.badgeBg}`}>
                      {badge.text}
                    </span>
                  </div>

                  <h4 className="font-comic text-lg text-amber-100 group-hover:text-amber-300 transition-colors">
                    {choice.label}
                  </h4>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {choice.dilemma}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span className="text-amber-300 font-bold">
                    Type: {choice.type}
                  </span>
                  <span className="text-purple-300 font-bold">
                    Divergence: {choice.divergence}%
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
