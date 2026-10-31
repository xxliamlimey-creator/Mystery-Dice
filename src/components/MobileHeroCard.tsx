import React, { useState } from 'react';
import { APK_DOWNLOAD_URL, APK_SIZE, ANDROID_REQUIREMENT, APP_VERSION } from '../data/gameData';
import { soundEngine } from '../utils/audio';

interface MobileHeroCardProps {
  onOpenInstallGuide: () => void;
  onOpenQrModal: () => void;
}

export const MobileHeroCard: React.FC<MobileHeroCardProps> = ({
  onOpenInstallGuide,
  onOpenQrModal
}) => {
  const [downloading, setDownloading] = useState(false);

  const handleDownloadClick = () => {
    soundEngine.playClick();
    setDownloading(true);
    setTimeout(() => setDownloading(false), 3000);
  };

  return (
    <div className="pt-4 pb-2 px-4 max-w-3xl mx-auto">
      {/* App Identity Row */}
      <div className="flex items-start gap-4">
        {/* App Icon */}
        <div className="relative shrink-0">
          <img
            src="/assets/aistudio/splash_logo_2d23454f.png"
            alt="Mystery Dice App Icon"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl object-contain bg-[#090a0f] border-2 border-slate-700/80 shadow-xl"
          />
          <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-slate-950 p-1 rounded-full shadow-md">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>

        {/* Title & Category */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase leading-tight">
              MYSTERY DICE
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-amber-400 font-semibold tracking-wide mt-0.5">
            3D Tabletop Party Anomaly
          </p>
          <p className="text-[11px] sm:text-xs text-slate-400 mt-1">
            Pass & play on a single phone · 2 to 8 players
          </p>

          <div className="flex items-center gap-2 mt-2 text-[11px] text-slate-400">
            <span className="text-emerald-400 font-bold">Free APK</span>
            <span className="text-slate-600">·</span>
            <span>{APP_VERSION}</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-300 font-medium">Safe & Verified</span>
          </div>
        </div>
      </div>

      {/* Metrics Row (Horizontal scroll on very small screens, clean row on mobile) */}
      <div className="mt-4 py-2 px-1 border-y border-slate-800/80 flex items-center justify-between gap-2 overflow-x-auto text-center scrollbar-none">
        <div className="px-2 shrink-0">
          <div className="flex items-center justify-center gap-1 text-xs font-bold text-white">
            <span className="text-amber-400">★</span> 4.9
          </div>
          <span className="text-[10px] text-slate-400 block mt-0.5">Tabletop Hit</span>
        </div>

        <div className="w-[1px] h-6 bg-slate-800 shrink-0" />

        <div className="px-2 shrink-0">
          <span className="text-xs font-bold text-white block">{APK_SIZE}</span>
          <span className="text-[10px] text-slate-400 block mt-0.5">APK Size</span>
        </div>

        <div className="w-[1px] h-6 bg-slate-800 shrink-0" />

        <div className="px-2 shrink-0">
          <span className="text-xs font-bold text-white block">{ANDROID_REQUIREMENT}</span>
          <span className="text-[10px] text-slate-400 block mt-0.5">Compatibility</span>
        </div>

        <div className="w-[1px] h-6 bg-slate-800 shrink-0" />

        <div className="px-2 shrink-0">
          <span className="text-xs font-bold text-emerald-400 block">Offline</span>
          <span className="text-[10px] text-slate-400 block mt-0.5">Pass & Play</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 space-y-2">
        <a
          href={APK_DOWNLOAD_URL}
          download="mystery_dice.apk"
          onClick={handleDownloadClick}
          className="w-full py-3.5 px-6 rounded-2xl font-black text-sm sm:text-base text-slate-950 bg-white hover:bg-slate-100 shadow-xl shadow-white/10 active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 text-center"
        >
          {downloading ? (
            <>
              <svg className="animate-spin w-4 h-4 text-slate-950" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              <span>Starting Download ({APK_SIZE})...</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5 text-slate-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download Android APK ({APK_SIZE})</span>
            </>
          )}
        </a>

        {/* Secondary options row */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => {
              soundEngine.playClick();
              onOpenInstallGuide();
            }}
            className="py-2.5 px-3 rounded-xl bg-[#121420] border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-200 flex items-center justify-center gap-1.5 active:scale-[0.98] transition-all"
          >
            <svg className="w-3.5 h-3.5 text-amber-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span className="truncate">Install Steps</span>
          </button>

          <button
            onClick={() => {
              soundEngine.playClick();
              onOpenQrModal();
            }}
            className="py-2.5 px-3 rounded-xl bg-[#121420] border border-slate-800 hover:border-slate-700 text-xs font-semibold text-slate-200 flex items-center justify-center gap-1.5 active:scale-[0.98] transition-all"
          >
            <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect width="14" height="14" x="8" y="8" rx="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
            <span className="truncate">QR & Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};
