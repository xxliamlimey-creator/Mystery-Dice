import React, { useState } from 'react';
import { APK_DOWNLOAD_URL, APK_SIZE, ANDROID_REQUIREMENT } from '../../data/gameData';
import { soundEngine } from '../../utils/audio';

export const InstallTab: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [deviceTip, setDeviceTip] = useState<'pixel' | 'samsung' | 'xiaomi'>('pixel');

  const copyLink = () => {
    soundEngine.playClick();
    navigator.clipboard.writeText(APK_DOWNLOAD_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4 animate-fade-in text-xs sm:text-sm">
      {/* 3 Steps */}
      <div className="space-y-2.5">
        <div className="bg-[#0f111a] border border-slate-800 rounded-2xl p-4 flex items-start gap-3">
          <div className="w-7 h-7 rounded-lg bg-white text-slate-950 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
            1
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Download the APK</h4>
            <p className="text-slate-300 text-xs mt-0.5 leading-relaxed">
              Tap the download button below ({APK_SIZE}). If Chrome asks <em>"File might be harmful"</em>, tap <strong>Download anyway</strong>.
            </p>
          </div>
        </div>

        <div className="bg-[#0f111a] border border-slate-800 rounded-2xl p-4 flex items-start gap-3">
          <div className="w-7 h-7 rounded-lg bg-white text-slate-950 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
            2
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Allow Unknown Apps</h4>
            <p className="text-slate-300 text-xs mt-0.5 leading-relaxed">
              Tap the completed download. If prompted by your system, tap <strong>Settings</strong> &gt; toggle <strong>Allow from this source</strong>.
            </p>
          </div>
        </div>

        <div className="bg-[#0f111a] border border-slate-800 rounded-2xl p-4 flex items-start gap-3">
          <div className="w-7 h-7 rounded-lg bg-white text-slate-950 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
            3
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Install & Play</h4>
            <p className="text-slate-300 text-xs mt-0.5 leading-relaxed">
              Tap <strong>Install</strong> &gt; tap <strong>Open</strong>. Enter 2 to 8 names, put the phone on the table, and start rolling!
            </p>
          </div>
        </div>
      </div>

      {/* Action CTA */}
      <div className="bg-[#121422] border border-slate-800 rounded-2xl p-4 text-center space-y-3">
        <a
          href={APK_DOWNLOAD_URL}
          download="mystery_dice.apk"
          onClick={() => soundEngine.playClick()}
          className="w-full py-3.5 px-6 rounded-xl font-black text-sm text-slate-950 bg-white hover:bg-slate-100 shadow-md transition-all flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4 text-slate-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span>Download Mystery Dice ({APK_SIZE})</span>
        </a>

        <button
          onClick={copyLink}
          className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-slate-300 bg-[#0a0b12] border border-slate-800 hover:text-white transition-colors"
        >
          {copied ? '✓ Direct Link Copied!' : 'Copy Direct Download Link'}
        </button>
      </div>

      {/* Device tips */}
      <div className="bg-[#0f111a] border border-slate-800 rounded-2xl p-4 space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-300">Device Troubleshooting:</span>
          <div className="flex gap-1">
            <button
              onClick={() => setDeviceTip('pixel')}
              className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                deviceTip === 'pixel' ? 'bg-white text-slate-950' : 'bg-slate-800 text-slate-400'
              }`}
            >
              Pixel
            </button>
            <button
              onClick={() => setDeviceTip('samsung')}
              className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                deviceTip === 'samsung' ? 'bg-white text-slate-950' : 'bg-slate-800 text-slate-400'
              }`}
            >
              Samsung
            </button>
            <button
              onClick={() => setDeviceTip('xiaomi')}
              className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                deviceTip === 'xiaomi' ? 'bg-white text-slate-950' : 'bg-slate-800 text-slate-400'
              }`}
            >
              Xiaomi
            </button>
          </div>
        </div>

        <div className="text-[11px] text-slate-400 leading-relaxed bg-[#131522] p-2.5 rounded-xl border border-slate-800/80">
          {deviceTip === 'pixel' && (
            <p><strong>Pixel / Stock:</strong> If blocked: Settings &gt; Apps &gt; Special app access &gt; Install unknown apps &gt; Chrome &gt; Allow.</p>
          )}
          {deviceTip === 'samsung' && (
            <p><strong>Samsung:</strong> Open "My Files" &gt; Downloads &gt; tap APK. In popup, tap Settings &gt; toggle "Allow from this source".</p>
          )}
          {deviceTip === 'xiaomi' && (
            <p><strong>Xiaomi:</strong> Open File Manager &gt; APKs. On security warning, check "I am aware" and wait for the countdown to tap OK &gt; Install.</p>
          )}
        </div>
      </div>
    </div>
  );
};
