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
    <header className="sticky top-0 z-50 w-full bg-[#f5eedb] border-b-4 border-[#d4af37] shadow-md text-[#2a1810] px-4 py-2.5 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Left Section: Back / Title / Conch */}
        <div className="flex items-center gap-3">
          {currentView === 'island' ? (
            <button
              onClick={() => {
                audioEngine.playSoundFx('click');
                onReturnToMap();
              }}
              className="flex items-center gap-2 px-3 py-1.5 bg-[#8c3b22] hover:bg-[#a94a2d] border-2 border-[#d4af37] text-[#fffdf7] rounded-lg font-ui text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[#d4af37]" />
              <span>← Return to Sacred Map</span>
            </button>
          ) : (
            <div className="flex items-center gap-2.5">
              {/* Conch / Lotus Emblem SVG */}
              <div className="w-9 h-9 rounded-full bg-[#d4af37] border-2 border-[#aa7c11] flex items-center justify-center text-[#fffdf7] shadow-sm">
                <Compass className="w-5 h-5 animate-pulse text-[#fffdf7]" />
              </div>
              <div>
                <h1 className="font-vedic text-base sm:text-xl font-bold tracking-wider text-[#8c3b22]">
                  DHARMA KSHETRA
                </h1>
                <p className="text-[10px] font-ui tracking-widest text-[#aa7c11] font-bold uppercase">
                  Tales of the 10 Isles • Aryavarta Mythos
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Center Title (Only when viewing Island) */}
        {currentView === 'island' && activeIslandTitle && (
          <div className="hidden md:flex items-center gap-2 bg-[#fffdf7] px-4 py-1 rounded-full border-2 border-[#d4af37] shadow-sm">
            <span className="text-xs font-parchment text-[#a94a2d] font-bold uppercase tracking-wider">Active Isle:</span>
            <span className="font-heading text-sm text-[#2a1810] font-bold">{activeIslandTitle}</span>
          </div>
        )}

        {/* Right Section: Dharma/Karma Stat & Mute Toggle */}
        <div className="flex items-center gap-4">
          
          {/* Dharma / Karma Affinity Gauge */}
          <div className="flex items-center gap-2 bg-[#fffdf7] px-3 py-1 rounded-lg border-2 border-[#d4af37] shadow-sm">
            <Shield className="w-4 h-4 text-[#aa7c11]" />
            <div className="flex flex-col text-right">
              <span className="text-[10px] font-ui uppercase text-[#8c3b22] font-bold">Dharma Balance</span>
              <div className="flex items-center gap-1.5">
                <div className="w-16 h-2.5 bg-[#ead8b1] rounded-full overflow-hidden border border-[#aa7c11]/40">
                  <div 
                    className="h-full bg-gradient-to-r from-[#d4af37] via-[#e25822] to-[#8c3b22] transition-all duration-500"
                    style={{ width: `${Math.max(15, 100 - divergenceScore)}%` }}
                  />
                </div>
                <span className="text-xs font-bold font-ui text-[#2a1810]">
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
            className="p-2 bg-[#fffdf7] hover:bg-[#ead8b1] border-2 border-[#d4af37] text-[#8c3b22] rounded-full transition-all shadow-sm active:scale-90 cursor-pointer"
          >
            {audioEnabled ? <Volume2 className="w-5 h-5 text-[#8c3b22]" /> : <VolumeX className="w-5 h-5 text-[#a94a2d]" />}
          </button>

        </div>

      </div>
    </header>
  );
};
