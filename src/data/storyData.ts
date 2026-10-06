import { ASSETS } from '../assets/gameAssets';

export interface StoryChoice {
  id: string;
  type: 'CANON' | 'SUBVERSIVE' | 'RADICAL';
  label: string;
  badge: string;
  borderColor: string;
  dilemma: string;
  divergence: number;
  outcomeHeadline: string;
  narrativeRecap: string;
  philosophicalAnalysis: string;
  quote: {
    text: string;
    source: string;
  };
}

export interface StoryIsland {
  id: string;
  number: number;
  title: string;
  era: string;
  location: string;
  backgroundKey: keyof typeof ASSETS.scenes;
  bgUrl: string;
  characterKey: keyof typeof ASSETS.characters;
  characterUrl: string;
  speakerName: string;
  speakerTag: string;
  summary: string;
  prelude: string;
  dialogue: string;
  choices: StoryChoice[];
}

export const STORY_DATA: StoryIsland[] = [
  {
    id: 'island-1',
    number: 1,
    title: "Pandu's Curse",
    era: "Adi Parva",
    location: "Kamlaya Deep Forest",
    backgroundKey: "forest",
    bgUrl: ASSETS.scenes.forest,
    characterKey: "pandu",
    characterUrl: ASSETS.characters.pandu,
    speakerName: "KING PANDU",
    speakerTag: "CURSED SOVEREIGN OF HASTINAPUR",
    summary: "King Pandu accidentally shoots Sage Kindama in male-female deer form during a hunt. Dying, the sage lays a fatal curse upon the king.",
    prelude: "The misty forest echoes with the TWANG of an arrow! Sage Kindama, struck while in deer form, raises his trembling hand in incandescent rage as life fades.",
    dialogue: "Accursed King! You have slain a holy sage in the moment of divine union. Should you ever embrace your queens with passion, your heart shall burst in instant death! How will you now rule Hastinapur?",
    choices: [
      {
        id: 'c1-canon',
        type: 'CANON',
        label: 'Forest Penance & Niyoga Divine Boon',
        badge: '[ORIGINAL ITIHASA]',
        borderColor: 'border-amber-400 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.5)]',
        dilemma: 'Accept forest exile, allowing Kunti to use the divine mantra to summon Devas for heirs.',
        divergence: 0,
        outcomeHeadline: 'WHAT IF... Pandu Accepted Forest Penance?',
        narrativeRecap: 'Pandu lives in forest solitude. Kunti invokes Dharma, Vayu, and Indra to give birth to Yudhishthira, Bhima, and Arjuna. The divine lineage of the Pandavas is preserved in full accordance with Vyasa lore.',
        philosophicalAnalysis: 'Accepting mortal suffering for divine penance allows cosmic order to birth righteous leaders.',
        quote: {
          text: 'The body perishes under fate, but penance purifies the royal soul.',
          source: 'Mahabharata, Adi Parva'
        }
      },
      {
        id: 'c1-subversive',
        type: 'SUBVERSIVE',
        label: 'Rule from Hastinapur as Celibate Monarch',
        badge: '[SUBVERSIVE PATH]',
        borderColor: 'border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.5)]',
        dilemma: 'Return to Hastinapur, retaining the throne while living as a celibate king alongside Kunti & Madri.',
        divergence: 45,
        outcomeHeadline: 'WHAT IF... King Pandu Retained the Throne?',
        narrativeRecap: 'Pandu returns to Hastinapur and rules with wisdom while remaining celibate. Dhritarashtra is never granted imperial regent powers; Duryodhana’s toxicity is contained in boyhood.',
        philosophicalAnalysis: 'Pragmatic governance prioritized over forest martyrdom prevents institutional corruption.',
        quote: {
          text: 'A king’s true temple is his court, not the lonely woods.',
          source: 'Dharmakshetra Multiverse Chronicles'
        }
      },
      {
        id: 'c1-radical',
        type: 'RADICAL',
        label: 'Total Abdication to Dhritarashtra Immediately',
        badge: '[RADICAL PATH]',
        borderColor: 'border-rose-500 text-rose-300 shadow-[0_0_15px_rgba(225,29,72,0.5)]',
        dilemma: 'Hand over absolute crown authority to blind brother Dhritarashtra and vanish into ascetism.',
        divergence: 85,
        outcomeHeadline: 'WHAT IF... Pandu Abdicated Instantly to Dhritarashtra?',
        narrativeRecap: 'Dhritarashtra is crowned Emperor 20 years earlier. Shakuni consolidates power at court. Without Pandu’s shadow, Duryodhana is declared undisputed heir from infancy.',
        philosophicalAnalysis: 'Sudden abandonment of royal duty creates immediate political vacuums exploited by malicious actors.',
        quote: {
          text: 'When the rightful ruler abandons his post, darkness claims the crown.',
          source: 'Dharmakshetra Multiverse Chronicles'
        }
      }
    ]
  },

  {
    id: 'island-2',
    number: 2,
    title: "Arena Showcase",
    era: "Adi Parva",
    location: "Royal Arena, Hastinapur",
    backgroundKey: "arena",
    bgUrl: ASSETS.scenes.arena,
    characterKey: "karna",
    characterUrl: ASSETS.characters.karna,
    speakerName: "KARNA",
    speakerTag: "SUN-BORN CHAMPION OF ANGA",
    summary: "In the royal martial tournament, Karna challenges Arjuna to single combat. Kripacharya demands Karna state his royal lineage before fighting.",
    prelude: "The stadium roars under sun-baked banners! Karna’s solar medallion armor blazes as he steps into the arena, matching Arjuna’s archery feats shot for shot.",
    dialogue: "You call yourself the greatest archer, Arjuna! I challenge you to single combat! Why does your master hide behind lineage rules when my bow speaks truth?",
    choices: [
      {
        id: 'c2-canon',
        type: 'CANON',
        label: 'Crowned King of Anga by Duryodhana',
        badge: '[ORIGINAL ITIHASA]',
        borderColor: 'border-amber-400 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.5)]',
        dilemma: 'Duryodhana crowns Karna King of Anga on the spot, forging an unbreakable bond of loyalty.',
        divergence: 0,
        outcomeHeadline: 'WHAT IF... Duryodhana Crowned Karna King of Anga?',
        narrativeRecap: 'Karna pledges eternal friendship to Duryodhana. This dynamic alliance guarantees the Kauravas an archer equal to Arjuna, setting the tragic stage for Kurukshetra.',
        philosophicalAnalysis: 'Gratitude offered in moments of public humiliation creates bonds stronger than blood.',
        quote: {
          text: 'He who offers a kingdom to a friend in shame earns a warrior for eternity.',
          source: 'Mahabharata, Adi Parva'
        }
      },
      {
        id: 'c2-subversive',
        type: 'SUBVERSIVE',
        label: 'Kunti Steps Forward to Reveal Secret Birth',
        badge: '[SUBVERSIVE PATH]',
        borderColor: 'border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.5)]',
        dilemma: 'Queen Kunti faints and publicly reveals Karna as her eldest son before the court.',
        divergence: 50,
        outcomeHeadline: 'WHAT IF... Kunti Revealed Karna’s Identity at the Arena?',
        narrativeRecap: 'The arena falls silent! Bhishma welcomes Karna as the eldest Pandava prince. Duryodhana loses his main weapon against Arjuna, forcing an early peaceful division of the empire.',
        philosophicalAnalysis: 'Truth spoken in public shatters systemic prejudice before bloodshed erupts.',
        quote: {
          text: 'Truth revealed in daylight dissolves plots hatched in night.',
          source: 'Dharmakshetra Multiverse Chronicles'
        }
      },
      {
        id: 'c2-radical',
        type: 'RADICAL',
        label: 'Illegal Duel to the Death in the Arena',
        badge: '[RADICAL PATH]',
        borderColor: 'border-rose-500 text-rose-300 shadow-[0_0_15px_rgba(225,29,72,0.5)]',
        dilemma: 'Karna ignores protocol and fires celestial arrows directly at Arjuna, starting an immediate duel.',
        divergence: 90,
        outcomeHeadline: 'WHAT IF... Karna and Arjuna Dueled to the Death in the Arena?',
        narrativeRecap: 'The tournament becomes a bloodbath! Arjuna’s bowstring snaps; Karna’s divine armor deflects Gandiva arrows. Drona halts the duel by force, permanently branding Karna an outlaw warrior.',
        philosophicalAnalysis: 'Unchecked passion in public spectacles transforms competition into civil war.',
        quote: {
          text: 'When rules are trampled in anger, the arena becomes a graveyard.',
          source: 'Dharmakshetra Multiverse Chronicles'
        }
      }
    ]
  },

  {
    id: 'island-3',
    number: 3,
    title: "The House of Lac",
    era: "Adi Parva",
    location: "Palace of Lacquer, Varanavata",
    backgroundKey: "lac",
    bgUrl: ASSETS.scenes.lac,
    characterKey: "bhima",
    characterUrl: ASSETS.characters.bhima,
    speakerName: "BHIMA",
    speakerTag: "MIGHTY WARRIOR OF PANDAVAS",
    summary: "The Pandavas discover the palace at Varanavata is made of dry lacquer, fat, and wax. Purochana prepares to lock the doors and light the torch at midnight.",
    prelude: "The air smells of melting pitch and dry resin. Bheema’s fingers scrape the plaster wall, revealing pure combustible wax underneath. The secret miner’s tunnel is ready beneath the floorboards.",
    dialogue: "Brother Yudhishthira! The walls weep resin! Purochana holds the torch at the outer gate. Shall we escape down Vidura’s dark tunnel, or smash the assassin with my mace right now?",
    choices: [
      {
        id: 'c3-canon',
        type: 'CANON',
        label: 'Escape via Underground Tunnel secretly',
        badge: '[ORIGINAL ITIHASA]',
        borderColor: 'border-amber-400 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.5)]',
        dilemma: 'Set fire to the palace, trap Purochana inside, and escape underground disguised as ascetics.',
        divergence: 0,
        outcomeHeadline: 'WHAT IF... The Pandavas Escaped via the Underground Tunnel?',
        narrativeRecap: 'The wax palace burns to ashes. Duryodhana believes the Pandavas are dead. Living incognito, Bheema slays Hidimba and Arjuna wins Draupadi at the Swayamvara.',
        philosophicalAnalysis: 'Strategic retreat and patience buy the time required to build unbeatable alliances.',
        quote: {
          text: 'The seed buried under dark soil is preparing to burst forth as a giant banyan.',
          source: 'Mahabharata, Adi Parva'
        }
      },
      {
        id: 'c3-subversive',
        type: 'SUBVERSIVE',
        label: 'Arrest Purochana & March to Hastinapur Trial',
        badge: '[SUBVERSIVE PATH]',
        borderColor: 'border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.5)]',
        dilemma: 'Capture Purochana alive with wax evidence and present him before King Dhritarashtra in open court.',
        divergence: 40,
        outcomeHeadline: 'WHAT IF... The Pandavas Exposed the Lac Palace Treason Publicly?',
        narrativeRecap: 'Bheema drags Purochana into the imperial assembly hall. The citizens of Hastinapur demand Duryodhana’s arrest. Dhritarashtra is forced to strip Duryodhana of crown status.',
        philosophicalAnalysis: 'Exposing evil with incontrovertible evidence neutralizes conspiracies without military war.',
        quote: {
          text: 'Public truth is the sharpest blade against palace intrigue.',
          source: 'Dharmakshetra Multiverse Chronicles'
        }
      },
      {
        id: 'c3-radical',
        type: 'RADICAL',
        label: 'Seize Varanavata Fort by Military Force',
        badge: '[RADICAL PATH]',
        borderColor: 'border-rose-500 text-rose-300 shadow-[0_0_15px_rgba(225,29,72,0.5)]',
        dilemma: 'Bheema slays Purochana, fortifies Varanavata, and calls upon neighboring kings to declare rebellion.',
        divergence: 80,
        outcomeHeadline: 'WHAT IF... Bheema Seized Varanavata Fort by Force?',
        narrativeRecap: 'The Pandavas launch an early civil war 13 years ahead of schedule. Hastinapur is caught unprepared, but the young Pandavas lack Panchala and Yadava alliance backing.',
        philosophicalAnalysis: 'Premature aggressive action without strategic alliances leads to bloody pyrrhic struggles.',
        quote: {
          text: 'Valor without preparation is a flame that consumes its own torch.',
          source: 'Dharmakshetra Multiverse Chronicles'
        }
      }
    ]
  },

  {
    id: 'island-4',
    number: 4,
    title: "Draupadi's Swayamvara",
    era: "Adi Parva",
    location: "Kampilya Arena, Panchala",
    backgroundKey: "swayamvara",
    bgUrl: ASSETS.scenes.swayamvara,
    characterKey: "arjuna",
    characterUrl: ASSETS.characters.arjuna,
    speakerName: "ARJUNA",
    speakerTag: "BRAHMIN DISGUISED ARCHER",
    summary: "Prince Arjuna in Brahmin robes steps to the revolving golden fish target above the water pool. He string the massive bow easily.",
    prelude: "Kings and princes have failed to string the divine bow of King Drupada. Disguised as a poor Brahmin, Arjuna steps forward amidst whispers from the royal gallery.",
    dialogue: "I seek permission to attempt the target! Five arrows, one glance into the water mirror below! If the gods favor this Brahmin, Draupadi’s garland shall be won.",
    choices: [
      {
        id: 'c4-canon',
        type: 'CANON',
        label: 'Hit Target & Draupadi Weds All Five Brothers',
        badge: '[ORIGINAL ITIHASA]',
        borderColor: 'border-amber-400 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.5)]',
        dilemma: 'Arjuna pierces the golden eye. Due to Kunti’s spoken command ("Share equally"), Draupadi marries all 5 Pandavas.',
        divergence: 0,
        outcomeHeadline: 'WHAT IF... Draupadi Wed All Five Pandavas?',
        narrativeRecap: 'The unique polyandrous marriage unites all 5 brothers in an unbreakable single unit. King Drupada’s mighty Panchala army joins the Pandavas, forcing Dhritarashtra to grant half the empire.',
        philosophicalAnalysis: 'Unbending unity among brothers turns individual talents into an indestructible empire.',
        quote: {
          text: 'Five fingers folded together form the fist that breaks mountains.',
          source: 'Mahabharata, Adi Parva'
        }
      },
      {
        id: 'c4-subversive',
        type: 'SUBVERSIVE',
        label: 'Draupadi Weds Only Arjuna Exclusively',
        badge: '[SUBVERSIVE PATH]',
        borderColor: 'border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.5)]',
        dilemma: 'Kunti clarifies her statement; Draupadi marries Arjuna alone as the archer champion.',
        divergence: 60,
        outcomeHeadline: 'WHAT IF... Draupadi Wed Only Arjuna?',
        narrativeRecap: 'Arjuna becomes Crown Prince of Panchala-Indraprastha. However, subtle rivalries emerge between Bhima and Arjuna over imperial dominance, weakening Pandava internal cohesion.',
        philosophicalAnalysis: 'Altering shared destiny in favor of individual inheritance introduces subtle fault lines.',
        quote: {
          text: 'When shared glory becomes private prize, the brotherhood fractures inside.',
          source: 'Dharmakshetra Multiverse Chronicles'
        }
      },
      {
        id: 'c4-radical',
        type: 'RADICAL',
        label: 'Karna Hits Target & Claims Draupadi',
        badge: '[RADICAL PATH]',
        borderColor: 'border-rose-500 text-rose-300 shadow-[0_0_15px_rgba(225,29,72,0.5)]',
        dilemma: 'Draupadi does not reject Karna; Karna pierces the golden fish eye before Arjuna steps up.',
        divergence: 85,
        outcomeHeadline: 'WHAT IF... Karna Won Draupadi at the Swayamvara?',
        narrativeRecap: 'Karna wins Draupadi and brings her to Anga! Duryodhana gains the Panchala alliance. The Pandavas remain isolated forest wanderers without royal support.',
        philosophicalAnalysis: 'A single turn of a arrow can shift the balance of world power from Pandavas to Kauravas.',
        quote: {
          text: 'Fate hangs upon an arrow’s tip; when it strikes true, empires crumble.',
          source: 'Dharmakshetra Multiverse Chronicles'
        }
      }
    ]
  },

  {
    id: 'island-5',
    number: 5,
    title: "Khandava Partition",
    era: "Sabha Parva",
    location: "Khandavaprastha Wasteland",
    backgroundKey: "khandava",
    bgUrl: ASSETS.scenes.khandava,
    characterKey: "yudhishthira",
    characterUrl: ASSETS.characters.yudhishthira,
    speakerName: "YUDHISHTHIRA",
    speakerTag: "KING OF INDRAPRASTHA",
    summary: "Dhritarashtra divides the Kuru kingdom, giving Hastinapur to Duryodhana and the barren wasteland of Khandavaprastha to Yudhishthira.",
    prelude: "The elders present the partition decree. Duryodhana smiles arrogantly as the Pandavas are handed an arid forest infested with snakes and ruins.",
    dialogue: "Uncle Dhritarashtra gives us the dried bones of Khandavaprastha while keeping golden Hastinapur for his sons! Shall we accept this wilderness and build a new capital, or demand half of Hastinapur?",
    choices: [
      {
        id: 'c5-canon',
        type: 'CANON',
        label: 'Build Golden Indraprastha in Khandava',
        badge: '[ORIGINAL ITIHASA]',
        borderColor: 'border-amber-400 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.5)]',
        dilemma: 'Accept the wasteland, clear Khandava with Agni & Krishna, and build Maya Sabha in Indraprastha.',
        divergence: 0,
        outcomeHeadline: 'WHAT IF... Yudhishthira Built Indraprastha in Khandava?',
        narrativeRecap: 'With Lord Krishna and architect Mayasura, the Pandavas turn a desert into the grandest city on earth. Yudhishthira performs the Rajasuya Yajna, establishing supreme imperial status.',
        philosophicalAnalysis: 'Righteous effort transforms barren rocks into golden thrones of divine justice.',
        quote: {
          text: 'He who turns wilderness into paradise earns the title of Emperor.',
          source: 'Mahabharata, Sabha Parva'
        }
      },
      {
        id: 'c5-subversive',
        type: 'SUBVERSIVE',
        label: 'Demand Equal Partition of Hastinapur City',
        badge: '[SUBVERSIVE PATH]',
        borderColor: 'border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.5)]',
        dilemma: 'Refuse the wasteland decree and demand a street-by-street equal division of Hastinapur capital.',
        divergence: 45,
        outcomeHeadline: 'WHAT IF... The Pandavas Demanded Half of Hastinapur City?',
        narrativeRecap: 'Bhishma enforces an equal urban division. Two rival courts sit in the same city walls. Daily friction leads to an early armed coup by Duryodhana.',
        philosophicalAnalysis: 'Physical proximity without trust breeds constant friction that ignites conflict.',
        quote: {
          text: 'Two tigers cannot share a single cave without blood on the stones.',
          source: 'Dharmakshetra Multiverse Chronicles'
        }
      },
      {
        id: 'c5-radical',
        type: 'RADICAL',
        label: 'Co-Rule under Dhritarashtra without Partition',
        badge: '[RADICAL PATH]',
        borderColor: 'border-rose-500 text-rose-300 shadow-[0_0_15px_rgba(225,29,72,0.5)]',
        dilemma: 'Decline separate kingdom status entirely and serve as ministers under King Dhritarashtra.',
        divergence: 75,
        outcomeHeadline: 'WHAT IF... The Pandavas Co-Ruled under Dhritarashtra?',
        narrativeRecap: 'Yudhishthira serves as Prime Minister while Duryodhana commands the army. The Pandavas are gradually subordinated, stripped of independent military power over a decade.',
        philosophicalAnalysis: 'Submitting independent righteousness to corrupt authority eventually erodes all freedom.',
        quote: {
          text: 'Servitude under a corrupt crown turns eagles into caged birds.',
          source: 'Dharmakshetra Multiverse Chronicles'
        }
      }
    ]
  },

  {
    id: 'island-6',
    number: 6,
    title: "The Loaded Dice",
    era: "Sabha Parva",
    location: "Imperial Assembly, Hastinapur",
    backgroundKey: "dice",
    bgUrl: ASSETS.scenes.dice,
    characterKey: "shakuni",
    characterUrl: ASSETS.characters.shakuni,
    speakerName: "SHAKUNI",
    speakerTag: "MASTER OF LOADED DICE",
    summary: "King Yudhishthira is enticed into a game of loaded ivory dice by Shakuni. Crown, kingdom, brothers, and Draupadi hang on the rolls.",
    prelude: "The gambling hall gleams under golden torches. Shakuni rattles his loaded bone dice in his withered palm, smiling maliciously at Yudhishthira.",
    dialogue: "You have lost your jewels, your chariots, and your kingdom of Indraprastha, O King! But you still have your brothers, yourself, and Empress Draupadi. Roll the dice, Yudhishthira!",
    choices: [
      {
        id: 'c6-canon',
        type: 'CANON',
        label: 'Yudhishthira Bets Everything & Draupadi',
        badge: '[ORIGINAL ITIHASA]',
        borderColor: 'border-amber-400 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.5)]',
        dilemma: 'Follow gambling protocol, lose brothers and Draupadi, leading to insult in court and 13 years exile.',
        divergence: 0,
        outcomeHeadline: 'WHAT IF... Yudhishthira Bet Everything in the Gambling Hall?',
        narrativeRecap: 'Draupadi is insulted in court; Krishna grants infinite saree cloth. Dhritarashtra releases them, but a second roll seals 12 years forest exile + 1 year incognito.',
        philosophicalAnalysis: 'Blind compliance with rigged protocol without moral discernment causes catastrophic tragedy.',
        quote: {
          text: 'When Dharma is ruined by those who protect it, disaster becomes the teacher.',
          source: 'Mahabharata, Sabha Parva'
        }
      },
      {
        id: 'c6-subversive',
        type: 'SUBVERSIVE',
        label: 'Vidura & Bhishma Halt the Match by Force',
        badge: '[SUBVERSIVE PATH]',
        borderColor: 'border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.5)]',
        dilemma: 'Vidura raises his staff and Bhishma draws his sword, voiding the loaded game under fraud laws.',
        divergence: 55,
        outcomeHeadline: 'WHAT IF... Bhishma and Vidura Halted the Gambling Match?',
        narrativeRecap: 'The match is declared null and void. Shakuni is banished from Hastinapur. Indraprastha is preserved, but an armed cold war simmers between the two capitals.',
        philosophicalAnalysis: 'Moral courage by elders to break corrupt procedures prevents fatalistic ruin.',
        quote: {
          text: 'Refusing to play a rigged game is the highest wisdom of a king.',
          source: 'Dharmakshetra Multiverse Chronicles'
        }
      },
      {
        id: 'c6-radical',
        type: 'RADICAL',
        label: 'Krishna Rolls the Dice for Pandavas',
        badge: '[RADICAL PATH]',
        borderColor: 'border-rose-500 text-rose-300 shadow-[0_0_15px_rgba(225,29,72,0.5)]',
        dilemma: 'Yudhishthira requests Lord Krishna to step in and roll the dice against Shakuni.',
        divergence: 85,
        outcomeHeadline: 'WHAT IF... Lord Krishna Rolled the Dice for the Pandavas?',
        narrativeRecap: 'Krishna steps to the board! His divine intent overrules Shakuni’s bone dice. Yudhishthira wins back all lost items plus Hastinapur itself! Duryodhana is left penniless.',
        philosophicalAnalysis: 'Invoking divine consciousness into mortal games shatters illusion instantly.',
        quote: {
          text: 'Where Krishna holds the dice, cosmic truth is the only result.',
          source: 'Dharmakshetra Multiverse Chronicles'
        }
      }
    ]
  },

  {
    id: 'island-7',
    number: 7,
    title: "The Banishment Pact",
    era: "Vana Parva",
    location: "Kamyaka Forest Camp",
    backgroundKey: "exile",
    bgUrl: ASSETS.scenes.exile,
    characterKey: "duryodhana",
    characterUrl: ASSETS.characters.duryodhana,
    speakerName: "DURYODHANA",
    speakerTag: "CROWN PRINCE OF HASTINAPUR",
    summary: "After the second dice match, the Pandavas are sentenced to 12 years of forest exile and 1 year incognito in hiding.",
    prelude: "The Pandavas discard their royal robes for rough tree bark. Duryodhana watches from his chariot with an arrogant scowl as they walk into the wilderness.",
    dialogue: "Thirteen years in rags! Twelve years in wild forests and one year where if we spot you, you go back for thirteen more! Depart, Pandavas, and leave Aryavarta to me!",
    choices: [
      {
        id: 'c7-canon',
        type: 'CANON',
        label: 'Accept 12 Years Exile + 1 Year Incognito',
        badge: '[ORIGINAL ITIHASA]',
        borderColor: 'border-amber-400 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.5)]',
        dilemma: 'Endure the 13 years faithfully to honor the vow, acquiring divine astras and spiritual power.',
        divergence: 0,
        outcomeHeadline: 'WHAT IF... The Pandavas Accepted 13 Years Banishment?',
        narrativeRecap: 'Arjuna ascends to Indraloka for divine astras; Bhima meets Hanuman; Yudhishthira solves the Yaksha Prashna riddles. The 13 years refine the Pandavas into invincible warriors.',
        philosophicalAnalysis: 'Enduring trial and exile forges divine steel in human character.',
        quote: {
          text: 'Patience is the gathering of lightning before the storm strikes.',
          source: 'Mahabharata, Vana Parva'
        }
      },
      {
        id: 'c7-subversive',
        type: 'SUBVERSIVE',
        label: 'Reject Pact & Launch Immediate War with Panchala',
        badge: '[SUBVERSIVE PATH]',
        borderColor: 'border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.5)]',
        dilemma: 'Draupadi convinces Yudhishthira to break the fraudulent pact and march on Hastinapur with King Drupada.',
        divergence: 65,
        outcomeHeadline: 'WHAT IF... The Pandavas Rejected Exile and Fought Immediately?',
        narrativeRecap: 'The Panchala and Yadava alliance invades Hastinapur 13 years early. Duryodhana is defeated, but the Pandavas bear the reputational stain of breaking their word.',
        philosophicalAnalysis: 'Swift vengeance addresses immediate injustice but leaves moral stains on the victors.',
        quote: {
          text: 'A victory bought with a broken word carries shadows into the reign.',
          source: 'Dharmakshetra Multiverse Chronicles'
        }
      },
      {
        id: 'c7-radical',
        type: 'RADICAL',
        label: 'Accept 12 Years Open Exile without Incognito Rule',
        badge: '[RADICAL PATH]',
        borderColor: 'border-rose-500 text-rose-300 shadow-[0_0_15px_rgba(225,29,72,0.5)]',
        dilemma: 'Renegotiate the pact to 12 years open forest living without the trick incognito clause.',
        divergence: 80,
        outcomeHeadline: 'WHAT IF... The Pandavas Negotiated Open Exile without Hiding?',
        narrativeRecap: 'The Pandavas live openly as revered forest kings. At the end of 12 years, they reclaim Indraprastha peacefully as international allies back their rightful return.',
        philosophicalAnalysis: 'Removing trap clauses from treaties guarantees peaceful transitions of power.',
        quote: {
          text: 'Clear terms in treaties prevent rivers of blood in the future.',
          source: 'Dharmakshetra Multiverse Chronicles'
        }
      }
    ]
  },

  {
    id: 'island-8',
    number: 8,
    title: "Shadow in Matsya",
    era: "Virata Parva",
    location: "Royal Palace of Matsya",
    backgroundKey: "matsya",
    bgUrl: ASSETS.scenes.matsya,
    characterKey: "draupadi",
    characterUrl: ASSETS.characters.draupadi,
    speakerName: "DRAUPADI (SAIRANDHRI)",
    speakerTag: "MAIDSERVANT IN DISGUISE",
    summary: "During the 13th year incognito, commander Kichaka molests Draupadi (disguised as maidservant Sairandhri). Exposing identity means 13 more years of exile.",
    prelude: "Moonlight dances across the wooden pillars of King Virata’s palace. Draupadi weeping in secret meets Bhima (disguised as palace cook Vallabha) in the dark kitchen.",
    dialogue: "Bhima! Kichaka has insulted me in the open court and King Virata did nothing! If you do not slay him tonight, I shall drink poison before sunrise!",
    choices: [
      {
        id: 'c8-canon',
        type: 'CANON',
        label: 'Bhima Slays Kichaka secretly at Night in Dance Hall',
        badge: '[ORIGINAL ITIHASA]',
        borderColor: 'border-amber-400 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.5)]',
        dilemma: 'Bhima lures Kichaka to the dark dance hall at midnight and crushes him into a meat ball.',
        divergence: 0,
        outcomeHeadline: 'WHAT IF... Bhima Slew Kichaka secretly at Night?',
        narrativeRecap: 'Kichaka is eliminated without revealing the Pandavas’ true identities. Suspecting Bhima’s hand, the Kauravas invade Matsya, leading to Arjuna revealing himself on the final day.',
        philosophicalAnalysis: 'Covert justice protects sacred vows while eliminating unbearable oppression.',
        quote: {
          text: 'The night covers the fist that strikes down the wicked.',
          source: 'Mahabharata, Virata Parva'
        }
      },
      {
        id: 'c8-subversive',
        type: 'SUBVERSIVE',
        label: 'Endure in Silence until 13th Year Ends',
        badge: '[SUBVERSIVE PATH]',
        borderColor: 'border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.5)]',
        dilemma: 'Draupadi endures Kichaka’s insults for 3 more weeks until the incognito period officially completes.',
        divergence: 40,
        outcomeHeadline: 'WHAT IF... Draupadi Endured Kichaka in Silence?',
        narrativeRecap: 'The 13th year completes without any Kaurava suspicion! The Pandavas reveal themselves in power, but Draupadi carries deep emotional trauma over unpunished abuse.',
        philosophicalAnalysis: 'Sacrificing personal dignity for tactical timelines leaves unhealable emotional wounds.',
        quote: {
          text: 'Silence under insult is a heavy burden that darkens the soul.',
          source: 'Dharmakshetra Multiverse Chronicles'
        }
      },
      {
        id: 'c8-radical',
        type: 'RADICAL',
        label: 'Public Trial of Kichaka by King Virata',
        badge: '[RADICAL PATH]',
        borderColor: 'border-rose-500 text-rose-300 shadow-[0_0_15px_rgba(225,29,72,0.5)]',
        dilemma: 'Yudhishthira reveals their true Pandava identities to King Virata and demands a formal royal trial.',
        divergence: 75,
        outcomeHeadline: 'WHAT IF... Yudhishthira Revealed Identities for Kichaka’s Trial?',
        narrativeRecap: 'King Virata executes Kichaka and forms an immediate marriage alliance between Abhimanyu and Princess Uttara. Duryodhana claims the 13th year was broken, triggering immediate war.',
        philosophicalAnalysis: 'Standing up for human rights in public court forces hypocritical systems into open conflict.',
        quote: {
          text: 'Truth spoken in royal courts shatters disguises and exposes tyrants.',
          source: 'Dharmakshetra Multiverse Chronicles'
        }
      }
    ]
  },

  {
    id: 'island-9',
    number: 9,
    title: "Chamber of the God",
    era: "Udyoga Parva",
    location: "Palace of Dwarka",
    backgroundKey: "dwarka",
    bgUrl: ASSETS.scenes.dwarka,
    characterKey: "krishna",
    characterUrl: ASSETS.characters.krishna,
    speakerName: "LORD KRISHNA",
    speakerTag: "THE DIVINE STRATEGIST",
    summary: "Before the war, both Arjuna and Duryodhana arrive in Dwarka to seek Krishna’s alliance. Duryodhana sits at Krishna’s head; Arjuna stands at His feet.",
    prelude: "Lord Krishna feigns sleep on His silk canopy. As His eyes open, He sees Arjuna first at His feet, then Duryodhana at His head. Both demand His support.",
    dialogue: "Welcome, Arjuna and Duryodhana! I have two things to offer: On one side stands my invincible Narayani Army of ten million warriors; on the other stands I alone, unarmed and promising not to fight. Choose!",
    choices: [
      {
        id: 'c9-canon',
        type: 'CANON',
        label: 'Arjuna Chooses Unarmed Krishna',
        badge: '[ORIGINAL ITIHASA]',
        borderColor: 'border-amber-400 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.5)]',
        dilemma: 'Arjuna chooses Krishna as his charioteer; Duryodhana joyfully takes the ten million Narayani warriors.',
        divergence: 0,
        outcomeHeadline: 'WHAT IF... Arjuna Chose Unarmed Lord Krishna?',
        narrativeRecap: 'Duryodhana gets a massive army, but Arjuna gets the divine guide whose wisdom reveals the Bhagavad Gita and guides the Pandavas to ultimate victory.',
        philosophicalAnalysis: 'Divine wisdom and moral clarity outweigh millions of armed soldiers.',
        quote: {
          text: 'Where there is Krishna, there is righteousness; where there is righteousness, there is victory.',
          source: 'Mahabharata, Udyoga Parva'
        }
      },
      {
        id: 'c9-subversive',
        type: 'SUBVERSIVE',
        label: 'Arjuna Chooses the Narayani Army Instead',
        badge: '[SUBVERSIVE PATH]',
        borderColor: 'border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.5)]',
        dilemma: 'Arjuna chooses the ten million Narayani warriors to bolster Pandava troop counts.',
        divergence: 50,
        outcomeHeadline: 'WHAT IF... Arjuna Chose the Narayani Army Instead of Krishna?',
        narrativeRecap: 'The Pandavas gain massive military power, but without Krishna as charioteer, Arjuna succumbs to despair on Day 1 of Kurukshetra without the Bhagavad Gita guidance.',
        philosophicalAnalysis: 'Raw physical force without spiritual guidance collapses under moral crisis.',
        quote: {
          text: 'An army without vision is a giant blinded in the storm.',
          source: 'Dharmakshetra Multiverse Chronicles'
        }
      },
      {
        id: 'c9-radical',
        type: 'RADICAL',
        label: 'Duryodhana Demands Krishna as Charioteer',
        badge: '[RADICAL PATH]',
        borderColor: 'border-rose-500 text-rose-300 shadow-[0_0_15px_rgba(225,29,72,0.5)]',
        dilemma: 'Duryodhana speaks first and demands Krishna personally serve as his royal charioteer.',
        divergence: 90,
        outcomeHeadline: 'WHAT IF... Duryodhana Took Krishna as His Charioteer?',
        narrativeRecap: 'Krishna drives Duryodhana’s chariot! Throughout the war, Krishna continuously advises Duryodhana on Dharma, gradually converting Duryodhana into a peaceful monarch who surrenders.',
        philosophicalAnalysis: 'Divine presence in the company of the wicked gradually transforms Adharma into light.',
        quote: {
          text: 'The touch of the Divine converts even iron hearts into golden vessels.',
          source: 'Dharmakshetra Multiverse Chronicles'
        }
      }
    ]
  },

  {
    id: 'island-10',
    number: 10,
    title: "The Fallen Guru",
    era: "Drona Parva",
    location: "Kurukshetra Battlefield, Day 15",
    backgroundKey: "kurukshetra",
    bgUrl: ASSETS.scenes.kurukshetra,
    characterKey: "drona",
    characterUrl: ASSETS.characters.drona,
    speakerName: "GURU DRONA",
    speakerTag: "COMMANDER OF KAURAVA ARMY",
    summary: "On Day 15 of war, Guru Drona slays thousands with celestial astras. Krishna advises Yudhishthira to say 'Ashwatthama is dead' (referring to an elephant) to break Drona’s spirit.",
    prelude: "The battlefield is shrouded in smoke and flying arrows. Drona’s Brahmashira astra devastates the Pandava ranks. Only grief for his son Ashwatthama can make him drop his bow.",
    dialogue: "Yudhishthira! You speak only truth in this world! Tell me, is my beloved son Ashwatthama dead on this field?",
    choices: [
      {
        id: 'c10-canon',
        type: 'CANON',
        label: 'Speak Half-Truth ("Ashwatthama is dead... the elephant")',
        badge: '[ORIGINAL ITIHASA]',
        borderColor: 'border-amber-400 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.5)]',
        dilemma: 'Yudhishthira utters the lie. Drona discards his bow in grief and is beheaded by Dhrishtadyumna.',
        divergence: 0,
        outcomeHeadline: 'WHAT IF... Yudhishthira Spoke the Half-Truth about Ashwatthama?',
        narrativeRecap: 'Drona drops his weapons and enters meditation. Dhrishtadyumna slays him. Yudhishthira’s chariot, which floated 4 fingers above ground for 40 years, touches the earthly dirt forever.',
        philosophicalAnalysis: 'Tragic utilitarian necessity in war leaves indelible moral stains on victory.',
        quote: {
          text: 'Speech that saves righteousness from destruction carries heavy karmic weight.',
          source: 'Mahabharata, Drona Parva'
        }
      },
      {
        id: 'c10-subversive',
        type: 'SUBVERSIVE',
        label: 'Speak Absolute Truth ("The Elephant is dead, your Son lives")',
        badge: '[SUBVERSIVE PATH]',
        borderColor: 'border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.5)]',
        dilemma: 'Yudhishthira refuses to lie and declares clearly that only the elephant Ashwatthama died.',
        divergence: 60,
        outcomeHeadline: 'WHAT IF... Yudhishthira Refused to Lie to Guru Drona?',
        narrativeRecap: 'Inspired by Yudhishthira’s unbending truth, Drona realizes the evil of fighting for Duryodhana’s greed and voluntarily surrenders his weapons to Krishna peacefully.',
        philosophicalAnalysis: 'Unbending truth can awaken divine conscience in even the fiercest opponent.',
        quote: {
          text: 'Truth is higher than victory; upon truth the cosmos is sustained.',
          source: 'Dharmakshetra Multiverse Chronicles'
        }
      },
      {
        id: 'c10-radical',
        type: 'RADICAL',
        label: 'Bhima Slays the Real Ashwatthama in Battle',
        badge: '[RADICAL PATH]',
        borderColor: 'border-rose-500 text-rose-300 shadow-[0_0_15px_rgba(225,29,72,0.5)]',
        dilemma: 'Bhima slays the actual warrior Ashwatthama in single combat, making the news devastatingly true.',
        divergence: 95,
        outcomeHeadline: 'WHAT IF... Bhima Slew the Real Ashwatthama?',
        narrativeRecap: 'Ashwatthama is slain! Drona goes into a cataclysmic rage, unleashing the Narayanastra and destroying half the Pandava army before Krishna pacifies the universe.',
        philosophicalAnalysis: 'Unbridled grief in divine masters unleashes cosmic destruction.',
        quote: {
          text: 'When a guru’s heart breaks, the heavens weep fire upon the earth.',
          source: 'Dharmakshetra Multiverse Chronicles'
        }
      }
    ]
  }
];
