import React, { useState } from 'react';
import { Plate } from '../../data/plates';
import { Sparkles, Eye, Camera, MapPin, Maximize2 } from 'lucide-react';

interface FeaturedWorksScreenProps {
  allPlates: Plate[];
  onOpenLightbox: (plate: Plate) => void;
  onOpenInquiry: (plate: Plate) => void;
}

export const FeaturedWorksScreen: React.FC<FeaturedWorksScreenProps> = ({
  allPlates,
  onOpenLightbox,
  onOpenInquiry,
}) => {
  // Master featured plates
  const masterPlates = allPlates.filter((p) => ['006', '001', '008', '005'].includes(p.id));
  const [activePlateId, setActivePlateId] = useState<string>('006');
  const [frameMode, setFrameMode] = useState<'matte' | 'bleed'>('matte');

  const activePlate = allPlates.find((p) => p.id === activePlateId) || allPlates[0];

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-12 lg:py-16">
      {/* Screen Header */}
      <div className="mb-12 border-b border-[#262626] pb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[#c5a059] text-xs">■</span>
          <span className="font-mono text-xs tracking-[0.2em] text-[#8e8d8a] uppercase">
            SOLO EXHIBITION CURATION • CHENNAI PHOTO BIENNALE COLLATERAL
          </span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl text-[#e5e2e1] font-normal tracking-tight mb-4">
          Master Featured Works
        </h1>
        <p className="text-sm sm:text-base text-[#a6a5a1] max-w-2xl font-light leading-relaxed">
          A focused curatorial selection of Vivek's flagship medium format plates. Scrutinized for micro-tonal fidelity, organic mineral pigments, and the spiritual aura of ancient sanctuaries.
        </p>

        {/* View Mode Switcher */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#1f1f1f]">
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#8e8d8a] label-caps">MUSEUM DISPLAY:</span>
            <button
              onClick={() => setFrameMode('matte')}
              className={`label-caps px-3 py-1.5 border text-[10px] cursor-pointer transition-colors ${
                frameMode === 'matte'
                  ? 'border-[#c5a059] bg-[#c5a059] text-[#131313] font-semibold'
                  : 'border-[#333] text-[#8e8d8a] hover:text-[#e5e2e1]'
              }`}
            >
              PASSE-PARTOUT MATTE
            </button>
            <button
              onClick={() => setFrameMode('bleed')}
              className={`label-caps px-3 py-1.5 border text-[10px] cursor-pointer transition-colors ${
                frameMode === 'bleed'
                  ? 'border-[#c5a059] bg-[#c5a059] text-[#131313] font-semibold'
                  : 'border-[#333] text-[#8e8d8a] hover:text-[#e5e2e1]'
              }`}
            >
              FULL BLEED VIEW
            </button>
          </div>

          <button
            onClick={() => onOpenLightbox(activePlate)}
            className="hidden sm:flex items-center gap-1.5 text-xs text-[#c5a059] hover:text-[#ffdea5] label-caps cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>FULLSCREEN LIGHTBOX</span>
          </button>
        </div>
      </div>

      {/* Flagship Centerpiece Showcase */}
      <div className="bg-[#161616] border border-[#2b2a28] p-4 sm:p-8 lg:p-12 mb-12 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Visual Presentation Area */}
          <div className="lg:col-span-8 flex justify-center">
            <div
              onClick={() => onOpenLightbox(activePlate)}
              className={`relative cursor-pointer transition-all duration-500 w-full flex items-center justify-center ${
                frameMode === 'matte'
                  ? 'bg-[#0f0f0f] border-8 sm:border-12 border-[#1e1d1c] p-6 sm:p-10 shadow-inner'
                  : 'p-0'
              }`}
            >
              <img
                src={activePlate.image}
                alt={activePlate.title}
                className="max-h-[550px] w-auto max-w-full object-contain shadow-2xl border border-[#262626]"
                referrerPolicy="no-referrer"
              />

              <div className="absolute bottom-4 right-4 bg-[#131313]/90 px-3 py-1 border border-[#333] flex items-center gap-1.5 text-xs text-[#c5a059]">
                <Eye className="w-3.5 h-3.5" />
                <span className="font-mono text-[10px] tracking-wider">CLICK TO INSPECT</span>
              </div>
            </div>
          </div>

          {/* Curatorial Essay & Technical Spec Sidebar */}
          <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#262626] pb-3">
                <span className="font-mono text-xs text-[#c5a059] tracking-widest font-semibold">
                  {activePlate.plateNumber}
                </span>
                <span className="label-caps text-[#8e8d8a] text-[10px]">
                  {activePlate.category}
                </span>
              </div>

              <h2 className="font-serif text-3xl text-[#e5e2e1] font-normal leading-tight">
                {activePlate.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#a6a5a1] leading-relaxed font-light">
                {activePlate.descriptionExtended}
              </p>

              <div className="space-y-2 pt-2 text-xs text-[#8e8d8a]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>{activePlate.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Camera className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span className="font-mono text-[11px] text-[#e5e2e1]">
                    {activePlate.exif.camera} • {activePlate.exif.lens}
                  </span>
                </div>
                <div className="font-mono text-[11px] text-[#8e8d8a] pl-5.5">
                  {activePlate.exif.shutter} at {activePlate.exif.aperture}, {activePlate.exif.iso}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#262626] space-y-3">
              <div className="flex items-center justify-between">
                <span className="label-caps text-[10px] text-[#8e8d8a]">ARCHIVAL PIGMENT</span>
                <span className="font-mono text-sm text-[#e9c176] font-semibold">
                  ${activePlate.printPrice} USD
                </span>
              </div>

              <button
                onClick={() => onOpenInquiry(activePlate)}
                className="w-full label-caps py-3 bg-[#e9c176] text-[#261900] font-semibold hover:bg-[#ffdea5] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>INQUIRE PRINT ACQUISITION</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Master Plates Selector Carousel / Matrix */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="label-caps text-[#c5a059] tracking-widest font-medium">
            SELECT MASTER PLATE TO EXAMINE
          </span>
          <span className="text-xs text-[#8e8d8a]">
            {masterPlates.length} CURATED SELECTIONS
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {masterPlates.map((plate) => {
            const isSelected = plate.id === activePlateId;
            return (
              <div
                key={plate.id}
                onClick={() => setActivePlateId(plate.id)}
                className={`bg-[#171717] border p-3 cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? 'border-[#c5a059] ring-1 ring-[#c5a059]/40'
                    : 'border-[#262626] hover:border-[#444]'
                }`}
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#111] mb-2.5">
                  <img
                    src={plate.image}
                    alt={plate.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center justify-between text-[10px] text-[#8e8d8a] mb-1 font-mono">
                  <span className={isSelected ? 'text-[#c5a059] font-semibold' : ''}>
                    {plate.plateNumber}
                  </span>
                  <span>{plate.year}</span>
                </div>
                <h4 className="font-serif text-sm text-[#e5e2e1] truncate font-normal">
                  {plate.title}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
