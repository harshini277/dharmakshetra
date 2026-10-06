import type { Island } from '../types';

export const ISLANDS_DATA: Island[] = [
  {
    id: 'island-1',
    number: 1,
    title: 'The Dice of Hastinapura',
    subtitle: 'Sabha Parva • The Royal Gambling Hall',
    era: 'Sabha Parva',
    location: 'Imperial Assembly, Hastinapura',
    atmosphere: 'ink',
    summary: 'King Yudhishthira is challenged to a game of loaded dice by Shakuni. Crown, kingdom, brothers, and Draupadi hang on the roll.',
    prelude: 'The royal assembly hall of Hastinapura gleams under golden lamps, but an air of treacherous silence reigns. Shakuni holds the loaded ivory dice. King Yudhishthira, bound by kshatriya honor never to refuse a challenge, steps to the board. Duryodhana smiles in dark anticipation.',
    initialSceneId: 'scene-1-1',
    heroCharacter: {
      id: 'yudhishthira',
      name: 'Yudhishthira',
      title: 'King of Dharma',
      allegiance: 'Pandava',
      keyTrait: 'Unwavering Duty & Gambling Vow',
      avatarSvgKey: 'yudhishthira',
      description: 'Eldest Pandava known for absolute devotion to truth, yet vulnerable to the protocol of royal challenges.',
      quote: 'A king cannot turn his back when called to the sacred board of honor.'
    },
    opponentCharacter: {
      id: 'shakuni',
      name: 'Shakuni',
      title: 'King of Gandhara',
      allegiance: 'Kaurava',
      keyTrait: 'Devious Illusion & Loaded Dice',
      avatarSvgKey: 'shakuni',
      description: 'Master manipulator whose bone dice bend to his will, seeking vengeance against the Kuru house.',
      quote: 'Roll the dice, Yudhishthira. Fate favors those who dare to stake all.'
    },
    scenes: {
      'scene-1-1': {
        id: 'scene-1-1',
        title: 'The Opening Stake',
        speaker: 'Shakuni',
        speakerRole: 'Master of Dice',
        speakerAvatarSvgKey: 'shakuni',
        vignetteType: 'gambling_hall',
        narrative: 'Shakuni rattles the ivory dice in his withered palm. "You have lost your pearls, your chariots, and your kingdom of Indraprastha, O King! But you still possess your brothers and yourself. Will you stake your brother Nakula on the next throw, or forfeit your dignity?"',
        choices: [
          {
            id: 'choice-1-1-a',
            label: 'Stake Nakula and continue the game',
            philosophicalDilemma: 'Comply with imperial challenge protocols, gambling brotherly freedom for honor.',
            consequencePreview: 'Deepens the downward spiral into total loss, adhering to canonical tragic path.',
            nextSceneId: 'scene-1-2',
            deltaDharma: -15,
            deltaKarma: -10,
            deltaKismet: 20,
            divergenceImpact: 0,
            soundFx: 'gong',
            vfxEffect: 'shake',
            alignmentTag: 'Swadharma (Duty)'
          },
          {
            id: 'choice-1-1-b',
            label: 'Halt the game, declaring the dice tampered with',
            philosophicalDilemma: 'Break protocol to denounce Shakuni, risking immediate royal dishonor but preserving kingdom.',
            consequencePreview: 'Fractures the court dynamics; Duryodhana will threaten open war on the spot.',
            nextSceneId: 'scene-1-alt-court',
            deltaDharma: 10,
            deltaKarma: 15,
            deltaKismet: -15,
            divergenceImpact: 45,
            soundFx: 'bell',
            vfxEffect: 'divine_flash',
            alignmentTag: 'Nyaya (Utilitarian Justice)'
          },
          {
            id: 'choice-1-1-c',
            label: 'Invoke Divine Arbitration before King Dhritarashtra',
            philosophicalDilemma: 'Appeal to the elders to nullify the wager under sacred laws of fraud.',
            consequencePreview: 'Shifts authority to Bhishma and Vidura, stalling the gambling match.',
            nextSceneId: 'scene-1-appeal',
            deltaDharma: 15,
            deltaKarma: 5,
            deltaKismet: -10,
            divergenceImpact: 30,
            soundFx: 'divine',
            vfxEffect: 'none',
            alignmentTag: 'Satya (Absolute Truth)'
          }
        ]
      },
      'scene-1-2': {
        id: 'scene-1-2',
        title: 'The Ultimate Precipice',
        speaker: 'Duryodhana',
        speakerRole: 'Crown Prince of Hastinapura',
        speakerAvatarSvgKey: 'duryodhana',
        vignetteType: 'gambling_hall',
        narrative: 'Your brothers stand bound as slaves. You have staked yourself and lost! Duryodhana laughs, his voice echoing off the stone walls. "One stake remains, Yudhishthira! Stake Draupadi, Empress of Indraprastha, and win back your freedom in a single throw!"',
        choices: [
          {
            id: 'choice-1-2-a',
            label: 'Stake Draupadi on the final throw (Canonical Path)',
            philosophicalDilemma: 'Yielding to despair and gambler’s fallacy, treating human dignity as collateral.',
            consequencePreview: 'Leads to the humiliation of Draupadi and 13 years of forest exile.',
            endingId: 'ending-1-canonical',
            deltaDharma: -25,
            deltaKarma: -25,
            deltaKismet: 30,
            divergenceImpact: 0,
            soundFx: 'thunder',
            vfxEffect: 'red_vignette',
            alignmentTag: 'Adharma (Selfish Gain)'
          },
          {
            id: 'choice-1-2-b',
            label: 'Refuse to stake Draupadi and accept lifelong servitude',
            philosophicalDilemma: 'Choose personal humiliation over violating the dignity of the Empress.',
            consequencePreview: 'Preserves Draupadi’s honor; Pandavas become royal captives, altering the war timeline.',
            endingId: 'ending-1-servitude',
            deltaDharma: 20,
            deltaKarma: 15,
            deltaKismet: -20,
            divergenceImpact: 60,
            soundFx: 'bell',
            vfxEffect: 'divine_flash',
            alignmentTag: 'Swadharma (Duty)'
          }
        ]
      },
      'scene-1-alt-court': {
        id: 'scene-1-alt-court',
        title: 'The Fractured Assembly',
        speaker: 'Bheema',
        speakerRole: 'Pandava Warrior of Mighty Arms',
        speakerAvatarSvgKey: 'yudhishthira',
        vignetteType: 'gambling_hall',
        narrative: 'Bheema’s hands flex around his imaginary mace as you accuse Shakuni of deceit! Dhritarashtra trembles on his throne. Bhishma steps forward, raising his golden staff to halt the game before catastrophe strikes.',
        choices: [
          {
            id: 'choice-1-alt-a',
            label: 'Demand immediate court trial of Shakuni',
            philosophicalDilemma: 'Enforce judicial accountability within Kuru law.',
            consequencePreview: 'Exposes Shakuni; Duryodhana flees to plan a surprise army assault.',
            endingId: 'ending-1-truce',
            deltaDharma: 20,
            deltaKarma: 20,
            deltaKismet: -25,
            divergenceImpact: 80,
            soundFx: 'divine',
            vfxEffect: 'divine_flash',
            alignmentTag: 'Nyaya (Utilitarian Justice)'
          }
        ]
      },
      'scene-1-appeal': {
        id: 'scene-1-appeal',
        title: 'The Judgment of Pitamaha',
        speaker: 'Bhishma',
        speakerRole: 'Grand Patriarch',
        speakerAvatarSvgKey: 'bhishma',
        vignetteType: 'vow_of_bhishma',
        narrative: 'Bhishma declares: "Gambling driven by malice is no sacred Kshatriya duty! King Dhritarashtra, void these wagers before the Kuru dynasty is consumed in divine flame!"',
        choices: [
          {
            id: 'choice-1-app-a',
            label: 'Accept Bhishma’s voiding of the wagers and withdraw',
            philosophicalDilemma: 'Submit to patriarchal wisdom to avoid civil war.',
            consequencePreview: 'Indraprastha is restored, but hatred smolders for a future conflict.',
            endingId: 'ending-1-truce',
            deltaDharma: 25,
            deltaKarma: 10,
            deltaKismet: -30,
            divergenceImpact: 75,
            soundFx: 'bell',
            vfxEffect: 'none',
            alignmentTag: 'Satya (Absolute Truth)'
          }
        ]
      }
    },
    endings: {
      'ending-1-canonical': {
        id: 'ending-1-canonical',
        title: 'Exile to the Wilds & The Vow of Fire',
        subtitle: 'Canonical Mahabharata Timeline (0% Divergence)',
        isCanonical: true,
        divergencePercentage: 0,
        moralTitle: 'The Sovereign of Sorrow',
        description: 'Draupadi is insulted in the assembly, raising her sacred prayer to Krishna. Dhritarashtra grants two boons, releasing the Pandavas from slavery, but a second dice roll seals 12 years of forest exile and 1 year incognito.',
        epilogueText: 'The seeds of Kurukshetra are deeply planted in the fertile soil of humiliated pride and unyielding vows.',
        philosophicalAnalysis: 'Strict adherence to royal etiquette (Kshatriya Dharma) without moral discernment leads to absolute tragedy.',
        quote: {
          text: 'When Dharma is ruined by those who claim to protect it, disaster becomes the only teacher.',
          source: 'Mahabharata, Sabha Parva'
        }
      },
      'ending-1-servitude': {
        id: 'ending-1-servitude',
        title: 'The Bound Sovereigns',
        subtitle: 'Fractured Fate Timeline (60% Divergence)',
        isCanonical: false,
        divergencePercentage: 60,
        moralTitle: 'Guardian of Sacred Dignity',
        description: 'Yudhishthira refuses to gamble Draupadi. The five Pandavas accept captive servitude in Hastinapura. Draupadi remains free in Indraprastha and rallies neighboring kingdoms to march upon Hastinapura.',
        epilogueText: 'A premature war erupts 13 years early without Krishna’s full war council prepared.',
        philosophicalAnalysis: 'Protecting individual human dignity over ritual obligation shifts the nature of conflict from destiny to raw political war.',
        quote: {
          text: 'No vow is sacred if it requires the dishonor of the innocent.',
          source: 'Dharmakshetra Alternative Codex'
        }
      },
      'ending-1-truce': {
        id: 'ending-1-truce',
        title: 'The Bloodless Partition of Indraprastha',
        subtitle: 'Fractured Fate Timeline (80% Divergence)',
        isCanonical: false,
        divergencePercentage: 80,
        moralTitle: 'Architect of Cold Peace',
        description: 'Bhishma and Vidura void the gambling match. Shakuni is banished from Hastinapura. Indraprastha and Hastinapura establish a fortified border under an armed cold war.',
        epilogueText: 'The Great War of Kurukshetra is averted in this generation, but the rivalry simmers beneath golden crowns.',
        philosophicalAnalysis: 'Moral courage by elders and refusal to comply with rigged systems can break fatalistic cycles of destruction.',
        quote: {
          text: 'Peace preserved by righteousness shines brighter than victory bought with blood.',
          source: 'Subhashita'
        }
      }
    }
  },

  {
    id: 'island-2',
    number: 2,
    title: 'The Kurukshetra Threshold',
    subtitle: 'Bhagavad Gita • Arjuna’s Despair',
    era: 'Bhishma Parva',
    location: 'Field of Kurukshetra, Between Two Armies',
    atmosphere: 'divine',
    summary: 'Arjuna lowers his bow Gandiva in deep moral anguish, refusing to slay kinsmen, teachers, and brothers for a blood-soaked throne.',
    prelude: 'The conch shells blow across Kurukshetra. Two millions of warriors stand arrayed in golden chariots. Arjuna orders Krishna to drive his chariot between the two armies. Looking at his grandfather Bhishma and guru Drona, his limbs tremble and his bow slips from his hand.',
    initialSceneId: 'scene-2-1',
    heroCharacter: {
      id: 'arjuna',
      name: 'Arjuna',
      title: 'Peerless Archer',
      allegiance: 'Pandava',
      keyTrait: 'Moral Agony & Supreme Skill',
      avatarSvgKey: 'arjuna',
      description: 'The greatest archer of Aryavarta, caught in an existential crisis between familial love and warrior duty.',
      quote: 'How can I shoot arrows at grandsire Bhishma and master Drona? Better to eat an ascetic’s bread in the forest!'
    },
    opponentCharacter: {
      id: 'krishna',
      name: 'Lord Krishna',
      title: 'The Divine Guide',
      allegiance: 'Divine',
      keyTrait: 'Cosmic Wisdom & Supreme Consciousness',
      avatarSvgKey: 'krishna',
      description: 'Avatar of Vishnu serving as Arjuna’s charioteer, revealing the timeless philosophy of duty and action without attachment.',
      quote: 'You grieve for those who need no grief. Yield not to unmanliness, O Partha!'
    },
    scenes: {
      'scene-2-1': {
        id: 'scene-2-1',
        title: 'The Dropping of Gandiva',
        speaker: 'Arjuna',
        speakerRole: 'Pandava Champion',
        speakerAvatarSvgKey: 'arjuna',
        vignetteType: 'kurukshetra',
        narrative: 'Arjuna sinks to the floor of his chariot. "Krishna! My mouth is dry, my body trembles! Even if they kill me, I do not wish to slay them for the sovereignty of three worlds. What joy can there be in destroying our own lineage?"',
        choices: [
          {
            id: 'choice-2-1-a',
            label: 'Surrender to Krishna’s teachings & embrace Nishkama Karma (Canonical)',
            philosophicalDilemma: 'Perform selfless warrior duty (Swadharma) regardless of personal sorrow or outcome.',
            consequencePreview: 'Arjuna raises Gandiva, unleashing the Great War for cosmic balance.',
            endingId: 'ending-2-canonical',
            deltaDharma: 25,
            deltaKarma: 20,
            deltaKismet: 30,
            divergenceImpact: 0,
            soundFx: 'divine',
            vfxEffect: 'divine_flash',
            alignmentTag: 'Swadharma (Duty)'
          },
          {
            id: 'choice-2-1-b',
            label: 'Renounce the battle permanently and walk into forest exile',
            philosophicalDilemma: 'Choose absolute non-violence (Ahimsa) over righteous war.',
            consequencePreview: 'Arjuna drops weapons and walks away; Pandava army loses its master warrior.',
            nextSceneId: 'scene-2-renounce',
            deltaDharma: -10,
            deltaKarma: 25,
            deltaKismet: -25,
            divergenceImpact: 70,
            soundFx: 'gong',
            vfxEffect: 'shake',
            alignmentTag: 'Moksha (Renunciation)'
          },
          {
            id: 'choice-2-1-c',
            label: 'Demand Krishna reveal the Vishvarupa (Cosmic Form) immediately',
            philosophicalDilemma: 'Seek direct divine revelation before acting.',
            consequencePreview: 'Unveils cosmic infinity, overwhelming human mortal comprehension.',
            nextSceneId: 'scene-2-cosmic',
            deltaDharma: 15,
            deltaKarma: 10,
            deltaKismet: 10,
            divergenceImpact: 35,
            soundFx: 'thunder',
            vfxEffect: 'divine_flash',
            alignmentTag: 'Satya (Absolute Truth)'
          }
        ]
      },
      'scene-2-renounce': {
        id: 'scene-2-renounce',
        title: 'The Lone Wandering Monk',
        speaker: 'Lord Krishna',
        speakerRole: 'Divine Charioteer',
        speakerAvatarSvgKey: 'krishna',
        vignetteType: 'kurukshetra',
        narrative: 'Krishna gazes at Arjuna with profound compassion and grave seriousness. "If you do not fight this righteous war, you will abandon your duty and honor, incurring sin. Yet the soul is eternal; none can slay it."',
        choices: [
          {
            id: 'choice-2-ren-a',
            label: 'Persist in renunciation despite Krishna’s warning',
            philosophicalDilemma: 'Prioritize personal pacifism over cosmic order.',
            consequencePreview: 'Kauravas conquer Aryavarta under Duryodhana’s tyrannical rule.',
            endingId: 'ending-2-pacifist',
            deltaDharma: -20,
            deltaKarma: 15,
            deltaKismet: -40,
            divergenceImpact: 90,
            soundFx: 'gong',
            vfxEffect: 'none',
            alignmentTag: 'Moksha (Renunciation)'
          }
        ]
      },
      'scene-2-cosmic': {
        id: 'scene-2-cosmic',
        title: 'The Revelation of Time',
        speaker: 'Lord Krishna',
        speakerRole: 'Cosmic Form (Vishvarupa)',
        speakerAvatarSvgKey: 'krishna',
        vignetteType: 'kurukshetra',
        narrative: 'Krishna opens His cosmic form: thousands of suns blazing, worlds entering His fiery mouths! "I am Time, the destroyer of worlds, fully engaged in destroying these men. Even without you, all these warriors shall cease to exist!"',
        choices: [
          {
            id: 'choice-2-cos-a',
            label: 'Bow in total surrender and take up Gandiva',
            philosophicalDilemma: 'Align mortal human will with divine cosmic necessity.',
            consequencePreview: 'Arjuna becomes the instrument of cosmic destiny.',
            endingId: 'ending-2-canonical',
            deltaDharma: 30,
            deltaKarma: 25,
            deltaKismet: 20,
            divergenceImpact: 0,
            soundFx: 'divine',
            vfxEffect: 'divine_flash',
            alignmentTag: 'Swadharma (Duty)'
          }
        ]
      }
    },
    endings: {
      'ending-2-canonical': {
        id: 'ending-2-canonical',
        title: 'The Eternal Warrior of Dharma',
        subtitle: 'Canonical Bhagavad Gita Outcome (0% Divergence)',
        isCanonical: true,
        divergencePercentage: 0,
        moralTitle: 'Instrument of Cosmic Will',
        description: 'Arjuna comprehends the eternal nature of the Atman and the imperative of Swadharma. He lifts Gandiva, blowing the Devadatta conch, embarking on the 18-day war for righteousness.',
        epilogueText: 'The Bhagavad Gita is birthed upon the battlefield, providing eternal philosophical illumination for humanity.',
        philosophicalAnalysis: 'Duty performed without attachment to personal fruits frees the soul from karmic bondage.',
        quote: {
          text: 'You have a right to perform your prescribed duty, but never to the fruits of action.',
          source: 'Bhagavad Gita 2.47'
        }
      },
      'ending-2-pacifist': {
        id: 'ending-2-pacifist',
        title: 'The Fallen Bow & Dark Yuga',
        subtitle: 'Fractured Fate Timeline (90% Divergence)',
        isCanonical: false,
        divergencePercentage: 90,
        moralTitle: 'The Wandering Ascetic of Sorrows',
        description: 'Arjuna leaves Kurukshetra as a wandering monk. Without Arjuna, the Pandava army suffers defeat against Bhishma and Karna. Duryodhana consolidates absolute reign over Aryavarta.',
        epilogueText: 'Peace is maintained through tyranny, but Adharma deepens its roots across the earth.',
        philosophicalAnalysis: 'Abandoning righteous action in the face of tyranny allows unrighteousness to govern unchecked.',
        quote: {
          text: 'When the brave refuse their duty out of sorrow, darkness claims the kingdom.',
          source: 'Dharmakshetra Alternative Codex'
        }
      }
    }
  },

  {
    id: 'island-3',
    number: 3,
    title: 'The Vow of Bhishma',
    subtitle: 'Adi Parva • The Oath of Celibacy & Throne',
    era: 'Adi Parva',
    location: 'Royal Court of Hastinapura',
    atmosphere: 'divine',
    summary: 'Prince Devavrata takes an unmatched vow of life-long celibacy and throne renunciation to fulfill his father Shantanu’s desire to marry Satyavati.',
    prelude: 'King Shantanu pines in sorrow for the fisherman’s daughter Satyavati. Her father demands that only Satyavati’s offspring shall inherit the crown of Hastinapura. Crown Prince Devavrata, righteous and beloved, learns of his father’s grief and steps before the heavens.',
    initialSceneId: 'scene-3-1',
    heroCharacter: {
      id: 'bhishma-young',
      name: 'Prince Devavrata',
      title: 'He of the Terrifying Vow',
      allegiance: 'Neutral',
      keyTrait: 'Absolute Filial Sacrifice',
      avatarSvgKey: 'bhishma',
      description: 'The invincible son of Ganga who sacrificed personal joy and lineage for his father’s immediate happiness.',
      quote: 'I shall renounce the throne and vow eternal celibacy, so no son of mine shall ever challenge Satyavati’s blood!'
    },
    opponentCharacter: {
      id: 'satyavati-father',
      name: 'Dasaraja',
      title: 'Chief of Fishermen',
      allegiance: 'Neutral',
      keyTrait: 'Uncompromising Ambition for Bloodline',
      avatarSvgKey: 'yudhishthira',
      description: 'Father of Satyavati who refused to yield unless his daughter’s children guaranteed the royal succession.',
      quote: 'Devavrata is great, but who can guarantee his future sons will not seize the crown?'
    },
    scenes: {
      'scene-3-1': {
        id: 'scene-3-1',
        title: 'The Sacrifice at the River',
        speaker: 'Prince Devavrata',
        speakerRole: 'Crown Prince of Hastinapura',
        speakerAvatarSvgKey: 'bhishma',
        vignetteType: 'vow_of_bhishma',
        narrative: 'Devavrata stands before Dasaraja and the ministers. Gods gather in the clouds to witness. "If the throne is the obstacle to my father’s happiness, I renounce it now! And to ensure my future sons do not claim it..."',
        choices: [
          {
            id: 'choice-3-1-a',
            label: 'Swear the Bhishma Pratigya (Lifelong Celibacy & Throne Defense) [Canonical]',
            philosophicalDilemma: 'Sacrifice all personal rights and future family to fulfill filial devotion.',
            consequencePreview: 'Gods shower flowers, naming him Bhishma ("He of the Terrifying Vow").',
            endingId: 'ending-3-canonical',
            deltaDharma: 20,
            deltaKarma: -10,
            deltaKismet: 40,
            divergenceImpact: 0,
            soundFx: 'thunder',
            vfxEffect: 'divine_flash',
            alignmentTag: 'Swadharma (Duty)'
          },
          {
            id: 'choice-3-1-b',
            label: 'Refuse the extreme vow and propose a Dual Regency council',
            philosophicalDilemma: 'Reject extreme self-abnegation to protect the long-term political stability of the realm.',
            consequencePreview: 'Devavrata remains Crown Prince; Shantanu remains heartbroken but Hastinapura gets a strong leader.',
            nextSceneId: 'scene-3-regency',
            deltaDharma: 10,
            deltaKarma: 20,
            deltaKismet: -30,
            divergenceImpact: 75,
            soundFx: 'bell',
            vfxEffect: 'none',
            alignmentTag: 'Nyaya (Utilitarian Justice)'
          }
        ]
      },
      'scene-3-regency': {
        id: 'scene-3-regency',
        title: 'The Crown of Devavrata',
        speaker: 'Prince Devavrata',
        speakerRole: 'Rightful Regent',
        speakerAvatarSvgKey: 'bhishma',
        vignetteType: 'vow_of_bhishma',
        narrative: 'Devavrata addresses his father: "My Lord! A king’s primary duty is to the kingdom’s stability, not personal grief. I shall govern Hastinapura with justice and marry for the kingdom’s future."',
        choices: [
          {
            id: 'choice-3-reg-a',
            label: 'Ascend the throne as King Devavrata',
            philosophicalDilemma: 'Choose wise rule over self-sacrificial romantic sentiment.',
            consequencePreview: 'Hastinapura enters a golden age of direct righteous rule; Kuru split never occurs.',
            endingId: 'ending-3-sovereign',
            deltaDharma: 30,
            deltaKarma: 25,
            deltaKismet: -50,
            divergenceImpact: 85,
            soundFx: 'divine',
            vfxEffect: 'divine_flash',
            alignmentTag: 'Nyaya (Utilitarian Justice)'
          }
        ]
      }
    },
    endings: {
      'ending-3-canonical': {
        id: 'ending-3-canonical',
        title: 'The Eternal Vow & The Shackled Patriarch',
        subtitle: 'Canonical Mahabharata Outcome (0% Divergence)',
        isCanonical: true,
        divergencePercentage: 0,
        moralTitle: 'The Guardian Bound to a Throne',
        description: 'Devavrata becomes Bhishma. Granted the boon of Iccha-Mrityu (death at will) by his father, he lives for decades bound to protect the throne of Hastinapura, even when Adharma sits upon it in the form of Duryodhana.',
        epilogueText: 'His noble vow becomes a golden cage, forcing him to fight against his beloved Pandavas in Kurukshetra.',
        philosophicalAnalysis: 'An absolute oath made without flexibility can force even the most righteous soul to protect tyranny.',
        quote: {
          text: 'Vows are made to uphold Dharma; when vows bind one to protect Adharma, they become tragic chains.',
          source: 'Mahabharata, Shanti Parva'
        }
      },
      'ending-3-sovereign': {
        id: 'ending-3-sovereign',
        title: 'The Golden Age of King Devavrata',
        subtitle: 'Fractured Fate Timeline (85% Divergence)',
        isCanonical: false,
        divergencePercentage: 85,
        moralTitle: 'The Unbending Monarch of Righteousness',
        description: 'Devavrata ascends the throne. Dhritarashtra and Pandu are born into a stable, flourishing empire. Dhritarashtra never gains imperial power; Duryodhana’s toxicity is contained early.',
        epilogueText: 'The Kurukshetra war is erased from history. Aryavarta flourishes in unprecedented peace.',
        philosophicalAnalysis: 'Prioritizing systemic governance and pragmatic justice over extreme personal martyrdom creates collective prosperity.',
        quote: {
          text: 'A king’s true sacrifice is to rule with wisdom, not to abandon responsibility for sentiment.',
          source: 'Dharmakshetra Alternative Codex'
        }
      }
    }
  },

  {
    id: 'island-4',
    number: 4,
    title: 'Karna’s Crucible',
    subtitle: 'Vana Parva • Armor, Armor, and Loyalty',
    era: 'Vana Parva',
    location: 'Banks of River Bhagirathi',
    atmosphere: 'embers',
    summary: 'Indra disguised as a Brahmin demands Karna’s divine golden armor (Kavacha) and earrings (Kundala). Later, Kunti reveals she is his birth mother.',
    prelude: 'At dawn, Karna completes his worship of the Sun God Surya. Known as Danaveera (The Supreme Giver), he has sworn never to refuse any Brahmin during his morning prayer. Indra, father of Arjuna, steps forward in rags to disarm Karna.',
    initialSceneId: 'scene-4-1',
    heroCharacter: {
      id: 'karna',
      name: 'Karna',
      title: 'Sun-Born Champion',
      allegiance: 'Kaurava',
      keyTrait: 'Unmatched Charity & Tragic Loyalty',
      avatarSvgKey: 'karna',
      description: 'Firstborn of Kunti born with golden divine armor, raised by a charioteer, whose life is a battle against social rejection and tragic fate.',
      quote: 'Even if my life skin is sliced away, Karna shall never break a promise made during sunrise prayer!'
    },
    opponentCharacter: {
      id: 'kunti',
      name: 'Queen Kunti',
      title: 'Mother of the Pandavas',
      allegiance: 'Pandava',
      keyTrait: 'Maternal Regret & Secret Guardian',
      avatarSvgKey: 'draupadi',
      description: 'Mother who abandoned newborn Karna in the river out of fear, returning on the eve of war to beg for her sons’ lives.',
      quote: 'You are no charioteer’s son, Karna! You are Kaunteya, the eldest Pandava!'
    },
    scenes: {
      'scene-4-1': {
        id: 'scene-4-1',
        title: 'The Gift of Skin and Gold',
        speaker: 'Karna',
        speakerRole: 'Son of Surya',
        speakerAvatarSvgKey: 'karna',
        vignetteType: 'karna_crucible',
        narrative: 'Surya had warned Karna in a dream: "Indra comes to strip your invulnerability!" Yet Indra in Brahmin robes demands: "Give me your divine armor grown upon your chest!" Karna unsheathes his dagger.',
        choices: [
          {
            id: 'choice-4-1-a',
            label: 'Slice off Kavacha-Kundala and give to Indra (Canonical)',
            philosophicalDilemma: 'Maintain ultimate vow of charity even when knowing it means mortal vulnerability.',
            consequencePreview: 'Indra grants the Vasavi Shakti dart in awe; Karna becomes mortal.',
            nextSceneId: 'scene-4-kunti',
            deltaDharma: 25,
            deltaKarma: 30,
            deltaKismet: 25,
            divergenceImpact: 0,
            soundFx: 'gong',
            vfxEffect: 'shake',
            alignmentTag: 'Satya (Absolute Truth)'
          },
          {
            id: 'choice-4-1-b',
            label: 'Expose Indra’s disguise and refuse the request',
            philosophicalDilemma: 'Prioritize self-preservation and fair warfare over deceptive charity requests.',
            consequencePreview: 'Karna retains invulnerability; Arjuna cannot pierce him with standard arrows.',
            nextSceneId: 'scene-4-invincible',
            deltaDharma: -10,
            deltaKarma: -15,
            deltaKismet: -30,
            divergenceImpact: 75,
            soundFx: 'thunder',
            vfxEffect: 'none',
            alignmentTag: 'Nyaya (Utilitarian Justice)'
          }
        ]
      },
      'scene-4-kunti': {
        id: 'scene-4-kunti',
        title: 'The Mother’s Plea',
        speaker: 'Queen Kunti',
        speakerRole: 'Mother of Pandavas',
        speakerAvatarSvgKey: 'draupadi',
        vignetteType: 'karna_crucible',
        narrative: 'Kunti approaches Karna on the riverbank: "My child! You are my firstborn son! Come to the Pandava camp. Yudhishthira will hold your feet, and you shall be Emperor of Aryavarta!"',
        choices: [
          {
            id: 'choice-4-kunti-a',
            label: 'Refuse the crown out of gratitude to Duryodhana, promising to spare 4 Pandavas (Canonical)',
            philosophicalDilemma: 'Choose gratitude and loyalty to the friend who stood by him in shame over blood kingdom.',
            consequencePreview: 'Karna pledges not to kill Yudhishthira, Bheema, Nakula, or Sahadeva.',
            endingId: 'ending-4-canonical',
            deltaDharma: 20,
            deltaKarma: 25,
            deltaKismet: 20,
            divergenceImpact: 0,
            soundFx: 'bell',
            vfxEffect: 'divine_flash',
            alignmentTag: 'Swadharma (Duty)'
          },
          {
            id: 'choice-4-kunti-b',
            label: 'Accept Kunti’s plea and defect to the Pandavas',
            philosophicalDilemma: 'Reunite bloodline to end the war without Kurukshetra bloodshed.',
            consequencePreview: 'Duryodhana loses his chief general; Pandavas gain Karna as eldest King.',
            endingId: 'ending-4-eldest-king',
            deltaDharma: 15,
            deltaKarma: 10,
            deltaKismet: -40,
            divergenceImpact: 85,
            soundFx: 'divine',
            vfxEffect: 'divine_flash',
            alignmentTag: 'Nyaya (Utilitarian Justice)'
          }
        ]
      },
      'scene-4-invincible': {
        id: 'scene-4-invincible',
        title: 'The Golden Sun Unbroken',
        speaker: 'Karna',
        speakerRole: 'Invincible General',
        speakerAvatarSvgKey: 'karna',
        vignetteType: 'karna_crucible',
        narrative: 'Karna keeps his Kavacha armor. On the 17th day of war, Arjuna’s arrows bounce harmlessly off Karna’s glowing chest.',
        choices: [
          {
            id: 'choice-4-inv-a',
            label: 'Slay Arjuna in single combat',
            philosophicalDilemma: 'Use divine invulnerability to achieve Kaurava victory.',
            consequencePreview: 'Kauravas win the war; Karna rules as military commander.',
            endingId: 'ending-4-kaurava-victory',
            deltaDharma: -15,
            deltaKarma: -20,
            deltaKismet: 50,
            divergenceImpact: 90,
            soundFx: 'thunder',
            vfxEffect: 'red_vignette',
            alignmentTag: 'Karmic Fate'
          }
        ]
      }
    },
    endings: {
      'ending-4-canonical': {
        id: 'ending-4-canonical',
        title: 'The Martyr of Unwavering Honor',
        subtitle: 'Canonical Mahabharata Outcome (0% Divergence)',
        isCanonical: true,
        divergencePercentage: 0,
        moralTitle: 'Sun of Generosity & Tragedy',
        description: 'Karna surrenders his armor and spares 4 Pandavas in battle. On the 17th day, his chariot wheel sinks into the mud, and Parashurama’s curse strips his memory of astras as Arjuna shoots.',
        epilogueText: 'Karna dies as the ultimate symbol of noble charity, tragic friendship, and unyielding dignity.',
        philosophicalAnalysis: 'Integrity and loyalty maintained in adversity yield immortal glory, even in physical defeat.',
        quote: {
          text: 'Misfortune may steal my kingdom and weapons, but it can never steal my character.',
          source: 'Mahabharata, Karna Parva'
        }
      },
      'ending-4-eldest-king': {
        id: 'ending-4-eldest-king',
        title: 'King Karna I of Aryavarta',
        subtitle: 'Fractured Fate Timeline (85% Divergence)',
        isCanonical: false,
        divergencePercentage: 85,
        moralTitle: 'The Reclaimed Eldest Son',
        description: 'Karna joins the Pandavas as eldest brother. Overawed by Karna’s armor and righteousness, Duryodhana surrenders without Kurukshetra. Karna ascends the throne of Hastinapura.',
        epilogueText: 'The charioteer’s foster son becomes the greatest Emperor of the Kuru dynasty.',
        philosophicalAnalysis: 'Reconciliation of abandoned ties and truth can heal generational curses before war erupts.',
        quote: {
          text: 'True nobility is not born of lineage, but forged in the fires of justice.',
          source: 'Dharmakshetra Alternative Codex'
        }
      },
      'ending-4-kaurava-victory': {
        id: 'ending-4-kaurava-victory',
        title: 'The Eclipse of the Pandavas',
        subtitle: 'Fractured Fate Timeline (90% Divergence)',
        isCanonical: false,
        divergencePercentage: 90,
        moralTitle: 'Invincible Champion of the Dark Throne',
        description: 'Retaining his armor, Karna slays Arjuna. The Pandava army collapses. Duryodhana rules, with Karna as the supreme protector of the realm.',
        epilogueText: 'A dark, militaristic era dawns across Aryavarta under golden armor.',
        philosophicalAnalysis: 'Unchecked military invulnerability combined with personal obligation can entrench tyrannical regimes.',
        quote: {
          text: 'When armor shields the warrior from fate, history is written by the sword alone.',
          source: 'Dharmakshetra Alternative Codex'
        }
      }
    }
  },

  {
    id: 'island-5',
    number: 5,
    title: 'The Burning of Lakshayagriha',
    subtitle: 'Adi Parva • The House of Lacquer',
    era: 'Adi Parva',
    location: 'Palace of Lacquer, Varanavata',
    atmosphere: 'embers',
    summary: 'Duryodhana builds a palace made of highly flammable lac, resin, and wax to burn the Pandavas and Kunti alive in their sleep.',
    prelude: 'The palace at Varanavata glimmers with beautiful paintings, but beneath the plaster lies solid lacquer, dry straw, and clarified butter. Vidura sends a secret miner who digs a subterranean tunnel beneath the palace. On a dark midnight, the assassin Purochana prepares the torch.',
    initialSceneId: 'scene-5-1',
    heroCharacter: {
      id: 'yudhishthira-young',
      name: 'Yudhishthira',
      title: 'Vigilant Prince',
      allegiance: 'Pandava',
      keyTrait: 'Strategic Patience',
      avatarSvgKey: 'yudhishthira',
      description: 'Warned by Vidura’s riddles, Yudhishthira must choose how to survive the assassination plot without alerting Duryodhana.',
      quote: 'He who understands the forest fire escapes before the trees catch flame.'
    },
    opponentCharacter: {
      id: 'purochana',
      name: 'Purochana',
      title: 'Architect of Assassination',
      allegiance: 'Kaurava',
      keyTrait: 'Treacherous Deceit',
      avatarSvgKey: 'duryodhana',
      description: 'Duryodhana’s agent tasked with locking the doors and setting the lac palace ablaze on the night of the festival.',
      quote: 'Sleep peacefully, Pandavas! Tonight your ashes shall mix with the resin walls!'
    },
    scenes: {
      'scene-5-1': {
        id: 'scene-5-1',
        title: 'Midnight in the Wax Palace',
        speaker: 'Yudhishthira',
        speakerRole: 'Eldest Prince',
        speakerAvatarSvgKey: 'yudhishthira',
        vignetteType: 'lakshayagriha',
        narrative: 'Bheema smells the melting pitch in the walls. The secret tunnel miner signals from beneath the floorboard: "The passage is clear to the Ganges bank!" Bheema holds a burning torch.',
        choices: [
          {
            id: 'choice-5-1-a',
            label: 'Light the house yourselves, trap Purochana, and escape down the tunnel (Canonical)',
            philosophicalDilemma: 'Preemptively burn the trap to feign death and buy time for underground strength.',
            consequencePreview: 'Duryodhana believes Pandavas are dead; Pandavas live incognito in Ekachakra.',
            endingId: 'ending-5-canonical',
            deltaDharma: 15,
            deltaKarma: 10,
            deltaKismet: 20,
            divergenceImpact: 0,
            soundFx: 'thunder',
            vfxEffect: 'shake',
            alignmentTag: 'Swadharma (Duty)'
          },
          {
            id: 'choice-5-1-b',
            label: 'Capture Purochana alive and march him to Hastinapura to expose Duryodhana',
            philosophicalDilemma: 'Expose treason publicly rather than hiding in the shadows.',
            consequencePreview: 'Forces King Dhritarashtra to publicly punish Duryodhana or face rebellion.',
            endingId: 'ending-5-exposition',
            deltaDharma: 25,
            deltaKarma: 15,
            deltaKismet: -30,
            divergenceImpact: 70,
            soundFx: 'bell',
            vfxEffect: 'divine_flash',
            alignmentTag: 'Satya (Absolute Truth)'
          }
        ]
      }
    },
    endings: {
      'ending-5-canonical': {
        id: 'ending-5-canonical',
        title: 'The Underground Phoenix',
        subtitle: 'Canonical Mahabharata Outcome (0% Divergence)',
        isCanonical: true,
        divergencePercentage: 0,
        moralTitle: 'Master of Survival & Disguise',
        description: 'The palace blazes into a mountain of inferno. The world believes the Pandavas perished. Wandering through forests disguised as Brahmins, Bheema slays Hidimba and Arjuna wins Draupadi at the Swayamvara.',
        epilogueText: 'From the ashes of the wax palace rises the glorious alliance with Panchala.',
        philosophicalAnalysis: 'Strategic retreat and patience in hiding are valid tactics to defeat overwhelming institutional corruption.',
        quote: {
          text: 'The seed buried in dark earth is not destroyed; it is preparing to break the soil as a mighty banyan.',
          source: 'Mahabharata, Adi Parva'
        }
      },
      'ending-5-exposition': {
        id: 'ending-5-exposition',
        title: 'The Trial of Hastinapura',
        subtitle: 'Fractured Fate Timeline (70% Divergence)',
        isCanonical: false,
        divergencePercentage: 70,
        moralTitle: 'Champion of Public Truth',
        description: 'Bheema drags Purochana into the imperial court of Hastinapura. The wax samples and treasonous letters are laid before the citizens. Duryodhana is stripped of crown prince status and exiled.',
        epilogueText: 'Yudhishthira is crowned Crown Prince of a unified Hastinapura.',
        philosophicalAnalysis: 'Bold truth-telling backed by evidence can dismantle conspiracy before violence scales to total war.',
        quote: {
          text: 'Truth exposed in light dissolves the darkest plots of night.',
          source: 'Subhashita'
        }
      }
    }
  },

  {
    id: 'island-6',
    number: 6,
    title: 'Drona’s Fall & The Half-Truth',
    subtitle: 'Drona Parva • "Ashwatthama is Dead"',
    era: 'Drona Parva',
    location: 'Kurukshetra Battlefield, Day 15',
    atmosphere: 'ink',
    summary: 'Master Drona lay waste to the Pandava army with celestial astras. Krishna advises Yudhishthira to speak a lie to break Drona’s will to fight.',
    prelude: 'Day 15 of war. Guru Drona, grieving his student casualties, wields the Brahmastra relentlessly. No Pandava warrior can withstand his fury. Krishna knows Drona will only lay down arms if he hears his beloved son Ashwatthama has died. Bheema slays a royal elephant named Ashwatthama.',
    initialSceneId: 'scene-6-1',
    heroCharacter: {
      id: 'yudhishthira-king',
      name: 'Yudhishthira',
      title: 'King Whose Chariot Floats',
      allegiance: 'Pandava',
      keyTrait: 'Absolute Truthfulness (Until Now)',
      avatarSvgKey: 'yudhishthira',
      description: 'His chariot hovered four fingers above the ground due to his blameless truth. Now he faces the ultimate moral compromise.',
      quote: 'I have never uttered a untruth in my life. How can I deceive my revered Guru?'
    },
    opponentCharacter: {
      id: 'drona',
      name: 'Guru Drona',
      title: 'Master of Weapons',
      allegiance: 'Kaurava',
      keyTrait: 'Unstoppable Military Genius',
      avatarSvgKey: 'bhishma',
      description: 'Preceptor to both Pandavas and Kauravas, unstoppable in combat until disarmed by grief for his son.',
      quote: 'If Yudhishthira says Ashwatthama is dead, I shall believe it, for his tongue knows no falsehood.'
    },
    scenes: {
      'scene-6-1': {
        id: 'scene-6-1',
        title: 'The Untruth at the Chariot',
        speaker: 'Lord Krishna',
        speakerRole: 'Divine Strategist',
        speakerAvatarSvgKey: 'krishna',
        vignetteType: 'drona_fall',
        narrative: 'Drona approaches Yudhishthira amidst flying arrows: "Yudhishthira! You speak only truth! Is my son Ashwatthama slain?" Krishna whispers: "Say it, Yudhishthira! Or Drona will annihilate your entire army in an hour!"',
        choices: [
          {
            id: 'choice-6-1-a',
            label: 'Utter the famous half-truth: "Ashwatthama is dead..." (muttering "the elephant") [Canonical]',
            philosophicalDilemma: 'Compromise absolute truth to save thousands of innocent soldiers from total slaughter.',
            consequencePreview: 'Drona drops his weapons in grief and enters Samadhi; Yudhishthira’s chariot touches the dust.',
            endingId: 'ending-6-canonical',
            deltaDharma: -15,
            deltaKarma: -20,
            deltaKismet: 25,
            divergenceImpact: 0,
            soundFx: 'gong',
            vfxEffect: 'shake',
            alignmentTag: 'Nyaya (Utilitarian Justice)'
          },
          {
            id: 'choice-6-1-b',
            label: 'Refuse to lie and declare clearly: "The elephant is dead, your son lives!"',
            philosophicalDilemma: 'Preserve personal moral purity at the cost of catastrophic army losses.',
            consequencePreview: 'Drona continues his rampage; Pandava leadership faces near annihilation.',
            endingId: 'ending-6-uncompromising-truth',
            deltaDharma: 25,
            deltaKarma: 10,
            deltaKismet: -30,
            divergenceImpact: 80,
            soundFx: 'bell',
            vfxEffect: 'divine_flash',
            alignmentTag: 'Satya (Absolute Truth)'
          }
        ]
      }
    },
    endings: {
      'ending-6-canonical': {
        id: 'ending-6-canonical',
        title: 'The Fallen Chariot of Truth',
        subtitle: 'Canonical Mahabharata Outcome (0% Divergence)',
        isCanonical: true,
        divergencePercentage: 0,
        moralTitle: 'The Pragmatic Sovereign',
        description: 'Yudhishthira speaks the words. Drona discards his bow and sits in meditation, where Dhrishtadyumna beheads him. Yudhishthira’s chariot, which floated above the mud for 40 years, touches the earthly dirt forever.',
        epilogueText: 'The moral ambiguity of victory leaves an indelible stain on the Pandava triumph.',
        philosophicalAnalysis: 'In war, absolute moral perfection often yields to tragic utilitarian necessity.',
        quote: {
          text: 'Truth that causes total destruction is not Satya; speech that saves righteousness may carry heavy weight.',
          source: 'Mahabharata, Drona Parva'
        }
      },
      'ending-6-uncompromising-truth': {
        id: 'ending-6-uncompromising-truth',
        title: 'The Pure Satya & The Fall of Drona',
        subtitle: 'Fractured Fate Timeline (80% Divergence)',
        isCanonical: false,
        divergencePercentage: 80,
        moralTitle: 'Unbending Martyr of Absolute Satya',
        description: 'Yudhishthira speaks the full truth. Inspired by Yudhishthira’s divine moral conviction, Drona realizes the futility of killing for Duryodhana’s greed and voluntarily surrenders his astras to Krishna.',
        epilogueText: 'Drona retires from battle peacefully; Yudhishthira’s chariot floats even higher into celestial radiance.',
        philosophicalAnalysis: 'Absolute unwavering truth can awaken divine conscience in even the fiercest opponent.',
        quote: {
          text: 'There is no higher Dharma than Truth; upon Truth the universe is sustained.',
          source: 'Upanishads'
        }
      }
    }
  },

  {
    id: 'island-7',
    number: 7,
    title: 'Abhimanyu’s Chakravyuha',
    subtitle: 'Drona Parva • The Lotus Wheel of Death',
    era: 'Drona Parva',
    location: 'Kurukshetra Battlefield, Day 13',
    atmosphere: 'embers',
    summary: '16-year-old Abhimanyu breaches Drona’s impenetrable 7-tier circular formation (Chakravyuha) knowing how to enter, but not how to exit.',
    prelude: 'Arjuna has been drawn away to the southern front by the Samsaptakas. Drona deploys the fatal Chakravyuha. Only Arjuna, Krishna, Pradyumna, and Abhimanyu know how to breach it. Young Abhimanyu steps forward to save the Pandava army from dishonor.',
    initialSceneId: 'scene-7-1',
    heroCharacter: {
      id: 'abhimanyu',
      name: 'Abhimanyu',
      title: 'Lion Cub of Arjuna',
      allegiance: 'Pandava',
      keyTrait: 'Fearless Courage & Unmatched Bravery',
      avatarSvgKey: 'arjuna',
      description: 'The 16-year-old warrior son of Arjuna and Subhadra who learned how to breach the Chakravyuha while in his mother’s womb.',
      quote: 'I will breach the formation today! My father and uncles shall never bow their heads in shame!'
    },
    opponentCharacter: {
      id: 'jayadratha',
      name: 'Jayadratha',
      title: 'King of Sindhu',
      allegiance: 'Kaurava',
      keyTrait: 'Boon-Protected Gatekeeper',
      avatarSvgKey: 'duryodhana',
      description: 'Blessed by Lord Shiva to hold back all Pandavas except Arjuna for a single day, trapping Abhimanyu inside alone.',
      quote: 'Break the entry if you wish, boy! But no Pandava elder shall step past my spear to help you!'
    },
    scenes: {
      'scene-7-1': {
        id: 'scene-7-1',
        title: 'Breaching the Lotus',
        speaker: 'Abhimanyu',
        speakerRole: 'Young Hero',
        speakerAvatarSvgKey: 'arjuna',
        vignetteType: 'chakravyuha',
        narrative: 'Abhimanyu’s chariot shatters the outer tier of the Chakravyuha! But Jayadratha slams the gate shut behind him, cutting off Bheema and Yudhishthira. 7 Kaurava maharathis encircle the lone teenager.',
        choices: [
          {
            id: 'choice-7-1-a',
            label: 'Fight to the last breath against all 7 warriors simultaneously [Canonical]',
            philosophicalDilemma: 'Stand alone in impossible combat to uphold Kshatriya honor.',
            consequencePreview: 'Abhimanyu slays dozens of commanders before being unrighteously killed from behind.',
            endingId: 'ending-7-canonical',
            deltaDharma: 25,
            deltaKarma: 30,
            deltaKismet: 20,
            divergenceImpact: 0,
            soundFx: 'thunder',
            vfxEffect: 'shake',
            alignmentTag: 'Swadharma (Duty)'
          },
          {
            id: 'choice-7-1-b',
            label: 'Use the Raudra-Astra to force an exit gap and retreat back to Pandava lines',
            philosophicalDilemma: 'Prioritize tactical survival and long-term army strength over suicidal heroics.',
            consequencePreview: 'Abhimanyu survives the day; Arjuna returns to lead a joint counter-strike.',
            endingId: 'ending-7-tactical-retrieval',
            deltaDharma: 10,
            deltaKarma: 15,
            deltaKismet: -35,
            divergenceImpact: 75,
            soundFx: 'divine',
            vfxEffect: 'divine_flash',
            alignmentTag: 'Nyaya (Utilitarian Justice)'
          }
        ]
      }
    },
    endings: {
      'ending-7-canonical': {
        id: 'ending-7-canonical',
        title: 'Immortal Martyr of Kurukshetra',
        subtitle: 'Canonical Mahabharata Outcome (0% Divergence)',
        isCanonical: true,
        divergencePercentage: 0,
        moralTitle: 'The Eternal Lion of Courage',
        description: 'Abhimanyu fights valiantly with a chariot wheel when his bow is broken from behind by Karna. His tragic death breaks all war rules, prompting Arjuna’s vow to slay Jayadratha before sunset.',
        epilogueText: 'His sacrifice becomes the emotional turning point where war rules are permanently shattered.',
        philosophicalAnalysis: 'Unflinching courage in the face of insurmountable odds carves eternal glory into cosmic memory.',
        quote: {
          text: 'He who falls fighting for righteousness never dies; he lives forever in celestial light.',
          source: 'Mahabharata, Drona Parva'
        }
      },
      'ending-7-tactical-retrieval': {
        id: 'ending-7-tactical-retrieval',
        title: 'The Lotus Breaker’s Triumph',
        subtitle: 'Fractured Fate Timeline (75% Divergence)',
        isCanonical: false,
        divergencePercentage: 75,
        moralTitle: 'Master of Tactical Wisdom',
        description: 'Abhimanyu breaches the wall, wreaks havoc, and retreats strategically. He survives the war and later ascends the throne as Crown Prince after Parikshit.',
        epilogueText: 'The Pandava lineage retains its brilliant young military genius.',
        philosophicalAnalysis: 'Wisdom consists in knowing when to fight and when to preserve strength for future victory.',
        quote: {
          text: 'Valor guided by prudence builds kingdoms; blind sacrifice feeds the grave.',
          source: 'Dharmakshetra Alternative Codex'
        }
      }
    }
  },

  {
    id: 'island-8',
    number: 8,
    title: 'Draupadi’s Vow & Vana Parva',
    subtitle: 'Vana Parva • Exile & Cosmic Retribution',
    era: 'Vana Parva',
    location: 'Kamyaka Forest',
    atmosphere: 'forest',
    summary: 'Empress Draupadi challenges Yudhishthira in forest exile, demanding immediate war against Duryodhana rather than 12 years of patient endurance.',
    prelude: 'In the humid depths of Kamyaka Forest, the Pandavas live as ascetics. Draupadi, her hair still unbound in memory of her humiliation, sits by the campfire with Yudhishthira. Sage Markandeya listens as her voice burns with divine wrath.',
    initialSceneId: 'scene-8-1',
    heroCharacter: {
      id: 'draupadi-exile',
      name: 'Empress Draupadi',
      title: 'Born of Sacred Fire',
      allegiance: 'Pandava',
      keyTrait: 'Fiery Justice & Divine Faith',
      avatarSvgKey: 'draupadi',
      description: 'Empress of Indraprastha whose unwashed hair remains a living vow of vengeance against Dushasana and Duryodhana.',
      quote: 'For forgiveness to be Dharma, it must be offered to the repentant, not to wolves who tear your skin!'
    },
    opponentCharacter: {
      id: 'yudhishthira-ascetic',
      name: 'Yudhishthira',
      title: 'Patient Forest King',
      allegiance: 'Pandava',
      keyTrait: 'Enduring Patience & Cosmic Faith',
      avatarSvgKey: 'yudhishthira',
      description: 'Insists on completing 12 years of forest exile to honor his word, believing Karma will naturally punish the evil.',
      quote: 'Dharma is not practiced for reward, Draupadi! Forgiveness is the strength of the mighty.'
    },
    scenes: {
      'scene-8-1': {
        id: 'scene-8-1',
        title: 'The Fire of Kamyaka',
        speaker: 'Empress Draupadi',
        speakerRole: 'Empress in Exile',
        speakerAvatarSvgKey: 'draupadi',
        vignetteType: 'draupadi_vow',
        narrative: 'Draupadi points to her rough bark garments: "Look at your brothers, Yudhishthira! Bheema who could crush mountains now digs roots! Arjuna who conquered gods sits in ashes! Why do you praise forgiveness while Adharma enjoys our palace?"',
        choices: [
          {
            id: 'choice-8-1-a',
            label: 'Endure the 12 years of exile to uphold the promise (Canonical)',
            philosophicalDilemma: 'Suffer personal agony and humiliation to preserve truth and integrity of word.',
            consequencePreview: 'Pandavas acquire divine astras during exile, preparing for righteous victory.',
            endingId: 'ending-8-canonical',
            deltaDharma: 25,
            deltaKarma: 20,
            deltaKismet: 20,
            divergenceImpact: 0,
            soundFx: 'bell',
            vfxEffect: 'none',
            alignmentTag: 'Swadharma (Duty)'
          },
          {
            id: 'choice-8-1-b',
            label: 'Break exile immediately and launch a surprise alliance attack on Hastinapura',
            philosophicalDilemma: 'Prioritize swift justice and ending oppression over rigid compliance with rigged wagers.',
            consequencePreview: 'Alliance of Panchala, Yadavas, and Matsya invades Hastinapura immediately.',
            endingId: 'ending-8-early-strike',
            deltaDharma: -10,
            deltaKarma: 10,
            deltaKismet: -30,
            divergenceImpact: 70,
            soundFx: 'thunder',
            vfxEffect: 'shake',
            alignmentTag: 'Nyaya (Utilitarian Justice)'
          }
        ]
      }
    },
    endings: {
      'ending-8-canonical': {
        id: 'ending-8-canonical',
        title: 'The Steel Forged in Exile',
        subtitle: 'Canonical Mahabharata Outcome (0% Divergence)',
        isCanonical: true,
        divergencePercentage: 0,
        moralTitle: 'Empress of Sacred Endurance',
        description: 'Yudhishthira remains firm. During exile, Arjuna ascends to Indraloka for divine astras, Bheema meets Hanuman, and Yudhishthira solves the Yaksha Prashna riddles, strengthening their divine destiny.',
        epilogueText: 'The 12 years of trial refine the Pandavas into invincible instruments of Dharma.',
        philosophicalAnalysis: 'True spiritual power and wisdom are forged in the fires of patience and endurance.',
        quote: {
          text: 'Patience is not weakness; it is the quiet gathering of lightning before the storm.',
          source: 'Mahabharata, Vana Parva'
        }
      },
      'ending-8-early-strike': {
        id: 'ending-8-early-strike',
        title: 'The War of Panchala Alliance',
        subtitle: 'Fractured Fate Timeline (70% Divergence)',
        isCanonical: false,
        divergencePercentage: 70,
        moralTitle: 'Avenger of Imperial Dignity',
        description: 'Pandavas break exile. King Drupada and Krishna lead an overwhelming assault. Hastinapura falls within months, but Pandavas carry the reputation of breaking their word.',
        epilogueText: 'Draupadi washes her hair in Dushasana’s blood 10 years earlier.',
        philosophicalAnalysis: 'Swift vengeance resolves immediate injustice but leaves moral stains on the victors.',
        quote: {
          text: 'Fire quenched too quickly may leave embers that burn the hand that doused it.',
          source: 'Dharmakshetra Alternative Codex'
        }
      }
    }
  },

  {
    id: 'island-9',
    number: 9,
    title: 'The Fall of Duryodhana',
    subtitle: 'Shalya Parva • The Club Duel at Dwaipayana',
    era: 'Shalya Parva',
    location: 'Lake Dwaipayana, Kurukshetra',
    atmosphere: 'embers',
    summary: 'The final survivor Duryodhana emerges from the lake. Bheema challenges him to a mace duel to decide the fate of Aryavarta.',
    prelude: 'All 100 Kaurava brothers are dead. Duryodhana hides in the cold waters of Lake Dwaipayana using water-solidifying mantras. Yudhishthira offers him a choice: "Pick any weapon, fight any one of us! If you win, the entire kingdom is yours again!" Duryodhana steps out with his heavy iron mace.',
    initialSceneId: 'scene-9-1',
    heroCharacter: {
      id: 'bheema',
      name: 'Bheema',
      title: 'Vrikodara of Mighty Mace',
      allegiance: 'Pandava',
      keyTrait: 'Raw Physical Might & Vow Fulfillment',
      avatarSvgKey: 'duryodhana',
      description: 'The terrifying Pandava powerhouse who swore to break Duryodhana’s thighs in the gambling hall.',
      quote: 'Today I fulfill my vow! The thigh that invited Draupadi shall be smashed into red dust!'
    },
    opponentCharacter: {
      id: 'duryodhana-final',
      name: 'Duryodhana',
      title: 'Unyielding Sovereign of Kauravas',
      allegiance: 'Kaurava',
      keyTrait: 'Unbroken Pride & Master Mace Skills',
      avatarSvgKey: 'duryodhana',
      description: 'Master of the mace trained by Balarama, fighting with supreme skill and refusing to surrender even in total defeat.',
      quote: 'I have ruled as a king, given charity, and fought like a lion! I will not beg for mercy!'
    },
    scenes: {
      'scene-9-1': {
        id: 'scene-9-1',
        title: 'The Clash of Iron Maces',
        speaker: 'Lord Krishna',
        speakerRole: 'Divine Strategist',
        speakerAvatarSvgKey: 'krishna',
        vignetteType: 'club_duel',
        narrative: 'For hours the maces clash like thunder! Duryodhana’s technique is superior; Bheema grows exhausted. Krishna slaps his own thigh while looking at Bheema, signaling the secret vow made 13 years ago. In mace rules, striking below the navel is forbidden.',
        choices: [
          {
            id: 'choice-9-1-a',
            label: 'Strike Duryodhana below the waist, breaking his thighs (Canonical)',
            philosophicalDilemma: 'Break strict chivalric duel rules to fulfill a sacred vow and destroy ultimate Adharma.',
            consequencePreview: 'Bheema smashes Duryodhana’s thighs; Balarama raises his plow in fury until Krishna pacifies him.',
            endingId: 'ending-9-canonical',
            deltaDharma: -15,
            deltaKarma: -20,
            deltaKismet: 25,
            divergenceImpact: 0,
            soundFx: 'thunder',
            vfxEffect: 'shake',
            alignmentTag: 'Nyaya (Utilitarian Justice)'
          },
          {
            id: 'choice-9-1-b',
            label: 'Fight strictly above the waist adhering to duel rules, even if it risks defeat',
            philosophicalDilemma: 'Uphold honorable combat rules even when facing personal defeat.',
            consequencePreview: 'The duel lasts until dawn; Bheema lands a fair strike to Duryodhana’s crown.',
            endingId: 'ending-9-pure-duel',
            deltaDharma: 25,
            deltaKarma: 25,
            deltaKismet: -40,
            divergenceImpact: 80,
            soundFx: 'bell',
            vfxEffect: 'divine_flash',
            alignmentTag: 'Swadharma (Duty)'
          }
        ]
      }
    },
    endings: {
      'ending-9-canonical': {
        id: 'ending-9-canonical',
        title: 'The Shattered Thighs & Dawn of Kali Yuga',
        subtitle: 'Canonical Mahabharata Outcome (0% Divergence)',
        isCanonical: true,
        divergencePercentage: 0,
        moralTitle: 'Vindicator of Sacred Vows',
        description: 'Duryodhana lies mortally wounded on the bloodied earth. Bheema fulfills his vow. Ashwatthama launches a night attack on the Pandava camp in revenge, bringing the tragedy to its dark final conclusion.',
        epilogueText: 'Victory is won, but it leaves an empty, ash-covered world.',
        philosophicalAnalysis: 'When systemic Adharma corrupts rules, even victory’s final blow carries tragic moral compromise.',
        quote: {
          text: 'He who sowed seeds of poison cannot complain when the harvest burns his field.',
          source: 'Mahabharata, Shalya Parva'
        }
      },
      'ending-9-pure-duel': {
        id: 'ending-9-pure-duel',
        title: 'The Pure Triumph of Bheema',
        subtitle: 'Fractured Fate Timeline (80% Divergence)',
        isCanonical: false,
        divergencePercentage: 80,
        moralTitle: 'Flawless Champion of Chivalry',
        description: 'Bheema defeats Duryodhana in a fair duel above the waist. Balarama blesses Bheema. Ashwatthama’s night massacre is averted because Duryodhana orders peace before dying.',
        epilogueText: 'The war ends with complete moral dignity preserved for the Pandava crown.',
        philosophicalAnalysis: 'Adhering to high honor even in the final strike prevents downstream revenge cycles.',
        quote: {
          text: 'Honor kept clean to the end shines bright into eternity.',
          source: 'Dharmakshetra Alternative Codex'
        }
      }
    }
  },

  {
    id: 'island-10',
    number: 10,
    title: 'The Ascent to Mahaprasthanika',
    subtitle: 'Mahaprasthanika Parva • The Final Test & The Dog',
    era: 'Mahaprasthanika Parva',
    location: 'Slopes of Mount Meru, Himalayas',
    atmosphere: 'divine',
    summary: 'Aging King Yudhishthira walks up the Himalayas toward Heaven. One by one his brothers and Draupadi fall. Only a stray dog remains at his side.',
    prelude: '36 years after Kurukshetra war, Lord Krishna has departed to his cosmic realm. The Pandavas renounce their empire, dress in bark, and embark on the Great Journey north across the Himalayas. Draupadi, Sahadeva, Nakula, Arjuna, and Bheema fall along the icy cliffs due to minor mortal flaws.',
    initialSceneId: 'scene-10-1',
    heroCharacter: {
      id: 'yudhishthira-old',
      name: 'Yudhishthira',
      title: 'Sole Survivor of the Journey',
      allegiance: 'Pandava',
      keyTrait: 'Ultimate Compassion & Dharma Incarnate',
      avatarSvgKey: 'yudhishthira',
      description: 'Now an old man whose mortal attachments have been stripped away, tested at the golden gates of Swarga.',
      quote: 'This creature has sought my protection in the cold snow. I cannot abandon a loyal companion for celestial joy!'
    },
    opponentCharacter: {
      id: 'indra-chariot',
      name: 'Lord Indra',
      title: 'King of Heaven',
      allegiance: 'Divine',
      keyTrait: 'Divine Examiner',
      avatarSvgKey: 'krishna',
      description: 'Arrives in a golden chariot to take Yudhishthira to heaven in his mortal body, on condition he leaves the dog behind.',
      quote: 'Dogs have no place in Heaven! Abandon this unholy animal and step into eternal bliss!'
    },
    scenes: {
      'scene-10-1': {
        id: 'scene-10-1',
        title: 'The Golden Chariot at the Peak',
        speaker: 'Lord Indra',
        speakerRole: 'King of Gods',
        speakerAvatarSvgKey: 'krishna',
        vignetteType: 'mahaprasthanika',
        narrative: 'Indra’s chariot descends with heavenly music! "Ascend, Yudhishthira! You alone have walked this path in your mortal flesh!" Yudhishthira turns to the shivering black dog: "Come, my friend." Indra stops him: "No dogs in Swarga! Cast it away!"',
        choices: [
          {
            id: 'choice-10-1-a',
            label: 'Refuse Heaven unless the dog enters with you [Canonical]',
            philosophicalDilemma: 'Sacrifice personal salvation and celestial glory rather than betray a humble dependent creature.',
            consequencePreview: 'The dog transforms into Lord Dharma, blessing Yudhishthira for passing the ultimate test.',
            endingId: 'ending-10-canonical',
            deltaDharma: 30,
            deltaKarma: 30,
            deltaKismet: 30,
            divergenceImpact: 0,
            soundFx: 'divine',
            vfxEffect: 'divine_flash',
            alignmentTag: 'Satya (Absolute Truth)'
          },
          {
            id: 'choice-10-1-b',
            label: 'Abandon the dog and enter Indra’s chariot',
            philosophicalDilemma: 'Prioritize personal spiritual liberation (Moksha) over mortal compassion for an animal.',
            consequencePreview: 'Yudhishthira enters heaven but carries the heavy stain of abandoned duty.',
            endingId: 'ending-10-abandoned',
            deltaDharma: -20,
            deltaKarma: -25,
            deltaKismet: 40,
            divergenceImpact: 85,
            soundFx: 'gong',
            vfxEffect: 'none',
            alignmentTag: 'Adharma (Selfish Gain)'
          }
        ]
      }
    },
    endings: {
      'ending-10-canonical': {
        id: 'ending-10-canonical',
        title: 'The Ultimate Triumph of Dharma',
        subtitle: 'Canonical Mahabharata Finale (0% Divergence)',
        isCanonical: true,
        divergencePercentage: 0,
        moralTitle: 'Dharmaraja — Sovereign of All Souls',
        description: 'The dog reveals himself as Lord Dharma, father of Yudhishthira. He declares: "There is no mortal in all creation who equals your compassion!" Yudhishthira enters Swarga in his physical body with divine honors.',
        epilogueText: 'The epic concludes with the eternal truth that compassion for all living beings is the supreme Dharma.',
        philosophicalAnalysis: 'True Dharma is measured not by grand royal status, but by unyielding compassion for the humblest creature.',
        quote: {
          text: 'Compassion for all beings is the highest truth. He who abandons a loyal friend loses all merit of his virtue.',
          source: 'Mahabharata, Mahaprasthanika Parva'
        }
      },
      'ending-10-abandoned': {
        id: 'ending-10-abandoned',
        title: 'The Clouded Liberation',
        subtitle: 'Fractured Fate Timeline (85% Divergence)',
        isCanonical: false,
        divergencePercentage: 85,
        moralTitle: 'The Flawed Ascetic',
        description: 'Yudhishthira steps into the chariot, leaving the dog behind in the snow. Upon reaching Heaven, he finds the gates locked to him, forced to spend years in purgatory to purge the karma of abandonment.',
        epilogueText: 'Even at heaven’s door, self-seeking spiritual ambition fails the ultimate test.',
        philosophicalAnalysis: 'Enlightenment sought by casting aside empathy is merely refined selfishness.',
        quote: {
          text: 'He who steps over the suffering to reach paradise finds only a mirage at the gate.',
          source: 'Dharmakshetra Alternative Codex'
        }
      }
    }
  }
];
