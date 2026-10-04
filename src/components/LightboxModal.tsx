import React, { useEffect, useState } from 'react';
import { Plate } from '../data/plates';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, MapPin, Camera, Sparkles, Shield } from 'lucide-react';

interface LightboxModalProps {
  plate: Plate | null;
  allPlates: Plate[];
  onClose: () => void;
  onSelectPlate: (plate: Plate) => void;
  onOpenInquiry: (plate: Plate) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  plate,
  allPlates,
  onClose,
  onSelectPlate,
  onOpenInquiry,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!plate) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [plate]);

  if (!plate) return null;

  const currentIndex = allPlates.findIndex((p) => p.id === plate.id);

  const navigate = (direction: number) => {
    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = allPlates.length - 1;
    if (nextIndex >= allPlates.length) nextIndex = 0;
    setIsZoomed(false);
    onSelectPlate(allPlates[nextIndex]);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#080808]/96 backdrop-blur-md flex flex-col justify-between overflow-y-auto">
      {/* Top Header Bar */}
      <div className="sticky top-0 z-20 bg-[#0c0c0c]/90 border-b border-[#262626] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-[#c5a059] tracking-widest font-semibold">
            {plate.plateNumber}
          </span>
          <span className="text-stone-600">/</span>
          <span className="label-caps text-[#8e8d8a] hidden sm:inline">
            {plate.category}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="flex items-center gap-1.5 px-3 py-1.5 border border-[#353534] text-xs text-[#a6a5a1] hover:text-[#e5e2e1] hover:border-[#c5a059] transition-colors cursor-pointer"
          >
            {isZoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
            <span className="label-caps">{isZoomed ? 'FIT' : 'ZOOM'}</span>
          </button>

          <button
            onClick={onClose}
            className="p-1.5 border border-[#353534] hover:border-[#c5a059] text-[#a6a5a1] hover:text-[#e5e2e1] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>
      </div>

      {/* Main Exhibition View */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center p-4 sm:p-8 lg:p-12 gap-8 max-w-[1600px] mx-auto w-full">
        {/* Navigation Left */}
        <button
          onClick={() => navigate(-1)}
          className="hidden md:flex p-3 border border-[#2a2a2a] hover:border-[#c5a059] text-[#8e8d8a] hover:text-[#e9c176] transition-colors cursor-pointer shrink-0"
          aria-label="Previous plate"
        >
          <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
        </button>

        {/* High Res Frame */}
        <div className="flex-1 flex items-center justify-center w-full max-h-[75vh] relative">
          <div
            className={`transition-all duration-300 ${
              isZoomed
                ? 'cursor-zoom-out scale-125 overflow-auto max-h-[85vh]'
                : 'cursor-zoom-in max-h-[70vh]'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <img
              src={plate.image}
              alt={plate.title}
              className="max-h-[70vh] w-auto max-w-full object-contain border border-[#262626] shadow-2xl bg-[#111]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Navigation Right */}
        <button
          onClick={() => navigate(1)}
          className="hidden md:flex p-3 border border-[#2a2a2a] hover:border-[#c5a059] text-[#8e8d8a] hover:text-[#e9c176] transition-colors cursor-pointer shrink-0"
          aria-label="Next plate"
        >
          <ChevronRight className="w-6 h-6 stroke-[1.5]" />
        </button>
      </div>

      {/* Exhibition Placard Panel */}
      <div className="bg-[#121212] border-t border-[#262626] p-6 sm:p-8">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Title & Curatorial Note */}
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <span className="label-caps text-[#c5a059] font-medium">
                {plate.tag}
              </span>
              <span className="text-[#555]">•</span>
              <span className="font-mono text-xs text-[#8e8d8a]">
                {plate.technical}
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl text-[#e5e2e1] font-normal">
              {plate.title}
            </h2>

            <p className="text-[#a6a5a1] text-xs sm:text-sm leading-relaxed font-light">
              {plate.descriptionExtended}
            </p>

            <div className="flex items-center gap-2 text-xs text-[#8e8d8a] pt-2">
              <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{plate.location}</span>
              <span className="font-mono text-[11px] text-[#666]">({plate.coordinates})</span>
            </div>
          </div>

          {/* Technical Optics & EXIF Specs */}
          <div className="lg:col-span-3 space-y-3 border-l lg:border-[#262626] lg:pl-6">
            <div className="flex items-center gap-2 text-xs text-[#c5a059]">
              <Camera className="w-3.5 h-3.5" />
              <span className="label-caps font-medium">OPTICAL SPECIFICATIONS</span>
            </div>

            <div className="grid grid-cols-2 gap-y-2 text-xs">
              <div>
                <span className="text-[#666] block text-[10px] uppercase">Camera</span>
                <span className="font-mono text-[#e5e2e1] text-[11px]">{plate.exif.camera}</span>
              </div>
              <div>
                <span className="text-[#666] block text-[10px] uppercase">Lens</span>
                <span className="font-mono text-[#e5e2e1] text-[11px]">{plate.exif.lens}</span>
              </div>
              <div>
                <span className="text-[#666] block text-[10px] uppercase">Aperture</span>
                <span className="font-mono text-[#e5e2e1] text-[11px]">{plate.exif.aperture}</span>
              </div>
              <div>
                <span className="text-[#666] block text-[10px] uppercase">Shutter / ISO</span>
                <span className="font-mono text-[#e5e2e1] text-[11px]">
                  {plate.exif.shutter} • {plate.exif.iso}
                </span>
              </div>
            </div>
          </div>

          {/* Collector Acquisition Button */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full space-y-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs text-[#c5a059]">
                <Shield className="w-3.5 h-3.5" />
                <span className="label-caps font-medium">ARCHIVAL PRINT</span>
              </div>
              <p className="text-[11px] text-[#8e8d8a] leading-tight">
                {plate.edition}
              </p>
              <div className="font-mono text-sm text-[#e5e2e1] font-semibold pt-1">
                From ${plate.printPrice} USD
              </div>
            </div>

            <button
              onClick={() => onOpenInquiry(plate)}
              className="w-full label-caps py-3 bg-[#e9c176] text-[#261900] font-semibold hover:bg-[#ffdea5] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>ACQUIRE ARCHIVAL PRINT</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
