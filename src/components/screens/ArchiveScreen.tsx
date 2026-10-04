import React from 'react';
import { Plate, FILTER_CATEGORIES } from '../../data/plates';
import { PlateCard } from '../PlateCard';
import { FolioRegistry } from '../FolioRegistry';
import { InstagramCallout } from '../InstagramCallout';

interface ArchiveScreenProps {
  allPlates: Plate[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onOpenLightbox: (plate: Plate) => void;
  onOpenInquiry: (plate?: Plate) => void;
  onOpenInstagramScreen: () => void;
}

export const ArchiveScreen: React.FC<ArchiveScreenProps> = ({
  allPlates,
  selectedCategory,
  onSelectCategory,
  onOpenLightbox,
  onOpenInquiry,
  onOpenInstagramScreen,
}) => {
  // Filter plates based on selected filter
  const filteredPlates = selectedCategory === 'ALL'
    ? allPlates
    : allPlates.filter((p) => p.category === selectedCategory);

  // Split into the 4 series matching the screenshot
  const floraPlates = filteredPlates.filter((p) => p.seriesId === 'flora');
  const monsoonPlates = filteredPlates.filter((p) => p.seriesId === 'monsoon');
  const woodlandsPlates = filteredPlates.filter((p) => p.seriesId === 'woodlands');
  const heritagePlates = filteredPlates.filter((p) => p.seriesId === 'heritage');

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-12 lg:py-16">
      {/* ===================== HERO MASTHEAD ===================== */}
      <section className="mb-16 lg:mb-20">
        {/* Kicker Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[#c5a059] text-xs">■</span>
          <span className="font-mono text-[11px] sm:text-xs tracking-[0.22em] text-[#a6a5a1] uppercase font-medium">
            FIELD WORKS ARCHIVE • 2024 COLLECTION • VIVEK'S LENS
          </span>
        </div>

        {/* Big Display Title + Archival Dispatch Badge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-6">
          <div className="lg:col-span-8">
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-[80px] leading-[1.06] text-[#e5e2e1] font-normal tracking-[-0.02em]">
              Field Works &amp; <span className="italic text-[#e9c176] font-normal">Living Heritage</span>
            </h1>
          </div>

          {/* Archival Dispatch Placard */}
          <div className="lg:col-span-4 bg-[#181818] border border-[#2b2a28] p-5 sm:p-6 lg:mt-2">
            <div className="flex items-center gap-2 text-[#c5a059] mb-2">
              <span className="font-mono text-xs">◎</span>
              <span className="label-caps font-medium">ARCHIVAL DISPATCH</span>
            </div>
            <p className="text-xs text-[#a6a5a1] leading-relaxed font-light">
              9 Master Plates cataloged across Tamil Nadu, Karnataka &amp; Kerala woodlands.
            </p>
          </div>
        </div>

        {/* Narrative Subtitle Description */}
        <p className="text-[#a6a5a1] text-sm sm:text-base leading-relaxed max-w-3xl font-light mb-8">
          An authentic visual journal spanning botanical studies after rainfall, moody monsoon twilight streets, timeless banyan groves, and the sacred architectural majesty of South Indian temple artistry. Photographed by Vivek (<span className="text-[#c5a059]">@vivekk.captures</span>).
        </p>

        {/* Filter Controls Row matching screenshot */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-2">
          {FILTER_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`label-caps px-3.5 sm:px-4 py-2 border transition-all cursor-pointer flex items-center gap-2 text-[10px] sm:text-[11px] whitespace-nowrap ${
                  isSelected
                    ? 'border-[#c5a059] bg-[#c5a059] text-[#131313] font-semibold'
                    : 'border-[#2c2b2a] bg-[#161616] text-[#8e8d8a] hover:border-[#4e4639] hover:text-[#e5e2e1]'
                }`}
              >
                {isSelected && <span className="text-[#131313] text-[9px]">●</span>}
                <span>{cat.label}</span>
                <span className={`font-mono text-[10px] ${isSelected ? 'text-[#131313]/80' : 'text-[#666]'}`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ===================== SERIES 01: FLORA & DEWDROP BOTANICALS ===================== */}
      {(selectedCategory === 'ALL' || selectedCategory === 'FLORA & BOTANICALS') && floraPlates.length > 0 && (
        <section className="mb-20 pt-12 border-t border-[#262626]">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
            <div>
              <span className="font-mono text-[11px] tracking-[0.18em] text-[#8e8d8a] block mb-1">
                01 • MONSOON GARDEN MACRO SERIES
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#e5e2e1] font-normal">
                Flora &amp; Dewdrop Botanicals
              </h2>
            </div>
            <span className="label-caps text-[#8e8d8a] tracking-wider text-[11px] font-medium shrink-0">
              3 EXHIBITED PLATES • RAIN-KISSED PETALS
            </span>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {floraPlates.map((plate) => (
              <PlateCard
                key={plate.id}
                plate={plate}
                onOpenLightbox={onOpenLightbox}
                aspectClass="aspect-[4/3]"
              />
            ))}
          </div>
        </section>
      )}

      {/* ===================== SERIES 02: MONSOON & URBAN SOLITUDE ===================== */}
      {(selectedCategory === 'ALL' || selectedCategory === 'MONSOON SOLITUDE') && monsoonPlates.length > 0 && (
        <section className="mb-20 pt-12 border-t border-[#262626]">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
            <div>
              <span className="font-mono text-[11px] tracking-[0.18em] text-[#8e8d8a] block mb-1">
                02 • TWILIGHT STREET &amp; RAIN SERIES
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#e5e2e1] font-normal">
                Monsoon &amp; Urban Solitude
              </h2>
            </div>
            <span className="label-caps text-[#8e8d8a] tracking-wider text-[11px] font-medium shrink-0">
              2 EXHIBITED PLATES • ASPHALT NOCTURNES
            </span>
          </div>

          {/* 2 Equal Columns Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {monsoonPlates.map((plate) => (
              <PlateCard
                key={plate.id}
                plate={plate}
                onOpenLightbox={onOpenLightbox}
                aspectClass="aspect-[4/3]"
              />
            ))}
          </div>
        </section>
      )}

      {/* ===================== SERIES 03: ANCIENT WOODLANDS & LIVING CANOPIES ===================== */}
      {(selectedCategory === 'ALL' || selectedCategory === 'ANCIENT WOODLANDS') && woodlandsPlates.length > 0 && (
        <section className="mb-20 pt-12 border-t border-[#262626]">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
            <div>
              <span className="font-mono text-[11px] tracking-[0.18em] text-[#8e8d8a] block mb-1">
                03 • BOTANICAL SANCTUARIES
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#e5e2e1] font-normal">
                Ancient Woodlands &amp; Living Canopies
              </h2>
            </div>
            <span className="label-caps text-[#8e8d8a] tracking-wider text-[11px] font-medium shrink-0">
              2 EXHIBITED PLATES • ARBOREAL CATHEDRALS
            </span>
          </div>

          {/* Asymmetric Grid: Wide plate 006 left, standard plate 007 right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {woodlandsPlates.find((p) => p.id === '006') && (
              <div className="lg:col-span-7">
                <PlateCard
                  plate={woodlandsPlates.find((p) => p.id === '006')!}
                  onOpenLightbox={onOpenLightbox}
                  aspectClass="aspect-[16/10] sm:aspect-[16/9]"
                  isWide={true}
                />
              </div>
            )}
            {woodlandsPlates.find((p) => p.id === '007') && (
              <div className="lg:col-span-5">
                <PlateCard
                  plate={woodlandsPlates.find((p) => p.id === '007')!}
                  onOpenLightbox={onOpenLightbox}
                  aspectClass="aspect-[4/3]"
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* ===================== SERIES 04: HERITAGE ARCHITECTURE & SACRED SCULPTURES ===================== */}
      {(selectedCategory === 'ALL' || selectedCategory === 'HERITAGE & GOPURAM') && heritagePlates.length > 0 && (
        <section className="mb-20 pt-12 border-t border-[#262626]">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
            <div>
              <span className="font-mono text-[11px] tracking-[0.18em] text-[#8e8d8a] block mb-1">
                04 • TEMPLE ARCHITECTURE &amp; ICONOGRAPHY
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#e5e2e1] font-normal">
                Heritage Architecture &amp; Sacred Sculptures
              </h2>
            </div>
            <span className="label-caps text-[#8e8d8a] tracking-wider text-[11px] font-medium shrink-0">
              2 EXHIBITED PLATES • DRAVIDIAN MASTERWORKS
            </span>
          </div>

          {/* 2 Equal Columns Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {heritagePlates.map((plate) => (
              <PlateCard
                key={plate.id}
                plate={plate}
                onOpenLightbox={onOpenLightbox}
                aspectClass="aspect-[4/3]"
              />
            ))}
          </div>
        </section>
      )}

      {/* ===================== FOLIO REGISTRY ===================== */}
      <FolioRegistry onOpenInquiry={() => onOpenInquiry(allPlates[0])} />

      {/* ===================== INSTAGRAM / STUDIO CALLOUT ===================== */}
      <InstagramCallout
        onOpenInstagramScreen={onOpenInstagramScreen}
        onOpenInquiry={() => onOpenInquiry(allPlates[0])}
      />
    </div>
  );
};
