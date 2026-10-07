import { useState, useEffect, useRef } from 'react';
import { ASSETS } from './assets/gameAssets';
import { STORY_GRAPH } from './data/storyEngine';

export function App() {
  const [activeIslandId, setActiveIslandId] = useState<string | null>(null);
  // Feed of all unlocked nodes for true infinite scroll
  const [storyFeed, setStoryFeed] = useState<any[]>([]);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  // Initialize Island with Act 1
  const handleStartIsland = (islandId: string) => {
    setActiveIslandId(islandId);
    const island = (STORY_GRAPH as Record<string, any>)[islandId] || (STORY_GRAPH as Record<string, any>)['island-2'];
    setStoryFeed([
      {
        nodeId: island.rootStep,
        data: island.nodes[island.rootStep],
        selectedChoice: null
      }
    ]);
  };

  // Advance story: Append new node to the feed
  const handleChoose = (stepIndex: number, choice: any) => {
    if (!activeIslandId) return;
    const island = (STORY_GRAPH as Record<string, any>)[activeIslandId] || (STORY_GRAPH as Record<string, any>)['island-2'];
    const nextNodeData = island.nodes[choice.nextNode];

    // Mark current node choice
    const updatedFeed = [...storyFeed];
    updatedFeed[stepIndex].selectedChoice = choice;

    // Append next story node
    if (nextNodeData) {
      updatedFeed.push({
        nodeId: choice.nextNode,
        data: nextNodeData,
        selectedChoice: null
      });
    }

    setStoryFeed(updatedFeed);
  };

  // Auto-scroll when new panels append
  useEffect(() => {
    if (storyFeed.length > 1) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [storyFeed]);

  const activeIsland = activeIslandId ? (STORY_GRAPH as Record<string, any>)[activeIslandId] : null;

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C1810] font-serif">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-[#FFFDF9]/95 backdrop-blur-md border-b-2 border-[#D4AF37] px-6 py-3.5 shadow-sm flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">🪷</span>
          <div>
            <h1 className="text-base md:text-lg font-bold tracking-widest text-[#8E2800] uppercase">
              Dharmakshetra
            </h1>
            <p className="text-[10px] md:text-[11px] tracking-wider text-[#A06D12]">Chronicles of the 10 Sacred Isles</p>
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

      {/* OVERWORLD MAP VIEW */}
      {!activeIslandId && (
        <main className="max-w-6xl mx-auto py-12 px-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="px-3 py-1 bg-[#8E2800]/10 border border-[#8E2800]/20 text-[#8E2800] text-xs font-bold uppercase tracking-widest rounded-full">
              Living Itihasa Webtoon
            </span>
            <h2 className="text-3xl font-extrabold text-[#2C1810] mt-3">
              Choose a Fractured Nexus
            </h2>
            <p className="text-xs text-[#5D4037] mt-1.5 leading-relaxed">
              Every decision appends new illustrated panels down the sacred scroll. Rewrite the epic step-by-step.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 'island-2', title: 'The Arena of Anga', parva: 'Adi Parva', bg: ASSETS.scenes.arena },
              { id: 'island-1', title: 'The Cursed Hunt', parva: 'Adi Parva', bg: ASSETS.scenes.forest },
              { id: 'island-3', title: 'The House of Lac', parva: 'Adi Parva', bg: ASSETS.scenes.lac },
              { id: 'island-4', title: "Draupadi's Swayamvara", parva: 'Adi Parva', bg: ASSETS.scenes.swayamvara },
              { id: 'island-5', title: 'The Khandava Partition', parva: 'Sabha Parva', bg: ASSETS.scenes.khandava },
              { id: 'island-6', title: 'The Hall of Loaded Dice', parva: 'Sabha Parva', bg: ASSETS.scenes.dice },
              { id: 'island-7', title: 'The Banishment Pact', parva: 'Vana Parva', bg: ASSETS.scenes.exile },
              { id: 'island-8', title: 'The Shadow in Matsya', parva: 'Virata Parva', bg: ASSETS.scenes.matsya },
              { id: 'island-9', title: 'The Chamber of the God', parva: 'Udyoga Parva', bg: ASSETS.scenes.dwarka },
              { id: 'island-10', title: 'The Fallen Guru', parva: 'Drona Parva', bg: ASSETS.scenes.kurukshetra },
            ].map(item => (
              <div
                key={item.id}
                onClick={() => handleStartIsland(item.id)}
                className="group bg-[#FFFDF9] border-2 border-[#D4AF37] rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="h-44 w-full relative overflow-hidden bg-stone-900">
                  <img
                    src={item.bg}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-2 left-3 text-white text-xs font-bold tracking-wide">
                    {item.parva}
                  </span>
                </div>
                <div className="p-4 flex items-center justify-between bg-[#FAF4E6]">
                  <h3 className="font-bold text-[#2C1810] text-sm group-hover:text-[#8E2800] transition">
                    {item.title}
                  </h3>
                  <span className="text-xs font-bold text-[#A06D12]">Unroll ➔</span>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* WEBTOON PERSISTENT SCROLL VIEW */}
      {activeIslandId && (
        <main className="max-w-[760px] mx-auto py-10 px-4">
          {/* Scroll Header */}
          <div className="bg-[#FAF2E1] border-2 border-[#D4AF37] rounded-xl p-6 text-center mb-10 shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#8E2800] bg-[#8E2800]/10 px-3 py-1 rounded">
              {activeIsland?.parva || 'Adi Parva'}
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#2C1810] mt-2">
              {activeIsland?.title || 'The Arena of Anga'}
            </h2>
            <p className="text-xs text-[#5D4037] mt-1 italic">
              Scroll down as the story unfolds. Choose how to intervene at each karmic crossroad.
            </p>
          </div>

          {/* CHRONOLOGICAL STORY FEED */}
          {storyFeed.map((step, stepIndex) => (
            <div key={stepIndex} className="animate-in fade-in duration-500">
              {/* Panels for this Act */}
              {step.data.panels.map((panel: any, pIdx: number) => (
                <div key={pIdx} className="bg-[#FFFDF9] border-2 border-[#D4AF37] rounded-xl overflow-hidden shadow-md mb-8">
                  {/* Scene Image */}
                  <div className="relative w-full aspect-video md:h-80 bg-stone-900 overflow-hidden">
                    <img
                      src={(ASSETS.scenes as Record<string, string>)[panel.bgKey] || panel.bg || ASSETS.mapBg}
                      alt="Scene"
                      className="w-full h-full object-cover"
                    />
                    {panel.sfx && (
                      <div className="absolute top-4 right-4 bg-red-600 text-yellow-200 font-extrabold text-sm md:text-lg px-3 py-1 border-2 border-black rotate-6 shadow-md tracking-wider">
                        {panel.sfx}
                      </div>
                    )}
                  </div>

                  {/* Clean Dialogue Row */}
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

              {/* DECISION GATE (Shows active choices, or locks to what was picked) */}
              {!step.data.isEnding && (
                <div className="my-8 p-6 bg-[#FAF2E1] border-2 border-[#D4AF37] rounded-xl shadow-md text-center">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#8E2800]">
                    ⚡ Karmic Nexus Point #{stepIndex + 1}
                  </span>
                  <h3 className="text-base md:text-lg font-bold text-[#2C1810] mt-1 mb-4">
                    {step.data.prompt}
                  </h3>

                  <div className="space-y-3">
                    {step.data.choices.map((choice: any, cIdx: number) => {
                      const isChosen = step.selectedChoice?.text === choice.text;
                      const hasChosen = step.selectedChoice !== null;

                      return (
                        <button
                          key={cIdx}
                          disabled={hasChosen}
                          onClick={() => handleChoose(stepIndex, choice)}
                          className={`w-full text-left p-4 rounded-lg border-2 transition flex items-center justify-between cursor-pointer ${
                            isChosen
                              ? 'bg-[#8E2800] text-white border-[#2C1810] shadow-md'
                              : hasChosen
                              ? 'bg-stone-100 text-stone-400 border-stone-300 opacity-60 cursor-not-allowed'
                              : 'bg-white hover:bg-[#FFFDF7] text-[#2C1810] border-[#D4AF37] hover:border-[#8E2800] hover:shadow'
                          }`}
                        >
                          <div>
                            <span className="text-[9px] font-bold uppercase tracking-wider block opacity-75">
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

              {/* FINAL EPILOGUE (Renders only at true branch conclusion) */}
              {step.data.isEnding && (
                <div className="my-10 p-6 bg-[#FAF2E1] border-2 border-[#D4AF37] rounded-xl text-center shadow-lg">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#8E2800] text-white px-3 py-1 rounded-full">
                    Divergence: {step.data.divergence}% From Itihasa
                  </span>
                  <h4 className="text-xl font-bold text-[#2C1810] mt-3">
                    {step.data.verdictTitle}
                  </h4>
                  <p className="text-xs md:text-sm text-[#5D4037] mt-2 max-w-lg mx-auto leading-relaxed">
                    {step.data.verdictDesc}
                  </p>

                  <div className="mt-6 flex justify-center gap-4">
                    <button
                      onClick={() => handleStartIsland(activeIslandId)}
                      className="px-4 py-2 border-2 border-[#8E2800] text-[#8E2800] hover:bg-[#8E2800] hover:text-white font-bold text-xs rounded transition cursor-pointer"
                    >
                      Re-Roll Scroll
                    </button>
                    <button
                      onClick={() => setActiveIslandId(null)}
                      className="px-5 py-2 bg-[#8E2800] text-white font-bold text-xs rounded border border-[#D4AF37] shadow hover:bg-[#6D1F00] transition cursor-pointer"
                    >
                      Return to Map
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}

          <div ref={bottomRef} />
        </main>
      )}
    </div>
  );
}

export default App;
