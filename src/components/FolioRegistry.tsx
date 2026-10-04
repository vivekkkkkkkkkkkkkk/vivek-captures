import React from 'react';
import { Disc, Sparkles, ShieldCheck } from 'lucide-react';

interface FolioRegistryProps {
  onOpenInquiry: () => void;
}

export const FolioRegistry: React.FC<FolioRegistryProps> = ({ onOpenInquiry }) => {
  return (
    <section className="mt-20 pt-16 border-t border-[#262626]">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <span className="label-caps text-[#c5a059] block mb-2 font-medium">
            ARCHIVAL INDEX
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#e5e2e1] font-normal tracking-tight">
            Folio Registry • 2024 Collection
          </h2>
        </div>
        <p className="text-[#8e8d8a] text-xs sm:text-sm font-light max-w-md">
          All prints verified under archival pigment standards on Hahnemühle Photo Rag.
        </p>
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pillar 1 */}
        <div className="bg-[#171717] border border-[#262626] p-7 flex flex-col justify-between hover:border-[#c5a059]/60 transition-colors">
          <div>
            <div className="w-8 h-8 flex items-center justify-center text-[#c5a059] mb-6">
              <Disc className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-xl text-[#e5e2e1] mb-3 font-normal">
              Curated Optics
            </h3>
            <p className="text-[#a6a5a1] text-xs sm:text-[13px] leading-relaxed font-light mb-6">
              Shot on prime focal lengths with intentional aperture isolation to preserve delicate textures of mist, dewdrops, and granite carvings.
            </p>
          </div>
          <div className="pt-4 border-t border-[#222222]">
            <span className="font-mono text-[10px] tracking-[0.16em] text-[#c5a059] uppercase">
              F/1.8 — F/2.8 SHARPNESS PROFILE
            </span>
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="bg-[#171717] border border-[#262626] p-7 flex flex-col justify-between hover:border-[#c5a059]/60 transition-colors">
          <div>
            <div className="w-8 h-8 flex items-center justify-center text-[#c5a059] mb-6">
              <Sparkles className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-xl text-[#e5e2e1] mb-3 font-normal">
              Monsoon Chromatics
            </h3>
            <p className="text-[#a6a5a1] text-xs sm:text-[13px] leading-relaxed font-light mb-6">
              Natural atmospheric color grading tuned for deep jade foliage, wet charcoal basalt, and twilight indigo shadows without over-saturation.
            </p>
          </div>
          <div className="pt-4 border-t border-[#222222]">
            <span className="font-mono text-[10px] tracking-[0.16em] text-[#c5a059] uppercase">
              AUTHENTIC SPECTRAL BALANCE
            </span>
          </div>
        </div>

        {/* Pillar 3 */}
        <div
          onClick={onOpenInquiry}
          className="bg-[#171717] border border-[#262626] p-7 flex flex-col justify-between hover:border-[#c5a059] transition-colors cursor-pointer group"
        >
          <div>
            <div className="w-8 h-8 flex items-center justify-center text-[#c5a059] mb-6">
              <ShieldCheck className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-xl text-[#e5e2e1] group-hover:text-[#e9c176] transition-colors mb-3 font-normal">
              Editioned Archival Series
            </h3>
            <p className="text-[#a6a5a1] text-xs sm:text-[13px] leading-relaxed font-light mb-6">
              Limited single-run numbered collector folios. Embossed with Vivek's personal seal and accompanied by coordinates of origin.
            </p>
          </div>
          <div className="pt-4 border-t border-[#222222] flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-[0.16em] text-[#c5a059] uppercase">
              EDITION LIMIT: 15 PER PLATE
            </span>
            <span className="text-[11px] text-[#8e8d8a] group-hover:text-[#e5e2e1] transition-colors">
              INQUIRE →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
