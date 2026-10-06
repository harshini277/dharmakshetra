import React from 'react';
import { Volume2, VolumeX, MapPin, Compass, Shield } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface VedicHeaderProps {
  currentView: 'map' | 'island';
  activeIslandTitle?: string;
  divergenceScore: number;
  audioEnabled: boolean;
  onToggleAudio: () => void;
  onReturnToMap: () => void;
}

export const VedicHeader: React.FC<VedicHeaderProps> = ({
  currentView,
  activeIslandTitle,
  divergenceScore,
  audioEnabled,
  onToggleAudio,
  onReturnToMap,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#1c140e]/95 backdrop-blur-md border-b-2 border-[#d4af37] shadow-lg text-[#f7eed3] px-4 py-3 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Left Section: Back / Title / Conch */}
        <div className="flex items-center gap-3">
          {currentView === 'island' ? (
            <button
              onClick={() => {
                audioEngine.playSoundFx('click');
                onReturnToMap();
              }}
              className="flex items-center gap-2 px-3 py-1.5 bg-[#8c3b22] hover:bg-[#a94a2d] border border-[#d4af37] text-[#f7eed3] rounded-md font-ui text-sm font-semibold transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[#d4af37]" />
              <span>← Return to Sacred Map</span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              {/* Conch / Lotus Emblem SVG */}
              <div className="w-8 h-8 rounded-full bg-[#aa7c11]/20 border border-[#d4af37] flex items-center justify-center text-[#d4af37]">
                <Compass className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h1 className="font-vedic text-base sm:text-lg font-bold tracking-wider text-[#d4af37]">
                  DHARMA KSHETRA
                </h1>
                <p className="text-[10px] font-ui tracking-widest text-[#e25822] uppercase">
                  Tales of the 10 Isles • Aryavarta Mythos
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Center Title (Only when viewing Island) */}
        {currentView === 'island' && activeIslandTitle && (
          <div className="hidden md:flex items-center gap-2 bg-[#281d16] px-4 py-1 rounded-full border border-[#aa7c11]/50">
            <span className="text-xs font-parchment text-[#e25822] uppercase tracking-wider">Active Isle:</span>
            <span className="font-heading text-sm text-[#d4af37] font-bold">{activeIslandTitle}</span>
          </div>
        )}

        {/* Right Section: Dharma/Karma Stat & Mute Toggle */}
        <div className="flex items-center gap-4">
          
          {/* Dharma / Karma Affinity Gauge */}
          <div className="flex items-center gap-2 bg-[#241913] px-3 py-1.5 rounded-md border border-[#aa7c11]/40">
            <Shield className="w-4 h-4 text-[#d4af37]" />
            <div className="flex flex-col text-right">
              <span className="text-[10px] font-ui uppercase text-[#d8c4a0]">Dharma Balance</span>
              <div className="flex items-center gap-1.5">
                <div className="w-16 h-2 bg-[#17110e] rounded-full overflow-hidden border border-[#aa7c11]/30">
                  <div 
                    className="h-full bg-gradient-to-r from-[#d4af37] to-[#e25822] transition-all duration-500"
                    style={{ width: `${Math.max(15, 100 - divergenceScore)}%` }}
                  />
                </div>
                <span className="text-xs font-bold font-ui text-[#d4af37]">
                  {Math.round(100 - divergenceScore)}%
                </span>
              </div>
            </div>
          </div>

          {/* Web Audio Synthesizer Toggle */}
          <button
            onClick={() => {
              audioEngine.playSoundFx('click');
              onToggleAudio();
            }}
            title={audioEnabled ? "Mute Temple Drone & Audio" : "Unmute Temple Drone & Audio"}
            className="p-2 bg-[#281d16] hover:bg-[#38291f] border border-[#d4af37]/60 text-[#d4af37] rounded-full transition-all active:scale-90 cursor-pointer"
          >
            {audioEnabled ? <Volume2 className="w-5 h-5 text-[#d4af37]" /> : <VolumeX className="w-5 h-5 text-[#8c3b22]" />}
          </button>

        </div>

      </div>
    </header>
  );
};
