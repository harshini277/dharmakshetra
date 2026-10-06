import React from 'react';
import { AnimatePresence } from 'framer-motion';

interface ActionComicSplashProps {
  active: boolean;
  soundText?: string;
  tag?: string;
}

export const ActionComicSplash: React.FC<ActionComicSplashProps> = ({
  active,
  soundText = 'SHING!',
  tag
}) => {
  if (!active) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center overflow-hidden">
        
        {/* Diagonal Action Slash Overlay */}
        <div className="absolute inset-0 bg-rose-600/30 backdrop-blur-xs animate-slash" />
        <div className="absolute inset-x-0 h-48 bg-gradient-to-r from-amber-500 via-rose-600 to-amber-500 opacity-80 -rotate-6 transform scale-125 border-y-4 border-amber-300 shadow-2xl flex items-center justify-center">
          
          {/* Onomatopoeia Sound Sticker Text */}
          <div className="relative font-comic text-6xl sm:text-8xl font-extrabold text-amber-200 tracking-widest drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)] animate-sticker transform -rotate-6">
            {soundText}
            {tag && (
              <div className="text-sm font-mono text-slate-950 bg-amber-400 px-3 py-1 rounded border-2 border-slate-950 font-bold uppercase mt-1 tracking-normal shadow-lg">
                {tag}
              </div>
            )}
          </div>

        </div>

      </div>
    </AnimatePresence>
  );
};
