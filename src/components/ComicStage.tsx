import React from 'react';
import type { Island, Scene, Choice, PathStep } from '../types';
import { COMIC_ART_MANIFEST } from '../data/comicAssets';
import { TypewriterText } from './TypewriterText';
import { ComicDecisionMatrix } from './ComicDecisionMatrix';
import { ArrowLeft, Activity } from 'lucide-react';
import { CharacterAvatar } from './ProceduralArtwork';

interface ComicStageProps {
  island: Island;
  currentScene: Scene;
  pathHistory: PathStep[];
  divergenceScore: number;
  onSelectChoice: (choice: Choice) => void;
  onFleeToCosmos: () => void;
}

export const ComicStage: React.FC<ComicStageProps> = ({
  island,
  currentScene,
  divergenceScore,
  onSelectChoice,
  onFleeToCosmos
}) => {
  const comicAssets = COMIC_ART_MANIFEST[island.id];
  const heroAsset = comicAssets?.characters[island.heroCharacter.id] || {
    name: island.heroCharacter.name,
    avatarUrl: island.heroCharacter.imageUrl || 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80'
  };

  const opponentAsset = comicAssets?.characters[island.opponentCharacter.id] || {
    name: island.opponentCharacter.name,
    avatarUrl: island.opponentCharacter.imageUrl || 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80'
  };

  const isHeroSpeaking = currentScene.speaker.toLowerCase().includes(island.heroCharacter.name.toLowerCase());

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 space-y-6 select-none">
      
      {/* 1. Top Bar Navigation HUD */}
      <div className="p-4 rounded-2xl bg-slate-950/90 border-2 border-amber-500/40 shadow-2xl flex flex-wrap items-center justify-between gap-4 backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <button
            onClick={onFleeToCosmos}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold transition-all shadow-md"
            title="Return to Floating Isles Overworld Map"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Flee to Cosmos Map</span>
          </button>

          <div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-amber-400">
              <span className="font-bold bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30">
                ISLAND {island.number}
              </span>
              <span>• {island.era}</span>
            </div>
            <h2 className="font-comic text-xl sm:text-2xl text-amber-100 leading-none mt-0.5">
              {island.title}
            </h2>
          </div>
        </div>

        {/* Dynamic Divergence Crackle Meter */}
        <div className="flex items-center gap-3 bg-slate-900 px-4 py-2 rounded-xl border border-slate-800 font-mono text-xs">
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

      {/* 2. Graphic Novel Motion Stage (The Widescreen Canvas) */}
      <div className="relative w-full h-[420px] sm:h-[480px] rounded-3xl overflow-hidden border-4 border-amber-500/50 shadow-2xl bg-slate-950">
        
        {/* Background Widescreen Illustration Plate */}
        <div className="absolute inset-0 z-0">
          <img
            src={comicAssets?.bgIllustration || 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1600&q=80'}
            alt={island.title}
            className="w-full h-full object-cover filter brightness-60 contrast-125 saturate-110"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-halftone opacity-30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/80 pointer-events-none" />
        </div>

        {/* Widescreen Graphic Novel Panel Cutouts (Left & Right Characters) */}
        <div className="relative z-10 w-full h-full flex justify-between items-end px-4 sm:px-12 pb-4">
          
          {/* Left Character (Hero / Speaking Character) */}
          <div className={`relative flex flex-col items-center transition-all duration-500 ${
            isHeroSpeaking ? 'scale-110 z-20 opacity-100' : 'scale-95 z-10 opacity-70 filter brightness-75'
          }`}>
            <div className="w-48 sm:w-64 h-64 sm:h-80 relative flex items-end justify-center">
              <img
                src={heroAsset.avatarUrl}
                alt={island.heroCharacter.name}
                className="max-h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)] animate-float-island"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <CharacterAvatar svgKey={island.heroCharacter.avatarSvgKey} className="w-32 h-32 absolute bottom-4" />
            </div>

            <div className="mt-2 px-3 py-1 rounded-lg bg-slate-950 border border-amber-500/60 font-comic text-sm text-amber-300 shadow-xl">
              {island.heroCharacter.name}
            </div>
          </div>

          {/* Right Character (Opponent) */}
          <div className={`relative flex flex-col items-center transition-all duration-500 ${
            !isHeroSpeaking ? 'scale-110 z-20 opacity-100' : 'scale-95 z-10 opacity-70 filter brightness-75'
          }`}>
            <div className="w-48 sm:w-64 h-64 sm:h-80 relative flex items-end justify-center">
              <img
                src={opponentAsset.avatarUrl}
                alt={island.opponentCharacter.name}
                className="max-h-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)] animate-float-island"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <CharacterAvatar svgKey={island.opponentCharacter.avatarSvgKey} className="w-32 h-32 absolute bottom-4" />
            </div>

            <div className="mt-2 px-3 py-1 rounded-lg bg-slate-950 border border-amber-500/60 font-comic text-sm text-amber-300 shadow-xl">
              {island.opponentCharacter.name}
            </div>
          </div>

        </div>

        {/* Dynamic Comic Speech Bubble Overlay */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-11/12 max-w-2xl z-30">
          <div className="relative p-5 sm:p-6 rounded-2xl bg-slate-950/95 border-3 border-amber-400 shadow-2xl clip-speech-bubble space-y-2 backdrop-blur-xl">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="font-comic text-base sm:text-lg text-amber-300 tracking-wide">
                SPEAKER: {currentScene.speaker} ({currentScene.speakerRole})
              </span>
              <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/40">
                SCENE PANEL
              </span>
            </div>

            <TypewriterText text={currentScene.narrative} speed={20} />
          </div>
        </div>

      </div>

      {/* 3. Bottom HUD Decision Matrix */}
      <ComicDecisionMatrix
        choices={currentScene.choices}
        onSelectChoice={onSelectChoice}
      />

    </div>
  );
};
