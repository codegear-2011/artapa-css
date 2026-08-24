import React from 'react';
import { Heart } from 'lucide-react';
import { useLogo } from '../context/LogoContext';
import { useThemeColor } from '../context/ThemeColorContext';

export const Footer: React.FC = () => {
  const { logoUrl } = useLogo();
  const { currentPreset } = useThemeColor();

  return (
    <footer className="bg-white text-slate-600 text-xs border-t border-slate-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-2xl bg-white border-2 p-0.5 shadow-md flex items-center justify-center overflow-hidden"
                style={{ 
                  borderColor: currentPreset.primary,
                  boxShadow: `0 4px 12px 0 rgba(${currentPreset.rgb}, 0.15)`
                }}
              >
                {logoUrl ? (
                  <img 
                    src={logoUrl} 
                    alt="Brand Logo" 
                    className="w-full h-full object-contain rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div 
                    className="w-full h-full rounded-xl flex items-center justify-center text-white font-mono font-extrabold text-base"
                    style={{ backgroundColor: currentPreset.primary }}
                  >
                    A:
                  </div>
                )}
              </div>
              <span className="font-extrabold text-lg tracking-tight text-slate-900 font-sans">
                ARTAPA<span style={{ color: currentPreset.primary }}>CSS</span>
              </span>
            </div>

            <p className="text-slate-600 text-xs leading-relaxed max-w-sm">
              Zero-config runtime CSS framework with namespace syntax. Real-time in-browser CSS generation via MutationObserver — or 2KB static pre-compiled stylesheet.
            </p>

            <div className="pt-2 text-[11px] text-slate-500 font-mono">
              Released under the <strong>MIT License</strong>. Free for commercial & personal projects.
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-3 font-mono">
              Navigation
            </span>
            <ul className="space-y-2.5">
              <li>
                <a href="#two-ways" className="hover:text-slate-900 transition-colors font-medium">Dual Shipping Modes</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-slate-900 transition-colors font-medium">How It Works</a>
              </li>
              <li>
                <a href="#components" className="hover:text-slate-900 transition-colors font-medium">UI Components</a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-slate-900 transition-colors font-medium">Framework Benchmark</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Documentation & CDN */}
          <div className="lg:col-span-2">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-3 font-mono">
              CDN Endpoints
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 font-mono text-[11px] text-slate-800">
                <span className="font-bold block mb-1" style={{ color: currentPreset.primary }}>JS Runtime Engine</span>
                <span className="text-slate-600 block text-[10px] break-all">
                  cdn.jsdelivr.net/.../core.min.js (~4KB)
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 font-mono text-[11px] text-slate-800">
                <span className="font-bold block mb-1" style={{ color: currentPreset.primary }}>Static CSS File</span>
                <span className="text-slate-600 block text-[10px] break-all">
                  cdn.jsdelivr.net/.../artapa.min.css (~2KB)
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for modern web development</span>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
            <span>ARTAPA CSS Framework • MIT Licensed</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
