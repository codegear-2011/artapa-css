import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { LogoProvider } from './context/LogoContext';
import { ThemeColorProvider } from './context/ThemeColorContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TwoWaysSection } from './components/TwoWaysSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ComponentShowcase } from './components/ComponentShowcase';
import { ComparisonSection } from './components/ComparisonSection';
import { CommandPalette } from './components/CommandPalette';
import { ColorPaletteFloatingPicker } from './components/ColorPaletteFloatingPicker';
import { Footer } from './components/Footer';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeColorProvider>
      <LogoProvider>
        <div className="min-h-screen bg-white text-slate-900 antialiased font-sans">
          
          {/* Top Fixed Navigation */}
          <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

          {/* Main Page Sections */}
          <main>
            {/* 1. Clean, Modern Hero Section with 1-Click Installation */}
            <HeroSection />

            {/* 2. Dual Shipping Modes (Runtime JS vs Static CSS) */}
            <TwoWaysSection />

            {/* 3. How It Works Pipeline Architecture Steps */}
            <HowItWorksSection />

            {/* 4. Pre-Built UI Component Showcase */}
            <ComponentShowcase />

            {/* 5. Framework Comparison Benchmark */}
            <ComparisonSection />
          </main>

          {/* Command Palette Modal (Ctrl+K / ⌘K) */}
          <CommandPalette 
            isOpen={isSearchOpen} 
            onClose={() => setIsSearchOpen(false)} 
          />

          {/* Floating Color Palette Picker on Bottom-Right */}
          <ColorPaletteFloatingPicker />

          {/* Footer */}
          <Footer />

        </div>
      </LogoProvider>
    </ThemeColorProvider>
  );
}
