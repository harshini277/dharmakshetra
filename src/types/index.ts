export type AtmosphereType = 'embers' | 'divine' | 'forest' | 'ink';

export interface CharacterProfile {
  id: string;
  name: string;
  title: string;
  allegiance: 'Pandava' | 'Kaurava' | 'Divine' | 'Neutral';
  keyTrait: string;
  avatarSvgKey: string;
  description: string;
  quote?: string;
  imageUrl?: string;
}

export type AlignmentTag = 
  | 'Swadharma (Duty)' 
  | 'Nyaya (Utilitarian Justice)' 
  | 'Karmic Fate' 
  | 'Adharma (Selfish Gain)' 
  | 'Moksha (Renunciation)'
  | 'Satya (Absolute Truth)';

export type SoundFxType = 'bell' | 'gong' | 'thunder' | 'divine';
export type VfxType = 'none' | 'shake' | 'divine_flash' | 'red_vignette';

export interface Choice {
  id: string;
  label: string;
  philosophicalDilemma: string;
  consequencePreview: string;
  nextSceneId?: string;
  endingId?: string;
  deltaDharma: number;
  deltaKarma: number;
  deltaKismet: number;
  divergenceImpact: number;
  soundFx: SoundFxType;
  vfxEffect: VfxType;
  alignmentTag: AlignmentTag;
}

export interface Scene {
  id: string;
  title: string;
  speaker: string;
  speakerRole: string;
  speakerAvatarSvgKey: string;
  vignetteType: string;
  narrative: string;
  choices: Choice[];
}

export interface IslandEnding {
  id: string;
  title: string;
  subtitle: string;
  isCanonical: boolean;
  divergencePercentage: number;
  moralTitle: string;
  description: string;
  epilogueText: string;
  philosophicalAnalysis: string;
  quote: {
    text: string;
    source: string;
  };
}

export interface PathStep {
  sceneId: string;
  choiceId: string;
  choiceLabel: string;
  alignmentTag: AlignmentTag;
  divergenceScore: number;
  deltaDharma: number;
  deltaKarma: number;
}

export interface Island {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  era: string;
  location: string;
  atmosphere: AtmosphereType;
  heroCharacter: CharacterProfile;
  opponentCharacter: CharacterProfile;
  summary: string;
  prelude: string;
  initialSceneId: string;
  scenes: Record<string, Scene>;
  endings: Record<string, IslandEnding>;
}

export type ActiveView = 'sandbox' | 'timeline' | 'codex' | 'matrix';
