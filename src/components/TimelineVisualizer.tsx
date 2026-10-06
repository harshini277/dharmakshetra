import React from 'react';
import type { Island, PathStep } from '../types';
import { GitBranch, CheckCircle, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

interface TimelineVisualizerProps {
  island: Island;
  currentSceneId: string;
  pathHistory: PathStep[];
  onResetIsland: () => void;
}

export const TimelineVisualizer: React.FC<TimelineVisualizerProps> = ({
  island,
  currentSceneId,
  pathHistory,
  onResetIsland
}) => {
  const sceneKeys = Object.keys(island.scenes);
  const endingsKeys = Object.keys(island.endings);

  const isSceneVisited = (sceneId: string) => {
    return sceneId === currentSceneId || pathHistory.some(p => p.sceneId === sceneId);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 space-y-6">
      
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-purple-950/60 border border-amber-500/30 shadow-2xl space-y-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest">
              <GitBranch className="w-4 h-4 text-amber-400" />
              Multiverse Timeline Visualizer
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold gold-text-gradient mt-1">
              Island {island.number}: {island.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-sans mt-1">
              Inspect all canonical and alternate decision branches. Glowing gold highlights your current active timeline.
            </p>
          </div>

          <button
            onClick={onResetIsland}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-xs font-semibold transition-all self-start md:self-auto"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Restart Island Path
          </button>
        </div>
      </div>

      {/* Decision Tree Graph Container */}
      <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl space-y-8">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800 pb-2">
          Decision Nodes & Branch Graph
        </div>

        <div className="space-y-8 relative">
          
          {/* Vertical Connecting Guide Line */}
          <div className="absolute left-6 sm:left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-amber-500 via-purple-500 to-slate-800" />

          {/* Render Scenes */}
          {sceneKeys.map((sceneId, idx) => {
            const scene = island.scenes[sceneId];
            const visited = isSceneVisited(sceneId);
            const isCurrent = sceneId === currentSceneId;

            return (
              <motion.div
                key={sceneId}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative flex items-start gap-4 sm:gap-6 pl-2"
              >
                {/* Node Icon Circle */}
                <div className={`relative z-10 w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-mono font-bold text-xs border transition-all ${
                  isCurrent
                    ? 'bg-amber-500 text-slate-950 border-amber-300 shadow-[0_0_15px_rgba(243,156,18,0.7)] animate-pulse'
                    : visited
                    ? 'bg-purple-900/80 text-purple-200 border-purple-400'
                    : 'bg-slate-900 text-slate-500 border-slate-800'
                }`}>
                  {idx + 1}
                </div>

                {/* Node Details Card */}
                <div className={`flex-1 p-4 rounded-xl border text-xs sm:text-sm space-y-3 transition-all ${
                  isCurrent
                    ? 'bg-slate-900/90 border-amber-500/60 shadow-xl'
                    : visited
                    ? 'bg-slate-900/60 border-purple-500/30'
                    : 'bg-slate-950 border-slate-800 opacity-60'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-bold text-amber-200 text-sm sm:text-base">
                      {scene.title}
                    </span>
                    <span className="text-[10px] font-mono bg-slate-800 text-slate-400 px-2 py-0.5 rounded">
                      Speaker: {scene.speaker}
                    </span>
                  </div>

                  <p className="text-slate-300 text-xs font-serif line-clamp-2">
                    {scene.narrative}
                  </p>

                  {/* Branches / Choices list for this node */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-800">
                    <div className="text-[11px] font-semibold text-slate-400">Available Branches:</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {scene.choices.map((c) => {
                        const isChosenChoice = pathHistory.some(p => p.choiceId === c.id);

                        return (
                          <div
                            key={c.id}
                            className={`p-2 rounded border text-[11px] space-y-1 ${
                              isChosenChoice
                                ? 'bg-amber-500/20 border-amber-500/50 text-amber-200 font-medium'
                                : 'bg-slate-950 border-slate-800 text-slate-400'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-semibold">{c.label}</span>
                              {isChosenChoice && <CheckCircle className="w-3.5 h-3.5 text-amber-400" />}
                            </div>
                            <div className="text-[10px] text-slate-400 font-mono">
                              Tag: {c.alignmentTag} • Div: +{c.divergenceImpact}%
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Render Endings Tree Section */}
          <div className="pt-6 border-t border-slate-800 space-y-4">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider pl-12">
              Possible Timeline Resolutions (Endings)
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-12">
              {endingsKeys.map((endKey) => {
                const ending = island.endings[endKey];
                return (
                  <div
                    key={endKey}
                    className={`p-4 rounded-xl border space-y-2 text-xs ${
                      ending.isCanonical
                        ? 'bg-amber-500/10 border-amber-500/40 text-amber-100'
                        : 'bg-purple-950/40 border-purple-500/30 text-purple-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm font-serif">{ending.title}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700">
                        {ending.isCanonical ? 'Canonical (0%)' : `Alt (${ending.divergencePercentage}%)`}
                      </span>
                    </div>

                    <div className="text-[11px] text-amber-300 font-semibold">{ending.moralTitle}</div>
                    <p className="text-slate-300 text-[11px] leading-relaxed">{ending.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
