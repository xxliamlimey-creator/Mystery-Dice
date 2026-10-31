import React from 'react';
import { APK_DOWNLOAD_URL, APK_SIZE, ANDROID_REQUIREMENT } from '../data/gameData';
import { soundEngine } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundEngine.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-8 pt-6 pb-12 border-t border-slate-800/80 text-center text-xs text-slate-500 px-4 max-w-3xl mx-auto space-y-3">
      <div className="flex items-center justify-center gap-2">
        <img
          src="/assets/aistudio/splash_logo_2d23454f.png"
          alt="Mystery Dice"
          className="w-5 h-5 object-contain rounded"
        />
        <span className="font-bold text-slate-300 uppercase tracking-wider text-xs">
          Mystery Dice APK
        </span>
      </div>

      <p className="text-[11px] text-slate-400">
        3D pass-and-play tabletop party game on a single Android device.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] text-slate-500 pt-1">
        <span>{APK_SIZE}</span>
        <span>·</span>
        <span>{ANDROID_REQUIREMENT}</span>
        <span>·</span>
        <span>2 to 8 Players</span>
        <span>·</span>
        <span>Free & No Ads</span>
      </div>

      <div className="pt-2">
        <button
          onClick={scrollToTop}
          className="text-[11px] text-slate-400 hover:text-white font-medium py-1 px-3 rounded-full bg-slate-900 border border-slate-800"
        >
          Back to Top ↑
        </button>
      </div>
    </footer>
  );
};
