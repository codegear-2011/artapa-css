import React, { useState } from 'react';
import { Layers, Code2, Eye, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPONENT_SAMPLES } from '../data/artapaData';
import { useThemeColor } from '../context/ThemeColorContext';

export const ComponentShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Record<string, 'preview' | 'code'>>({
    'buttons-suite': 'preview',
    'saas-metrics-card': 'preview',
    'alert-feedback': 'preview',
    'modern-form-input': 'preview',
  });

  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { currentPreset } = useThemeColor();

  const toggleTab = (componentId: string, tab: 'preview' | 'code') => {
    setActiveTab(prev => ({ ...prev, [componentId]: tab }));
  };

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    confetti({ 
      particleCount: 25, 
      spread: 45,
      colors: [currentPreset.primary, currentPreset.hover, currentPreset.border]
    });
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="components" className="py-20 bg-slate-50 relative border-t border-slate-200">
      
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
            <Layers className="w-3.5 h-3.5" />
            <span>PRODUCTION-READY COMPONENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Pre-Built UI Components
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            ARTAPA ক্লাস ভিত্তিক রেডিমেড ইউআই উপাদান। সরাসরি প্রিভিউ দেখুন এবং কোড কপি করে আপনার প্রজেক্টে ব্যবহার করুন।
          </p>
        </div>

        {/* 2x2 Grid of Components */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {COMPONENT_SAMPLES.map((sample) => {
            const currentTab = activeTab[sample.id] || 'preview';

            return (
              <div 
                key={sample.id}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-lg flex flex-col justify-between"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70 gap-3">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <span>{sample.title}</span>
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">{sample.description}</p>
                  </div>

                  {/* Tab Controls: Preview / Code */}
                  <div className="flex items-center gap-1 p-1 bg-white rounded-xl border border-slate-200 shadow-xs shrink-0 self-start sm:self-auto">
                    <button
                      onClick={() => toggleTab(sample.id, 'preview')}
                      className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                        currentTab === 'preview' ? 'text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                      }`}
                      style={currentTab === 'preview' ? { backgroundColor: currentPreset.primary } : {}}
                    >
                      <Eye className="w-3 h-3" />
                      <span>Preview</span>
                    </button>
                    <button
                      onClick={() => toggleTab(sample.id, 'code')}
                      className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                        currentTab === 'code' ? 'text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                      }`}
                      style={currentTab === 'code' ? { backgroundColor: currentPreset.primary } : {}}
                    >
                      <Code2 className="w-3 h-3" />
                      <span>Code</span>
                    </button>
                  </div>
                </div>

                {/* Body: Rendered Preview (Tailwind internally) or ARTAPA Code View */}
                <div className="p-6 flex-1 flex items-center justify-center bg-slate-950 min-h-[240px]">
                  {currentTab === 'preview' ? (
                    <div 
                      className="w-full flex items-center justify-center"
                      dangerouslySetInnerHTML={{ __html: sample.tailwindCode }} 
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-900 rounded-2xl p-4 border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto custom-scroll">
                      <div className="flex items-center justify-between text-[10px] text-emerald-400 font-bold uppercase tracking-wider mb-2">
                        <span>// ARTAPA CSS Code Snippet</span>
                      </div>
                      <pre className="whitespace-pre-wrap">{sample.htmlCode}</pre>
                    </div>
                  )}
                </div>

                {/* Footer Action: Copy Button for Active View */}
                <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">
                    Category: <strong className="text-slate-700 font-sans">{sample.category}</strong>
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => copyCode(sample.htmlCode, sample.id)}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border shadow-xs active:scale-95"
                      style={{ 
                        backgroundColor: currentPreset.light,
                        borderColor: currentPreset.border,
                        color: currentPreset.primary
                      }}
                    >
                      {copiedId === sample.id ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Code</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
