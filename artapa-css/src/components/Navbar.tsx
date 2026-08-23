import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Menu, 
  X,
  Code2,
  BookOpen,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLogo } from '../context/LogoContext';
import { useThemeColor } from '../context/ThemeColorContext';

interface NavbarProps {
  onOpenSearch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [starCount, setStarCount] = useState(1284);
  const [hasStarred, setHasStarred] = useState(false);
  
  const { logoUrl } = useLogo();
  const { currentPreset } = useThemeColor();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStar = () => {
    if (!hasStarred) {
      setStarCount(prev => prev + 1);
      setHasStarred(true);
      confetti({ 
        particleCount: 45, 
        spread: 65, 
        origin: { y: 0.1, x: 0.85 },
        colors: [currentPreset.primary, '#f59e0b', '#fbbf24']
      });
    }
  };

  const navLinks = [
    { label: 'Playground', href: '#playground', icon: Code2 },
    { label: 'Documentation', href: '#documentation', icon: BookOpen },
    { label: 'Get the AI skill', href: '#ai-skill', icon: Sparkles },
  ];

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm' 
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 group">
              <div 
                className="w-10 h-10 rounded-2xl bg-white border-2 p-0.5 shadow-md flex items-center justify-center overflow-hidden transition-all group-hover:scale-105"
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

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-xl tracking-tight text-slate-900 font-sans">
                    ARTAPA<span style={{ color: currentPreset.primary }}>CSS</span>
                  </span>
                  <span 
                    className="hidden sm:inline-flex items-center px-2 py-0.5 text-[11px] font-mono font-semibold border rounded-full"
                    style={{ 
                      backgroundColor: currentPreset.light,
                      borderColor: currentPreset.border,
                      color: currentPreset.primary
                    }}
                  >
                    v0.1.0-beta.1
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 hidden sm:block font-medium">
                  Zero-Config Runtime CSS Framework
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Links: Playground, Documentation, Get the AI skill */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-all flex items-center gap-2 group"
                >
                  <Icon className="w-4 h-4 text-slate-400 group-hover:text-slate-700" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Tools: GitHub Star & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* GitHub Star Button */}
            <button
              id="github-star-button"
              onClick={handleStar}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl border transition-all ${
                hasStarred 
                  ? 'bg-amber-50 border-amber-300 text-amber-800'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Github className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Star</span>
              <span className="px-1.5 py-0.2 bg-white rounded-md border border-slate-200 font-mono text-[11px] font-bold text-slate-800">
                {starCount.toLocaleString()}
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 border border-slate-200"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-fadeIn">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-slate-400" />
                  <span>{link.label}</span>
                </div>
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};
