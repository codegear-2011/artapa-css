import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check, RotateCcw, X, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useThemeColor, COLOR_PRESETS, ColorPreset } from '../context/ThemeColorContext';

export const ColorPaletteFloatingPicker: React.FC = () => {
  const { currentPreset, setColorPreset, setCustomHex, resetDefaultColor } = useThemeColor();
  const [isOpen, setIsOpen] = useState(false);
  const [hexInput, setHexInput] = useState('');
  const popoverRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelectPreset = (preset: ColorPreset) => {
    setColorPreset(preset);
    confetti({ 
      particleCount: 20, 
      spread: 45, 
      origin: { x: 0.9, y: 0.85 },
      colors: [preset.primary, preset.hover, preset.border]
    });
  };

  const handleCustomHexSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let formatted = hexInput.trim();
    if (!formatted.startsWith('#')) formatted = '#' + formatted;
    if (/^#[0-9A-Fa-f]{6}$/.test(formatted) || /^#[0-9A-Fa-f]{3}$/.test(formatted)) {
      setCustomHex(formatted);
      confetti({ particleCount: 20, spread: 45, origin: { x: 0.9, y: 0.85 } });
      setHexInput('');
    }
  };

  return (
    <div ref={popoverRef} className="fixed bottom-5 right-5 z-40">
      
      {/* Floating Popover Menu */}
      {isOpen && (
        <div 
          className="absolute bottom-14 right-0 mb-2 w-72 sm:w-80 bg-white border border-slate-200 rounded-3xl shadow-2xl p-4 animate-fadeIn overflow-hidden"
          style={{ boxShadow: '0 20px 40px -15px rgba(0,0,0,0.15)' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div 
                className="w-7 h-7 rounded-xl flex items-center justify-center text-white"
                style={{ backgroundColor: currentPreset.primary }}
              >
                <Palette className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">থিম কালার নির্বাচন</h4>
                <p className="text-[10px] text-slate-500 font-medium">ওয়েবসাইটের অ্যাকসেন্ট কালার পরিবর্তন করুন</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={resetDefaultColor}
                title="ডিফল্ট সবুজ রঙে ফিরুন"
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Color Presets Grid */}
          <div className="grid grid-cols-5 gap-2.5 mb-3.5">
            {COLOR_PRESETS.map((preset) => {
              const isSelected = currentPreset.id === preset.id || currentPreset.primary.toLowerCase() === preset.primary.toLowerCase();
              return (
                <button
                  key={preset.id}
                  onClick={() => handleSelectPreset(preset)}
                  title={preset.name}
                  className="group relative flex flex-col items-center gap-1 focus:outline-none"
                >
                  <div 
                    className={`w-9 h-9 rounded-2xl flex items-center justify-center transition-all transform group-hover:scale-110 shadow-xs ${
                      isSelected 
                        ? 'ring-2 ring-offset-2 ring-slate-800 scale-105' 
                        : 'border border-black/10 hover:shadow-md'
                    }`}
                    style={{ backgroundColor: preset.primary }}
                  >
                    {isSelected && (
                      <Check className="w-4 h-4 text-white drop-shadow-sm" />
                    )}
                  </div>
                  <span className="text-[9px] text-slate-600 font-medium truncate w-full text-center">
                    {preset.name.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Custom Hex Input Form */}
          <form onSubmit={handleCustomHexSubmit} className="pt-2 border-t border-slate-100 flex items-center gap-2">
            <div className="relative flex-1">
              <input
                type="color"
                value={currentPreset.primary}
                onChange={(e) => setCustomHex(e.target.value)}
                className="absolute left-1.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-lg cursor-pointer border-0 bg-transparent p-0"
                title="রঙের প্যালেট ড্রপার"
              />
              <input
                type="text"
                value={hexInput}
                onChange={(e) => setHexInput(e.target.value)}
                placeholder={currentPreset.primary}
                className="w-full pl-9 pr-2 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white"
              />
            </div>
            <button
              type="submit"
              className="px-3 py-1.5 text-white rounded-xl text-xs font-bold transition-all shrink-0 active:scale-95 shadow-xs"
              style={{ backgroundColor: currentPreset.primary }}
            >
              সেট
            </button>
          </form>

        </div>
      )}

      {/* Floating Trigger Button on Bottom Right */}
      <button
        id="theme-color-palette-button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full shadow-xl flex items-center justify-center text-white transition-all transform hover:scale-110 active:scale-95 border-2 border-white/80 focus:outline-none"
        style={{ 
          backgroundColor: currentPreset.primary,
          boxShadow: `0 8px 24px -4px rgba(${currentPreset.rgb}, 0.5)`
        }}
        title="কালার প্যালেট: থিম কালার পরিবর্তন করুন"
        aria-label="Change Theme Accent Color"
      >
        <Palette className="w-5 h-5 sm:w-5.5 sm:h-5.5 transition-transform group-hover:rotate-12" />
      </button>

    </div>
  );
};
