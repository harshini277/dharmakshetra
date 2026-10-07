import React from 'react';
import type { WebtoonIsland } from '../data/webtoonData';
import { ASSETS } from '../assets/gameAssets';
import { audioEngine } from '../utils/audioEngine';

interface WebtoonOverworldMapProps {
  islands: WebtoonIsland[];
  onSelectIsland: (island: WebtoonIsland) => void;
  completedIslandIds: string[];
}

export const WebtoonOverworldMap: React.FC<WebtoonOverworldMapProps> = ({
  islands,
  onSelectIsland,
  completedIslandIds,
}) => {
  // Map 10 islands with high-fidelity images from ASSETS
  const galleryIslands = islands.map((island, index) => {
    let img = ASSETS.scenes.forest;
    if (island.id === 'island-1') img = ASSETS.scenes.forest;
    else if (island.id === 'island-2') img = ASSETS.scenes.arena;
    else if (island.id === 'island-3') img = ASSETS.scenes.lac;
    else if (island.id === 'island-4') img = ASSETS.scenes.swayamvara;
    else if (island.id === 'island-5') img = ASSETS.scenes.khandava;
    else if (island.id === 'island-6') img = ASSETS.scenes.dice;
    else if (island.id === 'island-7') img = ASSETS.scenes.exile;
    else if (island.id === 'island-8') img = ASSETS.scenes.matsya;
    else if (island.id === 'island-9') img = ASSETS.scenes.dwarka;
    else if (island.id === 'island-10') img = ASSETS.scenes.kurukshetra;

    return {
      ...island,
      index: index + 1,
      img,
    };
  });

  return (
    <main className="min-h-screen bg-[#FAF4E6] py-12 px-6 text-[#2C1810] font-serif">
      
      {/* Page Title & Subtitle */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="px-3 py-1 bg-[#8E2800]/10 border border-[#8E2800]/30 text-[#8E2800] text-xs uppercase tracking-widest font-bold rounded-full">
          Interactive Webtoon Nexus
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2C1810] mt-3 font-serif">
          Tales of the 10 Sacred Isles
        </h1>
        <p className="text-sm text-[#684C32] mt-2 font-serif">
          Click any floating sanctuary below to open its scroll and alter the epic.
        </p>
      </div>

      {/* 10 Floating Island Cards Gallery Grid (No Numbered Circles, Real Landscape Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {galleryIslands.map((island) => {
          const isCompleted = completedIslandIds.includes(island.id);

          return (
            <div
              key={island.id}
              onClick={() => {
                audioEngine.playSoundFx('gong');
                onSelectIsland(island);
              }}
              className="group bg-[#FFFDF7] border-2 border-[#D4AF37] rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Island Thumbnail Image */}
              <div className="h-40 w-full relative overflow-hidden bg-amber-100">
                <img 
                  src={island.img} 
                  alt={island.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80";
                  }}
                />
                <span className="absolute top-2 left-2 bg-[#8E2800] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                  Island #{island.index}
                </span>
                <span className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  {island.parva}
                </span>

                {isCompleted && (
                  <span className="absolute top-2 right-2 bg-[#D4AF37] text-[#8E2800] text-[10px] font-bold px-2 py-0.5 rounded shadow">
                    ✓ Completed
                  </span>
                )}
              </div>

              {/* Island Details */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm text-[#2C1810] group-hover:text-[#8E2800] transition line-clamp-2">
                    {island.title}
                  </h3>
                  <p className="text-[11px] text-[#684C32] italic mt-1">
                    {island.era}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs font-bold text-[#A06D12]">
                  <span>Enter Island</span>
                  <span className="group-hover:translate-x-1 transition">➔</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </main>
  );
};
