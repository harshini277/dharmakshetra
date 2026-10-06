import { useState } from 'react';
import { webtoonIslands } from './data/webtoonData';
import type { WebtoonIsland, WebtoonChoice } from './data/webtoonData';
import { VedicHeader } from './components/VedicHeader';
import { WebtoonOverworldMap } from './components/WebtoonOverworldMap';
import { WebtoonComicStage } from './components/WebtoonComicStage';
import { audioEngine } from './utils/audioEngine';

export function App() {
  const [viewMode, setViewMode] = useState<'map' | 'island'>('map');
  const [activeIsland, setActiveIsland] = useState<WebtoonIsland>(webtoonIslands[0]);
  const [completedIslandIds, setCompletedIslandIds] = useState<string[]>([]);
  const [divergenceScore, setDivergenceScore] = useState<number>(0);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(false);

  // Select Island from Map (Screen 1 -> Screen 2)
  const handleSelectIsland = (island: WebtoonIsland) => {
    setActiveIsland(island);
    setViewMode('island');
  };

  // Choice Made inside Webtoon Stage
  const handleChoiceMade = (islandId: string, choice: WebtoonChoice) => {
    if (!completedIslandIds.includes(islandId)) {
      setCompletedIslandIds(prev => [...prev, islandId]);
    }
    setDivergenceScore(choice.divergence);
  };

  // Return to World Map
  const handleReturnToMap = () => {
    setViewMode('map');
  };

  // Toggle Web Audio API Synthesizer
  const handleToggleAudio = () => {
    audioEngine.init();
    const muted = audioEngine.toggleMute();
    setAudioEnabled(!muted);
  };

  return (
    <div className="min-h-screen bg-[#17110e] text-[#f7eed3] flex flex-col font-parchment relative overflow-x-hidden selection:bg-[#aa7c11] selection:text-[#f7eed3]">
      
      {/* Top Vedic HUD Header */}
      <VedicHeader
        currentView={viewMode}
        activeIslandTitle={activeIsland.title}
        divergenceScore={divergenceScore}
        audioEnabled={audioEnabled}
        onToggleAudio={handleToggleAudio}
        onReturnToMap={handleReturnToMap}
      />

      {/* Main Experience Container */}
      <main className="flex-1 w-full z-10">
        {viewMode === 'map' ? (
          <WebtoonOverworldMap
            islands={webtoonIslands}
            onSelectIsland={handleSelectIsland}
            completedIslandIds={completedIslandIds}
          />
        ) : (
          <WebtoonComicStage
            island={activeIsland}
            onReturnToMap={handleReturnToMap}
            onChoiceMade={handleChoiceMade}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="w-full py-4 px-6 border-t border-[#aa7c11]/40 bg-[#140e0a] text-center text-xs text-[#d8c4a0] font-ui z-10">
        Dharmakshetra: Tales of the 10 Isles • Ancient Vedic Webtoon Comic Game Engine
      </footer>

    </div>
  );
}

export default App;
