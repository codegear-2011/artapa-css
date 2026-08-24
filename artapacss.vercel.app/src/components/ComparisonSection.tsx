import React from 'react';
import { Layers } from 'lucide-react';
import { COMPARISON_DATA } from '../data/artapaData';
import { useThemeColor } from '../context/ThemeColorContext';

export const ComparisonSection: React.FC = () => {
  const { currentPreset } = useThemeColor();

  return (
    <section id="comparison" className="py-20 bg-white text-slate-900 relative border-t border-slate-200">
      
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
            <span>FRAMEWORK BENCHMARK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Why Choose ARTAPA CSS?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            See how ARTAPA CSS compares with Tailwind CSS, Bulma, and Bootstrap for developer speed, AI efficiency, and zero-build ease.
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto custom-scroll">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4 font-bold text-slate-700 text-sm w-1/3">
                    Feature & Architecture
                  </th>
                  <th 
                    className="px-6 py-4 font-bold text-sm border-x"
                    style={{ 
                      backgroundColor: currentPreset.light,
                      borderColor: currentPreset.border,
                      color: currentPreset.primary
                    }}
                  >
                    ARTAPA CSS ⚡
                  </th>
                  <th className="px-6 py-4 font-bold text-slate-600 text-sm">
                    Tailwind CSS
                  </th>
                  <th className="px-6 py-4 font-bold text-slate-600 text-sm">
                    Bulma
                  </th>
                  <th className="px-6 py-4 font-bold text-slate-600 text-sm">
                    Bootstrap 5
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr 
                    key={idx} 
                    className="hover:bg-slate-50/80 transition-colors"
                    style={row.highlight ? { backgroundColor: `${currentPreset.light}50` } : {}}
                  >
                    <td className="px-6 py-4 font-bold text-slate-800">
                      {row.feature}
                    </td>
                    <td 
                      className="px-6 py-4 font-bold border-x"
                      style={{ 
                        backgroundColor: currentPreset.light,
                        borderColor: currentPreset.border,
                        color: currentPreset.primary
                      }}
                    >
                      {row.artapa}
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {row.tailwind}
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {row.bulma}
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {row.bootstrap}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
