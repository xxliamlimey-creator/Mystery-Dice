export interface DiceSkin {
  id: string;
  name: string;
  price: string;
  rarity: 'Starter' | 'Iconic' | 'Rare' | 'Epic' | 'Legendary';
  description: string;
  bodyColor: string;
  pipColor: string;
  roughness: number;
  metalness: number;
  isMysteryCube?: boolean;
}

export interface RuleDetail {
  dot: number;
  title: string;
  tagline: string;
  type: string;
  description: string;
  action: string;
  stakes: string;
  sampleItems?: string[];
}

export interface TabScreenInfo {
  id: string;
  name: string;
  badge: string;
  headline: string;
  summary: string;
  features: string[];
}
