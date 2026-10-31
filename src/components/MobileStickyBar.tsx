import React from 'react';
import { APK_DOWNLOAD_URL, APK_SIZE } from '../data/gameData';
import { soundEngine } from '../utils/audio';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#07080d]/95 backdrop-blur-md border-t border-slate-800/90 px-4 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] shadow-2xl">
      <div className="max-w-3xl mx-auto flex items-center justify-between gap-3">
        {/* App Mini Lockup */}
        <div className="flex items-center gap-2.5 min-w-0">
          <img
            src="/assets/aistudio/splash_logo_2d23454f.png"
            alt="Mystery Dice"
            className="w-8 h-8 rounded-lg object-contain shrink-0 border border-slate-700/80 shadow-sm"
          />
          <div className="min-w-0">
            <span className="text-xs font-black text-white block uppercase tracking-wide leading-tight truncate">
              Mystery Dice
            </span>
            <span className="text-[10px] text-slate-400 block leading-tight truncate">
              {APK_SIZE} · Android 7.0+
            </span>
          </div>
        </div>

        {/* Primary Download Button */}
        <a
          href={APK_DOWNLOAD_URL}
          download="mystery_dice.apk"
          onClick={() => soundEngine.playClick()}
          className="px-5 py-2 rounded-full font-black text-xs text-slate-950 bg-white hover:bg-slate-100 shadow-lg active:scale-95 transition-all flex items-center gap-1.5 shrink-0"
        >
          <svg className="w-3.5 h-3.5 text-slate-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span>Install ({APK_SIZE})</span>
        </a>
      </div>
    </div>
  );
};
