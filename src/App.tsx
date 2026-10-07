import { useState } from 'react';
import { ASSETS } from './assets/gameAssets';
import { STORY_GRAPH, getIslandStartNode } from './data/storyEngine';
import { LoreDrawer } from './components/LoreDrawer';
import { webtoonIslands } from './data/webtoonData';

export function App() {
  const [activeIslandId, setActiveIslandId] = useState<string | null>(null);
  const [currentNodeId, setCurrentNodeId] = useState<string | null>(null);
  const [loreIsland, setLoreIsland] = useState<any>(null);

  // Enter an island and set its starting state
  const handleEnterIsland = (islandId: string) => {
    setActiveIslandId(islandId);
    const startNode = getIslandStartNode(islandId);
    setCurrentNodeId(startNode);
  };

  // Exit back to map
  const handleExitToMap = () => {
    setActiveIslandId(null);
    setCurrentNodeId(null);
  };

  // Safe accessor for active story graph
  const islandStory = (activeIslandId && STORY_GRAPH[activeIslandId]) || STORY_GRAPH["island-1"];
  const currentNode = (currentNodeId && islandStory.nodes[currentNodeId]) || islandStory.nodes[islandStory.rootStep];

  // Advance branch state
  const handleMakeChoice = (nextNode: string) => {
    setCurrentNodeId(nextNode);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF4E6] text-[#2C1810] font-serif">
      <LoreDrawer isOpen={!!loreIsland} island={loreIsland} onClose={() => setLoreIsland(null)} />

      {/* Header Bar */}
      <header className="sticky top-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-b-2 border-[#D4AF37] px-6 py-3 shadow-sm flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">🪷</span>
          <div>
            <h1 className="text-lg font-bold tracking-widest text-[#8E2800] uppercase">
              Dharmakshetra
            </h1>
            <p className="text-[11px] tracking-wider text-[#A06D12]">Chronicles of the 10 Sacred Isles</p>
          </div>
        </div>

        {activeIslandId && (
          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                const lore = webtoonIslands.find(i => i.id === activeIslandId);
                setLoreIsland(lore || null);
              }}
              className="px-3 py-1.5 bg-[#FAF2E1] hover:bg-[#FAF0D7] text-[#8E2800] text-xs font-bold rounded border border-[#D4AF37] transition cursor-pointer"
            >
              📜 Original Itihasa
            </button>
            <button
              onClick={handleExitToMap}
              className="px-4 py-1.5 bg-[#8E2800] hover:bg-[#6D1F00] text-white text-xs font-bold rounded border border-[#D4AF37] shadow transition cursor-pointer"
            >
              ← Return to Realm Map
            </button>
          </div>
        )}
      </header>

      {/* VIEW 1: MAP OF 10 ISLANDS */}
      {!activeIslandId && (
        <main className="min-h-[92vh] py-12 px-6 flex flex-col items-center">
          <div className="text-center max-w-2xl mb-10 bg-[#FFFDF9] border border-[#D4AF37] p-6 rounded-xl shadow-md">
            <span className="px-3 py-1 bg-[#8E2800]/10 text-[#8E2800] text-xs font-bold uppercase tracking-widest rounded-full">
              Interactive Story Nexus
            </span>
            <h2 className="text-3xl font-extrabold text-[#2C1810] mt-2">
              Tales of the 10 Sacred Isles
            </h2>
            <p className="text-xs text-[#5D4037] mt-2">
              Choose an island to enter its living comic scroll. Every choice dynamically changes the characters, dialogue, and ending.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl w-full">
            {webtoonIslands.map((island, index) => (
              <div
                key={island.id}
                className="group bg-[#FFFDF9] border-2 border-[#D4AF37] rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                <div 
                  className="h-36 w-full relative overflow-hidden bg-stone-100 cursor-pointer"
                  onClick={() => handleEnterIsland(island.id)}
                >
                  <img
                    src={(island.sceneKey && (ASSETS.scenes as Record<string, string>)[island.sceneKey]) || ASSETS.mapBg}
                    alt={island.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 bg-[#8E2800] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                    #{index + 1}
                  </span>
                  <span className="absolute bottom-2 left-2 text-white text-[10px] font-bold bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    {island.parva}
                  </span>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h3
                    onClick={() => handleEnterIsland(island.id)}
                    className="text-sm font-bold text-[#2C1810] group-hover:text-[#8E2800] cursor-pointer transition line-clamp-2"
                  >
                    {island.title}
                  </h3>

                  <div className="mt-4 pt-3 border-t border-[#D4AF37]/30 flex items-center justify-between text-xs">
                    <button
                      onClick={() => setLoreIsland(island)}
                      className="text-[#8E2800] font-bold hover:underline cursor-pointer"
                    >
                      Original Lore ➔
                    </button>
                    <button
                      onClick={() => handleEnterIsland(island.id)}
                      className="bg-[#A06D12] text-white px-3 py-1 rounded text-[11px] font-bold hover:bg-[#8E2800] transition cursor-pointer"
                    >
                      Enter Scroll
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* VIEW 2: DYNAMIC COMIC SCROLLER & DECISION ENGINE */}
      {activeIslandId && currentNode && (
        <main className="flex flex-col items-center py-10 px-4 min-h-[92vh]">
          <div className="max-w-[720px] w-full bg-[#FFFDF9] border-2 border-[#D4AF37] shadow-2xl rounded-lg overflow-hidden">
            {/* Scroll Header */}
            <div className="bg-[#FAF2E1] border-b-2 border-[#D4AF37] p-5 text-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#8E2800] bg-[#8E2800]/10 px-3 py-1 rounded">
                {islandStory.parva} • Nexus #{activeIslandId.split('-')[1]}
              </span>
              <h2 className="text-2xl font-bold text-[#2C1810] mt-2">
                {islandStory.title}
              </h2>
            </div>

            {/* DYNAMIC COMIC PANELS (RE-RENDERS WITH EVERY CHOICE) */}
            <div className="p-4 md:p-6 space-y-6 bg-[#FAF7F0]">
              {currentNode.panels.map((panel, idx) => (
                <div key={idx} className="relative border-2 border-[#3E2723] rounded-lg overflow-hidden shadow-lg bg-stone-900">
                  {/* Scenery Background */}
                  <img
                    src={(ASSETS.scenes as Record<string, string>)[panel.bgKey] || ASSETS.mapBg}
                    alt="Comic background"
                    className="w-full h-72 md:h-80 object-cover"
                  />

                  {/* Character Portrait Cameo (Inset badge style, no overlapping square cards) */}
                  {panel.charKey && (ASSETS.characters as Record<string, string>)[panel.charKey] && (
                    <div className="absolute bottom-3 left-3 flex items-center space-x-2 bg-[#FFFDF9]/95 border-2 border-[#D4AF37] rounded-full p-1.5 shadow-xl backdrop-blur-xs z-10">
                      <img
                        src={(ASSETS.characters as Record<string, string>)[panel.charKey]}
                        alt={panel.speaker || "Speaker"}
                        className="w-16 h-16 rounded-full object-cover object-top border border-[#AA7C11]"
                      />
                      <div className="pr-3 hidden sm:block">
                        <span className="text-[9px] font-bold uppercase text-[#8E2800] block">Speaker</span>
                        <span className="text-xs font-bold text-[#2C1810]">{panel.speaker}</span>
                      </div>
                    </div>
                  )}

                  {/* Action SFX Stamp */}
                  {panel.sfx && (
                    <div className="absolute top-4 right-4 bg-red-600 text-yellow-200 font-extrabold text-lg px-3 py-1 border-2 border-black rotate-12 shadow animate-pulse">
                      {panel.sfx}
                    </div>
                  )}

                  {/* Speech Bubble / Dialogue Strip */}
                  <div className="p-4 bg-[#FAF4E6] border-t-2 border-[#D4AF37]">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8E2800] block mb-1">
                      {panel.speaker}
                    </span>
                    <p className="text-sm md:text-base text-[#2C1810] italic leading-relaxed">
                      "{panel.dialogue}"
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CHOICE DECISION GATE (IF NOT ENDING) */}
            {!currentNode.isEnding && (
              <div className="m-6 p-6 bg-[#FAF2E1] border-2 border-[#D4AF37] rounded-xl text-center shadow-inner">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#8E2800]">
                  ⚡ The Axis of Dharma Splits — Choose Next Action
                </span>
                <h3 className="text-base md:text-lg font-bold text-[#2C1810] mt-1 mb-5">
                  {currentNode.prompt}
                </h3>

                <div className="space-y-3">
                  {currentNode.choices?.map((choice, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleMakeChoice(choice.nextNode)}
                      className="w-full text-left p-4 rounded-lg bg-white hover:bg-[#FFFDF7] text-[#2C1810] border-2 border-[#D4AF37] hover:border-[#8E2800] hover:shadow-lg transition flex items-center justify-between group cursor-pointer"
                    >
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#A06D12] block mb-0.5">
                          {choice.badge} Path
                        </span>
                        <span className="font-bold text-sm md:text-base text-[#2C1810] group-hover:text-[#8E2800] transition">
                          {choice.text}
                        </span>
                      </div>
                      <span className="text-lg font-bold text-[#A06D12] group-hover:translate-x-1 transition">
                        ➔
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* TIMELINE EPILOGUE (IF ENDING NODE) */}
            {currentNode.isEnding && (
              <div className="m-6 p-6 bg-[#FAF2E1] border-2 border-[#D4AF37] rounded-xl text-center shadow-md">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-[#8E2800] text-white px-3 py-1 rounded-full inline-block mb-3">
                  Divergence: {currentNode.divergence}% From Canonical Itihasa
                </span>
                <h4 className="text-xl font-bold text-[#2C1810]">
                  {currentNode.verdictTitle}
                </h4>
                <p className="text-sm text-[#5D4037] mt-2 max-w-lg mx-auto leading-relaxed">
                  {currentNode.verdictDesc}
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => setCurrentNodeId(islandStory.rootStep)}
                    className="px-5 py-2.5 border-2 border-[#8E2800] text-[#8E2800] hover:bg-[#8E2800] hover:text-white font-bold text-xs rounded transition cursor-pointer"
                  >
                    Replay Island Choices
                  </button>
                  <button
                    onClick={handleExitToMap}
                    className="px-6 py-2.5 bg-[#8E2800] hover:bg-[#6D1F00] text-white font-bold text-xs rounded border border-[#D4AF37] shadow transition cursor-pointer"
                  >
                    Return to World Map
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
