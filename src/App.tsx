import { useState } from 'react';
import { ISLANDS_DATA } from './data/islandsData';
import type { Island, Choice, PathStep, ActiveView, IslandEnding } from './types';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Header } from './components/Header';
import { TypewriterText } from './components/TypewriterText';
import { SceneVignette, CharacterAvatar } from './components/ProceduralArtwork';
import { DecisionCard } from './components/DecisionCard';
import { TelemetryPanel } from './components/TelemetryPanel';
import { EndingModal } from './components/EndingModal';
import { TimelineVisualizer } from './components/TimelineVisualizer';
import { CodexView } from './components/CodexView';
import { audioEngine } from './utils/audioEngine';
import { Sparkles, HelpCircle } from 'lucide-react';

export function App() {
  // 1. App Core State
  const [activeIslandId, setActiveIslandId] = useState<string>('island-1');
  const activeIsland: Island = ISLANDS_DATA.find(i => i.id === activeIslandId) || ISLANDS_DATA[0];

  const [currentSceneId, setCurrentSceneId] = useState<string>(activeIsland.initialSceneId);
  const currentScene = activeIsland.scenes[currentSceneId] || activeIsland.scenes[activeIsland.initialSceneId];

  const [pathHistory, setPathHistory] = useState<PathStep[]>([]);
  const [dharmaScore, setDharmaScore] = useState<number>(50);
  const [karmaScore, setKarmaScore] = useState<number>(50);
  const [divergenceScore, setDivergenceScore] = useState<number>(0);

  const [audioEnabled, setAudioEnabled] = useState<boolean>(false);
  const [activeView, setActiveView] = useState<ActiveView>('sandbox');
  const [activeEnding, setActiveEnding] = useState<IslandEnding | null>(null);
  const [vfxEffect, setVfxEffect] = useState<'none' | 'shake' | 'divine_flash' | 'red_vignette'>('none');

  // 2. Island Change Handler (Complete State Decoupling)
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

    // Update audio atmosphere preset
    audioEngine.setAtmospherePreset(targetIsland.atmosphere);
  };

  // 3. Reset Current Island Handler
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

  // 5. Choice Selection Handler (Core Sandbox Engine)
  const handleSelectChoice = (choice: Choice) => {
    // Play sound FX
    audioEngine.playSoundFx(choice.soundFx);

    // Trigger Screen VFX animation
    setVfxEffect(choice.vfxEffect);
    setTimeout(() => setVfxEffect('none'), 700);

    // Calculate updated metrics
    const newDharma = Math.min(100, Math.max(0, dharmaScore + choice.deltaDharma));
    const newKarma = Math.min(100, Math.max(0, karmaScore + choice.deltaKarma));
    const newDivergence = Math.min(100, Math.max(0, divergenceScore + choice.divergenceImpact));

    setDharmaScore(newDharma);
    setKarmaScore(newKarma);
    setDivergenceScore(newDivergence);

    // Log decision step
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

  // Advance to next Island in order
  const handleNextIsland = () => {
    const currentIndex = ISLANDS_DATA.findIndex(i => i.id === activeIslandId);
    if (currentIndex >= 0 && currentIndex < ISLANDS_DATA.length - 1) {
      handleSelectIsland(ISLANDS_DATA[currentIndex + 1].id);
    }
  };

  const hasNextIsland = ISLANDS_DATA.findIndex(i => i.id === activeIslandId) < ISLANDS_DATA.length - 1;

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans relative overflow-x-hidden ${
      vfxEffect === 'shake' ? 'animate-screen-shake' : ''
    }`}>
      
      {/* Dynamic Continuous HTML5 Canvas Particles */}
      <ParticleCanvas atmosphere={activeIsland.atmosphere} />

      {/* Screen VFX Flash Overlay */}
      {vfxEffect === 'divine_flash' && (
        <div className="fixed inset-0 z-50 bg-amber-300/30 backdrop-blur-sm pointer-events-none animate-pulse duration-500" />
      )}
      {vfxEffect === 'red_vignette' && (
        <div className="fixed inset-0 z-50 ring-[30px] ring-rose-600/40 pointer-events-none transition-all duration-500" />
      )}

      {/* Sticky Header Navigation */}
      <Header
        islands={ISLANDS_DATA}
        activeIsland={activeIsland}
        activeView={activeView}
        onSelectIsland={handleSelectIsland}
        onSelectView={setActiveView}
        divergenceScore={divergenceScore}
        audioEnabled={audioEnabled}
        onToggleAudio={handleToggleAudio}
        onResetIsland={handleResetIsland}
      />

      {/* Main View Container */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-6 z-10 space-y-6">
        
        {/* Sandbox Playground View */}
        {activeView === 'sandbox' && (
          <div className="space-y-6">
            
            {/* Island Prelude Header Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950/40 border border-amber-500/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Sparkles className="w-32 h-32 text-amber-400" />
              </div>

              <div className="max-w-3xl space-y-2">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2.5 py-0.5 rounded-full font-bold">
                    ISLAND {activeIsland.number}
                  </span>
                  <span className="text-slate-400 font-medium">• {activeIsland.era}</span>
                  <span className="text-amber-400/80">• {activeIsland.location}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-bold gold-text-gradient">
                  {activeIsland.title}
                </h2>
                
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif italic">
                  "{activeIsland.prelude}"
                </p>
              </div>
            </div>

            {/* Main Interactive Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              
              {/* Left & Center: Scene Narrative & Decision Crossroads (2 Columns) */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Scene Card */}
                <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/90 border border-amber-500/30 shadow-2xl space-y-5 backdrop-blur-md">
                  
                  {/* Scene Vignette Header Graphic */}
                  <SceneVignette vignetteType={currentScene.vignetteType} />

                  {/* Speaker Badge & Scene Title */}
                  <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                    <CharacterAvatar svgKey={currentScene.speakerAvatarSvgKey} className="w-12 h-12 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-amber-200">
                        {currentScene.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono">
                        Speaker: <strong className="text-amber-300 font-semibold">{currentScene.speaker}</strong> ({currentScene.speakerRole})
                      </p>
                    </div>
                  </div>

                  {/* Typewriter Narrative Display */}
                  <TypewriterText text={currentScene.narrative} speed={22} />
                </div>

                {/* Decision Crossroads Section */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between px-1">
                    <h3 className="text-xs sm:text-sm font-semibold text-amber-400 uppercase tracking-widest flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-amber-400" />
                      Dharma Crossroads • Choose Your Destiny
                    </h3>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {currentScene.choices.length} Available Path(s)
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {currentScene.choices.map((choice, idx) => (
                      <DecisionCard
                        key={choice.id}
                        choice={choice}
                        onSelect={handleSelectChoice}
                        index={idx}
                      />
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Telemetry & Path Log (1 Column) */}
              <div className="lg:col-span-1">
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

        {/* Timeline Visualizer View */}
        {activeView === 'timeline' && (
          <TimelineVisualizer
            island={activeIsland}
            currentSceneId={currentSceneId}
            pathHistory={pathHistory}
            onResetIsland={handleResetIsland}
          />
        )}

        {/* Lore Codex View */}
        {activeView === 'codex' && (
          <CodexView />
        )}

      </main>

      {/* Ending Modal Modal Popup */}
      <EndingModal
        ending={activeEnding}
        onRestartIsland={handleResetIsland}
        onNextIsland={handleNextIsland}
        onOpenTimelineView={() => {
          setActiveEnding(null);
          setActiveView('timeline');
        }}
        hasNextIsland={hasNextIsland}
      />

      {/* Footer */}
      <footer className="w-full py-4 px-6 border-t border-slate-900 bg-slate-950/90 text-center text-xs text-slate-500 font-mono z-10">
        Dharmakshetra: Fractured Fates • Interactive Mythological Decision Sandbox • Powered by React & Web Audio API
      </footer>
    </div>
  );
}

export default App;
