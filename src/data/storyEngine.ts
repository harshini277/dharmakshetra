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
  badge: 'Canon' | 'Subversive' | 'Radical' | 'Aggression' | 'Chaos' | 'Reconciliation' | 'Solitude' | 'Disgrace' | 'Trial' | 'Conditional' | 'Punitive' | 'Imperial' | 'Peace' | 'Justice' | 'Pragmatic' | 'Divine' | 'Restraint' | 'Rage' | 'Triumph' | 'Stalemate' | 'Mercy' | 'Patriarch' | 'War' | 'Diplomacy' | string;
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
  // =========================================================================
  // ISLAND 2: THE ARENA OF ANGA (FULL 3-ACT / 3-DECISION SEQUENCE)
  // =========================================================================
  "island-2": {
    id: "island-2",
    title: "The Arena of Anga",
    parva: "Adi Parva",
    rootStep: "i2_act1_start",
    nodes: {
      // ----------------------------------------------------
      // ACT 1: THE INTRUSION & LINEAGE CRISIS
      // ----------------------------------------------------
      "i2_act1_start": {
        panels: [
          {
            bgKey: "arena",
            charKey: "arjuna",
            speaker: "Arjuna",
            dialogue: "With the Agneyastra, I summon the blinding wall of fire; with the Varunastra, I quench it in torrential rain! The citizens of Hastinapur cheer, for Guru Drona himself declares no archer walks Aryavarta who can rival me.",
            sfx: "SWOOSH!"
          },
          {
            bgKey: "arena",
            charKey: "karna",
            speaker: "Karna",
            dialogue: "Do not boast so cheaply, Pandava! Whatever illusions and feats you have woven before this roaring crowd, I shall duplicate arrow-for-arrow—and then strike beyond them!",
            sfx: "THWACK!"
          },
          {
            bgKey: "arena",
            charKey: "drona",
            speaker: "Kripacharya",
            dialogue: "Hold your bow, stranger! This sacred arena is consecrated solely for Kshatriya princes of solar and lunar lines. Announce your royal father, your dynastic gotra, and your sovereign realm. Unborn kings do not duel emperors' sons!"
          },
          {
            bgKey: "arena",
            charKey: "karna",
            speaker: "Karna",
            dialogue: "My arrows know no caste, preceptor! Steel asks not for a father's certificate upon the battlefield! Must valor beg for a genealogist's seal before it strikes true?"
          }
        ],
        prompt: "DECISION 1: Kripacharya demands Karna's royal lineage. How is the stalemate broken?",
        choices: [
          {
            text: "Duryodhana steps forward to crown Karna King of Anga on the spot (Canon)",
            badge: "Canon",
            nextNode: "i2_act2_crowned"
          },
          {
            text: "Kunti rushes onto the arena sands to confess Karna is her firstborn",
            badge: "Subversive",
            nextNode: "i2_act2_kunti"
          },
          {
            text: "Bhima steps forward to mercilessly mock Karna's charioteer roots",
            badge: "Radical",
            nextNode: "i2_act2_bhima_scorn"
          }
        ]
      },

      // ----------------------------------------------------
      // ACT 2: BRANCH A - CROWNED KING OF ANGA (CANON)
      // ----------------------------------------------------
      "i2_act2_crowned": {
        panels: [
          {
            bgKey: "arena",
            charKey: "duryodhana",
            speaker: "Duryodhana",
            dialogue: "Kings are born of three springs: high birth, heroic valor, or the command of a victorious legion! If this warrior lacks a crown to duel Arjuna, I anoint him this very second. Priests, bring the holy jars of golden water—I crown Karna sovereign monarch of Anga!"
          },
          {
            bgKey: "arena",
            charKey: "karna",
            speaker: "Karna",
            dialogue: "What can a son of a charioteer give an emperor in return for an entire kingdom? What debt of blood can ever repay this honor?"
          },
          {
            bgKey: "arena",
            charKey: "duryodhana",
            speaker: "Duryodhana",
            dialogue: "Give me only your friendship, Radheya! Give me your bow when the world stands against me, and let these Pandavas know that Duryodhana bends his knee to no man!"
          },
          {
            bgKey: "arena",
            charKey: "arjuna",
            speaker: "Arjuna",
            dialogue: "A bought crown does not make a hero, Duryodhana! Step between our ropes, King of Anga, and let Gandiva test your newly purchased golden armor!"
          }
        ],
        prompt: "DECISION 2: As the duel begins, the evening conches sound sunset. How do they proceed?",
        choices: [
          {
            text: "Respect ancient Dharma: lower bows at sunset as conches blow cease-fire (Canon)",
            badge: "Canon",
            nextNode: "i2_act3_canon_sunset"
          },
          {
            text: "Karna refuses to yield and unleashes a celestial shaft despite nightfall",
            badge: "Aggression",
            nextNode: "i2_act3_night_duel"
          },
          {
            text: "Duryodhana challenges the entire Pandava brotherhood to a team brawl",
            badge: "Chaos",
            nextNode: "i2_act3_arena_brawl"
          }
        ]
      },

      // ACT 2: BRANCH B - KUNTI'S REVELATION
      "i2_act2_kunti": {
        panels: [
          {
            bgKey: "arena",
            charKey: "draupadi",
            speaker: "Queen Kunti",
            dialogue: "Lower your arrows, my sons! Guru Drona, hold your council! He is no charioteer's foster-child! He is my firstborn, begotten of Lord Surya before my marriage to King Pandu. He bears the divine Kavacha and Kundala given by the sun god himself!"
          },
          {
            bgKey: "arena",
            charKey: "karna",
            speaker: "Karna",
            dialogue: "Mother...? All my life I have been spat upon as an outcaste, washed in the mockery of commoners, while you sat wrapped in royal silk? Why speak only when my bow points at your favored child?"
          },
          {
            bgKey: "arena",
            charKey: "yudhishthira",
            speaker: "Yudhishthira",
            dialogue: "Elder brother... you are the rightful heir to the Kuru crown. The throne of Hastinapur belongs to you by sacred seniority, not to me!"
          }
        ],
        prompt: "DECISION 2: The entire royal assembly is stunned. What does Karna decide to do?",
        choices: [
          {
            text: "Karna forgives Kunti and embraces the Pandavas as their eldest brother",
            badge: "Reconciliation",
            nextNode: "i2_act3_karna_embraces"
          },
          {
            text: "Karna denounces Kunti's late confession and walks out alone in disgust",
            badge: "Solitude",
            nextNode: "i2_act3_karna_exile"
          }
        ]
      },

      // ACT 2: BRANCH C - BHIMA'S SCORN
      "i2_act2_bhima_scorn": {
        panels: [
          {
            bgKey: "arena",
            charKey: "bhima",
            speaker: "Bhima",
            dialogue: "Son of a suta, put down that bow! You are fit only to hold a horse-whip in the stables, not to exchange arrows with Partha! Take your whip and groom our stallions!"
          },
          {
            bgKey: "arena",
            charKey: "karna",
            speaker: "Karna",
            dialogue: "You speak of stables, wolf-bellied brute? Then let my arrow pierce your arrogant throat before this court!"
          }
        ],
        prompt: "DECISION 2: Bhima and Karna are about to trade lethal blows. How does Drona intervene?",
        choices: [
          {
            text: "Drona orders the imperial guards to throw Karna out of the tournament",
            badge: "Disgrace",
            nextNode: "i2_act3_karna_dishonored"
          },
          {
            text: "Drona commands a mace duel between Bhima and Karna instead",
            badge: "Trial",
            nextNode: "i2_act3_mace_duel"
          }
        ]
      },

      // ----------------------------------------------------
      // ACT 3: RESOLUTIONS & DECISION 3
      // ----------------------------------------------------
      "i2_act3_canon_sunset": {
        panels: [
          {
            bgKey: "arena",
            charKey: "drona",
            speaker: "Guru Drona",
            dialogue: "The red disc of Surya touches the western peaks! The martial codes of Bharata forbid arrow-flight once twilight falls. The contest is closed!"
          },
          {
            bgKey: "arena",
            charKey: "duryodhana",
            speaker: "Duryodhana",
            dialogue: "Come, King of Anga. Tonight you dine upon golden platters in my palace. Let Hastinapur see who stands at my right hand!"
          },
          {
            bgKey: "arena",
            charKey: "arjuna",
            speaker: "Arjuna",
            dialogue: "He duplicates my arrows with effortless ease... Krishna, who is this stranger whose eyes burn like midday suns?"
          }
        ],
        prompt: "DECISION 3: What final vow does Karna swear to Duryodhana tonight?",
        choices: [
          {
            text: "Swear eternal life-debt: 'My arrows shall belong only to your cause' (Canon)",
            badge: "Canon",
            nextNode: "i2_ending_canon"
          },
          {
            text: "Swear to defend Hastinapur, but refuse to harm the Pandavas unjustifiably",
            badge: "Conditional",
            nextNode: "i2_ending_karna_neutral"
          }
        ]
      },

      "i2_act3_night_duel": {
        panels: [
          {
            bgKey: "arena",
            charKey: "karna",
            speaker: "Karna",
            dialogue: "Dharma did not protect my dignity, so why should I protect the sunset code? Have at you, Arjuna!"
          },
          {
            bgKey: "arena",
            charKey: "arjuna",
            speaker: "Arjuna",
            dialogue: "You invite your own slaughter in the dark! Receive the celestial shafts!"
          }
        ],
        prompt: "DECISION 3: Bhishma draws his sword to stop the sacrilege. Who does he punish?",
        choices: [
          {
            text: "Imprison Karna for violating the Kshatriya code of sunset",
            badge: "Punitive",
            nextNode: "i2_ending_karna_jailed"
          },
          {
            text: "Strip Duryodhana of his royal privileges for inciting nocturnal violence",
            badge: "Imperial",
            nextNode: "i2_ending_duryodhana_disciplined"
          }
        ]
      },

      "i2_act3_arena_brawl": {
        panels: [
          {
            bgKey: "arena",
            charKey: "duryodhana",
            speaker: "Duryodhana",
            dialogue: "Kauravas! Take up your weapons! If Arjuna will not duel Karna, we take the arena floor!"
          }
        ],
        isEnding: true,
        divergence: 65,
        verdictTitle: "The Great Arena Meltdown",
        verdictDesc: "A chaotic royal brawl erupts, forcing Dhritarashtra to lock down the city and suspend all public exhibitions indefinitely."
      },

      "i2_act3_karna_embraces": {
        panels: [
          {
            bgKey: "arena",
            charKey: "karna",
            speaker: "Karna",
            dialogue: "If Dharma wills it, I accept my brothers. But hear me: the throne of Hastinapur shall be governed by truth, not vengeance."
          },
          {
            bgKey: "arena",
            charKey: "duryodhana",
            speaker: "Duryodhana",
            dialogue: "Betrayed... by my own ally before the sun could set. All my plans... shattered in a single afternoon."
          }
        ],
        prompt: "DECISION 3: How does Karna handle Duryodhana now that he is the eldest Pandava?",
        choices: [
          {
            text: "Offer Duryodhana an honorable co-regency to prevent any civil war",
            badge: "Peace",
            nextNode: "i2_ending_six_pandavas"
          },
          {
            text: "Order Duryodhana exiled from Hastinapur for treasonous conspiracies",
            badge: "Justice",
            nextNode: "i2_ending_kauravas_banished"
          }
        ]
      },

      "i2_act3_karna_exile": {
        panels: [
          {
            bgKey: "arena",
            charKey: "karna",
            speaker: "Karna",
            dialogue: "I belong to no house—neither Suta nor Kuru. I walk my path alone."
          }
        ],
        isEnding: true,
        divergence: 70,
        verdictTitle: "The Lonely Sun",
        verdictDesc: "Karna departs Hastinapur independently, becoming a legendary roaming hero unaffiliated with either warring faction."
      },

      "i2_act3_karna_dishonored": {
        panels: [
          {
            bgKey: "arena",
            charKey: "karna",
            speaker: "Karna",
            dialogue: "You cast me out today, Drona... but tomorrow the world will bow to my bow!"
          }
        ],
        isEnding: true,
        divergence: 60,
        verdictTitle: "The Outcast's Vengeance",
        verdictDesc: "Karna seeks refuge in Mahendra mountain to learn under Lord Parashurama directly."
      },

      "i2_act3_mace_duel": {
        panels: [
          {
            bgKey: "arena",
            charKey: "bhima",
            speaker: "Bhima",
            dialogue: "Mace against mace! Let us see if your Suta hands can hold golden iron!"
          }
        ],
        isEnding: true,
        divergence: 55,
        verdictTitle: "The Clash of Iron & Mace",
        verdictDesc: "Bhima and Karna fight to a standstill in mace combat, earning mutual warrior respect."
      },

      // ----------------------------------------------------
      // ENDINGS / EPILOGUES
      // ----------------------------------------------------
      "i2_ending_canon": {
        panels: [
          {
            bgKey: "arena",
            speaker: "Chronicler",
            dialogue: "Karna drinks the ceremonial wine with Duryodhana. The fatal bond is sealed. With Karna's solar invulnerability on his side, Duryodhana gains the confidence to orchestrate the House of Lac and the Game of Dice."
          }
        ],
        isEnding: true,
        divergence: 0,
        verdictTitle: "Canonical Itihasa: The Unbreakable Shield of Anga",
        verdictDesc: "Duryodhana secures his greatest champion. The martial balance of Aryavarta tips, making the Kurukshetra war inevitable."
      },
      "i2_ending_karna_neutral": {
        panels: [
          {
            bgKey: "arena",
            speaker: "Chronicler",
            dialogue: "Karna accepts Anga as an independent kingdom, refusing to become Duryodhana's blind weapon. Deprived of unconditional martial supremacy, Duryodhana is forced into diplomatic compromise."
          }
        ],
        isEnding: true,
        divergence: 45,
        verdictTitle: "The Sovereign King of Anga",
        verdictDesc: "Without Karna as his absolute war-shield, Duryodhana lacks the military backing to provoke total war."
      },
      "i2_ending_six_pandavas": {
        panels: [
          {
            bgKey: "arena",
            speaker: "Chronicler",
            dialogue: "Karna is consecrated Crown Prince of Hastinapur with Yudhishthira, Bhima, and Arjuna at his side. An era of absolute justice dawns; the civil war never happens."
          }
        ],
        isEnding: true,
        divergence: 85,
        verdictTitle: "The Golden Era of the Six Sons of Kunti",
        verdictDesc: "The Pandava coalition becomes invincible. Duryodhana accepts a subordinate role, and the slaughter of millions is entirely averted."
      },
      "i2_ending_kauravas_banished": {
        panels: [
          {
            bgKey: "arena",
            speaker: "Chronicler",
            dialogue: "Duryodhana and Shakuni are banished to Gandhara. Hastinapur thrives in peace under the undisputed rule of King Karna and the Pandavas."
          }
        ],
        isEnding: true,
        divergence: 95,
        verdictTitle: "The Banishment of Discord",
        verdictDesc: "Treason is severed before it takes root. Aryavarta skips the catastrophic bloodbath of the 18-day war."
      },
      "i2_ending_karna_jailed": {
        panels: [
          {
            bgKey: "arena",
            speaker: "Chronicler",
            dialogue: "Karna is imprisoned for dishonoring the rules of combat. Stripped of his bow, his resentment festers, altering the factions forever."
          }
        ],
        isEnding: true,
        divergence: 60,
        verdictTitle: "The Imprisonment of the Sun",
        verdictDesc: "Hastinapur descends into political riots as commoners rally behind Karna, shaking the Kuru throne from below."
      },
      "i2_ending_duryodhana_disciplined": {
        panels: [
          {
            bgKey: "arena",
            speaker: "Chronicler",
            dialogue: "Bhishma strips Duryodhana of his royal command. Dhritarashtra is forced to acknowledge Yudhishthira as the sole Crown Prince."
          }
        ],
        isEnding: true,
        divergence: 70,
        verdictTitle: "The Patriarch's Discipline",
        verdictDesc: "Bhishma intervenes decades early, averting the disaster of the Dyuta Sabha."
      }
    }
  },

  // =========================================================================
  // ISLAND 6: THE HALL OF LOADED DICE (FULL 3-ACT / 3-DECISION SEQUENCE)
  // =========================================================================
  "island-6": {
    id: "island-6",
    title: "The Hall of Loaded Dice",
    parva: "Sabha Parva",
    rootStep: "i6_act1_start",
    nodes: {
      // ----------------------------------------------------
      // ACT 1: THE INVITATION & FIRST WAGER
      // ----------------------------------------------------
      "i6_act1_start": {
        panels: [
          {
            bgKey: "dice",
            charKey: "shakuni",
            speaker: "Shakuni",
            dialogue: "Come, nephew Yudhishthira! The hall of pearls and sandalwood is ready. The board is laid. What emperor cowers before a pair of polished ivory cubes?",
            sfx: "CLACK-CLACK!"
          },
          {
            bgKey: "dice",
            charKey: "yudhishthira",
            speaker: "Yudhishthira",
            dialogue: "Dicing is the root of ruin, Uncle. Sages proclaim it destroys righteousness, truth, and statecraft. Yet an imperial invitation from King Dhritarashtra cannot be turned away by a Kshatriya."
          },
          {
            bgKey: "dice",
            charKey: "shakuni",
            speaker: "Shakuni",
            dialogue: "Excuses of a cautious man! Duryodhana puts up the gold, and I—his devoted uncle—shall cast the ivory on his behalf. Stake your jewels, King of Indraprastha!"
          },
          {
            bgKey: "dice",
            charKey: "yudhishthira",
            speaker: "Yudhishthira",
            dialogue: "One man betting while another rolls on his behalf violates sacred protocol! Yet if you insist, I stake my ocean of golden coins and sixteen thousand war elephants!"
          }
        ],
        prompt: "DECISION 1: Shakuni prepares his first throw with loaded dice. What does Yudhishthira do?",
        choices: [
          {
            text: "Accept the rigged rules and roll himself in the spirit of honor (Canon)",
            badge: "Canon",
            nextNode: "i6_act2_lost_wealth"
          },
          {
            text: "Demand an impartial referee or refuse to roll against a proxy",
            badge: "Pragmatic",
            nextNode: "i6_act2_referee"
          },
          {
            text: "Nominate Lord Krishna to roll for Indraprastha",
            badge: "Divine",
            nextNode: "i6_act2_krishna_proxy"
          }
        ]
      },

      // ----------------------------------------------------
      // ACT 2: BRANCH A - WEALTH LOST & ESCALATION (CANON)
      // ----------------------------------------------------
      "i6_act2_lost_wealth": {
        panels: [
          {
            bgKey: "dice",
            charKey: "shakuni",
            speaker: "Shakuni",
            dialogue: "Won! The elephants are mine! The chariots are mine! The golden treasury of Indraprastha is mine! What now, Dharmaraja? Does the Emperor retreat like a bankrupt beggar?",
            sfx: "DHA-DHAM!"
          },
          {
            bgKey: "dice",
            charKey: "yudhishthira",
            speaker: "Yudhishthira",
            dialogue: "My hands burn... my mind spins in a haze. I stake Nakula, whose skin glows like bronze! I stake Sahadeva, the master of wisdom! I stake Arjuna... and Bhima!"
          },
          {
            bgKey: "dice",
            charKey: "shakuni",
            speaker: "Shakuni",
            dialogue: "Cast! Double sixes! All four brothers are our slaves! You have staked yourself and lost, Yudhishthira! But you still possess one pearl of unimaginable price... stake Queen Draupadi!"
          },
          {
            bgKey: "dice",
            charKey: "drona",
            speaker: "Vidura",
            dialogue: "Madness! The jackals howl on the palace roof! Dhritarashtra, halt this before your lineage is consumed by divine wrath!"
          }
        ],
        prompt: "DECISION 2: Shakuni demands Draupadi as the stake. How does Yudhishthira act?",
        choices: [
          {
            text: "Succumb to the madness of the board: stake Queen Draupadi (Canon)",
            badge: "Canon",
            nextNode: "i6_act3_draupadi_staked"
          },
          {
            text: "Shatter the dice board in horror: refuse to wager Draupadi",
            badge: "Restraint",
            nextNode: "i6_act3_refuse_draupadi"
          },
          {
            text: "Bhima erupts: draws his weapon to physically overturn the table",
            badge: "Rage",
            nextNode: "i6_act3_bhima_intervenes"
          }
        ]
      },

      // ACT 2: BRANCH B - REFEREE DEMANDED
      "i6_act2_referee": {
        panels: [
          {
            bgKey: "dice",
            charKey: "yudhishthira",
            speaker: "Yudhishthira",
            dialogue: "I refuse to wager against Shakuni while Duryodhana sits idly! Grandfather Bhishma, you shall inspect these ivory cubes and cast them!"
          },
          {
            bgKey: "dice",
            charKey: "drona",
            speaker: "Bhishma",
            dialogue: "The Emperor speaks truth. Shakuni, step back from the board. Either Duryodhana rolls with his own hands, or this game is dissolved!"
          }
        ],
        prompt: "DECISION 2: Duryodhana is forced to roll for himself without Shakuni's magic dice. What happens?",
        choices: [
          {
            text: "Duryodhana rolls honest dice and loses Hastinapur's treasury",
            badge: "Triumph",
            nextNode: "i6_act3_duryodhana_loses"
          },
          {
            text: "Duryodhana storms out in fury, cancelling the match",
            badge: "Stalemate",
            nextNode: "i6_act3_game_cancelled"
          }
        ]
      },

      // ACT 2: BRANCH C - KRISHNA PROXY
      "i6_act2_krishna_proxy": {
        panels: [
          {
            bgKey: "dice",
            charKey: "krishna",
            speaker: "Lord Krishna",
            dialogue: "If Duryodhana fields an uncle, then Yudhishthira fields a cousin! Let us cast the cubes, Shakuni. What number do you wish to see?"
          },
          {
            bgKey: "dice",
            charKey: "shakuni",
            speaker: "Shakuni",
            dialogue: "What trickery is this? The ivory feels like molten lead in my palm! The numbers change before my eyes!"
          }
        ],
        prompt: "DECISION 2: Krishna wins the crown of Hastinapur in three throws. What does Yudhishthira demand?",
        choices: [
          {
            text: "Demand full imperial surrender and the exile of Duryodhana",
            badge: "Justice",
            nextNode: "i6_act3_hastinapur_annexed"
          },
          {
            text: "Forgive the debt and offer Hastinapur peace",
            badge: "Mercy",
            nextNode: "i6_act3_mercy_peace"
          }
        ]
      },

      // ----------------------------------------------------
      // ACT 3: THE VASTRAHARAN CLIMAX & DECISION 3
      // ----------------------------------------------------
      "i6_act3_draupadi_staked": {
        panels: [
          {
            bgKey: "dice",
            charKey: "shakuni",
            speaker: "Shakuni",
            dialogue: "Won! Draupadi is won! Dushasana, drag that haughty daughter of Drupada into this assembly! Let her sweep our chambers!"
          },
          {
            bgKey: "dice",
            charKey: "draupadi",
            speaker: "Queen Draupadi",
            dialogue: "Elders of Hastinapur! Bhishma, Drona, Kripa! You sit with lowered heads while a queen is dragged by her hair before slaves and kings! Answer me: did Yudhishthira wager me before or after he lost himself?"
          },
          {
            bgKey: "dice",
            charKey: "bhima",
            speaker: "Bhima",
            dialogue: "Look upon my arms, Dushasana! By the blood of my ancestors, on the battlefield of Kurukshetra, I shall tear open your chest and drink your warm blood! And I shall shatter Duryodhana's left thigh with my mace!"
          }
        ],
        prompt: "DECISION 3: Dushasana attempts to strip Draupadi's garments. How is the crisis resolved?",
        choices: [
          {
            text: "Draupadi surrenders to Lord Krishna; endless cloth manifests (Canon)",
            badge: "Canon",
            nextNode: "i6_ending_canon_vastraharan"
          },
          {
            text: "Bhishma breaks his vow, draws his golden sword, and executes Dushasana",
            badge: "Patriarch",
            nextNode: "i6_ending_bhishma_wrath"
          },
          {
            text: "Dhritarashtra wakes from his stupor and permanently banishes Duryodhana",
            badge: "Imperial",
            nextNode: "i6_ending_kaurava_exile"
          }
        ]
      },

      "i6_act3_refuse_draupadi": {
        panels: [
          {
            bgKey: "dice",
            charKey: "yudhishthira",
            speaker: "Yudhishthira",
            dialogue: "Never! A wife is no property to be laid upon ivory! The five of us are your captives, but Draupadi remains untouched!"
          },
          {
            bgKey: "dice",
            charKey: "duryodhana",
            speaker: "Duryodhana",
            dialogue: "Then into the dungeons with the five brothers! Indraprastha belongs to me!"
          }
        ],
        prompt: "DECISION 3: With the Pandavas imprisoned, who leads the rescue mission?",
        choices: [
          {
            text: "King Drupada marches the Panchala army straight onto Hastinapur",
            badge: "War",
            nextNode: "i6_ending_panchala_invasion"
          },
          {
            text: "Krishna arrives with the Yadava legions to demand their release",
            badge: "Diplomacy",
            nextNode: "i6_ending_yadava_ultimatum"
          }
        ]
      },

      "i6_act3_bhima_intervenes": {
        panels: [
          {
            bgKey: "dice",
            charKey: "bhima",
            speaker: "Bhima",
            dialogue: "Arjuna, bring the fire! I shall burn Yudhishthira's hands for playing with our freedom!"
          }
        ],
        isEnding: true,
        divergence: 70,
        verdictTitle: "Internal Schism of the Pandavas",
        verdictDesc: "Bhima's rage shatters the dicing table, forcing Vidura to halt the game amidst physical violence."
      },

      "i6_act3_game_cancelled": {
        panels: [
          {
            bgKey: "dice",
            speaker: "Chronicler",
            dialogue: "Duryodhana storms out of the hall. Without Shakuni's loaded dice, the wager collapses and the Pandavas return to Indraprastha."
          }
        ],
        isEnding: true,
        divergence: 50,
        verdictTitle: "The Dissolution of the Game",
        verdictDesc: "Indraprastha retains its independence, isolating Duryodhana into bitter impotence."
      },

      "i6_act3_mercy_peace": {
        panels: [
          {
            bgKey: "dice",
            speaker: "Chronicler",
            dialogue: "Yudhishthira forgives the debt. Humbled before the world, Duryodhana loses all political authority to initiate war."
          }
        ],
        isEnding: true,
        divergence: 85,
        verdictTitle: "The Sovereign Mercy",
        verdictDesc: "Dharma prevails without a single drop of blood being spilled."
      },

      // ----------------------------------------------------
      // ENDINGS / EPILOGUES
      // ----------------------------------------------------
      "i6_ending_canon_vastraharan": {
        panels: [
          {
            bgKey: "dice",
            speaker: "Chronicler",
            dialogue: "Krishna’s endless cloth manifests, preserving Draupadi's dignity. Terrified by jackals howling in the chambers, Dhritarashtra restores the Pandavas' freedom. But Duryodhana forces the second wager: 12 years of forest exile and a 13th year incognito."
          }
        ],
        isEnding: true,
        divergence: 0,
        verdictTitle: "Canonical Itihasa: The Unforgivable Sin",
        verdictDesc: "The moral authority of the Kuru dynasty is wiped out. Draupadi's hair remains untied, locking the fate of millions into the Kurukshetra war."
      },
      "i6_ending_bhishma_wrath": {
        panels: [
          {
            bgKey: "dice",
            speaker: "Chronicler",
            dialogue: "Bhishma slays Dushasana on the assembly floor. The Kuru elders seize control, imprison Duryodhana, and restore the empire under Yudhishthira's rule."
          }
        ],
        isEnding: true,
        divergence: 80,
        verdictTitle: "The Patriarch Awakens",
        verdictDesc: "Bhishma prioritizes Dharma over his technical oath to the throne. The war is averted by severing the conspirators immediately."
      },
      "i6_ending_kaurava_exile": {
        panels: [
          {
            bgKey: "dice",
            speaker: "Chronicler",
            dialogue: "Dhritarashtra disowns Duryodhana and Shakuni, exiling them across the Indus. The Pandavas return to Indraprastha with realm and dignity intact."
          }
        ],
        isEnding: true,
        divergence: 75,
        verdictTitle: "The Severed Viper",
        verdictDesc: "Hastinapur purges its rot, securing an unbroken golden age for Aryavarta."
      },
      "i6_ending_hastinapur_annexed": {
        panels: [
          {
            bgKey: "dice",
            speaker: "Chronicler",
            dialogue: "Krishna wins the entire empire without spilling a drop of blood. Yudhishthira is crowned Emperor of a united Bharata, while Duryodhana lives in peaceful retirement."
          }
        ],
        isEnding: true,
        divergence: 90,
        verdictTitle: "The Divine Gambit",
        verdictDesc: "Krishna neutralizes the Kaurava threat through wisdom and strategy, averting the cataclysm entirely."
      },
      "i6_ending_panchala_invasion": {
        panels: [
          {
            bgKey: "dice",
            speaker: "Chronicler",
            dialogue: "Panchala and Matsya breach the gates of Hastinapur, liberating the Pandavas and establishing a shared rule."
          }
        ],
        isEnding: true,
        divergence: 70,
        verdictTitle: "The Siege of Hastinapur",
        verdictDesc: "A short, decisive regional conflict replaces the cosmic destruction of Kurukshetra."
      },
      "i6_ending_yadava_ultimatum": {
        panels: [
          {
            bgKey: "dice",
            speaker: "Chronicler",
            dialogue: "Krishna arrives at the gates of Hastinapur with the Narayani Sena. Dhritarashtra surrenders and releases the Pandavas immediately."
          }
        ],
        isEnding: true,
        divergence: 65,
        verdictTitle: "The Yadava Ultimatum",
        verdictDesc: "Diplomatic pressure forces Duryodhana's retreat without a full-scale continental war."
      }
    }
  },

  // =========================================================================
  // ISLAND 1: THE CURSED HUNT
  // =========================================================================
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

  // =========================================================================
  // ISLAND 3: THE HOUSE OF LAC
  // =========================================================================
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

  // =========================================================================
  // ISLAND 4: DRAUPADI'S SWAYAMVARA
  // =========================================================================
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

  // =========================================================================
  // ISLAND 5: THE KHANDAVA PARTITION
  // =========================================================================
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

  // =========================================================================
  // ISLAND 7: THE BANISHMENT PACT
  // =========================================================================
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

  // =========================================================================
  // ISLAND 8: THE SHADOW IN MATSYA
  // =========================================================================
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

  // =========================================================================
  // ISLAND 9: THE CHAMBER OF THE GOD
  // =========================================================================
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

  // =========================================================================
  // ISLAND 10: THE FALLEN GURU
  // =========================================================================
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
  return graph ? graph.rootStep : "i2_act1_start";
}
