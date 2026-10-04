import React, { useState } from 'react';
import { imgPhotographerAvatar } from '../data/plates';
import { Check } from 'lucide-react';

interface FooterProps {
  onSelectCategory?: (category: string) => void;
  onSelectScreen?: (screen: 'featured' | 'nature' | 'archive' | 'instagram') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onSelectScreen }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#0e0e0e] border-t border-[#222222] pt-16 pb-12 text-[#a6a5a1]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#1f1f1f]">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full overflow-hidden border border-[#c5a059]/60 shrink-0">
                <img
                  src={imgPhotographerAvatar}
                  alt="Vivek"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-serif text-lg text-[#e5e2e1] tracking-wide">
                vivekk.captures
              </span>
            </div>

            <p className="text-xs text-[#8e8d8a] leading-relaxed max-w-sm font-light">
              Fine art, wilderness, and editorial photographic chronicles curated with disciplined aesthetic restraint.
            </p>

            <p className="text-[11px] text-[#555] tracking-wider pt-2">
              © 2024 vivekk.captures. All Rights Reserved.
            </p>
          </div>

          {/* Column 2: Exhibits */}
          <div className="lg:col-span-2 space-y-3">
            <span className="label-caps text-[#e5e2e1] block font-medium">
              EXHIBITS
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectScreen?.('featured')}
                  className="hover:text-[#c5a059] transition-colors cursor-pointer text-left"
                >
                  Master Series
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectScreen?.('nature')}
                  className="hover:text-[#c5a059] transition-colors cursor-pointer text-left"
                >
                  Himalayan Monoliths
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory?.('MONSOON SOLITUDE')}
                  className="hover:text-[#c5a059] transition-colors cursor-pointer text-left"
                >
                  Nordic Nocturnes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory?.('ANCIENT WOODLANDS')}
                  className="hover:text-[#c5a059] transition-colors cursor-pointer text-left"
                >
                  Private Folios
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Curatorial Gear */}
          <div className="lg:col-span-3 space-y-3">
            <span className="label-caps text-[#e5e2e1] block font-medium">
              CURATORIAL GEAR
            </span>
            <ul className="space-y-2 text-xs text-[#8e8d8a]">
              <li className="font-mono text-[11px]">Hasselblad X2D 100C</li>
              <li className="font-mono text-[11px]">XCD 38mm f/2.5 V</li>
              <li className="font-mono text-[11px]">Leica M11 Monochrom</li>
              <li className="font-mono text-[11px]">Summilux-M 50mm f/1.4</li>
            </ul>
          </div>

          {/* Column 4: Collector Gazette */}
          <div className="lg:col-span-3 space-y-3">
            <span className="label-caps text-[#e5e2e1] block font-medium">
              COLLECTOR GAZETTE
            </span>
            <p className="text-xs text-[#8e8d8a] leading-relaxed font-light">
              Receive seasonal exhibition dispatches, archival folio access, and acquisition previews.
            </p>

            <form onSubmit={handleSubscribe} className="pt-1 flex">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="collector@domain.com"
                className="bg-[#171717] border border-[#2f2e2d] border-r-0 px-3 py-2 text-xs text-[#e5e2e1] placeholder:text-[#555] focus:outline-none focus:border-[#c5a059] flex-1 font-light min-w-0"
              />
              <button
                type="submit"
                className="label-caps px-4 py-2 bg-[#e9c176] text-[#261900] font-semibold hover:bg-[#ffdea5] transition-colors cursor-pointer shrink-0"
              >
                {subscribed ? (
                  <span className="flex items-center gap-1">
                    <Check className="w-3 h-3 stroke-[3]" /> JOINED
                  </span>
                ) : (
                  'SUBSCRIBE'
                )}
              </button>
            </form>
            {subscribed && (
              <p className="text-[11px] text-[#c5a059] tracking-wide pt-1">
                ✓ Curatorial dispatch confirmed. Welcome to the collector registry.
              </p>
            )}
          </div>
        </div>

        {/* Bottom fine print */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#555] gap-3">
          <span>Photographed across Tamil Nadu, Karnataka &amp; Kerala woodlands.</span>
          <span className="font-mono">FOLIO EDITION 2024 / PRINTED ON HAHNEMÜHLE PHOTO RAG</span>
        </div>
      </div>
    </footer>
  );
};
