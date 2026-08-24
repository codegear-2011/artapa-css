import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface ColorPreset {
  id: string;
  name: string;
  primary: string;       // 600 or 700 shade
  hover: string;         // darker shade for button hover
  light: string;         // 50-level background
  border: string;        // 200-level border
  badgeBg: string;       // badge bg
  rgb: string;           // for rgba glow
}

export const COLOR_PRESETS: ColorPreset[] = [
  {
    id: 'cyan',
    name: 'Ocean Cyan(Default)',
    primary: '#0891b2',
    hover: '#0e7490',
    light: '#ecfeff',
    border: '#a5f3fc',
    badgeBg: '#cffafe',
    rgb: '8, 145, 178',
  },
  {
    id: 'emerald',
    name: 'Emerald',
    primary: '#059669',
    hover: '#047857',
    light: '#ecfdf5',
    border: '#a7f3d0',
    badgeBg: '#d1fae5',
    rgb: '5, 150, 105',
  },
  {
    id: 'teal',
    name: 'Teal',
    primary: '#0d9488',
    hover: '#0f766e',
    light: '#f0fdfa',
    border: '#99f6e4',
    badgeBg: '#ccfbf1',
    rgb: '13, 148, 136',
  },
  {
    id: 'forest-green',
    name: 'Forest Green',
    primary: '#15803d',
    hover: '#166534',
    light: '#f0fdf4',
    border: '#bbf7d0',
    badgeBg: '#dcfce7',
    rgb: '21, 128, 61',
  },
  {
    id: 'blue',
    name: 'Royal Blue',
    primary: '#2563eb',
    hover: '#1d4ed8',
    light: '#eff6ff',
    border: '#bfdbfe',
    badgeBg: '#dbeafe',
    rgb: '37, 99, 235',
  },
  {
    id: 'indigo',
    name: 'Deep Indigo',
    primary: '#4f46e5',
    hover: '#4338ca',
    light: '#eef2ff',
    border: '#c7d2fe',
    badgeBg: '#e0e7ff',
    rgb: '79, 70, 229',
  },
  {
    id: 'purple',
    name: 'Vibrant Violet',
    primary: '#7c3aed',
    hover: '#6d28d9',
    light: '#f5f3ff',
    border: '#ddd6fe',
    badgeBg: '#ede9fe',
    rgb: '124, 58, 237',
  },
  {
    id: 'rose',
    name: 'Ruby Rose',
    primary: '#e11d48',
    hover: '#be123c',
    light: '#fff1f2',
    border: '#fecdd3',
    badgeBg: '#ffe4e6',
    rgb: '225, 29, 72',
  },
  {
    id: 'amber',
    name: 'Sunset Amber',
    primary: '#d97706',
    hover: '#b45309',
    light: '#fffbeb',
    border: '#fde68a',
    badgeBg: '#fef3c7',
    rgb: '217, 119, 6',
  },
  {
    id: 'slate',
    name: 'Minimalist Slate',
    primary: '#334155',
    hover: '#1e293b',
    light: '#f8fafc',
    border: '#e2e8f0',
    badgeBg: '#f1f5f9',
    rgb: '51, 65, 85',
  },
];

interface ThemeColorContextType {
  currentPreset: ColorPreset;
  setColorPreset: (preset: ColorPreset) => void;
  setCustomHex: (hex: string) => void;
  resetDefaultColor: () => void;
}

const STORAGE_KEY = 'artapa_theme_color_preset';

const ThemeColorContext = createContext<ThemeColorContextType | undefined>(undefined);

function hexToRgb(hex: string): string {
  const cleanHex = hex.replace('#', '');
  if (cleanHex.length === 3) {
    const r = parseInt(cleanHex[0] + cleanHex[0], 16);
    const g = parseInt(cleanHex[1] + cleanHex[1], 16);
    const b = parseInt(cleanHex[2] + cleanHex[2], 16);
    return `${r}, ${g}, ${b}`;
  }
  if (cleanHex.length === 6) {
    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);
    return `${r}, ${g}, ${b}`;
  }
  return '21, 128, 61';
}

function adjustBrightness(hex: string, percent: number): string {
  let num = parseInt(hex.replace('#', ''), 16);
  if (isNaN(num)) return hex;
  let r = (num >> 16) + Math.round(255 * (percent / 100));
  let g = ((num >> 8) & 0x00FF) + Math.round(255 * (percent / 100));
  let b = (num & 0x0000FF) + Math.round(255 * (percent / 100));
  r = Math.min(255, Math.max(0, r));
  g = Math.min(255, Math.max(0, g));
  b = Math.min(255, Math.max(0, b));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

export const ThemeColorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPreset, setCurrentPresetState] = useState<ColorPreset>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          return parsed;
        }
      } catch (e) {
        // fallback
      }
    }
    return COLOR_PRESETS[0];
  });

  // Apply CSS variables dynamically to the document root
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      root.style.setProperty('--primary', currentPreset.primary);
      root.style.setProperty('--primary-hover', currentPreset.hover);
      root.style.setProperty('--primary-light', currentPreset.light);
      root.style.setProperty('--primary-border', currentPreset.border);
      root.style.setProperty('--primary-badge-bg', currentPreset.badgeBg);
      root.style.setProperty('--primary-rgb', currentPreset.rgb);
    }
  }, [currentPreset]);

  const setColorPreset = (preset: ColorPreset) => {
    setCurrentPresetState(preset);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(preset));
    } catch (e) {
      // ignore
    }
  };

  const setCustomHex = (hex: string) => {
    if (!/^#[0-9A-F]{6}$/i.test(hex) && !/^#[0-9A-F]{3}$/i.test(hex)) return;
    const rgb = hexToRgb(hex);
    const hover = adjustBrightness(hex, -15);
    const light = adjustBrightness(hex, 85);
    const border = adjustBrightness(hex, 60);
    const customPreset: ColorPreset = {
      id: 'custom-' + hex,
      name: `Custom (${hex})`,
      primary: hex,
      hover,
      light,
      border,
      badgeBg: adjustBrightness(hex, 75),
      rgb,
    };
    setColorPreset(customPreset);
  };

  const resetDefaultColor = () => {
    setColorPreset(COLOR_PRESETS[0]);
  };

  return (
    <ThemeColorContext.Provider
      value={{
        currentPreset,
        setColorPreset,
        setCustomHex,
        resetDefaultColor,
      }}
    >
      {children}
    </ThemeColorContext.Provider>
  );
};

export const useThemeColor = (): ThemeColorContextType => {
  const context = useContext(ThemeColorContext);
  if (!context) {
    throw new Error('useThemeColor must be used within a ThemeColorProvider');
  }
  return context;
};
