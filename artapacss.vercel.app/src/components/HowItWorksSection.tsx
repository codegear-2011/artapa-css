import React from 'react';
import { 
  Cpu, 
  Scan, 
  Eye, 
  Filter, 
  Activity,
  CheckCircle2
} from 'lucide-react';
import { useThemeColor } from '../context/ThemeColorContext';

export const HowItWorksSection: React.FC = () => {
  const { currentPreset } = useThemeColor();

  const steps = [
    {
      step: 1,
      title: 'Initial DOM Scan & Injection',
      desc: 'As soon as core.min.js loads, it scans the <body> and generates CSS for the classes in use, injecting them into a <style id="artapa-runtime-style"> tag.',
      icon: Scan,
      badge: 'Zero-Latency',
    },
    {
      step: 2,
      title: 'MutationObserver Hook',
      desc: 'A browser MutationObserver monitors element additions, removals, and class attribute changes in real time, detecting on-the-fly DOM mutations.',
      icon: Eye,
      badge: 'Real-Time Reactive',
    },
    {
      step: 3,
      title: 'Selective Rule Generation',
      desc: 'Only rules for classes actually used are generated — the entire dictionary is never processed at once, keeping execution times under 0.5ms.',
      icon: Filter,
      badge: 'JIT Efficiency',
    },
    {
      step: 4,
      title: 'Incremental Cache (Set)',
      desc: 'Classes already processed are cached in an internal Set. Edits are purely incremental — adding a new button compiles only its new tokens.',
      icon: Cpu,
      badge: 'O(1) Deduplication',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white text-slate-900 relative border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold mb-3 border"
            style={{ 
              backgroundColor: currentPreset.light,
              borderColor: currentPreset.border,
              color: currentPreset.primary
            }}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>UNDER THE HOOD ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            How ARTAPA CSS Works
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            A high-performance runtime pipeline designed for instant in-browser CSS generation without build tools.
          </p>
        </div>

        {/* 4 Steps Visual Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="p-6 rounded-3xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className="w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-sm text-white shadow-sm"
                      style={{ backgroundColor: currentPreset.primary }}
                    >
                      {item.step}
                    </div>
                    <span 
                      className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full border"
                      style={{ 
                        backgroundColor: currentPreset.light,
                        borderColor: currentPreset.border,
                        color: currentPreset.primary
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <Icon className="w-4 h-4 text-slate-500" />
                    <span>{item.title}</span>
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
