import { useState, useRef } from 'react';
import { ASSETS } from './assets/gameAssets';
import { STORY_GRAPH } from './data/storyEngine';
import { webtoonIslands } from './data/webtoonData';

export function App() {
  const [activeIslandId, setActiveIslandId] = useState<string | null>(null);
  const [timelineFeed, setTimelineFeed] = useState<any[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleLaunchIsland = (id: string) => {
    setActiveIslandId(id);
    const island = (STORY_GRAPH as Record<string, any>)[id] || (STORY_GRAPH as Record<string, any>)["island-1"];
    const root = island.rootStep;
    setTimelineFeed([
      {
        nodeId: root,
        stepData: island.nodes[root],
        selectedChoice: null
      }
    ]);
  };

  const handlePickChoice = (stepIndex: number, choice: any) => {
    if (!activeIslandId) return;
    const island = (STORY_GRAPH as Record<string, any>)[activeIslandId] || (STORY_GRAPH as Record<string, any>)["island-1"];
    const nextNodeData = island.nodes[choice.nextNode];

    const updated = [...timelineFeed];
    updated[stepIndex].selectedChoice = choice;

    if (nextNodeData) {
      const nextIndex = updated.length;
      updated.push({
        nodeId: choice.nextNode,
        stepData: nextNodeData,
        selectedChoice: null
      });

      setTimelineFeed(updated);

      setTimeout(() => {
        if (stepRefs.current[nextIndex]) {
          stepRefs.current[nextIndex]?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }, 100);
    } else {
      setTimelineFeed(updated);
    }
  };

  const activeIsland = activeIslandId ? (STORY_GRAPH as Record<string, any>)[activeIslandId] : null;

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C1810] font-serif selection:bg-[#D4AF37] selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FFFDF9]/95 backdrop-blur-md border-b-2 border-[#D4AF37] px-6 py-3.5 shadow-sm flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">🪷</span>
          <div>
            <h1 className="text-base md:text-lg font-bold tracking-widest text-[#8E2800] uppercase font-serif">
              Dharmakshetra
            </h1>
            <p className="text-[10px] md:text-[11px] tracking-wider text-[#A06D12]">
              Interactive Webtoon Chronicles of Aryavarta
            </p>
          </div>
        </div>

        {activeIslandId && (
          <button
            onClick={() => setActiveIslandId(null)}
            className="px-3.5 py-1.5 bg-[#8E2800] hover:bg-[#6D1F00] text-white text-xs font-bold rounded border border-[#D4AF37] shadow transition cursor-pointer"
          >
            ← Return to Realm Map
          </button>
        )}
      </header>

      {/* OVERWORLD MAP OF 10 SACRED ISLES */}
      {!activeIslandId && (
        <main className="max-w-7xl mx-auto py-12 px-6">
          <div className="text-center max-w-xl mx-auto mb-10 bg-[#FAF4E6] p-6 rounded-xl border border-[#D4AF37]">
            <span className="px-3 py-1 bg-[#8E2800]/10 border border-[#8E2800]/20 text-[#8E2800] text-xs font-bold uppercase tracking-widest rounded-full">
              Multi-Stage Decision Engine
            </span>
            <h2 className="text-3xl font-extrabold text-[#2C1810] mt-3">
              Tales of the 10 Sacred Isles
            </h2>
            <p className="text-xs text-[#5D4037] mt-2 leading-relaxed">
              Every island is a multi-act narrative journey. Intervene at karmic junctions to alter the course of the epic.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {webtoonIslands.map((island: any, index: number) => {
              const story = (STORY_GRAPH as Record<string, any>)[island.id];
              const displayTitle = story?.title || island.title;
              const displayParva = story?.parva || island.parva;
              const sceneKey = island.sceneKey;

              return (
                <div
                  key={island.id}
                  className="group bg-[#FFFDF9] border-2 border-[#D4AF37] rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div 
                    className="h-36 w-full relative overflow-hidden bg-stone-900 cursor-pointer"
                    onClick={() => handleLaunchIsland(island.id)}
                  >
                    <img
                      src={(ASSETS.scenes as Record<string, string>)[sceneKey] || (ASSETS as any).mapBg}
                      alt={displayTitle}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <span className="absolute top-2 left-2 bg-[#8E2800] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                      #{index + 1}
                    </span>
                    <span className="absolute bottom-2 left-2 text-white text-[10px] font-bold bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                      {displayParva}
                    </span>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between bg-[#FAF4E6]">
                    <div>
                      <h3 
                        onClick={() => handleLaunchIsland(island.id)}
                        className="font-bold text-[#2C1810] text-sm group-hover:text-[#8E2800] transition cursor-pointer line-clamp-2"
                      >
                        {displayTitle}
                      </h3>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#D4AF37]/40 flex items-center justify-end">
                      <button
                        onClick={() => handleLaunchIsland(island.id)}
                        className="w-full py-2 bg-[#8E2800] hover:bg-[#6D1F00] text-white rounded text-xs font-bold shadow transition text-center cursor-pointer"
                      >
                        Enter Island ➔
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      )}

      {/* WEBTOON PERSISTENT SCROLL VIEW */}
      {activeIslandId && activeIsland && (
        <main className="max-w-[760px] mx-auto py-10 px-4">
          <div className="bg-[#FAF2E1] border-2 border-[#D4AF37] rounded-xl p-6 text-center mb-10 shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#8E2800] bg-[#8E2800]/10 px-3 py-1 rounded">
              {activeIsland.parva} • Interactive Chronicle
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#2C1810] mt-2">
              {activeIsland.title}
            </h2>
            <p className="text-xs text-[#5D4037] mt-1.5">
              Scroll down to read. At each karmic junction, your choice dynamically branches the story below.
            </p>
          </div>

          {timelineFeed.map((step, stepIdx) => (
            <div
              key={stepIdx}
              ref={(el) => { stepRefs.current[stepIdx] = el; }}
              className="space-y-8 mb-10 animate-in fade-in duration-500 scroll-mt-24"
            >
              {step.stepData.panels.map((panel: any, pIdx: number) => (
                <div
                  key={pIdx}
                  className="bg-[#FFFDF9] border-2 border-[#D4AF37] rounded-xl overflow-hidden shadow-md"
                >
                  <div className="relative w-full aspect-video md:h-80 bg-stone-900 overflow-hidden">
                    <img
                      src={(ASSETS.scenes as Record<string, string>)[panel.bgKey] || panel.bg || (ASSETS as any).mapBg}
                      alt="Scene"
                      className="w-full h-full object-cover"
                    />
                    {panel.sfx && (
                      <div className="absolute top-4 right-4 bg-red-600 text-yellow-200 font-extrabold text-sm md:text-base px-3 py-1 border-2 border-black rotate-6 shadow-md tracking-wider">
                        {panel.sfx}
                      </div>
                    )}
                  </div>

                  <div className="p-4 md:p-6 bg-[#FAF4E6] flex items-start gap-4 border-t border-[#D4AF37]/50">
                    {panel.charKey && (ASSETS.characters as Record<string, string>)[panel.charKey] && (
                      <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full border-2 border-[#D4AF37] overflow-hidden bg-white shadow-md">
                        <img
                          src={(ASSETS.characters as Record<string, string>)[panel.charKey]}
                          alt={panel.speaker || "Speaker"}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      {panel.speaker && (
                        <div className="inline-block px-2.5 py-0.5 bg-[#8E2800]/10 border border-[#8E2800]/20 rounded text-[#8E2800] text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1.5">
                          {panel.speaker}
                        </div>
                      )}
                      <p className="text-sm md:text-base text-[#2C1810] italic leading-relaxed">
                        "{panel.dialogue}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {!step.stepData.isEnding && (
                <div className="my-8 p-6 bg-[#FAF2E1] border-2 border-[#D4AF37] rounded-xl shadow-md text-center">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#8E2800] bg-white px-3 py-1 rounded-full border border-[#D4AF37]">
                    ⚡ Karmic Crossroads • Stage {stepIdx + 1}
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-[#2C1810] mt-3 mb-5">
                    {step.stepData.prompt}
                  </h3>

                  <div className="space-y-3">
                    {step.stepData.choices.map((choice: any, cIdx: number) => {
                      const isChosen = step.selectedChoice?.text === choice.text;
                      const hasChosen = step.selectedChoice !== null;

                      return (
                        <button
                          key={cIdx}
                          disabled={hasChosen}
                          onClick={() => handlePickChoice(stepIdx, choice)}
                          className={`w-full text-left p-4 rounded-lg border-2 transition flex items-center justify-between ${
                            isChosen
                              ? 'bg-[#8E2800] text-white border-[#2C1810] shadow-md'
                              : hasChosen
                              ? 'bg-stone-100 text-stone-400 border-stone-200 opacity-60 cursor-not-allowed'
                              : 'bg-white hover:bg-[#FFFDF7] text-[#2C1810] border-[#D4AF37] hover:border-[#8E2800] hover:shadow-lg cursor-pointer'
                          }`}
                        >
                          <div>
                            <span className="text-[9px] font-bold uppercase tracking-wider block opacity-80 mb-0.5">
                              {choice.badge} Path
                            </span>
                            <span className="font-bold text-xs md:text-sm">{choice.text}</span>
                          </div>
                          <span className="text-sm font-bold">
                            {isChosen ? '✓ Selected' : hasChosen ? '' : 'Choose ➔'}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {step.stepData.isEnding && (
                <div className="my-10 p-6 md:p-8 bg-[#FAF2E1] border-2 border-[#D4AF37] rounded-xl text-center shadow-xl">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#8E2800] text-white px-3.5 py-1 rounded-full inline-block mb-3">
                    Divergence: {step.stepData.divergence}% From Itihasa
                  </span>
                  <h4 className="text-xl md:text-2xl font-bold text-[#2C1810]">
                    {step.stepData.verdictTitle}
                  </h4>
                  <p className="text-xs md:text-sm text-[#5D4037] mt-3 max-w-xl mx-auto leading-relaxed">
                    {step.stepData.verdictDesc}
                  </p>

                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <button
                      onClick={() => handleLaunchIsland(activeIslandId)}
                      className="px-5 py-2.5 border-2 border-[#8E2800] text-[#8E2800] hover:bg-[#8E2800] hover:text-white font-bold text-xs rounded transition cursor-pointer"
                    >
                      Re-Roll Decisions
                    </button>
                    <button
                      onClick={() => setActiveIslandId(null)}
                      className="px-6 py-2.5 bg-[#8E2800] hover:bg-[#6D1F00] text-white font-bold text-xs rounded border border-[#D4AF37] shadow transition cursor-pointer"
                    >
                      Return to Sacred Map
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </main>
      )}
    </div>
  );
}

export default App;
