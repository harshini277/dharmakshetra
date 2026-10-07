export const STORY_GRAPH = {
  // ==========================================
  // ISLAND 1: THE CURSED HUNT OF SHATASHRINGA
  // ==========================================
  "island-1": {
    id: "island-1",
    title: "The Cursed Hunt",
    parva: "Adi Parva",
    rootStep: "i1_start",
    nodes: {
      "i1_start": {
        panels: [
          { speaker: "King Pandu", charKey: "pandu", bgKey: "forest", dialogue: "Behold the golden twilight upon Shatashringa forest! The deer move silently beneath these ancient trees. Let my bow provide the hunt that befits a Kshatriya king." },
          { speaker: "Kindama", charKey: "pandu", bgKey: "forest", dialogue: "O King, beware! A sage and his mate have taken the form of deer to wander peacefully through this sacred forest." },
          { speaker: "Kindama", charKey: "pandu", bgKey: "forest", dialogue: "Why hast thou loosed thy deadly arrow upon us? In the moment of love, thou hast struck one who bore no threat against thee." },
          { speaker: "King Pandu", charKey: "pandu", bgKey: "forest", dialogue: "Alas! What terrible sin have I committed? Holy sage, forgive me. Tell me how I may atone for this grievous act." }
        ],
        prompt: "Sage Kindama prepares to curse Pandu. How shall the king respond to the curse?",
        choices: [
          { text: "Accept the sage's curse and renounce worldly pleasures", badge: "Canon", nextNode: "i1_act2_accept" },
          { text: "Plead with the sage to lessen the curse", badge: "Subversive", nextNode: "i1_act2_plead" },
          { text: "Seek forgiveness through a sacred vow and forest exile", badge: "Radical", nextNode: "i1_act2_vow" }
        ]
      },
      "i1_act2_accept": {
        panels: [
          { speaker: "King Pandu", charKey: "pandu", bgKey: "forest", dialogue: "I accept the consequence of my deed. From this moment, I shall abandon the pleasures of kingship and live in restraint." },
          { speaker: "Kindama", charKey: "pandu", bgKey: "forest", dialogue: "Since thy arrow struck me while I knew the joy of companionship, death shall come upon thee shouldst thou approach thy wives with desire." },
          { speaker: "Kunti", charKey: "draupadi", bgKey: "forest", dialogue: "If destiny has placed this burden upon our house, I shall stand beside my husband and share his life of austerity." }
        ],
        prompt: "Pandu's curse prevents him from fathering children through ordinary means. How shall royal succession be secured?",
        choices: [
          { text: "Invoke divine blessings through Kunti's sacred boon", badge: "Boon", nextNode: "i1_act3_boon" },
          { text: "Return to Hastinapur and appoint Dhritarashtra's line as successor", badge: "Succession", nextNode: "i1_act3_dhritarashtra" },
          { text: "Seek lawful succession through royal lineage tradition", badge: "Tradition", nextNode: "i1_act3_tradition" }
        ]
      },
      "i1_act2_plead": {
        panels: [
          { speaker: "King Pandu", charKey: "pandu", bgKey: "forest", dialogue: "Revered sage, I acted in ignorance. Let not my entire lineage perish because of one terrible mistake. Grant me a path of atonement." },
          { speaker: "Kindama", charKey: "pandu", bgKey: "forest", dialogue: "Your remorse is genuine, O King, yet the law of consequence cannot be erased. I may soften its burden, but the deed must bear its fruit." },
          { speaker: "Madri", charKey: "draupadi", bgKey: "forest", dialogue: "If repentance can protect our future children, let us accept whatever penance the sage commands." }
        ],
        prompt: "How shall the royal succession be secured?",
        choices: [
          { text: "Invoke divine blessings through Kunti's sacred boon", badge: "Boon", nextNode: "i1_act3_boon" },
          { text: "Return to Hastinapur and appoint Dhritarashtra's line as successor", badge: "Succession", nextNode: "i1_act3_dhritarashtra" }
        ]
      },
      "i1_act2_vow": {
        panels: [
          { speaker: "King Pandu", charKey: "pandu", bgKey: "forest", dialogue: "I shall leave the royal court and enter the forest. Let my years of penance prove that I understand the weight of the life I have taken." },
          { speaker: "Kindama", charKey: "pandu", bgKey: "forest", dialogue: "Your renunciation shall not erase the curse, but sincere penance may purify your heart and protect the kingdom from further suffering." },
          { speaker: "Bhishma", charKey: "drona", bgKey: "arena", dialogue: "If Pandu chooses the path of renunciation, Hastinapur must prepare for a lawful succession while honoring his sacrifice." }
        ],
        prompt: "How shall the royal succession be secured?",
        choices: [
          { text: "Invoke divine blessings through Kunti's sacred boon", badge: "Boon", nextNode: "i1_act3_boon" },
          { text: "Seek lawful succession through royal lineage tradition", badge: "Tradition", nextNode: "i1_act3_tradition" }
        ]
      },
      "i1_act3_boon": {
        panels: [
          { speaker: "Kunti", charKey: "draupadi", bgKey: "forest", dialogue: "Before our marriage, I received a sacred mantra capable of invoking the blessings of the gods. With your permission, I shall use it to preserve our lineage." },
          { speaker: "King Pandu", charKey: "pandu", bgKey: "forest", dialogue: "Let the divine will provide heirs where my cursed fate cannot. May these children one day protect the Kuru dynasty." },
          { speaker: "Madri", charKey: "draupadi", bgKey: "forest", dialogue: "If the gods grant children through this sacred path, may they grow together as brothers and preserve unity within our house." }
        ],
        prompt: "With Pandu in the forest and succession uncertain, what is decided for the future of Hastinapur?",
        choices: [
          { text: "Raise Pandu's sons as rightful heirs to the Kuru dynasty (Canon)", badge: "Heirs", nextNode: "i1_end_heirs" },
          { text: "Place the succession under a council until Pandu's fate is resolved", badge: "Council", nextNode: "i1_end_council" },
          { text: "Pandu renounces the throne permanently and prepares his sons for destiny", badge: "Renounce", nextNode: "i1_end_renounce" }
        ]
      },
      "i1_act3_dhritarashtra": {
        panels: [
          { speaker: "King Pandu", charKey: "pandu", bgKey: "forest", dialogue: "My curse has made fatherhood impossible for me. Let Hastinapur prepare another heir rather than allow my personal fate to endanger the kingdom." },
          { speaker: "Bhishma", charKey: "drona", bgKey: "arena", dialogue: "The succession of Hastinapur cannot remain uncertain. The elders must establish a lawful order before rivalry divides the Kuru house." },
          { speaker: "Dhritarashtra", charKey: "duryodhana", bgKey: "dice", dialogue: "If the throne must pass through my line, I shall accept the responsibility and protect the kingdom entrusted to me." }
        ],
        prompt: "What is decided for the future of Hastinapur?",
        choices: [
          { text: "Place the succession under a council until Pandu's fate is resolved", badge: "Council", nextNode: "i1_end_council" },
          { text: "Pandu renounces the throne permanently", badge: "Renounce", nextNode: "i1_end_renounce" }
        ]
      },
      "i1_act3_tradition": {
        panels: [
          { speaker: "King Pandu", charKey: "pandu", bgKey: "forest", dialogue: "If Dharma permits another righteous means of continuing the Kuru lineage, let the elders guide us rather than allowing the dynasty to perish." },
          { speaker: "Bhishma", charKey: "drona", bgKey: "arena", dialogue: "The ancient traditions of kingship provide paths for preserving a royal lineage when fate prevents a king from producing heirs." },
          { speaker: "Kunti", charKey: "draupadi", bgKey: "forest", dialogue: "Whatever path is chosen must preserve both Dharma and the dignity of our family, so that future generations inherit peace rather than dispute." }
        ],
        prompt: "What is decided for the future of Hastinapur?",
        choices: [
          { text: "Raise Pandu's sons as rightful heirs to the Kuru dynasty", badge: "Heirs", nextNode: "i1_end_heirs" },
          { text: "Pandu renounces the throne permanently", badge: "Renounce", nextNode: "i1_end_renounce" }
        ]
      },
      "i1_end_heirs": {
        panels: [
          { speaker: "Bhishma", charKey: "drona", bgKey: "arena", dialogue: "If Pandu is blessed with sons, they shall be raised according to the duties of princes and taught the sacred responsibilities of kingship." },
          { speaker: "Kunti", charKey: "draupadi", bgKey: "arena", dialogue: "My sons shall learn that strength without Dharma is meaningless. They shall grow not merely as warriors, but as protectors of the realm." },
          { speaker: "Vidura", charKey: "yudhishthira", bgKey: "arena", dialogue: "Let the children of Pandu and Dhritarashtra grow together under the same royal discipline, lest rivalry poison their future." }
        ],
        isEnding: true,
        divergence: 0,
        verdictTitle: "Canonical Itihasa: Princes of the Realm",
        verdictDesc: "Pandu's divine sons return to Hastinapur as recognized heirs, though simmering rivalry with the Kauravas takes root."
      },
      "i1_end_council": {
        panels: [
          { speaker: "Vidura", charKey: "yudhishthira", bgKey: "arena", dialogue: "The throne shall remain under the guidance of the elders until the rightful succession becomes clear. No branch of the Kuru family shall be favored through haste." },
          { speaker: "Bhishma", charKey: "drona", bgKey: "arena", dialogue: "A council of elders shall preserve order in Hastinapur while Pandu remains in the forest." },
          { speaker: "Dhritarashtra", charKey: "duryodhana", bgKey: "dice", dialogue: "I shall govern with restraint, remembering that temporary authority must never become an excuse to deny rightful inheritance." }
        ],
        isEnding: true,
        divergence: 45,
        verdictTitle: "Council Regency Established",
        verdictDesc: "A council of elders governs Hastinapur neutrally, stabilizing the realm during the forest years."
      },
      "i1_end_renounce": {
        panels: [
          { speaker: "King Pandu", charKey: "pandu", bgKey: "forest", dialogue: "I shall no longer cling to the throne. My life belongs to penance, while my sons shall carry the Kuru legacy into the future." },
          { speaker: "Kunti", charKey: "draupadi", bgKey: "forest", dialogue: "Then let us raise them with courage, wisdom, and compassion, so that their father's renunciation becomes the foundation of their greatness." },
          { speaker: "Bhishma", charKey: "drona", bgKey: "arena", dialogue: "Pandu's renunciation shall be remembered as a sacrifice for the dynasty. The princes must now be prepared for the responsibilities that await them." }
        ],
        isEnding: true,
        divergence: 70,
        verdictTitle: "The Great Renunciation",
        verdictDesc: "Pandu steps aside permanently, paving a clean succession for Dhritarashtra while his sons forge their own destiny."
      }
    }
  },

  // ==========================================
  // ISLAND 2: THE HALL OF LOADED DICE
  // ==========================================
  "island-2": {
    id: "island-2",
    title: "The Hall of Loaded Dice",
    parva: "Sabha Parva",
    rootStep: "i2_start",
    nodes: {
      "i2_start": {
        panels: [
          { speaker: "Shakuni", charKey: "shakuni", bgKey: "dice", dialogue: "Welcome, Yudhishthira! Let these sacred dice determine the fortune of kings. Surely the son of Dharma hath no fear of a simple game." },
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "dice", dialogue: "A challenge issued before the royal assembly cannot be ignored. Let the game begin, and may Dharma guide every throw." },
          { speaker: "Duryodhana", charKey: "duryodhana", bgKey: "dice", dialogue: "Today, the wealth and glory of Indraprastha shall be tested against the fortune of Hastinapur. Let us see whether righteousness can withstand the dice." },
          { speaker: "Vidura", charKey: "drona", bgKey: "dice", dialogue: "I foresee ruin in this game. These dice are not governed by chance alone, and deception within a royal court shall bring sorrow upon the entire Kuru dynasty." }
        ],
        prompt: "Shakuni begins with small wagers, but quickly raises the stakes. How shall Yudhishthira respond?",
        choices: [
          { text: "Accept the escalating wagers and continue the game (1A)", badge: "Wager", nextNode: "i2_act1_accept" },
          { text: "Refuse further wagers and question Shakuni's dice (1B)", badge: "Question", nextNode: "i2_act1_refuse" },
          { text: "Allow the elders to supervise the game before continuing (1C)", badge: "Supervise", nextNode: "i2_act1_elders" }
        ]
      },
      "i2_act1_accept": {
        panels: [
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "dice", dialogue: "A king must honor the challenge he has accepted. I shall continue, trusting destiny to decide the outcome." },
          { speaker: "Shakuni", charKey: "shakuni", bgKey: "dice", dialogue: "Well spoken, son of Dharma! Let the dice fall once more, and let fortune reveal who truly deserves prosperity." },
          { speaker: "Duryodhana", charKey: "duryodhana", bgKey: "dice", dialogue: "Throw again, cousin! With every wager, the wealth of Indraprastha draws nearer to my hands." }
        ],
        prompt: "After Yudhishthira loses his wealth and kingdom, Shakuni urges him to stake Draupadi. What shall Yudhishthira do?",
        choices: [
          { text: "Stake Draupadi as the final wager (2A)", badge: "Stake", nextNode: "i2_act2_stake" },
          { text: "Refuse to stake Draupadi and end the game (2B)", badge: "Refuse", nextNode: "i2_act2_refuse_draupadi" },
          { text: "Ask the elders whether Draupadi can legally be wagered (2C)", badge: "Legal", nextNode: "i2_act2_ask_elders" }
        ]
      },
      "i2_act1_refuse": {
        panels: [
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "dice", dialogue: "These dice fall with unnatural certainty. Before another wager is made, I demand that their fairness be examined." },
          { speaker: "Vidura", charKey: "drona", bgKey: "dice", dialogue: "The king speaks wisely. A game controlled by deceit cannot produce a righteous victory." },
          { speaker: "Shakuni", charKey: "shakuni", bgKey: "dice", dialogue: "You question my honor merely because fortune favors me? Perhaps Dharma fears the game more than I do." }
        ],
        prompt: "Shakuni pressures Yudhishthira for an ultimate wager. What shall Yudhishthira do?",
        choices: [
          { text: "Refuse to stake Draupadi and end the game", badge: "Refuse", nextNode: "i2_act2_refuse_draupadi" },
          { text: "Ask the elders whether Draupadi can legally be wagered", badge: "Legal", nextNode: "i2_act2_ask_elders" }
        ]
      },
      "i2_act1_elders": {
        panels: [
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "dice", dialogue: "Let the elders of the Kuru house witness every throw. I shall continue only where fairness governs the game." },
          { speaker: "Bhishma", charKey: "drona", bgKey: "dice", dialogue: "Let truth stand above rivalry. If the game is honorable, the presence of elders shall bring no harm." },
          { speaker: "Duryodhana", charKey: "duryodhana", bgKey: "dice", dialogue: "Very well! Let the elders watch. But once the dice are cast, none shall escape the consequences of the wager." }
        ],
        prompt: "The stakes rise uncontrollably. What shall Yudhishthira do regarding Draupadi?",
        choices: [
          { text: "Stake Draupadi as the final wager", badge: "Stake", nextNode: "i2_act2_stake" },
          { text: "Ask the elders whether Draupadi can legally be wagered", badge: "Legal", nextNode: "i2_act2_ask_elders" }
        ]
      },
      "i2_act2_stake": {
        panels: [
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "dice", dialogue: "I have lost my wealth and kingdom, yet the game demands another wager. I shall place Draupadi upon the dice." },
          { speaker: "Shakuni", charKey: "shakuni", bgKey: "dice", dialogue: "The greatest wager of all! Cast the dice, O King, and let fortune decide whether Panchali belongs to Hastinapur." },
          { speaker: "Duryodhana", charKey: "duryodhana", bgKey: "dice", dialogue: "Summon Draupadi to this assembly! Let the queen of Indraprastha face the result of the game." }
        ],
        prompt: "The gambling hall descends into chaos as Draupadi's dignity is threatened. How shall the Kuru court intervene?",
        choices: [
          { text: "Dhritarashtra intervenes and restores Draupadi's freedom (3A)", badge: "Freedom", nextNode: "i2_end_dhritarashtra" },
          { text: "Bhishma and Vidura stop the game and declare proceedings unjust (3B)", badge: "Halt", nextNode: "i2_end_bhishma_stop" },
          { text: "The court demands a final ruling from elders before any punishment (3C)", badge: "Ruling", nextNode: "i2_end_elders_ruling" }
        ]
      },
      "i2_act2_refuse_draupadi": {
        panels: [
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "dice", dialogue: "No human being shall become a wager upon this board. I refuse to stake Draupadi, whatever the consequences." },
          { speaker: "Draupadi", charKey: "draupadi", bgKey: "dice", dialogue: "A queen is not wealth to be won or lost through dice. Your refusal preserves the dignity of our house." },
          { speaker: "Vidura", charKey: "drona", bgKey: "dice", dialogue: "This is the first righteous restraint shown in this assembly. No game can justify wagering another human soul." }
        ],
        prompt: "How shall the Kuru court finalize the outcome of the stopped game?",
        choices: [
          { text: "Bhishma and Vidura stop the game and declare proceedings unjust", badge: "Halt", nextNode: "i2_end_bhishma_stop" },
          { text: "The court demands a final ruling from elders before any punishment", badge: "Ruling", nextNode: "i2_end_elders_ruling" }
        ]
      },
      "i2_act2_ask_elders": {
        panels: [
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "dice", dialogue: "Before I make such a grave wager, let the elders declare whether a man may stake another after losing his own freedom." },
          { speaker: "Draupadi", charKey: "draupadi", bgKey: "dice", dialogue: "I ask the same question: if the king has already lost himself, by what right can he claim ownership over me?" },
          { speaker: "Bhishma", charKey: "drona", bgKey: "dice", dialogue: "Dharma is subtle in this matter. The assembly must carefully determine whether such a wager possesses any rightful authority." }
        ],
        prompt: "How shall the court resolve this legal dilemma?",
        choices: [
          { text: "Dhritarashtra intervenes and restores Draupadi's freedom", badge: "Freedom", nextNode: "i2_end_dhritarashtra" },
          { text: "The court demands a final ruling from elders before any punishment", badge: "Ruling", nextNode: "i2_end_elders_ruling" }
        ]
      },
      "i2_end_dhritarashtra": {
        panels: [
          { speaker: "Dhritarashtra", charKey: "duryodhana", bgKey: "dice", dialogue: "Enough! The suffering of Panchali has brought shame upon this assembly. Ask your boon, Draupadi, and I shall grant it." },
          { speaker: "Draupadi", charKey: "draupadi", bgKey: "dice", dialogue: "I ask first for the freedom of Yudhishthira and my husbands. Let them stand free from the consequences of this terrible game." },
          { speaker: "Vidura", charKey: "drona", bgKey: "dice", dialogue: "The king's intervention may yet prevent the destruction of the Kuru dynasty. Let justice end this madness." }
        ],
        isEnding: true,
        divergence: 0,
        verdictTitle: "Canonical Itihasa: Royal Restitution",
        verdictDesc: "Dhritarashtra grants Draupadi her boons, freeing the Pandavas, but Duryodhana soon schemes for the second exile game."
      },
      "i2_end_bhishma_stop": {
        panels: [
          { speaker: "Bhishma", charKey: "drona", bgKey: "dice", dialogue: "This assembly has crossed the limits of Dharma. The game must cease before greater injustice stains the Kuru name." },
          { speaker: "Vidura", charKey: "drona", bgKey: "dice", dialogue: "A victory obtained through manipulation cannot be called righteous. The Pandavas must not be further humiliated." },
          { speaker: "Shakuni", charKey: "shakuni", bgKey: "dice", dialogue: "You would overturn the result after the dice have spoken? Then the authority of this court itself shall be questioned!" }
        ],
        isEnding: true,
        divergence: 65,
        verdictTitle: "Assembly Dissolved by Elders",
        verdictDesc: "Bhishma and Vidura forcefully halt the match, checking Duryodhana's plot and preventing public humiliation."
      },
      "i2_end_elders_ruling": {
        panels: [
          { speaker: "Bhishma", charKey: "drona", bgKey: "dice", dialogue: "No punishment shall be imposed until the elders determine the lawful consequence of this game." },
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "dice", dialogue: "I shall submit to the judgment of the elders, provided their decision is founded upon Dharma and not upon fear." },
          { speaker: "Duryodhana", charKey: "duryodhana", bgKey: "dice", dialogue: "Let the elders decide, then! But I shall defend the victory that the dice have granted me before this entire assembly." }
        ],
        isEnding: true,
        divergence: 50,
        verdictTitle: "The Judicial Impasse",
        verdictDesc: "The assembly defers to a legal council of elders, locking the dispute in judicial review."
      }
    }
  },

  // ==========================================
  // ISLAND 3: THE CURSED HUNT (Duplicate slot maintained per index)
  // ==========================================
  "island-3": {
    id: "island-3",
    title: "The Cursed Hunt",
    parva: "Adi Parva",
    rootStep: "i3_start",
    nodes: {
      "i3_start": {
        panels: [
          { speaker: "King Pandu", charKey: "pandu", bgKey: "forest", dialogue: "Behold the golden twilight upon Shatashringa forest! The deer move silently beneath these ancient trees. Let my bow provide the hunt that befits a Kshatriya king." },
          { speaker: "Kindama", charKey: "pandu", bgKey: "forest", dialogue: "O King, beware! A sage and his mate have taken the form of deer to wander peacefully through this sacred forest." },
          { speaker: "Kindama", charKey: "pandu", bgKey: "forest", dialogue: "Why hast thou loosed thy deadly arrow upon us? In the moment of love, thou hast struck one who bore no threat against thee." },
          { speaker: "King Pandu", charKey: "pandu", bgKey: "forest", dialogue: "Alas! What terrible sin have I committed? Holy sage, forgive me. Tell me how I may atone for this grievous act." }
        ],
        prompt: "Sage Kindama prepares to curse Pandu. How shall the king respond?",
        choices: [
          { text: "Accept the sage's curse and renounce worldly pleasures", badge: "Accept", nextNode: "i3_act2_accept" },
          { text: "Plead with the sage to lessen the curse", badge: "Plead", nextNode: "i3_act2_plead" }
        ]
      },
      "i3_act2_accept": {
        panels: [
          { speaker: "King Pandu", charKey: "pandu", bgKey: "forest", dialogue: "I accept the consequence of my deed. From this moment, I shall abandon the pleasures of kingship and live in restraint." },
          { speaker: "Kindama", charKey: "pandu", bgKey: "forest", dialogue: "Since thy arrow struck me while I knew the joy of companionship, death shall come upon thee shouldst thou approach thy wives with desire." },
          { speaker: "Kunti", charKey: "draupadi", bgKey: "forest", dialogue: "If destiny has placed this burden upon our house, I shall stand beside my husband and share his life of austerity." }
        ],
        prompt: "How shall the royal succession be secured?",
        choices: [
          { text: "Invoke divine blessings through Kunti's sacred boon", badge: "Boon", nextNode: "i3_end_boon" }
        ]
      },
      "i3_act2_plead": {
        panels: [
          { speaker: "King Pandu", charKey: "pandu", bgKey: "forest", dialogue: "Revered sage, I acted in ignorance. Let not my entire lineage perish because of one terrible mistake." },
          { speaker: "Kindama", charKey: "pandu", bgKey: "forest", dialogue: "Your remorse is genuine, O King, yet the law of consequence cannot be erased." }
        ],
        prompt: "How shall the royal succession be secured?",
        choices: [
          { text: "Return to Hastinapur and appoint Dhritarashtra's line as successor", badge: "Succession", nextNode: "i3_end_succession" }
        ]
      },
      "i3_end_boon": {
        panels: [
          { speaker: "Kunti", charKey: "draupadi", bgKey: "forest", dialogue: "Before our marriage, I received a sacred mantra capable of invoking the blessings of the gods. With your permission, I shall use it to preserve our lineage." },
          { speaker: "King Pandu", charKey: "pandu", bgKey: "forest", dialogue: "Let the divine will provide heirs where my cursed fate cannot. May these children one day protect the Kuru dynasty." }
        ],
        isEnding: true,
        divergence: 0,
        verdictTitle: "Divine Heirs Granted",
        verdictDesc: "The five Pandavas are born of the Devas, preserving the line of Pandu."
      },
      "i3_end_succession": {
        panels: [
          { speaker: "King Pandu", charKey: "pandu", bgKey: "forest", dialogue: "My curse has made fatherhood impossible for me. Let Hastinapur prepare another heir." },
          { speaker: "Dhritarashtra", charKey: "duryodhana", bgKey: "dice", dialogue: "I accept the responsibility to protect the kingdom entrusted to me." }
        ],
        isEnding: true,
        divergence: 75,
        verdictTitle: "Kaurava Primacy",
        verdictDesc: "Hastinapur passes cleanly to Dhritarashtra's line."
      }
    }
  },

  // ==========================================
  // ISLAND 4: THE HOUSE OF LAC
  // ==========================================
  "island-4": {
    id: "island-4",
    title: "The House of Lac",
    parva: "Adi Parva",
    rootStep: "i4_start",
    nodes: {
      "i4_start": {
        panels: [
          { speaker: "Purochana", charKey: "shakuni", bgKey: "lac", dialogue: "Behold this magnificent palace at Varanavata! Its walls shine like polished wood, its halls glow with fragrant lamps, and every chamber is prepared for the Pandavas." },
          { speaker: "Vidura", charKey: "drona", bgKey: "lac", dialogue: "Yudhishthira, beneath these splendid walls lies danger. What appears to be a palace may conceal the scent of lac, oil, and resin prepared for destruction." },
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "lac", dialogue: "Your words are veiled, wise Vidura, yet I understand their warning. We shall enter the house with open eyes and trust neither its beauty nor its keeper." },
          { speaker: "Bhima", charKey: "bhima", bgKey: "lac", dialogue: "Let Purochana build his palace of wax and resin. If our enemies have prepared a trap, my strength shall ensure that none of us are buried within its flames." }
        ],
        prompt: "The Pandavas discover that the House of Lac is designed to burn them alive. How shall they respond?",
        choices: [
          { text: "Secretly prepare an underground escape tunnel (1A)", badge: "Tunnel", nextNode: "i4_act2_tunnel" },
          { text: "Confront Purochana and expose the assassination plot (1B)", badge: "Confront", nextNode: "i4_act2_confront" },
          { text: "Secretly leave Varanavata before the palace can be ignited (1C)", badge: "Depart", nextNode: "i4_act2_depart" }
        ]
      },
      "i4_act2_tunnel": {
        panels: [
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "lac", dialogue: "We shall not reveal that we know of the plot. Beneath this house, let a hidden passage carry us safely into the forest." },
          { speaker: "Bhima", charKey: "bhima", bgKey: "lac", dialogue: "Give me the tools, brother. I shall carve the earth beneath these walls and create a path through which our family may escape." },
          { speaker: "Vidura", charKey: "drona", bgKey: "lac", dialogue: "Wisely done. Let the enemy believe the Pandavas remain trapped while Dharma prepares a path beyond their reach." }
        ],
        prompt: "Purochana prepares to ignite the House of Lac. How shall the Pandavas execute their escape?",
        choices: [
          { text: "Set the House of Lac ablaze and escape through the tunnel (2A)", badge: "Torch", nextNode: "i4_act3_torch" },
          { text: "Escape without setting the palace on fire (2B)", badge: "Preserve", nextNode: "i4_act3_preserve" },
          { text: "Trap Purochana inside his own palace and escape (2C)", badge: "Trap", nextNode: "i4_act3_trap" }
        ]
      },
      "i4_act2_confront": {
        panels: [
          { speaker: "Bhima", charKey: "bhima", bgKey: "lac", dialogue: "Purochana! We know why this palace was built. Speak the truth before I tear these resin walls apart with my bare hands." },
          { speaker: "Purochana", charKey: "shakuni", bgKey: "lac", dialogue: "You accuse me without proof! This palace was constructed for your comfort, not your destruction." },
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "lac", dialogue: "Your words cannot conceal the danger. We shall demand that Hastinapur answer for this treachery." }
        ],
        prompt: "How shall the Pandavas execute their departure?",
        choices: [
          { text: "Escape without setting the palace on fire", badge: "Preserve", nextNode: "i4_act3_preserve" },
          { text: "Trap Purochana inside his palace and escape", badge: "Trap", nextNode: "i4_act3_trap" }
        ]
      },
      "i4_act2_depart": {
        panels: [
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "lac", dialogue: "We shall depart quietly under cover of darkness. There is no wisdom in remaining where death waits behind every wall." },
          { speaker: "Arjuna", charKey: "arjuna", bgKey: "lac", dialogue: "Our bows are ready, and our horses prepared. Before Purochana strikes, we shall disappear into the wilderness." },
          { speaker: "Kunti", charKey: "draupadi", bgKey: "lac", dialogue: "Let us leave without vengeance. Survival must come first, and our enemies must believe their plan has succeeded." }
        ],
        prompt: "Where shall the Pandavas go now that they have departed?",
        choices: [
          { text: "Remain hidden in the forest and travel in disguise", badge: "Disguise", nextNode: "i4_end_forest" },
          { text: "Travel toward Panchala and seek a new political alliance", badge: "Panchala", nextNode: "i4_end_panchala" }
        ]
      },
      "i4_act3_torch": {
        panels: [
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "lac", dialogue: "The enemy intended this fire for our deaths. Tonight, we shall turn their trap against them and disappear beneath the earth." },
          { speaker: "Bhima", charKey: "bhima", bgKey: "lac", dialogue: "Let the flames rise! While Purochana believes us trapped, I shall carry Mother and lead our brothers through the hidden passage." },
          { speaker: "Kunti", charKey: "draupadi", bgKey: "forest", dialogue: "May the fire erase the path behind us, while the forest gives us a new beginning." }
        ],
        prompt: "Believed to be dead, where shall the Pandavas go and how shall they prepare?",
        choices: [
          { text: "Remain hidden in the forest and travel in disguise (3A)", badge: "Disguise", nextNode: "i4_end_forest" },
          { text: "Seek refuge with trusted allies and reveal the conspiracy (3B)", badge: "Allies", nextNode: "i4_end_allies" },
          { text: "Travel toward Panchala and seek a new political alliance (3C)", badge: "Panchala", nextNode: "i4_end_panchala" }
        ]
      },
      "i4_act3_preserve": {
        panels: [
          { speaker: "Arjuna", charKey: "arjuna", bgKey: "lac", dialogue: "We need not answer deception with destruction. Let us flee through the tunnel and leave the House of Lac standing as evidence of the plot." },
          { speaker: "Nakula", charKey: "arjuna", bgKey: "lac", dialogue: "If we preserve the palace, the court may yet discover who designed it and expose the conspiracy." },
          { speaker: "Sahadeva", charKey: "arjuna", bgKey: "lac", dialogue: "Truth may serve us better than vengeance. Let us survive first and reveal the plot when the time is right." }
        ],
        prompt: "Where shall the Pandavas go?",
        choices: [
          { text: "Seek refuge with trusted allies and reveal the conspiracy", badge: "Allies", nextNode: "i4_end_allies" },
          { text: "Travel toward Panchala and seek a new political alliance", badge: "Panchala", nextNode: "i4_end_panchala" }
        ]
      },
      "i4_act3_trap": {
        panels: [
          { speaker: "Bhima", charKey: "bhima", bgKey: "lac", dialogue: "Purochana planned our deaths within these walls. Let him face the danger he prepared for others." },
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "lac", dialogue: "We shall not act from hatred. If Purochana remains within the burning house, his fate shall be the consequence of his own treachery." },
          { speaker: "Kunti", charKey: "draupadi", bgKey: "forest", dialogue: "May this terrible night end the conspiracy without allowing hatred to rule our hearts." }
        ],
        prompt: "Where shall the Pandavas travel?",
        choices: [
          { text: "Remain hidden in the forest and travel in disguise", badge: "Disguise", nextNode: "i4_end_forest" },
          { text: "Travel toward Panchala and seek a new political alliance", badge: "Panchala", nextNode: "i4_end_panchala" }
        ]
      },
      "i4_end_forest": {
        panels: [
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "forest", dialogue: "Let the world believe us dead. In disguise, we shall travel through the forests and learn who among the kingdoms remains loyal." },
          { speaker: "Bhima", charKey: "bhima", bgKey: "forest", dialogue: "Let our enemies celebrate too soon. When the Pandavas return, they shall discover that we have grown stronger in the shadows." },
          { speaker: "Arjuna", charKey: "arjuna", bgKey: "forest", dialogue: "A hidden bow is still a bow. We shall train, gather knowledge, and wait for the moment when Dharma calls us into the open." }
        ],
        isEnding: true,
        divergence: 0,
        verdictTitle: "Canonical Itihasa: Phantoms in the Forest",
        verdictDesc: "Believed dead by Hastinapur, the Pandavas wander incognito, gathering strength in exile."
      },
      "i4_end_allies": {
        panels: [
          { speaker: "Kunti", charKey: "draupadi", bgKey: "forest", dialogue: "We cannot remain hidden forever. Let us seek those who still honor Dharma and reveal the truth of what happened at Varanavata." },
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "arena", dialogue: "If Hastinapur believes us dead, our enemies may grow careless. We shall gather allies before revealing that we survived." },
          { speaker: "Vidura", charKey: "drona", bgKey: "arena", dialogue: "The truth must eventually reach the royal court. Until then, silence shall protect the Pandavas from another attempt upon their lives." }
        ],
        isEnding: true,
        divergence: 45,
        verdictTitle: "Conspiracy Exposed to Allies",
        verdictDesc: "The Pandavas secretly gather righteous allies across Aryavarta, building an early political bloc."
      },
      "i4_end_panchala": {
        panels: [
          { speaker: "Arjuna", charKey: "arjuna", bgKey: "swayamvara", dialogue: "If our enemies believe us dead, Panchala may become the key to our return. Let us travel there and seek King Drupada's friendship." },
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "swayamvara", dialogue: "A kingdom cannot be rebuilt by strength alone. We shall seek allies who value Dharma and prepare for the day we reclaim our rightful place." },
          { speaker: "Bhima", charKey: "bhima", bgKey: "swayamvara", dialogue: "Let Hastinapur think the fire consumed us. When we emerge from the shadows, our enemies shall face five brothers stronger than before." }
        ],
        isEnding: true,
        divergence: 25,
        verdictTitle: "Panchala Bound",
        verdictDesc: "The Pandavas march toward Panchala, setting the stage for Draupadi's Swayamvara."
      }
    }
  },

  // ==========================================
  // ISLAND 5: DRAUPADI'S SWAYAMVARA
  // ==========================================
  "island-5": {
    id: "island-5",
    title: "Draupadi's Swayamvara",
    parva: "Adi Parva",
    rootStep: "i5_start",
    nodes: {
      "i5_start": {
        panels: [
          { speaker: "Arjuna", charKey: "arjuna", bgKey: "swayamvara", dialogue: "I draw the Shiva bow and strike the rotating fish eye reflected in water!" },
          { speaker: "King Drupada", charKey: "drona", bgKey: "swayamvara", dialogue: "Behold, noble assembly! A youthful archer in the simple garb of a Brahmin hath accomplished the supreme feat that grand kings deemed impossible!" },
          { speaker: "Draupadi", charKey: "draupadi", bgKey: "swayamvara", dialogue: "I garland the victor! But Kunti speaks without looking: 'Share whatever alms you brought today.'" }
        ],
        prompt: "Mother Kunti commands the brothers to share equal alms. How is her word fulfilled?",
        choices: [
          { text: "Five-Fold Marriage to all five Pandava brothers (Canon)", badge: "Canon", nextNode: "i5_act1_fivefold" },
          { text: "Clarify words: Draupadi weds Arjuna alone with Vyasa sanction", badge: "Arjuna Solo", nextNode: "i5_act1_arjuna_solo" }
        ]
      },
      "i5_act1_fivefold": {
        panels: [
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "swayamvara", dialogue: "Mother's word is truth. Draupadi shall be Empress to all five brothers, maintaining our sacred unity." },
          { speaker: "Kunti", charKey: "draupadi", bgKey: "swayamvara", dialogue: "Forgive my inadvertent words, my children, yet a mother's utterance must never prove false. May divine wisdom guide this sacred union." },
          { speaker: "King Drupada", charKey: "drona", bgKey: "swayamvara", dialogue: "Though this custom be extraordinary in our times, if Sage Vyasa and Lord Krishna affirm its righteousness, Panchala gladly seals this royal alliance." }
        ],
        prompt: "How shall the five Pandava brothers structure their internal household to preserve eternal harmony?",
        choices: [
          { text: "Establish a strict annual rotation vow under Sage Narada's guidance (1A1)", badge: "Narada Vow", nextNode: "i5_end_narada_vow" },
          { text: "Form a joint imperial counsel where Draupadi governs alongside Yudhishthira (1A2)", badge: "Chief Empress", nextNode: "i5_end_joint_counsel" }
        ]
      },
      "i5_act1_arjuna_solo": {
        panels: [
          { speaker: "Arjuna", charKey: "arjuna", bgKey: "swayamvara", dialogue: "Sage Vyasa confirms: she won her groom through archery and weds Arjuna alone." },
          { speaker: "Kunti", charKey: "draupadi", bgKey: "swayamvara", dialogue: "My heart is relieved. My spoken words referred to material alms, and the divine laws of marriage remain undisturbed." },
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "swayamvara", dialogue: "It is just and proper. The law of dharma dictates that the victor of the Swayamvara alone claims the bride with full honor." }
        ],
        prompt: "With Arjuna as sole groom, how do the Pandavas manage their new political alliance?",
        choices: [
          { text: "Arjuna remains in Panchala as Drupada's primary military commander (1B1)", badge: "Panchala General", nextNode: "i5_end_arjuna_panchala" },
          { text: "The five brothers return to Hastinapur together to claim inherited titles (1B2)", badge: "Hastinapur Return", nextNode: "i5_end_return_hastinapur" }
        ]
      },
      "i5_end_narada_vow": {
        panels: [
          { speaker: "Sage Narada", charKey: "krishna", bgKey: "swayamvara", dialogue: "Let Princess Draupadi reside with one brother each year. Whosoever intrudes upon another's quiet tenure shall accept a twelve-month holy exile." },
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "swayamvara", dialogue: "We accept this sacred covenant with complete reverence to ensure righteousness and mutual honor within our home." },
          { speaker: "Draupadi", charKey: "draupadi", bgKey: "swayamvara", dialogue: "Under the blessings of the sages, I shall fulfill my duty as queen and companion to each noble son of Pandu with equal devotion." }
        ],
        isEnding: true,
        divergence: 0,
        verdictTitle: "Canonical Itihasa: The Unbreakable Covenant",
        verdictDesc: "The annual rotation maintains harmony and domestic unity among the five brothers."
      },
      "i5_end_joint_counsel": {
        panels: [
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "swayamvara", dialogue: "Draupadi shall be crowned Senior Empress of the Kuru dynasty, holding equal authority in royal administrative councils." },
          { speaker: "Arjuna", charKey: "arjuna", bgKey: "swayamvara", dialogue: "Her intellect and firm grasp of dharma shall be the guiding light for all five brothers across our realm." },
          { speaker: "Draupadi", charKey: "draupadi", bgKey: "swayamvara", dialogue: "I accept this crown not for personal glory, but to stand as an unyielding pillar of justice for our people." }
        ],
        isEnding: true,
        divergence: 35,
        verdictTitle: "Empress of the Five Crowns",
        verdictDesc: "Draupadi takes an active governance role as co-regent, elevating Panchala-Kuru statecraft."
      },
      "i5_end_arjuna_panchala": {
        panels: [
          { speaker: "King Drupada", charKey: "drona", bgKey: "swayamvara", dialogue: "Heroic Arjuna, stand as the chief commander of Panchala’s forces and lead our armies alongside my son Dhrishtadyumna!" },
          { speaker: "Arjuna", charKey: "arjuna", bgKey: "swayamvara", dialogue: "It is my honor, revered Father, to place my bow Gandiva in service of Panchala’s protection and righteousness." },
          { speaker: "Bhima", charKey: "bhima", bgKey: "swayamvara", dialogue: "Go forth, brother! Though our paths diverge in duty, our brotherhood remains as firm as Mount Meru." }
        ],
        isEnding: true,
        divergence: 65,
        verdictTitle: "General of Panchala",
        verdictDesc: "Arjuna anchors Panchala's military, shifting the center of geopolitical power away from Hastinapur."
      },
      "i5_end_return_hastinapur": {
        panels: [
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "arena", dialogue: "Our alliances are secured. We shall present ourselves before Emperor Dhritarashtra to claim our father's legacy." },
          { speaker: "Duryodhana", charKey: "duryodhana", bgKey: "arena", dialogue: "The Pandavas return with Panchala's backing... We must act swiftly before their influence eclipses ours!" },
          { speaker: "Draupadi", charKey: "draupadi", bgKey: "arena", dialogue: "I walk into Hastinapur as Arjuna's consort, ready to support the Pandavas in establishing a realm of truth." }
        ],
        isEnding: true,
        divergence: 50,
        verdictTitle: "Return with Royal Backing",
        verdictDesc: "The Pandavas confront Dhritarashtra with Panchala's armies behind them, forcing a partition."
      }
    }
  },

  // ==========================================
  // ISLAND 6: THE KHANDAVA PARTITION
  // ==========================================
  "island-6": {
    id: "island-6",
    title: "The Khandava Partition",
    parva: "Sabha Parva",
    rootStep: "i6_start",
    nodes: {
      "i6_start": {
        panels: [
          { speaker: "Lord Agni", charKey: "krishna", bgKey: "khandava", dialogue: "I am starved for seven divine sacrifices, O heroic princes! Grant me this forest so I may consume its sacred plants and regain my radiant celestial glory!" },
          { speaker: "Lord Krishna", charKey: "krishna", bgKey: "khandava", dialogue: "Agni seeks to consume Khandava forest to restore his divine splendor. Arjuna, rain arrows to block the sky and shield the forest from Indra's rain!" },
          { speaker: "Mayasura", charKey: "shakuni", bgKey: "khandava", dialogue: "Spare my life, Arjuna! I am Maya, the supreme architect of the Asuras. Save me from Agni's flames, and I shall build you a palace unmatched in the three worlds!" }
        ],
        prompt: "Lord Agni requests Khandava forest. How shall Arjuna and Krishna proceed?",
        choices: [
          { text: "Burn Khandava & build Mayasabha Palace (Canon)", badge: "Canon", nextNode: "i6_act1_burn" },
          { text: "Negotiate sanctuary treaty with Takshaka Nagas", badge: "Subversive", nextNode: "i6_act1_treaty" }
        ]
      },
      "i6_act1_burn": {
        panels: [
          { speaker: "Arjuna", charKey: "arjuna", bgKey: "khandava", dialogue: "I yield to the divine request of Lord Agni and erect an impenetrable canopy of arrows across the sky to enclose the blazing forest!" },
          { speaker: "Mayasura", charKey: "shakuni", bgKey: "khandava", dialogue: "Your noble mercy toward an architect shall be rewarded! I shall construct Mayasabha in Indraprastha, a celestial assembly hall whose illusions shall dazzle all of Aryavarta!" },
          { speaker: "Duryodhana", charKey: "duryodhana", bgKey: "khandava", dialogue: "This palace is a work of sorcery and divine favor... Seeing such magnificent splendor and wealth in Indraprastha fills my soul with consuming bitterness!" }
        ],
        prompt: "With Mayasabha constructed, how do the Pandavas utilize their newfound grand palace?",
        choices: [
          { text: "Host the Rajasuya Yajna and crown Yudhishthira Sovereign Emperor (2A1)", badge: "Rajasuya", nextNode: "i6_end_rajasuya" },
          { text: "Open Mayasabha as a universal sanctuary for scholars and delegates (2A2)", badge: "Sanctuary", nextNode: "i6_end_sanctuary" }
        ]
      },
      "i6_act1_treaty": {
        panels: [
          { speaker: "Arjuna", charKey: "arjuna", bgKey: "khandava", dialogue: "Lord Agni, we shall offer you the dry timber of the perimeter, but spare the central sanctuary of King Takshaka and his people!" },
          { speaker: "Takshaka Naga", charKey: "shakuni", bgKey: "khandava", dialogue: "Noble Pandavas, ye have shown mercy where fire threatened total annihilation. The Nagas shall forever stand as guardians of Indraprastha!" },
          { speaker: "Lord Krishna", charKey: "krishna", bgKey: "khandava", dialogue: "Compassion toward all living beings elevates a ruler higher than the destruction of ancient forests for imperial expansion." }
        ],
        prompt: "How do the Pandavas integrate the Nagas into the defense and governance of Indraprastha?",
        choices: [
          { text: "Form an elite subterranean defensive force under Takshaka (2B1)", badge: "Underground Force", nextNode: "i6_end_subterranean" },
          { text: "Establish an agrarian trade alliance using Naga water knowledge (2B2)", badge: "Agrarian Trade", nextNode: "i6_end_agrarian" }
        ]
      },
      "i6_end_rajasuya": {
        panels: [
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "khandava", dialogue: "In this glorious hall built by Maya, we dedicate our prosperity unto Lord Narayana through the sacred Rajasuya sacrifice." },
          { speaker: "King Shishupala", charKey: "duryodhana", bgKey: "khandava", dialogue: "I object to Krishna receiving the first honor in this assembly! This illusionary palace cannot mask my defiance!" },
          { speaker: "Duryodhana", charKey: "duryodhana", bgKey: "khandava", dialogue: "I mistook crystal floors for deep water and stepped into a pool! Their laughter in Mayasabha shall be repaid in full!" }
        ],
        isEnding: true,
        divergence: 0,
        verdictTitle: "Canonical Itihasa: The Imperial Apex",
        verdictDesc: "Indraprastha's splendor is consecrated, but Duryodhana's jealousy sets the dice game in motion."
      },
      "i6_end_sanctuary": {
        panels: [
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "khandava", dialogue: "Let Mayasabha serve not as a display of imperial wealth, but as a sanctuary of wisdom where sages and kings deliberate in peace." },
          { speaker: "Sage Narada", charKey: "krishna", bgKey: "khandava", dialogue: "Your humility in the presence of celestial grandeur brings blessings upon Indraprastha that far outweigh imperial titles." },
          { speaker: "Shakuni", charKey: "shakuni", bgKey: "dice", dialogue: "They use this palace to win the hearts of all rulers without firing an arrow... We must lure Yudhishthira away from his sanctuary!" }
        ],
        isEnding: true,
        divergence: 40,
        verdictTitle: "Sanctuary of the Sages",
        verdictDesc: "Indraprastha becomes a cultural hub of peace, depriving Duryodhana of direct pretexts for rivalry."
      },
      "i6_end_subterranean": {
        panels: [
          { speaker: "Takshaka Naga", charKey: "shakuni", bgKey: "khandava", dialogue: "Our subterranean pathways beneath Khandava shall serve as hidden tunnels, making Indraprastha completely impenetrable to invaders!" },
          { speaker: "Bhima", charKey: "bhima", bgKey: "khandava", dialogue: "With the Nagas guarding our subterranean borders, no secret army from Hastinapur shall ever catch us unprepared!" },
          { speaker: "Shakuni", charKey: "shakuni", bgKey: "dice", dialogue: "Their kingdom is fortified by serpents and earth spirits... A direct military assault on Indraprastha is now entirely impossible." }
        ],
        isEnding: true,
        divergence: 65,
        verdictTitle: "The Impenetrable Bastion",
        verdictDesc: "Naga subterranean forces fortify Indraprastha, rendering any surprise attack impossible."
      },
      "i6_end_agrarian": {
        panels: [
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "khandava", dialogue: "Let the Nagas guide our engineers to unlock subterranean springs, turning Khandava into the most fertile granary of Aryavarta." },
          { speaker: "Draupadi", charKey: "draupadi", bgKey: "khandava", dialogue: "Our fields overflow with grain, feeding the poor and welcoming travelers from every corner of the world." },
          { speaker: "Duryodhana", charKey: "duryodhana", bgKey: "arena", dialogue: "They transformed a desert into a paradise without even building a palace... Their moral standing in Aryavarta grows stronger each day!" }
        ],
        isEnding: true,
        divergence: 60,
        verdictTitle: "The Granary of Aryavarta",
        verdictDesc: "Indraprastha prospers as an agricultural powerhouse, earning the moral allegiance of neighboring realms."
      }
    }
  },

  // ==========================================
  // ISLAND 7: THE BANISHMENT PACT
  // ==========================================
  "island-7": {
    id: "island-7",
    title: "The Banishment Pact",
    parva: "Sabha Parva",
    rootStep: "i7_start",
    nodes: {
      "i7_start": {
        panels: [
          { speaker: "Draupadi", charKey: "draupadi", bgKey: "exile", dialogue: "How long shall we eat wild roots while Duryodhana sleeps on silk? The royal court of Hastinapur hath abandoned all righteous dharma, yet we sit in silence beneath these forest trees!" },
          { speaker: "Bhima", charKey: "bhima", bgKey: "exile", dialogue: "My mace rusts in the damp forest! Give the command, my lord brother, and I shall march on Hastinapur immediately, crush its gates, and shatter Duryodhana's throne before the sun sets!" },
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "exile", dialogue: "Patience, my beloved brothers and queen. A vow sworn before the sacred fire and witnessed by the elders cannot be broken out of anger, lest we become no different from those who deceived us." }
        ],
        prompt: "Bhima and Draupadi urge Yudhishthira to march back on Hastinapur immediately. What is ordered?",
        choices: [
          { text: "Endure 12-year wilderness exile oath (Canon)", badge: "Canon", nextNode: "i7_act1_endure" },
          { text: "Arjuna seeks Pashupatastra early for an ultimatum", badge: "Subversive", nextNode: "i7_act1_ultimatum" }
        ]
      },
      "i7_act1_endure": {
        panels: [
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "exile", dialogue: "We shall endure the full twelve years of wilderness exile as sworn, preserving our honor and allowing dharma to forge our spirits for the trials ahead." },
          { speaker: "Draupadi", charKey: "draupadi", bgKey: "exile", dialogue: "I bow to your unwavering righteousness, my lord, yet every day spent in this wilderness burns within my soul as a reminder of the justice that awaits Hastinapur!" },
          { speaker: "Lord Krishna", charKey: "krishna", bgKey: "exile", dialogue: "This period of trial is not a punishment, but a divine forge. The strength gathered in these quiet forests shall prepare the Pandavas to restore truth to all of Aryavarta." }
        ],
        prompt: "How shall the Pandavas utilize their twelve years of wilderness exile?",
        choices: [
          { text: "Dispatch Arjuna to perform penance for celestial weapons (Pasupatastra) (3A1)", badge: "Pasupata", nextNode: "i7_end_arjuna_penance" },
          { text: "Build secret diplomatic alliances with forest kingdoms and tribal realms (3A2)", badge: "Forest Allies", nextNode: "i7_end_forest_alliances" }
        ]
      },
      "i7_act1_ultimatum": {
        panels: [
          { speaker: "Arjuna", charKey: "arjuna", bgKey: "exile", dialogue: "I shall ascend the sacred peaks immediately, acquire the Pashupatastra from Lord Shiva, and return to deliver a final ultimatum unto King Dhritarashtra!" },
          { speaker: "Bhima", charKey: "bhima", bgKey: "exile", dialogue: "Spoken like a true Kshatriya! Once the divine weapon is in our hands, Hastinapur shall either yield our lawful kingdom or face total annihilation!" },
          { speaker: "Dhritarashtra", charKey: "duryodhana", bgKey: "dice", dialogue: "Alas! The Pandavas seek celestial weapons not for defense, but to force our surrender... Vidura, what hope remains if Arjuna brings Shiva's fire to our gates?" }
        ],
        prompt: "Upon returning with the Pashupatastra, how does Arjuna deliver the ultimatum to Hastinapur?",
        choices: [
          { text: "Present the ultimatum through Lord Krishna in the Kuru Court (3B1)", badge: "Krishna Envoy", nextNode: "i7_end_krishna_envoy" },
          { text: "Demonstrate the Pasupatastra's power outside Hastinapur's gates (3B2)", badge: "Show of Force", nextNode: "i7_end_show_of_force" }
        ]
      },
      "i7_end_arjuna_penance": {
        panels: [
          { speaker: "Arjuna", charKey: "arjuna", bgKey: "exile", dialogue: "I shall journey north into the sacred Himalayas, perform austere penance unto Lord Shiva, and acquire the divine Pasupatastra to guarantee our future victory." },
          { speaker: "Sage Vyasa", charKey: "drona", bgKey: "exile", dialogue: "Go forth, son of Kunti! The gods await your devotion, and your penance shall arm righteousness with celestial force." },
          { speaker: "Duryodhana", charKey: "duryodhana", bgKey: "arena", dialogue: "Our spies report Arjuna hath left for the high peaks... We must strengthen our own defenses and secure allies before he returns armed with divine power!" }
        ],
        isEnding: true,
        divergence: 0,
        verdictTitle: "Canonical Itihasa: Celestial Arsenal Secured",
        verdictDesc: "Arjuna earns the astras of the gods during exile, tipping future martial parity in the Pandavas' favor."
      },
      "i7_end_forest_alliances": {
        panels: [
          { speaker: "Bhima", charKey: "bhima", bgKey: "exile", dialogue: "While Arjuna seeks weapons, I shall venture deep into the forest realms to forge firm alliances with the powerful Nishada and Rakshasa clans." },
          { speaker: "King Drupada", charKey: "drona", bgKey: "swayamvara", dialogue: "Panchala’s envoys shall coordinate in secret with forest leaders, ensuring a grand coalition stands ready when the exile concludes." },
          { speaker: "Shakuni", charKey: "shakuni", bgKey: "dice", dialogue: "Observe, Duryodhana! They turn the wilderness into their own empire... We must hunt them down before their forest network becomes invincible!" }
        ],
        isEnding: true,
        divergence: 45,
        verdictTitle: "The Tribal Coalition",
        verdictDesc: "Bhima mobilizes forest and tribal clans into a formidable wilderness confederacy."
      },
      "i7_end_krishna_envoy": {
        panels: [
          { speaker: "Lord Krishna", charKey: "krishna", bgKey: "dice", dialogue: "I walk into Hastinapur's assembly not to gamble, but to present the ultimatum: restore Indraprastha peacefully, or face the wrath of the Pasupatastra!" },
          { speaker: "Bhishma", charKey: "drona", bgKey: "dice", dialogue: "Listen to Vasudeva, O King! Yielding to justice is no disgrace, but standing against divine power shall destroy our entire dynasty!" },
          { speaker: "Duryodhana", charKey: "duryodhana", bgKey: "dice", dialogue: "I refuse to be threatened by warnings! Let Krishna show his divine form if he wishes, but not a needle's point of land shall be given!" }
        ],
        isEnding: true,
        divergence: 60,
        verdictTitle: "The Celestial Ultimatum",
        verdictDesc: "Krishna delivers an early ultimatum backed by celestial arms, driving the Kauravas into defensive terror."
      },
      "i7_end_show_of_force": {
        panels: [
          { speaker: "Arjuna", charKey: "arjuna", bgKey: "arena", dialogue: "Behold the radiance of the Pasupatastra illuminating the horizons of Hastinapur! Let the Kuru elders see that war shall mean immediate destruction!" },
          { speaker: "Guru Drona", charKey: "drona", bgKey: "arena", dialogue: "The power radiating from that weapon transcends mortal archery... No warrior in Hastinapur, not even I, can withstand such celestial force!" },
          { speaker: "Shakuni", charKey: "shakuni", bgKey: "dice", dialogue: "Panic spreads through our ranks, Duryodhana! We must stall for time through trickery before their army marches upon the capital!" }
        ],
        isEnding: true,
        divergence: 75,
        verdictTitle: "Fire over Hastinapur",
        verdictDesc: "A demonstration of the Pashupatastra shatters Kaurava morale years before Kurukshetra."
      }
    }
  },

  // ==========================================
  // ISLAND 8: THE SHADOW IN MATSYA
  // ==========================================
  "island-8": {
    id: "island-8",
    title: "The Shadow in Matsya",
    parva: "Virata Parva",
    rootStep: "i8_start",
    nodes: {
      "i8_start": {
        panels: [
          { speaker: "Virata", charKey: "drona", bgKey: "matsya", dialogue: "Our kingdom prepares for celebration, yet whispers of danger reach my court. The Kuru forces watch our borders." },
          { speaker: "Draupadi", charKey: "draupadi", bgKey: "matsya", dialogue: "As Sairandhri, I have served quietly in this palace. But Keechaka's attention has become a threat I cannot ignore." },
          { speaker: "Bhima", charKey: "bhima", bgKey: "matsya", dialogue: "One word from you, Krishnaa, and the man who dishonors you will answer for it." },
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "matsya", dialogue: "We have survived twelve years of exile. We must not lose everything during the final year. Our identities must remain hidden." },
          { speaker: "Arjuna", charKey: "arjuna", bgKey: "matsya", dialogue: "And now the cattle raid begins. The Kauravas are testing Matsya's strength." }
        ],
        prompt: "Keechaka continues to harass Draupadi. How will you protect her without exposing the Pandavas?",
        choices: [
          { text: "The Secret of the Night (Confront Keechaka)", badge: "Night Duel", nextNode: "i8_act1_secret" },
          { text: "Defend Matsya from the Shadows (Focus on Cattle Raid)", badge: "Cattle Defense", nextNode: "i8_act2_cattle" }
        ]
      },
      "i8_act1_secret": {
        panels: [
          { speaker: "Bhima", charKey: "bhima", bgKey: "matsya", dialogue: "Meet me in the dance hall after sunset. Let Keechaka believe he has found the woman he desires." },
          { speaker: "Draupadi", charKey: "draupadi", bgKey: "matsya", dialogue: "If this is the only way to protect my honor, I shall risk the danger." },
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "matsya", dialogue: "Remember, Bhima. Victory is useless if it reveals who we truly are." },
          { speaker: "Bhima", charKey: "bhima", bgKey: "matsya", dialogue: "Then I shall make certain only Keechaka discovers the truth tonight." },
          { speaker: "Keechaka", charKey: "shakuni", bgKey: "matsya", dialogue: "Who are you?" },
          { speaker: "Bhima", charKey: "bhima", bgKey: "matsya", dialogue: "The consequence of believing power gives you the right to dishonor the helpless." }
        ],
        prompt: "After Keechaka's defeat, rumors spread throughout Matsya. How should Draupadi protect the Pandavas' identities?",
        choices: [
          { text: "Claim that her Gandharva protectors punished Keechaka (1A1)", badge: "Gandharvas", nextNode: "i8_end_gandharvas" },
          { text: "Reveal the truth to King Virata (1A2)", badge: "Reveal Truth", nextNode: "i8_end_reveal_virata" }
        ]
      },
      "i8_act2_cattle": {
        panels: [
          { speaker: "Virata", charKey: "drona", bgKey: "arena", dialogue: "Our cattle are being driven away! Someone must stop the Kuru army." },
          { speaker: "Arjuna", charKey: "arjuna", bgKey: "arena", dialogue: "The time has come. A kingdom cannot be saved while its defenders remain hidden." },
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "matsya", dialogue: "Arjuna, if you reveal yourself too soon, our thirteen years of exile may be lost." },
          { speaker: "Arjuna", charKey: "arjuna", bgKey: "arena", dialogue: "Then let the Gandiva speak before my name does. Today I fight not as Brihannala, but as a warrior defending the land that sheltered us." }
        ],
        prompt: "The battle is won. The Pandavas' identities can no longer remain hidden. What should King Virata do?",
        choices: [
          { text: "Accept the Pandavas as allies and offer an alliance (1B1)", badge: "Alliance", nextNode: "i8_end_virata_alliance" },
          { text: "Keep the discovery secret until the exile officially ends (1B2)", badge: "Secret Kept", nextNode: "i8_end_virata_secret" }
        ]
      },
      "i8_end_gandharvas": {
        panels: [
          { speaker: "Draupadi", charKey: "draupadi", bgKey: "matsya", dialogue: "I warned him that unseen protectors would punish his arrogance. He refused to listen." },
          { speaker: "Virata", charKey: "drona", bgKey: "matsya", dialogue: "Then perhaps the gods themselves have guarded my palace." },
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "matsya", dialogue: "Let the kingdom believe what it wishes. Our secret remains untouched." }
        ],
        isEnding: true,
        divergence: 0,
        verdictTitle: "Canonical Itihasa: Shielded by Myth",
        verdictDesc: "The Gandharva legend preserves the Pandavas' disguise until the final days of exile expire."
      },
      "i8_end_reveal_virata": {
        panels: [
          { speaker: "Draupadi", charKey: "draupadi", bgKey: "matsya", dialogue: "My king, the servants you know are not ordinary men. They are the sons of Pandu." },
          { speaker: "Virata", charKey: "drona", bgKey: "matsya", dialogue: "Then the greatest secret of my kingdom has been hidden beneath my own roof!" },
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "matsya", dialogue: "We trusted you because dharma demanded secrecy. Now we ask you to protect it." }
        ],
        isEnding: true,
        divergence: 40,
        verdictTitle: "Early Revelation to Virata",
        verdictDesc: "Virata discovers the secret early, eagerly pledging his kingdom to the Pandava cause."
      },
      "i8_end_virata_alliance": {
        panels: [
          { speaker: "Virata", charKey: "drona", bgKey: "arena", dialogue: "You entered my kingdom as strangers and defended it as heroes. From this day, Matsya stands beside the Pandavas." },
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "arena", dialogue: "Then let this alliance be built not upon revenge, but upon justice." }
        ],
        isEnding: true,
        divergence: 25,
        verdictTitle: "Matsya Alliance Sealed",
        verdictDesc: "King Virata pledges his entire royal army to the Pandava coalition."
      },
      "i8_end_virata_secret": {
        panels: [
          { speaker: "Virata", charKey: "drona", bgKey: "arena", dialogue: "Your secret shall remain within these walls until the proper hour." },
          { speaker: "Arjuna", charKey: "arjuna", bgKey: "arena", dialogue: "Then today we have won two victories—the cattle and the chance to choose our own destiny." }
        ],
        isEnding: true,
        divergence: 35,
        verdictTitle: "Discretion at Twilight",
        verdictDesc: "The Pandavas maintain formal incognito cover until the final seconds of the 13th year elapse."
      }
    }
  },

  // ==========================================
  // ISLAND 9: THE CHAMBER OF THE GOD
  // ==========================================
  "island-9": {
    id: "island-9",
    title: "The Chamber of the God",
    parva: "Udyoga Parva",
    rootStep: "i9_start",
    nodes: {
      "i9_start": {
        panels: [
          { speaker: "Arjuna", charKey: "arjuna", bgKey: "dwarka", dialogue: "Krishna stands between two armies of possibilities. One side holds his warriors. The other holds Krishna himself." },
          { speaker: "Duryodhana", charKey: "duryodhana", bgKey: "dwarka", dialogue: "I have come first. Therefore, the greater army should be mine." },
          { speaker: "Krishna", charKey: "krishna", bgKey: "dwarka", dialogue: "You may choose the Narayani Sena. But remember—an army gives strength to the battlefield. Wisdom gives direction to strength." },
          { speaker: "Arjuna", charKey: "arjuna", bgKey: "dwarka", dialogue: "I do not need an army if I have the one who understands the path ahead." }
        ],
        prompt: "Krishna offers one side his entire Narayani Sena and the other side Krishna himself, unarmed. What will you choose?",
        choices: [
          { text: "Choose Krishna (Unarmed Avatar)", badge: "Krishna", nextNode: "i9_act1_choose_krishna" },
          { text: "Choose the Narayani Sena (Ten Lakh Army)", badge: "Army", nextNode: "i9_act1_choose_army" }
        ]
      },
      "i9_act1_choose_krishna": {
        panels: [
          { speaker: "Arjuna", charKey: "arjuna", bgKey: "dwarka", dialogue: "I choose you, Krishna. Even without a weapon, your presence is worth more than an army." },
          { speaker: "Duryodhana", charKey: "duryodhana", bgKey: "dwarka", dialogue: "An unarmed Krishna? You have surrendered the greatest army in the world!" },
          { speaker: "Krishna", charKey: "krishna", bgKey: "dwarka", dialogue: "Perhaps. But Arjuna has chosen something an army cannot provide." },
          { speaker: "Arjuna", charKey: "arjuna", bgKey: "dwarka", dialogue: "A thousand warriors can follow a command. Only wisdom can show us which path deserves to be followed." }
        ],
        prompt: "Krishna promises not to fight. How should Arjuna use his presence?",
        choices: [
          { text: "Ask Krishna to become his charioteer (2A1)", badge: "Charioteer", nextNode: "i9_end_charioteer" },
          { text: "Ask Krishna to advise the Pandava council (2A2)", badge: "Council Advisor", nextNode: "i9_end_council_advisor" }
        ]
      },
      "i9_act1_choose_army": {
        panels: [
          { speaker: "Duryodhana", charKey: "duryodhana", bgKey: "dwarka", dialogue: "Excellent! The Narayani Sena will march under my banner!" },
          { speaker: "Arjuna", charKey: "arjuna", bgKey: "dwarka", dialogue: "You have chosen numbers. I have chosen the one who understands the battlefield itself." },
          { speaker: "Duryodhana", charKey: "duryodhana", bgKey: "dwarka", dialogue: "Let history decide which choice was wiser." },
          { speaker: "Krishna", charKey: "krishna", bgKey: "dwarka", dialogue: "History does not judge the size of an army. It remembers the choices made when power was placed in one's hands." }
        ],
        prompt: "As war approaches, what should the chosen alliance prioritize?",
        choices: [
          { text: "Build overwhelming military strength (2B1)", badge: "Military Power", nextNode: "i9_end_military_strength" },
          { text: "Build strategy around dharma and leadership (2B2)", badge: "Dharma Strategy", nextNode: "i9_end_dharma_strategy" }
        ]
      },
      "i9_end_charioteer": {
        panels: [
          { speaker: "Arjuna", charKey: "arjuna", bgKey: "dwarka", dialogue: "Then do not take up a weapon. Take the reins of my chariot." },
          { speaker: "Krishna", charKey: "krishna", bgKey: "dwarka", dialogue: "I shall guide your chariot. But the choices on the battlefield will still belong to you." },
          { speaker: "Arjuna", charKey: "arjuna", bgKey: "dwarka", dialogue: "Then let my strength be guided by wisdom." }
        ],
        isEnding: true,
        divergence: 0,
        verdictTitle: "Canonical Itihasa: The Divine Charioteer",
        verdictDesc: "Krishna ascends Arjuna's chariot, clearing the path for the Bhagavad Gita and divine oversight."
      },
      "i9_end_council_advisor": {
        panels: [
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "dwarka", dialogue: "If Krishna cannot fight, let his wisdom guide our decisions." },
          { speaker: "Krishna", charKey: "krishna", bgKey: "dwarka", dialogue: "A kingdom that listens before it acts is stronger than one that merely strikes first." }
        ],
        isEnding: true,
        divergence: 30,
        verdictTitle: "The Sovereign Counselor",
        verdictDesc: "Krishna leads strategic diplomacy from the Pandava war room rather than driving Arjuna's chariot."
      },
      "i9_end_military_strength": {
        panels: [
          { speaker: "Duryodhana", charKey: "duryodhana", bgKey: "arena", dialogue: "Gather every warrior. Victory belongs to the side with greater force." }
        ],
        isEnding: true,
        divergence: 70,
        verdictTitle: "The Armored Juggernaut",
        verdictDesc: "Duryodhana concentrates supreme numbers, fighting an uncoordinated war of raw attrition."
      },
      "i9_end_dharma_strategy": {
        panels: [
          { speaker: "Krishna", charKey: "krishna", bgKey: "dwarka", dialogue: "Strength may win a battle. But only righteous purpose can give meaning to victory." },
          { speaker: "Arjuna", charKey: "arjuna", bgKey: "dwarka", dialogue: "Then our greatest weapon shall not be the bow. It shall be knowing why we fight." }
        ],
        isEnding: true,
        divergence: 40,
        verdictTitle: "The Guiding Moral Standard",
        verdictDesc: "The Pandavas offset sheer numerical disadvantage through tactical cohesion and righteous morale."
      }
    }
  },

  // ==========================================
  // ISLAND 10: THE FALLEN GURU
  // ==========================================
  "island-10": {
    id: "island-10",
    title: "The Fallen Guru",
    parva: "Drona Parva",
    rootStep: "i10_start",
    nodes: {
      "i10_start": {
        panels: [
          { speaker: "Drona", charKey: "drona", bgKey: "kurukshetra", dialogue: "As long as I hold my weapons, no warrior can force me from this battlefield." },
          { speaker: "Krishna", charKey: "krishna", bgKey: "kurukshetra", dialogue: "Drona fights with the fury of a father who believes his son still stands." },
          { speaker: "Bhima", charKey: "bhima", bgKey: "kurukshetra", dialogue: "His army cannot withstand him forever. But his heart has one weakness—Ashwatthama." },
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "kurukshetra", dialogue: "You ask me to speak words that may deceive a man who trusts my truth." },
          { speaker: "Krishna", charKey: "krishna", bgKey: "kurukshetra", dialogue: "Sometimes the battlefield places two duties against each other. Today, you must decide which truth you are prepared to carry." }
        ],
        prompt: "Drona's attack is destroying the Pandava forces. How can his advance be stopped?",
        choices: [
          { text: "Refuse Deception (Hold Absolute Truth)", badge: "Truth", nextNode: "i10_act1_refuse" },
          { text: "The Half-Truth (Ambiguous Elephant Word)", badge: "Half-Truth", nextNode: "i10_act1_half_truth" }
        ]
      },
      "i10_act1_refuse": {
        panels: [
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "kurukshetra", dialogue: "I will not deliberately speak a falsehood. Even victory cannot be purchased by abandoning truth." },
          { speaker: "Bhima", charKey: "bhima", bgKey: "kurukshetra", dialogue: "Then thousands more may fall before the day ends!" },
          { speaker: "Arjuna", charKey: "arjuna", bgKey: "kurukshetra", dialogue: "There must be another way to stop my teacher without breaking Yudhishthira's vow." },
          { speaker: "Krishna", charKey: "krishna", bgKey: "kurukshetra", dialogue: "Then search for a path where truth and strategy meet." }
        ],
        prompt: "Drona refuses to lower his weapons unless he believes Ashwatthama is dead. What should the Pandavas do?",
        choices: [
          { text: "Tell Drona the truth about Ashwatthama (3A1)", badge: "Truth Told", nextNode: "i10_end_truth_told" },
          { text: "Search for a strategic alternative (Elephant Ambiguity) (3A2)", badge: "Elephant Stratagem", nextNode: "i10_act1_half_truth" }
        ]
      },
      "i10_act1_half_truth": {
        panels: [
          { speaker: "Bhima", charKey: "bhima", bgKey: "kurukshetra", dialogue: "Ashwatthama is dead!" },
          { speaker: "Drona", charKey: "drona", bgKey: "kurukshetra", dialogue: "Impossible! I will believe only Yudhishthira. He has never lied. Tell me, son of Dharma: is Ashwatthama dead?" },
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "kurukshetra", dialogue: "Ashwatthama is dead..." },
          { speaker: "Drona", charKey: "drona", bgKey: "kurukshetra", dialogue: "My son..." },
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "kurukshetra", dialogue: "...the elephant." },
          { speaker: "Drona", charKey: "drona", bgKey: "kurukshetra", dialogue: "Then fate itself has turned against me." },
          { speaker: "Krishna", charKey: "krishna", bgKey: "kurukshetra", dialogue: "The words were true. But truth can still carry the weight of consequence." }
        ],
        prompt: "After Drona lays down his weapons, how should Yudhishthira respond to what he has done?",
        choices: [
          { text: "Accept the victory without regret (3B1)", badge: "No Regret", nextNode: "i10_end_no_regret" },
          { text: "Accept victory but carry the burden of the choice (3B2)", badge: "Carry Burden", nextNode: "i10_end_carry_burden" }
        ]
      },
      "i10_end_truth_told": {
        panels: [
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "kurukshetra", dialogue: "Ashwatthama lives. I will not turn truth into a weapon." },
          { speaker: "Drona", charKey: "drona", bgKey: "kurukshetra", dialogue: "Then my son lives... and my duty on this field remains." },
          { speaker: "Krishna", charKey: "krishna", bgKey: "kurukshetra", dialogue: "Your truth remains untouched, but the battlefield demands another answer." }
        ],
        isEnding: true,
        divergence: 65,
        verdictTitle: "The Unbroken Truth",
        verdictDesc: "Drona continues his onslaught, forcing the Pandavas to rely on raw attrition without subterfuge."
      },
      "i10_end_no_regret": {
        panels: [
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "kurukshetra", dialogue: "The war demanded a sacrifice. I chose the path that saved our army." },
          { speaker: "Krishna", charKey: "krishna", bgKey: "kurukshetra", dialogue: "Then remember this victory does not erase the moral weight of the road taken." }
        ],
        isEnding: true,
        divergence: 15,
        verdictTitle: "The Pragmatic Sovereign",
        verdictDesc: "Yudhishthira embraces statecraft over ascetic purity, accepting compromise as a cost of victory."
      },
      "i10_end_carry_burden": {
        panels: [
          { speaker: "Yudhishthira", charKey: "yudhishthira", bgKey: "kurukshetra", dialogue: "I spoke the truth, yet I know my words were chosen to create a false belief. Victory has come, but so has a burden I must carry." },
          { speaker: "Arjuna", charKey: "arjuna", bgKey: "kurukshetra", dialogue: "Perhaps that is the price of war—sometimes the hardest battle is the one fought within oneself." },
          { speaker: "Krishna", charKey: "krishna", bgKey: "kurukshetra", dialogue: "And that is why dharma is not always a simple choice between black and white. It is the courage to face the consequences of your decision." }
        ],
        isEnding: true,
        divergence: 0,
        verdictTitle: "Canonical Itihasa: The Weight of Dharma",
        verdictDesc: "Drona drops his arms, sealing the turning point of Kurukshetra while Yudhishthira shoulders the karmic burden."
      }
    }
  }
};

export const getIslandStartNode = (islandId) => {
  return STORY_GRAPH[islandId]?.rootStep || "i1_start";
};
