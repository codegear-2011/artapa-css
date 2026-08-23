import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, Check, BookOpen, Layers, Code2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ARTAPA_RULES_LIST } from '../data/artapaData';
import { useThemeColor } from '../context/ThemeColorContext';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [copiedToken, setCopiedToken] = useState<string | null>(null);
  const { currentPreset } = useThemeColor();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickNav = [
    { title: 'Dual Shipping Modes', href: '#two-ways', icon: Layers, desc: 'Runtime JS (core.js) vs Static CSS' },
    { title: 'How It Works', href: '#how-it-works', icon: BookOpen, desc: 'DOM Scanner & MutationObserver' },
    { title: 'UI Components', href: '#components', icon: Code2, desc: 'Buttons, Cards, Badges, Modals' },
    { title: 'Framework Benchmark', href: '#comparison', icon: Layers, desc: 'ARTAPA vs Tailwind vs Bulma' },
  ];

  const matchedRules = query.trim() === ''
    ? []
    : ARTAPA_RULES_LIST.filter(r => 
        r.class.toLowerCase().includes(query.toLowerCase()) ||
        r.css.toLowerCase().includes(query.toLowerCase()) ||
        r.description.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8);

  const handleCopy = (token: string) => {
    navigator.clipboard.writeText(token);
    setCopiedToken(token);
    confetti({ 
      particleCount: 20, 
      spread: 40,
      colors: [currentPreset.primary, currentPreset.hover, currentPreset.border]
    });
    setTimeout(() => {
      setCopiedToken(null);
      onClose();
    }, 800);
  };

  const handleNavigate = (href: string) => {
    onClose();
    window.location.hash = href;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      
      <div 
        className="w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-5 py-4 border-b border-slate-100 gap-3">
          <Search className="w-5 h-5 shrink-0" style={{ color: currentPreset.primary }} />
          <input
            type="text"
            placeholder="Search ARTAPA classes (e.g. layout:flex, bg:color-green-700) or sections..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none font-mono"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results List */}
        <div className="p-4 max-h-[380px] overflow-y-auto custom-scroll space-y-1">
          
          {query.trim() === '' ? (
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block px-3 py-1.5 font-mono">
                Quick Jump to Section:
              </span>
              {quickNav.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.title}
                    onClick={() => handleNavigate(item.href)}
                    className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 text-left transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="p-2 rounded-xl transition-colors"
                        style={{ 
                          backgroundColor: currentPreset.light,
                          color: currentPreset.primary
                        }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-slate-800">
                          {item.title}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {item.desc}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors" />
                  </button>
                );
              })}
            </div>
          ) : matchedRules.length > 0 ? (
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block px-3 py-1.5 font-mono">
                Matching ARTAPA Classes ({matchedRules.length}):
              </span>
              {matchedRules.map((rule) => (
                <button
                  key={rule.class}
                  onClick={() => handleCopy(rule.class)}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 text-left transition-colors group font-mono text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-bold" style={{ color: currentPreset.primary }}>
                      {rule.class}
                    </span>
                    <span className="text-slate-500 text-[11px]">
                      → {rule.css}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-sans flex items-center gap-1">
                    {copiedToken === rule.class ? (
                      <span className="font-bold flex items-center gap-1" style={{ color: currentPreset.primary }}>
                        <Check className="w-3 h-3" /> Copied!
                      </span>
                    ) : (
                      <span>Copy</span>
                    )}
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="py-8 text-center text-xs text-slate-400 font-sans">
              No matching ARTAPA classes or sections found for "{query}".
            </div>
          )}

        </div>

        {/* Footer info */}
        <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>Tip: Press ESC to close</span>
          <span>ARTAPA v0.1.0-beta.1</span>
        </div>

      </div>

    </div>
  );
};
