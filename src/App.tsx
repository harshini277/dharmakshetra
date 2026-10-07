import { useState, useEffect, useRef } from 'react';
import { ASSETS } from './assets/gameAssets';
import { STORY_GRAPH } from './data/storyEngine';

export function App() {
  const [activeIslandId, setActiveIslandId] = useState<string | null>(null);
  // Accumulated history of played steps to enable persistent reading
  const [timelineFeed, setTimelineFeed] = useState<any[]>([]);
  const feedEndRef = useRef<HTMLDivElement | null>(null);

  // Start selected island
  const handleLaunchIsland = (id: string) => {
    setActiveIslandId(id);
    const island = (STORY_GRAPH as Record<string, any>)[id] || (STORY_GRAPH as Record<string, any>)["island-2"];
    setTimelineFeed([
      {
        nodeId: island.rootStep,
        stepData: island.nodes[island.rootStep],
        selectedChoice: null
      }
    ]);
  };

  // Branch story on decision
  const handlePickChoice = (stepIndex: number, choice: any) => {
    if (!activeIslandId) return;
    const island = (STORY_GRAPH as Record<string, any>)[activeIslandId] || (STORY_GRAPH as Record<string, any>)["island-2"];
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

  // Smooth scroll down when a new act loads
  useEffect(() => {
    if (timelineFeed.length > 1) {
      feedEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [timelineFeed]);

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

      {/* OVERWORLD MAP */}
      {!activeIslandId && (
        <main className="max-w-6xl mx-auto py-12 px-6">
          <div className="text-center max-w-xl mx-auto mb-10 bg-[#FAF4E6] p-6 rounded-xl border border-[#D4AF37]">
            <span className="px-3 py-1 bg-[#8E2800]/10 border border-[#8E2800]/20 text-[#8E2800] text-xs font-bold uppercase tracking-widest rounded-full">
              Multi-Stage Decision Engine
            </span>
            <h2 className="text-3xl font-extrabold text-[#2C1810] mt-3">
              Choose a Fractured Nexus
            </h2>
            <p className="text-xs text-[#5D4037] mt-2 leading-relaxed">
              Every island is a 5-minute deep narrative containing 3 sequential decision points. Alter the epic chapter by chapter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                id: "island-2",
                title: "The Arena of Anga",
                parva: "Adi Parva",
                desc: "Karna crashes the graduation tournament. Intervene through 3 pivotal moments across lineage, sunset, and royal vows.",
                bg: ASSETS.scenes.arena
              },
              {
                id: "island-6",
                title: "The Hall of Loaded Dice",
                parva: "Sabha Parva",
                desc: "Shakuni's rigged cubes challenge Yudhishthira. Make 3 critical choices across initial wagers, Draupadi's stake, and court intervention.",
                bg: ASSETS.scenes.dice
              },
              {
                id: "island-1",
                title: "The Cursed Hunt",
                parva: "Adi Parva",
                desc: "King Pandu hunts in Shatashringa forest under golden twilight. Intervene in the sage's curse and royal succession.",
                bg: ASSETS.scenes.forest
              },
              {
                id: "island-3",
                title: "The House of Lac",
                parva: "Adi Parva",
                desc: "Purochana primes the resin walls of Varanavata. Guide the Pandavas' escape or confrontation.",
                bg: ASSETS.scenes.lac
              },
              {
                id: "island-4",
                title: "Draupadi's Swayamvara",
                parva: "Adi Parva",
                desc: "Arjuna pierces the rotating fish eye in Panchala. Resolve the five-fold marriage dilemma.",
                bg: ASSETS.scenes.swayamvara
              },
              {
                id: "island-5",
                title: "The Khandava Partition",
                parva: "Sabha Parva",
                desc: "Lord Agni seeks the wilderness of Khandavaprastha. Direct the construction of Mayasabha.",
                bg: ASSETS.scenes.khandava
              },
              {
                id: "island-7",
                title: "The Banishment Pact",
                parva: "Vana Parva",
                desc: "12 years of wilderness exile in Kamyaka. Guide Arjuna's quest for Pashupatastra.",
                bg: ASSETS.scenes.exile
              },
              {
                id: "island-8",
                title: "The Shadow in Matsya",
                parva: "Virata Parva",
                desc: "Year 13 incognito in Virata court. Manage Kichaka's harassment and the Cattle Raid.",
                bg: ASSETS.scenes.matsya
              },
              {
                id: "island-9",
                title: "The Chamber of the God",
                parva: "Udyoga Parva",
                desc: "Dwarka alliance gathering. Choose between Krishna's unarmed self or the Narayani Sena.",
                bg: ASSETS.scenes.dwarka
              },
              {
                id: "island-10",
                title: "The Fallen Guru",
                parva: "Drona Parva",
                desc: "Day 15 of Kurukshetra. Navigate Drona's unstoppable rampage and Yudhishthira's half-truth.",
                bg: ASSETS.scenes.kurukshetra
              }
            ].map(item => (
              <div
                key={item.id}
                onClick={() => handleLaunchIsland(item.id)}
                className="group bg-[#FFFDF9] border-2 border-[#D4AF37] rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col"
              >
                <div className="h-48 w-full relative overflow-hidden bg-stone-900">
                  <img
                    src={item.bg}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute top-3 right-3 bg-[#D4AF37] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                    3 Decision Acts
                  </span>
                  <span className="absolute bottom-2 left-3 text-white text-xs font-bold tracking-wide">
                    {item.parva}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between bg-[#FAF4E6]">
                  <div>
                    <h3 className="font-bold text-[#2C1810] text-lg group-hover:text-[#8E2800] transition">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#5D4037] mt-1.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#D4AF37]/40 flex items-center justify-between text-xs font-bold text-[#8E2800]">
                    <span>Enter 5-Min Webtoon Scroll</span>
                    <span className="group-hover:translate-x-1 transition">➔</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* WEBTOON 3-ACT SCROLLER */}
      {activeIslandId && (
        <main className="max-w-[760px] mx-auto py-10 px-4">
          {/* Scroll Header */}
          <div className="bg-[#FAF2E1] border-2 border-[#D4AF37] rounded-xl p-6 text-center mb-10 shadow-sm">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#8E2800] bg-[#8E2800]/10 px-3 py-1 rounded">
              {activeIsland?.parva || 'Adi Parva'} • Interactive Chronicle
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#2C1810] mt-2">
              {activeIsland?.title || 'The Arena of Anga'}
            </h2>
            <p className="text-xs text-[#5D4037] mt-1.5">
              Scroll down to read. At each karmic junction, your choice permanently branches the story below.
            </p>
          </div>

          {/* CHRONOLOGICAL STORY FEED */}
          {timelineFeed.map((step, stepIdx) => (
            <div key={stepIdx} className="space-y-8 mb-10">
              {/* PANELS FOR THIS ACT */}
              {step.stepData.panels.map((panel: any, pIdx: number) => (
                <div
                  key={pIdx}
                  className="bg-[#FFFDF9] border-2 border-[#D4AF37] rounded-xl overflow-hidden shadow-md"
                >
                  {/* Scene Image Frame */}
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

                  {/* Clean Dialogue Section (No Overlapping Badges or Clipped Borders) */}
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

              {/* DECISION GATE (ACT CHOICE) */}
              {!step.stepData.isEnding && (
                <div className="my-8 p-6 bg-[#FAF2E1] border-2 border-[#D4AF37] rounded-xl shadow-md text-center">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#8E2800] bg-white px-3 py-1 rounded-full border border-[#D4AF37]">
                    ⚡ Karmic Crossroads • Act {stepIdx + 1} of 3
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

              {/* GRAND TIMELINE EPILOGUE (AFTER DECISION 3) */}
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

export default App;
