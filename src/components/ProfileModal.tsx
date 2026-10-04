import React from 'react';
import { imgPhotographerAvatar } from '../data/plates';
import { X, Check, Instagram, Mail, Award, Camera, MapPin } from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenInquiry: () => void;
  onGoToInstagram: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  onOpenInquiry,
  onGoToInstagram,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#080808]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-[#161616] border border-[#2f2e2d] max-w-xl w-full p-6 sm:p-8 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 border border-[#333] hover:border-[#c5a059] text-[#a6a5a1] hover:text-[#e5e2e1] cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center pb-6 border-b border-[#262626]">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#c5a059] mx-auto mb-4 shadow-xl">
            <img
              src={imgPhotographerAvatar}
              alt="Vivek"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <h3 className="font-serif text-3xl text-[#e5e2e1] font-normal">Vivek</h3>
            <span className="w-4 h-4 rounded-full bg-[#c5a059] flex items-center justify-center text-[#131313]">
              <Check className="w-2.5 h-2.5 stroke-[3]" />
            </span>
          </div>
          <span className="label-caps text-[#c5a059] font-medium block mb-3">
            @VIVEKK.CAPTURES
          </span>
          <p className="text-xs sm:text-sm text-[#a6a5a1] max-w-md mx-auto leading-relaxed font-light">
            Editorial &amp; Nature Photographer based in South India. Dedicated to documenting fragile monsoon ecosystems, quiet botanical studies, and the sacred stone architecture of the Dravidian heartland.
          </p>
        </div>

        <div className="py-6 space-y-4">
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-[#121212] border border-[#222]">
              <div className="flex items-center gap-1.5 text-[#c5a059] mb-1">
                <Camera className="w-3.5 h-3.5" />
                <span className="label-caps font-medium">PRIMARY CAMERAS</span>
              </div>
              <span className="text-[#e5e2e1] font-mono text-[11px] block">Hasselblad X2D 100C</span>
              <span className="text-[#8e8d8a] font-mono text-[11px] block">Leica M11 Monochrom</span>
            </div>

            <div className="p-3 bg-[#121212] border border-[#222]">
              <div className="flex items-center gap-1.5 text-[#c5a059] mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span className="label-caps font-medium">FIELD BASES</span>
              </div>
              <span className="text-[#e5e2e1] text-[11px] block">Western Ghats, Kerala</span>
              <span className="text-[#8e8d8a] text-[11px] block">Madurai &amp; Thanjavur, TN</span>
            </div>
          </div>

          <div className="p-3 bg-[#121212] border border-[#222]">
            <div className="flex items-center gap-1.5 text-[#c5a059] mb-1">
              <Award className="w-3.5 h-3.5" />
              <span className="label-caps font-medium">EXHIBITION HONORS</span>
            </div>
            <p className="text-[11px] text-[#a6a5a1] leading-relaxed">
              Exhibited at Chennai Photo Biennale Collateral (2023), Kerala Lalithakala Akademi Solo Showcase (2024), and featured in international botanical design monographs.
            </p>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => {
              onClose();
              onGoToInstagram();
            }}
            className="w-full sm:w-1/2 label-caps py-3 bg-[#e9c176] text-[#261900] font-semibold hover:bg-[#ffdea5] transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>INSTAGRAM FEED</span>
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenInquiry();
            }}
            className="w-full sm:w-1/2 label-caps py-3 border border-[#4e4639] text-[#e5e2e1] hover:border-[#c5a059] hover:text-[#e9c176] transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>PRINT INQUIRY</span>
          </button>
        </div>
      </div>
    </div>
  );
};
