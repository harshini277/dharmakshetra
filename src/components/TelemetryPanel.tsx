import React from 'react';
import { Shield, Sparkles, Scale, Activity, History, ArrowRight } from 'lucide-react';
import type { Island, PathStep } from '../types';
import { CharacterAvatar } from './ProceduralArtwork';

interface TelemetryPanelProps {
  island: Island;
  dharmaScore: number;
  karmaScore: number;
  divergenceScore: number;
  pathHistory: PathStep[];
}

export const TelemetryPanel: React.FC<TelemetryPanelProps> = ({
  island,
  dharmaScore,
  karmaScore,
  divergenceScore,
  pathHistory
}) => {
  // Normalize score bars to 0-100%
  const normalizedDharma = Math.min(100, Math.max(0, dharmaScore));
  const normalizedKarma = Math.min(100, Math.max(0, karmaScore));

  const getDivergenceLabel = (score: number) => {
    if (score === 0) return { text: 'Canonical Lore (0%)', color: 'text-amber-400', bg: 'bg-amber-500/20' };
    if (score < 40) return { text: 'Minor Divergence', color: 'text-blue-400', bg: 'bg-blue-500/20' };
    if (score < 75) return { text: 'Substantial Fracture', color: 'text-purple-400', bg: 'bg-purple-500/20' };
    return { text: 'Multiverse Rupture', color: 'text-rose-400', bg: 'bg-rose-500/20' };
  };

  const divLabel = getDivergenceLabel(divergenceScore);

  return (
    <div className="w-full space-y-4">
      
      {/* 1. Character Dramatis Personae Card */}
      <div className="p-4 rounded-xl bg-slate-900/80 border border-amber-500/20 shadow-xl space-y-3">
        <div className="flex items-center justify-between text-xs font-semibold text-amber-400 uppercase tracking-wider border-b border-slate-800 pb-2">
          <span className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-amber-400" />
            Dramatis Personae
          </span>
          <span className="text-[10px] text-slate-400 font-mono">Sandbox Island {island.number}</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {/* Hero */}
          <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-950/60 border border-amber-500/30">
            <CharacterAvatar svgKey={island.heroCharacter.avatarSvgKey} className="w-10 h-10 flex-shrink-0" />
            <div className="min-w-0">
              <div className="text-xs font-bold text-amber-200 truncate">{island.heroCharacter.name}</div>
              <div className="text-[10px] text-slate-400 truncate">{island.heroCharacter.title}</div>
            </div>
          </div>

          {/* Opponent */}
          <div className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-950/60 border border-slate-800">
            <CharacterAvatar svgKey={island.opponentCharacter.avatarSvgKey} className="w-10 h-10 flex-shrink-0" />
            <div className="min-w-0">
              <div className="text-xs font-bold text-slate-200 truncate">{island.opponentCharacter.name}</div>
              <div className="text-[10px] text-slate-400 truncate">{island.opponentCharacter.title}</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Cosmic Dharma & Karma Telemetry */}
      <div className="p-4 rounded-xl bg-slate-900/80 border border-amber-500/20 shadow-xl space-y-4">
        <div className="flex items-center justify-between text-xs font-semibold text-amber-400 uppercase tracking-wider border-b border-slate-800 pb-2">
          <span className="flex items-center gap-1.5">
            <Scale className="w-3.5 h-3.5 text-amber-400" />
            Cosmic Equilibrium
          </span>
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
        </div>

        {/* Dharma Bar */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-300 font-medium">Dharma (Duty & Righteousness)</span>
            <span className="font-mono font-bold text-amber-300">{dharmaScore} pts</span>
          </div>
          <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-amber-500/30">
            <div
              className="h-full bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-300 rounded-full transition-all duration-700 shadow-[0_0_10px_rgba(243,156,18,0.5)]"
              style={{ width: `${normalizedDharma}%` }}
            />
          </div>
        </div>

        {/* Karma Bar */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-300 font-medium">Karma (Consequence Field)</span>
            <span className="font-mono font-bold text-cyan-300">{karmaScore} pts</span>
          </div>
          <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-cyan-500/30">
            <div
              className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-teal-300 rounded-full transition-all duration-700 shadow-[0_0_10px_rgba(0,255,255,0.4)]"
              style={{ width: `${normalizedKarma}%` }}
            />
          </div>
        </div>

        {/* Divergence Index Meter */}
        <div className="pt-2 border-t border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400 flex items-center gap-1">
              <Activity className="w-3.5 h-3.5 text-purple-400" />
              Timeline Divergence
            </span>
            <span className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold ${divLabel.bg} ${divLabel.color}`}>
              {divergenceScore}%
            </span>
          </div>
          <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden border border-purple-500/30">
            <div
              className="h-full bg-gradient-to-r from-amber-500 via-purple-500 to-rose-500 rounded-full transition-all duration-700"
              style={{ width: `${divergenceScore}%` }}
            />
          </div>
        </div>
      </div>

      {/* 3. Decision History Breadcrumb Trail */}
      <div className="p-4 rounded-xl bg-slate-900/80 border border-amber-500/20 shadow-xl space-y-3">
        <div className="flex items-center justify-between text-xs font-semibold text-amber-400 uppercase tracking-wider border-b border-slate-800 pb-2">
          <span className="flex items-center gap-1.5">
            <History className="w-3.5 h-3.5 text-amber-400" />
            Decision Trail
          </span>
          <span className="text-[10px] text-slate-400 font-mono">{pathHistory.length} step(s)</span>
        </div>

        {pathHistory.length === 0 ? (
          <p className="text-xs text-slate-500 italic py-2">
            No choices made yet. Choose a path at the decision crossroads to begin.
          </p>
        ) : (
          <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
            {pathHistory.map((step, idx) => (
              <div
                key={idx}
                className="p-2 rounded-lg bg-slate-950/80 border border-slate-800 text-xs space-y-1 hover:border-amber-500/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-amber-300 flex items-center gap-1">
                    <ArrowRight className="w-3 h-3 text-amber-400" />
                    Step {idx + 1}
                  </span>
                  <span className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded font-mono">
                    {step.alignmentTag}
                  </span>
                </div>
                <p className="text-slate-300 text-[11px] line-clamp-1">{step.choiceLabel}</p>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
