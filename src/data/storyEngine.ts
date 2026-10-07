export interface StoryPanel {
  bgKey: string;
  charKey?: string;
  speaker?: string;
  dialogue?: string;
  sfx?: string;
  bg?: string;
}

export interface StoryChoice {
  text: string;
  badge: 'Canon' | 'Subversive' | 'Radical' | 'Defiance' | string;
  nextNode: string;
}

export interface StoryNode {
  id?: string;
  panels: StoryPanel[];
  isEnding?: boolean;
  prompt?: string;
  choices?: StoryChoice[];
  divergence?: number;
  verdictTitle?: string;
  verdictDesc?: string;
}

export interface IslandStoryGraph {
  id: string;
  title: string;
  parva: string;
  rootStep: string;
  nodes: Record<string, StoryNode>;
}

export const STORY_GRAPH: Record<string, IslandStoryGraph> = {
  "island-2": {
    id: "island-2",
    title: "The Arena of Anga",
    parva: "Adi Parva",
    rootStep: "i2_start",
    nodes: {
      "i2_start": {
        panels: [
          {
            speaker: "Karna",
            charKey: "karna",
            bgKey: "arena",
            dialogue: "Whatever Arjuna has shown, I shall duplicate—and surpass! Bow and arrow, step forward!",
            sfx: "THWACK!"
          },
          {
            speaker: "Kripacharya",
            charKey: "drona",
            bgKey: "arena",
            dialogue: "Halt! State your father, your lineage, and your kingdom! Princes duel only royal equals. State your blood or yield the sands!"
          }
        ],
        prompt: "Kripacharya challenges Karna's caste. Who intervenes?",
        choices: [
          {
            text: "Duryodhana steps in and crowns Karna King of Anga (Canon)",
            badge: "Canon",
            nextNode: "i2_crowned_anga"
          },
          {
            text: "Kunti steps forward to publicly acknowledge her son",
            badge: "Subversive",
            nextNode: "i2_kunti_reveals"
          },
          {
            text: "Drona overrides lineage rules and commands a duel to the finish",
            badge: "Radical",
            nextNode: "i2_live_duel"
          }
        ]
      },
      "i2_crowned_anga": {
        panels: [
          {
            speaker: "Duryodhana",
            charKey: "duryodhana",
            bgKey: "arena",
            dialogue: "Kings are made of valour, not mere lineage! By royal decree, I pour the holy waters and crown Karna King of Anga right here!"
          },
          {
            speaker: "Karna",
            charKey: "karna",
            bgKey: "arena",
            dialogue: "What can this son of a charioteer give an emperor in return for a kingdom? Ask for my life, Duryodhana, and it is yours!"
          }
        ],
        prompt: "Arjuna stands ready with Gandiva as the sun dips. How does the day conclude?",
        choices: [
          {
            text: "The sun sets behind the hills; combat is forbidden by Kshatriya law (Canon)",
            badge: "Canon",
            nextNode: "i2_canon_conclusion"
          },
          {
            text: "Karna demands they duel under torches through the night",
            badge: "Defiance",
            nextNode: "i2_torch_duel"
          }
        ]
      },
      "i2_canon_conclusion": {
        panels: [
          {
            speaker: "Narrator",
            bgKey: "arena",
            dialogue: "Surya dips beneath the horizon. The conches blow cease-fire. Duryodhana walks out arm-in-arm with his new champion."
          }
        ],
        isEnding: true,
        divergence: 0,
        verdictTitle: "Canonical Itihasa: The Unbreakable Shield",
        verdictDesc: "Karna's eternal debt of gratitude gives Duryodhana the martial shield he needs to wage total war against the Pandavas."
      },
      "i2_kunti_reveals": {
        panels: [
          {
            speaker: "Queen Kunti",
            charKey: "draupadi",
            bgKey: "arena",
            dialogue: "Drop your weapons! He is no charioteer's foster-child! He is my firstborn, sired by Surya before my marriage to Pandu!"
          },
          {
            speaker: "Yudhishthira",
            charKey: "yudhishthira",
            bgKey: "arena",
            dialogue: "Our eldest brother lives! Lay down your bows, Arjuna, Bhima! The crown of Hastinapur belongs to Karna!"
          }
        ],
        isEnding: true,
        divergence: 75,
        verdictTitle: "The Six Pandavas: Kaurava Ambition Extinguished",
        verdictDesc: "With Karna as the recognized eldest Pandava, the brothers form an invincible coalition. Duryodhana has zero political standing to contest the throne."
      },
      "i2_torch_duel": {
        panels: [
          {
            speaker: "Arjuna",
            charKey: "arjuna",
            bgKey: "arena",
            dialogue: "No setting sun will save you! Let the celestial weapons fly!",
            sfx: "CLASH!"
          }
        ],
        isEnding: true,
        divergence: 60,
        verdictTitle: "Nightfall in the Arena",
        verdictDesc: "The premature clash forces the elders to lock the princes in house arrest, altering the timeline before the House of Lac can even be planned."
      },
      "i2_live_duel": {
        panels: [
          {
            speaker: "Guru Drona",
            charKey: "drona",
            bgKey: "arena",
            dialogue: "A true archer's pedigree is forged in combat! Let Gandiva and Vijaya speak!"
          }
        ],
        isEnding: true,
        divergence: 85,
        verdictTitle: "The Unchecked Battle of Prodigies",
        verdictDesc: "Karna and Arjuna clash without rules, forcing Bhishma to disarm both warriors and declare a permanent military armistice."
      }
    }
  },
  "island-1": {
    id: "island-1",
    title: "The Cursed Hunt",
    parva: "Adi Parva",
    rootStep: "i1_start",
    nodes: {
      "i1_start": {
        panels: [
          {
            speaker: "King Pandu",
            charKey: "pandu",
            bgKey: "forest",
            dialogue: "A rare deer mating in the sacred groves... my golden arrow shall not miss!",
            sfx: "TWAAANG!"
          },
          {
            speaker: "Sage Kindama",
            charKey: "pandu",
            bgKey: "forest",
            dialogue: "Cruel king! You struck down a sage in love! Receive my dying curse: intimacy brings instant death!",
            sfx: "KRZZZT!"
          }
        ],
        prompt: "Pandu stands cursed with instant death upon intimacy. How shall the King respond?",
        choices: [
          { text: "Renounce the crown for forest penance (Canon)", badge: "Canon", nextNode: "i1_penance" },
          { text: "Remain Emperor & seek ritual Niyoga in Hastinapur", badge: "Subversive", nextNode: "i1_niyoga" }
        ]
      },
      "i1_penance": {
        panels: [
          {
            speaker: "King Pandu",
            charKey: "pandu",
            bgKey: "forest",
            dialogue: "My crown is tainted. Kunti, invoke the devas to grant us sons of divine lineage!"
          }
        ],
        isEnding: true,
        divergence: 0,
        verdictTitle: "The Forest Penance & Birth of Pandavas",
        verdictDesc: "Pandu lives as an ascetic in Shatashringa while Kunti invokes the gods to father the five Pandava princes."
      },
      "i1_niyoga": {
        panels: [
          {
            speaker: "King Pandu",
            charKey: "pandu",
            bgKey: "forest",
            dialogue: "A true king atones through righteous rule! Vidura, assemble the royal council in the capital!"
          }
        ],
        isEnding: true,
        divergence: 45,
        verdictTitle: "The Pragmatic Emperor",
        verdictDesc: "Pandu rules from the throne while Kunti invokes the gods inside the royal palace with court sanction."
      }
    }
  },
  "island-3": {
    id: "island-3",
    title: "The House of Lac",
    parva: "Adi Parva",
    rootStep: "i3_start",
    nodes: {
      "i3_start": {
        panels: [
          {
            speaker: "Yudhishthira",
            charKey: "yudhishthira",
            bgKey: "lac",
            dialogue: "Vidura warned us in secret code: The palace resin foundation is primed for fire!"
          },
          {
            speaker: "Bhima",
            charKey: "bhima",
            bgKey: "lac",
            dialogue: "We must act before Purochana touches torch to wall!",
            sfx: "KRZZZT!"
          }
        ],
        prompt: "The lac palace catches fire. How do the Pandavas escape Varanavata?",
        choices: [
          { text: "Escape via Vidura's secret miner's tunnel (Canon)", badge: "Canon", nextNode: "i3_tunnel" },
          { text: "Arrest Purochana publicly and expose the assassination plot", badge: "Subversive", nextNode: "i3_arrest" }
        ]
      },
      "i3_tunnel": {
        panels: [
          {
            speaker: "Bhima",
            charKey: "bhima",
            bgKey: "forest",
            dialogue: "I carry Mother Kunti and my brothers through the secret tunnel into the forest!"
          }
        ],
        isEnding: true,
        divergence: 0,
        verdictTitle: "The Phoenix in the Forest",
        verdictDesc: "Hastinapur believes the Pandavas perished in the inferno, allowing them to travel incognito to Panchala."
      },
      "i3_arrest": {
        panels: [
          {
            speaker: "Bhima",
            charKey: "bhima",
            bgKey: "lac",
            dialogue: "Purochana is bound in iron chains! He confesses the murder plot before the citizens!"
          }
        ],
        isEnding: true,
        divergence: 55,
        verdictTitle: "Duryodhana's Public Disgrace",
        verdictDesc: "Purochana's confession forces Dhritarashtra to publicly banish Duryodhana for treason."
      }
    }
  },
  "island-4": {
    id: "island-4",
    title: "Draupadi's Swayamvara",
    parva: "Adi Parva",
    rootStep: "i4_start",
    nodes: {
      "i4_start": {
        panels: [
          {
            speaker: "Arjuna",
            charKey: "arjuna",
            bgKey: "swayamvara",
            dialogue: "I draw the Shiva bow and strike the rotating fish eye reflected in water!",
            sfx: "DHA-DHAM!"
          },
          {
            speaker: "Draupadi",
            charKey: "draupadi",
            bgKey: "swayamvara",
            dialogue: "I garland the victor! But Kunti speaks without looking: Share whatever alms you brought."
          }
        ],
        prompt: "Mother Kunti commands the brothers to share equal alms. How is her word fulfilled?",
        choices: [
          { text: "Five-Fold Marriage to all five Pandava brothers (Canon)", badge: "Canon", nextNode: "i4_fivefold" },
          { text: "Clarify words: Draupadi weds Arjuna alone with Vyasa sanction", badge: "Subversive", nextNode: "i4_arjuna_alone" }
        ]
      },
      "i4_fivefold": {
        panels: [
          {
            speaker: "Yudhishthira",
            charKey: "yudhishthira",
            bgKey: "swayamvara",
            dialogue: "Mother's word is truth. Draupadi shall be Empress to all five brothers."
          }
        ],
        isEnding: true,
        divergence: 0,
        verdictTitle: "The Five-Fold Alliance",
        verdictDesc: "Draupadi becomes the common thread holding five super-warriors together as a unified force."
      },
      "i4_arjuna_alone": {
        panels: [
          {
            speaker: "Arjuna",
            charKey: "arjuna",
            bgKey: "swayamvara",
            dialogue: "Sage Vyasa confirms: she won her groom through archery and weds Arjuna alone."
          }
        ],
        isEnding: true,
        divergence: 60,
        verdictTitle: "The Multi-Kingdom Coalition",
        verdictDesc: "Separate royal marriages expand the Pandava diplomatic network across northern Aryavarta."
      }
    }
  },
  "island-5": {
    id: "island-5",
    title: "The Khandava Partition",
    parva: "Sabha Parva",
    rootStep: "i5_start",
    nodes: {
      "i5_start": {
        panels: [
          {
            speaker: "Lord Krishna",
            charKey: "krishna",
            bgKey: "khandava",
            dialogue: "Agni seeks to consume Khandava forest. Arjuna, rain arrows to block the sky!"
          },
          {
            speaker: "Mayasura",
            charKey: "arjuna",
            bgKey: "khandava",
            dialogue: "Spare my life, Arjuna! I shall build you a palace unmatched in the three worlds!",
            sfx: "KRZZZT!"
          }
        ],
        prompt: "Lord Agni requests Khandava forest. How shall Arjuna and Krishna proceed?",
        choices: [
          { text: "Burn Khandava & build Mayasabha Palace (Canon)", badge: "Canon", nextNode: "i5_mayasabha" },
          { text: "Negotiate sanctuary treaty with Takshaka Nagas", badge: "Subversive", nextNode: "i5_nagas" }
        ]
      },
      "i5_mayasabha": {
        panels: [
          {
            speaker: "Arjuna",
            charKey: "arjuna",
            bgKey: "khandava",
            dialogue: "Agni consumes the forest! Mayasura constructs the magical Mayasabha!"
          }
        ],
        isEnding: true,
        divergence: 0,
        verdictTitle: "The Jewel of Indraprastha",
        verdictDesc: "The unmatched splendor of Mayasabha ignites Duryodhana's consuming envy."
      },
      "i5_nagas": {
        panels: [
          {
            speaker: "Lord Krishna",
            charKey: "krishna",
            bgKey: "khandava",
            dialogue: "We negotiate with Takshaka's Nagas! Half the forest remains a serpent sanctuary."
          }
        ],
        isEnding: true,
        divergence: 50,
        verdictTitle: "The Serpent Treaty",
        verdictDesc: "Indraprastha gains the secret backing of the Naga realms, securing its borders permanently."
      }
    }
  },
  "island-6": {
    id: "island-6",
    title: "The Hall of Loaded Dice",
    parva: "Sabha Parva",
    rootStep: "i6_start",
    nodes: {
      "i6_start": {
        panels: [
          {
            speaker: "Shakuni",
            charKey: "shakuni",
            bgKey: "dice",
            dialogue: "What is an emperor who fears dice? Stake Indraprastha, Yudhishthira!",
            sfx: "CLACK-CLACK!"
          },
          {
            speaker: "Yudhishthira",
            charKey: "yudhishthira",
            bgKey: "dice",
            dialogue: "A Kshatriya never rejects a challenge to the board. The stakes are laid!",
            sfx: "DHA-DHAM!"
          }
        ],
        prompt: "Shakuni's rigged dice are primed. How do the Pandavas navigate the invitation?",
        choices: [
          { text: "Accept the Dicing Challenge & Stake Realm (Canon)", badge: "Canon", nextNode: "i6_vastraharan" },
          { text: "Vidura invokes Royal Veto to cancel game", badge: "Subversive", nextNode: "i6_veto" }
        ]
      },
      "i6_vastraharan": {
        panels: [
          {
            speaker: "Draupadi",
            charKey: "draupadi",
            bgKey: "dice",
            dialogue: "Shame upon this court! My hair remains untied until washed in Dushasana's blood!"
          }
        ],
        isEnding: true,
        divergence: 0,
        verdictTitle: "Vastraharan & The Inevitable War",
        verdictDesc: "The moral legitimacy of the elders crumbles; blood vows make total war unavoidable."
      },
      "i6_veto": {
        panels: [
          {
            speaker: "Vidura",
            charKey: "yudhishthira",
            bgKey: "dice",
            dialogue: "Halt this unholy gamble! Dhritarashtra, overturn this table before your sons burn the world!"
          }
        ],
        isEnding: true,
        divergence: 60,
        verdictTitle: "The Fragile Peace",
        verdictDesc: "Indraprastha retains its independence, isolating Duryodhana into bitter impotence."
      }
    }
  },
  "island-7": {
    id: "island-7",
    title: "The Banishment Pact",
    parva: "Vana Parva",
    rootStep: "i7_start",
    nodes: {
      "i7_start": {
        panels: [
          {
            speaker: "Draupadi",
            charKey: "draupadi",
            bgKey: "exile",
            dialogue: "How long shall we eat wild roots while Duryodhana sleeps on silk?"
          },
          {
            speaker: "Bhima",
            charKey: "bhima",
            bgKey: "exile",
            dialogue: "My mace rusts in the damp forest! Give the command and I crush Hastinapur's gates!"
          }
        ],
        prompt: "Bhima and Draupadi urge Yudhishthira to march back on Hastinapur immediately. What is ordered?",
        choices: [
          { text: "Endure 12-year wilderness exile oath (Canon)", badge: "Canon", nextNode: "i7_endure" },
          { text: "Arjuna seeks Pashupatastra early for ultimatum", badge: "Subversive", nextNode: "i7_pashupata" }
        ]
      },
      "i7_endure": {
        panels: [
          {
            speaker: "Yudhishthira",
            charKey: "yudhishthira",
            bgKey: "exile",
            dialogue: "Truth is the foundation of the cosmos. We fulfill the 12-year exile vow to the last second."
          }
        ],
        isEnding: true,
        divergence: 0,
        verdictTitle: "The Cosmic Tempering",
        verdictDesc: "12 years of spiritual penance transform the Pandavas into god-like warriors ready for Kurukshetra."
      },
      "i7_pashupata": {
        panels: [
          {
            speaker: "Arjuna",
            charKey: "arjuna",
            bgKey: "exile",
            dialogue: "I obtain Shiva's Pashupatastra early and offer Hastinapur one final surrender deadline!"
          }
        ],
        isEnding: true,
        divergence: 55,
        verdictTitle: "The Nuclear Ultimatum",
        verdictDesc: "Possession of the Pashupatastra forces Bhishma and Drona to compel Duryodhana to negotiate."
      }
    }
  },
  "island-8": {
    id: "island-8",
    title: "The Shadow in Matsya",
    parva: "Virata Parva",
    rootStep: "i8_start",
    nodes: {
      "i8_start": {
        panels: [
          {
            speaker: "Kichaka",
            charKey: "draupadi",
            bgKey: "matsya",
            dialogue: "Beautiful Sairandhri... tonight you shall come to my private chamber!",
            sfx: "SHING!"
          },
          {
            speaker: "Bhima",
            charKey: "bhima",
            bgKey: "matsya",
            dialogue: "Tell Kichaka to meet you in the dark music hall... I shall be waiting under the sheet!",
            sfx: "DHA-DHAM!"
          }
        ],
        prompt: "Kichaka enters the dark palace hall expecting Draupadi. Bhima waits in shadows. How do they strike?",
        choices: [
          { text: "Bhima crushes Kichaka in dark music hall (Canon)", badge: "Canon", nextNode: "i8_crush" },
          { text: "Expose identity & claim King Virata protection", badge: "Subversive", nextNode: "i8_expose" }
        ]
      },
      "i8_crush": {
        panels: [
          {
            speaker: "Bhima",
            charKey: "bhima",
            bgKey: "matsya",
            dialogue: "I roll Kichaka into a ball of crushed bone! Not a single scream escapes!"
          }
        ],
        isEnding: true,
        divergence: 0,
        verdictTitle: "The Secret Retribution",
        verdictDesc: "Kichaka's elimination clears the way for the Pandavas to reveal themselves on the 365th day."
      },
      "i8_expose": {
        panels: [
          {
            speaker: "Yudhishthira",
            charKey: "yudhishthira",
            bgKey: "matsya",
            dialogue: "King Virata, behold Emperor Yudhishthira and the hero Bhima!"
          }
        ],
        isEnding: true,
        divergence: 50,
        verdictTitle: "The Matsya Royal Compact",
        verdictDesc: "King Virata pledges his entire royal army to the Pandavas on the spot."
      }
    }
  },
  "island-9": {
    id: "island-9",
    title: "The Chamber of the God",
    parva: "Udyoga Parva",
    rootStep: "i9_start",
    nodes: {
      "i9_start": {
        panels: [
          {
            speaker: "Duryodhana",
            charKey: "duryodhana",
            bgKey: "dwarka",
            dialogue: "I arrived first! I take the place of honor at Krishna's head while he slumbers!"
          },
          {
            speaker: "Lord Krishna",
            charKey: "krishna",
            bgKey: "dwarka",
            dialogue: "I see Arjuna at my feet first. Both shall choose: My Narayani Sena OR my unarmed self!",
            sfx: "TWAAANG!"
          }
        ],
        prompt: "Krishna offers his aid: His million Narayani warriors OR his unarmed self. What is chosen?",
        choices: [
          { text: "Arjuna chooses unarmed Krishna as charioteer (Canon)", badge: "Canon", nextNode: "i9_charioteer" },
          { text: "Duryodhana demands both army & Lord to avoid war", badge: "Subversive", nextNode: "i9_both" }
        ]
      },
      "i9_charioteer": {
        panels: [
          {
            speaker: "Arjuna",
            charKey: "arjuna",
            bgKey: "dwarka",
            dialogue: "I choose Vasudeva alone! Be my charioteer, Lord, and guide my bow through darkness!"
          }
        ],
        isEnding: true,
        divergence: 0,
        verdictTitle: "The Charioteer of Destiny",
        verdictDesc: "Krishna becomes Arjuna's guide, setting the stage for the revelation of the Bhagavad Gita."
      },
      "i9_both": {
        panels: [
          {
            speaker: "Duryodhana",
            charKey: "duryodhana",
            bgKey: "dwarka",
            dialogue: "Krishna shall remain neutral judge in Dwarka while the armies clash!"
          }
        ],
        isEnding: true,
        divergence: 65,
        verdictTitle: "The Mortal Clash",
        verdictDesc: "Without Krishna on the battlefield, the cosmic balance shifts to a purely mortal war."
      }
    }
  },
  "island-10": {
    id: "island-10",
    title: "The Fallen Guru",
    parva: "Drona Parva",
    rootStep: "i10_start",
    nodes: {
      "i10_start": {
        panels: [
          {
            speaker: "Lord Krishna",
            charKey: "krishna",
            bgKey: "kurukshetra",
            dialogue: "Drona is invincible while holding his bow! Only news of Ashwatthama's death will break his grip."
          },
          {
            speaker: "Bhima",
            charKey: "bhima",
            bgKey: "kurukshetra",
            dialogue: "I have slain Indravarman's elephant named Ashwatthama! Drona turns to Yudhishthira!",
            sfx: "DHA-DHAM!"
          }
        ],
        prompt: "Drona turns to Yudhishthira for the absolute truth. How shall Yudhishthira answer?",
        choices: [
          { text: "Speaks half-truth: Ashwatthama is dead... gaja iti (Canon)", badge: "Canon", nextNode: "i10_halftruth" },
          { text: "Refuses to lie & fights Drona fairly", badge: "Subversive", nextNode: "i10_fair" }
        ]
      },
      "i10_halftruth": {
        panels: [
          {
            speaker: "Yudhishthira",
            charKey: "yudhishthira",
            bgKey: "kurukshetra",
            dialogue: "Ashwatthama is dead... (gaja iti - whether man or elephant)..."
          }
        ],
        isEnding: true,
        divergence: 0,
        verdictTitle: "The Chariot Touches Earth",
        verdictDesc: "Yudhishthira's single moral compromise causes his divine levitating chariot to touch the dusty ground."
      },
      "i10_fair": {
        panels: [
          {
            speaker: "Yudhishthira",
            charKey: "yudhishthira",
            bgKey: "kurukshetra",
            dialogue: "Master Drona! An elephant named Ashwatthama was slain by Bhima. Your son lives!"
          }
        ],
        isEnding: true,
        divergence: 55,
        verdictTitle: "Unstained Righteousness",
        verdictDesc: "Yudhishthira preserves his untarnished truth, though the cost in Pandava lives is immense."
      }
    }
  }
};

export function getIslandStartNode(islandId: string): string {
  const graph = STORY_GRAPH[islandId] || STORY_GRAPH["island-2"];
  return graph ? graph.rootStep : "i2_start";
}
