import React, { useState } from 'react';
import { 
  Terminal, 
  Copy, 
  Check, 
  Github,
  BookOpen,
  FileCode,
  ShieldCheck,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useThemeColor } from '../context/ThemeColorContext';

export const HeroSection: React.FC = () => {
  const [activeModeTab, setActiveModeTab] = useState<'runtime' | 'static'>('runtime');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const { currentPreset } = useThemeColor();

  const runtimeScriptCode = `<script src="https://cdn.jsdelivr.net/gh/artapacss/artapa-css@v0.1.0-beta.1/dist/core.min.js"></script>`;
  const staticCssCode = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/artapacss/artapa-css@v0.1.0-beta.1/dist/artapa.min.css">`;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    confetti({ 
      particleCount: 35, 
      spread: 60, 
      origin: { y: 0.2 },
      colors: [currentPreset.primary, currentPreset.hover, currentPreset.border]
    });
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section className="relative pt-28 sm:pt-36 pb-20 md:pb-28 bg-white overflow-hidden">
      
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-75 pointer-events-none" />
      
      {/* Soft Ambient Dynamic Glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[380px] blur-[130px] rounded-full pointer-events-none animate-pulse-glow"
        style={{ backgroundColor: `rgba(${currentPreset.rgb}, 0.12)` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Release Pill Badge */}
        <div className="flex justify-center mb-6">
          <div 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border shadow-xs"
            style={{ 
              backgroundColor: currentPreset.light,
              borderColor: currentPreset.border,
            }}
          >
            <span className="flex h-2 w-2 relative">
              <span 
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: currentPreset.primary }}
              />
              <span 
                className="relative inline-flex rounded-full h-2 w-2"
                style={{ backgroundColor: currentPreset.primary }}
              />
            </span>
            <span 
              className="text-xs font-bold font-mono"
              style={{ color: currentPreset.primary }}
            >
              ARTAPA CSS v0.1.0
            </span>
            <span className="text-xs text-slate-500 font-medium hidden sm:inline">
              — Zero Build Config • Pure Runtime & Static CSS
            </span>
          </div>
        </div>

        {/* Hero Title & Subheading */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Zero-Config,{' '}
            <span style={{ color: currentPreset.primary }}>
              Namespace Runtime
            </span>{' '}
            CSS Framework.
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Write clean, predictable namespace classes like{' '}
            <code 
              className="font-mono text-sm px-2 py-0.5 rounded-lg border font-bold"
              style={{ 
                color: currentPreset.primary,
                backgroundColor: currentPreset.light,
                borderColor: currentPreset.border
              }}
            >
              layout:flex
            </code>{' '}
            and{' '}
            <code 
              className="font-mono text-sm px-2 py-0.5 rounded-lg border font-bold"
              style={{ 
                color: currentPreset.primary,
                backgroundColor: currentPreset.light,
                borderColor: currentPreset.border
              }}
            >
              bg:color-green-700
            </code>
            . Instant in-browser CSS generation via MutationObserver — or a tiny ~2KB pre-compiled stylesheet.
          </p>
        </div>

        {/* Quick CTA Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{ 
              backgroundColor: currentPreset.primary,
              boxShadow: `0 10px 25px -5px rgba(${currentPreset.rgb}, 0.3)`
            }}
          >
            <Github className="w-4 h-4 text-white/90" />
            <span>View on GitHub</span>
          </a>

          <a
            href="#documentation"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <BookOpen className="w-4 h-4" style={{ color: currentPreset.primary }} />
            <span>Documentation</span>
          </a>
        </div>

        {/* 1-Click Installation Snippet Bar */}
        <div className="max-w-2xl mx-auto mb-14">
          <div className="bg-white border border-slate-200 rounded-2xl p-2.5 shadow-xl">
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveModeTab('runtime')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    activeModeTab === 'runtime'
                      ? 'text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-900 bg-slate-50'
                  }`}
                  style={activeModeTab === 'runtime' ? { backgroundColor: currentPreset.primary } : {}}
                >
                  ⚡ Option 1: Runtime JS (~4KB)
                </button>
                <button
                  onClick={() => setActiveModeTab('static')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    activeModeTab === 'static'
                      ? 'text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-900 bg-slate-50'
                  }`}
                  style={activeModeTab === 'static' ? { backgroundColor: currentPreset.primary } : {}}
                >
                  📦 Option 2: Static CSS (~2KB)
                </button>
              </div>

              <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
                {activeModeTab === 'runtime' ? 'In-Browser JIT' : 'Zero JS, Pre-compiled'}
              </span>
            </div>

            <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl mt-2 font-mono text-xs text-slate-800 overflow-x-auto gap-3 border border-slate-200">
              <code className="text-slate-700 truncate font-semibold">
                {activeModeTab === 'runtime' ? runtimeScriptCode : staticCssCode}
              </code>
              <button
                onClick={() =>
                  copyToClipboard(
                    activeModeTab === 'runtime' ? runtimeScriptCode : staticCssCode,
                    'hero-install'
                  )
                }
                className="flex items-center gap-1.5 px-3 py-1.5 text-white rounded-lg text-xs font-bold transition-all shrink-0 shadow-sm"
                style={{ backgroundColor: currentPreset.primary }}
              >
                {copiedCode === 'hero-install' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-white" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Tag</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Feature Highlights Bento Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition-colors">
            <div 
              className="font-mono font-bold text-2xl mb-1"
              style={{ color: currentPreset.primary }}
            >
              ~2 KB
            </div>
            <div className="text-sm font-bold text-slate-900">
              Minified Static CSS
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              Or ~4KB JS Runtime Engine
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition-colors">
            <div 
              className="font-mono font-bold text-2xl mb-1"
              style={{ color: currentPreset.primary }}
            >
              0 Build Steps
            </div>
            <div className="text-sm font-bold text-slate-900">
              Pure In-Browser JIT
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              No Node, Vite or PostCSS
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition-colors">
            <div 
              className="font-mono font-bold text-2xl mb-1"
              style={{ color: currentPreset.primary }}
            >
              100% Dynamic
            </div>
            <div className="text-sm font-bold text-slate-900">
              MutationObserver
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              Real-time DOM generation
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition-colors">
            <div 
              className="font-mono font-bold text-2xl mb-1"
              style={{ color: currentPreset.primary }}
            >
              Clean Syntax
            </div>
            <div className="text-sm font-bold text-slate-900">
              Strict Namespaces
            </div>
            <div className="text-xs text-slate-500 mt-0.5">
              layout:, bg:, border:, font:
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
