import React, { useState } from 'react';
import { STANDARD_RULES, MYSTERY_RULES } from '../../data/gameData';
import { soundEngine } from '../../utils/audio';

export const RulesTab: React.FC = () => {
  const [mode, setMode] = useState<'standard' | 'mystery'>('standard');
  const [selectedDot, setSelectedDot] = useState<number>(1);
  const [showRiddleSolution, setShowRiddleSolution] = useState(false);

  const rules = mode === 'standard' ? STANDARD_RULES : MYSTERY_RULES;
  const activeRule = rules.find((r) => r.dot === selectedDot) || rules[0];

  const handleSelectDot = (dot: number) => {
    soundEngine.playClick();
    setSelectedDot(dot);
    setShowRiddleSolution(false);
  };

  const handleModeSwitch = (newMode: 'standard' | 'mystery') => {
    soundEngine.playClick();
    setMode(newMode);
    setShowRiddleSolution(false);
  };

  return (
    <div className="space-y-4 animate-fade-in text-xs sm:text-sm">
      {/* Mode Switcher */}
      <div className="flex p-1 bg-[#121420] border border-slate-800 rounded-xl">
        <button
          onClick={() => handleModeSwitch('standard')}
          className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
            mode === 'standard'
              ? 'bg-white text-slate-950 shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Standard Mode
        </button>
        <button
          onClick={() => handleModeSwitch('mystery')}
          className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
            mode === 'mystery'
              ? 'bg-amber-500 text-slate-950 shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          ??? Mystery Mode
        </button>
      </div>

      {/* 6 Dots Selector Grid */}
      <div className="grid grid-cols-6 gap-1.5 sm:gap-2">
        {rules.map((rule) => {
          const isSelected = selectedDot === rule.dot;
          return (
            <button
              key={rule.dot}
              onClick={() => handleSelectDot(rule.dot)}
              className={`py-2.5 sm:py-3 rounded-xl border text-center transition-all ${
                isSelected
                  ? mode === 'standard'
                    ? 'bg-white text-slate-950 border-white font-black shadow-md'
                    : 'bg-amber-400 text-slate-950 border-amber-400 font-black shadow-md'
                  : 'bg-[#0f111a] border-slate-800 text-slate-300 hover:border-slate-700'
              }`}
            >
              <span className="text-base sm:text-lg font-black block leading-none">
                {rule.dot}
              </span>
              <span className="text-[9px] uppercase tracking-wider font-semibold opacity-70 block mt-0.5">
                Dot {rule.dot}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Rule Card */}
      <div className="bg-[#0f111a] border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-3">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#161926] border border-slate-700 text-amber-400 font-black text-xl flex items-center justify-center shrink-0">
              {activeRule.dot}
            </div>
            <div>
              <h4 className="text-base font-bold text-white leading-tight">{activeRule.title}</h4>
              <p className="text-xs text-amber-400 font-medium">{activeRule.tagline}</p>
            </div>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700">
            {activeRule.type}
          </span>
        </div>

        <p className="text-slate-200 leading-relaxed text-xs sm:text-sm">
          {activeRule.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          <div className="bg-[#141624] p-3 rounded-xl border border-slate-800/80">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Turn Action:</span>
            <span className="text-xs text-white font-medium block mt-0.5">{activeRule.action}</span>
          </div>
          <div className="bg-[#141624] p-3 rounded-xl border border-slate-800/80">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Stakes:</span>
            <span className="text-xs text-amber-300 font-medium block mt-0.5">{activeRule.stakes}</span>
          </div>
        </div>

        {/* Sample card / riddle items */}
        {activeRule.sampleItems && activeRule.sampleItems.length > 0 && (
          <div className="pt-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
              Deck Preview:
            </span>
            <div className="space-y-1.5">
              {activeRule.sampleItems.map((item, idx) => (
                <div key={idx} className="p-2.5 bg-[#121422] border border-slate-800 rounded-lg text-xs text-slate-300 flex items-start gap-2">
                  <span className="text-amber-400 font-bold shrink-0">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
