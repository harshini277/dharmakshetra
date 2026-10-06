import { useState } from 'react';
import { STORY_DATA } from './data/storyData';
import type { StoryIsland, StoryChoice } from './data/storyData';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Header } from './components/Header';
import { AstralWorldMap } from './components/AstralWorldMap';
import { ComicBookStage } from './components/ComicBookStage';
import { ActionComicSplash } from './components/ActionComicSplash';
import { ComicEpilogue } from './components/ComicEpilogue';
import { TimelineVisualizer } from './components/TimelineVisualizer';
import { CodexView } from './components/CodexView';
import { audioEngine } from './utils/audioEngine';

export type AppViewMode = 'map' | 'stage' | 'timeline' | 'codex';

export function App() {
  // 1. App State
  const [activeIsland, setActiveIsland] = useState<StoryIsland>(STORY_DATA[0]);
  const [activeChoice, setActiveChoice] = useState<StoryChoice | null>(null);
  const [viewMode, setViewMode] = useState<AppViewMode>('map');
  const [divergenceScore, setDivergenceScore] = useState<number>(0);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(false);

  // Splash sticker animation state
  const [splashState, setSplashState] = useState<{ active: boolean; text: string; tag?: string }>({
    active: false,
    text: 'SHING!'
  });

  // 2. Launch Island Scenario (Screen 1 -> Screen 2)
  const handleSelectIsland = (island: StoryIsland) => {
    setActiveIsland(island);
    setActiveChoice(null);
    setDivergenceScore(0);
    setViewMode('stage');
  };

  // 3. Choice Selection (Screen 2 -> Screen 3)
  const handleSelectChoice = (choice: StoryChoice) => {
    let stickerText = 'SHING!';
    let sfxType: 'slash' | 'thwack' | 'gong' | 'thunder' | 'divine' = 'slash';

    if (choice.type === 'RADICAL') {
      stickerText = 'KRZZZT!';
      sfxType = 'thunder';
    } else if (choice.type === 'SUBVERSIVE') {
      stickerText = 'THWACK!';
      sfxType = 'thwack';
    } else {
      stickerText = 'DIVINE SHINE!';
      sfxType = 'divine';
    }

    audioEngine.playSoundFx(sfxType);
    setSplashState({ active: true, text: stickerText, tag: choice.type });

    setTimeout(() => {
      setSplashState({ active: false, text: 'SHING!' });
    }, 650);

    setActiveChoice(choice);
    setDivergenceScore(choice.divergence);
  };

  // Rewind choice to replay current scenario
  const handleRewindChoice = () => {
    setActiveChoice(null);
    setDivergenceScore(0);
  };

  // Return to Astral Map
  const handleReturnToMap = () => {
    setActiveChoice(null);
    setViewMode('map');
  };

  // Advance to next Island
  const handleNextIsland = () => {
    const currentIndex = STORY_DATA.findIndex(i => i.id === activeIsland.id);
    if (currentIndex >= 0 && currentIndex < STORY_DATA.length - 1) {
      handleSelectIsland(STORY_DATA[currentIndex + 1]);
    }
  };

  const hasNextIsland = STORY_DATA.findIndex(i => i.id === activeIsland.id) < STORY_DATA.length - 1;

  // Toggle Synthesizer Audio
  const handleToggleAudio = () => {
    audioEngine.init();
    const muted = audioEngine.toggleMute();
    setAudioEnabled(!muted);
  };

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col font-ui relative overflow-x-hidden">
      
      {/* Background HTML5 Canvas Particles */}
      <ParticleCanvas atmosphere="embers" />

      {/* Comic Action Splash Sticker Overlay */}
      <ActionComicSplash
        active={splashState.active}
        soundText={splashState.text}
        tag={splashState.tag}
      />

      {/* Header Navigation */}
      <Header
        islands={STORY_DATA as any}
        activeIsland={activeIsland as any}
        activeView={viewMode === 'map' ? 'sandbox' : (viewMode as any)}
        onSelectIsland={(id) => {
          const isl = STORY_DATA.find(i => i.id === id);
          if (isl) handleSelectIsland(isl);
        }}
        onSelectView={(v) => {
          if (v === 'sandbox') setViewMode('stage');
          else setViewMode(v as AppViewMode);
        }}
        divergenceScore={divergenceScore}
        audioEnabled={audioEnabled}
        onToggleAudio={handleToggleAudio}
        onResetIsland={handleRewindChoice}
      />

      {/* Main UX Stage Container */}
      <main className="flex-1 w-full z-10">
        
        {/* SCREEN 1: ASTRAL ISLAND MAP (HOME) */}
        {viewMode === 'map' && (
          <AstralWorldMap
            islands={STORY_DATA}
            onSelectIsland={handleSelectIsland}
          />
        )}

        {/* SCREEN 2: GRAPHIC NOVEL SCENARIO STAGE */}
        {viewMode === 'stage' && (
          <div className="py-6 px-2 sm:px-4">
            <ComicBookStage
              island={activeIsland}
              divergenceScore={divergenceScore}
              onSelectChoice={handleSelectChoice}
              onReturnToCosmos={handleReturnToMap}
            />
          </div>
        )}

        {/* TIMELINE VISUALIZER VIEW */}
        {viewMode === 'timeline' && (
          <div className="py-6">
            <TimelineVisualizer
              island={activeIsland as any}
              currentSceneId={activeIsland.id}
              pathHistory={[]}
              onResetIsland={handleRewindChoice}
            />
          </div>
        )}

        {/* CODEX VIEW */}
        {viewMode === 'codex' && (
          <div className="py-6">
            <CodexView />
          </div>
        )}

      </main>

      {/* SCREEN 3: RESOLUTION & DIVERGENCE EPILOGUE */}
      <ComicEpilogue
        island={activeIsland}
        choice={activeChoice}
        onRewindChoice={handleRewindChoice}
        onReturnToAstralMap={handleReturnToMap}
        onNextIsland={hasNextIsland ? handleNextIsland : undefined}
      />

      {/* Footer */}
      <footer className="w-full py-4 px-6 border-t-2 border-black bg-slate-950 text-center text-xs text-slate-500 font-mono z-10">
        Mahabharata: Fractured Fates • Visual Novel Decision Engine • All Static Assets Mapped
      </footer>
    </div>
  );
}

export default App;
