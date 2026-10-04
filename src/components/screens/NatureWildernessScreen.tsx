import React from 'react';
import { Plate } from '../../data/plates';
import { PlateCard } from '../PlateCard';
import { Compass, CloudRain, Mountain, Wind } from 'lucide-react';

interface NatureWildernessScreenProps {
  allPlates: Plate[];
  onOpenLightbox: (plate: Plate) => void;
  onOpenInquiry: (plate: Plate) => void;
}

export const NatureWildernessScreen: React.FC<NatureWildernessScreenProps> = ({
  allPlates,
  onOpenLightbox,
  onOpenInquiry,
}) => {
  const naturePlates = allPlates.filter((p) =>
    ['FLORA & BOTANICALS', 'ANCIENT WOODLANDS', 'MONSOON SOLITUDE'].includes(p.category)
  );

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-12 lg:py-16">
      {/* Masthead */}
      <div className="mb-14 border-b border-[#262626] pb-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#c5a059] text-xs">■</span>
          <span className="font-mono text-xs tracking-[0.2em] text-[#8e8d8a] uppercase font-medium">
            EXPEDITIONS • WESTERN GHATS &amp; MALABAR ECOSYSTEMS
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl text-[#e5e2e1] font-normal tracking-tight mb-4">
          Nature &amp; <span className="italic text-[#e9c176]">Wilderness Chronicles</span>
        </h1>

        <p className="text-sm sm:text-base text-[#a6a5a1] max-w-2xl font-light leading-relaxed mb-8">
          Venturing beyond mapped trails into the primordial cloud forests of Wayanad, Silent Valley, and sacred village sacred groves (*Kavu*). Documenting rare wet-season botanical specimens under perpetual drizzle.
        </p>

        {/* Environmental Telemetry Placards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          <div className="bg-[#171717] border border-[#262626] p-4">
            <div className="flex items-center gap-2 text-[#c5a059] mb-1">
              <Compass className="w-3.5 h-3.5" />
              <span className="label-caps text-[10px]">BIOGEOGRAPHIC ZONE</span>
            </div>
            <div className="font-serif text-lg text-[#e5e2e1]">Western Ghats</div>
            <div className="text-[10px] text-[#8e8d8a] mt-0.5">UNESCO Global Biodiversity Hotspot</div>
          </div>

          <div className="bg-[#171717] border border-[#262626] p-4">
            <div className="flex items-center gap-2 text-[#c5a059] mb-1">
              <CloudRain className="w-3.5 h-3.5" />
              <span className="label-caps text-[10px]">MONSOON PRECIPITATION</span>
            </div>
            <div className="font-serif text-lg text-[#e5e2e1]">3,200mm – 5,400mm</div>
            <div className="text-[10px] text-[#8e8d8a] mt-0.5">South-West Monsoon (Edavapathi)</div>
          </div>

          <div className="bg-[#171717] border border-[#262626] p-4">
            <div className="flex items-center gap-2 text-[#c5a059] mb-1">
              <Mountain className="w-3.5 h-3.5" />
              <span className="label-caps text-[10px]">ELEVATION RANGE</span>
            </div>
            <div className="font-serif text-lg text-[#e5e2e1]">750m – 2,100m MSL</div>
            <div className="text-[10px] text-[#8e8d8a] mt-0.5">Montane Shola &amp; Evergreen Canopy</div>
          </div>

          <div className="bg-[#171717] border border-[#262626] p-4">
            <div className="flex items-center gap-2 text-[#c5a059] mb-1">
              <Wind className="w-3.5 h-3.5" />
              <span className="label-caps text-[10px]">OPTICAL CONDITION</span>
            </div>
            <div className="font-serif text-lg text-[#e5e2e1]">Diffuse Skylight</div>
            <div className="text-[10px] text-[#8e8d8a] mt-0.5">High micro-contrast, zero harsh glare</div>
          </div>
        </div>
      </div>

      {/* Plates Gallery Matrix */}
      <div className="space-y-12">
        <div className="flex items-center justify-between">
          <span className="label-caps text-[#c5a059] tracking-widest font-medium">
            CATALOGED WILDERNESS SPECIMENS
          </span>
          <span className="text-xs text-[#8e8d8a]">
            {naturePlates.length} FIELD PLATES
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {naturePlates.map((plate) => (
            <PlateCard
              key={plate.id}
              plate={plate}
              onOpenLightbox={onOpenLightbox}
              aspectClass={plate.aspectRatio === '16:9' ? 'aspect-[16/9]' : 'aspect-[4/3]'}
            />
          ))}
        </div>
      </div>

      {/* Field Note Monologue */}
      <div className="mt-20 p-8 sm:p-12 bg-[#171717] border border-[#282726] relative">
        <div className="max-w-3xl mx-auto space-y-4 text-center">
          <span className="label-caps text-[#c5a059] tracking-widest font-medium block">
            EXCERPT FROM VIVEK'S FIELD JOURNAL • MONSOON 2024
          </span>
          <blockquote className="font-serif text-xl sm:text-2xl text-[#e5e2e1] italic font-normal leading-relaxed">
            "When the rain pauses for twenty minutes in the afternoon, the rainforest exhales. Every leaf of the banyan canopy acts like an inverted mirror. You don't need artificial flash; the ambient cloud ceiling produces the softest, most honest luminescence known to photography."
          </blockquote>
          <span className="text-xs font-mono text-[#8e8d8a] block pt-2">
            — Vivek (@vivekk.captures), Field Station, Palakkad Gap
          </span>
        </div>
      </div>
    </div>
  );
};
