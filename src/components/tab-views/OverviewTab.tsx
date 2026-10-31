import React from 'react';

export const OverviewTab: React.FC = () => {
  return (
    <div className="space-y-4 animate-fade-in text-xs sm:text-sm">
      {/* About Section */}
      <div className="bg-[#0f111a] border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-2">
        <h3 className="text-sm sm:text-base font-bold text-white">
          What is Mystery Dice?
        </h3>
        <p className="text-slate-300 leading-relaxed">
          Mystery Dice is a 3D party pass-and-play tabletop game designed for physical social gatherings. Instead of playing separately online, players place a single Android phone on the table between them, register their names, and take turns rolling a physics-driven 3D dice.
        </p>
      </div>

      {/* How It Works 3-Step Strip */}
      <div className="bg-[#0f111a] border border-slate-800 rounded-2xl p-4 sm:p-5 space-y-3">
        <h3 className="text-sm sm:text-base font-bold text-white">
          How a Match Works:
        </h3>
        <div className="space-y-2.5">
          <div className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-white text-slate-950 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
              1
            </span>
            <p className="text-slate-300">
              <strong className="text-white">Configure the Table (2 to 8 Players):</strong> Choose player count, assign custom vector badges (Crown, Flame, Swords, Compass), pick player colors, and tap Shuffle.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-white text-slate-950 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
              2
            </span>
            <p className="text-slate-300">
              <strong className="text-white">Pass & Roll:</strong> The top bar displays whose turn it is. Tap to roll or flick the 3D dice across the screen with real acoustic impact thuds.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-white text-slate-950 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
              3
            </span>
            <p className="text-slate-300">
              <strong className="text-white">Trigger Consequences:</strong> Every dot triggers immediate action: multipliers, skips, minigames, room silence penalties, or warps into ??? Mystery Mode!
            </p>
          </div>
        </div>
      </div>

      {/* 4 Feature Highlights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="p-3.5 bg-[#0f111a] border border-slate-800 rounded-xl space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-bold">🎲</span>
            <h4 className="font-bold text-white text-xs sm:text-sm">Dynamic Dot Rules</h4>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            Multipliers, free rerolls, tactical skips, and head-to-head duels.
          </p>
        </div>

        <div className="p-3.5 bg-[#0f111a] border border-slate-800 rounded-xl space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-purple-400 font-bold">🏃</span>
            <h4 className="font-bold text-white text-xs sm:text-sm">Jinxed 3-Min Silence</h4>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            5s headstart, 10s tag chase sprint. Escaped chaser must remain dead silent!
          </p>
        </div>

        <div className="p-3.5 bg-[#0f111a] border border-slate-800 rounded-xl space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-cyan-400 font-bold">🎮</span>
            <h4 className="font-bold text-white text-xs sm:text-sm">Live Minigames</h4>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            Rock-Paper-Scissors, 3x3 Tic-Tac-Toe, and sub-380ms Reflex Duel.
          </p>
        </div>

        <div className="p-3.5 bg-[#0f111a] border border-slate-800 rounded-xl space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">🏆</span>
            <h4 className="font-bold text-white text-xs sm:text-sm">Verified Leaderboards</h4>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            Zero bots. Real Firebase Google Sign-In with global Top 25 rankings.
          </p>
        </div>
      </div>
    </div>
  );
};
