import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { WebtoonIsland, WebtoonChoiceOption, WebtoonPanel } from '../data/webtoonData';
import { ASSETS } from '../assets/gameAssets';
import { ComicPanel, ComicAvatar } from './ComicGraphics';
import { audioEngine } from '../utils/audioEngine';
import { RotateCcw, MapPin, ShieldAlert, CheckCircle } from 'lucide-react';

interface WebtoonComicStageProps {
  island: WebtoonIsland;
  onReturnToMap: () => void;
  onChoiceMade: (islandId: string, totalDivergence: number) => void;
}

export const WebtoonComicStage: React.FC<WebtoonComicStageProps> = ({
  island,
  onReturnToMap,
  onChoiceMade,
}) => {
  // Track choices made across Act 1, Act 2, Act 3
  const [act1Choice, setAct1Choice] = useState<WebtoonChoiceOption | null>(null);
  const [act2Choice, setAct2Choice] = useState<WebtoonChoiceOption | null>(null);
  const [act3Choice, setAct3Choice] = useState<WebtoonChoiceOption | null>(null);

  const act2Ref = useRef<HTMLDivElement | null>(null);
  const act3Ref = useRef<HTMLDivElement | null>(null);
  const epilogueRef = useRef<HTMLDivElement | null>(null);

  // Calculate cumulative divergence score
  const currentDivergence = Math.round(
    ((act1Choice?.divergence || 0) + (act2Choice?.divergence || 0) + (act3Choice?.divergence || 0)) /
      (act3Choice ? 3 : act2Choice ? 2 : act1Choice ? 1 : 1)
  );

  const handleAct1Choice = (choice: WebtoonChoiceOption) => {
    setAct1Choice(choice);
    audioEngine.playSoundFx(choice.type === 'radical' ? 'thunder' : choice.type === 'subversive' ? 'gong' : 'bell');
    setTimeout(() => {
      act2Ref.current?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  const handleAct2Choice = (choice: WebtoonChoiceOption) => {
    setAct2Choice(choice);
    audioEngine.playSoundFx(choice.type === 'radical' ? 'thunder' : choice.type === 'subversive' ? 'gong' : 'bell');
    setTimeout(() => {
      act3Ref.current?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  const handleAct3Choice = (choice: WebtoonChoiceOption) => {
    setAct3Choice(choice);
    const finalDivergence = Math.round(((act1Choice?.divergence || 0) + (act2Choice?.divergence || 0) + choice.divergence) / 3);
    onChoiceMade(island.id, finalDivergence);
    audioEngine.playSoundFx(choice.type === 'radical' ? 'thunder' : choice.type === 'subversive' ? 'gong' : 'bell');
    setTimeout(() => {
      epilogueRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  };

  const handleReRoll = () => {
    audioEngine.playSoundFx('click');
    setAct1Choice(null);
    setAct2Choice(null);
    setAct3Choice(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen w-full bg-[#FAF4E6] text-[#2C1810] flex flex-col items-center py-6 px-2 sm:px-4 font-serif">
      
      {/* Centered Webtoon Reader Container (720px format) */}
      <main className="w-full max-w-[720px] bg-[#FFFDF7] rounded-t-2xl shadow-2xl border-x-4 border-t-4 border-[#D4AF37] overflow-hidden flex flex-col my-2">
        
        {/* Header Title Banner */}
        <div className="bg-[#FFFDF7] text-[#2C1810] p-5 border-b-4 border-[#D4AF37] flex flex-col items-center text-center shadow-sm">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-sans font-bold tracking-widest text-white uppercase bg-[#8E2800] px-3 py-0.5 rounded-full">
              {island.parva} • {island.era}
            </span>
            <span className="text-xs font-bold text-[#A06D12]">
              Divergence: {currentDivergence}%
            </span>
          </div>
          <h2 className="font-extrabold text-2xl sm:text-3xl text-[#8E2800] mt-1">
            {island.title}
          </h2>
          <p className="text-xs text-[#684C32] italic mt-1">
            Experience 3 Sequential Decision Gates to alter the epic's destiny
          </p>
        </div>

        {/* ==================== ACT 1 ==================== */}
        <div className="flex flex-col gap-6 p-4 sm:p-6">
          <div className="bg-[#FAF4E6] border-2 border-[#D4AF37] px-3 py-1.5 rounded-md inline-block text-xs font-bold text-[#8E2800] uppercase tracking-wider">
            {island.acts[0].actTitle}
          </div>

          {island.acts[0].panels.map((panel, idx) => (
            <ComicPanelComposition key={panel.id} panel={panel} index={idx + 1} islandId={island.id} />
          ))}

          {/* Act 1 Decision Gate */}
          <DecisionGateBox
            actNumber={1}
            prompt={island.acts[0].prompt}
            choices={island.acts[0].choices}
            selectedChoice={act1Choice}
            onSelectChoice={handleAct1Choice}
          />
        </div>

        {/* ==================== ACT 2 ==================== */}
        <AnimatePresence>
          {act1Choice && (
            <motion.div
              ref={act2Ref}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex flex-col gap-6 p-4 sm:p-6 border-t-4 border-[#D4AF37] bg-[#FAF4E6]/40"
            >
              <div className="bg-[#8E2800] text-white px-3 py-1.5 rounded-md inline-block text-xs font-bold uppercase tracking-wider">
                {island.acts[1].actTitle} — Consequences of Choice 1
              </div>

              {island.acts[1].panels.map((panel, idx) => (
                <ComicPanelComposition key={panel.id} panel={panel} index={idx + 4} islandId={island.id} />
              ))}

              {/* Act 2 Decision Gate */}
              <DecisionGateBox
                actNumber={2}
                prompt={island.acts[1].prompt}
                choices={island.acts[1].choices}
                selectedChoice={act2Choice}
                onSelectChoice={handleAct2Choice}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ==================== ACT 3 ==================== */}
        <AnimatePresence>
          {act2Choice && (
            <motion.div
              ref={act3Ref}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex flex-col gap-6 p-4 sm:p-6 border-t-4 border-[#D4AF37] bg-[#FAF4E6]/80"
            >
              <div className="bg-[#8E2800] text-white px-3 py-1.5 rounded-md inline-block text-xs font-bold uppercase tracking-wider">
                {island.acts[2].actTitle} — The Climax
              </div>

              {island.acts[2].panels.map((panel, idx) => (
                <ComicPanelComposition key={panel.id} panel={panel} index={idx + 6} islandId={island.id} />
              ))}

              {/* Act 3 Decision Gate */}
              <DecisionGateBox
                actNumber={3}
                prompt={island.acts[2].prompt}
                choices={island.acts[2].choices}
                selectedChoice={act3Choice}
                onSelectChoice={handleAct3Choice}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ==================== FINAL EPILOGUE SEAL ==================== */}
        <AnimatePresence>
          {act3Choice && (
            <motion.div
              ref={epilogueRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="p-6 border-t-4 border-[#D4AF37] bg-[#FFFDF7]"
            >
              <div className="bg-[#FAF4E6] text-[#2C1810] p-6 rounded-2xl border-4 border-[#D4AF37] shadow-xl flex flex-col items-center text-center">
                
                {/* Wax Seal Emblem */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8E2800] border-2 border-[#D4AF37] flex items-center justify-center text-white font-bold text-2xl shadow-md mb-3">
                  🪷
                </div>

                <span className="text-xs font-sans font-bold text-[#8E2800] tracking-widest uppercase">
                  Final 3-Tier Timeline Verdict
                </span>
                <h3 className="font-extrabold text-2xl text-[#8E2800] mt-1">
                  {island.epilogue.title}
                </h3>
                <p className="text-xs text-[#2C1810] max-w-lg mt-2 leading-relaxed font-serif">
                  {island.epilogue.summary}
                </p>

                {/* Cumulative Divergence Metric */}
                <div className="w-full max-w-md bg-[#FFFDF7] p-4 rounded-xl border-2 border-[#D4AF37] my-4 flex items-center justify-between shadow-sm">
                  <span className="text-xs font-bold text-[#8E2800] uppercase">Cumulative Timeline Divergence</span>
                  <span className="text-base font-extrabold text-[#A06D12]">{currentDivergence}%</span>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md mt-2">
                  <button
                    onClick={handleReRoll}
                    className="w-full sm:w-1/2 py-3 px-4 bg-[#FFFDF7] hover:bg-[#FAF4E6] text-[#8E2800] border-2 border-[#D4AF37] rounded-lg font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer shadow-sm"
                  >
                    <RotateCcw className="w-4 h-4 text-[#8E2800]" />
                    <span>Re-Roll Destiny</span>
                  </button>

                  <button
                    onClick={() => {
                      audioEngine.playSoundFx('click');
                      onReturnToMap();
                    }}
                    className="w-full sm:w-1/2 py-3 px-4 bg-gradient-to-r from-[#8E2800] to-[#A06D12] hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider rounded-lg border border-[#D4AF37] shadow transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
                  >
                    <MapPin className="w-4 h-4 text-white" />
                    <span>Return to Map</span>
                  </button>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>

    </div>
  );
};

// ==================== HELPER COMPONENT 1: PROFESSIONAL COMIC PANEL COMPOSITION ====================
// Replaces ugly absolute-positioned overlapping rectangular card overlays with clean Side-by-Side Circular Cameo Medallions!
const ComicPanelComposition: React.FC<{ panel: WebtoonPanel; index: number; islandId: string }> = ({ panel, index, islandId }) => {
  const [imgError, setImgError] = useState(false);
  const [charImgError, setCharImgError] = useState(false);

  // Match Scene Image
  const getSceneImg = () => {
    if (islandId.includes('1')) return ASSETS.scenes.forest;
    if (islandId.includes('2')) return ASSETS.scenes.arena;
    if (islandId.includes('3')) return ASSETS.scenes.lac;
    if (islandId.includes('4')) return ASSETS.scenes.swayamvara;
    if (islandId.includes('5')) return ASSETS.scenes.khandava;
    if (islandId.includes('6')) return ASSETS.scenes.dice;
    if (islandId.includes('7')) return ASSETS.scenes.exile;
    if (islandId.includes('8')) return ASSETS.scenes.matsya;
    if (islandId.includes('9')) return ASSETS.scenes.dwarka;
    if (islandId.includes('10')) return ASSETS.scenes.kurukshetra;
    return ASSETS.scenes.forest;
  };

  const sceneSrc = getSceneImg();

  // Match Character Image
  const getCharImg = () => {
    if (!panel.speaker && !panel.charKey) return null;
    const name = (panel.speaker || panel.charKey || '').toLowerCase();
    if (name.includes('pandu')) return ASSETS.characters.pandu;
    if (name.includes('karna')) return ASSETS.characters.karna;
    if (name.includes('bhima')) return ASSETS.characters.bhima;
    if (name.includes('arjuna')) return ASSETS.characters.arjuna;
    if (name.includes('yudhishthira')) return ASSETS.characters.yudhishthira;
    if (name.includes('shakuni')) return ASSETS.characters.shakuni;
    if (name.includes('draupadi')) return ASSETS.characters.draupadi;
    if (name.includes('krishna')) return ASSETS.characters.krishna;
    if (name.includes('drona')) return ASSETS.characters.drona;
    if (name.includes('duryodhana')) return ASSETS.characters.duryodhana;
    return ASSETS.characters.pandu;
  };

  const charSrc = getCharImg();

  const charKey = panel.speaker || panel.charKey
    ? (panel.speaker || panel.charKey || '').toLowerCase().includes('pandu') ? 'pandu'
    : (panel.speaker || panel.charKey || '').toLowerCase().includes('karna') ? 'karna'
    : (panel.speaker || panel.charKey || '').toLowerCase().includes('bhima') ? 'bhima'
    : (panel.speaker || panel.charKey || '').toLowerCase().includes('arjuna') ? 'arjuna'
    : (panel.speaker || panel.charKey || '').toLowerCase().includes('yudhishthira') ? 'yudhishthira'
    : (panel.speaker || panel.charKey || '').toLowerCase().includes('shakuni') ? 'shakuni'
    : (panel.speaker || panel.charKey || '').toLowerCase().includes('draupadi') ? 'draupadi'
    : (panel.speaker || panel.charKey || '').toLowerCase().includes('krishna') ? 'krishna'
    : (panel.speaker || panel.charKey || '').toLowerCase().includes('drona') ? 'drona'
    : (panel.speaker || panel.charKey || '').toLowerCase().includes('duryodhana') ? 'duryodhana'
    : 'pandu'
    : null;

  return (
    <div className="flex flex-col bg-[#FFFDF7] border-4 border-[#D4AF37] rounded-xl overflow-hidden shadow-md">
      
      {/* Panel Top Header Bar */}
      <div className="bg-[#8E2800] text-white px-3 py-1 flex items-center justify-between text-[11px] font-bold">
        <span className="uppercase tracking-wider">Panel #{index}</span>
        {panel.speaker && <span className="italic text-[#D4AF37]">{panel.speaker}</span>}
      </div>

      {/* Main Full-Bleed Widescreen Scene View */}
      <div className="relative w-full h-56 sm:h-72 bg-[#EAD8B1] overflow-hidden flex items-center justify-center">
        {!imgError ? (
          <img
            src={sceneSrc}
            alt="Comic Scene"
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <ComicPanel scene="lakshagriha" />
        )}

        {/* SFX Sticker Overlay */}
        {panel.sfx && (
          <div className="absolute top-4 right-4 z-20 bg-[#8E2800] text-white font-extrabold text-lg sm:text-2xl px-4 py-1 rounded-lg border-2 border-[#D4AF37] shadow-xl rotate-6 animate-bounce">
            {panel.sfx}
          </div>
        )}
      </div>

      {/* Narrator Caption Banner */}
      {panel.caption && (
        <div className="bg-[#FAF4E6] p-3 border-t-2 border-[#D4AF37] font-serif text-xs sm:text-sm text-[#2C1810] italic font-semibold leading-relaxed">
          <span className="font-bold text-[#8E2800] not-italic mr-1.5">[ NARRATOR ]:</span>
          {panel.caption}
        </div>
      )}

      {/* Clean Side-by-Side Speech Strip with Circular Cameo Medallion (NO awkward card overlays!) */}
      {panel.dialogue && panel.speaker && (
        <div className="p-4 bg-[#FFFDF7] border-t-2 border-[#D4AF37] flex items-center gap-3">
          
          {/* Circular Golden Cameo Medallion */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-[#D4AF37] shadow-lg overflow-hidden bg-[#FFFDF7] shrink-0 flex items-center justify-center">
            {charSrc && !charImgError ? (
              <img
                src={charSrc}
                alt={panel.speaker}
                className="w-full h-full object-cover"
                onError={() => setCharImgError(true)}
              />
            ) : charKey ? (
              <ComicAvatar character={charKey as any} />
            ) : (
              <div className="w-full h-full bg-[#8E2800] flex items-center justify-center text-white font-bold text-xs">
                {panel.speaker[0]}
              </div>
            )}
          </div>

          {/* Parchment Speech Balloon */}
          <div className="flex-1 bg-[#FAF4E6] p-3 rounded-xl border-2 border-[#AA7C11] shadow-sm relative">
            <span className="font-bold text-xs text-[#8E2800] block mb-1">
              {panel.speaker}
            </span>
            <p className="text-xs sm:text-sm font-serif text-[#2C1810] leading-snug">
              "{panel.dialogue}"
            </p>
          </div>

        </div>
      )}

    </div>
  );
};

// ==================== HELPER COMPONENT 2: DECISION GATE BOX ====================
const DecisionGateBox: React.FC<{
  actNumber: number;
  prompt: string;
  choices: WebtoonChoiceOption[];
  selectedChoice: WebtoonChoiceOption | null;
  onSelectChoice: (choice: WebtoonChoiceOption) => void;
}> = ({ actNumber, prompt, choices, selectedChoice, onSelectChoice }) => {
  return (
    <div className="relative bg-[#FFFDF7] text-[#2C1810] p-5 rounded-2xl border-4 border-[#D4AF37] shadow-lg my-3">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-4">
        <div className="inline-flex items-center gap-1.5 bg-[#8E2800] text-white px-3 py-0.5 rounded-full text-[11px] font-bold uppercase mb-1">
          <ShieldAlert className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Decision Gate #{actNumber}</span>
        </div>
        <h3 className="font-extrabold text-base sm:text-lg text-[#8E2800]">
          ⚡ {prompt}
        </h3>
      </div>

      {/* Choice Options */}
      <div className="flex flex-col gap-2.5">
        {choices.map((choice) => {
          const isSelected = selectedChoice?.id === choice.id;

          let badgeColor = 'bg-[#D4AF37] text-[#2C1810]';
          let borderStyle = 'border-[#D4AF37] hover:border-[#8E2800]';

          if (choice.type === 'subversive') {
            badgeColor = 'bg-[#008080] text-white';
            borderStyle = 'border-[#008080] hover:border-[#8E2800]';
          } else if (choice.type === 'radical') {
            badgeColor = 'bg-[#8E2800] text-white';
            borderStyle = 'border-[#8E2800] hover:border-[#A06D12]';
          }

          return (
            <button
              key={choice.id}
              onClick={() => onSelectChoice(choice)}
              className={`w-full text-left p-3.5 rounded-xl border-2 ${borderStyle} transition-all duration-200 cursor-pointer flex items-center justify-between ${
                isSelected ? 'bg-[#FAF4E6] border-4 scale-[1.01]' : 'bg-[#FFFDF7] hover:bg-[#FAF4E6]'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`text-[10px] font-bold font-sans px-2.5 py-0.5 rounded uppercase ${badgeColor}`}>
                  {choice.type === 'canon' ? 'Original Itihasa' : choice.type === 'subversive' ? 'Subversive' : 'Radical Defiance'}
                </span>
                <span className="font-bold text-xs sm:text-sm text-[#2C1810]">
                  {choice.label}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#A06D12]">{choice.divergence}%</span>
                {isSelected && <CheckCircle className="w-4 h-4 text-[#8E2800]" />}
              </div>
            </button>
          );
        })}
      </div>

    </div>
  );
};
