export interface WebtoonPanel {
  id: string;
  bg: string;
  charImg?: string;
  speaker?: string | null;
  dialogue?: string;
  caption?: string;
  sfx?: string;
}

export interface WebtoonChoice {
  id: string;
  label: string;
  type: 'canon' | 'subversive' | 'radical';
  divergence: number;
  continuationPanels: WebtoonPanel[];
  epilogue: {
    title: string;
    summary: string;
  };
}

export interface WebtoonIsland {
  id: string;
  title: string;
  parva: string;
  coverImg: string;
  era: string;
  keyCharacters: string[];
  initialPanels: WebtoonPanel[];
  choicePrompt: string;
  choices: WebtoonChoice[];
}

export const webtoonIslands: WebtoonIsland[] = [
  {
    id: "island-1",
    title: "The Cursed Hunt of Shatashringa",
    parva: "Adi Parva",
    coverImg: "/assets/map_bg.jpg",
    era: "Dawn of the Kuru Lineage",
    keyCharacters: ["King Pandu", "Sage Kindama", "Queen Kunti"],
    initialPanels: [
      {
        id: "p1",
        bg: "/assets/bg_forest.jpg",
        speaker: null,
        caption: "Deep in the misty peaks of Shatashringa, King Pandu hunts beneath the golden twilight canopy."
      },
      {
        id: "p2",
        bg: "/assets/bg_forest.jpg",
        charImg: "/assets/pandu.png",
        speaker: "King Pandu",
        dialogue: "A rare deer mating in the sacred groves... my golden arrow shall not miss!",
        sfx: "TWAAANG!"
      },
      {
        id: "p3",
        bg: "/assets/bg_forest.jpg",
        speaker: "Sage Kindama (In Agony)",
        dialogue: "Cruel king! You struck down a sage in the sacred act of love! Receive my dying curse: the moment you embrace your queens in passion, your life shall flee your mortal body!",
        sfx: "KRZZZT!"
      }
    ],
    choicePrompt: "Pandu stands cursed with instant death upon intimacy. How shall the King of Hastinapur respond?",
    choices: [
      {
        id: "1A",
        label: "The Forest Penance (Canonical Itihasa)",
        type: "canon",
        divergence: 0,
        continuationPanels: [
          {
            id: "p4_1A",
            bg: "/assets/bg_forest.jpg",
            charImg: "/assets/pandu.png",
            speaker: "King Pandu",
            dialogue: "My crown is tainted. I cast away royal silks for deerskin. We remain in the deep forest; Kunti, invoke the devas to grant us sons of divine lineage."
          },
          {
            id: "p5_1A",
            bg: "/assets/bg_forest.jpg",
            speaker: "Narrator",
            caption: "Pandu dies years later breaking his vow. Kunti returns to Hastinapur with five divine orphans whose right to rule is violently contested by Duryodhana."
          }
        ],
        epilogue: {
          title: "The Seeds of Kurukshetra",
          summary: "The Pandavas grow up as disputed outsiders in Hastinapur, sealing the path to civil war."
        }
      },
      {
        id: "1B",
        label: "The Pragmatic Emperor (Remain on Throne)",
        type: "subversive",
        divergence: 45,
        continuationPanels: [
          {
            id: "p4_1B",
            bg: "/assets/bg_forest.jpg",
            charImg: "/assets/pandu.png",
            speaker: "King Pandu",
            dialogue: "A true king atones through righteous rule, not abandonment of his people. Vidura, assemble the sages in Hastinapur!"
          },
          {
            id: "p5_1B",
            bg: "/assets/bg_arena.jpg",
            speaker: "Narrator",
            caption: "Pandu rules from the capital. Kunti invokes the gods inside the royal palace under royal witness. The Pandavas are born recognized as undisputed crown princes."
          }
        ],
        epilogue: {
          title: "Pandava Golden Age",
          summary: "Duryodhana never grows up expecting the crown; the succession crisis is cleanly averted."
        }
      },
      {
        id: "1C",
        label: "Total Abdication to Dhritarashtra",
        type: "radical",
        divergence: 85,
        continuationPanels: [
          {
            id: "p4_1C",
            bg: "/assets/bg_forest.jpg",
            charImg: "/assets/pandu.png",
            speaker: "King Pandu",
            dialogue: "I formally sever all claims to the throne for myself and any unborn seed. Dhritarashtra is Emperor absolute."
          },
          {
            id: "p5_1C",
            bg: "/assets/bg_dice_hall.jpg",
            speaker: "Narrator",
            caption: "Dhritarashtra is formally consecrated. When the Pandavas arrive later, they hold zero legal claim, living as simple courtiers without war."
          }
        ],
        epilogue: {
          title: "Kaurava Absolute Hegemony",
          summary: "The throne passes cleanly down Duryodhana's line, preventing the Kurukshetra War entirely."
        }
      }
    ]
  },
  {
    id: "island-2",
    title: "The Arena of Prodigies",
    parva: "Adi Parva",
    coverImg: "/assets/bg_arena.jpg",
    era: "Youth of the Princes",
    keyCharacters: ["Guru Drona", "Arjuna", "Karna", "Duryodhana"],
    initialPanels: [
      {
        id: "p1_2",
        bg: "/assets/bg_arena.jpg",
        speaker: "Narrator",
        caption: "In the grand amphitheater of Hastinapur, Guru Drona showcases the martial mastery of the Kuru princes."
      },
      {
        id: "p2_2",
        bg: "/assets/bg_arena.jpg",
        charImg: "/assets/arjuna.png",
        speaker: "Arjuna",
        dialogue: "Witness the Varunastra! Rain falls at my command, filling the arena with divine brilliance!",
        sfx: "SHING!"
      },
      {
        id: "p3_2",
        bg: "/assets/bg_arena.jpg",
        charImg: "/assets/karna.png",
        speaker: "Karna",
        dialogue: "Boast not, prince! Whatever feat Arjuna has shown, I shall duplicate—and surpass!",
        sfx: "THWACK!"
      }
    ],
    choicePrompt: "Karna demands a duel of archers. Kripacharya halts him demanding royal lineage. How shall Karna react?",
    choices: [
      {
        id: "2A",
        label: "Accept Duryodhana's Crown of Anga (Canonical Itihasa)",
        type: "canon",
        divergence: 0,
        continuationPanels: [
          {
            id: "p4_2A",
            bg: "/assets/bg_arena.jpg",
            charImg: "/assets/karna.png",
            speaker: "Karna",
            dialogue: "Duryodhana crowns me King of Anga on the spot! My life, my bow, and my loyalty belong forever to the Kuru prince!"
          },
          {
            id: "p5_2A",
            bg: "/assets/bg_arena.jpg",
            speaker: "Narrator",
            caption: "The bond between Karna and Duryodhana is forged in royal gold, laying the military spine for the Kaurava army."
          }
        ],
        epilogue: {
          title: "The Unshakeable Alliance",
          summary: "Karna's eternal gratitude to Duryodhana binds him to the Kaurava camp unto death."
        }
      },
      {
        id: "2B",
        label: "Demonstrate Divine Astras Without Permission",
        type: "subversive",
        divergence: 50,
        continuationPanels: [
          {
            id: "p4_2B",
            bg: "/assets/bg_arena.jpg",
            charImg: "/assets/karna.png",
            speaker: "Karna",
            dialogue: "A Kshatriya is defined by martial valour, not bloodlines! Behold the Agneyastra!"
          },
          {
            id: "p5_2B",
            bg: "/assets/bg_arena.jpg",
            speaker: "Narrator",
            caption: "Karna's raw display silences the elders. Bhishma recognizes his divine aura and invites him into royal service independently."
          }
        ],
        epilogue: {
          title: "Karna the Independent Sovereign",
          summary: "Karna refuses Duryodhana's patronage, becoming a neutral warrior sought by all realms."
        }
      },
      {
        id: "2C",
        label: "Challenge Drona directly to Single Combat",
        type: "radical",
        divergence: 90,
        continuationPanels: [
          {
            id: "p4_2C",
            bg: "/assets/bg_arena.jpg",
            charImg: "/assets/karna.png",
            speaker: "Karna",
            dialogue: "If your students hide behind lineage rules, then master, test your own bow against mine!"
          },
          {
            id: "p5_2C",
            bg: "/assets/bg_arena.jpg",
            speaker: "Narrator",
            caption: "Drona accepts the duel in shock. Karna breaks Drona's bow in three arrows, forcing Drona to publicly acknowledge Karna as the world's greatest archer."
          }
        ],
        epilogue: {
          title: "The Shattered Hierarchy",
          summary: "Drona's pride is broken; Arjuna's undisputed claim as top warrior vanishes in a single afternoon."
        }
      }
    ]
  },
  {
    id: "island-3",
    title: "The House of Lac at Varanavata",
    parva: "Adi Parva",
    coverImg: "/assets/bg_lac_palace.jpg",
    era: "The Assassination Plot",
    keyCharacters: ["Yudhishthira", "Bhima", "Purochana", "Vidura"],
    initialPanels: [
      {
        id: "p1_3",
        bg: "/assets/bg_lac_palace.jpg",
        speaker: "Narrator",
        caption: "Duryodhana builds a royal palace at Varanavata constructed entirely of highly flammable lac, resin, and ghee."
      },
      {
        id: "p2_3",
        bg: "/assets/bg_lac_palace.jpg",
        charImg: "/assets/yudhishthira.png",
        speaker: "Yudhishthira",
        dialogue: "Uncle Vidura warned us in secret code: 'He who knows the forest survives the wildfire by burrowing like a rat.'"
      },
      {
        id: "p3_3",
        bg: "/assets/bg_lac_palace.jpg",
        speaker: "Purochana (In Shadows)",
        dialogue: "Tonight, while the Pandavas sleep off the feast, I set torch to the foundation!",
        sfx: "KRZZZT!"
      }
    ],
    choicePrompt: "The resin walls melt into flame. How do the Pandavas escape Varanavata?",
    choices: [
      {
        id: "3A",
        label: "Escape via Underground Tunnel (Canonical Itihasa)",
        type: "canon",
        divergence: 0,
        continuationPanels: [
          {
            id: "p4_3A",
            bg: "/assets/bg_lac_palace.jpg",
            charImg: "/assets/bhima.png",
            speaker: "Bhima",
            dialogue: "I carry Mother Kunti and my brothers into the secret tunnel dug by Vidura's miner!"
          },
          {
            id: "p5_3A",
            bg: "/assets/bg_forest.jpg",
            speaker: "Narrator",
            caption: "The lac palace burns to ashes. Hastinapur believes the Pandavas dead, forcing them into wilderness exile in disguise."
          }
        ],
        epilogue: {
          title: "The Phoenix in the Forest",
          summary: "Disguised as Brahmins, the Pandavas travel unseen to Panchala to reshape their destiny."
        }
      },
      {
        id: "3B",
        label: "Confront & Arrest Purochana Publicly",
        type: "subversive",
        divergence: 55,
        continuationPanels: [
          {
            id: "p4_3B",
            bg: "/assets/bg_lac_palace.jpg",
            charImg: "/assets/bhima.png",
            speaker: "Bhima",
            dialogue: "I seize Purochana by the neck before he touches torch to wall! Bound in iron chains, he confesses before the citizens!"
          },
          {
            id: "p5_3B",
            bg: "/assets/bg_dice_hall.jpg",
            speaker: "Narrator",
            caption: "Purochana's confession reaches Hastinapur. Dhritarashtra is forced to publicly exile Duryodhana for attempted murder."
          }
        ],
        epilogue: {
          title: "Duryodhana's Disgrace",
          summary: "The murder plot backfires entirely; Duryodhana loses all political standing in court."
        }
      },
      {
        id: "3C",
        label: "Bhima Carries the Family Over the Roof in Battle Rage",
        type: "radical",
        divergence: 85,
        continuationPanels: [
          {
            id: "p4_3C",
            bg: "/assets/bg_lac_palace.jpg",
            charImg: "/assets/bhima.png",
            speaker: "Bhima",
            dialogue: "No tunnels! I leap through the flaming roof with my family on my shoulders and march straight back to Hastinapur!"
          },
          {
            id: "p5_3C",
            bg: "/assets/bg_arena.jpg",
            speaker: "Narrator",
            caption: "Bhima storms into Dhritarashtra's throne room carrying charred lac beams, forcing an immediate trial of the Kaurava princes."
          }
        ],
        epilogue: {
          title: "Direct Royal Confrontation",
          summary: "The Pandavas refuse secrecy and force an early showdown in the Kuru capital."
        }
      }
    ]
  },
  {
    id: "island-4",
    title: "The Swayamvara of Panchala",
    parva: "Adi Parva",
    coverImg: "/assets/bg_swayamvara.jpg",
    era: "The Alliance of Fire",
    keyCharacters: ["Draupadi", "Arjuna", "Queen Kunti", "King Drupada"],
    initialPanels: [
      {
        id: "p1_4",
        bg: "/assets/bg_swayamvara.jpg",
        speaker: "Narrator",
        caption: "In the ornate swayamvara hall of King Drupada, kings from across Aryavarta fail to string the cosmic bow of Lord Shiva."
      },
      {
        id: "p2_4",
        bg: "/assets/bg_swayamvara.jpg",
        charImg: "/assets/arjuna.png",
        speaker: "Arjuna (Disguised)",
        dialogue: "A Brahmin steps into the arena! I draw the bowstring and strike the rotating fish eye reflected in water!",
        sfx: "DHA-DHAM!"
      },
      {
        id: "p3_4",
        bg: "/assets/bg_swayamvara.jpg",
        charImg: "/assets/draupadi.png",
        speaker: "Draupadi",
        dialogue: "I garland the victor! But when we return to his mother's cottage, Kunti speaks without looking: 'Share whatever alms you brought today.'"
      }
    ],
    choicePrompt: "Arjuna wins Draupadi and brings her to Kunti's hut. Kunti speaks: 'Share whatever you brought equally.' How shall they proceed?",
    choices: [
      {
        id: "4A",
        label: "Honor Mother's Word: Five-Fold Marriage (Canonical Itihasa)",
        type: "canon",
        divergence: 0,
        continuationPanels: [
          {
            id: "p4_4A",
            bg: "/assets/bg_swayamvara.jpg",
            charImg: "/assets/yudhishthira.png",
            speaker: "Yudhishthira",
            dialogue: "Mother's word cannot be made untruthful. Draupadi shall be Empress to all five Pandavas."
          },
          {
            id: "p5_4A",
            bg: "/assets/bg_swayamvara.jpg",
            speaker: "Narrator",
            caption: "The five brothers bind themselves in an unbreakable brotherhood, backed by the immense military power of Panchala."
          }
        ],
        epilogue: {
          title: "The Five-Fold Empire",
          summary: "Draupadi becomes the common thread holding five super-warriors together as a unified force."
        }
      },
      {
        id: "4B",
        label: "Clarify the Words: Draupadi Weds Arjuna Alone",
        type: "subversive",
        divergence: 60,
        continuationPanels: [
          {
            id: "p4_4B",
            bg: "/assets/bg_swayamvara.jpg",
            charImg: "/assets/arjuna.png",
            speaker: "Arjuna",
            dialogue: "Mother mistook Draupadi for alms. Sage Vyasa confirms: she won her groom through archery and shall wed Arjuna alone."
          },
          {
            id: "p5_4B",
            bg: "/assets/bg_swayamvara.jpg",
            speaker: "Narrator",
            caption: "Arjuna weds Draupadi. Bhima and Yudhishthira marry princesses of neighbouring kingdoms, creating a massive tri-state alliance."
          }
        ],
        epilogue: {
          title: "The Multi-Kingdom Coalition",
          summary: "Separate marriages widen the Pandava diplomatic network across northern Aryavarta."
        }
      },
      {
        id: "4C",
        label: "Draupadi Assumes Independent Regency of Panchala",
        type: "radical",
        divergence: 90,
        continuationPanels: [
          {
            id: "p4_4C",
            bg: "/assets/bg_swayamvara.jpg",
            charImg: "/assets/draupadi.png",
            speaker: "Draupadi",
            dialogue: "I am born of holy sacrificial fire! I choose Arjuna as my commander, but I rule Panchala in my own divine right!"
          },
          {
            id: "p5_4C",
            bg: "/assets/bg_swayamvara.jpg",
            speaker: "Narrator",
            caption: "Draupadi takes the throne of Panchala herself, transforming Panchala into the dominant superpower of the subcontinent."
          }
        ],
        epilogue: {
          title: "Empress of Fire",
          summary: "Draupadi rules Panchala directly, altering the geopolitical landscape of ancient India."
        }
      }
    ]
  },
  {
    id: "island-5",
    title: "The Partition of Khandavaprastha",
    parva: "Sabha Parva",
    coverImg: "/assets/bg_khandava.jpg",
    era: "Building the Golden Capital",
    keyCharacters: ["Arjuna", "Lord Krishna", "Agni", "Mayasura"],
    initialPanels: [
      {
        id: "p1_5",
        bg: "/assets/bg_khandava.jpg",
        speaker: "Narrator",
        caption: "Dhritarashtra divides the kingdom, granting the Pandavas the barren, serpent-infested wilderness of Khandavaprastha."
      },
      {
        id: "p2_5",
        bg: "/assets/bg_khandava.jpg",
        charImg: "/assets/krishna.png",
        speaker: "Lord Krishna",
        dialogue: "Lord Agni seeks to consume Khandava forest to regain his divine vigor. Arjuna, wield Gandiva and rain arrows to block the sky!"
      },
      {
        id: "p3_5",
        bg: "/assets/bg_khandava.jpg",
        speaker: "Mayasura (Pleading)",
        dialogue: "Spare my life from the flames, Arjuna! I am Maya, master architect of the Asuras. I shall build you a palace unmatched in the three worlds!",
        sfx: "KRZZZT!"
      }
    ],
    choicePrompt: "Agni craves the celestial forest. How shall Arjuna and Krishna handle the woodland clearing?",
    choices: [
      {
        id: "5A",
        label: "Burn Khandava with Cosmic Fire (Canonical Itihasa)",
        type: "canon",
        divergence: 0,
        continuationPanels: [
          {
            id: "p4_5A",
            bg: "/assets/bg_khandava.jpg",
            charImg: "/assets/arjuna.png",
            speaker: "Arjuna",
            dialogue: "Agni consumes the forest! Mayasura constructs Mayasabha—the Hall of Illusions!"
          },
          {
            id: "p5_5A",
            bg: "/assets/bg_dice_hall.jpg",
            speaker: "Narrator",
            caption: "Indraprastha becomes the wonder of Aryavarta. Duryodhana visits, falls into optical illusion pools, and vows revenge."
          }
        ],
        epilogue: {
          title: "The Jewel of Indraprastha",
          summary: "The unmatched splendor of Mayasabha ignites Duryodhana's consuming envy."
        }
      },
      {
        id: "5B",
        label: "Build Indraprastha with Naga Alliance & Mayasura",
        type: "subversive",
        divergence: 50,
        continuationPanels: [
          {
            id: "p4_5B",
            bg: "/assets/bg_khandava.jpg",
            charImg: "/assets/krishna.png",
            speaker: "Lord Krishna",
            dialogue: "We negotiate with Takshaka's Nagas! Half the forest remains a sacred serpent sanctuary while Mayasura builds the capital."
          },
          {
            id: "p5_5B",
            bg: "/assets/bg_khandava.jpg",
            speaker: "Narrator",
            caption: "The Naga army allies with Indraprastha, giving the Pandavas an invincible subterranean espionage network."
          }
        ],
        epilogue: {
          title: "The Serpent Treaty",
          summary: "Indraprastha gains the secret backing of the Naga realms, securing its borders permanently."
        }
      },
      {
        id: "5C",
        label: "Reject Agni and Establish Forest Sanctuary",
        type: "radical",
        divergence: 85,
        continuationPanels: [
          {
            id: "p4_5C",
            bg: "/assets/bg_khandava.jpg",
            charImg: "/assets/arjuna.png",
            speaker: "Arjuna",
            dialogue: "We do not build our capital upon the ashes of living creatures! Agni must look elsewhere."
          },
          {
            id: "p5_5C",
            bg: "/assets/bg_forest.jpg",
            speaker: "Narrator",
            caption: "Indraprastha is constructed as an eco-harmonious forest kingdom, gaining the eternal blessing of Indra and the Devas."
          }
        ],
        epilogue: {
          title: "The Sacred Woodland Citadel",
          summary: "The Pandavas build a sustainable ecological empire beloved by all forest clans."
        }
      }
    ]
  },
  {
    id: "island-6",
    title: "The Hall of Loaded Dice",
    parva: "Sabha Parva",
    coverImg: "/assets/bg_dice_hall.jpg",
    era: "The Great Dishonor",
    keyCharacters: ["Shakuni", "Yudhishthira", "Draupadi", "Lord Krishna"],
    initialPanels: [
      {
        id: "p1_6",
        bg: "/assets/bg_dice_hall.jpg",
        speaker: "Narrator",
        caption: "Incense clouds the opulent dicing hall of Hastinapur. Shakuni rolls his carved ivory cubes across the blood-red silk."
      },
      {
        id: "p2_6",
        bg: "/assets/bg_dice_hall.jpg",
        charImg: "/assets/shakuni.png",
        speaker: "Shakuni",
        dialogue: "What is an emperor who fears a pair of dice? Stake Indraprastha, Yudhishthira... or do you cower before your cousins?",
        sfx: "CLACK-CLACK!"
      },
      {
        id: "p3_6",
        bg: "/assets/bg_dice_hall.jpg",
        charImg: "/assets/yudhishthira.png",
        speaker: "Yudhishthira",
        dialogue: "A Kshatriya never rejects a challenge to the board. The stakes are laid!",
        sfx: "DHA-DHAM!"
      }
    ],
    choicePrompt: "Shakuni's rigged dice are primed. How shall the Pandavas navigate the fatal invitation?",
    choices: [
      {
        id: "6A",
        label: "The Fatal Wager (Canonical Itihasa)",
        type: "canon",
        divergence: 0,
        continuationPanels: [
          {
            id: "p4_6A",
            bg: "/assets/bg_dice_hall.jpg",
            charImg: "/assets/yudhishthira.png",
            speaker: "Yudhishthira",
            dialogue: "I roll! I stake my brothers... I stake myself... and I stake Queen Draupadi!"
          },
          {
            id: "p5_6A",
            bg: "/assets/bg_dice_hall.jpg",
            charImg: "/assets/draupadi.png",
            speaker: "Queen Draupadi",
            dialogue: "Elders of Hastinapur, shame upon this court! I vow my hair shall remain untied until washed in Dushasana's blood!"
          }
        ],
        epilogue: {
          title: "Vastraharan & The Inevitable War",
          summary: "The moral legitimacy of the elders crumbles; blood vows make total annihilation of the Kauravas unavoidable."
        }
      },
      {
        id: "6B",
        label: "Vidura's Royal Veto (Cancel Game)",
        type: "subversive",
        divergence: 60,
        continuationPanels: [
          {
            id: "p4_6B",
            bg: "/assets/bg_dice_hall.jpg",
            speaker: "Vidura",
            dialogue: "Halt this unholy gamble! Jackals howl in the royal chambers! Dhritarashtra, overturn this table before your sons burn the world!"
          },
          {
            id: "p5_6B",
            bg: "/assets/bg_dice_hall.jpg",
            speaker: "Narrator",
            caption: "Terrified by the omens, Dhritarashtra halts the game before the first wager. The Pandavas return to Indraprastha with realm and honor intact."
          }
        ],
        epilogue: {
          title: "The Fragile Peace",
          summary: "Indraprastha retains its independence, isolating Duryodhana into bitter impotence."
        }
      },
      {
        id: "6C",
        label: "The Champion Roll (Field Krishna)",
        type: "radical",
        divergence: 80,
        continuationPanels: [
          {
            id: "p4_6C",
            bg: "/assets/bg_dice_hall.jpg",
            charImg: "/assets/krishna.png",
            speaker: "Lord Krishna",
            dialogue: "If Duryodhana fields Uncle Shakuni to roll for him, then Yudhishthira fields Vasudeva to roll for Indraprastha. Let us cast the ivory, Shakuni!"
          },
          {
            id: "p5_6C",
            bg: "/assets/bg_dice_hall.jpg",
            charImg: "/assets/shakuni.png",
            speaker: "Shakuni",
            dialogue: "Impossible! The dice roll against my will... Hastinapur's treasury is lost in a single throw!"
          }
        ],
        epilogue: {
          title: "Cosmic Counter-Gamble",
          summary: "Krishna strips Hastinapur of its wealth and arms, bankrupting Duryodhana and securing the Pandava empire without bloodshed."
        }
      }
    ]
  },
  {
    id: "island-7",
    title: "The Banishment Pact",
    parva: "Vana Parva",
    coverImg: "/assets/bg_exile.jpg",
    era: "The 12-Year Wilderness Penance",
    keyCharacters: ["Yudhishthira", "Bhima", "Draupadi", "Arjuna"],
    initialPanels: [
      {
        id: "p1_7",
        bg: "/assets/bg_exile.jpg",
        speaker: "Narrator",
        caption: "Striped of royal garments, the Pandavas and Draupadi wander deep into Kamyaka forest for 12 years of wilderness exile."
      },
      {
        id: "p2_7",
        bg: "/assets/bg_exile.jpg",
        charImg: "/assets/draupadi.png",
        speaker: "Draupadi",
        dialogue: "How long shall we eat wild roots while Duryodhana sleeps on silk? Yudhishthira, forgiveness to the wicked is treason to Dharma!"
      },
      {
        id: "p3_7",
        bg: "/assets/bg_exile.jpg",
        charImg: "/assets/bhima.png",
        speaker: "Bhima",
        dialogue: "My mace rusts in the forest damp! Give the command, brother, and I crush Hastinapur's gates tonight!"
      }
    ],
    choicePrompt: "In the wilderness, Bhima and Draupadi urge Yudhishthira to march back on Hastinapur immediately. What shall Yudhishthira order?",
    choices: [
      {
        id: "7A",
        label: "Endure 12-Year Exile & 1 Year Incognito (Canonical Itihasa)",
        type: "canon",
        divergence: 0,
        continuationPanels: [
          {
            id: "p4_7A",
            bg: "/assets/bg_exile.jpg",
            charImg: "/assets/yudhishthira.png",
            speaker: "Yudhishthira",
            dialogue: "Truth is the foundation of the cosmos. We pledged 12 years in exile and one year hidden. We fulfill the vow to the last second."
          },
          {
            id: "p5_7A",
            bg: "/assets/bg_exile.jpg",
            speaker: "Narrator",
            caption: "During exile, Arjuna travels to the heavens for divine astras, while Bhima gains the strength of thousand elephants."
          }
        ],
        epilogue: {
          title: "The Cosmic Tempering",
          summary: "12 years of spiritual penance transform the Pandavas into god-like warriors ready for Kurukshetra."
        }
      },
      {
        id: "7B",
        label: "Arjuna Seeks Pashupatastra Early for Pre-emptive War",
        type: "subversive",
        divergence: 55,
        continuationPanels: [
          {
            id: "p4_7B",
            bg: "/assets/bg_exile.jpg",
            charImg: "/assets/arjuna.png",
            speaker: "Arjuna",
            dialogue: "I ascend Mount Kailash immediately to obtain Shiva's Pashupatastra! Once obtained, we offer Hastinapur one final surrender deadline."
          },
          {
            id: "p5_7B",
            bg: "/assets/bg_exile.jpg",
            speaker: "Narrator",
            caption: "Arjuna wins Shiva's weapon in record time. Armed with cosmic power, the Pandavas issue a 30-day ultimatum to Duryodhana."
          }
        ],
        epilogue: {
          title: "The Nuclear Ultimatum",
          summary: "Possession of the Pashupatastra forces Bhishma and Drona to compel Duryodhana to negotiate."
        }
      },
      {
        id: "7C",
        label: "Form Alliance with Panchala & Yadavas to March on Hastinapur",
        type: "radical",
        divergence: 85,
        continuationPanels: [
          {
            id: "p4_7C",
            bg: "/assets/bg_exile.jpg",
            charImg: "/assets/bhima.png",
            speaker: "Bhima",
            dialogue: "Drupada and Balarama march with us! A rigged game is legally void!"
          },
          {
            id: "p5_7C",
            bg: "/assets/bg_kurukshetra.jpg",
            speaker: "Narrator",
            caption: "The allied armies lay siege to Hastinapur in Year 2 of exile, catching Duryodhana completely unprepared."
          }
        ],
        epilogue: {
          title: "The Early Blitzkrieg",
          summary: "A swift coalition assault overthrows Duryodhana before the Kaurava army can fully assemble."
        }
      }
    ]
  },
  {
    id: "island-8",
    title: "The Shadow in Matsya Realm",
    parva: "Virata Parva",
    coverImg: "/assets/bg_matsya.jpg",
    era: "The Year of Incognito Disguise",
    keyCharacters: ["Draupadi (Sairandhri)", "Bhima (Valala)", "Kichaka", "King Virata"],
    initialPanels: [
      {
        id: "p1_8",
        bg: "/assets/bg_matsya.jpg",
        speaker: "Narrator",
        caption: "Year 13. The Pandavas live disguised as servants in the court of King Virata of Matsya."
      },
      {
        id: "p2_8",
        bg: "/assets/bg_matsya.jpg",
        speaker: "Commander Kichaka",
        dialogue: "Beautiful Sairandhri... you serve the Queen, but tonight you shall come to my private chamber!",
        sfx: "SHING!"
      },
      {
        id: "p3_8",
        bg: "/assets/bg_matsya.jpg",
        charImg: "/assets/bhima.png",
        speaker: "Bhima (Cook Valala)",
        dialogue: "Tell Kichaka to meet you in the dark music hall tonight... I shall be waiting under the silk bed sheet!",
        sfx: "DHA-DHAM!"
      }
    ],
    choicePrompt: "Kichaka enters the dark palace hall expecting Draupadi. Bhima waits in shadows. How shall they strike?",
    choices: [
      {
        id: "8A",
        label: "Bhima Crushes Kichaka in Darkness (Canonical Itihasa)",
        type: "canon",
        divergence: 0,
        continuationPanels: [
          {
            id: "p4_8A",
            bg: "/assets/bg_matsya.jpg",
            charImg: "/assets/bhima.png",
            speaker: "Bhima",
            dialogue: "I roll Kichaka into a ball of crushed bone! Not a single scream escapes his throat!"
          },
          {
            id: "p5_8A",
            bg: "/assets/bg_matsya.jpg",
            speaker: "Narrator",
            caption: "Kichaka's death panics the Kaurava spies, leading Duryodhana to launch the Cattle Raid of Matsya."
          }
        ],
        epilogue: {
          title: "The Secret Retribution",
          summary: "Kichaka's elimination clears the way for the Pandavas to reveal themselves on the 365th day."
        }
      },
      {
        id: "8B",
        label: "Expose Identity & Claim Virata's Royal Protection",
        type: "subversive",
        divergence: 50,
        continuationPanels: [
          {
            id: "p4_8B",
            bg: "/assets/bg_matsya.jpg",
            charImg: "/assets/yudhishthira.png",
            speaker: "Yudhishthira",
            dialogue: "The 13th year expires at midnight! King Virata, behold Emperor Yudhishthira and the hero Bhima!"
          },
          {
            id: "p5_8B",
            bg: "/assets/bg_matsya.jpg",
            speaker: "Narrator",
            caption: "King Virata pledges his entire royal army to the Pandavas on the spot and marries Princess Uttara to Arjuna's son Abhimanyu."
          }
        ],
        epilogue: {
          title: "The Matsya Royal Compact",
          summary: "Matsya's instant mobilization gives the Pandavas their first major royal host."
        }
      },
      {
        id: "8C",
        label: "Draupadi Uses Sairandhri Power to Subdue Kichaka Publicly",
        type: "radical",
        divergence: 88,
        continuationPanels: [
          {
            id: "p4_8C",
            bg: "/assets/bg_matsya.jpg",
            charImg: "/assets/draupadi.png",
            speaker: "Draupadi",
            dialogue: "I summon the invisible Gandharva guardians! Divine energy strikes Kichaka down in full view of the royal assembly!"
          },
          {
            id: "p5_8C",
            bg: "/assets/bg_matsya.jpg",
            speaker: "Narrator",
            caption: "The court of Matsya falls to their knees in divine awe, recognizing Draupadi's celestial avatar authority."
          }
        ],
        epilogue: {
          title: "Divine Wrath Unveiled",
          summary: "Draupadi's overt spiritual intervention deters any further disrespect from mortal kings."
        }
      }
    ]
  },
  {
    id: "island-9",
    title: "The Peace Envoy in Dwarka",
    parva: "Udyoga Parva",
    coverImg: "/assets/bg_dwarka.jpg",
    era: "The Gathering of Armies",
    keyCharacters: ["Lord Krishna", "Arjuna", "Duryodhana", "Balarama"],
    initialPanels: [
      {
        id: "p1_9",
        bg: "/assets/bg_dwarka.jpg",
        speaker: "Narrator",
        caption: "Both Arjuna and Duryodhana arrive simultaneously in Dwarka to seek Lord Krishna's alliance for the impending war."
      },
      {
        id: "p2_9",
        bg: "/assets/bg_dwarka.jpg",
        charImg: "/assets/duryodhana.png",
        speaker: "Duryodhana",
        dialogue: "I arrived first! I take the place of honor at Krishna's head while he slumbers!"
      },
      {
        id: "p3_9",
        bg: "/assets/bg_dwarka.jpg",
        charImg: "/assets/krishna.png",
        speaker: "Lord Krishna",
        dialogue: "I awaken and see Arjuna standing at my feet first. Duryodhana, you arrived first, but Arjuna was seen first. Therefore, both shall choose!",
        sfx: "TWAAANG!"
      }
    ],
    choicePrompt: "Krishna offers his aid: His million Narayani Sena warriors OR his unarmed self. Arjuna chooses first!",
    choices: [
      {
        id: "9A",
        label: "Arjuna Chooses Unarmed Krishna (Canonical Itihasa)",
        type: "canon",
        divergence: 0,
        continuationPanels: [
          {
            id: "p4_9A",
            bg: "/assets/bg_dwarka.jpg",
            charImg: "/assets/arjuna.png",
            speaker: "Arjuna",
            dialogue: "I choose Vasudeva alone! Be my charioteer, Lord, and guide my bow through the darkness!"
          },
          {
            id: "p5_9A",
            bg: "/assets/bg_dwarka.jpg",
            charImg: "/assets/duryodhana.png",
            speaker: "Duryodhana",
            dialogue: "Foolish Arjuna! He takes an unarmed man while I walk away with a million invincible Narayani warriors!"
          }
        ],
        epilogue: {
          title: "The Charioteer of Destiny",
          summary: "Krishna becomes Arjuna's guide, preparing the stage for the revelation of the Bhagavad Gita."
        }
      },
      {
        id: "9B",
        label: "Duryodhana Demands Both Army & Lord to Avoid War",
        type: "subversive",
        divergence: 65,
        continuationPanels: [
          {
            id: "p4_9B",
            bg: "/assets/bg_dwarka.jpg",
            charImg: "/assets/duryodhana.png",
            speaker: "Duryodhana",
            dialogue: "If Krishna refuses to fight, then Krishna shall remain neutral judge in Dwarka while the armies clash!"
          },
          {
            id: "p5_9B",
            bg: "/assets/bg_dwarka.jpg",
            speaker: "Narrator",
            caption: "Without Krishna on the battlefield, the cosmic balance shifts, turning Kurukshetra into a purely mortal war of attrition."
          }
        ],
        epilogue: {
          title: "The Mortal Clash",
          summary: "Without divine intervention on either side, the war relies entirely on mortal strategy."
        }
      },
      {
        id: "9C",
        label: "Krishna Enforces Immediate Peace Mandate in Assembly",
        type: "radical",
        divergence: 92,
        continuationPanels: [
          {
            id: "p4_9C",
            bg: "/assets/bg_dwarka.jpg",
            charImg: "/assets/krishna.png",
            speaker: "Lord Krishna",
            dialogue: "Dwarka shall not supply a single arrow or soldier to either side! We declare an absolute embargo on all Kuru warlords!"
          },
          {
            id: "p5_9C",
            bg: "/assets/bg_dice_hall.jpg",
            speaker: "Narrator",
            caption: "Deprived of Yadava support, both sides are forced into a permanent peace summit arbitrated by Balarama."
          }
        ],
        epilogue: {
          title: "The Yadava Peace Accord",
          summary: "Krishna's strict neutrality halts the mobilization of ancient India's armies."
        }
      }
    ]
  },
  {
    id: "island-10",
    title: "Fall of the Guru at Kurukshetra",
    parva: "Drona Parva",
    coverImg: "/assets/bg_kurukshetra.jpg",
    era: "The Climax of Kurukshetra",
    keyCharacters: ["Guru Drona", "Yudhishthira", "Bhima", "Lord Krishna"],
    initialPanels: [
      {
        id: "p1_10",
        bg: "/assets/bg_kurukshetra.jpg",
        speaker: "Narrator",
        caption: "Day 15 of Kurukshetra. Commander Drona annihilates entire divisions with divine astras. No mortal warrior can defeat him."
      },
      {
        id: "p2_10",
        bg: "/assets/bg_kurukshetra.jpg",
        charImg: "/assets/krishna.png",
        speaker: "Lord Krishna",
        dialogue: "Drona is invincible while holding his bow! Only news of his son Ashwatthama's death will cause him to lay down his arms."
      },
      {
        id: "p3_10",
        bg: "/assets/bg_kurukshetra.jpg",
        charImg: "/assets/bhima.png",
        speaker: "Bhima",
        dialogue: "I have slain Indravarman's giant elephant named Ashwatthama! Drona approaches Yudhishthira to ask for the absolute truth!",
        sfx: "DHA-DHAM!"
      }
    ],
    choicePrompt: "Drona turns to Yudhishthira—the man who has never uttered a lie. How shall Yudhishthira answer?",
    choices: [
      {
        id: "10A",
        label: "Yudhishthira Speaks the Half-Truth (Canonical Itihasa)",
        type: "canon",
        divergence: 0,
        continuationPanels: [
          {
            id: "p4_10A",
            bg: "/assets/bg_kurukshetra.jpg",
            charImg: "/assets/yudhishthira.png",
            speaker: "Yudhishthira",
            dialogue: "Ashwatthama is dead... (gaja iti - whether man or elephant)...",
            sfx: "KRZZZT!"
          },
          {
            id: "p5_10A",
            bg: "/assets/bg_kurukshetra.jpg",
            speaker: "Narrator",
            caption: "The blare of Krishna's conch drowns out 'gaja iti'. Drona drops his bow in grief and sits in meditation as Dhrishtadyumna strikes."
          }
        ],
        epilogue: {
          title: "The Chariot Touches Earth",
          summary: "Yudhishthira's single moral compromise causes his divine levitating chariot to touch the dusty ground."
        }
      },
      {
        id: "10B",
        label: "Yudhishthira Refuses to Lie & Fights Drona Fairly",
        type: "subversive",
        divergence: 55,
        continuationPanels: [
          {
            id: "p4_10B",
            bg: "/assets/bg_kurukshetra.jpg",
            charImg: "/assets/yudhishthira.png",
            speaker: "Yudhishthira",
            dialogue: "Master Drona! An elephant named Ashwatthama was slain by Bhima. Your son lives!"
          },
          {
            id: "p5_10B",
            bg: "/assets/bg_kurukshetra.jpg",
            speaker: "Narrator",
            caption: "Drona smiles in relief and fights on with redoubled fury, extending the war into its 20th catastrophic day."
          }
        ],
        epilogue: {
          title: "Unstained Righteousness",
          summary: "Yudhishthira preserves his untarnished truth, though the cost in Pandava lives is immense."
        }
      },
      {
        id: "10C",
        label: "Arjuna Disarms Drona via Pure Archery Duel",
        type: "radical",
        divergence: 88,
        continuationPanels: [
          {
            id: "p4_10C",
            bg: "/assets/bg_kurukshetra.jpg",
            charImg: "/assets/arjuna.png",
            speaker: "Arjuna",
            dialogue: "No deceit! I face my Guru in single combat! Gandiva against Brahmashira!"
          },
          {
            id: "p5_10C",
            bg: "/assets/bg_kurukshetra.jpg",
            speaker: "Narrator",
            caption: "Arjuna severs Drona's bowstring seven times in a row, convincing Drona that his student has surpassed him and earning Drona's peaceful retirement."
          }
        ],
        epilogue: {
          title: "The Guru's Farewell",
          summary: "Drona voluntarily lays down his arms out of pride in Arjuna's flawless martial ethics."
        }
      }
    ]
  }
];
