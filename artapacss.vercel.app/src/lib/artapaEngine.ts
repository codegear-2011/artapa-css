/**
 * ARTAPA CSS Runtime Engine
 * AI-optimized, zero-config, runtime CSS framework.
 * Real-time in-browser CSS generation using namespace-based syntax.
 */

export const BREAKPOINTS: Record<string, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

export const STATES: Record<string, string> = {
  hover: ':hover',
  focus: ':focus',
  active: ':active',
};

// Color palettes: 11 colors x 5 shades
export const COLOR_PALETTES: Record<string, Record<string, string>> = {
  slate: {
    '100': '#f1f5f9',
    '300': '#cbd5e1',
    '500': '#64748b',
    '700': '#334155',
    '900': '#0f172a',
  },
  gray: {
    '100': '#f3f4f6',
    '300': '#d1d5db',
    '500': '#6b7280',
    '700': '#374151',
    '900': '#111827',
  },
  red: {
    '100': '#fee2e2',
    '300': '#fca5a5',
    '500': '#ef4444',
    '700': '#b91c1c',
    '900': '#7f1d1d',
  },
  orange: {
    '100': '#ffedd5',
    '300': '#fdba74',
    '500': '#f97316',
    '700': '#c2410c',
    '900': '#7c2d12',
  },
  amber: {
    '100': '#fef3c7',
    '300': '#fcd34d',
    '500': '#f59e0b',
    '700': '#b45309',
    '900': '#78350f',
  },
  green: {
    '100': '#dcfce7',
    '300': '#86efac',
    '500': '#22c55e',
    '700': '#15803d',
    '900': '#14532d',
  },
  teal: {
    '100': '#ccfbf1',
    '300': '#5eead4',
    '500': '#14b8a6',
    '700': '#0f766e',
    '900': '#134e4a',
  },
  blue: {
    '100': '#dbeafe',
    '300': '#93c5fd',
    '500': '#3b82f6',
    '700': '#1d4ed8',
    '900': '#1e3a8a',
  },
  indigo: {
    '100': '#e0e7ff',
    '300': '#a5b4fc',
    '500': '#6366f1',
    '700': '#4338ca',
    '900': '#312e81',
  },
  purple: {
    '100': '#f3e8ff',
    '300': '#d8b4fe',
    '500': '#a855f7',
    '700': '#7e22ce',
    '900': '#581c87',
  },
  pink: {
    '100': '#fce7f3',
    '300': '#f472b6',
    '500': '#ec4899',
    '700': '#be185d',
    '900': '#831843',
  },
};

// Base dictionary of ARTAPA Rules
export const BASE_RULES: Record<string, string> = {
  // Layout
  'layout:flex': 'display: flex;',
  'layout:inline-flex': 'display: inline-flex;',
  'layout:grid': 'display: grid;',
  'layout:block': 'display: block;',
  'layout:inline-block': 'display: inline-block;',
  'layout:inline': 'display: inline;',
  'layout:hidden': 'display: none;',
  'layout:row': 'flex-direction: row;',
  'layout:col': 'flex-direction: column;',
  'layout:wrap': 'flex-wrap: wrap;',
  'layout:nowrap': 'flex-wrap: nowrap;',
  'layout:grid-cols-1': 'grid-template-columns: repeat(1, minmax(0, 1fr));',
  'layout:grid-cols-2': 'grid-template-columns: repeat(2, minmax(0, 1fr));',
  'layout:grid-cols-3': 'grid-template-columns: repeat(3, minmax(0, 1fr));',
  'layout:grid-cols-4': 'grid-template-columns: repeat(4, minmax(0, 1fr));',

  // Alignment
  'align:start': 'align-items: flex-start;',
  'align:center': 'align-items: center;',
  'align:end': 'align-items: flex-end;',
  'align:stretch': 'align-items: stretch;',
  'align:baseline': 'align-items: baseline;',

  // Justify
  'justify:start': 'justify-content: flex-start;',
  'justify:center': 'justify-content: center;',
  'justify:end': 'justify-content: flex-end;',
  'justify:between': 'justify-content: space-between;',
  'justify:around': 'justify-content: space-around;',
  'justify:evenly': 'justify-content: space-evenly;',

  // Spacing (Padding & Margin & Gap)
  'padding:none': 'padding: 0px;',
  'padding:xs': 'padding: 4px;',
  'padding:sm': 'padding: 8px;',
  'padding:md': 'padding: 16px;',
  'padding:lg': 'padding: 24px;',
  'padding:xl': 'padding: 32px;',
  'padding:xxl': 'padding: 48px;',
  
  'padding:x-sm': 'padding-left: 8px; padding-right: 8px;',
  'padding:x-md': 'padding-left: 16px; padding-right: 16px;',
  'padding:x-lg': 'padding-left: 24px; padding-right: 24px;',
  'padding:y-sm': 'padding-top: 8px; padding-bottom: 8px;',
  'padding:y-md': 'padding-top: 16px; padding-bottom: 16px;',
  'padding:y-lg': 'padding-top: 24px; padding-bottom: 24px;',

  'margin:none': 'margin: 0px;',
  'margin:xs': 'margin: 4px;',
  'margin:sm': 'margin: 8px;',
  'margin:md': 'margin: 16px;',
  'margin:lg': 'margin: 24px;',
  'margin:xl': 'margin: 32px;',
  'margin:auto': 'margin: auto;',

  'gap:xs': 'gap: 4px;',
  'gap:sm': 'gap: 8px;',
  'gap:md': 'gap: 16px;',
  'gap:lg': 'gap: 24px;',
  'gap:xl': 'gap: 32px;',

  // Typography
  'font:size-xs': 'font-size: 12px; line-height: 16px;',
  'font:size-sm': 'font-size: 14px; line-height: 20px;',
  'font:size-base': 'font-size: 16px; line-height: 24px;',
  'font:size-lg': 'font-size: 18px; line-height: 28px;',
  'font:size-xl': 'font-size: 20px; line-height: 28px;',
  'font:size-2xl': 'font-size: 24px; line-height: 32px;',
  'font:size-3xl': 'font-size: 30px; line-height: 36px;',
  'font:size-4xl': 'font-size: 36px; line-height: 40px;',

  'font:weight-normal': 'font-weight: 400;',
  'font:weight-medium': 'font-weight: 500;',
  'font:weight-semibold': 'font-weight: 600;',
  'font:weight-bold': 'font-weight: 700;',
  'font:weight-extrabold': 'font-weight: 800;',

  'font:family-sans': "font-family: 'Plus Jakarta Sans', system-ui, sans-serif;",
  'font:family-mono': "font-family: 'Fira Code', monospace;",
  
  'text:align-left': 'text-align: left;',
  'text:align-center': 'text-align: center;',
  'text:align-right': 'text-align: right;',
  'text:transform-upper': 'text-transform: uppercase;',
  'text:transform-lower': 'text-transform: lowercase;',
  'text:transform-capitalize': 'text-transform: capitalize;',

  // Borders
  'border:none': 'border: none;',
  'border:width-1': 'border-width: 1px; border-style: solid;',
  'border:width-2': 'border-width: 2px; border-style: solid;',
  'border:radius-none': 'border-radius: 0px;',
  'border:radius-xs': 'border-radius: 4px;',
  'border:radius-sm': 'border-radius: 6px;',
  'border:radius-smooth': 'border-radius: 12px;',
  'border:radius-lg': 'border-radius: 16px;',
  'border:radius-xl': 'border-radius: 24px;',
  'border:radius-pill': 'border-radius: 9999px;',
  'border:radius-circle': 'border-radius: 50%;',

  // Shadows
  'shadow:none': 'box-shadow: none;',
  'shadow:sm': 'box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);',
  'shadow:md': 'box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);',
  'shadow:lg': 'box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);',
  'shadow:xl': 'box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);',
  'shadow:glow-blue': 'box-shadow: 0 0 20px rgba(59, 130, 246, 0.35);',
  'shadow:glow-indigo': 'box-shadow: 0 0 25px rgba(99, 102, 241, 0.35);',
  'shadow:glow-teal': 'box-shadow: 0 0 20px rgba(20, 184, 166, 0.35);',

  // Opacity & Transitions
  'opacity:0': 'opacity: 0;',
  'opacity:25': 'opacity: 0.25;',
  'opacity:50': 'opacity: 0.5;',
  'opacity:75': 'opacity: 0.75;',
  'opacity:100': 'opacity: 1;',
  'transition:fast': 'transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);',
  'transition:normal': 'transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);',
  'transition:smooth': 'transition: all 350ms cubic-bezier(0.16, 1, 0.3, 1);',
  'cursor:pointer': 'cursor: pointer;',
  'overflow:hidden': 'overflow: hidden;',
  'w:full': 'width: 100%;',
  'h:full': 'height: 100%;',

  // Short Aliases
  'bg:color-primary': 'background-color: #3b82f6;',
  'bg:color-secondary': 'background-color: #6366f1;',
  'bg:color-accent': 'background-color: #14b8a6;',
  'bg:color-white': 'background-color: #ffffff;',
  'bg:color-black': 'background-color: #000000;',
  'bg:color-transparent': 'background-color: transparent;',

  'text:color-primary': 'color: #3b82f6;',
  'text:color-secondary': 'color: #6366f1;',
  'text:color-white': 'color: #ffffff;',
  'text:color-black': 'color: #0f172a;',
  'text:color-slate': 'color: #64748b;',
  'text:color-muted': 'color: #94a3b8;',

  'border:color-primary': 'border-color: #3b82f6;',
  'border:color-secondary': 'border-color: #6366f1;',
  'border:color-slate': 'border-color: #cbd5e1;',
  'border:color-slate-dark': 'border-color: #334155;',
  'border:color-transparent': 'border-color: transparent;',
};

// Dynamically generate all 11 colors x 5 shades for bg, text, border
for (const [colorName, shades] of Object.entries(COLOR_PALETTES)) {
  for (const [shade, hex] of Object.entries(shades)) {
    BASE_RULES[`bg:color-${colorName}-${shade}`] = `background-color: ${hex};`;
    BASE_RULES[`text:color-${colorName}-${shade}`] = `color: ${hex};`;
    BASE_RULES[`border:color-${colorName}-${shade}`] = `border-color: ${hex};`;
  }
}

/**
 * Escapes characters for CSS class selectors (e.g. `layout:flex` -> `layout\:flex`)
 */
export function escapeCssSelector(className: string): string {
  return className.replace(/(:)/g, '\\:');
}

export interface ParseResult {
  selector: string;
  cssRule: string;
  isUnknown: boolean;
  rawClass: string;
}

/**
 * Parses a single ARTAPA class into its CSS rule representation
 */
export function parseArtapaClass(rawClass: string, customRules: Record<string, string> = {}): ParseResult {
  const allRules = { ...BASE_RULES, ...customRules };

  let token = rawClass;
  let breakpointPrefix = '';
  let statePrefix = '';

  // Check for breakpoint (sm:, md:, lg:, xl:)
  const bpMatch = token.match(/^(sm|md|lg|xl):/);
  if (bpMatch) {
    breakpointPrefix = bpMatch[1];
    token = token.slice(bpMatch[0].length);
  }

  // Check for state (hover:, focus:, active:)
  const stateMatch = token.match(/^(hover|focus|active):/);
  if (stateMatch) {
    statePrefix = stateMatch[1];
    token = token.slice(stateMatch[0].length);
  }

  const cssDeclaration = allRules[token];
  if (!cssDeclaration) {
    return {
      selector: `.${escapeCssSelector(rawClass)}`,
      cssRule: '',
      isUnknown: true,
      rawClass,
    };
  }

  const escapedSelector = `.${escapeCssSelector(rawClass)}`;
  const pseudo = statePrefix ? STATES[statePrefix] || '' : '';
  const fullSelector = `${escapedSelector}${pseudo}`;

  let cssBlock = `${fullSelector} { ${cssDeclaration} }`;

  if (breakpointPrefix && BREAKPOINTS[breakpointPrefix]) {
    const minWidth = BREAKPOINTS[breakpointPrefix];
    cssBlock = `@media (min-width: ${minWidth}px) {\n  ${cssBlock}\n}`;
  }

  return {
    selector: fullSelector,
    cssRule: cssBlock,
    isUnknown: false,
    rawClass,
  };
}

/**
 * Scans an HTML string or element classlist and returns all CSS rules generated
 */
export function generateCssFromHtml(html: string, customRules: Record<string, string> = {}): {
  cssText: string;
  knownClasses: string[];
  unknownClasses: string[];
  rulesCount: number;
} {
  // Extract all class="..." contents
  const classRegex = /class(?:Name)?=["']([^"']+)["']/g;
  const classSet = new Set<string>();

  let match;
  while ((match = classRegex.exec(html)) !== null) {
    const classList = match[1].trim().split(/\s+/);
    for (const cls of classList) {
      if (cls && (cls.includes(':') || BASE_RULES[cls])) {
        classSet.add(cls);
      }
    }
  }

  const generatedRules: string[] = [];
  const knownClasses: string[] = [];
  const unknownClasses: string[] = [];

  for (const rawClass of Array.from(classSet)) {
    const parsed = parseArtapaClass(rawClass, customRules);
    if (parsed.isUnknown) {
      unknownClasses.push(rawClass);
    } else {
      knownClasses.push(rawClass);
      generatedRules.push(parsed.cssRule);
    }
  }

  return {
    cssText: generatedRules.join('\n\n'),
    knownClasses,
    unknownClasses,
    rulesCount: knownClasses.length,
  };
}
