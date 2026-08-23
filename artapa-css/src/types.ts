export type ThemeMode = 'dark' | 'light';

export interface ArtapaRule {
  class: string;
  css: string;
  namespace: 'layout' | 'align' | 'justify' | 'font' | 'bg' | 'text' | 'border' | 'spacing' | 'padding' | 'margin' | 'shadow' | 'opacity' | 'transition';
  description: string;
  category: string;
}

export interface ColorFamily {
  name: string;
  label: string;
  shades: {
    shade: '100' | '300' | '500' | '700' | '900';
    hex: string;
    bgClass: string;
    textClass: string;
    borderClass: string;
  }[];
}

export interface ComponentSample {
  id: string;
  title: string;
  category: 'buttons' | 'cards' | 'badges' | 'forms' | 'navigation' | 'feedback';
  description: string;
  htmlCode: string;
  tailwindCode: string;
  tags: string[];
}

export interface PlaygroundPreset {
  id: string;
  name: string;
  description: string;
  icon: string;
  html: string;
}

export interface ComparisonFeature {
  feature: string;
  artapa: string;
  tailwind: string;
  bulma: string;
  bootstrap: string;
  highlight?: boolean;
}

export interface ApiMethodDoc {
  name: string;
  signature: string;
  description: string;
  example: string;
  category: 'core' | 'config' | 'inspection';
}
