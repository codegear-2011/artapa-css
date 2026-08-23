import { ColorFamily, ComponentSample, PlaygroundPreset, ComparisonFeature, ApiMethodDoc, ArtapaRule } from '../types';
import { COLOR_PALETTES } from '../lib/artapaEngine';

export const COLOR_FAMILIES: ColorFamily[] = [
  {
    name: 'slate',
    label: 'Slate',
    shades: [
      { shade: '100', hex: COLOR_PALETTES.slate['100'], bgClass: 'bg:color-slate-100', textClass: 'text:color-slate-100', borderClass: 'border:color-slate-100' },
      { shade: '300', hex: COLOR_PALETTES.slate['300'], bgClass: 'bg:color-slate-300', textClass: 'text:color-slate-300', borderClass: 'border:color-slate-300' },
      { shade: '500', hex: COLOR_PALETTES.slate['500'], bgClass: 'bg:color-slate-500', textClass: 'text:color-slate-500', borderClass: 'border:color-slate-500' },
      { shade: '700', hex: COLOR_PALETTES.slate['700'], bgClass: 'bg:color-slate-700', textClass: 'text:color-slate-700', borderClass: 'border:color-slate-700' },
      { shade: '900', hex: COLOR_PALETTES.slate['900'], bgClass: 'bg:color-slate-900', textClass: 'text:color-slate-900', borderClass: 'border:color-slate-900' },
    ],
  },
  {
    name: 'indigo',
    label: 'Indigo',
    shades: [
      { shade: '100', hex: COLOR_PALETTES.indigo['100'], bgClass: 'bg:color-indigo-100', textClass: 'text:color-indigo-100', borderClass: 'border:color-indigo-100' },
      { shade: '300', hex: COLOR_PALETTES.indigo['300'], bgClass: 'bg:color-indigo-300', textClass: 'text:color-indigo-300', borderClass: 'border:color-indigo-300' },
      { shade: '500', hex: COLOR_PALETTES.indigo['500'], bgClass: 'bg:color-indigo-500', textClass: 'text:color-indigo-500', borderClass: 'border:color-indigo-500' },
      { shade: '700', hex: COLOR_PALETTES.indigo['700'], bgClass: 'bg:color-indigo-700', textClass: 'text:color-indigo-700', borderClass: 'border:color-indigo-700' },
      { shade: '900', hex: COLOR_PALETTES.indigo['900'], bgClass: 'bg:color-indigo-900', textClass: 'text:color-indigo-900', borderClass: 'border:color-indigo-900' },
    ],
  },
  {
    name: 'blue',
    label: 'Blue',
    shades: [
      { shade: '100', hex: COLOR_PALETTES.blue['100'], bgClass: 'bg:color-blue-100', textClass: 'text:color-blue-100', borderClass: 'border:color-blue-100' },
      { shade: '300', hex: COLOR_PALETTES.blue['300'], bgClass: 'bg:color-blue-300', textClass: 'text:color-blue-300', borderClass: 'border:color-blue-300' },
      { shade: '500', hex: COLOR_PALETTES.blue['500'], bgClass: 'bg:color-blue-500', textClass: 'text:color-blue-500', borderClass: 'border:color-blue-500' },
      { shade: '700', hex: COLOR_PALETTES.blue['700'], bgClass: 'bg:color-blue-700', textClass: 'text:color-blue-700', borderClass: 'border:color-blue-700' },
      { shade: '900', hex: COLOR_PALETTES.blue['900'], bgClass: 'bg:color-blue-900', textClass: 'text:color-blue-900', borderClass: 'border:color-blue-900' },
    ],
  },
  {
    name: 'teal',
    label: 'Teal',
    shades: [
      { shade: '100', hex: COLOR_PALETTES.teal['100'], bgClass: 'bg:color-teal-100', textClass: 'text:color-teal-100', borderClass: 'border:color-teal-100' },
      { shade: '300', hex: COLOR_PALETTES.teal['300'], bgClass: 'bg:color-teal-300', textClass: 'text:color-teal-300', borderClass: 'border:color-teal-300' },
      { shade: '500', hex: COLOR_PALETTES.teal['500'], bgClass: 'bg:color-teal-500', textClass: 'text:color-teal-500', borderClass: 'border:color-teal-500' },
      { shade: '700', hex: COLOR_PALETTES.teal['700'], bgClass: 'bg:color-teal-700', textClass: 'text:color-teal-700', borderClass: 'border:color-teal-700' },
      { shade: '900', hex: COLOR_PALETTES.teal['900'], bgClass: 'bg:color-teal-900', textClass: 'text:color-teal-900', borderClass: 'border:color-teal-900' },
    ],
  },
  {
    name: 'purple',
    label: 'Purple',
    shades: [
      { shade: '100', hex: COLOR_PALETTES.purple['100'], bgClass: 'bg:color-purple-100', textClass: 'text:color-purple-100', borderClass: 'border:color-purple-100' },
      { shade: '300', hex: COLOR_PALETTES.purple['300'], bgClass: 'bg:color-purple-300', textClass: 'text:color-purple-300', borderClass: 'border:color-purple-300' },
      { shade: '500', hex: COLOR_PALETTES.purple['500'], bgClass: 'bg:color-purple-500', textClass: 'text:color-purple-500', borderClass: 'border:color-purple-500' },
      { shade: '700', hex: COLOR_PALETTES.purple['700'], bgClass: 'bg:color-purple-700', textClass: 'text:color-purple-700', borderClass: 'border:color-purple-700' },
      { shade: '900', hex: COLOR_PALETTES.purple['900'], bgClass: 'bg:color-purple-900', textClass: 'text:color-purple-900', borderClass: 'border:color-purple-900' },
    ],
  },
  {
    name: 'pink',
    label: 'Pink',
    shades: [
      { shade: '100', hex: COLOR_PALETTES.pink['100'], bgClass: 'bg:color-pink-100', textClass: 'text:color-pink-100', borderClass: 'border:color-pink-100' },
      { shade: '300', hex: COLOR_PALETTES.pink['300'], bgClass: 'bg:color-pink-300', textClass: 'text:color-pink-300', borderClass: 'border:color-pink-300' },
      { shade: '500', hex: COLOR_PALETTES.pink['500'], bgClass: 'bg:color-pink-500', textClass: 'text:color-pink-500', borderClass: 'border:color-pink-500' },
      { shade: '700', hex: COLOR_PALETTES.pink['700'], bgClass: 'bg:color-pink-700', textClass: 'text:color-pink-700', borderClass: 'border:color-pink-700' },
      { shade: '900', hex: COLOR_PALETTES.pink['900'], bgClass: 'bg:color-pink-900', textClass: 'text:color-pink-900', borderClass: 'border:color-pink-900' },
    ],
  },
  {
    name: 'green',
    label: 'Green',
    shades: [
      { shade: '100', hex: COLOR_PALETTES.green['100'], bgClass: 'bg:color-green-100', textClass: 'text:color-green-100', borderClass: 'border:color-green-100' },
      { shade: '300', hex: COLOR_PALETTES.green['300'], bgClass: 'bg:color-green-300', textClass: 'text:color-green-300', borderClass: 'border:color-green-300' },
      { shade: '500', hex: COLOR_PALETTES.green['500'], bgClass: 'bg:color-green-500', textClass: 'text:color-green-500', borderClass: 'border:color-green-500' },
      { shade: '700', hex: COLOR_PALETTES.green['700'], bgClass: 'bg:color-green-700', textClass: 'text:color-green-700', borderClass: 'border:color-green-700' },
      { shade: '900', hex: COLOR_PALETTES.green['900'], bgClass: 'bg:color-green-900', textClass: 'text:color-green-900', borderClass: 'border:color-green-900' },
    ],
  },
  {
    name: 'amber',
    label: 'Amber',
    shades: [
      { shade: '100', hex: COLOR_PALETTES.amber['100'], bgClass: 'bg:color-amber-100', textClass: 'text:color-amber-100', borderClass: 'border:color-amber-100' },
      { shade: '300', hex: COLOR_PALETTES.amber['300'], bgClass: 'bg:color-amber-300', textClass: 'text:color-amber-300', borderClass: 'border:color-amber-300' },
      { shade: '500', hex: COLOR_PALETTES.amber['500'], bgClass: 'bg:color-amber-500', textClass: 'text:color-amber-500', borderClass: 'border:color-amber-500' },
      { shade: '700', hex: COLOR_PALETTES.amber['700'], bgClass: 'bg:color-amber-700', textClass: 'text:color-amber-700', borderClass: 'border:color-amber-700' },
      { shade: '900', hex: COLOR_PALETTES.amber['900'], bgClass: 'bg:color-amber-900', textClass: 'text:color-amber-900', borderClass: 'border:color-amber-900' },
    ],
  },
  {
    name: 'orange',
    label: 'Orange',
    shades: [
      { shade: '100', hex: COLOR_PALETTES.orange['100'], bgClass: 'bg:color-orange-100', textClass: 'text:color-orange-100', borderClass: 'border:color-orange-100' },
      { shade: '300', hex: COLOR_PALETTES.orange['300'], bgClass: 'bg:color-orange-300', textClass: 'text:color-orange-300', borderClass: 'border:color-orange-300' },
      { shade: '500', hex: COLOR_PALETTES.orange['500'], bgClass: 'bg:color-orange-500', textClass: 'text:color-orange-500', borderClass: 'border:color-orange-500' },
      { shade: '700', hex: COLOR_PALETTES.orange['700'], bgClass: 'bg:color-orange-700', textClass: 'text:color-orange-700', borderClass: 'border:color-orange-700' },
      { shade: '900', hex: COLOR_PALETTES.orange['900'], bgClass: 'bg:color-orange-900', textClass: 'text:color-orange-900', borderClass: 'border:color-orange-900' },
    ],
  },
  {
    name: 'red',
    label: 'Red',
    shades: [
      { shade: '100', hex: COLOR_PALETTES.red['100'], bgClass: 'bg:color-red-100', textClass: 'text:color-red-100', borderClass: 'border:color-red-100' },
      { shade: '300', hex: COLOR_PALETTES.red['300'], bgClass: 'bg:color-red-300', textClass: 'text:color-red-300', borderClass: 'border:color-red-300' },
      { shade: '500', hex: COLOR_PALETTES.red['500'], bgClass: 'bg:color-red-500', textClass: 'text:color-red-500', borderClass: 'border:color-red-500' },
      { shade: '700', hex: COLOR_PALETTES.red['700'], bgClass: 'bg:color-red-700', textClass: 'text:color-red-700', borderClass: 'border:color-red-700' },
      { shade: '900', hex: COLOR_PALETTES.red['900'], bgClass: 'bg:color-red-900', textClass: 'text:color-red-900', borderClass: 'border:color-red-900' },
    ],
  },
  {
    name: 'gray',
    label: 'Gray',
    shades: [
      { shade: '100', hex: COLOR_PALETTES.gray['100'], bgClass: 'bg:color-gray-100', textClass: 'text:color-gray-100', borderClass: 'border:color-gray-100' },
      { shade: '300', hex: COLOR_PALETTES.gray['300'], bgClass: 'bg:color-gray-300', textClass: 'text:color-gray-300', borderClass: 'border:color-gray-300' },
      { shade: '500', hex: COLOR_PALETTES.gray['500'], bgClass: 'bg:color-gray-500', textClass: 'text:color-gray-500', borderClass: 'border:color-gray-500' },
      { shade: '700', hex: COLOR_PALETTES.gray['700'], bgClass: 'bg:color-gray-700', textClass: 'text:color-gray-700', borderClass: 'border:color-gray-700' },
      { shade: '900', hex: COLOR_PALETTES.gray['900'], bgClass: 'bg:color-gray-900', textClass: 'text:color-gray-900', borderClass: 'border:color-gray-900' },
    ],
  },
];

export const ARTAPA_RULES_LIST: ArtapaRule[] = [
  // Layout
  { class: 'layout:flex', css: 'display: flex;', namespace: 'layout', description: 'Creates a flexible flexbox container', category: 'Flexbox & Grid' },
  { class: 'layout:inline-flex', css: 'display: inline-flex;', namespace: 'layout', description: 'Creates an inline flexbox container', category: 'Flexbox & Grid' },
  { class: 'layout:grid', css: 'display: grid;', namespace: 'layout', description: 'Creates a CSS Grid container', category: 'Flexbox & Grid' },
  { class: 'layout:row', css: 'flex-direction: row;', namespace: 'layout', description: 'Sets flex items horizontally in a row', category: 'Flexbox & Grid' },
  { class: 'layout:col', css: 'flex-direction: column;', namespace: 'layout', description: 'Sets flex items vertically in a column', category: 'Flexbox & Grid' },
  { class: 'layout:wrap', css: 'flex-wrap: wrap;', namespace: 'layout', description: 'Allows flex items to wrap onto multiple lines', category: 'Flexbox & Grid' },
  { class: 'layout:grid-cols-2', css: 'grid-template-columns: repeat(2, minmax(0, 1fr));', namespace: 'layout', description: '2 equal column grid', category: 'Flexbox & Grid' },
  { class: 'layout:grid-cols-3', css: 'grid-template-columns: repeat(3, minmax(0, 1fr));', namespace: 'layout', description: '3 equal column grid', category: 'Flexbox & Grid' },

  // Alignment
  { class: 'align:start', css: 'align-items: flex-start;', namespace: 'align', description: 'Aligns items to the start of cross-axis', category: 'Alignment' },
  { class: 'align:center', css: 'align-items: center;', namespace: 'align', description: 'Centers items along cross-axis', category: 'Alignment' },
  { class: 'align:end', css: 'align-items: flex-end;', namespace: 'align', description: 'Aligns items to the end of cross-axis', category: 'Alignment' },
  { class: 'align:stretch', css: 'align-items: stretch;', namespace: 'align', description: 'Stretches items to fill container along cross-axis', category: 'Alignment' },

  // Justify
  { class: 'justify:start', css: 'justify-content: flex-start;', namespace: 'justify', description: 'Packs items toward start of main-axis', category: 'Justification' },
  { class: 'justify:center', css: 'justify-content: center;', namespace: 'justify', description: 'Centers items along main-axis', category: 'Justification' },
  { class: 'justify:between', css: 'justify-content: space-between;', namespace: 'justify', description: 'Distributes items with equal space between them', category: 'Justification' },
  { class: 'justify:around', css: 'justify-content: space-around;', namespace: 'justify', description: 'Distributes items with equal space around them', category: 'Justification' },

  // Typography
  { class: 'font:size-sm', css: 'font-size: 14px; line-height: 20px;', namespace: 'font', description: 'Small body text size (14px)', category: 'Typography' },
  { class: 'font:size-base', css: 'font-size: 16px; line-height: 24px;', namespace: 'font', description: 'Standard body text size (16px)', category: 'Typography' },
  { class: 'font:size-lg', css: 'font-size: 18px; line-height: 28px;', namespace: 'font', description: 'Large subtitle text size (18px)', category: 'Typography' },
  { class: 'font:size-xl', css: 'font-size: 20px; line-height: 28px;', namespace: 'font', description: 'Extra large heading size (20px)', category: 'Typography' },
  { class: 'font:size-2xl', css: 'font-size: 24px; line-height: 32px;', namespace: 'font', description: 'Section title size (24px)', category: 'Typography' },
  { class: 'font:size-3xl', css: 'font-size: 30px; line-height: 36px;', namespace: 'font', description: 'Hero heading size (30px)', category: 'Typography' },
  { class: 'font:weight-normal', css: 'font-weight: 400;', namespace: 'font', description: 'Normal font weight (400)', category: 'Typography' },
  { class: 'font:weight-medium', css: 'font-weight: 500;', namespace: 'font', description: 'Medium font weight (500)', category: 'Typography' },
  { class: 'font:weight-semibold', css: 'font-weight: 600;', namespace: 'font', description: 'Semibold font weight (600)', category: 'Typography' },
  { class: 'font:weight-bold', css: 'font-weight: 700;', namespace: 'font', description: 'Bold font weight (700)', category: 'Typography' },

  // Spacing
  { class: 'padding:xs', css: 'padding: 4px;', namespace: 'padding', description: 'Extra small padding (4px)', category: 'Spacing' },
  { class: 'padding:sm', css: 'padding: 8px;', namespace: 'padding', description: 'Small padding (8px)', category: 'Spacing' },
  { class: 'padding:md', css: 'padding: 16px;', namespace: 'padding', description: 'Medium base padding (16px)', category: 'Spacing' },
  { class: 'padding:lg', css: 'padding: 24px;', namespace: 'padding', description: 'Large container padding (24px)', category: 'Spacing' },
  { class: 'padding:xl', css: 'padding: 32px;', namespace: 'padding', description: 'Extra large spacious padding (32px)', category: 'Spacing' },
  { class: 'gap:sm', css: 'gap: 8px;', namespace: 'spacing', description: 'Small flex/grid gap (8px)', category: 'Spacing' },
  { class: 'gap:md', css: 'gap: 16px;', namespace: 'spacing', description: 'Medium flex/grid gap (16px)', category: 'Spacing' },
  { class: 'gap:lg', css: 'gap: 24px;', namespace: 'spacing', description: 'Large flex/grid gap (24px)', category: 'Spacing' },

  // Borders & Radius
  { class: 'border:width-1', css: 'border-width: 1px; border-style: solid;', namespace: 'border', description: '1px solid border width', category: 'Borders' },
  { class: 'border:width-2', css: 'border-width: 2px; border-style: solid;', namespace: 'border', description: '2px solid accent border', category: 'Borders' },
  { class: 'border:radius-sm', css: 'border-radius: 6px;', namespace: 'border', description: 'Subtle corner rounding (6px)', category: 'Borders' },
  { class: 'border:radius-smooth', css: 'border-radius: 12px;', namespace: 'border', description: 'Balanced smooth corner radius (12px)', category: 'Borders' },
  { class: 'border:radius-lg', css: 'border-radius: 16px;', namespace: 'border', description: 'Prominent rounded corners (16px)', category: 'Borders' },
  { class: 'border:radius-pill', css: 'border-radius: 9999px;', namespace: 'border', description: 'Full pill rounded shape for badges and buttons', category: 'Borders' },

  // Shadows
  { class: 'shadow:sm', css: 'box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);', namespace: 'shadow', description: 'Subtle ambient surface shadow', category: 'Effects' },
  { class: 'shadow:md', css: 'box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);', namespace: 'shadow', description: 'Standard card elevation shadow', category: 'Effects' },
  { class: 'shadow:lg', css: 'box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);', namespace: 'shadow', description: 'High lift elevation shadow', category: 'Effects' },
  { class: 'shadow:glow-indigo', css: 'box-shadow: 0 0 25px rgba(99, 102, 241, 0.35);', namespace: 'shadow', description: 'Cyberpunk style indigo neon glow', category: 'Effects' },
];

export const PLAYGROUND_PRESETS: PlaygroundPreset[] = [
  {
    id: 'saas-card',
    name: 'SaaS Feature Card',
    description: 'Modern feature card with badge, icon header, responsive layout and hover effects',
    icon: 'Sparkles',
    html: `<div layout:col padding:lg bg:color-slate-900 border:width-1 border:color-slate-700 border:radius-smooth shadow:lg>
  <div layout:flex align:center justify:between margin:sm>
    <span padding:xs padding:x-sm bg:color-indigo-900 text:color-indigo-300 font:size-xs font:weight-semibold border:radius-pill border:width-1 border:color-indigo-700>
      ⚡ AI-OPTIMIZED
    </span>
    <span font:size-xs text:color-slate-500 font:family-mono>v0.1.0</span>
  </div>

  <h3 font:size-xl font:weight-bold text:color-white margin:xs>
    Real-Time Runtime Engine
  </h3>
  
  <p font:size-sm text:color-slate-300 margin:sm>
    Only the CSS for classes actually used on the page is generated on the fly via MutationObserver.
  </p>

  <div layout:flex align:center gap:sm margin:md>
    <button bg:color-indigo-500 hover:bg:color-indigo-700 text:color-white font:size-sm font:weight-semibold padding:sm padding:x-md border:radius-smooth transition:smooth cursor:pointer>
      Explore Docs
    </button>
    <button bg:color-slate-800 hover:bg:color-slate-700 text:color-slate-100 font:size-sm font:weight-medium padding:sm padding:x-md border:width-1 border:color-slate-700 border:radius-smooth transition:smooth cursor:pointer>
      Copy CDN
    </button>
  </div>
</div>`,
  },
  {
    id: 'pricing-table',
    name: 'Pro Pricing Card',
    description: 'Tiered pricing card with featured highlight, feature list checkmarks and CTA',
    icon: 'CreditCard',
    html: `<div layout:col padding:xl bg:color-indigo-900 border:width-2 border:color-indigo-500 border:radius-smooth shadow:glow-indigo>
  <div layout:flex align:center justify:between>
    <h4 font:size-lg font:weight-bold text:color-white>Developer Pro</h4>
    <span padding:xs padding:x-sm bg:color-indigo-500 text:color-white font:size-xs font:weight-bold border:radius-pill>
      POPULAR
    </span>
  </div>

  <div layout:flex align:baseline gap:xs margin:md>
    <span font:size-3xl font:weight-extrabold text:color-white>$0</span>
    <span font:size-sm text:color-indigo-300>/ forever open-source</span>
  </div>

  <p font:size-sm text:color-indigo-100 margin:sm>
    Zero build steps, 2KB static css, and 100% LLM context accuracy.
  </p>

  <div layout:col gap:sm margin:md>
    <div layout:flex align:center gap:sm text:color-white font:size-sm>
      <span>✓</span> <span>Zero configuration required</span>
    </div>
    <div layout:flex align:center gap:sm text:color-white font:size-sm>
      <span>✓</span> <span>11 Colors × 5 Shades palette</span>
    </div>
    <div layout:flex align:center gap:sm text:color-white font:size-sm>
      <span>✓</span> <span>Full ai-rules.md prompt reference</span>
    </div>
  </div>

  <button bg:color-white hover:bg:color-indigo-100 text:color-indigo-900 font:size-sm font:weight-bold padding:md border:radius-smooth transition:smooth cursor:pointer margin:md>
    Get Started in 10s
  </button>
</div>`,
  },
  {
    id: 'profile-badge',
    name: 'Interactive Profile Widget',
    description: 'Avatar card with status indicator, metrics grid, and action pills',
    icon: 'UserCheck',
    html: `<div layout:flex align:center justify:between padding:md bg:color-slate-900 border:width-1 border:color-slate-700 border:radius-smooth>
  <div layout:flex align:center gap:md>
    <div padding:sm bg:color-blue-500 text:color-white font:size-lg font:weight-bold border:radius-circle layout:flex align:center justify:center>
      AC
    </div>
    <div layout:col>
      <div layout:flex align:center gap:xs>
        <span font:size-base font:weight-bold text:color-white>Artapa Developer</span>
        <span padding:xs bg:color-green-500 border:radius-circle></span>
      </div>
      <span font:size-xs text:color-slate-400 font:family-mono>@artapacss · Active</span>
    </div>
  </div>

  <button bg:color-blue-500 hover:bg:color-blue-700 text:color-white font:size-xs font:weight-semibold padding:sm padding:x-md border:radius-pill transition:fast cursor:pointer>
    Follow
  </button>
</div>`,
  },
  {
    id: 'hero-banner',
    name: 'Minimalist Hero Banner',
    description: 'Clean headline with dual action buttons and live tag list',
    icon: 'LayoutTemplate',
    html: `<div layout:col align:center justify:center padding:xl bg:color-slate-950 border:width-1 border:color-slate-800 border:radius-smooth text:align-center>
  <span padding:xs padding:x-sm bg:color-teal-900 text:color-teal-300 font:size-xs font:weight-semibold border:radius-pill border:width-1 border:color-teal-700 margin:sm>
    ZERO BUILD CONFIGURATION
  </span>
  <h2 font:size-3xl font:weight-extrabold text:color-white margin:xs>
    Style HTML at the Speed of Thought
  </h2>
  <p font:size-sm text:color-slate-400 margin:md>
    No Node.js, Webpack, or Vite required. Just drop a CDN script tag and start writing namespace classes.
  </p>
  <div layout:flex align:center justify:center gap:sm margin:sm>
    <button bg:color-teal-500 hover:bg:color-teal-700 text:color-white font:size-sm font:weight-bold padding:sm padding:x-lg border:radius-smooth cursor:pointer transition:smooth>
      Quick Install
    </button>
    <button bg:color-slate-900 hover:bg:color-slate-800 text:color-teal-300 border:width-1 border:color-teal-500 font:size-sm font:weight-semibold padding:sm padding:x-lg border:radius-smooth cursor:pointer transition:smooth>
      Interactive Demo
    </button>
  </div>
</div>`,
  },
];

export const COMPONENT_SAMPLES: ComponentSample[] = [
  {
    id: 'buttons-suite',
    title: 'Interactive Buttons Suite',
    category: 'buttons',
    description: 'Primary, Secondary, Outline, and Pill state-reactive buttons using hover/active modifiers.',
    tags: ['bg:color-*', 'hover:bg:color-*', 'border:radius-smooth', 'border:radius-pill'],
    htmlCode: `<div layout:flex layout:wrap align:center gap:md padding:lg bg:color-slate-900 border:radius-smooth border:width-1 border:color-slate-800>
  <button bg:color-indigo-500 hover:bg:color-indigo-700 active:bg:color-indigo-900 text:color-white font:size-sm font:weight-semibold padding:sm padding:x-md border:radius-smooth transition:fast cursor:pointer shadow:md>
    Primary Action
  </button>
  <button bg:color-teal-500 hover:bg:color-teal-700 text:color-white font:size-sm font:weight-semibold padding:sm padding:x-md border:radius-smooth transition:fast cursor:pointer>
    Teal Accent
  </button>
  <button bg:color-slate-800 hover:bg:color-slate-700 text:color-slate-100 font:size-sm font:weight-medium padding:sm padding:x-md border:width-1 border:color-slate-700 border:radius-smooth transition:fast cursor:pointer>
    Secondary Outline
  </button>
  <button bg:color-pink-500 hover:bg:color-pink-700 text:color-white font:size-xs font:weight-bold padding:sm padding:x-md border:radius-pill transition:smooth cursor:pointer>
    Pill Tag
  </button>
</div>`,
    tailwindCode: `<div class="flex flex-wrap items-center gap-4 p-6 bg-slate-900 rounded-xl border border-slate-800">
  <button class="bg-indigo-500 hover:bg-indigo-700 active:bg-indigo-900 text-white text-sm font-semibold py-2 px-4 rounded-xl transition-all duration-150 cursor-pointer shadow-md">
    Primary Action
  </button>
  <button class="bg-teal-500 hover:bg-teal-700 text-white text-sm font-semibold py-2 px-4 rounded-xl transition-all duration-150 cursor-pointer">
    Teal Accent
  </button>
  <button class="bg-slate-800 hover:bg-slate-700 text-slate-100 text-sm font-medium py-2 px-4 border border-slate-700 rounded-xl transition-all duration-150 cursor-pointer">
    Secondary Outline
  </button>
  <button class="bg-pink-500 hover:bg-pink-700 text-white text-xs font-bold py-2 px-4 rounded-full transition-all duration-300 cursor-pointer">
    Pill Tag
  </button>
</div>`,
  },
  {
    id: 'saas-metrics-card',
    title: 'Analytics Metrics Dashboard Card',
    category: 'cards',
    description: 'Data analytics summary card with growth badges, typography hierarchy, and subtle borders.',
    tags: ['layout:grid', 'font:size-2xl', 'text:color-green-500', 'bg:color-slate-900'],
    htmlCode: `<div layout:col padding:lg bg:color-slate-900 border:width-1 border:color-slate-800 border:radius-smooth shadow:md>
  <div layout:flex align:center justify:between margin:xs>
    <span font:size-sm text:color-slate-400 font:weight-medium>Total Runtime Builds</span>
    <span padding:xs padding:x-sm bg:color-green-900 text:color-green-300 font:size-xs font:weight-bold border:radius-pill>
      +28.4%
    </span>
  </div>
  <div font:size-3xl font:weight-extrabold text:color-white margin:xs>
    14,892,040
  </div>
  <div layout:flex align:center justify:between font:size-xs text:color-slate-400 margin:sm>
    <span>0ms Latency Average</span>
    <span text:color-indigo-400 font:weight-semibold>100% In-Browser</span>
  </div>
</div>`,
    tailwindCode: `<div class="flex flex-col p-6 bg-slate-900 border border-slate-800 rounded-xl shadow-md">
  <div class="flex items-center justify-between mb-2">
    <span class="text-sm text-slate-400 font-medium">Total Runtime Builds</span>
    <span class="py-1 px-2.5 bg-green-900/80 text-green-300 text-xs font-bold rounded-full border border-green-700/50">
      +28.4%
    </span>
  </div>
  <div class="text-3xl font-extrabold text-white mb-2 font-mono">
    14,892,040
  </div>
  <div class="flex items-center justify-between text-xs text-slate-400 mt-2 pt-2 border-t border-slate-800">
    <span>0ms Latency Average</span>
    <span class="text-indigo-400 font-semibold">100% In-Browser</span>
  </div>
</div>`,
  },
  {
    id: 'alert-feedback',
    title: 'Feedback & Notification Badges',
    category: 'feedback',
    description: 'System alert notifications with semantic background shades and interactive icons.',
    tags: ['bg:color-amber-900', 'border:color-amber-500', 'text:color-amber-100'],
    htmlCode: `<div layout:col gap:sm padding:md bg:color-slate-900 border:width-1 border:color-slate-800 border:radius-smooth>
  <div layout:flex align:center justify:between padding:sm padding:x-md bg:color-teal-900 border:width-1 border:color-teal-500 border:radius-smooth text:color-teal-100 font:size-sm>
    <div layout:flex align:center gap:sm>
      <span>✨</span>
      <span><strong>Runtime Active:</strong> 221 rules registered in memory.</span>
    </div>
    <span font:size-xs font:family-mono opacity:75>0.2ms</span>
  </div>

  <div layout:flex align:center justify:between padding:sm padding:x-md bg:color-amber-900 border:width-1 border:color-amber-500 border:radius-smooth text:color-amber-100 font:size-sm>
    <div layout:flex align:center gap:sm>
      <span>⚠️</span>
      <span><strong>Purge Notice:</strong> Static CSS mode recommended for high-load production.</span>
    </div>
    <span font:size-xs font:weight-bold text:color-amber-300>v0.1.0</span>
  </div>
</div>`,
    tailwindCode: `<div class="flex flex-col gap-3 p-4 bg-slate-900 border border-slate-800 rounded-xl">
  <div class="flex items-center justify-between py-2.5 px-4 bg-teal-950/80 border border-teal-500/50 rounded-xl text-teal-100 text-sm">
    <div class="flex items-center gap-2">
      <span>✨</span>
      <span><strong class="text-teal-200">Runtime Active:</strong> 221 rules registered in memory.</span>
    </div>
    <span class="text-xs font-mono text-teal-300/75">0.2ms</span>
  </div>

  <div class="flex items-center justify-between py-2.5 px-4 bg-amber-950/80 border border-amber-500/50 rounded-xl text-amber-100 text-sm">
    <div class="flex items-center gap-2">
      <span>⚠️</span>
      <span><strong class="text-amber-200">Purge Notice:</strong> Static CSS mode recommended.</span>
    </div>
    <span class="text-xs font-bold text-amber-300 font-mono">v0.1.0</span>
  </div>
</div>`,
  },
  {
    id: 'modern-form-input',
    title: 'Interactive Form & Floating Input',
    category: 'forms',
    description: 'Clean modern input field with focus state border and label hierarchy.',
    tags: ['focus:border:color-indigo-500', 'border:radius-smooth', 'bg:color-slate-950'],
    htmlCode: `<div layout:col gap:sm padding:lg bg:color-slate-900 border:width-1 border:color-slate-800 border:radius-smooth>
  <label font:size-xs font:weight-semibold text:color-slate-300>EMAIL ADDRESS</label>
  <input 
    type="email" 
    placeholder="developer@artapacss.dev" 
    padding:sm padding:x-md 
    bg:color-slate-950 
    text:color-white 
    border:width-1 
    border:color-slate-700 
    border:radius-smooth 
    font:size-sm 
    font:family-sans
  />
  <div layout:flex align:center justify:between margin:xs>
    <span font:size-xs text:color-slate-400>Zero spam. Only releases.</span>
    <button bg:color-indigo-500 hover:bg:color-indigo-700 text:color-white font:size-xs font:weight-bold padding:xs padding:x-md border:radius-smooth cursor:pointer>
      Subscribe
    </button>
  </div>
</div>`,
    tailwindCode: `<div class="flex flex-col gap-3 p-6 bg-slate-900 border border-slate-800 rounded-xl">
  <label class="text-xs font-semibold text-slate-300 uppercase tracking-wider">Email Address</label>
  <input 
    type="email" 
    placeholder="developer@artapacss.dev" 
    class="py-2.5 px-4 bg-slate-950 text-white border border-slate-700 rounded-xl text-sm placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all font-sans"
  />
  <div class="flex items-center justify-between mt-1">
    <span class="text-xs text-slate-400">Zero spam. Only releases.</span>
    <button class="bg-indigo-500 hover:bg-indigo-600 active:scale-95 text-white text-xs font-bold py-2 px-4 rounded-xl transition-all cursor-pointer">
      Subscribe
    </button>
  </div>
</div>`,
  },
];

export const COMPARISON_DATA: ComparisonFeature[] = [
  {
    feature: 'Zero-Config Setup (No Node.js / Vite / Webpack)',
    artapa: '✅ Native (1 script / link tag)',
    tailwind: '❌ Requires PostCSS / Vite build plugin',
    bulma: '✅ (Via compiled link tag)',
    bootstrap: '✅ (Via compiled link tag)',
    highlight: true,
  },
  {
    feature: 'AI Prompt / LLM Hallucination Resistant',
    artapa: '✅ 100% Strict Namespace Syntax (`layout:`, `font:`, `bg:`)',
    tailwind: '⚠️ Often mixes arbitrary values & colliding classes',
    bulma: '⚠️ Verbose modifier classes (`is-`, `has-`)',
    bootstrap: '⚠️ Inconsistent abbreviations (`mb-3`, `pt-2`)',
    highlight: true,
  },
  {
    feature: 'Real-time In-Browser Runtime Generation',
    artapa: '✅ Yes (Powered by MutationObserver)',
    tailwind: '❌ No (Build-time JIT only)',
    bulma: '❌ No (Static CSS only)',
    bootstrap: '❌ No (Static CSS only)',
    highlight: true,
  },
  {
    feature: 'Dual Shipping (Runtime JS + 2KB Static CSS)',
    artapa: '✅ Both available out-of-the-box',
    tailwind: '⚠️ Static generated per build only',
    bulma: '⚠️ Full monolithic CSS (~150KB+)',
    bootstrap: '⚠️ Full monolithic CSS (~200KB+)',
  },
  {
    feature: 'Incremental DOM Set Deduplication',
    artapa: '✅ Yes (Processes only new/changed elements)',
    tailwind: '❌ N/A (Server / compiler level)',
    bulma: '❌ N/A',
    bootstrap: '❌ N/A',
  },
  {
    feature: 'Interactive State & Breakpoint Modifiers',
    artapa: '✅ `hover:`, `focus:`, `active:`, `sm:`, `md:`, `lg:`, `xl:`',
    tailwind: '✅ Extensive variant modifiers',
    bulma: '⚠️ Limited breakpoint classes',
    bootstrap: '⚠️ Limited breakpoint utilities',
  },
  {
    feature: 'Public JS Runtime API (`ARTAPA.init()`, `.scan()`, `.extend()`)',
    artapa: '✅ First-class browser API',
    tailwind: '❌ None',
    bulma: '❌ None',
    bootstrap: '⚠️ JS component plugins only',
  },
];

export const API_METHODS: ApiMethodDoc[] = [
  {
    name: 'ARTAPA.init(rootEl)',
    signature: 'ARTAPA.init(rootEl?: HTMLElement): void',
    description: 'Starts or restarts the runtime scanning engine and attaches the real-time MutationObserver to the DOM tree.',
    example: `// Auto-starts by default. For custom container:
ARTAPA.init(document.getElementById("my-app"));`,
    category: 'core',
  },
  {
    name: 'ARTAPA.scan(rootEl)',
    signature: 'ARTAPA.scan(rootEl: HTMLElement): void',
    description: 'Manually triggers an immediate scan of a specific DOM subtree and generates all missing CSS rules instantly.',
    example: `const modal = document.createElement("div");
modal.className = "layout:flex padding:lg bg:color-slate-900";
ARTAPA.scan(modal);`,
    category: 'core',
  },
  {
    name: 'ARTAPA.extend(customRules)',
    signature: 'ARTAPA.extend(customRules: Record<string, string>): void',
    description: 'Dynamically injects new custom namespace rules into the active dictionary at runtime without touching build files.',
    example: `ARTAPA.extend({
  "spacing:super-jumbo": "padding: 80px;",
  "shadow:neon-matrix": "box-shadow: 0 0 30px #22c55e;"
});`,
    category: 'config',
  },
  {
    name: 'ARTAPA.setBreakpoint(name, minWidth)',
    signature: 'ARTAPA.setBreakpoint(name: string, minWidth: number): void',
    description: 'Adds or overrides a responsive media query breakpoint prefix at runtime.',
    example: `ARTAPA.setBreakpoint("xs", 480);
// Now you can write: xs:layout:col md:layout:row`,
    category: 'config',
  },
  {
    name: 'ARTAPA.setState(name, pseudoClass)',
    signature: 'ARTAPA.setState(name: string, pseudoClass: string): void',
    description: 'Adds or overrides an interactive pseudo-state modifier (e.g. disabled, checked, visited).',
    example: `ARTAPA.setState("disabled", ":disabled");
// Now you can write: disabled:opacity:50`,
    category: 'config',
  },
  {
    name: 'ARTAPA.getGeneratedCSS()',
    signature: 'ARTAPA.getGeneratedCSS(): string',
    description: 'Returns the exact formatted CSS string currently injected into `<style id="artapa-runtime-style">`.',
    example: `const currentCSS = ARTAPA.getGeneratedCSS();
console.log("Active CSS size:", currentCSS.length, "bytes");`,
    category: 'inspection',
  },
  {
    name: 'ARTAPA.getUnknownClasses()',
    signature: 'ARTAPA.getUnknownClasses(): string[]',
    description: 'Inspects DOM and returns an array of unrecognized class tokens. Perfect for catching AI hallucinations during development.',
    example: `const hallucinations = ARTAPA.getUnknownClasses();
if (hallucinations.length > 0) {
  console.warn("Unknown ARTAPA classes found:", hallucinations);
}`,
    category: 'inspection',
  },
  {
    name: 'ARTAPA.stop()',
    signature: 'ARTAPA.stop(): void',
    description: 'Disconnects the internal MutationObserver to freeze CSS generation and conserve browser CPU cycles.',
    example: `ARTAPA.stop(); // Stops watching DOM modifications`,
    category: 'core',
  },
];

export const AI_RULES_MARKDOWN = `# ARTAPA CSS — AI Context & Rules Document
**For Cursor, VS Code Copilot, ChatGPT, Claude, and Gemini**

You are an expert web developer writing HTML styled exclusively with **ARTAPA CSS**.

## Syntax Rules
1. Every class uses namespace-colon syntax: \`[namespace]:[value]\`.
2. Do NOT invent arbitrary utility classes like Tailwind (e.g., do NOT write \`flex\`, \`p-4\`, \`text-blue-500\`).
3. Always use the authentic ARTAPA namespaces below:

### Namespaces:
- Layout: \`layout:flex\`, \`layout:grid\`, \`layout:row\`, \`layout:col\`, \`layout:wrap\`, \`layout:hidden\`, \`layout:block\`, \`layout:grid-cols-2\`, \`layout:grid-cols-3\`
- Alignment: \`align:start\`, \`align:center\`, \`align:end\`, \`align:stretch\`
- Justify: \`justify:start\`, \`justify:center\`, \`justify:end\`, \`justify:between\`, \`justify:around\`
- Spacing: \`padding:xs\`, \`padding:sm\`, \`padding:md\`, \`padding:lg\`, \`padding:xl\`, \`padding:x-sm\`, \`padding:x-md\`, \`padding:y-sm\`, \`padding:y-md\`, \`margin:sm\`, \`margin:md\`, \`gap:sm\`, \`gap:md\`, \`gap:lg\`
- Typography: \`font:size-xs\`, \`font:size-sm\`, \`font:size-base\`, \`font:size-lg\`, \`font:size-xl\`, \`font:size-2xl\`, \`font:size-3xl\`, \`font:weight-normal\`, \`font:weight-medium\`, \`font:weight-semibold\`, \`font:weight-bold\`
- Colors (11 hues: slate, gray, red, orange, amber, green, teal, blue, indigo, purple, pink in 100/300/500/700/900):
  - \`bg:color-<hue>-<shade>\` e.g. \`bg:color-indigo-500\`
  - \`text:color-<hue>-<shade>\` e.g. \`text:color-white\`, \`text:color-slate-400\`
  - \`border:color-<hue>-<shade>\` e.g. \`border:color-slate-700\`
- Borders: \`border:width-1\`, \`border:width-2\`, \`border:radius-sm\`, \`border:radius-smooth\`, \`border:radius-lg\`, \`border:radius-pill\`, \`border:radius-circle\`
- Modifiers:
  - Interactive: \`hover:\`, \`focus:\`, \`active:\` (e.g. \`hover:bg:color-indigo-700\`)
  - Breakpoints: \`sm:\`, \`md:\`, \`lg:\`, \`xl:\` (e.g. \`md:layout:row\`)

### Example:
\`\`\`html
<div layout:flex align:center justify:between padding:md bg:color-slate-900 border:radius-smooth border:width-1 border:color-slate-700>
  <h3 font:size-lg font:weight-semibold text:color-white>ARTAPA Card</h3>
  <button bg:color-indigo-500 hover:bg:color-indigo-700 text:color-white padding:sm padding:x-md border:radius-smooth cursor:pointer>
    Click
  </button>
</div>
\`\`\`
`;
