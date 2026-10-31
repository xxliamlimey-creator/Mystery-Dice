import React, { useState } from 'react';
import { FAQS } from '../../data/gameData';
import { soundEngine } from '../../utils/audio';

export const FaqTab: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    soundEngine.playClick();
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-2.5 animate-fade-in text-xs sm:text-sm">
      {FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={idx}
            className="bg-[#0f111a] border border-slate-800 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full py-3.5 px-4 text-left flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-white hover:bg-slate-900/50 transition-colors"
            >
              <span>{faq.q}</span>
              <svg
                className={`w-4 h-4 text-amber-400 shrink-0 transition-transform ${
                  isOpen ? 'rotate-180' : ''
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {isOpen && (
              <div className="px-4 pb-3.5 pt-1 text-slate-300 text-xs leading-relaxed border-t border-slate-800/60 whitespace-pre-line bg-[#0a0b12]">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
