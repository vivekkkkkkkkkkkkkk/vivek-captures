import React, { useState } from 'react';
import { imgPhotographerAvatar } from '../data/plates';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';
import { ambientSound } from '../utils/audio';

export type ScreenType = 'featured' | 'nature' | 'archive' | 'instagram';

interface HeaderProps {
  currentScreen: ScreenType;
  onSelectScreen: (screen: ScreenType) => void;
  onOpenInquiry: () => void;
  onOpenProfile: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onSelectScreen,
  onOpenProfile,
}) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSound = () => {
    const active = ambientSound.toggle();
    setIsAudioPlaying(active);
  };

  const navItems: { id: ScreenType; label: string }[] = [
    { id: 'featured', label: 'FEATURED WORKS' },
    { id: 'nature', label: 'NATURE & WILDERNESS' },
    { id: 'archive', label: 'FIELD WORKS & ARCHIVE' },
    { id: 'instagram', label: 'INSTAGRAM FEED' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#131313]/95 backdrop-blur-md border-b border-[#262626]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Lockup */}
        <button
          onClick={() => onSelectScreen('archive')}
          className="flex items-center gap-3.5 group text-left cursor-pointer transition-opacity hover:opacity-90"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden border border-[#c5a059]/60 shrink-0">
            <img
              src={imgPhotographerAvatar}
              alt="Vivek"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-serif text-lg tracking-[0.06em] text-[#e5e2e1] group-hover:text-[#e9c176] transition-colors">
            vivekk.captures
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navItems.map((item) => {
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onSelectScreen(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`label-caps px-3.5 py-2 transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#c5a059] text-[#131313] font-semibold shadow-xs'
                    : 'text-[#a6a5a1] hover:text-[#e5e2e1] hover:bg-[#1a1a1a]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action & Audio Controls */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Atmospheric Audio Synthesizer */}
          <button
            onClick={toggleSound}
            title={isAudioPlaying ? 'Mute monsoon atmosphere' : 'Play monsoon atmosphere'}
            className={`flex items-center gap-2 px-3 py-1.5 border text-xs tracking-wider uppercase transition-colors cursor-pointer ${
              isAudioPlaying
                ? 'border-[#c5a059] text-[#e9c176] bg-[#c5a059]/10'
                : 'border-[#353534] text-[#8e8d8a] hover:text-[#e5e2e1] hover:border-[#4e4639]'
            }`}
          >
            {isAudioPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#c5a059] animate-pulse" />
                <span className="text-[10px] tracking-[0.14em]">RAIN SOUND ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#8e8d8a]" />
                <span className="text-[10px] tracking-[0.14em]">RAIN SOUND</span>
              </>
            )}
          </button>

          {/* Social Profile Pill Button matching screenshot */}
          <button
            onClick={onOpenProfile}
            className="label-caps px-4 py-2 border border-[#4e4639] text-[#e5e2e1] hover:border-[#c5a059] hover:text-[#e9c176] transition-colors cursor-pointer whitespace-nowrap"
          >
            @VIVEKK.CAPTURES
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleSound}
            className={`p-2 border cursor-pointer ${
              isAudioPlaying ? 'border-[#c5a059] text-[#e9c176]' : 'border-[#353534] text-[#8e8d8a]'
            }`}
            aria-label="Toggle ambient rain audio"
          >
            {isAudioPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-[#353534] text-[#e5e2e1] hover:border-[#c5a059] cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161616] border-b border-[#262626] px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = currentScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectScreen(item.id);
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-left label-caps px-4 py-3 border transition-colors ${
                    isActive
                      ? 'border-[#c5a059] bg-[#c5a059] text-[#131313] font-semibold'
                      : 'border-transparent text-[#a6a5a1] hover:text-[#e5e2e1] hover:bg-[#1f1f1f]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-[#262626] flex flex-col gap-2.5">
            <button
              onClick={() => {
                onOpenProfile();
                setMobileMenuOpen(false);
              }}
              className="w-full label-caps text-center py-2.5 border border-[#4e4639] text-[#e9c176] hover:border-[#c5a059]"
            >
              @VIVEKK.CAPTURES (BIO &amp; FEED)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
