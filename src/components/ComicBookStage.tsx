import React from 'react';
import type { Island, Scene, Choice, PathStep } from '../types';
import { ComicAvatar, ComicPanel } from './ComicGraphics';
import { TypewriterText } from './TypewriterText';
import { ArrowLeft, Activity, ShieldAlert, Flame } from 'lucide-react';

interface ComicBookStageProps {
  island: Island;
  currentScene: Scene;
  pathHistory: PathStep[];
  divergenceScore: number;
  onSelectChoice: (choice: Choice) => void;
  onReturnToOverworld: () => void;
}

export const ComicBookStage: React.FC<ComicBookStageProps> = ({
  island,
  currentScene,
  divergenceScore,
  onSelectChoice,
  onReturnToOverworld
}) => {
  const isHeroSpeaking = currentScene.speaker.toLowerCase().includes(island.heroCharacter.name.toLowerCase());

  // Map scene vignette string to procedure comic panel key
  const getSceneKey = (vignetteType: string) => {
    switch (vignetteType) {
      case 'gambling_hall': return 'dice_chamber';
      case 'kurukshetra': return 'kurukshetra_dust';
      case 'vow_of_bhishma': return 'tournament_arena';
      case 'karna_crucible': return 'tournament_arena';
      case 'lakshayagriha': return 'house_of_lac';
      case 'chakravyuha': return 'kurukshetra_dust';
      case 'draupadi_vow': return 'forest_exile';
      case 'club_duel': return 'kurukshetra_dust';
      case 'mahaprasthanika': return 'dwarka_chamber';
      default: return 'forest_hunt';
    }
  };

  const getChoiceBadge = (choice: Choice) => {
    if (choice.divergenceImpact === 0) {
      return { label: '[CANON PATH]', bg: 'bg-amber-500 text-slate-950 border-amber-300' };
    } else if (choice.divergenceImpact < 50) {
      return { label: '[SUBVERSIVE PATH]', bg: 'bg-cyan-500 text-slate-950 border-cyan-300' };
    } else {
      return { label: '[RADICAL RUPTURE]', bg: 'bg-rose-600 text-slate-100 border-rose-400' };
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 space-y-6 select-none">
      
      {/* Top Navigation Ribbon HUD */}
      <div className="p-4 rounded-2xl bg-slate-950 border-4 border-black shadow-[8px_8px_0px_#000] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onReturnToOverworld}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-comic text-sm border-2 border-black transition-all shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO ASTRAL OVERWORLD</span>
          </button>

          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-amber-400">
              <span className="font-bold bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/40">
                ISSUE #{island.number}
              </span>
              <span>• {island.era}</span>
            </div>
            <h2 className="font-comic text-xl sm:text-2xl text-amber-100 leading-none mt-0.5">
              {island.title}
            </h2>
          </div>
        </div>

        {/* Dynamic Divergence Crackle Gauge */}
        <div className="flex items-center gap-3 bg-slate-900 px-4 py-2 rounded-xl border-2 border-black font-mono text-xs">
          <Activity className="w-4 h-4 text-purple-400 animate-pulse" />
          <div className="space-y-1 w-32 sm:w-48">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Timeline Divergence</span>
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

      {/* Dynamic 2-Panel Comic Strip Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* PANEL 1: Widescreen Environmental Establishing Shot */}
        <div className="relative rounded-2xl overflow-hidden border-4 border-black shadow-[8px_8px_0px_#000] bg-slate-950">
          <div className="px-3 py-1 bg-amber-500 text-slate-950 font-comic text-xs tracking-wider border-b-2 border-black">
            PANEL 1: ESTABLISHING SHOT • {island.location.toUpperCase()}
          </div>
          <ComicPanel scene={getSceneKey(currentScene.vignetteType)} className="w-full h-64 sm:h-80 border-none rounded-none" />
          
          <div className="p-3 bg-slate-900 text-xs text-amber-200/90 font-serif italic border-t-2 border-black">
            "{island.prelude}"
          </div>
        </div>

        {/* PANEL 2: Dramatic Character Confrontation & Speech Balloons */}
        <div className="relative rounded-2xl overflow-hidden border-4 border-black shadow-[8px_8px_0px_#000] bg-slate-950 p-4 flex flex-col justify-between">
          <div className="px-3 py-1 bg-rose-600 text-amber-100 font-comic text-xs tracking-wider border-b-2 border-black -mx-4 -mt-4 mb-3 flex items-center justify-between">
            <span>PANEL 2: CONFRONTATION BEAT</span>
            <span className="text-[10px] font-mono uppercase bg-slate-950 text-amber-300 px-2 py-0.5 rounded">
              SPEAKER: {currentScene.speaker}
            </span>
          </div>

          {/* Character Bust Cutouts */}
          <div className="flex justify-between items-end gap-2 my-2">
            <div className={`flex flex-col items-center transition-all ${isHeroSpeaking ? 'scale-105 z-20' : 'scale-90 opacity-60'}`}>
              <ComicAvatar character={island.heroCharacter.id} emotion={isHeroSpeaking ? 'enraged' : 'normal'} className="w-36 h-48" />
              <div className="text-[10px] font-comic px-2 py-0.5 bg-amber-500 text-slate-950 border border-black font-bold rounded mt-1">
                {island.heroCharacter.name}
              </div>
            </div>

            <div className={`flex flex-col items-center transition-all ${!isHeroSpeaking ? 'scale-105 z-20' : 'scale-90 opacity-60'}`}>
              <ComicAvatar character={island.opponentCharacter.id} emotion={!isHeroSpeaking ? 'smirking' : 'normal'} className="w-36 h-48" />
              <div className="text-[10px] font-comic px-2 py-0.5 bg-rose-600 text-slate-100 border border-black font-bold rounded mt-1">
                {island.opponentCharacter.name}
              </div>
            </div>
          </div>

          {/* Authentic Comic Speech Balloon */}
          <div className={`relative p-4 rounded-2xl bg-amber-100 text-slate-950 border-3 border-black shadow-lg space-y-1 ${
            isHeroSpeaking ? 'speech-bubble-tail-left' : 'speech-bubble-tail-right'
          }`}>
            <div className="text-[10px] font-mono font-bold bg-slate-950 text-amber-300 px-2 py-0.5 rounded inline-block uppercase">
              [{currentScene.speaker} - {currentScene.speakerRole}]
            </div>

            <TypewriterText text={currentScene.narrative} speed={20} className="text-slate-950 font-serif" />
          </div>
        </div>

      </div>

      {/* THE FATE FORK: Interactive Choice Matrix */}
      <div className="pt-4 space-y-4">
        <div className="flex items-center gap-2 px-2">
          <Flame className="w-6 h-6 text-amber-400 animate-bounce" />
          <h3 className="font-comic text-2xl sm:text-3xl text-amber-100 tracking-wider">
            ⚡ THE AXIS OF DHARMA SHIFTS — WHAT CHOICE IS MADE?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {currentScene.choices.map((choice, idx) => {
            const badge = getChoiceBadge(choice);

            return (
              <div
                key={choice.id}
                onClick={() => onSelectChoice(choice)}
                className="group relative cursor-pointer p-5 rounded-2xl bg-slate-950 border-4 border-black shadow-[8px_8px_0px_#000] hover:border-amber-400 transition-all duration-300 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between border-b-2 border-slate-800 pb-2">
                    <span className="text-xs font-mono font-bold text-amber-400">
                      OPTION #{idx + 1}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${badge.bg}`}>
                      {badge.label}
                    </span>
                  </div>

                  <h4 className="font-comic text-lg text-amber-100 group-hover:text-amber-300 transition-colors">
                    {choice.label}
                  </h4>

                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {choice.philosophicalDilemma}
                  </p>

                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
                    <ShieldAlert className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-amber-300 font-medium">Likely Outcome:</strong> {choice.consequencePreview}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span className="text-amber-300 font-bold">
                    Tag: {choice.alignmentTag}
                  </span>
                  <span className="text-purple-300 font-bold">
                    Divergence: +{choice.divergenceImpact}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
