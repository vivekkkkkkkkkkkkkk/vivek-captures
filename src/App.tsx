/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ARCHIVE_PLATES, Plate } from './data/plates';
import { Header, ScreenType } from './components/Header';
import { ArchiveScreen } from './components/screens/ArchiveScreen';
import { FeaturedWorksScreen } from './components/screens/FeaturedWorksScreen';
import { NatureWildernessScreen } from './components/screens/NatureWildernessScreen';
import { InstagramFeedScreen } from './components/screens/InstagramFeedScreen';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { PrintInquiryModal } from './components/PrintInquiryModal';
import { ProfileModal } from './components/ProfileModal';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('archive');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  // Modals state
  const [activeLightboxPlate, setActiveLightboxPlate] = useState<Plate | null>(null);
  const [activeInquiryPlate, setActiveInquiryPlate] = useState<Plate | null>(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);

  const handleOpenLightbox = (plate: Plate) => {
    setActiveLightboxPlate(plate);
  };

  const handleOpenInquiry = (plate?: Plate) => {
    setActiveInquiryPlate(plate || ARCHIVE_PLATES[0]);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentScreen('archive');
  };

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] flex flex-col font-sans selection:bg-[#c5a059] selection:text-black">
      {/* Universal Top Bar */}
      <Header
        currentScreen={currentScreen}
        onSelectScreen={setCurrentScreen}
        onOpenInquiry={() => handleOpenInquiry()}
        onOpenProfile={() => setIsProfileModalOpen(true)}
      />

      {/* Main Exhibition Viewports */}
      <main className="flex-1">
        {currentScreen === 'archive' && (
          <ArchiveScreen
            allPlates={ARCHIVE_PLATES}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onOpenLightbox={handleOpenLightbox}
            onOpenInquiry={handleOpenInquiry}
            onOpenInstagramScreen={() => {
              setCurrentScreen('instagram');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentScreen === 'featured' && (
          <FeaturedWorksScreen
            allPlates={ARCHIVE_PLATES}
            onOpenLightbox={handleOpenLightbox}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentScreen === 'nature' && (
          <NatureWildernessScreen
            allPlates={ARCHIVE_PLATES}
            onOpenLightbox={handleOpenLightbox}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentScreen === 'instagram' && (
          <InstagramFeedScreen
            onOpenInquiry={() => handleOpenInquiry()}
          />
        )}
      </main>

      {/* Museum Curatorial Footer */}
      <Footer
        onSelectCategory={handleCategorySelect}
        onSelectScreen={setCurrentScreen}
      />

      {/* Lightbox Inspector Modal */}
      <LightboxModal
        plate={activeLightboxPlate}
        allPlates={ARCHIVE_PLATES}
        onClose={() => setActiveLightboxPlate(null)}
        onSelectPlate={setActiveLightboxPlate}
        onOpenInquiry={(plate) => {
          setActiveLightboxPlate(null);
          setActiveInquiryPlate(plate);
        }}
      />

      {/* Print Acquisition Modal */}
      <PrintInquiryModal
        plate={activeInquiryPlate}
        onClose={() => setActiveInquiryPlate(null)}
      />

      {/* Vivek Profile / Bio Modal */}
      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        onOpenInquiry={() => handleOpenInquiry()}
        onGoToInstagram={() => {
          setCurrentScreen('instagram');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
