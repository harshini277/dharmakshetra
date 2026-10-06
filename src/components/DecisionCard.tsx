import React from 'react';
import { motion } from 'framer-motion';
import type { Choice } from '../types';
import { ArrowRight, ShieldAlert } from 'lucide-react';

interface DecisionCardProps {
  choice: Choice;
  onSelect: (choice: Choice) => void;
  index: number;
}

export const DecisionCard: React.FC<DecisionCardProps> = ({ choice, onSelect, index }) => {
  const getTagColor = (tag: string) => {
    switch (tag) {
      case 'Swadharma (Duty)':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'Satya (Absolute Truth)':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'Nyaya (Utilitarian Justice)':
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';
      case 'Moksha (Renunciation)':
        return 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40';
      case 'Adharma (Selfish Gain)':
        return 'bg-rose-500/20 text-rose-300 border-rose-500/40';
      default:
        return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.1 }}
      whileHover={{ scale: 1.015, y: -2 }}
      whileTap={{ scale: 0.985 }}
      onClick={() => onSelect(choice)}
      className="group relative cursor-pointer p-4 sm:p-5 rounded-xl bg-slate-900/90 hover:bg-slate-900 border border-amber-500/30 hover:border-amber-400/70 shadow-lg hover:shadow-2xl transition-all duration-300 space-y-3"
    >
      {/* Glow highlight effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-500/5 via-yellow-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      {/* Header: Option Index & Alignment Tag */}
      <div className="flex items-center justify-between gap-2">
        <span className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400">
          <span className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center text-[11px] border border-amber-500/40">
            {index + 1}
          </span>
          Crossroads Choice
        </span>

        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${getTagColor(choice.alignmentTag)} shadow-sm`}>
          {choice.alignmentTag}
        </span>
      </div>

      {/* Action Title / Choice Label */}
      <h3 className="text-base sm:text-lg font-serif font-bold text-amber-100 group-hover:text-amber-300 transition-colors flex items-center justify-between">
        <span>{choice.label}</span>
        <ArrowRight className="w-4 h-4 text-amber-400 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
      </h3>

      {/* Philosophical Dilemma */}
      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
        {choice.philosophicalDilemma}
      </p>

      {/* Consequence Preview Box */}
      <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px] sm:text-xs text-slate-400 flex items-start gap-2">
        <ShieldAlert className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
        <span><strong className="text-amber-300/90 font-medium">Likely Outcome:</strong> {choice.consequencePreview}</span>
      </div>

      {/* Impact Telemetry Badges */}
      <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center gap-3 text-[10px] font-mono">
        <span className={`font-semibold ${choice.deltaDharma >= 0 ? 'text-amber-400' : 'text-rose-400'}`}>
          Dharma: {choice.deltaDharma >= 0 ? `+${choice.deltaDharma}` : choice.deltaDharma}
        </span>
        <span className={`font-semibold ${choice.deltaKarma >= 0 ? 'text-cyan-400' : 'text-rose-400'}`}>
          Karma: {choice.deltaKarma >= 0 ? `+${choice.deltaKarma}` : choice.deltaKarma}
        </span>
        <span className="text-purple-300 font-semibold">
          Divergence: +{choice.divergenceImpact}%
        </span>
      </div>
    </motion.div>
  );
};
