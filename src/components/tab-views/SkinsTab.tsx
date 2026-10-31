import React from 'react';
import { SKINS_DATA } from '../../data/gameData';

export const SkinsTab: React.FC = () => {
  return (
    <div className="space-y-4 animate-fade-in text-xs sm:text-sm">
      {/* Coin bonus banner */}
      <div className="bg-[#121422] border border-slate-800 rounded-2xl p-3.5 sm:p-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="text-xl">🪙</span>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white">100 Dices Starter Bonus</h4>
            <p className="text-[11px] text-slate-400">Awarded on first Google Sign-In match</p>
          </div>
        </div>
        <span className="text-xs font-bold text-amber-400 shrink-0">Skin Vault</span>
      </div>

      {/* 8 Skins Grid */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
        {SKINS_DATA.map((skin) => {
          const isFeatured = skin.id === 'imperial_jade';

          return (
            <div
              key={skin.id}
              className={`bg-[#0f111a] border rounded-xl sm:rounded-2xl p-3 sm:p-3.5 flex flex-col justify-between ${
                isFeatured
                  ? 'border-emerald-500/80 shadow-md shadow-emerald-950/20'
                  : 'border-slate-800'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                    {skin.rarity}
                  </span>
                  <span className="text-[11px] font-bold text-amber-400">
                    {skin.price}
                  </span>
                </div>

                {/* Swatch box */}
                <div
                  className="w-full h-16 sm:h-20 rounded-lg sm:rounded-xl mb-2 flex items-center justify-center border border-white/10 relative overflow-hidden"
                  style={{
                    background: skin.isMysteryCube
                      ? '#050608'
                      : `linear-gradient(135deg, ${skin.bodyColor} 0%, #000000 100%)`
                  }}
                >
                  {skin.isMysteryCube ? (
                    <span className="text-2xl font-black text-white">?</span>
                  ) : (
                    <div className="grid grid-cols-2 gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: skin.pipColor }} />
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: skin.pipColor }} />
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: skin.pipColor }} />
                      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: skin.pipColor }} />
                    </div>
                  )}

                  {isFeatured && (
                    <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-[8px] font-black bg-emerald-500 text-slate-950">
                      Default
                    </span>
                  )}
                </div>

                <h4 className="text-xs sm:text-sm font-bold text-white truncate">{skin.name}</h4>
                <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-2 leading-relaxed">
                  {skin.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
