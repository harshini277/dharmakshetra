export interface WebtoonPanel {
  id: string;
  bg: string;
  charKey?: string;
  speaker?: string | null;
  dialogue?: string;
  caption?: string;
  sfx?: string;
}

export interface WebtoonChoiceOption {
  id: string;
  label: string;
  type: 'canon' | 'subversive' | 'radical';
  divergence: number;
  nextPanelsSummary?: string;
}

export interface WebtoonAct {
  actNumber: 1 | 2 | 3;
  actTitle: string;
  panels: WebtoonPanel[];
  prompt: string;
  choices: WebtoonChoiceOption[];
}

export interface WebtoonIsland {
  id: string;
  title: string;
  parva: string;
  sceneKey?: string;
  coverImg: string;
  era: string;
  keyCharacters: string[];
  acts: WebtoonAct[];
  epilogue: {
    title: string;
    summary: string;
  };
}

export const webtoonIslands: WebtoonIsland[] = [
  {
    id: "island-1",
    title: "The Cursed Hunt",
    parva: "Adi Parva",
    sceneKey: "forest",
    coverImg: "/assets/bg_forest.jpg",
    era: "Dawn of the Kuru Lineage",
    keyCharacters: ["King Pandu", "Sage Kindama", "Queen Kunti"],
    acts: [
      {
        actNumber: 1,
        actTitle: "Act I: The Inciting Dilemma",
        panels: [
          {
            id: "p1_1",
            bg: "/assets/bg_forest.jpg",
            caption: "Deep in the misty peaks of Shatashringa, King Pandu hunts beneath the golden twilight canopy."
          },
          {
            id: "p1_2",
            bg: "/assets/bg_forest.jpg",
            charKey: "pandu",
            speaker: "King Pandu",
            dialogue: "A rare deer mating in the sacred groves... my golden arrow shall not miss!",
            sfx: "TWAAANG!"
          },
          {
            id: "p1_3",
            bg: "/assets/bg_forest.jpg",
            charKey: "pandu",
            speaker: "Sage Kindama (In Agony)",
            dialogue: "Cruel king! You struck down a sage in the sacred act of love! Receive my dying curse: the moment you embrace your queens in passion, your life shall flee your mortal body!",
            sfx: "KRZZZT!"
          }
        ],
        prompt: "Decision Gate 1: Pandu stands cursed with instant death upon intimacy. How shall the King of Hastinapur respond?",
        choices: [
          {
            id: "1_1A",
            label: "Renounce the Crown for Forest Penance",
            type: "canon",
            divergence: 0
          },
          {
            id: "1_1B",
            label: "Remain Emperor & Seek Sages' Ritual Solution",
            type: "subversive",
            divergence: 40
          },
          {
            id: "1_1C",
            label: "Abdicate Entirely to Dhritarashtra Immediately",
            type: "radical",
            divergence: 80
          }
        ]
      },
      {
        actNumber: 2,
        actTitle: "Act II: The Escalation & Divine Niyoga",
        panels: [
          {
            id: "p2_1",
            bg: "/assets/bg_forest.jpg",
            charKey: "pandu",
            speaker: "King Pandu",
            dialogue: "Without male heirs, our lineage dies and ancestors suffer in darkness. Kunti, use your boons to invoke the gods!"
          },
          {
            id: "p2_2",
            bg: "/assets/bg_forest.jpg",
            charKey: "draupadi",
            speaker: "Queen Kunti",
            dialogue: "Sage Durvasa granted me a mantra to summon any Deva. I shall invoke Dharma for righteousness, Vayu for strength, and Indra for martial glory."
          }
        ],
        prompt: "Decision Gate 2: Kunti can invoke three Devas for sons. Which divine alignment should Kunti prioritize?",
        choices: [
          {
            id: "1_2A",
            label: "Invoke Dharma, Vayu, and Indra",
            type: "canon",
            divergence: 0
          },
          {
            id: "1_2B",
            label: "Invoke Surya First to Reveal Karna as Eldest Brother",
            type: "subversive",
            divergence: 55
          },
          {
            id: "1_2C",
            label: "Share the Mantra with Madri & Hastinapur Queens",
            type: "radical",
            divergence: 85
          }
        ]
      },
      {
        actNumber: 3,
        actTitle: "Act III: The Climax & Fatal Temptation",
        panels: [
          {
            id: "p3_1",
            bg: "/assets/bg_forest.jpg",
            caption: "Years pass in the woodland sanctuary. Spring blooms in Shatashringa forest, unleashing irresistible desire."
          },
          {
            id: "p3_2",
            bg: "/assets/bg_forest.jpg",
            charKey: "pandu",
            speaker: "King Pandu",
            dialogue: "Madri... the forest breeze carrying your laughter breaks my iron vow!",
            sfx: "DHA-DHAM!"
          }
        ],
        prompt: "Decision Gate 3: Pandu approaches Madri in passionate intoxication. How does fate intervene?",
        choices: [
          {
            id: "1_3A",
            label: "Pandu Succumbs to the Curse & Dies in Madri's Arms",
            type: "canon",
            divergence: 0
          },
          {
            id: "1_3B",
            label: "Kunti Intervenes in Time to Restrain Pandu",
            type: "subversive",
            divergence: 60
          },
          {
            id: "1_3C",
            label: "Pandu Overcomes Curse via Yogic Transmutation",
            type: "radical",
            divergence: 90
          }
        ]
      }
    ],
    epilogue: {
      title: "The Legacy of Shatashringa",
      summary: "The choices made in the sacred forest determine whether the Pandavas return to Hastinapur as disputed orphans or undisputed heirs."
    }
  },
  {
    id: "island-2",
    title: "The Arena of Anga",
    parva: "Adi Parva",
    sceneKey: "arena",
    coverImg: "/assets/bg_arena.jpg",
    era: "Youth of the Princes",
    keyCharacters: ["Guru Drona", "Arjuna", "Karna", "Duryodhana"],
    acts: [
      {
        actNumber: 1,
        actTitle: "Act I: The Inciting Display",
        panels: [
          {
            id: "p2_1_1",
            bg: "/assets/bg_arena.jpg",
            caption: "In the grand amphitheater of Hastinapur, Guru Drona showcases the martial mastery of the Kuru princes."
          },
          {
            id: "p2_1_2",
            bg: "/assets/bg_arena.jpg",
            charKey: "arjuna",
            speaker: "Arjuna",
            dialogue: "Witness the Varunastra! Rain falls at my command, filling the arena with divine brilliance!",
            sfx: "SHING!"
          },
          {
            id: "p2_1_3",
            bg: "/assets/bg_arena.jpg",
            charKey: "karna",
            speaker: "Karna",
            dialogue: "Boast not, prince! Whatever feat Arjuna has shown, I shall duplicate—and surpass!",
            sfx: "THWACK!"
          }
        ],
        prompt: "Decision Gate 1: Karna demands a duel of archers. Kripacharya halts him demanding royal lineage. How shall Karna react?",
        choices: [
          {
            id: "2_1A",
            label: "Accept Duryodhana's Crown of Anga",
            type: "canon",
            divergence: 0
          },
          {
            id: "2_1B",
            label: "Demonstrate Divine Astras Without Royal Title",
            type: "subversive",
            divergence: 45
          },
          {
            id: "2_1C",
            label: "Challenge Drona Directly to Single Combat",
            type: "radical",
            divergence: 85
          }
        ]
      },
      {
        actNumber: 2,
        actTitle: "Act II: The Escalation of Rivalry",
        panels: [
          {
            id: "p2_2_1",
            bg: "/assets/bg_arena.jpg",
            charKey: "duryodhana",
            speaker: "Duryodhana",
            dialogue: "Anga is yours, Karna! From this day, my arm, my treasury, and my kingdom stand behind your bow!"
          },
          {
            id: "p2_2_2",
            bg: "/assets/bg_arena.jpg",
            charKey: "bhima",
            speaker: "Bhima",
            dialogue: "A suta's son holding a royal staff? Take a whip instead, Karna, for you are unfit to die by a Kshatriya's arrow!"
          }
        ],
        prompt: "Decision Gate 2: Bhima mocks Karna's caste publicly in the arena. How does Karna respond?",
        choices: [
          {
            id: "2_2A",
            label: "Hold Tongue in Dignified Silence",
            type: "canon",
            divergence: 0
          },
          {
            id: "2_2B",
            label: "Challenge Bhima to Mace Combat on the Spot",
            type: "subversive",
            divergence: 50
          },
          {
            id: "2_2C",
            label: "Reveal Kavacha and Kundala Armour Solar Glow",
            type: "radical",
            divergence: 88
          }
        ]
      },
      {
        actNumber: 3,
        actTitle: "Act III: The Climax of the Tournament",
        panels: [
          {
            id: "p2_3_1",
            bg: "/assets/bg_arena.jpg",
            charKey: "drona",
            speaker: "Guru Drona",
            dialogue: "The sun sets over the arena! Sun god Surya casts his golden rays upon Karna as Kunti faints in the royal balcony."
          }
        ],
        prompt: "Decision Gate 3: The tournament ends at sunset without a clear victor. What pact is forged in twilight?",
        choices: [
          {
            id: "2_3A",
            label: "Eternal Lifelong Oath Between Karna & Duryodhana",
            type: "canon",
            divergence: 0
          },
          {
            id: "2_3B",
            label: "Bhishma Mediates Neutral Sovereign Role for Karna",
            type: "subversive",
            divergence: 60
          },
          {
            id: "2_3C",
            label: "Kunti Confesses Truth of Karna's Birth in Secret",
            type: "radical",
            divergence: 92
          }
        ]
      }
    ],
    epilogue: {
      title: "The Crucible of Champions",
      summary: "The events in the arena determine whether Karna fights for Duryodhana's crown or reshapes the Kuru dynasty from within."
    }
  },
  {
    id: "island-3",
    title: "The House of Lac",
    parva: "Adi Parva",
    sceneKey: "lac",
    coverImg: "/assets/bg_lac_palace.jpg",
    era: "The Assassination Plot",
    keyCharacters: ["Yudhishthira", "Bhima", "Purochana", "Vidura"],
    acts: [
      {
        actNumber: 1,
        actTitle: "Act I: The Inciting Trap",
        panels: [
          {
            id: "p3_1_1",
            bg: "/assets/bg_lac_palace.jpg",
            caption: "Duryodhana builds a royal palace at Varanavata constructed entirely of highly flammable lac, resin, and ghee."
          },
          {
            id: "p3_1_2",
            bg: "/assets/bg_lac_palace.jpg",
            charKey: "yudhishthira",
            speaker: "Yudhishthira",
            dialogue: "Uncle Vidura warned us in secret code: 'He who knows the forest survives the wildfire by burrowing like a rat.'"
          }
        ],
        prompt: "Decision Gate 1: The Pandavas discover the lac walls melt under candle heat. How do they prepare?",
        choices: [
          {
            id: "3_1A",
            label: "Secretly Dig an Underground Escape Tunnel",
            type: "canon",
            divergence: 0
          },
          {
            id: "3_1B",
            label: "Confront & Arrest Architect Purochana Publicly",
            type: "subversive",
            divergence: 50
          },
          {
            id: "3_1C",
            label: "Set Fire to the Palace First & March Back",
            type: "radical",
            divergence: 85
          }
        ]
      },
      {
        actNumber: 2,
        actTitle: "Act II: The Conflagration",
        panels: [
          {
            id: "p3_2_1",
            bg: "/assets/bg_lac_palace.jpg",
            caption: "At midnight on the dark moon night, flames erupt along the foundation beams of Varanavata!"
          },
          {
            id: "p3_2_2",
            bg: "/assets/bg_lac_palace.jpg",
            charKey: "bhima",
            speaker: "Bhima",
            dialogue: "The tunnel entrance is ready! I carry Mother Kunti and my brothers through the subterranean dark!",
            sfx: "KRZZZT!"
          }
        ],
        prompt: "Decision Gate 2: Flames block the main tunnel exit. How does Bhima break through?",
        choices: [
          {
            id: "3_2A",
            label: "Bhima Smashes Solid Rock Walls with Bare Fists",
            type: "canon",
            divergence: 0
          },
          {
            id: "3_2B",
            label: "Arjuna Uses Varunastra to Extinguish Flame Path",
            type: "subversive",
            divergence: 45
          },
          {
            id: "3_2C",
            label: "Bhima Carries Family Over Flaming Roof in Sky Leap",
            type: "radical",
            divergence: 80
          }
        ]
      },
      {
        actNumber: 3,
        actTitle: "Act III: The Aftermath & Forest Disguise",
        panels: [
          {
            id: "p3_3_1",
            bg: "/assets/bg_forest.jpg",
            caption: "The palace burns to ashes. Hastinapur believes the Pandavas perished in the inferno."
          }
        ],
        prompt: "Decision Gate 3: Emerging into the wilderness, how shall the Pandavas handle their apparent death?",
        choices: [
          {
            id: "3_3A",
            label: "Maintain Brahmin Disguise & Travel to Panchala",
            type: "canon",
            divergence: 0
          },
          {
            id: "3_3B",
            label: "Send Secret Messenger to Bhishma Revealing Survival",
            type: "subversive",
            divergence: 55
          },
          {
            id: "3_3C",
            label: "Storm Hastinapur Court Carrying Charred Lac Beams",
            type: "radical",
            divergence: 90
          }
        ]
      }
    ],
    epilogue: {
      title: "The Phoenix in the Forest",
      summary: "Surviving the flames of Varanavata forces the Pandavas into secret exile, leading directly to the alliance with Panchala."
    }
  },
  {
    id: "island-4",
    title: "Draupadi's Swayamvara",
    parva: "Adi Parva",
    sceneKey: "swayamvara",
    coverImg: "/assets/bg_swayamvara.jpg",
    era: "The Alliance of Fire",
    keyCharacters: ["Draupadi", "Arjuna", "Queen Kunti", "King Drupada"],
    acts: [
      {
        actNumber: 1,
        actTitle: "Act I: The Archery Test",
        panels: [
          {
            id: "p4_1_1",
            bg: "/assets/bg_swayamvara.jpg",
            caption: "In the ornate swayamvara hall of King Drupada, kings fail to lift the cosmic bow of Lord Shiva."
          },
          {
            id: "p4_1_2",
            bg: "/assets/bg_swayamvara.jpg",
            charKey: "arjuna",
            speaker: "Arjuna (Disguised)",
            dialogue: "A Brahmin steps into the arena! I draw the bowstring and strike the rotating fish eye reflected in water!",
            sfx: "DHA-DHAM!"
          }
        ],
        prompt: "Decision Gate 1: Disguised Arjuna strikes the fish eye. Rival kings revolt in anger against a Brahmin winning Draupadi. How do they respond?",
        choices: [
          {
            id: "4_1A",
            label: "Bhima & Arjuna Fight Off Kings with Tree Trunks & Bow",
            type: "canon",
            divergence: 0
          },
          {
            id: "4_1B",
            label: "Krishna Intervenes & Enforces Swayamvara Law",
            type: "subversive",
            divergence: 40
          },
          {
            id: "4_1C",
            label: "Arjuna Reveals True Pandava Prince Identity Immediately",
            type: "radical",
            divergence: 80
          }
        ]
      },
      {
        actNumber: 2,
        actTitle: "Act II: Mother's Unwitting Command",
        panels: [
          {
            id: "p4_2_1",
            bg: "/assets/bg_swayamvara.jpg",
            charKey: "draupadi",
            speaker: "Draupadi",
            dialogue: "I garland the victor! But when we return to his mother's cottage, Kunti speaks without looking: 'Share whatever alms you brought today.'"
          }
        ],
        prompt: "Decision Gate 2: Kunti commands the brothers to share equal alms. How is mother's word interpreted?",
        choices: [
          {
            id: "4_2A",
            label: "Honor Word via Five-Fold Marriage to All Brothers",
            type: "canon",
            divergence: 0
          },
          {
            id: "4_2B",
            label: "Clarify Draupadi Weds Arjuna Alone with Vyasa Sanction",
            type: "subversive",
            divergence: 60
          },
          {
            id: "4_2C",
            label: "Draupadi Assumes Independent Regency of Panchala",
            type: "radical",
            divergence: 90
          }
        ]
      },
      {
        actNumber: 3,
        actTitle: "Act III: The Royal Alliance",
        panels: [
          {
            id: "p4_3_1",
            bg: "/assets/bg_swayamvara.jpg",
            caption: "King Drupada learns the true identity of the Brahmin archers. Panchala's army pledges total alliance to the Pandavas."
          }
        ],
        prompt: "Decision Gate 3: Armed with Panchala's military power, what message do the Pandavas send to Hastinapur?",
        choices: [
          {
            id: "4_3A",
            label: "Demand Half the Kingdom Peacefully via Dhritarashtra",
            type: "canon",
            divergence: 0
          },
          {
            id: "4_3B",
            label: "Demand Immediate Coronation of Yudhishthira",
            type: "subversive",
            divergence: 55
          },
          {
            id: "4_3C",
            label: "Form Triple Coalition with Yadavas & March on Capital",
            type: "radical",
            divergence: 88
          }
        ]
      }
    ],
    epilogue: {
      title: "The Fire-Born Empress",
      summary: "Draupadi's swayamvara seals the unbreakable union between Panchala and the Pandavas, altering the fate of Aryavarta."
    }
  },
  {
    id: "island-5",
    title: "The Khandava Partition",
    parva: "Adi Parva",
    sceneKey: "khandava",
    coverImg: "/assets/bg_khandava.jpg",
    era: "Building the Golden Capital",
    keyCharacters: ["Arjuna", "Lord Krishna", "Agni", "Mayasura"],
    acts: [
      {
        actNumber: 1,
        actTitle: "Act I: Agni's Request",
        panels: [
          {
            id: "p5_1_1",
            bg: "/assets/bg_khandava.jpg",
            caption: "Dhritarashtra divides the kingdom, granting the Pandavas the barren, serpent-infested wilderness of Khandavaprastha."
          },
          {
            id: "p5_1_2",
            bg: "/assets/bg_khandava.jpg",
            charKey: "krishna",
            speaker: "Lord Krishna",
            dialogue: "Lord Agni seeks to consume Khandava forest to regain his divine vigor. Arjuna, rain arrows to block the sky!"
          }
        ],
        prompt: "Decision Gate 1: Lord Agni requests the clearing of Khandava forest. How do Arjuna and Krishna proceed?",
        choices: [
          {
            id: "5_1A",
            label: "Burn Khandava with Divine Arrow Ceiling",
            type: "canon",
            divergence: 0
          },
          {
            id: "5_1B",
            label: "Negotiate Sanctuary Pact with Takshaka Nagas",
            type: "subversive",
            divergence: 50
          },
          {
            id: "5_1C",
            label: "Refuse Agni & Build Eco-Sanctuary Capital",
            type: "radical",
            divergence: 85
          }
        ]
      },
      {
        actNumber: 2,
        actTitle: "Act II: The Architect Mayasura",
        panels: [
          {
            id: "p5_2_1",
            bg: "/assets/bg_khandava.jpg",
            speaker: "Mayasura (Pleading)",
            dialogue: "Spare my life from the flames, Arjuna! I am Maya, master architect of the Asuras. I shall build you a palace unmatched in the three worlds!",
            sfx: "KRZZZT!"
          }
        ],
        prompt: "Decision Gate 2: Arjuna saves Mayasura from the fire. What marvel shall Maya construct for Indraprastha?",
        choices: [
          {
            id: "5_2A",
            label: "Construct Mayasabha Hall of Illusion Pools",
            type: "canon",
            divergence: 0
          },
          {
            id: "5_2B",
            label: "Construct Impregnable Iron Fortress Defense Grid",
            type: "subversive",
            divergence: 45
          },
          {
            id: "5_2C",
            label: "Construct Subterranean Vaults & Floating Towers",
            type: "radical",
            divergence: 80
          }
        ]
      },
      {
        actNumber: 3,
        actTitle: "Act III: Consecration of Indraprastha",
        panels: [
          {
            id: "p5_3_1",
            bg: "/assets/bg_khandava.jpg",
            caption: "Indraprastha shines as the supreme capital of Aryavarta. Yudhishthira prepares for the Rajasuya Yajna coronation."
          }
        ],
        prompt: "Decision Gate 3: Yudhishthira performs Rajasuya Yajna. Shishupala insults Krishna in full assembly. How is justice meted out?",
        choices: [
          {
            id: "5_3A",
            label: "Krishna Decapitates Shishupala with Sudarshana Chakra",
            type: "canon",
            divergence: 0
          },
          {
            id: "5_3B",
            label: "Yudhishthira Banishes Shishupala Without Bloodshed",
            type: "subversive",
            divergence: 50
          },
          {
            id: "5_3C",
            label: "Bhima Challenges Shishupala to Single Mace Duel",
            type: "radical",
            divergence: 85
          }
        ]
      }
    ],
    epilogue: {
      title: "The Golden Age of Indraprastha",
      summary: "The construction of Mayasabha elevates the Pandavas to imperial status, provoking Duryodhana's fatal jealousy."
    }
  },
  {
    id: "island-6",
    title: "The Hall of Loaded Dice",
    parva: "Sabha Parva",
    sceneKey: "dice",
    coverImg: "/assets/bg_dice_hall.jpg",
    era: "The Great Dishonor",
    keyCharacters: ["Shakuni", "Yudhishthira", "Draupadi", "Lord Krishna"],
    acts: [
      {
        actNumber: 1,
        actTitle: "Act I: The Rigged Invitation",
        panels: [
          {
            id: "p6_1_1",
            bg: "/assets/bg_dice_hall.jpg",
            caption: "Incense clouds the opulent dicing hall of Hastinapur. Shakuni rolls his carved ivory cubes across blood-red silk."
          },
          {
            id: "p6_1_2",
            bg: "/assets/bg_dice_hall.jpg",
            charKey: "shakuni",
            speaker: "Shakuni",
            dialogue: "What is an emperor who fears a pair of dice? Stake Indraprastha, Yudhishthira... or do you cower before your cousins?",
            sfx: "CLACK-CLACK!"
          },
          {
            id: "p6_1_3",
            bg: "/assets/bg_dice_hall.jpg",
            charKey: "yudhishthira",
            speaker: "Yudhishthira",
            dialogue: "A Kshatriya never rejects a challenge to the board. The stakes are laid!",
            sfx: "DHA-DHAM!"
          }
        ],
        prompt: "Decision Gate 1: Shakuni's rigged dice are primed. How shall the Pandavas navigate the fatal invitation?",
        choices: [
          {
            id: "6_1A",
            label: "Accept the Dicing Challenge",
            type: "canon",
            divergence: 0
          },
          {
            id: "6_1B",
            label: "Vidura Invokes Royal Veto to Cancel Game",
            type: "subversive",
            divergence: 60
          },
          {
            id: "6_1C",
            label: "Field Krishna to Roll Dice for Indraprastha",
            type: "radical",
            divergence: 80
          }
        ]
      },
      {
        actNumber: 2,
        actTitle: "Act II: The Losing Wagers",
        panels: [
          {
            id: "p6_2_1",
            bg: "/assets/bg_dice_hall.jpg",
            charKey: "yudhishthira",
            speaker: "Yudhishthira",
            dialogue: "I roll! I stake my kingdom... I stake my brothers... I stake myself... and I stake Queen Draupadi!"
          }
        ],
        prompt: "Decision Gate 2: Yudhishthira stakes Draupadi after losing himself. Dushasana drags her into court. How does Draupadi challenge the assembly?",
        choices: [
          {
            id: "6_2A",
            label: "Ask Dhritarashtra Court Legal Question on Ownership",
            type: "canon",
            divergence: 0
          },
          {
            id: "6_2B",
            label: "Bhima Breaks Vow & Attacks Dushasana Immediately",
            type: "subversive",
            divergence: 55
          },
          {
            id: "6_2C",
            label: "Draupadi Invokes Divine Cosmic Aura Publicly",
            type: "radical",
            divergence: 88
          }
        ]
      },
      {
        actNumber: 3,
        actTitle: "Act III: Vastraharan & The Vows",
        panels: [
          {
            id: "p6_3_1",
            bg: "/assets/bg_dice_hall.jpg",
            charKey: "draupadi",
            speaker: "Queen Draupadi",
            dialogue: "Elders of Hastinapur, shame upon this court! I vow my hair shall remain untied until washed in Dushasana's blood!"
          }
        ],
        prompt: "Decision Gate 3: Dushasana attempts disrobing. Krishna grants endless sari robes. What terms end the game?",
        choices: [
          {
            id: "6_3A",
            label: "12-Year Wilderness Exile + 1 Year Incognito Pact",
            type: "canon",
            divergence: 0
          },
          {
            id: "6_3B",
            label: "Dhritarashtra Returns Kingdom & Mandates Peace",
            type: "subversive",
            divergence: 65
          },
          {
            id: "6_3C",
            label: "Pandavas Declare Instant Pre-emptive War",
            type: "radical",
            divergence: 90
          }
        ]
      }
    ],
    epilogue: {
      title: "Vastraharan & The Inevitable War",
      summary: "The dishonor in the dicing hall destroys the moral standing of the Kuru elders and seals the destruction of Hastinapur."
    }
  },
  {
    id: "island-7",
    title: "The Banishment Pact",
    parva: "Vana Parva",
    sceneKey: "exile",
    coverImg: "/assets/bg_exile.jpg",
    era: "Wilderness Penance",
    keyCharacters: ["Yudhishthira", "Bhima", "Draupadi", "Arjuna"],
    acts: [
      {
        actNumber: 1,
        actTitle: "Act I: Kamyaka Wilderness",
        panels: [
          {
            id: "p7_1_1",
            bg: "/assets/bg_exile.jpg",
            caption: "Stripped of royal garments, the Pandavas and Draupadi wander deep into Kamyaka forest for 12 years of wilderness exile."
          },
          {
            id: "p7_1_2",
            bg: "/assets/bg_exile.jpg",
            charKey: "draupadi",
            speaker: "Draupadi",
            dialogue: "How long shall we eat wild roots while Duryodhana sleeps on silk? Forgiveness to the wicked is treason to Dharma!"
          }
        ],
        prompt: "Decision Gate 1: Draupadi and Bhima urge Yudhishthira to march on Hastinapur immediately. What is ordered?",
        choices: [
          {
            id: "7_1A",
            label: "Endure 12-Year Exile Oath",
            type: "canon",
            divergence: 0
          },
          {
            id: "7_1B",
            label: "Arjuna Travels to Heavens Early for Pashupatastra",
            type: "subversive",
            divergence: 50
          },
          {
            id: "7_1C",
            label: "Form Coalition with Panchala & March on Capital",
            type: "radical",
            divergence: 85
          }
        ]
      },
      {
        actNumber: 2,
        actTitle: "Act II: Arjuna's Quest for Astras",
        panels: [
          {
            id: "p7_2_1",
            bg: "/assets/bg_exile.jpg",
            charKey: "arjuna",
            speaker: "Arjuna",
            dialogue: "I ascend Mount Kailash to perform penance to Lord Shiva for the divine Pashupatastra!"
          }
        ],
        prompt: "Decision Gate 2: Shiva tests Arjuna in the guise of a Kirata hunter. How does Arjuna prove his archer worth?",
        choices: [
          {
            id: "7_2A",
            label: "Wrestle Shiva Kirata in Humble Single Combat",
            type: "canon",
            divergence: 0
          },
          {
            id: "7_2B",
            label: "Recognize Shiva Instantly & Offer Devotional Puja",
            type: "subversive",
            divergence: 45
          },
          {
            id: "7_2C",
            label: "Unleash Full Gandiva Astra Barrage in Combat",
            type: "radical",
            divergence: 80
          }
        ]
      },
      {
        actNumber: 3,
        actTitle: "Act III: The Yaksha Prashna",
        panels: [
          {
            id: "p7_3_1",
            bg: "/assets/bg_exile.jpg",
            charKey: "yudhishthira",
            speaker: "Yudhishthira",
            dialogue: "My brothers lie lifeless beside the enchanted crane's lake! I shall answer every riddle asked by the Yaksha!"
          }
        ],
        prompt: "Decision Gate 3: The Yaksha grants life to ONE brother. Whom does Yudhishthira choose to revive?",
        choices: [
          {
            id: "7_3A",
            label: "Choose Nakula to Honor Stepmother Madri",
            type: "canon",
            divergence: 0
          },
          {
            id: "7_3B",
            label: "Choose Bhima for Invincible Battle Strength",
            type: "subversive",
            divergence: 50
          },
          {
            id: "7_3C",
            label: "Choose Arjuna to Preserve Supreme Archery",
            type: "radical",
            divergence: 80
          }
        ]
      }
    ],
    epilogue: {
      title: "The Cosmic Tempering",
      summary: "12 years of wilderness penance transform the Pandavas into god-like warriors equipped for Kurukshetra."
    }
  },
  {
    id: "island-8",
    title: "The Shadow in Matsya",
    parva: "Virata Parva",
    sceneKey: "matsya",
    coverImg: "/assets/bg_matsya.jpg",
    era: "Year of Incognito Disguise",
    keyCharacters: ["Draupadi (Sairandhri)", "Bhima (Valala)", "Kichaka", "King Virata"],
    acts: [
      {
        actNumber: 1,
        actTitle: "Act I: Incognito Service",
        panels: [
          {
            id: "p8_1_1",
            bg: "/assets/bg_matsya.jpg",
            caption: "Year 13. The Pandavas live disguised as servants in the court of King Virata of Matsya."
          },
          {
            id: "p8_1_2",
            bg: "/assets/bg_matsya.jpg",
            speaker: "Commander Kichaka",
            dialogue: "Beautiful Sairandhri... you serve the Queen, but tonight you shall come to my private chamber!",
            sfx: "SHING!"
          }
        ],
        prompt: "Decision Gate 1: Kichaka harasses Draupadi in the palace. How do the Pandavas maintain cover while defending her?",
        choices: [
          {
            id: "8_1A",
            label: "Lure Kichaka to Dark Music Hall for Bhima",
            type: "canon",
            divergence: 0
          },
          {
            id: "8_1B",
            label: "Expose Pandava Identity & Claim Virata Protection",
            type: "subversive",
            divergence: 50
          },
          {
            id: "8_1C",
            label: "Draupadi Invokes Invisible Gandharva Strike",
            type: "radical",
            divergence: 85
          }
        ]
      },
      {
        actNumber: 2,
        actTitle: "Act II: Duel in Darkness",
        panels: [
          {
            id: "p8_2_1",
            bg: "/assets/bg_matsya.jpg",
            charKey: "bhima",
            speaker: "Bhima (Cook Valala)",
            dialogue: "I roll Kichaka into a ball of crushed bone under the silk sheets! Not a scream escapes!",
            sfx: "DHA-DHAM!"
          }
        ],
        prompt: "Decision Gate 2: Kichaka's death panics the Kuru spies. Duryodhana attacks Matsya to steal cattle. Who leads the defense?",
        choices: [
          {
            id: "8_2A",
            label: "Arjuna Disguised as Brihannala Leads Uttara",
            type: "canon",
            divergence: 0
          },
          {
            id: "8_2B",
            label: "Bhima & Yudhishthira Lead Matsya Army Openly",
            type: "subversive",
            divergence: 45
          },
          {
            id: "8_2C",
            label: "All Five Pandavas Reveal Full Celestial Armor Early",
            type: "radical",
            divergence: 80
          }
        ]
      },
      {
        actNumber: 3,
        actTitle: "Act III: Unveiling of the Heroes",
        panels: [
          {
            id: "p8_3_1",
            bg: "/assets/bg_matsya.jpg",
            charKey: "arjuna",
            speaker: "Arjuna",
            dialogue: "I draw Gandiva and unleash Sammohanastra! The entire Kaurava army falls unconscious on the battlefield!"
          }
        ],
        prompt: "Decision Gate 3: Day 365 ends as Duryodhana claims the 13th year was broken by 1 day. How is time judged?",
        choices: [
          {
            id: "8_3A",
            label: "Bhishma Calculates Lunar Intercalary Months Proving Oath Fulfilled",
            type: "canon",
            divergence: 0
          },
          {
            id: "8_3B",
            label: "Virata & Drupada Declare Instant War on Kauravas",
            type: "subversive",
            divergence: 55
          },
          {
            id: "8_3C",
            label: "Krishna Arbitrates Immediate Restitution of Indraprastha",
            type: "radical",
            divergence: 90
          }
        ]
      }
    ],
    epilogue: {
      title: "The Matsya Alliance",
      summary: "The completion of the incognito year unites King Virata with the Pandavas, setting the stage for war."
    }
  },
  {
    id: "island-9",
    title: "The Chamber of the God",
    parva: "Udyoga Parva",
    sceneKey: "dwarka",
    coverImg: "/assets/bg_dwarka.jpg",
    era: "Gathering of Armies",
    keyCharacters: ["Lord Krishna", "Arjuna", "Duryodhana", "Balarama"],
    acts: [
      {
        actNumber: 1,
        actTitle: "Act I: The Envoy in Dwarka",
        panels: [
          {
            id: "p9_1_1",
            bg: "/assets/bg_dwarka.jpg",
            caption: "Both Arjuna and Duryodhana arrive simultaneously in Dwarka to seek Lord Krishna's alliance."
          },
          {
            id: "p9_1_2",
            bg: "/assets/bg_dwarka.jpg",
            charKey: "duryodhana",
            speaker: "Duryodhana",
            dialogue: "I arrived first! I take the place of honor at Krishna's head while he slumbers!"
          },
          {
            id: "p9_1_3",
            bg: "/assets/bg_dwarka.jpg",
            charKey: "krishna",
            speaker: "Lord Krishna",
            dialogue: "I awaken and see Arjuna at my feet first. Both shall choose: My million Narayani warriors OR my unarmed self!",
            sfx: "TWAAANG!"
          }
        ],
        prompt: "Decision Gate 1: Arjuna chooses first between unarmed Krishna and the Narayani Sena. What is chosen?",
        choices: [
          {
            id: "9_1A",
            label: "Arjuna Chooses Unarmed Krishna as Charioteer",
            type: "canon",
            divergence: 0
          },
          {
            id: "9_1B",
            label: "Duryodhana Demands Neutrality for Both Krishna & Army",
            type: "subversive",
            divergence: 55
          },
          {
            id: "9_1C",
            label: "Krishna Enforces Yadava Arms Embargo on Both Sides",
            type: "radical",
            divergence: 85
          }
        ]
      },
      {
        actNumber: 2,
        actTitle: "Act II: The Peace Mission to Hastinapur",
        panels: [
          {
            id: "p9_2_1",
            bg: "/assets/bg_dwarka.jpg",
            charKey: "krishna",
            speaker: "Lord Krishna",
            dialogue: "I travel to Hastinapur as peace envoy. Grant the Pandavas just five villages, Duryodhana, and avoid war!"
          }
        ],
        prompt: "Decision Gate 2: Duryodhana refuses: 'Not even needle-point land without war!' He attempts binding Krishna in iron chains. How does Krishna respond?",
        choices: [
          {
            id: "9_2A",
            label: "Reveal Cosmic Vishwaroopa Form in Hastinapur Assembly",
            type: "canon",
            divergence: 0
          },
          {
            id: "9_2B",
            label: "Balarama Convenes Emergency Kings' Arbitration Council",
            type: "subversive",
            divergence: 50
          },
          {
            id: "9_2C",
            label: "Krishna Arrests Duryodhana & Shakuni Instantly",
            type: "radical",
            divergence: 92
          }
        ]
      },
      {
        actNumber: 3,
        actTitle: "Act III: The Secret Temptation of Karna",
        panels: [
          {
            id: "p9_3_1",
            bg: "/assets/bg_dwarka.jpg",
            charKey: "krishna",
            speaker: "Lord Krishna",
            dialogue: "Karna, ride with me! You are Kunti's firstborn son. Join your brothers and rule as Emperor of Aryavarta!"
          }
        ],
        prompt: "Decision Gate 3: Krishna offers Karna the supreme imperial crown. How does Karna respond?",
        choices: [
          {
            id: "9_3A",
            label: "Refuse Crown to Remain Loyal to Duryodhana",
            type: "canon",
            divergence: 0
          },
          {
            id: "9_3B",
            label: "Accept Lineage & Assume Neutral Mediation Role",
            type: "subversive",
            divergence: 65
          },
          {
            id: "9_3C",
            label: "Accept Crown & Force Immediate Kaurava Surrender",
            type: "radical",
            divergence: 95
          }
        ]
      }
    ],
    epilogue: {
      title: "The Charioteer of Destiny",
      summary: "Krishna's peace mission proves that war is unavoidable, setting the stage for the Bhagavad Gita at Kurukshetra."
    }
  },
  {
    id: "island-10",
    title: "The Fallen Guru",
    parva: "Drona Parva",
    sceneKey: "kurukshetra",
    coverImg: "/assets/bg_kurukshetra.jpg",
    era: "The Climax of Kurukshetra",
    keyCharacters: ["Guru Drona", "Yudhishthira", "Bhima", "Lord Krishna"],
    acts: [
      {
        actNumber: 1,
        actTitle: "Act I: Drona's Rampage",
        panels: [
          {
            id: "p10_1_1",
            bg: "/assets/bg_kurukshetra.jpg",
            caption: "Day 15 of Kurukshetra. Commander Drona annihilates entire divisions with divine astras. No mortal warrior can defeat him."
          },
          {
            id: "p10_1_2",
            bg: "/assets/bg_kurukshetra.jpg",
            charKey: "krishna",
            speaker: "Lord Krishna",
            dialogue: "Drona is invincible while holding his bow! Only news of his son Ashwatthama's death will cause him to lay down his arms."
          }
        ],
        prompt: "Decision Gate 1: Bhima slays the giant elephant named Ashwatthama. Drona turns to Yudhishthira for the absolute truth. What is spoken?",
        choices: [
          {
            id: "10_1A",
            label: "Speak Half-Truth: 'Ashwatthama is Dead... Gaja Iti'",
            type: "canon",
            divergence: 0
          },
          {
            id: "10_1B",
            label: "Refuse to Lie & Challenge Drona in Open Combat",
            type: "subversive",
            divergence: 55
          },
          {
            id: "10_1C",
            label: "Arjuna Disarms Drona via Pure Archery Mastery",
            type: "radical",
            divergence: 88
          }
        ]
      },
      {
        actNumber: 2,
        actTitle: "Act II: The Fall of the Commander",
        panels: [
          {
            id: "p10_2_1",
            bg: "/assets/bg_kurukshetra.jpg",
            charKey: "drona",
            speaker: "Guru Drona",
            dialogue: "Hearing Yudhishthira's words, I lay down my weapons and sit in yogic meditation on the chariot floor...",
            sfx: "KRZZZT!"
          }
        ],
        prompt: "Decision Gate 2: Drona enters yogic trance. Dhrishtadyumna advances with drawn sword. How is the Guru slain?",
        choices: [
          {
            id: "10_2A",
            label: "Dhrishtadyumna Beheads Drona in Yogic Trance",
            type: "canon",
            divergence: 0
          },
          {
            id: "10_2B",
            label: "Arjuna Intervenes to Prevent Unarmed Beheading",
            type: "subversive",
            divergence: 50
          },
          {
            id: "10_2C",
            label: "Drona Ascends Spiritually to Heavens Before Strike",
            type: "radical",
            divergence: 85
          }
        ]
      },
      {
        actNumber: 3,
        actTitle: "Act III: Ashwatthama's Wrath",
        panels: [
          {
            id: "p10_3_1",
            bg: "/assets/bg_kurukshetra.jpg",
            caption: "Ashwatthama learns of his father's death and unleashes the apocalyptic Narayanastra upon the Pandava army."
          }
        ],
        prompt: "Decision Gate 3: The Narayanastra rains fire on any warrior holding weapons. How does Krishna instruct the army to survive?",
        choices: [
          {
            id: "10_3A",
            label: "Lay Down All Arms & Bow Flat to Earth in Humility",
            type: "canon",
            divergence: 0
          },
          {
            id: "10_3B",
            label: "Arjuna Counters with Pashupatastra Cosmic Defense",
            type: "subversive",
            divergence: 60
          },
          {
            id: "10_3C",
            label: "Krishna Absorbs Fire into Divine Body Directly",
            type: "radical",
            divergence: 90
          }
        ]
      }
    ],
    epilogue: {
      title: "The Chariot Touches Earth",
      summary: "The fall of Guru Drona leads to the final catastrophic days of Kurukshetra, testing the moral fabric of the Pandavas."
    }
  }
];
