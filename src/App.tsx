import React, { useState } from 'react';
import { MobileAppHeader } from './components/MobileAppHeader';
import { MobileHeroCard } from './components/MobileHeroCard';
import { MobileGalleryStrip } from './components/MobileGalleryStrip';
import { MobileTabNavigation, TabKey } from './components/MobileTabNavigation';
import { OverviewTab } from './components/tab-views/OverviewTab';
import { RulesTab } from './components/tab-views/RulesTab';
import { SkinsTab } from './components/tab-views/SkinsTab';
import { InstallTab } from './components/tab-views/InstallTab';
import { FaqTab } from './components/tab-views/FaqTab';
import { MobileStickyBar } from './components/MobileStickyBar';
import { InstallGuideModal } from './components/InstallGuideModal';
import { QrShareModal } from './components/QrShareModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('overview');
  const [isInstallModalOpen, setIsInstallModalOpen] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07080d] text-slate-100 flex flex-col font-sans selection:bg-white selection:text-slate-950 pb-20">
      {/* 1. Mobile App Top Bar */}
      <MobileAppHeader onOpenInstallGuide={() => setIsInstallModalOpen(true)} />

      {/* 2. Mobile App Hero Identity & Primary Download */}
      <MobileHeroCard
        onOpenInstallGuide={() => setIsInstallModalOpen(true)}
        onOpenQrModal={() => setIsQrModalOpen(true)}
      />

      {/* 3. Horizontal Gameplay & Feature Preview Strip */}
      <MobileGalleryStrip />

      {/* 4. Segmented Mobile Tab Navigation */}
      <MobileTabNavigation
        activeTab={activeTab}
        onTabChange={(tab) => setActiveTab(tab)}
      />

      {/* 5. Active Tab View */}
      <main className="flex-1 px-4 py-4 max-w-3xl mx-auto w-full">
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'rules' && <RulesTab />}
        {activeTab === 'skins' && <SkinsTab />}
        {activeTab === 'install' && <InstallTab />}
        {activeTab === 'faq' && <FaqTab />}
      </main>

      {/* 6. Studio Footer */}
      <Footer />

      {/* 7. Persistent Mobile Bottom Install Bar */}
      <MobileStickyBar />

      {/* 8. Modals */}
      <InstallGuideModal
        isOpen={isInstallModalOpen}
        onClose={() => setIsInstallModalOpen(false)}
      />

      <QrShareModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
      />
    </div>
  );
}
