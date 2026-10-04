import React from 'react';
import { imgPhotographerAvatar } from '../data/plates';
import { Check, ExternalLink } from 'lucide-react';

interface InstagramCalloutProps {
  onOpenInstagramScreen: () => void;
  onOpenInquiry: () => void;
}

export const InstagramCallout: React.FC<InstagramCalloutProps> = ({
  onOpenInstagramScreen,
  onOpenInquiry,
}) => {
  return (
    <section className="my-16">
      <div className="bg-[#191919] border border-[#2f2e2d] p-8 sm:p-10 lg:p-12 relative overflow-hidden">
        {/* Subtle background ambient light */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a059]/5 blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          {/* Left Column: Photographer Profile */}
          <div className="lg:col-span-4 flex flex-col items-start lg:border-r border-[#2a2a2a] lg:pr-8">
            <div className="relative mb-4">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#c5a059]/70 shadow-lg">
                <img
                  src={imgPhotographerAvatar}
                  alt="Vivek"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="flex items-center gap-1.5 mb-1">
              <h4 className="font-serif text-2xl text-[#e5e2e1] font-normal">
                Vivek
              </h4>
              <span
                className="w-4 h-4 rounded-full bg-[#c5a059] flex items-center justify-center text-[#131313] ml-1"
                title="Verified Photographer"
              >
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </span>
            </div>

            <span className="label-caps text-[#c5a059] mb-3 font-medium">
              @VIVEKK.CAPTURES
            </span>

            <p className="text-[#a6a5a1] text-xs sm:text-[13px] leading-relaxed font-light">
              Nature &amp; Heritage Photographer. Documenting quiet botanical epiphanies, rain-soaked landscapes, and ancient sanctuaries.
            </p>
          </div>

          {/* Right Column: Direct Field Stream & CTAs */}
          <div className="lg:col-span-8 flex flex-col justify-center space-y-4">
            <span className="label-caps text-[#c5a059] tracking-[0.2em] font-medium">
              DIRECT FIELD STREAM
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#e5e2e1] leading-snug font-normal">
              View full uncompressed series and behind-the-scenes on Instagram
            </h3>

            <p className="text-[#a6a5a1] text-xs sm:text-sm leading-relaxed font-light max-w-2xl">
              Follow along for daily photo journals, location coordinates, shutter setup discussions, and upcoming seasonal exhibition catalogs.
            </p>

            {/* Actions */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenInstagramScreen}
                className="label-caps px-6 py-3.5 bg-[#e9c176] text-[#261900] font-semibold hover:bg-[#ffdea5] transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>OPEN IN INSTAGRAM</span>
                <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>

              <button
                onClick={onOpenInquiry}
                className="label-caps px-6 py-3.5 border border-[#4e4639] text-[#e5e2e1] hover:border-[#c5a059] hover:text-[#e9c176] transition-colors cursor-pointer"
              >
                REQUEST LIMITED EDITION PRINT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
