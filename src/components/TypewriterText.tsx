import React, { useState, useEffect, useRef } from 'react';
import { FastForward } from 'lucide-react';
import { audioEngine } from '../utils/audioEngine';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  className?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 25,
  onComplete,
  className = ''
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isFinished, setIsFinished] = useState(false);
  const textIndexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Reset state whenever target text changes
    setDisplayedText('');
    setIsFinished(false);
    textIndexRef.current = 0;

    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      if (textIndexRef.current < text.length) {
        setDisplayedText(text.slice(0, textIndexRef.current + 1));
        textIndexRef.current += 1;

        // Play subtle sound tick occasionally for parchment typewriter effect
        if (textIndexRef.current % 4 === 0) {
          audioEngine.playSoundFx('click');
        }
      } else {
        if (timerRef.current) clearInterval(timerRef.current);
        setIsFinished(true);
        if (onComplete) onComplete();
      }
    }, speed);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [text, speed, onComplete]);

  const handleSkip = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setDisplayedText(text);
    setIsFinished(true);
    if (onComplete) onComplete();
  };

  return (
    <div className={`relative group ${className}`}>
      <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-serif tracking-wide whitespace-pre-line">
        {displayedText}
        {!isFinished && (
          <span className="inline-block w-2 h-5 ml-1 bg-amber-400 animate-pulse align-middle" />
        )}
      </p>

      {!isFinished && (
        <button
          onClick={handleSkip}
          className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 transition-all shadow-sm"
        >
          <FastForward className="w-3.5 h-3.5 animate-bounce" />
          Skip Typewriter
        </button>
      )}
    </div>
  );
};
