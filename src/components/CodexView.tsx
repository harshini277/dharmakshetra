import React, { useState } from 'react';
import { BookOpen, Sword, Compass } from 'lucide-react';
import { CharacterAvatar } from './ProceduralArtwork';

export const CodexView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'heroes' | 'astras' | 'philosophy'>('heroes');

  const heroes = [
    {
      name: 'Yudhishthira',
      title: 'King of Dharma',
      svgKey: 'yudhishthira',
      description: 'Son of Lord Dharma, renowned for absolute truthfulness and devotion to duty, tested severely in the gambling hall and the Himalayan ascent.',
      quote: 'Dharma protected protects all; Dharma destroyed destroys all.'
    },
    {
      name: 'Lord Krishna',
      title: 'The Divine Guide',
      svgKey: 'krishna',
      description: 'Eighth Avatar of Vishnu who revealed the Bhagavad Gita on Kurukshetra, balancing divine cosmic necessity with mortal warfare.',
      quote: 'Whenever Dharma declines and Adharma reigns, I manifest Myself upon the earth.'
    },
    {
      name: 'Arjuna',
      title: 'Peerless Archer',
      svgKey: 'arjuna',
      description: 'Wielder of the Gandiva bow whose moral despair at Kurukshetra birthed the timeless wisdom of the Gita.',
      quote: 'My bow Gandiva slips from my hand, and my skin burns all over!'
    },
    {
      name: 'Bhishma',
      title: 'Grand Patriarch',
      svgKey: 'bhishma',
      description: 'Son of Ganga blessed with death at will, bound by a terrifying vow of lifelong celibacy to defend the throne of Hastinapura.',
      quote: 'I am bound to the throne of Hastinapura; my oath is my breath.'
    },
    {
      name: 'Karna',
      title: 'Sun-Born Champion',
      svgKey: 'karna',
      description: 'Eldest Pandava born to Kunti and Surya, abandoned at birth, whose unmatched charity and tragic loyalty to Duryodhana defined his life.',
      quote: 'Karna will never refuse a Brahmin at sunrise, even if he asks for my skin!'
    },
    {
      name: 'Draupadi',
      title: 'Empress Born of Fire',
      svgKey: 'draupadi',
      description: 'Born from the Yajna fire of King Drupada, whose unwashed hair and fiery dignity ignited the destruction of the Kuru dynasty.',
      quote: 'Forgiveness is the virtue of the strong, but justice is the lifeblood of the innocent.'
    }
  ];

  const astras = [
    {
      name: 'Sudarshana Chakra',
      origin: 'Lord Vishnu / Krishna',
      description: 'A spinning divine disc of fiery solar energy with 108 serrated edges, capable of severing any head in the cosmos and returning to the hand.',
      element: 'Cosmic Fire & Light'
    },
    {
      name: 'Gandiva Bow',
      origin: 'Lord Varuna / Arjuna',
      description: 'The celestial bow created by Lord Brahma, featuring 100 divine bowstrings, capable of multiplying arrows into rainstorms.',
      element: 'Thunder & Wind'
    },
    {
      name: 'Kavacha-Kundala',
      origin: 'Lord Surya / Karna',
      description: 'Golden divine chest armor and earrings grown upon Karna at birth, rendering him completely invulnerable to mortal weapons.',
      element: 'Solar Light'
    },
    {
      name: 'Brahmastra',
      origin: 'Lord Brahma',
      description: 'A nuclear-scale celestial weapon summoned by secret mantras. When invoked, it causes severe droughts, barren soil, and total obliteration for generations.',
      element: 'Universal Fire'
    }
  ];

  const philosophy = [
    {
      term: 'Swadharma',
      meaning: 'Individual Cosmic Duty',
      explanation: 'One’s prescribed personal duty defined by individual nature, talent, and social responsibility. Better to perform one’s own duty imperfectly than another’s perfectly.'
    },
    {
      term: 'Nishkama Karma',
      meaning: 'Action Without Fruit Attachment',
      explanation: 'Performing prescribed work with maximum excellence while surrendering all attachment to success, failure, praise, or defeat.'
    },
    {
      term: 'Nyaya vs. Niti',
      meaning: 'Substantive Justice vs. Formal Procedure',
      explanation: 'Nyaya represents genuine moral justice and human dignity, while Niti represents rigid legalistic procedure. When Niti oppresses, Nyaya must supersede.'
    },
    {
      term: 'Satya',
      meaning: 'Absolute Truth & Reality',
      explanation: 'Truth that sustains cosmic harmony. In high ethical dilemmas, true Satya is measured by whether speech preserves innocent life and cosmic order.'
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-4 sm:p-6 space-y-6">
      
      {/* Header */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-amber-500/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest">
            <BookOpen className="w-4 h-4 text-amber-400" />
            Mahabharata Encyclopedia
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold gold-text-gradient mt-1">
            Lore & Philosophy Codex
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-sans mt-1">
            Explore the warriors, celestial astras, and eternal ethical frameworks governing the Dharmakshetra sandbox.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center p-1 bg-slate-950 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTab('heroes')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'heroes'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Warriors
          </button>
          <button
            onClick={() => setActiveTab('astras')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'astras'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Celestial Astras
          </button>
          <button
            onClick={() => setActiveTab('philosophy')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'philosophy'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Dharma Ethics
          </button>
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'heroes' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {heroes.map((hero, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 shadow-xl space-y-3 transition-all"
            >
              <div className="flex items-center gap-3">
                <CharacterAvatar svgKey={hero.svgKey} className="w-12 h-12 flex-shrink-0" />
                <div>
                  <h3 className="text-base font-serif font-bold text-amber-200">{hero.name}</h3>
                  <p className="text-xs text-slate-400 font-mono">{hero.title}</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">{hero.description}</p>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800/80 text-xs italic text-amber-100/90 font-serif">
                "{hero.quote}"
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'astras' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {astras.map((astra, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-950 border border-amber-500/20 hover:border-amber-500/50 shadow-xl space-y-3 transition-all"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="font-serif font-bold text-amber-300 text-base flex items-center gap-2">
                  <Sword className="w-4 h-4 text-amber-400" />
                  {astra.name}
                </span>
                <span className="text-[10px] font-mono bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                  {astra.element}
                </span>
              </div>
              <div className="text-xs text-slate-400 font-mono">Bearer / Master: {astra.origin}</div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">{astra.description}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'philosophy' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {philosophy.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-950 border border-purple-500/20 hover:border-purple-500/50 shadow-xl space-y-3 transition-all"
            >
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="font-serif font-bold text-purple-300 text-base flex items-center gap-2">
                  <Compass className="w-4 h-4 text-purple-400" />
                  {item.term}
                </span>
                <span className="text-[10px] font-mono bg-purple-500/10 text-purple-300 px-2 py-0.5 rounded border border-purple-500/30">
                  {item.meaning}
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">{item.explanation}</p>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
