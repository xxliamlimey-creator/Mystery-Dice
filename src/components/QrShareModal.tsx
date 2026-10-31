import React, { useState } from 'react';
import { APK_DOWNLOAD_URL, APK_SIZE } from '../data/gameData';
import { soundEngine } from '../utils/audio';

interface QrShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QrShareModal: React.FC<QrShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(APK_DOWNLOAD_URL)}&bgcolor=07080d&color=ffffff&margin=1`;

  const handleShare = async () => {
    soundEngine.playClick();
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Mystery Dice APK',
          text: 'Download Mystery Dice (10.1 MB) - The 3D pass-and-play tabletop game for party nights!',
          url: APK_DOWNLOAD_URL
        });
      } catch {
        // Fallback
      }
    } else {
      navigator.clipboard.writeText(APK_DOWNLOAD_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCopy = () => {
    soundEngine.playClick();
    navigator.clipboard.writeText(APK_DOWNLOAD_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-sm bg-[#0f111a] border border-slate-800 rounded-3xl p-6 shadow-2xl text-center space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <img
              src="/assets/aistudio/splash_logo_2d23454f.png"
              alt="Mystery Dice"
              className="w-6 h-6 object-contain rounded"
            />
            <h3 className="text-sm font-bold text-white">Share & Scan APK</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded-lg"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* QR Code */}
        <div className="p-3 bg-[#07080d] border border-slate-800 rounded-2xl inline-block mx-auto shadow-inner">
          <img
            src={qrCodeUrl}
            alt="Scan to download APK"
            className="w-44 h-44 rounded-xl object-contain"
          />
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          Scan with your phone's camera to download <strong className="text-white">mystery_dice.apk</strong> ({APK_SIZE}) immediately.
        </p>

        {/* Action Buttons */}
        <div className="space-y-2 pt-1">
          <button
            onClick={handleShare}
            className="w-full py-3 px-4 rounded-xl font-bold text-xs text-slate-950 bg-white hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4 text-slate-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
            <span>Share Download Link</span>
          </button>

          <button
            onClick={handleCopy}
            className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-slate-300 bg-[#141624] border border-slate-800 hover:text-white transition-colors"
          >
            {copied ? '✓ Link Copied to Clipboard!' : 'Copy Direct Download URL'}
          </button>
        </div>
      </div>
    </div>
  );
};
