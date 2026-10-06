import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { WebtoonIsland, WebtoonChoice, WebtoonPanel } from '../data/webtoonData';
import { ComicPanel, ComicAvatar } from './ComicGraphics';
import { audioEngine } from '../utils/audioEngine';
import { RotateCcw, MapPin, ShieldAlert, CheckCircle } from 'lucide-react';

interface WebtoonComicStageProps {
  island: WebtoonIsland;
  onReturnToMap: () => void;
  onChoiceMade: (islandId: string, choice: WebtoonChoice) => void;
}

export const WebtoonComicStage: React.FC<WebtoonComicStageProps> = ({
  island,
  onReturnToMap,
  onChoiceMade,
}) => {
  const [selectedChoice, setSelectedChoice] = useState<WebtoonChoice | null>(null);
  const decisionRef = useRef<HTMLDivElement | null>(null);
  const epilogueRef = useRef<HTMLDivElement | null>(null);

  const handleSelectChoice = (choice: WebtoonChoice) => {
    setSelectedChoice(choice);
    onChoiceMade(island.id, choice);
    
    // Play sound based on divergence type
    if (choice.type === 'radical') {
      audioEngine.playSoundFx('thunder');
    } else if (choice.type === 'subversive') {
      audioEngine.playSoundFx('gong');
    } else {
      audioEngine.playSoundFx('bell');
    }

    // Smooth scroll down to continuation panels
    setTimeout(() => {
      epilogueRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  };

  const handleReRoll = () => {
    audioEngine.playSoundFx('click');
    setSelectedChoice(null);
    setTimeout(() => {
      decisionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#17110e] text-[#2a1810] flex flex-col items-center py-6 px-2 sm:px-4">
      
      {/* Centered Webtoon Reader Scroll (Max-W 720px format) */}
      <main className="w-full max-w-[720px] bg-parchment rounded-t-2xl shadow-2xl border-x-4 border-t-4 border-[#d4af37] overflow-hidden flex flex-col my-2">
        
        {/* Webtoon Header Title Banner */}
        <div className="bg-[#281d16] text-[#f7eed3] p-4 border-b-4 border-[#aa7c11] flex flex-col items-center text-center relative">
          <span className="text-[10px] font-ui tracking-widest text-[#d4af37] uppercase bg-[#8c3b22] px-3 py-0.5 rounded-full mb-1">
            {island.parva} • {island.era}
          </span>
          <h2 className="font-heading text-xl sm:text-2xl text-[#d4af37] font-bold">
            {island.title}
          </h2>
          <div className="flex items-center gap-2 text-xs font-parchment text-[#d8c4a0] mt-1">
            <span>Scroll vertically to read the chronicle</span>
          </div>
        </div>

        {/* SECTION 1: INITIAL WEBTOON COMIC PANELS */}
        <div className="flex flex-col gap-6 p-3 sm:p-6">
          {island.initialPanels.map((panel, idx) => (
            <PanelCard key={panel.id} panel={panel} index={idx + 1} />
          ))}
        </div>

        {/* SECTION 2: THE "FATE FORK" DECISION GATE */}
        <div ref={decisionRef} className="my-6 px-3 sm:px-6">
          <div className="relative bg-[#281d16] text-[#f7eed3] p-5 rounded-2xl border-4 border-[#d4af37] gold-card-shadow overflow-hidden">
            
            {/* Header / Threshold Emblem */}
            <div className="flex flex-col items-center text-center mb-4">
              <div className="inline-flex items-center gap-2 bg-[#8c3b22] border border-[#d4af37] px-3 py-1 rounded-full text-xs font-bold text-[#d4af37] uppercase mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>Karmic Decision Threshold</span>
              </div>
              <h3 className="font-heading text-lg sm:text-xl text-[#d4af37] font-bold">
                ⚡ THE BALANCE OF DHARMA CRACKS — CHOOSE THE PATH
              </h3>
              <p className="text-xs font-parchment text-[#d8c4a0] italic mt-1 max-w-lg">
                {island.choicePrompt}
              </p>
            </div>

            {/* 3 Decision Cards */}
            <div className="flex flex-col gap-3">
              {island.choices.map((choice) => {
                const isSelected = selectedChoice?.id === choice.id;
                
                let badgeColor = 'bg-[#d4af37] text-[#17110e]';
                let cardBorder = 'border-[#d4af37] hover:border-[#f59e0b]';
                let sealName = 'Lotus Seal';

                if (choice.type === 'subversive') {
                  badgeColor = 'bg-[#008080] text-[#f7eed3]';
                  cardBorder = 'border-[#008080] hover:border-[#06b6d4]';
                  sealName = 'Conch Seal';
                } else if (choice.type === 'radical') {
                  badgeColor = 'bg-[#8c3b22] text-[#f7eed3]';
                  cardBorder = 'border-[#8c3b22] hover:border-[#dc2626]';
                  sealName = 'Chakra Seal';
                }

                return (
                  <button
                    key={choice.id}
                    onClick={() => handleSelectChoice(choice)}
                    className={`group w-full text-left p-4 rounded-xl border-2 ${cardBorder} transition-all duration-300 cursor-pointer relative overflow-hidden ${
                      isSelected ? 'bg-[#38291f] border-4 scale-[1.01]' : 'bg-[#1d140f] hover:bg-[#281d16]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-[10px] font-bold font-ui px-2.5 py-0.5 rounded uppercase tracking-wider ${badgeColor}`}>
                            {choice.type === 'canon' ? 'Original Itihasa' : choice.type === 'subversive' ? 'Subversive Alternative' : 'Radical Defiance'}
                          </span>
                          <span className="text-[10px] font-parchment text-[#d8c4a0] italic">
                            • {sealName}
                          </span>
                        </div>
                        <h4 className="font-heading text-base font-bold text-[#f7eed3] group-hover:text-[#d4af37] transition-colors">
                          {choice.label}
                        </h4>
                      </div>

                      {/* Divergence Metric Badge */}
                      <div className="text-right shrink-0">
                        <span className="text-[10px] font-ui text-[#d8c4a0] block uppercase">Divergence</span>
                        <span className="text-sm font-bold font-ui text-[#d4af37]">{choice.divergence}%</span>
                      </div>
                    </div>

                    {isSelected && (
                      <div className="mt-2 flex items-center gap-1.5 text-xs text-[#d4af37] font-bold">
                        <CheckCircle className="w-4 h-4" />
                        <span>Karmic Seal Engaged — Scroll down to see continuation</span>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

          </div>
        </div>

        {/* SECTION 3: DYNAMIC BRANCHING CONTINUATION PANELS */}
        <AnimatePresence>
          {selectedChoice && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex flex-col gap-6 p-3 sm:p-6 border-t-2 border-[#aa7c11]/40"
            >
              <div className="text-center my-2">
                <span className="bg-[#8c3b22] text-[#f7eed3] text-xs font-bold font-ui px-4 py-1 rounded-full border border-[#d4af37]">
                  UNROLLED FALLOUT — {selectedChoice.label}
                </span>
              </div>

              {selectedChoice.continuationPanels.map((panel, idx) => (
                <PanelCard key={panel.id} panel={panel} index={idx + 4} />
              ))}

              {/* SECTION 4: EPISODE EPILOGUE SEAL */}
              <div ref={epilogueRef} className="mt-6">
                <div className="bg-[#1d140f] text-[#f7eed3] p-6 rounded-2xl border-4 border-[#d4af37] gold-card-shadow flex flex-col items-center text-center">
                  
                  {/* Wax Seal Emblem */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#d4af37] to-[#8c3b22] border-2 border-[#d4af37] flex items-center justify-center text-[#17110e] font-bold text-2xl shadow-lg mb-3">
                    🪷
                  </div>

                  <span className="text-xs font-ui text-[#d4af37] tracking-widest uppercase">
                    Timeline Realignment Epilogue
                  </span>
                  <h3 className="font-heading text-xl font-bold text-[#f7eed3] mt-1">
                    {selectedChoice.epilogue.title}
                  </h3>
                  <p className="text-xs font-parchment text-[#d8c4a0] max-w-lg mt-2 leading-relaxed">
                    {selectedChoice.epilogue.summary}
                  </p>

                  {/* Divergence Stat Gauge */}
                  <div className="w-full max-w-md bg-[#281d16] p-3 rounded-lg border border-[#aa7c11]/40 my-4 flex items-center justify-between">
                    <span className="text-xs font-ui text-[#d8c4a0] uppercase">Timeline Divergence Rating</span>
                    <span className="text-sm font-bold font-ui text-[#d4af37]">{selectedChoice.divergence}%</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md mt-2">
                    <button
                      onClick={handleReRoll}
                      className="w-full sm:w-1/2 py-2.5 px-4 bg-[#281d16] hover:bg-[#38291f] text-[#f7eed3] border border-[#d4af37] rounded-lg font-ui text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4 text-[#d4af37]" />
                      <span>Re-Roll Destiny</span>
                    </button>

                    <button
                      onClick={() => {
                        audioEngine.playSoundFx('click');
                        onReturnToMap();
                      }}
                      className="w-full sm:w-1/2 py-2.5 px-4 bg-gradient-to-r from-[#aa7c11] via-[#d4af37] to-[#aa7c11] hover:brightness-110 text-[#17110e] font-ui text-xs font-extrabold uppercase tracking-wider rounded-lg border border-[#aa7c11] shadow transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                    >
                      <MapPin className="w-4 h-4 text-[#17110e]" />
                      <span>Return to Map</span>
                    </button>
                  </div>

                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </main>

    </div>
  );
};

// Helper Component: Single Webtoon Panel Card
const PanelCard: React.FC<{ panel: WebtoonPanel; index: number }> = ({ panel, index }) => {
  const charKey = panel.speaker
    ? panel.speaker.toLowerCase().includes('pandu') ? 'pandu'
    : panel.speaker.toLowerCase().includes('karna') ? 'karna'
    : panel.speaker.toLowerCase().includes('bhima') ? 'bhima'
    : panel.speaker.toLowerCase().includes('arjuna') ? 'arjuna'
    : panel.speaker.toLowerCase().includes('yudhishthira') ? 'yudhishthira'
    : panel.speaker.toLowerCase().includes('shakuni') ? 'shakuni'
    : panel.speaker.toLowerCase().includes('draupadi') ? 'draupadi'
    : panel.speaker.toLowerCase().includes('krishna') ? 'krishna'
    : panel.speaker.toLowerCase().includes('drona') ? 'drona'
    : panel.speaker.toLowerCase().includes('duryodhana') ? 'duryodhana'
    : 'pandu'
    : null;

  return (
    <div className="flex flex-col bg-[#fffbeb] border-4 border-[#aa7c11] rounded-xl overflow-hidden shadow-lg">
      
      {/* Panel Top Header Bar */}
      <div className="bg-[#8c3b22] text-[#f7eed3] px-3 py-1 flex items-center justify-between text-[11px] font-ui">
        <span className="font-bold uppercase tracking-wider">Panel #{index}</span>
        {panel.speaker && <span className="italic text-[#d4af37]">{panel.speaker}</span>}
      </div>

      {/* Main Panel Illustration View */}
      <div className="relative w-full h-64 sm:h-80 bg-[#17110e] overflow-hidden flex items-center justify-center">
        {/* Render Background Image or Dual-Mode Vector Fallback */}
        <ComicPanel scene="lakshagriha" />

        {/* SFX Sticker Overlay */}
        {panel.sfx && (
          <div className="absolute top-4 right-4 z-20 bg-[#a94a2d] text-[#f7eed3] font-heading text-lg sm:text-2xl font-extrabold px-4 py-1.5 rounded-lg border-2 border-[#d4af37] shadow-xl rotate-6 animate-bounce">
            {panel.sfx}
          </div>
        )}

        {/* Character Avatar Cutout in Panel */}
        {charKey && (
          <div className="absolute bottom-0 left-4 z-10 w-28 h-36 sm:w-36 sm:h-44">
            <ComicAvatar character={charKey as any} />
          </div>
        )}
      </div>

      {/* Narrator Caption Box */}
      {panel.caption && (
        <div className="bg-[#f7eed3] p-3 border-t-2 border-[#aa7c11] font-parchment text-xs sm:text-sm text-[#2a1810] italic font-semibold leading-relaxed">
          <span className="font-bold text-[#8c3b22] not-italic mr-1.5">[ NARRATOR ]:</span>
          {panel.caption}
        </div>
      )}

      {/* Comic Speech Balloon */}
      {panel.dialogue && panel.speaker && (
        <div className="p-4 bg-[#fffbeb] border-t-2 border-[#aa7c11] flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="font-heading text-xs font-bold text-[#8c3b22] bg-[#ead8b1] px-2 py-0.5 rounded border border-[#aa7c11]">
              {panel.speaker}
            </span>
          </div>
          <div className="speech-balloon-cream p-3 rounded-lg text-xs sm:text-sm font-parchment text-[#2a1810] font-medium leading-normal mt-1">
            "{panel.dialogue}"
          </div>
        </div>
      )}

    </div>
  );
};
