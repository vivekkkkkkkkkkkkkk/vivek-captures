import React from 'react';
import { Plate } from '../data/plates';
import { ArrowUpRight } from 'lucide-react';

interface PlateCardProps {
  plate: Plate;
  onOpenLightbox: (plate: Plate) => void;
  aspectClass?: string;
  isWide?: boolean;
}

export const PlateCard: React.FC<PlateCardProps> = ({
  plate,
  onOpenLightbox,
  aspectClass = 'aspect-[4/3]',
  isWide = false,
}) => {
  return (
    <article
      onClick={() => onOpenLightbox(plate)}
      className="group relative bg-[#171717] border border-[#262626] hover:border-[#c5a059] transition-all duration-300 cursor-pointer flex flex-col justify-between"
    >
      {/* Visual Image Container */}
      <div className={`relative w-full ${aspectClass} overflow-hidden bg-[#101010]`}>
        <img
          src={plate.image}
          alt={plate.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Plate Number Placard */}
        <div className="absolute top-3 left-3 bg-[#131313]/90 backdrop-blur-xs border border-[#353534] px-2.5 py-1 z-10">
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#e5e2e1] font-medium">
            {plate.plateNumber}
          </span>
        </div>

        {/* Ambient Hover Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>

      {/* Plate Details & Placard */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
        <div className="space-y-2.5">
          {/* Top Micro-Metadata Row */}
          <div className="flex items-center justify-between gap-2 border-b border-[#262626] pb-2.5">
            <span className="label-caps text-[#c5a059] font-medium">
              {plate.tag}
            </span>
            <span className="font-mono text-[11px] text-[#8e8d8a] tracking-wider">
              {plate.technical}
            </span>
          </div>

          {/* Exhibition Plate Title */}
          <h3
            className={`font-serif text-[#e5e2e1] group-hover:text-[#e9c176] transition-colors ${
              isWide ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'
            } leading-tight font-normal`}
          >
            {plate.title}
          </h3>

          {/* Editorial Caption */}
          <p className="text-[#a6a5a1] text-xs sm:text-[13px] leading-relaxed line-clamp-3 font-light">
            {plate.caption}
          </p>
        </div>

        {/* Footer Technical Bar & View Affordance */}
        <div className="pt-3 border-t border-[#222222] flex items-center justify-between text-xs text-[#8e8d8a]">
          <span className="text-[11px] tracking-wide text-[#7a7875] truncate max-w-[200px] sm:max-w-none">
            {plate.footerLeft}
          </span>
          <span className="label-caps text-[#c5a059] group-hover:text-[#ffdea5] flex items-center gap-1 shrink-0 font-medium transition-transform duration-200 group-hover:translate-x-0.5">
            {plate.actionText}
          </span>
        </div>
      </div>
    </article>
  );
};
