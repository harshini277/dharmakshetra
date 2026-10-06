export interface CharacterArt {
  name: string;
  avatarUrl: string;
  expressions: Record<string, string>;
  prompt: string;
}

export interface IslandComicAsset {
  islandId: string;
  islandIcon: string;
  bgIllustration: string;
  leyLineCoords: { x: number; y: number }; // Percentage position on overworld map (0-100)
  characters: Record<string, CharacterArt>;
}

export const COMIC_ART_MANIFEST: Record<string, IslandComicAsset> = {
  'island-1': {
    islandId: 'island-1',
    islandIcon: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
    bgIllustration: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1600&q=80',
    leyLineCoords: { x: 15, y: 35 },
    characters: {
      shakuni: {
        name: 'Shakuni',
        avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
        expressions: {
          smirking: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
          normal: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
        },
        prompt: 'Graphic novel portrait of Shakuni, sinister ancient master manipulator, scarred visage, royal silk garments, holding glowing carved ivory dice, malicious crooked smirk, heavy ink outlines, Frank Miller and Mike Mignola comic aesthetic, high contrast dramatic rim lighting --ar 3:4'
      },
      yudhishthira: {
        name: 'Yudhishthira',
        avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
        expressions: {
          despair: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
          normal: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=800&q=80'
        },
        prompt: 'Dharmaraja Yudhishthira, emperor in ancient Indian gambling hall, head in trembling hands, sweat dripping, golden crown askew, trapped by honor, dark dramatic comic book art, vivid amber lighting --ar 3:4'
      },
      duryodhana: {
        name: 'Duryodhana',
        avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
        expressions: {
          enraged: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80'
        },
        prompt: 'Crown Prince Duryodhana, arrogant warrior prince, heavy obsidian armor, golden mace across shoulders, sinister triumphant laugh, comic book cover art style, cel-shaded shadows --ar 3:4'
      }
    }
  },

  'island-2': {
    islandId: 'island-2',
    islandIcon: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
    bgIllustration: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1600&q=80',
    leyLineCoords: { x: 30, y: 25 },
    characters: {
      arjuna: {
        name: 'Arjuna',
        avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
        expressions: {
          despair: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
          normal: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
        },
        prompt: 'Arjuna dropping his golden bow Gandiva, tears in eyes, trembling warrior hands, battlefield of Kurukshetra behind, dramatic comic lineart, high contrast cyan and gold aura --ar 3:4'
      },
      krishna: {
        name: 'Lord Krishna',
        avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
        expressions: {
          divine: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80'
        },
        prompt: 'Lord Krishna as divine charioteer, peacock feather in crown, glowing blue skin, eyes radiating eternal cosmic wisdom, Vishvarupa cosmic form behind him, epic graphic novel style --ar 3:4'
      }
    }
  },

  'island-3': {
    islandId: 'island-3',
    islandIcon: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
    bgIllustration: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80',
    leyLineCoords: { x: 45, y: 45 },
    characters: {
      bhishma: {
        name: 'Devavrata (Bhishma)',
        avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
        expressions: {
          normal: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80'
        },
        prompt: 'Young Prince Devavrata taking terrifying oath of celibacy, silver armor, hand raised to celestial skies, river Ganga raging behind, golden aura, graphic novel comic art --ar 3:4'
      }
    }
  },

  'island-4': {
    islandId: 'island-4',
    islandIcon: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80',
    bgIllustration: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
    leyLineCoords: { x: 60, y: 20 },
    characters: {
      karna: {
        name: 'Karna',
        avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
        expressions: {
          normal: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80'
        },
        prompt: 'Sun-born warrior Karna slicing his glowing golden Kavacha armor off his chest at sunrise riverbank, blood mixing with solar light, extreme courage, comic book splash art --ar 3:4'
      },
      kunti: {
        name: 'Queen Kunti',
        avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
        expressions: {
          normal: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80'
        },
        prompt: 'Queen Kunti weeping at sunrise river bank, royal silk robes, pleading eyes to Karna, dark comic art, high emotional contrast --ar 3:4'
      }
    }
  },

  'island-5': {
    islandId: 'island-5',
    islandIcon: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&w=600&q=80',
    bgIllustration: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=80',
    leyLineCoords: { x: 75, y: 35 },
    characters: {
      purochana: {
        name: 'Purochana',
        avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
        expressions: {
          normal: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80'
        },
        prompt: 'Assassin Purochana holding torch inside wax palace, flames reflecting in sinister eyes, Frank Miller comic style --ar 3:4'
      }
    }
  },

  'island-6': {
    islandId: 'island-6',
    islandIcon: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
    bgIllustration: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1600&q=80',
    leyLineCoords: { x: 85, y: 55 },
    characters: {
      drona: {
        name: 'Guru Drona',
        avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
        expressions: {
          despair: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80'
        },
        prompt: 'Guru Drona dropping his divine weapons on battlefield upon hearing of his son, tears streaming down aged face, battlefield flames behind, comic book master art --ar 3:4'
      }
    }
  },

  'island-7': {
    islandId: 'island-7',
    islandIcon: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
    bgIllustration: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1600&q=80',
    leyLineCoords: { x: 70, y: 70 },
    characters: {
      abhimanyu: {
        name: 'Abhimanyu',
        avatarUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80',
        expressions: {
          enraged: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80'
        },
        prompt: '16 year old hero Abhimanyu holding broken chariot wheel as shield inside Chakravyuha, surrounded by 7 enemy maharathis, fearless lion gaze, cel shaded graphic novel art --ar 3:4'
      }
    }
  },

  'island-8': {
    islandId: 'island-8',
    islandIcon: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=600&q=80',
    bgIllustration: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1600&q=80',
    leyLineCoords: { x: 50, y: 80 },
    characters: {
      draupadi: {
        name: 'Empress Draupadi',
        avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
        expressions: {
          enraged: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80'
        },
        prompt: 'Empress Draupadi in forest exile, unbound long black hair flowing like dark fire, eyes blazing with sacred vengeance, crimson robes, comic art style --ar 3:4'
      }
    }
  },

  'island-9': {
    islandId: 'island-9',
    islandIcon: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
    bgIllustration: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80',
    leyLineCoords: { x: 30, y: 75 },
    characters: {
      bheema: {
        name: 'Bheema',
        avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
        expressions: {
          enraged: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80'
        },
        prompt: 'Giant warrior Bheema swinging heavy iron mace, breaking earth, veins popping, fiery crimson background, Asura strength, comic book splash panel --ar 3:4'
      }
    }
  },

  'island-10': {
    islandId: 'island-10',
    islandIcon: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80',
    bgIllustration: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80',
    leyLineCoords: { x: 15, y: 60 },
    characters: {
      yudhishthira: {
        name: 'Yudhishthira',
        avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80',
        expressions: {
          normal: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80'
        },
        prompt: 'Old King Yudhishthira on snowy Himalayan mountain peak Mount Meru, black stray dog shivering beside him, Indra golden chariot descending from heavens, celestial comic art --ar 3:4'
      }
    }
  }
};
