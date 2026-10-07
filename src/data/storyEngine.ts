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
  badge: string;
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

// @ts-ignore
import { STORY_GRAPH as JS_STORY_GRAPH, getIslandStartNode as JS_getIslandStartNode } from './storyEngine.js';

export const STORY_GRAPH = JS_STORY_GRAPH as Record<string, IslandStoryGraph>;
export const getIslandStartNode = JS_getIslandStartNode as (islandId: string) => string;
