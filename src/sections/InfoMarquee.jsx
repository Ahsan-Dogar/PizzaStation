import React from 'react';
import { Truck, Flame, Heart } from 'lucide-react';

const InfoMarquee = () => {
  return (
    <div className="bg-[#1A1A1A] border-y border-gray-800 py-4 sm:py-6 overflow-hidden flex whitespace-nowrap">
      <div className="animate-marquee flex gap-8 sm:gap-12 items-center text-gray-400 font-bold sm:font-semibold tracking-widest uppercase text-[10px] sm:text-sm">
        <span className="flex items-center gap-2 sm:gap-3 min-w-max"><Truck className="text-[#F97316] w-4 h-4 sm:w-5 sm:h-5" /> Free Delivery Over 500</span>
        <span className="text-gray-700">•</span>
        <span className="flex items-center gap-2 sm:gap-3 text-white min-w-max"><Flame className="text-[#FACC15] w-4 h-4 sm:w-5 sm:h-5" /> Wed: Buy 1 Get 1 Free!</span>
        <span className="text-gray-700">•</span>
        <span className="flex items-center gap-2 sm:gap-3 min-w-max"><Heart className="text-[#F97316] w-4 h-4 sm:w-5 sm:h-5" /> 100% Fresh Ingredients</span>
        <span className="text-gray-700">•</span>
        {/* Duplicate for seamless loop */}
        <span className="flex items-center gap-2 sm:gap-3 min-w-max"><Truck className="text-[#F97316] w-4 h-4 sm:w-5 sm:h-5" /> Free Delivery Over 500</span>
        <span className="text-gray-700">•</span>
        <span className="flex items-center gap-2 sm:gap-3 text-white min-w-max"><Flame className="text-[#FACC15] w-4 h-4 sm:w-5 sm:h-5" /> Wed: Buy 1 Get 1 Free!</span>
        <span className="text-gray-700">•</span>
        <span className="flex items-center gap-2 sm:gap-3 min-w-max"><Heart className="text-[#F97316] w-4 h-4 sm:w-5 sm:h-5" /> 100% Fresh Ingredients</span>
      </div>
    </div>
  );
};

export default InfoMarquee;
