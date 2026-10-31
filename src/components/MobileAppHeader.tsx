import React, { useState } from 'react';
import { APK_DOWNLOAD_URL, APK_SIZE } from '../data/gameData';
import { soundEngine } from '../utils/audio';

interface MobileAppHeaderProps {
  onOpenInstallGuide: () => void;
}

export const MobileAppHeader: React.FC<MobileAppHeaderProps> = ({ onOpenInstallGuide }) => {
  const [audioOn, setAudioOn] = useState(soundEngine.enabled);

  const toggleAudio = () => {
    soundEngine.enabled = !audioOn;
    setAudioOn(!audioOn);
    if (!audioOn) soundEngine.playClick();
  };

  return (
    <header className="sticky top-0 z-40 bg-[#07080d]/95 backdrop-blur-md border-b border-slate-800/80 px-4 py-3">
      <div className="max-w-3xl mx-auto flex items-center justify-between gap-3">
        {/* Brand Lockup */}
        <div className="flex items-center gap-2.5 min-w-0">
          <img
            src="/assets/aistudio/splash_logo_2d23454f.png"
            alt="Mystery Dice"
            className="w-8 h-8 rounded-lg object-contain shrink-0 border border-slate-700/60 shadow-sm"
          />
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-black tracking-wider text-white uppercase leading-none truncate">
                MYSTERY DICE
              </span>
              <svg className="w-3.5 h-3.5 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <p className="text-[10px] text-slate-400 font-medium truncate">Android APK · Pass & Play</p>
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Audio toggle */}
          <button
            onClick={toggleAudio}
            aria-label="Toggle Web Audio SFX"
            className="p-2 rounded-full text-slate-400 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
          >
            {audioOn ? (
              <svg className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="22" y1="9" x2="16" y2="15" />
              </svg>
            )}
          </button>

          {/* Direct Install CTA */}
          <a
            href={APK_DOWNLOAD_URL}
            download="mystery_dice.apk"
            onClick={() => soundEngine.playClick()}
            className="px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 shadow-sm active:scale-95 transition-all flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Get APK</span>
          </a>
        </div>
      </div>
    </header>
  );
};
