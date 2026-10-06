import React from 'react';

// Dual-Mode Asset Support:
// If custom images are placed in /assets/images/ (or public/images/), they will load;
// otherwise, fallback immediately to embedded high-detail cel-shaded vector artwork!

interface ComicAvatarProps {
  character: string;
  emotion?: 'normal' | 'defiant' | 'despair' | 'enraged' | 'smirking' | 'cursing' | 'divine';
  className?: string;
}

export const ComicAvatar: React.FC<ComicAvatarProps> = ({ character, emotion = 'normal', className = "w-48 h-64" }) => {
  const customImagePath = `/assets/images/${character}_${emotion}.png`;
  const [useFallback, setUseFallback] = React.useState(false);

  if (!useFallback) {
    return (
      <img
        src={customImagePath}
        alt={`${character} ${emotion}`}
        className={`object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.9)] ${className}`}
        onError={() => setUseFallback(true)}
      />
    );
  }

  // MODE A: Embedded Procedural Cel-Shaded Mythological Character Vector Art
  switch (character.toLowerCase()) {
    case 'karna':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 200 260" className="w-full h-full filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
            <defs>
              <radialGradient id="karna-halo" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#fff7ed" />
                <stop offset="40%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#7c2d12" />
              </radialGradient>
              <linearGradient id="karna-armor" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
            </defs>
            {/* Solar Aura */}
            <circle cx="100" cy="110" r="85" fill="url(#karna-halo)" opacity="0.4" />
            <circle cx="100" cy="110" r="80" fill="none" stroke="#f59e0b" strokeWidth="3" strokeDasharray="6 4" />
            {/* Sun Medallion Armor (Kavacha) */}
            <path d="M40,180 L100,140 L160,180 L150,260 L50,260 Z" fill="url(#karna-armor)" stroke="#000" strokeWidth="4" />
            <circle cx="100" cy="200" r="22" fill="#ea580c" stroke="#fff" strokeWidth="3" />
            <polygon points="100,182 105,195 118,195 107,202 111,215 100,206 89,215 93,202 82,195 95,195" fill="#fef08a" />
            {/* Face & Crown */}
            <path d="M70,90 C70,140 130,140 130,90 Z" fill="#3f2305" stroke="#000" strokeWidth="4" />
            <polygon points="65,90 85,45 100,25 115,45 135,90 100,75" fill="url(#karna-armor)" stroke="#000" strokeWidth="3" />
            <circle cx="100" cy="55" r="5" fill="#dc2626" />
            {/* Eyes - Defiant Gaze */}
            <ellipse cx="85" cy="100" rx="8" ry="4" fill="#fff" stroke="#000" strokeWidth="2" />
            <circle cx="86" cy="100" r="3" fill="#dc2626" />
            <ellipse cx="115" cy="100" rx="8" ry="4" fill="#fff" stroke="#000" strokeWidth="2" />
            <circle cx="114" cy="100" r="3" fill="#dc2626" />
            <path d="M78,92 Q85,86 92,92" stroke="#000" strokeWidth="3" fill="none" />
            <path d="M108,92 Q115,86 122,92" stroke="#000" strokeWidth="3" fill="none" />
            {/* Kundala Earrings */}
            <circle cx="62" cy="115" r="8" fill="#fef08a" stroke="#000" strokeWidth="2" />
            <circle cx="138" cy="115" r="8" fill="#fef08a" stroke="#000" strokeWidth="2" />
          </svg>
        </div>
      );

    case 'arjuna':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 200 260" className="w-full h-full filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
            <defs>
              <linearGradient id="gandiva-bow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#78350f" />
              </linearGradient>
            </defs>
            {/* Gandiva Celestial Bow Arc */}
            <path d="M30,20 Q10,130 30,240 Q40,130 30,20 Z" fill="url(#gandiva-bow)" stroke="#000" strokeWidth="4" />
            <line x1="30" y1="20" x2="30" y2="240" stroke="#06b6d4" strokeWidth="3" strokeDasharray="4 2" />
            {/* Body Armor */}
            <path d="M50,170 C60,150 140,150 150,170 L160,260 L40,260 Z" fill="#1e293b" stroke="#000" strokeWidth="4" />
            <rect x="75" y="170" width="50" height="90" fill="#0f172a" stroke="#06b6d4" strokeWidth="2" />
            {/* Head & Warrior Band */}
            <path d="M70,85 C70,135 130,135 130,85 Z" fill="#292524" stroke="#000" strokeWidth="4" />
            <rect x="68" y="70" width="64" height="15" rx="3" fill="#dc2626" stroke="#000" strokeWidth="2" />
            <circle cx="100" cy="77" r="4" fill="#fef08a" />
            {/* Focused Archer Eyes */}
            <ellipse cx="85" cy="95" rx="7" ry="3.5" fill="#fff" stroke="#000" strokeWidth="2" />
            <circle cx="87" cy="95" r="2.5" fill="#06b6d4" />
            <ellipse cx="115" cy="95" rx="7" ry="3.5" fill="#fff" stroke="#000" strokeWidth="2" />
            <circle cx="113" cy="95" r="2.5" fill="#06b6d4" />
            {/* Monkey Flag Emblem Badge */}
            <circle cx="160" cy="60" r="18" fill="#dc2626" stroke="#000" strokeWidth="2" />
            <path d="M152,60 Q160,48 168,60 Q160,72 152,60 Z" fill="#fef08a" />
          </svg>
        </div>
      );

    case 'krishna':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 200 260" className="w-full h-full filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
            <defs>
              <radialGradient id="krishna-blue" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="60%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#0f172a" />
              </radialGradient>
              <linearGradient id="peacock-fan" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
            {/* Divine Aura Disk */}
            <circle cx="100" cy="110" r="85" fill="url(#krishna-blue)" opacity="0.6" />
            <circle cx="100" cy="110" r="80" fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="8 4" />
            {/* Yellow Pitambara Silk Robes */}
            <path d="M45,170 C55,145 145,145 155,170 L165,260 L35,260 Z" fill="#eab308" stroke="#000" strokeWidth="4" />
            <path d="M80,170 L120,170 L110,260 L90,260 Z" fill="#0284c7" stroke="#000" strokeWidth="2" />
            {/* Peacock Feather Crest */}
            <path d="M100,20 Q85,5 100,0 Q115,5 100,20 Z" fill="url(#peacock-fan)" stroke="#000" strokeWidth="2" />
            <circle cx="100" cy="10" r="4" fill="#38bdf8" />
            {/* Crown & Face */}
            <polygon points="70,75 85,35 100,20 115,35 130,75 100,65" fill="#f59e0b" stroke="#000" strokeWidth="3" />
            <path d="M72,85 C72,135 128,135 128,85 Z" fill="#0284c7" stroke="#000" strokeWidth="4" />
            {/* U-shaped Vaishnava Tilak */}
            <path d="M94,75 L94,95 Q100,98 106,95 L106,75 Z" fill="#fff" stroke="#000" strokeWidth="1" />
            <path d="M98,85 L102,85 L100,93 Z" fill="#dc2626" />
            {/* Serene Smiling Eyes */}
            <path d="M78,98 Q86,93 94,98" stroke="#000" strokeWidth="3" fill="none" />
            <path d="M106,98 Q114,93 122,98" stroke="#000" strokeWidth="3" fill="none" />
            <path d="M90,115 Q100,122 110,115" stroke="#000" strokeWidth="2.5" fill="none" />
          </svg>
        </div>
      );

    case 'draupadi':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 200 260" className="w-full h-full filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
            <defs>
              <linearGradient id="fire-drape" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#450a0a" />
                <stop offset="50%" stopColor="#dc2626" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
            {/* Unbound Flowing Hair Aura */}
            <path d="M30,60 Q10,150 40,250 Q100,200 160,250 Q190,150 170,60 Q100,30 30,60 Z" fill="#09090b" stroke="#000" strokeWidth="4" />
            {/* Crimson Fire Garments */}
            <path d="M45,170 C55,145 145,145 155,170 L165,260 L35,260 Z" fill="url(#fire-drape)" stroke="#000" strokeWidth="4" />
            {/* Face & Fire Bindi */}
            <path d="M72,85 C72,135 128,135 128,85 Z" fill="#3f2305" stroke="#000" strokeWidth="4" />
            <circle cx="100" cy="78" r="5" fill="#dc2626" stroke="#fef08a" strokeWidth="1" />
            {/* Resolute Piercing Eyes */}
            <ellipse cx="84" cy="95" rx="8" ry="4" fill="#fff" stroke="#000" strokeWidth="2" />
            <circle cx="85" cy="95" r="3" fill="#dc2626" />
            <ellipse cx="116" cy="95" rx="8" ry="4" fill="#fff" stroke="#000" strokeWidth="2" />
            <circle cx="115" cy="95" r="3" fill="#dc2626" />
            <path d="M76,88 Q84,82 92,88" stroke="#000" strokeWidth="3" fill="none" />
            <path d="M108,88 Q116,82 124,88" stroke="#000" strokeWidth="3" fill="none" />
          </svg>
        </div>
      );

    case 'shakuni':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 200 260" className="w-full h-full filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
            <path d="M35,160 Q20,200 35,260 L165,260 Q180,200 165,160 Z" fill="#064e3b" stroke="#000" strokeWidth="4" />
            {/* Hooded Hood */}
            <path d="M55,90 Q100,40 145,90 Q100,70 55,90 Z" fill="#022c22" stroke="#000" strokeWidth="3" />
            <path d="M70,85 C70,135 130,135 130,85 Z" fill="#14532d" stroke="#000" strokeWidth="4" />
            {/* Glowing Ivory Dice in hand */}
            <rect x="75" y="190" width="22" height="22" rx="3" fill="#fef08a" stroke="#000" strokeWidth="2" transform="rotate(15 86 201)" />
            <circle cx="82" cy="198" r="2" fill="#000" />
            <circle cx="90" cy="204" r="2" fill="#000" />
            {/* Sinister Smirk */}
            <ellipse cx="85" cy="95" rx="6" ry="3" fill="#fff" stroke="#000" strokeWidth="2" />
            <circle cx="86" cy="95" r="2" fill="#10b981" />
            <ellipse cx="115" cy="95" rx="6" ry="3" fill="#fff" stroke="#000" strokeWidth="2" />
            <circle cx="114" cy="95" r="2" fill="#10b981" />
            <path d="M85,115 Q100,130 118,110" stroke="#000" strokeWidth="3" fill="none" />
          </svg>
        </div>
      );

    case 'bheema':
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 200 260" className="w-full h-full filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
            {/* Massive Iron Mace Head Behind Shoulder */}
            <circle cx="160" cy="60" r="35" fill="#27272a" stroke="#000" strokeWidth="4" />
            <rect x="145" y="90" width="10" height="150" fill="#71717a" stroke="#000" strokeWidth="3" transform="rotate(-20 150 165)" />
            {/* Muscular Muscular Body */}
            <path d="M35,160 L165,160 L155,260 L45,260 Z" fill="#7f1d1d" stroke="#000" strokeWidth="4" />
            <path d="M68,80 C68,140 132,140 132,80 Z" fill="#451a03" stroke="#000" strokeWidth="4" />
            {/* Roaring Expression */}
            <ellipse cx="84" cy="90" rx="7" ry="4" fill="#fff" stroke="#000" strokeWidth="2" />
            <circle cx="85" cy="90" r="3" fill="#dc2626" />
            <ellipse cx="116" cy="90" rx="7" ry="4" fill="#fff" stroke="#000" strokeWidth="2" />
            <circle cx="115" cy="90" r="3" fill="#dc2626" />
            <path d="M85,110 Q100,135 115,110 Z" fill="#7f1d1d" stroke="#000" strokeWidth="3" />
          </svg>
        </div>
      );

    default:
      return (
        <div className={`relative flex items-center justify-center ${className}`}>
          <svg viewBox="0 0 200 260" className="w-full h-full filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
            <rect x="40" y="160" width="120" height="100" fill="#1e293b" stroke="#000" strokeWidth="4" />
            <path d="M70,85 C70,135 130,135 130,85 Z" fill="#334155" stroke="#000" strokeWidth="4" />
            <polygon points="65,85 85,45 100,25 115,45 135,85" fill="#f59e0b" stroke="#000" strokeWidth="3" />
            <circle cx="85" cy="95" r="4" fill="#fff" />
            <circle cx="115" cy="95" r="4" fill="#fff" />
          </svg>
        </div>
      );
  }
};

interface ComicPanelProps {
  scene: string;
  className?: string;
}

export const ComicPanel: React.FC<ComicPanelProps> = ({ scene, className = "w-full h-64 sm:h-80" }) => {
  return (
    <div className={`relative overflow-hidden rounded-xl border-4 border-black shadow-[8px_8px_0px_#000] bg-slate-950 ${className}`}>
      {/* 10 Procedural SVG Comic Environments with Inked Outlines & Halftones */}

      {scene === 'forest_hunt' && (
        <svg viewBox="0 0 500 300" className="w-full h-full object-cover">
          <rect width="500" height="300" fill="#022c22" />
          {/* Twilight Pine Forest Silhouette */}
          <polygon points="40,300 90,80 140,300" fill="#064e3b" stroke="#000" strokeWidth="3" />
          <polygon points="120,300 170,110 220,300" fill="#065f46" stroke="#000" strokeWidth="3" />
          <polygon points="280,300 340,60 400,300" fill="#064e3b" stroke="#000" strokeWidth="3" />
          {/* Golden Deer Glow */}
          <circle cx="380" cy="180" r="45" fill="#fef08a" opacity="0.3" />
          <path d="M360,200 Q380,150 400,200 Q390,220 370,220 Z" fill="#f59e0b" stroke="#000" strokeWidth="3" />
          {/* Moonbeam rays */}
          <polygon points="200,0 260,0 380,300 280,300" fill="#ecfdf5" opacity="0.15" />
        </svg>
      )}

      {scene === 'tournament_arena' && (
        <svg viewBox="0 0 500 300" className="w-full h-full object-cover">
          <rect width="500" height="300" fill="#451a03" />
          {/* Sun-baked Crimson Arena Arena Sands */}
          <path d="M0,180 L500,180 L500,300 L0,300 Z" fill="#b45309" stroke="#000" strokeWidth="3" />
          {/* Colosseum Pillars */}
          <rect x="50" y="20" width="40" height="160" fill="#78350f" stroke="#000" strokeWidth="3" />
          <rect x="410" y="20" width="40" height="160" fill="#78350f" stroke="#000" strokeWidth="3" />
          {/* Fluttering Kuru Banners */}
          <path d="M90,30 Q140,45 90,75 Z" fill="#dc2626" stroke="#000" strokeWidth="2" />
          <path d="M410,30 Q360,45 410,75 Z" fill="#dc2626" stroke="#000" strokeWidth="2" />
        </svg>
      )}

      {scene === 'house_of_lac' && (
        <svg viewBox="0 0 500 300" className="w-full h-full object-cover">
          <rect width="500" height="300" fill="#180202" />
          {/* Dark Timber Halls Weeping Resin */}
          <rect x="60" y="0" width="50" height="300" fill="#450a0a" stroke="#000" strokeWidth="4" />
          <rect x="390" y="0" width="50" height="300" fill="#450a0a" stroke="#000" strokeWidth="4" />
          {/* Resin Drops */}
          <path d="M85,80 Q95,130 85,140 Z" fill="#ea580c" />
          <path d="M415,100 Q425,150 415,160 Z" fill="#ea580c" />
          {/* Orange Torch Flickers */}
          <circle cx="250" cy="150" r="80" fill="#ea580c" opacity="0.35" />
          <polygon points="250,90 230,160 270,160" fill="#fef08a" stroke="#000" strokeWidth="2" />
        </svg>
      )}

      {scene === 'swayamvara_hall' && (
        <svg viewBox="0 0 500 300" className="w-full h-full object-cover">
          <rect width="500" height="300" fill="#1e1b4b" />
          {/* Revolving Golden Fish Machine */}
          <circle cx="250" cy="70" r="40" fill="none" stroke="#f59e0b" strokeWidth="4" strokeDasharray="8 4" />
          <polygon points="250,45 265,70 235,70" fill="#fef08a" stroke="#000" strokeWidth="2" />
          {/* Water Mirror Pool */}
          <ellipse cx="250" cy="230" rx="180" ry="50" fill="#0284c7" stroke="#000" strokeWidth="3" opacity="0.8" />
          <ellipse cx="250" cy="230" rx="120" ry="30" fill="#38bdf8" opacity="0.4" />
        </svg>
      )}

      {scene === 'khandava_forest' && (
        <svg viewBox="0 0 500 300" className="w-full h-full object-cover">
          <rect width="500" height="300" fill="#0f172a" />
          {/* Cosmic Blue and Orange Flames */}
          <path d="M0,300 Q120,50 250,300 Q380,50 500,300 Z" fill="#ea580c" opacity="0.7" />
          <path d="M50,300 Q200,80 350,300 Z" fill="#06b6d4" opacity="0.6" />
          {/* Indraprastha Spires Rising */}
          <polygon points="220,300 250,100 280,300" fill="#fef08a" stroke="#000" strokeWidth="3" />
        </svg>
      )}

      {scene === 'dice_chamber' && (
        <svg viewBox="0 0 500 300" className="w-full h-full object-cover">
          <rect width="500" height="300" fill="#1e102d" />
          {/* Blood-red gaming carpet */}
          <polygon points="100,140 400,140 480,300 20,300" fill="#881337" stroke="#000" strokeWidth="3" />
          {/* Opulent purple silk drapes */}
          <path d="M0,0 Q120,80 250,0 Q380,80 500,0 L500,60 L0,60 Z" fill="#581c87" stroke="#000" strokeWidth="3" />
        </svg>
      )}

      {scene === 'forest_exile' && (
        <svg viewBox="0 0 500 300" className="w-full h-full object-cover">
          <rect width="500" height="300" fill="#051610" />
          {/* Starry Sky */}
          {[50, 120, 200, 320, 420].map((x, idx) => (
            <circle key={idx} cx={x} cy={30 + (idx % 3) * 20} r="2" fill="#fff" />
          ))}
          {/* Hermit Huts & Campfire */}
          <polygon points="80,240 130,160 180,240" fill="#451a03" stroke="#000" strokeWidth="3" />
          <circle cx="300" cy="230" r="25" fill="#ea580c" opacity="0.5" />
          <polygon points="300,200 290,235 310,235" fill="#fef08a" stroke="#000" strokeWidth="2" />
        </svg>
      )}

      {scene === 'matsya_court' && (
        <svg viewBox="0 0 500 300" className="w-full h-full object-cover">
          <rect width="500" height="300" fill="#090d16" />
          <rect x="80" y="20" width="45" height="280" fill="#1e293b" stroke="#000" strokeWidth="3" />
          <rect x="375" y="20" width="45" height="280" fill="#1e293b" stroke="#000" strokeWidth="3" />
          <circle cx="250" cy="100" r="60" fill="#38bdf8" opacity="0.2" />
        </svg>
      )}

      {scene === 'dwarka_chamber' && (
        <svg viewBox="0 0 500 300" className="w-full h-full object-cover">
          <rect width="500" height="300" fill="#172554" />
          <path d="M50,40 L450,40 L400,120 L100,120 Z" fill="#1d4ed8" stroke="#000" strokeWidth="3" />
          <circle cx="250" cy="180" r="50" fill="#fef08a" opacity="0.3" />
        </svg>
      )}

      {scene === 'kurukshetra_dust' && (
        <svg viewBox="0 0 500 300" className="w-full h-full object-cover">
          <rect width="500" height="300" fill="#450a0a" />
          {/* Chariot Wheel buried in dust */}
          <circle cx="160" cy="200" r="55" fill="none" stroke="#f59e0b" strokeWidth="5" />
          <circle cx="160" cy="200" r="15" fill="#78350f" />
          {/* Arrow storm darkening sky */}
          {[80, 140, 200, 260, 320, 380, 440].map((x, i) => (
            <line key={i} x1={x} y1="20" x2={x + 30} y2="100" stroke="#d1d5db" strokeWidth="2" strokeDasharray="6 3" />
          ))}
        </svg>
      )}

      {/* Fallback for any other scene */}
      {!['forest_hunt', 'tournament_arena', 'house_of_lac', 'swayamvara_hall', 'khandava_forest', 'dice_chamber', 'forest_exile', 'matsya_court', 'dwarka_chamber', 'kurukshetra_dust'].includes(scene) && (
        <svg viewBox="0 0 500 300" className="w-full h-full object-cover">
          <rect width="500" height="300" fill="#09090d" />
          <circle cx="250" cy="150" r="80" fill="none" stroke="#f59e0b" strokeWidth="3" strokeDasharray="6 4" />
          <polygon points="250,90 290,180 210,180" fill="none" stroke="#f59e0b" strokeWidth="2" />
        </svg>
      )}

      {/* Comic Halftone Overlay Filter */}
      <div className="absolute inset-0 bg-halftone opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40 pointer-events-none" />
    </div>
  );
};
