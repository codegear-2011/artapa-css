import React, { useState } from 'react';
import { 
  Zap, 
  FileCode, 
  Copy, 
  Check, 
  RefreshCw, 
  Layers, 
  CheckCircle2 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useThemeColor } from '../context/ThemeColorContext';

export const TwoWaysSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'runtime' | 'static'>('runtime');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { currentPreset } = useThemeColor();

  const copySnippet = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    confetti({ 
      particleCount: 25, 
      spread: 50,
      colors: [currentPreset.primary, currentPreset.hover, currentPreset.border]
    });
    setTimeout(() => setCopiedId(null), 2000);
  };

  const runtimeScript = `<script src="https://cdn.jsdelivr.net/gh/artapacss/artapa-css@v0.1.0-beta.1/dist/core.min.js"></script>`;
  const staticCssLink = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/artapacss/artapa-css@v0.1.0-beta.1/dist/artapa.min.css">`;

  return (
    <section id="two-ways" className="py-20 bg-slate-50 relative border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold mb-3 border"
            style={{ 
              backgroundColor: currentPreset.light,
              borderColor: currentPreset.border,
              color: currentPreset.primary
            }}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>TWO CONVENIENT SHIPPING MODES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Dual Shipping Modes
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            ARTAPA CSS ships in two convenient forms — pick whichever matches your architecture and workflow.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <button
              onClick={() => setActiveTab('runtime')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'runtime'
                  ? 'text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              style={activeTab === 'runtime' ? { 
                backgroundColor: currentPreset.primary,
                boxShadow: `0 4px 14px 0 rgba(${currentPreset.rgb}, 0.35)`
              } : {}}
            >
              <Zap className="w-4 h-4 text-white/90" />
              <span>Option 1: Runtime Engine (JS)</span>
              <span className="px-2 py-0.5 bg-white/20 text-white text-[10px] rounded-full uppercase font-mono font-semibold">
                Zero-Config
              </span>
            </button>

            <button
              onClick={() => setActiveTab('static')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'static'
                  ? 'text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              style={activeTab === 'static' ? { 
                backgroundColor: currentPreset.primary,
                boxShadow: `0 4px 14px 0 rgba(${currentPreset.rgb}, 0.35)`
              } : {}}
            >
              <FileCode className="w-4 h-4 text-white/90" />
              <span>Option 2: Static artapa.css</span>
              <span className="px-2 py-0.5 bg-white/20 text-white text-[10px] rounded-full uppercase font-mono font-semibold">
                ~2KB Fast
              </span>
            </button>
          </div>
        </div>

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Option 1 Card */}
          <div 
            className={`p-6 sm:p-8 rounded-3xl border transition-all cursor-pointer bg-white ${
              activeTab === 'runtime' 
                ? 'shadow-xl' 
                : 'border-slate-200 hover:border-slate-300 opacity-90'
            }`}
            style={activeTab === 'runtime' ? { 
              borderColor: currentPreset.primary,
              boxShadow: `0 20px 35px -10px rgba(${currentPreset.rgb}, 0.15)`
            } : {}}
            onClick={() => setActiveTab('runtime')}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-2xl border flex items-center justify-center"
                  style={{ 
                    backgroundColor: currentPreset.light,
                    borderColor: currentPreset.border,
                    color: currentPreset.primary
                  }}
                >
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Runtime Engine (JS)</h3>
                  <span className="text-xs font-semibold" style={{ color: currentPreset.primary }}>
                    Recommended for rapid prototyping & web apps
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-lg font-bold">
                core.min.js (~4KB)
              </span>
            </div>

            <p className="text-sm text-slate-600 mb-5 leading-relaxed">
              Only the CSS for classes actually used on the page is generated in real time in the browser (powered by <code>MutationObserver</code>). Best for instant experiments and dynamic single page apps.
            </p>

            {/* Code Box */}
            <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200 mb-5 font-mono text-xs text-slate-800 flex items-center justify-between gap-3">
              <code className="truncate font-bold" style={{ color: currentPreset.primary }}>
                {runtimeScript}
              </code>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  copySnippet(runtimeScript, 'opt1');
                }}
                className="p-1.5 text-white rounded-lg transition-colors shrink-0 shadow-sm"
                style={{ backgroundColor: currentPreset.primary }}
              >
                {copiedId === 'opt1' ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Feature points */}
            <div className="space-y-2.5 text-xs text-slate-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: currentPreset.primary }} />
                <span>Zero build config, no Node.js, Vite, or bundler needed</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: currentPreset.primary }} />
                <span>Real-time incremental scanning via <code>MutationObserver</code></span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: currentPreset.primary }} />
                <span>Supports combined state + responsive prefixes</span>
              </div>
            </div>
          </div>

          {/* Option 2 Card */}
          <div 
            className={`p-6 sm:p-8 rounded-3xl border transition-all cursor-pointer bg-white ${
              activeTab === 'static' 
                ? 'shadow-xl' 
                : 'border-slate-200 hover:border-slate-300 opacity-90'
            }`}
            style={activeTab === 'static' ? { 
              borderColor: currentPreset.primary,
              boxShadow: `0 20px 35px -10px rgba(${currentPreset.rgb}, 0.15)`
            } : {}}
            onClick={() => setActiveTab('static')}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-2xl border flex items-center justify-center"
                  style={{ 
                    backgroundColor: currentPreset.light,
                    borderColor: currentPreset.border,
                    color: currentPreset.primary
                  }}
                >
                  <FileCode className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Static artapa.css</h3>
                  <span className="text-xs font-semibold" style={{ color: currentPreset.primary }}>
                    No JavaScript, ultra-light for production
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-lg font-bold">
                artapa.min.css (~2KB)
              </span>
            </div>

            <p className="text-sm text-slate-600 mb-5 leading-relaxed">
              A plain, pre-compiled CSS file — every namespace:value class is already written out (~2KB minified). No runtime JavaScript or MutationObserver needed; it works exactly like a normal stylesheet.
            </p>

            {/* Code Box */}
            <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200 mb-5 font-mono text-xs text-slate-800 flex items-center justify-between gap-3">
              <code className="truncate font-bold" style={{ color: currentPreset.primary }}>
                {staticCssLink}
              </code>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  copySnippet(staticCssLink, 'opt2');
                }}
                className="p-1.5 text-white rounded-lg transition-colors shrink-0 shadow-sm"
                style={{ backgroundColor: currentPreset.primary }}
              >
                {copiedId === 'opt2' ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Feature points */}
            <div className="space-y-2.5 text-xs text-slate-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: currentPreset.primary }} />
                <span>Zero runtime JavaScript execution overhead</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: currentPreset.primary }} />
                <span>Single <code>&lt;link&gt;</code> tag with tiny ~2KB payload</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: currentPreset.primary }} />
                <span>Generated from the exact same source dictionary</span>
              </div>
            </div>
          </div>

        </div>

        {/* Sync Guarantee Callout */}
        <div className="mt-8 max-w-5xl mx-auto p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-3 text-xs text-slate-600">
          <RefreshCw className="w-4 h-4 shrink-0" style={{ color: currentPreset.primary }} />
          <span>
            <strong>Single Source of Truth:</strong> <code>dist/artapa.css</code> and the <code>RULES</code> object inside <code>dist/core.js</code> are both generated from the same source.
          </span>
        </div>

      </div>
    </section>
  );
};
