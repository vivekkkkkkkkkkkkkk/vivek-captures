import React, { useState } from 'react';
import { Plate } from '../data/plates';
import { X, Check, ShieldCheck, Sparkles } from 'lucide-react';

interface PrintInquiryModalProps {
  plate: Plate | null;
  onClose: () => void;
}

export const PrintInquiryModal: React.FC<PrintInquiryModalProps> = ({ plate, onClose }) => {
  const [size, setSize] = useState<'12x18' | '16x24' | '24x36'>('16x24');
  const [framing, setFraming] = useState<'unframed' | 'charcoal-oak' | 'teak'>('charcoal-oak');
  const [paper, setPaper] = useState<'hahnemuhle' | 'canson'>('hahnemuhle');
  const [collectorName, setCollectorName] = useState('');
  const [collectorEmail, setCollectorEmail] = useState('');
  const [collectorCountry, setCollectorCountry] = useState('United States');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!plate) return null;

  // Calculate pricing based on size and framing
  const basePrice = plate.printPrice;
  const sizeMultiplier = size === '12x18' ? 0.8 : size === '16x24' ? 1.0 : 1.6;
  const frameCost = framing === 'unframed' ? 0 : framing === 'charcoal-oak' ? 180 : 220;
  const totalPrice = Math.round(basePrice * sizeMultiplier + frameCost);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#080808]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-[#161616] border border-[#2f2e2d] max-w-2xl w-full p-6 sm:p-8 relative my-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 border border-[#333] hover:border-[#c5a059] text-[#a6a5a1] hover:text-[#e5e2e1] transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-[#c5a059] tracking-widest font-semibold">
                ACQUISITION INQUIRY • {plate.plateNumber}
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#e5e2e1] mb-2 font-normal">
              {plate.title}
            </h2>
            <p className="text-xs text-[#8e8d8a] mb-6 font-light">
              Limited Edition Archival Carbon Pigment Print. Numbered &amp; signed with Vivek's personal seal.
            </p>

            {/* Plate Preview Bar */}
            <div className="flex items-center gap-4 p-3 bg-[#111] border border-[#222] mb-6">
              <img
                src={plate.image}
                alt={plate.title}
                className="w-16 h-12 object-cover border border-[#333]"
                referrerPolicy="no-referrer"
              />
              <div className="flex-1 min-w-0">
                <span className="label-caps text-[#c5a059] text-[10px] block">
                  {plate.category}
                </span>
                <span className="font-mono text-xs text-[#e5e2e1] truncate block">
                  {plate.location}
                </span>
              </div>
              <div className="text-right">
                <span className="font-mono text-xs text-[#8e8d8a] block">ESTIMATED</span>
                <span className="font-mono text-lg text-[#e9c176] font-semibold">
                  ${totalPrice} USD
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Size Selection */}
              <div>
                <label className="label-caps text-[#8e8d8a] block mb-2 font-medium">
                  SELECT PRINT DIMENSION
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: '12x18', label: '12" × 18"', note: 'Collector Proof' },
                    { id: '16x24', label: '16" × 24"', note: 'Exhibition Master' },
                    { id: '24x36', label: '24" × 36"', note: 'Monumental Folio' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSize(s.id as any)}
                      className={`p-3 border text-left cursor-pointer transition-colors ${
                        size === s.id
                          ? 'border-[#c5a059] bg-[#c5a059]/10 text-[#e9c176]'
                          : 'border-[#262626] bg-[#1a1a1a] text-[#8e8d8a] hover:border-[#3a3a3a]'
                      }`}
                    >
                      <div className="font-mono text-xs font-semibold text-[#e5e2e1]">{s.label}</div>
                      <div className="text-[10px] text-[#8e8d8a] mt-0.5">{s.note}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Archival Substrate & Framing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="label-caps text-[#8e8d8a] block mb-2 font-medium">
                    ARCHIVAL SUBSTRATE
                  </label>
                  <select
                    value={paper}
                    onChange={(e) => setPaper(e.target.value as any)}
                    className="w-full bg-[#1a1a1a] border border-[#262626] text-xs text-[#e5e2e1] px-3 py-2.5 focus:border-[#c5a059] focus:outline-none"
                  >
                    <option value="hahnemuhle">Hahnemühle Photo Rag 308gsm (Cotton)</option>
                    <option value="canson">Canson Infinity Baryta Prestige II</option>
                  </select>
                </div>

                <div>
                  <label className="label-caps text-[#8e8d8a] block mb-2 font-medium">
                    GALLERY FRAMING
                  </label>
                  <select
                    value={framing}
                    onChange={(e) => setFraming(e.target.value as any)}
                    className="w-full bg-[#1a1a1a] border border-[#262626] text-xs text-[#e5e2e1] px-3 py-2.5 focus:border-[#c5a059] focus:outline-none"
                  >
                    <option value="unframed">Archival Tube (Unframed)</option>
                    <option value="charcoal-oak">Charcoal Stained Oak (+ $180)</option>
                    <option value="teak">Natural Teak Gallery Box (+ $220)</option>
                  </select>
                </div>
              </div>

              {/* Collector Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <label className="label-caps text-[#8e8d8a] block mb-1.5 font-medium">
                    COLLECTOR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={collectorName}
                    onChange={(e) => setCollectorName(e.target.value)}
                    placeholder="E.g. Elena Rostova"
                    className="w-full bg-[#1a1a1a] border border-[#262626] text-xs text-[#e5e2e1] px-3 py-2.5 focus:border-[#c5a059] focus:outline-none placeholder:text-[#444]"
                  />
                </div>
                <div>
                  <label className="label-caps text-[#8e8d8a] block mb-1.5 font-medium">
                    COLLECTOR EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={collectorEmail}
                    onChange={(e) => setCollectorEmail(e.target.value)}
                    placeholder="collector@domain.com"
                    className="w-full bg-[#1a1a1a] border border-[#262626] text-xs text-[#e5e2e1] px-3 py-2.5 focus:border-[#c5a059] focus:outline-none placeholder:text-[#444]"
                  />
                </div>
              </div>

              <div>
                <label className="label-caps text-[#8e8d8a] block mb-1.5 font-medium">
                  DELIVERY COUNTRY / REGION
                </label>
                <input
                  type="text"
                  required
                  value={collectorCountry}
                  onChange={(e) => setCollectorCountry(e.target.value)}
                  className="w-full bg-[#1a1a1a] border border-[#262626] text-xs text-[#e5e2e1] px-3 py-2.5 focus:border-[#c5a059] focus:outline-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center justify-between border-t border-[#262626]">
                <div className="flex items-center gap-2 text-[11px] text-[#8e8d8a]">
                  <ShieldCheck className="w-4 h-4 text-[#c5a059]" />
                  <span>Includes Certificate of Authenticity</span>
                </div>

                <button
                  type="submit"
                  className="label-caps px-6 py-3 bg-[#e9c176] text-[#261900] font-semibold hover:bg-[#ffdea5] transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>SUBMIT INQUIRY</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-[#c5a059]/15 border border-[#c5a059] rounded-full mx-auto flex items-center justify-center text-[#e9c176]">
              <Check className="w-7 h-7 stroke-[2]" />
            </div>

            <span className="label-caps text-[#c5a059] tracking-widest block font-medium">
              RESERVATION RECORDED • FOLIO #VK-2024-{plate.id}
            </span>

            <h3 className="font-serif text-3xl text-[#e5e2e1] font-normal">
              Inquiry Dispatched to Vivek's Studio
            </h3>

            <p className="text-xs sm:text-sm text-[#a6a5a1] max-w-md mx-auto leading-relaxed font-light">
              Thank you, <span className="text-[#e5e2e1] font-medium">{collectorName}</span>. Your reserve inquiry for{' '}
              <span className="text-[#e9c176] italic">"{plate.title}"</span> ({size}", {framing}) has been logged. Our studio coordinator will contact you at{' '}
              <span className="text-[#e5e2e1] font-medium">{collectorEmail}</span> within 24 hours with exact shipping logistics and certificate verification.
            </p>

            <div className="pt-6">
              <button
                onClick={onClose}
                className="label-caps px-6 py-2.5 border border-[#4e4639] text-[#e5e2e1] hover:border-[#c5a059] hover:text-[#e9c176] transition-colors cursor-pointer"
              >
                RETURN TO GALLERY
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
