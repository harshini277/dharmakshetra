import React from 'react';

interface AvatarProps {
  svgKey: string;
  className?: string;
  size?: number;
}

export const CharacterAvatar: React.FC<AvatarProps> = ({ svgKey, className = "w-16 h-16", size = 64 }) => {
  switch (svgKey) {
    case 'yudhishthira':
      return (
        <svg viewBox="0 0 100 100" className={className} width={size} height={size}>
          <defs>
            <radialGradient id="yudh-aura" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffd700" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8b6508" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="yudh-crown" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff2a3" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#996515" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="46" fill="#140d21" stroke="#d4af37" strokeWidth="2" />
          <circle cx="50" cy="50" r="42" fill="url(#yudh-aura)" />
          {/* Crown */}
          <polygon points="30,45 38,25 50,15 62,25 70,45 50,38" fill="url(#yudh-crown)" stroke="#fff2a3" strokeWidth="1" />
          <circle cx="50" cy="22" r="3" fill="#e74c3c" />
          {/* Face Silhouette */}
          <path d="M38,45 C38,62 62,62 62,45 Z" fill="#2d1b47" stroke="#d4af37" strokeWidth="1.5" />
          {/* Tilak */}
          <path d="M48,32 L52,32 L50,42 Z" fill="#ffd700" />
          <circle cx="50" cy="44" r="1.5" fill="#e74c3c" />
          {/* Shoulders */}
          <path d="M20,85 C25,65 75,65 80,85 L85,100 L15,100 Z" fill="#4a2574" stroke="#ffd700" strokeWidth="1.5" />
        </svg>
      );

    case 'krishna':
      return (
        <svg viewBox="0 0 100 100" className={className} width={size} height={size}>
          <defs>
            <radialGradient id="krishna-aura" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00ffff" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="peacock-feather" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f5d4" />
              <stop offset="50%" stopColor="#0077b6" />
              <stop offset="100%" stopColor="#7b2cbf" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="46" fill="#030712" stroke="#00ffff" strokeWidth="2" />
          <circle cx="50" cy="50" r="42" fill="url(#krishna-aura)" />
          {/* Sudarshana Chakra Halo */}
          <circle cx="50" cy="50" r="38" fill="none" stroke="#60a5fa" strokeWidth="1" strokeDasharray="3 3" />
          {/* Peacock Feather */}
          <path d="M50,12 C44,5 56,2 50,12 Z" fill="url(#peacock-feather)" />
          <circle cx="50" cy="10" r="4" fill="#00ffff" />
          <circle cx="50" cy="10" r="2" fill="#ffd700" />
          {/* Face Silhouette Blue Divine */}
          <path d="M38,45 C38,62 62,62 62,45 Z" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
          {/* Sacred U-shaped Vaishnava Tilak */}
          <path d="M46,30 L46,42 Q50,45 54,42 L54,30 Z" fill="none" stroke="#ffffff" strokeWidth="1.5" />
          <path d="M49,38 L51,38 L50,44 Z" fill="#ef4444" />
          {/* Shoulders */}
          <path d="M20,85 C25,65 75,65 80,85 L85,100 L15,100 Z" fill="#1e1b4b" stroke="#38bdf8" strokeWidth="1.5" />
        </svg>
      );

    case 'arjuna':
      return (
        <svg viewBox="0 0 100 100" className={className} width={size} height={size}>
          <defs>
            <radialGradient id="arj-aura" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#78350f" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="46" fill="#111827" stroke="#f59e0b" strokeWidth="2" />
          <circle cx="50" cy="50" r="42" fill="url(#arj-aura)" />
          {/* Bow Gandiva Silhouette background */}
          <path d="M22,20 Q12,50 22,80 Q25,50 22,20 Z" fill="#d97706" stroke="#fbbf24" strokeWidth="1" />
          <line x1="22" y1="20" x2="22" y2="80" stroke="#fef3c7" strokeWidth="1" />
          {/* Face Silhouette */}
          <path d="M40,42 C40,58 60,58 60,42 Z" fill="#1f2937" stroke="#f59e0b" strokeWidth="1.5" />
          {/* Warrior Headband */}
          <rect x="35" y="32" width="30" height="6" rx="2" fill="#dc2626" />
          <circle cx="50" cy="35" r="2" fill="#ffd700" />
          {/* Arrow Tip */}
          <polygon points="50,15 45,28 55,28" fill="#fef3c7" stroke="#d97706" strokeWidth="1" />
          {/* Shoulders */}
          <path d="M22,85 C28,65 72,65 78,85 L85,100 L15,100 Z" fill="#374151" stroke="#fbbf24" strokeWidth="1.5" />
        </svg>
      );

    case 'karna':
      return (
        <svg viewBox="0 0 100 100" className={className} width={size} height={size}>
          <defs>
            <radialGradient id="surya-sun" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffedd5" />
              <stop offset="40%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#7c2d12" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="46" fill="#0f172a" stroke="#ea580c" strokeWidth="2" />
          <circle cx="50" cy="50" r="42" fill="url(#surya-sun)" opacity="0.6" />
          {/* Sun Rays */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
            <line
              key={idx}
              x1="50"
              y1="50"
              x2={50 + Math.cos((angle * Math.PI) / 180) * 44}
              y2={50 + Math.sin((angle * Math.PI) / 180) * 44}
              stroke="#fdba74"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
          ))}
          {/* Golden Armor (Kavacha) Chest Plate */}
          <path d="M25,65 L35,50 L50,55 L65,50 L75,65 L70,95 L30,95 Z" fill="#f59e0b" stroke="#fef08a" strokeWidth="2" />
          {/* Face */}
          <path d="M40,40 C40,56 60,56 60,40 Z" fill="#331e0b" stroke="#f97316" strokeWidth="1.5" />
          {/* Solar Tilak */}
          <circle cx="50" cy="36" r="3" fill="#ea580c" />
          <circle cx="50" cy="36" r="1" fill="#fef08a" />
        </svg>
      );

    case 'draupadi':
      return (
        <svg viewBox="0 0 100 100" className={className} width={size} height={size}>
          <defs>
            <linearGradient id="fire-flame" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#7f1d1d" />
              <stop offset="50%" stopColor="#dc2626" />
              <stop offset="85%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#fef08a" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="46" fill="#180509" stroke="#dc2626" strokeWidth="2" />
          <path d="M20,90 Q50,10 80,90 Z" fill="url(#fire-flame)" opacity="0.35" />
          {/* Unbound Flowing Dark Hair */}
          <path d="M22,35 Q15,65 30,90 Q50,70 70,90 Q85,65 78,35 Q50,20 22,35 Z" fill="#0f0714" stroke="#dc2626" strokeWidth="1" />
          {/* Face Silhouette */}
          <path d="M39,40 C39,58 61,58 61,40 Z" fill="#2e1065" stroke="#f43f5e" strokeWidth="1.5" />
          {/* Fire Bindi */}
          <circle cx="50" cy="34" r="2.5" fill="#ef4444" />
          {/* Crimson Royal Robes */}
          <path d="M22,88 C30,68 70,68 78,88 L82,100 L18,100 Z" fill="#881337" stroke="#f43f5e" strokeWidth="1.5" />
        </svg>
      );

    case 'duryodhana':
      return (
        <svg viewBox="0 0 100 100" className={className} width={size} height={size}>
          <defs>
            <linearGradient id="dur-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#450a0a" />
              <stop offset="50%" stopColor="#991b1b" />
              <stop offset="100%" stopColor="#18181b" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="46" fill="#09090b" stroke="#991b1b" strokeWidth="2" />
          {/* Mace Silhouette */}
          <path d="M75,20 L85,30 L60,55 L50,45 Z" fill="#d97706" stroke="#fbbf24" strokeWidth="1" />
          <circle cx="80" cy="25" r="10" fill="#92400e" stroke="#f59e0b" strokeWidth="2" />
          {/* Face */}
          <path d="M38,44 C38,62 62,62 62,44 Z" fill="url(#dur-grad)" stroke="#ef4444" strokeWidth="1.5" />
          {/* Heavy Dark Crown */}
          <polygon points="32,44 40,24 50,20 60,24 68,44 50,35" fill="#27272a" stroke="#d97706" strokeWidth="1.5" />
          <circle cx="50" cy="28" r="2.5" fill="#dc2626" />
          {/* Shoulders Armor */}
          <path d="M18,85 C25,64 75,64 82,85 L88,100 L12,100 Z" fill="#18181b" stroke="#dc2626" strokeWidth="1.5" />
        </svg>
      );

    case 'shakuni':
      return (
        <svg viewBox="0 0 100 100" className={className} width={size} height={size}>
          <circle cx="50" cy="50" r="46" fill="#061c16" stroke="#10b981" strokeWidth="2" />
          {/* Snake motif */}
          <path d="M25,25 Q50,10 75,25 Q50,40 25,55 Q50,70 75,55" fill="none" stroke="#059669" strokeWidth="2" opacity="0.4" />
          {/* Dice */}
          <rect x="35" y="65" width="14" height="14" rx="2" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5" transform="rotate(15 42 72)" />
          <rect x="52" y="62" width="14" height="14" rx="2" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5" transform="rotate(-20 59 69)" />
          {/* Face Hooded */}
          <path d="M38,40 C38,58 62,58 62,40 Z" fill="#064e3b" stroke="#34d399" strokeWidth="1.5" />
          {/* Hood */}
          <path d="M30,42 Q50,20 70,42 Q50,30 30,42 Z" fill="#022c22" stroke="#10b981" strokeWidth="1" />
          <path d="M20,88 C26,66 74,66 80,88 L85,100 L15,100 Z" fill="#065f46" stroke="#34d399" strokeWidth="1.5" />
        </svg>
      );

    case 'bhishma':
      return (
        <svg viewBox="0 0 100 100" className={className} width={size} height={size}>
          <defs>
            <radialGradient id="silver-halo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="60%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#1e293b" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="46" fill="#0f172a" stroke="#cbd5e1" strokeWidth="2" />
          <circle cx="50" cy="50" r="40" fill="url(#silver-halo)" opacity="0.4" />
          {/* Silver Crown / Helmet */}
          <path d="M32,42 L42,20 L50,12 L58,20 L68,42 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
          {/* Silver Beard */}
          <path d="M36,52 Q50,85 64,52 Q50,65 36,52 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
          {/* Face */}
          <path d="M38,42 C38,54 62,54 62,42 Z" fill="#334155" stroke="#e2e8f0" strokeWidth="1" />
          {/* White Tilak */}
          <line x1="42" y1="36" x2="58" y2="36" stroke="#ffffff" strokeWidth="2" />
          <line x1="44" y1="39" x2="56" y2="39" stroke="#ffffff" strokeWidth="1.5" />
          {/* White & Silver Robes */}
          <path d="M20,85 C25,65 75,65 80,85 L85,100 L15,100 Z" fill="#1e293b" stroke="#cbd5e1" strokeWidth="1.5" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 100 100" className={className} width={size} height={size}>
          <circle cx="50" cy="50" r="46" fill="#18181b" stroke="#d4af37" strokeWidth="2" />
          <circle cx="50" cy="40" r="16" fill="#27272a" stroke="#ffd700" strokeWidth="1.5" />
          <path d="M20,85 C25,65 75,65 80,85 L85,100 L15,100 Z" fill="#3f3f46" stroke="#d4af37" strokeWidth="1.5" />
        </svg>
      );
  }
};

interface VignetteProps {
  vignetteType: string;
  className?: string;
}

export const SceneVignette: React.FC<VignetteProps> = ({ vignetteType, className = "w-full h-48 sm:h-64" }) => {
  return (
    <div className={`relative overflow-hidden rounded-xl border border-amber-500/30 bg-slate-950 shadow-2xl ${className}`}>
      {/* Dynamic Background Art based on scene type */}
      {vignetteType === 'gambling_hall' && (
        <svg viewBox="0 0 400 200" className="w-full h-full object-cover">
          <defs>
            <radialGradient id="hall-light" cx="50%" cy="30%" r="60%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#b45309" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#090514" stopOpacity="0.95" />
            </radialGradient>
          </defs>
          <rect width="400" height="200" fill="#090514" />
          <rect width="400" height="200" fill="url(#hall-light)" />
          {/* Royal Pillars */}
          <rect x="20" y="20" width="30" height="180" fill="#291e38" stroke="#d4af37" strokeWidth="1" />
          <rect x="350" y="20" width="30" height="180" fill="#291e38" stroke="#d4af37" strokeWidth="1" />
          {/* Dice Board Pattern */}
          <g transform="translate(140, 110) rotate(-10) scale(0.9)">
            <rect x="0" y="0" width="120" height="70" fill="#451a03" stroke="#f59e0b" strokeWidth="2" />
            <line x1="40" y1="0" x2="40" y2="70" stroke="#d4af37" strokeWidth="1" />
            <line x1="80" y1="0" x2="80" y2="70" stroke="#d4af37" strokeWidth="1" />
            {/* Glowing Dice */}
            <rect x="20" y="20" width="22" height="22" rx="3" fill="#fff" stroke="#d4af37" strokeWidth="1" />
            <circle cx="31" cy="31" r="3" fill="#e74c3c" />
            <rect x="65" y="25" width="22" height="22" rx="3" fill="#fff" stroke="#d4af37" strokeWidth="1" />
            <circle cx="71" cy="31" r="2" fill="#000" />
            <circle cx="81" cy="31" r="2" fill="#000" />
          </g>
          {/* Royal Throne Silhouette */}
          <path d="M170,40 L230,40 L240,100 L160,100 Z" fill="#180e29" stroke="#ffd700" strokeWidth="1.5" />
          <circle cx="200" cy="35" r="8" fill="#e74c3c" />
        </svg>
      )}

      {vignetteType === 'kurukshetra' && (
        <svg viewBox="0 0 400 200" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="war-sky" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#450a0a" />
              <stop offset="60%" stopColor="#9a3412" />
              <stop offset="100%" stopColor="#1c1917" />
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#war-sky)" />
          {/* Eclipse Sun */}
          <circle cx="200" cy="50" r="35" fill="#f97316" />
          <circle cx="208" cy="48" r="33" fill="#450a0a" />
          {/* Golden War Chariot Wheel */}
          <g transform="translate(60, 100)">
            <circle cx="50" cy="50" r="35" fill="none" stroke="#f59e0b" strokeWidth="4" />
            <circle cx="50" cy="50" r="10" fill="#d97706" />
            {[0, 30, 60, 90, 120, 150].map((deg) => (
              <line
                key={deg}
                x1={50 + Math.cos((deg * Math.PI) / 180) * 10}
                y1={50 + Math.sin((deg * Math.PI) / 180) * 10}
                x2={50 + Math.cos((deg * Math.PI) / 180) * 35}
                y2={50 + Math.sin((deg * Math.PI) / 180) * 35}
                stroke="#fbbf24"
                strokeWidth="2"
              />
            ))}
          </g>
          {/* Hanuman Flag Silhouette */}
          <line x1="280" y1="30" x2="280" y2="170" stroke="#d4af37" strokeWidth="3" />
          <path d="M280,30 Q330,45 280,75 Z" fill="#ef4444" stroke="#fef08a" strokeWidth="1" />
          {/* Field of Spears */}
          {[120, 150, 180, 210, 240, 320, 340].map((x, i) => (
            <line key={i} x1={x} y1="130" x2={x + 10} y2="180" stroke="#a1a1aa" strokeWidth="2" />
          ))}
        </svg>
      )}

      {vignetteType === 'vow_of_bhishma' && (
        <svg viewBox="0 0 400 200" className="w-full h-full object-cover">
          <rect width="400" height="200" fill="#030712" />
          {/* Sacred Ganga River Water */}
          <path d="M0,130 Q100,110 200,140 Q300,170 400,130 L400,200 L0,200 Z" fill="#0284c7" opacity="0.6" />
          <path d="M0,150 Q100,140 200,165 Q300,185 400,150 L400,200 L0,200 Z" fill="#0369a1" opacity="0.8" />
          {/* Celestial Beam */}
          <polygon points="180,0 220,0 260,200 140,200" fill="#e0f2fe" opacity="0.15" />
          {/* Altar & Crown */}
          <rect x="160" y="110" width="80" height="40" fill="#1e293b" stroke="#cbd5e1" strokeWidth="2" />
          <path d="M180,110 L190,95 L200,85 L210,95 L220,110 Z" fill="#ffd700" stroke="#fff" strokeWidth="1" />
          <circle cx="200" cy="92" r="3" fill="#ef4444" />
        </svg>
      )}

      {vignetteType === 'karna_crucible' && (
        <svg viewBox="0 0 400 200" className="w-full h-full object-cover">
          <defs>
            <radialGradient id="surya-dawn" cx="50%" cy="100%" r="90%">
              <stop offset="0%" stopColor="#fff7ed" />
              <stop offset="30%" stopColor="#fb923c" />
              <stop offset="70%" stopColor="#c2410c" />
              <stop offset="100%" stopColor="#431407" />
            </radialGradient>
          </defs>
          <rect width="400" height="200" fill="url(#surya-dawn)" />
          {/* Rising Sun Disk */}
          <circle cx="200" cy="180" r="80" fill="#ffedd5" />
          {/* Golden Armour Kavacha Silhouette */}
          <g transform="translate(170, 60)">
            <path d="M10,10 L30,0 L50,10 L45,50 L15,50 Z" fill="#f59e0b" stroke="#fef08a" strokeWidth="2" />
            <circle cx="30" cy="25" r="8" fill="#ea580c" />
          </g>
        </svg>
      )}

      {vignetteType === 'chakravyuha' && (
        <svg viewBox="0 0 400 200" className="w-full h-full object-cover">
          <rect width="400" height="200" fill="#0b0f19" />
          {/* Concentric Spinning Rings */}
          <g transform="translate(200, 100)">
            {[80, 60, 40, 20].map((r, i) => (
              <circle
                key={i}
                cx="0"
                cy="0"
                r={r}
                fill="none"
                stroke={i % 2 === 0 ? "#dc2626" : "#d4af37"}
                strokeWidth={i === 0 ? "3" : "2"}
                strokeDasharray={`${r / 2} ${r / 4}`}
              />
            ))}
            {/* Center Warrior Lotus */}
            <circle cx="0" cy="0" r="8" fill="#fbbf24" />
          </g>
        </svg>
      )}

      {/* Default Fallback Graphic for any unspecified vignette */}
      {(!['gambling_hall', 'kurukshetra', 'vow_of_bhishma', 'karna_crucible', 'chakravyuha'].includes(vignetteType)) && (
        <svg viewBox="0 0 400 200" className="w-full h-full object-cover">
          <rect width="400" height="200" fill="#0a0512" />
          <circle cx="200" cy="100" r="70" fill="none" stroke="#d4af37" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="200" cy="100" r="50" fill="none" stroke="#f59e0b" strokeWidth="1.5" />
          <polygon points="200,60 225,125 175,125" fill="none" stroke="#ffd700" strokeWidth="1.5" />
          <polygon points="200,140 175,75 225,75" fill="none" stroke="#ffd700" strokeWidth="1.5" />
        </svg>
      )}

      {/* Vignette Overlay Shadow Gradients */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
      <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-amber-500/30 rounded-xl" />
    </div>
  );
};
