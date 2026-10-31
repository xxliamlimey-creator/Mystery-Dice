import React, { useRef } from 'react';
import { soundEngine } from '../utils/audio';

export const MobileGalleryStrip: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      id: 'actual_app',
      title: 'Active Match Arena',
      subtitle: '3D Physics Dice & Turn Indicator',
      tag: 'Gameplay Screen',
      image: '/assets/aistudio/image_9ef53c7f.png',
      isScreenshot: true
    },
    {
      id: 'pass_and_play',
      title: '2 to 8 Table Players',
      subtitle: '1 Phone · Pass & Play Offline',
      tag: 'Tabletop Setup',
      icon: '👥',
      color: 'from-amber-500/20 to-amber-950/40',
      bullets: [
        'Place 1 phone in the center of the table',
        'Custom vector badges: Crown, Flame, Swords',
        '8 personal player colors & turn shuffling'
      ]
    },
    {
      id: 'dynamic_dots',
      title: 'Dynamic Dot Powers',
      subtitle: 'Every Roll Triggers Stakes',
      tag: 'Standard Rules',
      icon: '🎲',
      color: 'from-cyan-500/20 to-cyan-950/40',
      bullets: [
        'Dot 1: 2X Multiplier boost + instant reroll',
        'Dot 2: Free Lucky Reroll',
        'Dot 3: Sabotage & Skip an opponent',
        'Dot 4: Minigame Duel (RPS, Tic-Tac-Toe, Reflex)'
      ]
    },
    {
      id: 'jinxed_chase',
      title: 'Jinxed Tag Chase',
      subtitle: 'Physical Room Sprint & Silence',
      tag: 'Chaos Challenge',
      icon: '⚡',
      color: 'from-purple-500/20 to-purple-950/40',
      bullets: [
        'Roll a 5: Roller is Runner, pick a Chaser',
        '5s audible headstart countdown',
        '10s room chase sprint!',
        'Runner escapes = Chaser is silent for 3 mins'
      ]
    },
    {
      id: 'mystery_mode',
      title: '??? Mystery Mode',
      subtitle: 'Dares, Truths, 30s Riddles',
      tag: 'The Anomaly',
      icon: '❓',
      color: 'from-rose-500/20 to-rose-950/40',
      bullets: [
        'Roll a 6: Table enters Mystery Mode',
        'Draw party Dares, Truths & Brainteasers',
        'Challenge friends to console video game feats',
        'Roll a 5 to break the curse'
      ]
    },
    {
      id: 'skin_vault',
      title: '3D Skin Vault',
      subtitle: '8 Custom Procedural Materials',
      tag: 'In-Game Economy',
      icon: '✨',
      color: 'from-emerald-500/20 to-emerald-950/40',
      bullets: [
        'Imperial Jade, Mystery Cube, Cyber Neon',
        'Glacial Frost, Crimson Magma, Gold Roller',
        'Earn Dices coins by rolling & winning duels',
        '100 Dices Welcome Starter Bonus'
      ]
    }
  ];

  return (
    <div className="py-3 px-4 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-2.5">
        <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
          Gameplay & Features
        </span>
        <span className="text-[11px] text-slate-500 font-medium">
          Swipe &rarr;
        </span>
      </div>

      {/* Horizontal Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory scrollbar-none"
      >
        {slides.map((slide) => {
          return (
            <div
              key={slide.id}
              className="snap-start shrink-0 w-[240px] xs:w-[260px] sm:w-[280px] bg-[#0e1019] border border-slate-800/90 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-between"
            >
              {/* If it's the actual game screenshot */}
              {slide.isScreenshot ? (
                <div className="relative aspect-[9/16] max-h-[340px] bg-black overflow-hidden flex items-center justify-center border-b border-slate-800">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-bold text-emerald-400">
                    {slide.tag}
                  </div>
                </div>
              ) : (
                /* Feature Preview Card */
                <div
                  className={`p-4 h-[240px] bg-gradient-to-b ${slide.color} flex flex-col justify-between border-b border-slate-800/60`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl">{slide.icon}</span>
                      <span className="px-2 py-0.5 rounded-full bg-slate-900/80 border border-slate-700/60 text-[10px] font-semibold text-slate-300">
                        {slide.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white leading-tight">
                      {slide.title}
                    </h3>
                    <p className="text-xs text-amber-300 font-medium mt-0.5">
                      {slide.subtitle}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    {slide.bullets?.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-200 leading-snug">
                        <span className="text-amber-400 font-bold shrink-0">•</span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom footer for screenshot slide */}
              {slide.isScreenshot && (
                <div className="p-3 bg-[#0a0b12]">
                  <h3 className="text-xs font-bold text-white">{slide.title}</h3>
                  <p className="text-[11px] text-slate-400">{slide.subtitle}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
