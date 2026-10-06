import React, { useState } from 'react';
import { 
  Volume2, 
  VolumeX, 
  GitBranch, 
  BookOpen, 
  Compass, 
  RotateCcw,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import type { Island, ActiveView } from '../types';
import { audioEngine } from '../utils/audioEngine';

interface HeaderProps {
  islands: Island[];
  activeIsland: Island;
  activeView: ActiveView;
  onSelectIsland: (islandId: string) => void;
  onSelectView: (view: ActiveView) => void;
  divergenceScore: number;
  audioEnabled: boolean;
  onToggleAudio: () => void;
  onResetIsland: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  islands,
  activeIsland,
  activeView,
  onSelectIsland,
  onSelectView,
  audioEnabled,
  onToggleAudio,
  onResetIsland
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [volume, setVolume] = useState(audioEngine.getVolume());

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    audioEngine.setVolume(val);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-slate-950/80 border-b border-amber-500/20 px-4 py-3 shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Left: Brand & Logo */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2.5">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-purple-900/40 border border-amber-500/40 shadow-inner">
              <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
              <div className="absolute inset-0 rounded-lg border border-amber-400/30 animate-ping opacity-25 pointer-events-none" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold font-serif gold-text-gradient tracking-wide leading-none">
                DHARMAKSHETRA
              </h1>
              <p className="text-[10px] text-amber-300/70 tracking-widest uppercase font-mono mt-0.5">
                Fractured Fates • Sandbox
              </p>
            </div>
          </div>

          {/* Mobile Audio & Island Selector Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onToggleAudio}
              className={`p-2 rounded-lg border transition-all ${
                audioEnabled
                  ? 'bg-amber-500/20 border-amber-500/50 text-amber-300'
                  : 'bg-slate-900 border-slate-800 text-slate-500'
              }`}
            >
              {audioEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Center: Island Selector Dropdown & View Mode Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 w-full md:w-auto">
          
          {/* Island Picker Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-amber-500/30 text-amber-200 text-xs sm:text-sm font-medium transition-all shadow-md"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Island {activeIsland.number}: {activeIsland.title}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 max-h-80 overflow-y-auto rounded-xl bg-slate-950 border border-amber-500/40 shadow-2xl z-50 p-2 space-y-1 backdrop-blur-2xl">
                <div className="px-2 py-1 text-[11px] font-semibold text-amber-400/80 uppercase tracking-wider border-b border-slate-800 mb-1">
                  10 Decision Crossroads (Islands)
                </div>
                {islands.map((isl) => (
                  <button
                    key={isl.id}
                    onClick={() => {
                      onSelectIsland(isl.id);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition-all ${
                      isl.id === activeIsland.id
                        ? 'bg-amber-500/20 text-amber-200 border border-amber-500/40 font-semibold'
                        : 'hover:bg-slate-900 text-slate-300'
                    }`}
                  >
                    <div>
                      <div className="font-medium">{isl.number}. {isl.title}</div>
                      <div className="text-[10px] text-slate-400 font-mono">{isl.era}</div>
                    </div>
                    {isl.id === activeIsland.id && (
                      <span className="text-[10px] bg-amber-500/30 text-amber-300 px-1.5 py-0.5 rounded">Active</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* View Mode Navigation Tabs */}
          <div className="flex items-center p-1 bg-slate-900/90 rounded-lg border border-slate-800">
            <button
              onClick={() => onSelectView('sandbox')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all ${
                activeView === 'sandbox'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Sandbox</span>
            </button>

            <button
              onClick={() => onSelectView('timeline')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all ${
                activeView === 'timeline'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>Divergence Map</span>
            </button>

            <button
              onClick={() => onSelectView('codex')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all ${
                activeView === 'codex'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Lore Codex</span>
            </button>
          </div>
        </div>

        {/* Right: Audio Synthesizer Toggle & Reset Button */}
        <div className="hidden md:flex items-center gap-3">
          
          {/* Synthesizer Audio Controls */}
          <div className="flex items-center gap-2 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800">
            <button
              onClick={onToggleAudio}
              className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
                audioEnabled ? 'text-amber-400' : 'text-slate-500'
              }`}
              title="Toggle Web Audio API Ambient Synthesizer"
            >
              {audioEnabled ? <Volume2 className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
              <span>{audioEnabled ? 'Drone Active' : 'Muted'}</span>
            </button>

            {audioEnabled && (
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={handleVolumeChange}
                className="w-16 h-1 accent-amber-400 cursor-pointer bg-slate-800 rounded"
              />
            )}
          </div>

          {/* Reset Island */}
          <button
            onClick={onResetIsland}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium transition-all"
            title="Reset current Island choices"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Island</span>
          </button>
        </div>

      </div>
    </header>
  );
};
