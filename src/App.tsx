import { useState } from 'react';
import { ISLANDS_DATA } from './data/islandsData';
import type { Island, Choice, PathStep, IslandEnding } from './types';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Header } from './components/Header';
import { AstralWorldMap } from './components/AstralWorldMap';
import { ComicBookStage } from './components/ComicBookStage';
import { ActionComicSplash } from './components/ActionComicSplash';
import { ComicEpilogue } from './components/ComicEpilogue';
import { TimelineVisualizer } from './components/TimelineVisualizer';
import { CodexView } from './components/CodexView';
import { audioEngine } from './utils/audioEngine';

export type AppViewMode = 'overworld' | 'comic_stage' | 'timeline' | 'codex';

export function App() {
  // 1. Core State
  const [activeIslandId, setActiveIslandId] = useState<string>('island-1');
  const activeIsland: Island = ISLANDS_DATA.find(i => i.id === activeIslandId) || ISLANDS_DATA[0];

  const [currentSceneId, setCurrentSceneId] = useState<string>(activeIsland.initialSceneId);
  const currentScene = activeIsland.scenes[currentSceneId] || activeIsland.scenes[activeIsland.initialSceneId];

  const [pathHistory, setPathHistory] = useState<PathStep[]>([]);
  const [dharmaScore, setDharmaScore] = useState<number>(50);
  const [karmaScore, setKarmaScore] = useState<number>(50);
  const [divergenceScore, setDivergenceScore] = useState<number>(0);

  const [audioEnabled, setAudioEnabled] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<AppViewMode>('overworld');
  const [activeEnding, setActiveEnding] = useState<IslandEnding | null>(null);

  // Action Splash Sticker State
  const [splashState, setSplashState] = useState<{ active: boolean; text: string; tag?: string }>({
    active: false,
    text: 'SHING!'
  });

  // 2. Select Island / Breach Realm
  const handleSelectIsland = (islandId: string) => {
    const targetIsland = ISLANDS_DATA.find(i => i.id === islandId);
    if (!targetIsland) return;

    setActiveIslandId(islandId);
    setCurrentSceneId(targetIsland.initialSceneId);
    setPathHistory([]);
    setDharmaScore(50);
    setKarmaScore(50);
    setDivergenceScore(0);
    setActiveEnding(null);

    // Switch to Comic Book Stage
    setViewMode('comic_stage');
    audioEngine.setAtmospherePreset(targetIsland.atmosphere);
  };

  // 3. Reset Current Island Path
  const handleResetIsland = () => {
    setCurrentSceneId(activeIsland.initialSceneId);
    setPathHistory([]);
    setDharmaScore(50);
    setKarmaScore(50);
    setDivergenceScore(0);
    setActiveEnding(null);
  };

  // 4. Toggle Web Audio API Synthesizer
  const handleToggleAudio = () => {
    audioEngine.init();
    const muted = audioEngine.toggleMute();
    setAudioEnabled(!muted);
  };

  // 5. Choice Selection Handler
  const handleSelectChoice = (choice: Choice) => {
    let stickerText = 'SHING!';
    let sfxType: 'slash' | 'thwack' | 'gong' | 'thunder' | 'divine' = 'slash';

    if (choice.alignmentTag === 'Adharma (Selfish Gain)' || choice.soundFx === 'thunder') {
      stickerText = 'KRZZZT!';
      sfxType = 'thunder';
    } else if (choice.alignmentTag === 'Swadharma (Duty)') {
      stickerText = 'THWACK!';
      sfxType = 'thwack';
    } else if (choice.alignmentTag === 'Satya (Absolute Truth)') {
      stickerText = 'DIVINE SHINE!';
      sfxType = 'divine';
    }

    audioEngine.playSoundFx(sfxType);
    setSplashState({ active: true, text: stickerText, tag: choice.alignmentTag });

    setTimeout(() => {
      setSplashState({ active: false, text: 'SHING!' });
    }, 650);

    const newDharma = Math.min(100, Math.max(0, dharmaScore + choice.deltaDharma));
    const newKarma = Math.min(100, Math.max(0, karmaScore + choice.deltaKarma));
    const newDivergence = Math.min(100, Math.max(0, divergenceScore + choice.divergenceImpact));

    setDharmaScore(newDharma);
    setKarmaScore(newKarma);
    setDivergenceScore(newDivergence);

    const newStep: PathStep = {
      sceneId: currentSceneId,
      choiceId: choice.id,
      choiceLabel: choice.label,
      alignmentTag: choice.alignmentTag,
      divergenceScore: newDivergence,
      deltaDharma: choice.deltaDharma,
      deltaKarma: choice.deltaKarma
    };

    setPathHistory(prev => [...prev, newStep]);

    if (choice.endingId && activeIsland.endings[choice.endingId]) {
      setActiveEnding(activeIsland.endings[choice.endingId]);
    } else if (choice.nextSceneId && activeIsland.scenes[choice.nextSceneId]) {
      setCurrentSceneId(choice.nextSceneId);
    }
  };

  // Advance to next Island
  const handleNextIsland = () => {
    const currentIndex = ISLANDS_DATA.findIndex(i => i.id === activeIslandId);
    if (currentIndex >= 0 && currentIndex < ISLANDS_DATA.length - 1) {
      handleSelectIsland(ISLANDS_DATA[currentIndex + 1].id);
    }
  };

  const hasNextIsland = ISLANDS_DATA.findIndex(i => i.id === activeIslandId) < ISLANDS_DATA.length - 1;

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col font-ui relative overflow-x-hidden">
      
      {/* Background HTML5 Canvas Particles */}
      <ParticleCanvas atmosphere={activeIsland.atmosphere} />

      {/* Comic Action Splash Screen Overlay */}
      <ActionComicSplash
        active={splashState.active}
        soundText={splashState.text}
        tag={splashState.tag}
      />

      {/* Navigation Header */}
      <Header
        islands={ISLANDS_DATA}
        activeIsland={activeIsland}
        activeView={viewMode === 'overworld' ? 'sandbox' : (viewMode as any)}
        onSelectIsland={handleSelectIsland}
        onSelectView={(v) => {
          if (v === 'sandbox') setViewMode('comic_stage');
          else setViewMode(v as AppViewMode);
        }}
        divergenceScore={divergenceScore}
        audioEnabled={audioEnabled}
        onToggleAudio={handleToggleAudio}
        onResetIsland={handleResetIsland}
      />

      {/* View Switcher Main Container */}
      <main className="flex-1 w-full z-10">
        
        {/* VIEW 1: ASTRAL OVERWORLD COSMOS MAP */}
        {viewMode === 'overworld' && (
          <AstralWorldMap
            islands={ISLANDS_DATA}
            onSelectIsland={handleSelectIsland}
          />
        )}

        {/* VIEW 2: COMIC BOOK STAGE */}
        {viewMode === 'comic_stage' && (
          <div className="py-6 px-2 sm:px-4">
            <ComicBookStage
              island={activeIsland}
              currentScene={currentScene}
              pathHistory={pathHistory}
              divergenceScore={divergenceScore}
              onSelectChoice={handleSelectChoice}
              onReturnToOverworld={() => setViewMode('overworld')}
            />
          </div>
        )}

        {/* VIEW 3: MULTIVERSE TIMELINE MAP */}
        {viewMode === 'timeline' && (
          <div className="py-6">
            <TimelineVisualizer
              island={activeIsland}
              currentSceneId={currentSceneId}
              pathHistory={pathHistory}
              onResetIsland={handleResetIsland}
            />
          </div>
        )}

        {/* VIEW 4: LORE CODEX */}
        {viewMode === 'codex' && (
          <div className="py-6">
            <CodexView />
          </div>
        )}

      </main>

      {/* WHAT IF...? Special Issue Epilogue Modal */}
      <ComicEpilogue
        ending={activeEnding}
        onRewindIssue={handleResetIsland}
        onReturnToOverworld={() => {
          setActiveEnding(null);
          setViewMode('overworld');
        }}
        onNextIssue={handleNextIsland}
        hasNextIssue={hasNextIsland}
      />

      {/* Footer */}
      <footer className="w-full py-4 px-6 border-t-2 border-black bg-slate-950 text-center text-xs text-slate-500 font-mono z-10">
        Dharmakshetra • Interactive Graphic-Novel Decision Game • Powered by React & Web Audio API
      </footer>
    </div>
  );
}

export default App;
