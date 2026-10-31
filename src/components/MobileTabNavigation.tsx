import React from 'react';
import { soundEngine } from '../utils/audio';

export type TabKey = 'overview' | 'rules' | 'skins' | 'install' | 'faq';

interface MobileTabNavigationProps {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
}

export const MobileTabNavigation: React.FC<MobileTabNavigationProps> = ({
  activeTab,
  onTabChange
}) => {
  const tabs: { key: TabKey; label: string; icon: string }[] = [
    { key: 'overview', label: 'Overview', icon: '🎮' },
    { key: 'rules', label: 'Rules & Dots', icon: '🎲' },
    { key: 'skins', label: 'Skin Vault', icon: '✨' },
    { key: 'install', label: 'Install APK', icon: '⚙️' },
    { key: 'faq', label: 'FAQ', icon: '❓' }
  ];

  return (
    <div className="sticky top-[57px] z-30 bg-[#07080d]/95 backdrop-blur-md border-b border-slate-800/80 px-4 py-2">
      <div className="max-w-3xl mx-auto flex gap-1.5 overflow-x-auto scrollbar-none">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;

          return (
            <button
              key={tab.key}
              onClick={() => {
                soundEngine.playClick();
                onTabChange(tab.key);
              }}
              className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap shrink-0 flex items-center gap-1.5 transition-all ${
                isActive
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'bg-[#10121d] text-slate-400 hover:text-white border border-slate-800/80'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
