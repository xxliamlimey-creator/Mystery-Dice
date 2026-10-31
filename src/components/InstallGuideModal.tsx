import React from 'react';
import { APK_DOWNLOAD_URL, APK_FILE_NAME, APK_SIZE, ANDROID_REQUIREMENT } from '../data/gameData';
import { soundEngine } from '../utils/audio';

interface InstallGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InstallGuideModal: React.FC<InstallGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-lg bg-[#0f111a] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/assets/aistudio/splash_logo_2d23454f.png"
              alt="Mystery Dice"
              className="w-7 h-7 object-contain rounded"
            />
            <div>
              <h2 className="text-base font-bold text-white">Android Installation Guide</h2>
              <p className="text-xs text-slate-400">{APK_FILE_NAME} · {APK_SIZE}</p>
            </div>
          </div>
          <button
            onClick={() => {
              soundEngine.playClick();
              onClose();
            }}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm">
          <div className="bg-[#141724] border border-slate-800 rounded-xl p-4 space-y-1">
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">Step 1</span>
            <h3 className="font-bold text-white">Download APK</h3>
            <p className="text-slate-300 leading-relaxed">
              Tap the download button to save <code className="text-amber-300">mystery_dice.apk</code> ({APK_SIZE}). If Android displays <em>"File might be harmful"</em>, tap <strong>Download anyway</strong>.
            </p>
          </div>

          <div className="bg-[#141724] border border-slate-800 rounded-xl p-4 space-y-1">
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">Step 2</span>
            <h3 className="font-bold text-white">Enable Unknown Sources</h3>
            <p className="text-slate-300 leading-relaxed">
              Open your Downloads folder or tap the notification. When prompted, tap <strong>Settings</strong> and toggle on <strong>Allow from this source</strong>.
            </p>
          </div>

          <div className="bg-[#141724] border border-slate-800 rounded-xl p-4 space-y-1">
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">Step 3</span>
            <h3 className="font-bold text-white">Install & Open</h3>
            <p className="text-slate-300 leading-relaxed">
              Tap <strong>Install</strong>. Once completed, launch Mystery Dice, gather 2 to 8 friends around the table, and make your first roll!
            </p>
          </div>

          <div className="pt-2 text-slate-400 text-xs">
            Requirements: {ANDROID_REQUIREMENT} · Single shared device · 100% Free
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#07080c] flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white"
          >
            Close
          </button>
          <a
            href={APK_DOWNLOAD_URL}
            download="mystery_dice.apk"
            onClick={() => soundEngine.playClick()}
            className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-full shadow-sm transition-all flex items-center gap-2"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download ({APK_SIZE})</span>
          </a>
        </div>
      </div>
    </div>
  );
};
