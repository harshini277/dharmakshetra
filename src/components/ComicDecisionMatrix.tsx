import React from 'react';
import { motion } from 'framer-motion';
import type { Choice } from '../types';
import { ShieldAlert, ArrowRight, Flame } from 'lucide-react';

interface ComicDecisionMatrixProps {
  choices: Choice[];
  onSelectChoice: (choice: Choice) => void;
}

export const ComicDecisionMatrix: React.FC<ComicDecisionMatrixProps> = ({
  choices,
  onSelectChoice
}) => {
  const getBadgeType = (choice: Choice) => {
    if (choice.divergenceImpact === 0) {
      return { label: '[CANON]', bg: 'bg-amber-500/20 text-amber-300 border-amber-500/50' };
    } else if (choice.divergenceImpact < 50) {
      return { label: '[SUBVERSIVE]', bg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50' };
    } else {
      return { label: '[RADICAL FRACTURE]', bg: 'bg-rose-500/20 text-rose-300 border-rose-500/50' };
    }
  };

  return (
    <div className="w-full space-y-4 z-20">
      
      {/* Dramatic Action Header */}
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <Flame className="w-5 h-5 text-amber-400 animate-bounce" />
          <h3 className="font-comic text-xl sm:text-2xl text-amber-100 tracking-wider">
            FATE HANGS IN THE BALANCE • CHOOSE YOUR PATH
          </h3>
        </div>

        <span className="text-xs font-mono text-amber-400/80 uppercase">
          {choices.length} Branch Crossroads
        </span>
      </div>

      {/* 3 Tarot/Comic Choice Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {choices.map((choice, index) => {
          const badge = getBadgeType(choice);

          return (
            <motion.div
              key={choice.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.025, y: -4 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onSelectChoice(choice)}
              className="group relative cursor-pointer p-5 rounded-2xl bg-slate-950/95 border-2 border-amber-500/40 hover:border-amber-300 gold-glow transition-all duration-300 space-y-3 shadow-2xl backdrop-blur-md overflow-hidden flex flex-col justify-between"
            >
              {/* Card Corner Graphic Accent */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-amber-500/20 to-transparent pointer-events-none" />

              <div className="space-y-2">
                {/* Badge Header */}
                <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2">
                  <span className="text-xs font-mono font-bold text-amber-400 flex items-center gap-1">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center text-[10px] border border-amber-500/40">
                      {index + 1}
                    </span>
                    Path Option
                  </span>

                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${badge.bg}`}>
                    {badge.label}
                  </span>
                </div>

                {/* Choice Title */}
                <h4 className="font-serif font-bold text-base sm:text-lg text-amber-100 group-hover:text-amber-300 transition-colors flex items-center justify-between">
                  <span>{choice.label}</span>
                  <ArrowRight className="w-4 h-4 text-amber-400 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                </h4>

                {/* Dilemma Summary */}
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {choice.philosophicalDilemma}
                </p>

                {/* Outcome Preview */}
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
                  <ShieldAlert className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span><strong className="text-amber-300 font-medium">Outcome:</strong> {choice.consequencePreview}</span>
                </div>
              </div>

              {/* Bottom Telemetry Metrics */}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span className="text-amber-300 font-bold">
                  Tag: {choice.alignmentTag}
                </span>
                <span className="text-purple-300 font-bold">
                  Divergence: +{choice.divergenceImpact}%
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

    </div>
  );
};
