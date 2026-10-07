import React, { useState, useEffect, useRef } from 'react';
import { ASSETS } from './assets/gameAssets';
import { STORY_GRAPH } from './data/storyEngine';
import { LoreDrawer } from './components/LoreDrawer';
import { webtoonIslands } from './data/webtoonData';

export default function App() {
  const [activeIslandId, setActiveIslandId] = useState(null);
  const [timelineFeed, setTimelineFeed] = useState([]);
  const [loreIsland, setLoreIsland] = useState(null);
  const feedEndRef = useRef(null);

  const handleLaunchIsland = (id) => {
    setActiveIslandId(id);
    const island = STORY_GRAPH[id] || STORY_GRAPH["island-1"];
    const root = island.rootStep;
    setTimelineFeed([
      {
        nodeId: root,
        stepData: island.nodes[root],
        selectedChoice: null
      }
    ]);
  };

  const handlePickChoice = (stepIndex, choice) => {
    const island = STORY_GRAPH[activeIslandId] || STORY_GRAPH["island-1"];
    const nextNodeData = island.nodes[choice.nextNode];

    const updated = [...timelineFeed];
    updated[stepIndex].selectedChoice = choice;

    if (nextNodeData) {
      updated.push({
        nodeId: choice.nextNode,
        stepData: nextNodeData,
        selectedChoice: null
      });
    }

    setTimelineFeed(updated);
  };

  useEffect(() => {
    if (timelineFeed.length > 1) {
      feedEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [timelineFeed]);

  const activeIsland = STORY_GRAPH[activeIslandId];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C1810] font-serif selection:bg-[#D4AF37] selection:text-white">
      <LoreDrawer isOpen={!!loreIsland} island={loreIsland} onClose={() => setLoreIsland(null)} />

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
          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                const lore = webtoonIslands.find(i => i.id === activeIslandId);
                setLoreIsland(lore);
              }}
              className="px-3 py-1.5 bg-[#FAF2E1] hover:bg-[#FAF0D7] text-[#8E2800] text-xs font-bold rounded border border-[#D4AF37] transition cursor-pointer"
            >
              📜 Original Itihasa
            </button>
            <button
              onClick={() => setActiveIslandId(null)}
              className="px-3.5 py-1.5 bg-[#8E2800] hover:bg-[#6D1F00] text-white text-xs font-bold rounded border border-[#D4AF37] shadow transition cursor-pointer"
            >
              ← Return to Realm Map
            </button>
          </div>
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
            {webtoonIslands.map((island, index) => (
              <div
                key={island.id}
                className="group bg-[#FFFDF9] border-2 border-[#D4AF37] rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div 
                  className="h-36 w-full relative overflow-hidden bg-stone-900 cursor-pointer"
                  onClick={() => handleLaunchIsland(island.id)}
                >
                  <img
                    src={(ASSETS.scenes as Record<string, string>)[island.sceneKey] || ASSETS.scenes[island.sceneKey] || ASSETS.mapBg}
                    alt={island.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-2 left-2 bg-[#8E2800] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                    #{index + 1}
                  </span>
                  <span className="absolute bottom-2 left-2 text-white text-[10px] font-bold bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    {island.parva}
                  </span>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between bg-[#FAF4E6]">
                  <div>
                    <h3 
                      onClick={() => handleLaunchIsland(island.id)}
                      className="font-bold text-[#2C1810] text-sm group-hover:text-[#8E2800] transition cursor-pointer line-clamp-2"
                    >
                      {island.title}
                    </h3>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#D4AF37]/40 flex items-center justify-between text-xs font-bold">
                    <button
                      onClick={() => setLoreIsland(island)}
                      className="text-[#8E2800] hover:underline cursor-pointer"
                    >
                      Lore ➔
                    </button>
                    <button
                      onClick={() => handleLaunchIsland(island.id)}
                      className="px-3 py-1.5 bg-[#8E2800] hover:bg-[#6D1F00] text-white rounded text-[11px] shadow transition cursor-pointer"
                    >
                      Enter Island
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
            <div key={stepIdx} className="space-y-8 mb-10 animate-in fade-in duration-500">
              {step.stepData.panels.map((panel, pIdx) => (
                <div
                  key={pIdx}
                  className="bg-[#FFFDF9] border-2 border-[#D4AF37] rounded-xl overflow-hidden shadow-md"
                >
                  <div className="relative w-full aspect-video md:h-80 bg-stone-900 overflow-hidden">
                    <img
                      src={(ASSETS.scenes as Record<string, string>)[panel.bgKey] || panel.bg || ASSETS.mapBg}
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
                    {step.stepData.choices.map((choice, cIdx) => {
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

          <div ref={feedEndRef} />
        </main>
      )}
    </div>
  );
}
