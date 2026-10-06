import { useState } from 'react';
import { ISLANDS_DATA } from './data/islandsData';
import type { Island, Choice, PathStep, IslandEnding } from './types';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Header } from './components/Header';
import { OverworldCosmosMap } from './components/OverworldCosmosMap';
import { ComicStage } from './components/ComicStage';
import { ActionComicSplash } from './components/ActionComicSplash';
import { TelemetryPanel } from './components/TelemetryPanel';
import { EndingModal } from './components/EndingModal';
import { TimelineVisualizer } from './components/TimelineVisualizer';
import { CodexView } from './components/CodexView';
import { audioEngine } from './utils/audioEngine';

export type AppViewMode = 'overworld' | 'stage' | 'timeline' | 'codex';

export function App() {
  // 1. Core Game State
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

  // Action Splash State
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

    // Switch to Comic Stage View
    setViewMode('stage');
    audioEngine.setAtmospherePreset(targetIsland.atmosphere);
  };

  // 3. Reset Island State
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

  // 5. Choice Selection Handler with Comic Action Splash
  const handleSelectChoice = (choice: Choice) => {
    // Pick sound FX & Sticker text based on alignment tag / choice impact
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

    // Trigger audio & sticker splash
    audioEngine.playSoundFx(sfxType);
    setSplashState({ active: true, text: stickerText, tag: choice.alignmentTag });

    setTimeout(() => {
      setSplashState({ active: false, text: 'SHING!' });
    }, 650);

    // Update metrics
    const newDharma = Math.min(100, Math.max(0, dharmaScore + choice.deltaDharma));
    const newKarma = Math.min(100, Math.max(0, karmaScore + choice.deltaKarma));
    const newDivergence = Math.min(100, Math.max(0, divergenceScore + choice.divergenceImpact));

    setDharmaScore(newDharma);
    setKarmaScore(newKarma);
    setDivergenceScore(newDivergence);

    // Record decision step
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

    // Handle scene navigation or ending trigger
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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-ui relative overflow-x-hidden">
      
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
          if (v === 'sandbox') setViewMode('stage');
          else setViewMode(v as AppViewMode);
        }}
        divergenceScore={divergenceScore}
        audioEnabled={audioEnabled}
        onToggleAudio={handleToggleAudio}
        onResetIsland={handleResetIsland}
      />

      {/* View Switcher Main Container */}
      <main className="flex-1 w-full z-10">
        
        {/* VIEW 1: OVERWORLD COSMOS MAP */}
        {viewMode === 'overworld' && (
          <OverworldCosmosMap
            islands={ISLANDS_DATA}
            onBreachRealm={handleSelectIsland}
          />
        )}

        {/* VIEW 2: GRAPHIC NOVEL SCENARIO STAGE */}
        {viewMode === 'stage' && (
          <div className="py-6 px-2 sm:px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              
              {/* Main Comic Widescreen Canvas (3 Columns) */}
              <div className="lg:col-span-3">
                <ComicStage
                  island={activeIsland}
                  currentScene={currentScene}
                  pathHistory={pathHistory}
                  divergenceScore={divergenceScore}
                  onSelectChoice={handleSelectChoice}
                  onFleeToCosmos={() => setViewMode('overworld')}
                />
              </div>

              {/* Right Column: Telemetry & Decision Trail (1 Column) */}
              <div className="lg:col-span-1 pt-6">
                <TelemetryPanel
                  island={activeIsland}
                  dharmaScore={dharmaScore}
                  karmaScore={karmaScore}
                  divergenceScore={divergenceScore}
                  pathHistory={pathHistory}
                />
              </div>

            </div>
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

        {/* VIEW 4: LORE & AI PROMPT CODEX */}
        {viewMode === 'codex' && (
          <div className="py-6">
            <CodexView />
          </div>
        )}

      </main>

      {/* Resolution Ending Modal */}
      <EndingModal
        ending={activeEnding}
        onRestartIsland={handleResetIsland}
        onNextIsland={handleNextIsland}
        onOpenTimelineView={() => {
          setActiveEnding(null);
          setViewMode('timeline');
        }}
        hasNextIsland={hasNextIsland}
      />

      {/* Footer */}
      <footer className="w-full py-4 px-6 border-t border-slate-900 bg-slate-950/95 text-center text-xs text-slate-500 font-mono z-10">
        Dharmakshetra: Fractured Fates • Graphic Novel Interactive Decision Game • Powered by React & Web Audio API
      </footer>
    </div>
  );
}

export default App;
