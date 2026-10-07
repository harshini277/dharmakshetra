export interface StoryPanel {
  bgKey: string;
  charKey?: string;
  speaker?: string;
  dialogue?: string;
  sfx?: string;
}

export interface StoryChoice {
  badge: 'Canonical' | 'Subversive' | 'Radical' | string;
  text: string;
  nextNode: string;
}

export interface StoryNode {
  id: string;
  panels: StoryPanel[];
  isEnding: boolean;
  prompt?: string;
  choices?: StoryChoice[];
  divergence?: number;
  verdictTitle?: string;
  verdictDesc?: string;
}

export interface IslandStoryGraph {
  islandId: string;
  title: string;
  parva: string;
  rootStep: string;
  nodes: Record<string, StoryNode>;
}

export const STORY_GRAPH: Record<string, IslandStoryGraph> = {
  "island-1": {
    islandId: "island-1",
    title: "The Cursed Hunt of Shatashringa",
    parva: "Adi Parva",
    rootStep: "node-1-1",
    nodes: {
      "node-1-1": {
        id: "node-1-1",
        panels: [
          {
            bgKey: "forest",
            speaker: "King Pandu",
            charKey: "pandu",
            dialogue: "A rare deer mating in the sacred groves... my golden arrow shall not miss!",
            sfx: "TWAAANG!"
          },
          {
            bgKey: "forest",
            speaker: "Sage Kindama",
            charKey: "pandu",
            dialogue: "Cruel king! You struck down a sage in love! Receive my dying curse: intimacy brings instant death!",
            sfx: "KRZZZT!"
          }
        ],
        isEnding: false,
        prompt: "Pandu stands cursed. How shall the King of Hastinapur respond?",
        choices: [
          { badge: "Canonical", text: "Renounce the crown for forest penance", nextNode: "node-1-canon" },
          { badge: "Subversive", text: "Remain Emperor and seek sages' ritual solution", nextNode: "node-1-subversive" },
          { badge: "Radical", text: "Abdicate entirely to Dhritarashtra immediately", nextNode: "node-1-radical" }
        ]
      },
      "node-1-canon": {
        id: "node-1-canon",
        panels: [
          {
            bgKey: "forest",
            speaker: "King Pandu",
            charKey: "pandu",
            dialogue: "My crown is tainted. Kunti, invoke the devas to grant us sons of divine lineage!"
          }
        ],
        isEnding: true,
        divergence: 0,
        verdictTitle: "The Forest Penance & Birth of Pandavas",
        verdictDesc: "Pandu lives in the wilderness as a ascetic king. Kunti invokes Dharma, Vayu, and Indra to father the Pandava princes."
      },
      "node-1-subversive": {
        id: "node-1-subversive",
        panels: [
          {
            bgKey: "forest",
            speaker: "King Pandu",
            charKey: "pandu",
            dialogue: "A true king atones through righteous rule! Vidura, assemble the royal council!"
          }
        ],
        isEnding: true,
        divergence: 45,
        verdictTitle: "The Pragmatic Emperor",
        verdictDesc: "Pandu rules Hastinapur from the throne while Kunti invokes the Devas inside the royal palace with court sanction."
      },
      "node-1-radical": {
        id: "node-1-radical",
        panels: [
          {
            bgKey: "forest",
            speaker: "King Pandu",
            charKey: "pandu",
            dialogue: "I formally sever all claims to the throne for myself and my seed. Dhritarashtra is Emperor absolute!"
          }
        ],
        isEnding: true,
        divergence: 85,
        verdictTitle: "Kaurava Absolute Hegemony",
        verdictDesc: "Dhritarashtra assumes absolute imperial power, eliminating the Pandava succession dispute entirely."
      }
    }
  },
  "island-2": {
    islandId: "island-2",
    title: "The Arena of Anga",
    parva: "Adi Parva",
    rootStep: "node-2-1",
    nodes: {
      "node-2-1": {
        id: "node-2-1",
        panels: [
          {
            bgKey: "arena",
            speaker: "Guru Drona",
            charKey: "drona",
            dialogue: "Witness Arjuna's martial supremacy in the tournament of Hastinapur!"
          },
          {
            bgKey: "arena",
            speaker: "Karna",
            charKey: "karna",
            dialogue: "Boast not, prince! Whatever Arjuna has shown, I shall duplicate—and surpass!",
            sfx: "THWACK!"
          }
        ],
        isEnding: false,
        prompt: "Kripacharya demands Karna prove his royal lineage before dueling Arjuna. How does Karna react?",
        choices: [
          { badge: "Canonical", text: "Accept Duryodhana's Crown of Anga", nextNode: "node-2-canon" },
          { badge: "Subversive", text: "Demonstrate Divine Astras without royal title", nextNode: "node-2-subversive" },
          { badge: "Radical", text: "Challenge Drona directly to single combat", nextNode: "node-2-radical" }
        ]
      },
      "node-2-canon": {
        id: "node-2-canon",
        panels: [
          {
            bgKey: "arena",
            speaker: "Karna",
            charKey: "karna",
            dialogue: "Duryodhana crowns me King of Anga! My bow and loyalty belong forever to the Kuru prince!"
          }
        ],
        isEnding: true,
        divergence: 0,
        verdictTitle: "The Eternal Bond of Anga",
        verdictDesc: "Karna's eternal gratitude to Duryodhana binds him to the Kaurava camp as their military backbone."
      },
      "node-2-subversive": {
        id: "node-2-subversive",
        panels: [
          {
            bgKey: "arena",
            speaker: "Karna",
            charKey: "karna",
            dialogue: "Valour defines a Kshatriya, not bloodlines! Behold the Agneyastra!"
          }
        ],
        isEnding: true,
        divergence: 50,
        verdictTitle: "Karna the Independent Sovereign",
        verdictDesc: "Karna refuses Duryodhana's patronage, becoming a neutral warrior king respected by all kingdoms."
      },
      "node-2-radical": {
        id: "node-2-radical",
        panels: [
          {
            bgKey: "arena",
            speaker: "Karna",
            charKey: "karna",
            dialogue: "If your archers hide behind lineage rules, then master Drona, test your bow against mine!"
          }
        ],
        isEnding: true,
        divergence: 90,
        verdictTitle: "The Shattered Hierarchy",
        verdictDesc: "Karna disarms Guru Drona in three arrows, shattering Arjuna's undisputed reputation as the world's top archer."
      }
    }
  },
  "island-3": {
    islandId: "island-3",
    title: "The House of Lac",
    parva: "Adi Parva",
    rootStep: "node-3-1",
    nodes: {
      "node-3-1": {
        id: "node-3-1",
        panels: [
          {
            bgKey: "lac",
            speaker: "Yudhishthira",
            charKey: "yudhishthira",
            dialogue: "Vidura warned us in secret code: The palace walls melt under candle heat!"
          },
          {
            bgKey: "lac",
            speaker: "Bhima",
            charKey: "bhima",
            dialogue: "The resin foundation is primed for fire! We must act before midnight!",
            sfx: "KRZZZT!"
          }
        ],
        isEnding: false,
        prompt: "The lac palace catches fire. How do the Pandavas escape Varanavata?",
        choices: [
          { badge: "Canonical", text: "Escape via Vidura's secret underground tunnel", nextNode: "node-3-canon" },
          { badge: "Subversive", text: "Arrest Purochana publicly and expose the plot", nextNode: "node-3-subversive" },
          { badge: "Radical", text: "Bhima carries family over flaming roof in sky leap", nextNode: "node-3-radical" }
        ]
      },
      "node-3-canon": {
        id: "node-3-canon",
        panels: [
          {
            bgKey: "forest",
            speaker: "Bhima",
            charKey: "bhima",
            dialogue: "I carry Mother Kunti and my brothers through the miner's tunnel into the forest!"
          }
        ],
        isEnding: true,
        divergence: 0,
        verdictTitle: "The Phoenix in the Forest",
        verdictDesc: "Hastinapur believes the Pandavas perished, allowing them to travel incognito to Panchala."
      },
      "node-3-subversive": {
        id: "node-3-subversive",
        panels: [
          {
            bgKey: "lac",
            speaker: "Bhima",
            charKey: "bhima",
            dialogue: "Purochana is bound in iron chains! He confesses the murder plot before the citizens!"
          }
        ],
        isEnding: true,
        divergence: 55,
        verdictTitle: "Duryodhana's Public Disgrace",
        verdictDesc: "Purochana's confession forces Dhritarashtra to publicly exile Duryodhana for treason."
      },
      "node-3-radical": {
        id: "node-3-radical",
        panels: [
          {
            bgKey: "arena",
            speaker: "Bhima",
            charKey: "bhima",
            dialogue: "We march straight back to Hastinapur carrying charred lac beams to confront the King!"
          }
        ],
        isEnding: true,
        divergence: 85,
        verdictTitle: "Direct Royal Confrontation",
        verdictDesc: "The Pandavas refuse secrecy and force an immediate high trial in the Kuru capital."
      }
    }
  },
  "island-4": {
    islandId: "island-4",
    title: "Draupadi's Swayamvara",
    parva: "Adi Parva",
    rootStep: "node-4-1",
    nodes: {
      "node-4-1": {
        id: "node-4-1",
        panels: [
          {
            bgKey: "swayamvara",
            speaker: "Arjuna",
            charKey: "arjuna",
            dialogue: "I draw the Shiva bow and pierce the rotating fish eye reflected in water!",
            sfx: "DHA-DHAM!"
          },
          {
            bgKey: "swayamvara",
            speaker: "Draupadi",
            charKey: "draupadi",
            dialogue: "I garland the victor! But Kunti speaks without looking: Share whatever alms you brought."
          }
        ],
        isEnding: false,
        prompt: "Mother Kunti commands the brothers to share equal alms. How is her word fulfilled?",
        choices: [
          { badge: "Canonical", text: "Five-Fold Marriage to all five Pandavas", nextNode: "node-4-canon" },
          { badge: "Subversive", text: "Clarify words: Draupadi weds Arjuna alone", nextNode: "node-4-subversive" },
          { badge: "Radical", text: "Draupadi assumes independent regency of Panchala", nextNode: "node-4-radical" }
        ]
      },
      "node-4-canon": {
        id: "node-4-canon",
        panels: [
          {
            bgKey: "swayamvara",
            speaker: "Yudhishthira",
            charKey: "yudhishthira",
            dialogue: "Mother's word is truth. Draupadi shall be Empress to all five brothers."
          }
        ],
        isEnding: true,
        divergence: 0,
        verdictTitle: "The Five-Fold Alliance",
        verdictDesc: "Draupadi becomes the common thread holding five super-warriors together as a unified force."
      },
      "node-4-subversive": {
        id: "node-4-subversive",
        panels: [
          {
            bgKey: "swayamvara",
            speaker: "Arjuna",
            charKey: "arjuna",
            dialogue: "Sage Vyasa confirms: she won her groom through archery and weds Arjuna alone."
          }
        ],
        isEnding: true,
        divergence: 60,
        verdictTitle: "The Multi-Kingdom Coalition",
        verdictDesc: "Separate royal marriages expand the Pandava diplomatic network across northern Aryavarta."
      },
      "node-4-radical": {
        id: "node-4-radical",
        panels: [
          {
            bgKey: "swayamvara",
            speaker: "Draupadi",
            charKey: "draupadi",
            dialogue: "I am born of holy sacrificial fire! I rule Panchala in my own divine right!"
          }
        ],
        isEnding: true,
        divergence: 90,
        verdictTitle: "Empress of Fire",
        verdictDesc: "Draupadi takes the throne of Panchala herself, transforming Panchala into the supreme power."
      }
    }
  },
  "island-5": {
    islandId: "island-5",
    title: "The Khandava Partition",
    parva: "Sabha Parva",
    rootStep: "node-5-1",
    nodes: {
      "node-5-1": {
        id: "node-5-1",
        panels: [
          {
            bgKey: "khandava",
            speaker: "Lord Krishna",
            charKey: "krishna",
            dialogue: "Agni seeks to consume Khandava forest. Arjuna, rain arrows to block the sky!"
          },
          {
            bgKey: "khandava",
            speaker: "Mayasura",
            charKey: "arjuna",
            dialogue: "Spare my life, Arjuna! I shall build you a palace unmatched in the three worlds!",
            sfx: "KRZZZT!"
          }
        ],
        isEnding: false,
        prompt: "Lord Agni requests Khandava forest. How shall Arjuna and Krishna proceed?",
        choices: [
          { badge: "Canonical", text: "Burn Khandava & build Mayasabha Palace", nextNode: "node-5-canon" },
          { badge: "Subversive", text: "Build Indraprastha with Naga sanctuary treaty", nextNode: "node-5-subversive" },
          { badge: "Radical", text: "Refuse Agni & establish woodland eco-citadel", nextNode: "node-5-radical" }
        ]
      },
      "node-5-canon": {
        id: "node-5-canon",
        panels: [
          {
            bgKey: "khandava",
            speaker: "Arjuna",
            charKey: "arjuna",
            dialogue: "Agni consumes the forest! Mayasura constructs the magical Mayasabha!"
          }
        ],
        isEnding: true,
        divergence: 0,
        verdictTitle: "The Jewel of Indraprastha",
        verdictDesc: "The unmatched splendor of Mayasabha ignites Duryodhana's consuming envy."
      },
      "node-5-subversive": {
        id: "node-5-subversive",
        panels: [
          {
            bgKey: "khandava",
            speaker: "Lord Krishna",
            charKey: "krishna",
            dialogue: "We negotiate with Takshaka's Nagas! Half the forest remains a serpent sanctuary."
          }
        ],
        isEnding: true,
        divergence: 50,
        verdictTitle: "The Serpent Treaty",
        verdictDesc: "Indraprastha gains the secret backing of the Naga realms, securing its borders permanently."
      },
      "node-5-radical": {
        id: "node-5-radical",
        panels: [
          {
            bgKey: "khandava",
            speaker: "Arjuna",
            charKey: "arjuna",
            dialogue: "We do not build our capital upon the ashes of living creatures!"
          }
        ],
        isEnding: true,
        divergence: 85,
        verdictTitle: "The Sacred Woodland Citadel",
        verdictDesc: "The Pandavas build an ecological empire beloved by all forest clans."
      }
    }
  },
  "island-6": {
    islandId: "island-6",
    title: "The Hall of Loaded Dice",
    parva: "Sabha Parva",
    rootStep: "node-6-1",
    nodes: {
      "node-6-1": {
        id: "node-6-1",
        panels: [
          {
            bgKey: "dice",
            speaker: "Shakuni",
            charKey: "shakuni",
            dialogue: "What is an emperor who fears dice? Stake Indraprastha, Yudhishthira!",
            sfx: "CLACK-CLACK!"
          },
          {
            bgKey: "dice",
            speaker: "Yudhishthira",
            charKey: "yudhishthira",
            dialogue: "A Kshatriya never rejects a challenge to the board. The stakes are laid!",
            sfx: "DHA-DHAM!"
          }
        ],
        isEnding: false,
        prompt: "Shakuni's rigged dice are primed. How do the Pandavas navigate the invitation?",
        choices: [
          { badge: "Canonical", text: "Accept the Dicing Challenge & Stake Realm", nextNode: "node-6-canon" },
          { badge: "Subversive", text: "Vidura invokes Royal Veto to cancel game", nextNode: "node-6-subversive" },
          { badge: "Radical", text: "Field Krishna to roll dice for Indraprastha", nextNode: "node-6-radical" }
        ]
      },
      "node-6-canon": {
        id: "node-6-canon",
        panels: [
          {
            bgKey: "dice",
            speaker: "Draupadi",
            charKey: "draupadi",
            dialogue: "Shame upon this court! My hair remains untied until washed in Dushasana's blood!"
          }
        ],
        isEnding: true,
        divergence: 0,
        verdictTitle: "Vastraharan & The Inevitable War",
        verdictDesc: "The moral legitimacy of the elders crumbles; blood vows make total war unavoidable."
      },
      "node-6-subversive": {
        id: "node-6-subversive",
        panels: [
          {
            bgKey: "dice",
            speaker: "Vidura",
            charKey: "yudhishthira",
            dialogue: "Halt this unholy gamble! Dhritarashtra, overturn this table before your sons burn the world!"
          }
        ],
        isEnding: true,
        divergence: 60,
        verdictTitle: "The Fragile Peace",
        verdictDesc: "Indraprastha retains its independence, isolating Duryodhana into bitter impotence."
      },
      "node-6-radical": {
        id: "node-6-radical",
        panels: [
          {
            bgKey: "dice",
            speaker: "Lord Krishna",
            charKey: "krishna",
            dialogue: "If Duryodhana fields Shakuni, Yudhishthira fields Vasudeva! Let us cast the ivory!"
          }
        ],
        isEnding: true,
        divergence: 80,
        verdictTitle: "Cosmic Counter-Gamble",
        verdictDesc: "Krishna strips Hastinapur of its wealth and arms, bankrupting Duryodhana without bloodshed."
      }
    }
  },
  "island-7": {
    islandId: "island-7",
    title: "The Banishment Pact",
    parva: "Sabha Parva",
    rootStep: "node-7-1",
    nodes: {
      "node-7-1": {
        id: "node-7-1",
        panels: [
          {
            bgKey: "exile",
            speaker: "Draupadi",
            charKey: "draupadi",
            dialogue: "How long shall we eat wild roots while Duryodhana sleeps on silk?"
          },
          {
            bgKey: "exile",
            speaker: "Bhima",
            charKey: "bhima",
            dialogue: "My mace rusts in the damp forest! Give the command and I crush Hastinapur's gates!"
          }
        ],
        isEnding: false,
        prompt: "Bhima and Draupadi urge Yudhishthira to march back on Hastinapur immediately. What is ordered?",
        choices: [
          { badge: "Canonical", text: "Endure 12-year wilderness exile oath", nextNode: "node-7-canon" },
          { badge: "Subversive", text: "Arjuna seeks Pashupatastra early for ultimatum", nextNode: "node-7-subversive" },
          { badge: "Radical", text: "Form alliance with Panchala & Yadavas to march", nextNode: "node-7-radical" }
        ]
      },
      "node-7-canon": {
        id: "node-7-canon",
        panels: [
          {
            bgKey: "exile",
            speaker: "Yudhishthira",
            charKey: "yudhishthira",
            dialogue: "Truth is the foundation of the cosmos. We fulfill the 12-year exile vow to the last second."
          }
        ],
        isEnding: true,
        divergence: 0,
        verdictTitle: "The Cosmic Tempering",
        verdictDesc: "12 years of spiritual penance transform the Pandavas into god-like warriors ready for Kurukshetra."
      },
      "node-7-subversive": {
        id: "node-7-subversive",
        panels: [
          {
            bgKey: "exile",
            speaker: "Arjuna",
            charKey: "arjuna",
            dialogue: "I obtain Shiva's Pashupatastra early and offer Hastinapur one final surrender deadline!"
          }
        ],
        isEnding: true,
        divergence: 55,
        verdictTitle: "The Nuclear Ultimatum",
        verdictDesc: "Possession of the Pashupatastra forces Bhishma and Drona to compel Duryodhana to negotiate."
      },
      "node-7-radical": {
        id: "node-7-radical",
        panels: [
          {
            bgKey: "exile",
            speaker: "Bhima",
            charKey: "bhima",
            dialogue: "Drupada and Balarama march with us! A rigged game is legally void!"
          }
        ],
        isEnding: true,
        divergence: 85,
        verdictTitle: "The Early Blitzkrieg",
        verdictDesc: "A swift coalition assault overthrows Duryodhana before the Kaurava army can fully assemble."
      }
    }
  },
  "island-8": {
    islandId: "island-8",
    title: "The Shadow in Matsya",
    parva: "Virata Parva",
    rootStep: "node-8-1",
    nodes: {
      "node-8-1": {
        id: "node-8-1",
        panels: [
          {
            bgKey: "matsya",
            speaker: "Kichaka",
            charKey: "draupadi",
            dialogue: "Beautiful Sairandhri... tonight you shall come to my private chamber!",
            sfx: "SHING!"
          },
          {
            bgKey: "matsya",
            speaker: "Bhima",
            charKey: "bhima",
            dialogue: "Tell Kichaka to meet you in the dark music hall... I shall be waiting under the sheet!",
            sfx: "DHA-DHAM!"
          }
        ],
        isEnding: false,
        prompt: "Kichaka enters the dark palace hall expecting Draupadi. Bhima waits in shadows. How do they strike?",
        choices: [
          { badge: "Canonical", text: "Bhima crushes Kichaka in dark music hall", nextNode: "node-8-canon" },
          { badge: "Subversive", text: "Expose identity & claim King Virata protection", nextNode: "node-8-subversive" },
          { badge: "Radical", text: "Draupadi uses Gandharva power to subdue him", nextNode: "node-8-radical" }
        ]
      },
      "node-8-canon": {
        id: "node-8-canon",
        panels: [
          {
            bgKey: "matsya",
            speaker: "Bhima",
            charKey: "bhima",
            dialogue: "I roll Kichaka into a ball of crushed bone! Not a single scream escapes!"
          }
        ],
        isEnding: true,
        divergence: 0,
        verdictTitle: "The Secret Retribution",
        verdictDesc: "Kichaka's elimination clears the way for the Pandavas to reveal themselves on the 365th day."
      },
      "node-8-subversive": {
        id: "node-8-subversive",
        panels: [
          {
            bgKey: "matsya",
            speaker: "Yudhishthira",
            charKey: "yudhishthira",
            dialogue: "King Virata, behold Emperor Yudhishthira and the hero Bhima!"
          }
        ],
        isEnding: true,
        divergence: 50,
        verdictTitle: "The Matsya Royal Compact",
        verdictDesc: "King Virata pledges his entire royal army to the Pandavas on the spot."
      },
      "node-8-radical": {
        id: "node-8-radical",
        panels: [
          {
            bgKey: "matsya",
            speaker: "Draupadi",
            charKey: "draupadi",
            dialogue: "I summon the celestial guardians! Divine energy strikes Kichaka down in full view!"
          }
        ],
        isEnding: true,
        divergence: 88,
        verdictTitle: "Divine Wrath Unveiled",
        verdictDesc: "Draupadi's overt spiritual intervention deters any further disrespect from mortal kings."
      }
    }
  },
  "island-9": {
    islandId: "island-9",
    title: "The Chamber of the God",
    parva: "Udyoga Parva",
    rootStep: "node-9-1",
    nodes: {
      "node-9-1": {
        id: "node-9-1",
        panels: [
          {
            bgKey: "dwarka",
            speaker: "Duryodhana",
            charKey: "duryodhana",
            dialogue: "I arrived first! I take the place of honor at Krishna's head while he slumbers!"
          },
          {
            bgKey: "dwarka",
            speaker: "Lord Krishna",
            charKey: "krishna",
            dialogue: "I see Arjuna at my feet first. Both shall choose: My Narayani Sena OR my unarmed self!",
            sfx: "TWAAANG!"
          }
        ],
        isEnding: false,
        prompt: "Krishna offers his aid: His million Narayani warriors OR his unarmed self. What is chosen?",
        choices: [
          { badge: "Canonical", text: "Arjuna chooses unarmed Krishna as charioteer", nextNode: "node-9-canon" },
          { badge: "Subversive", text: "Duryodhana demands both army & Lord to avoid war", nextNode: "node-9-subversive" },
          { badge: "Radical", text: "Krishna enforces immediate peace mandate", nextNode: "node-9-radical" }
        ]
      },
      "node-9-canon": {
        id: "node-9-canon",
        panels: [
          {
            bgKey: "dwarka",
            speaker: "Arjuna",
            charKey: "arjuna",
            dialogue: "I choose Vasudeva alone! Be my charioteer, Lord, and guide my bow through darkness!"
          }
        ],
        isEnding: true,
        divergence: 0,
        verdictTitle: "The Charioteer of Destiny",
        verdictDesc: "Krishna becomes Arjuna's guide, setting the stage for the revelation of the Bhagavad Gita."
      },
      "node-9-subversive": {
        id: "node-9-subversive",
        panels: [
          {
            bgKey: "dwarka",
            speaker: "Duryodhana",
            charKey: "duryodhana",
            dialogue: "Krishna shall remain neutral judge in Dwarka while the armies clash!"
          }
        ],
        isEnding: true,
        divergence: 65,
        verdictTitle: "The Mortal Clash",
        verdictDesc: "Without Krishna on the battlefield, the cosmic balance shifts to a purely mortal war."
      },
      "node-9-radical": {
        id: "node-9-radical",
        panels: [
          {
            bgKey: "dwarka",
            speaker: "Lord Krishna",
            charKey: "krishna",
            dialogue: "Dwarka shall not supply a single arrow or soldier! We declare an absolute embargo!"
          }
        ],
        isEnding: true,
        divergence: 92,
        verdictTitle: "The Yadava Peace Accord",
        verdictDesc: "Krishna's strict neutrality halts the mobilization of ancient India's armies."
      }
    }
  },
  "island-10": {
    islandId: "island-10",
    title: "The Fallen Guru",
    parva: "Drona Parva",
    rootStep: "node-10-1",
    nodes: {
      "node-10-1": {
        id: "node-10-1",
        panels: [
          {
            bgKey: "kurukshetra",
            speaker: "Lord Krishna",
            charKey: "krishna",
            dialogue: "Drona is invincible while holding his bow! Only news of Ashwatthama's death will break his grip."
          },
          {
            bgKey: "kurukshetra",
            speaker: "Bhima",
            charKey: "bhima",
            dialogue: "I have slain Indravarman's elephant named Ashwatthama! Drona turns to Yudhishthira!",
            sfx: "DHA-DHAM!"
          }
        ],
        isEnding: false,
        prompt: "Drona turns to Yudhishthira for the absolute truth. How shall Yudhishthira answer?",
        choices: [
          { badge: "Canonical", text: "Speaks half-truth: Ashwatthama is dead... gaja iti", nextNode: "node-10-canon" },
          { badge: "Subversive", text: "Refuses to lie & fights Drona fairly", nextNode: "node-10-subversive" },
          { badge: "Radical", text: "Arjuna disarms Drona via pure archery duel", nextNode: "node-10-radical" }
        ]
      },
      "node-10-canon": {
        id: "node-10-canon",
        panels: [
          {
            bgKey: "kurukshetra",
            speaker: "Yudhishthira",
            charKey: "yudhishthira",
            dialogue: "Ashwatthama is dead... (gaja iti - whether man or elephant)..."
          }
        ],
        isEnding: true,
        divergence: 0,
        verdictTitle: "The Chariot Touches Earth",
        verdictDesc: "Yudhishthira's single moral compromise causes his divine levitating chariot to touch the dusty ground."
      },
      "node-10-subversive": {
        id: "node-10-subversive",
        panels: [
          {
            bgKey: "kurukshetra",
            speaker: "Yudhishthira",
            charKey: "yudhishthira",
            dialogue: "Master Drona! An elephant named Ashwatthama was slain by Bhima. Your son lives!"
          }
        ],
        isEnding: true,
        divergence: 55,
        verdictTitle: "Unstained Righteousness",
        verdictDesc: "Yudhishthira preserves his untarnished truth, though the cost in Pandava lives is immense."
      },
      "node-10-radical": {
        id: "node-10-radical",
        panels: [
          {
            bgKey: "kurukshetra",
            speaker: "Arjuna",
            charKey: "arjuna",
            dialogue: "No deceit! I face my Guru in single combat! Gandiva against Brahmashira!"
          }
        ],
        isEnding: true,
        divergence: 88,
        verdictTitle: "The Guru's Farewell",
        verdictDesc: "Drona voluntarily lays down his arms out of pride in Arjuna's flawless martial ethics."
      }
    }
  }
};

export function getIslandStartNode(islandId: string): string {
  const graph = STORY_GRAPH[islandId] || STORY_GRAPH["island-1"];
  return graph ? graph.rootStep : "node-1-1";
}
