import React from 'react';

const Logo = ({ className = '', textClassName = '' }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="relative w-12 h-12 rounded-full bg-[#0F0F0F] border border-gray-800 flex items-center justify-center shadow-[0_0_0_3px_rgba(255,183,3,0.12)]">
      <svg viewBox="0 0 120 120" className="w-10 h-10" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="42" fill="#FACC15" stroke="#F97316" strokeWidth="6" />
        <path d="M60 18c6 0 10 5 10 10s-4 10-10 10-10-5-10-10 4-10 10-10Z" fill="#FFE9A4" />
        <path d="M60 28c2 0 4 2 4 4s-2 4-4 4-4-2-4-4 2-4 4-4Z" fill="#F97316" />
        <path d="M30 60c0-16 14-30 30-30s30 14 30 30-14 30-30 30-30-14-30-30Z" fill="#F97316" opacity="0.12" />
        <path d="M60 20L60 60" stroke="#0F0F0F" strokeWidth="2" />
        <path d="M60 60L84 74" stroke="#0F0F0F" strokeWidth="2" />
        <path d="M60 60L36 74" stroke="#0F0F0F" strokeWidth="2" />
        <circle cx="42" cy="46" r="5" fill="#E63946" />
        <circle cx="78" cy="56" r="5" fill="#E63946" />
        <circle cx="52" cy="78" r="5" fill="#E63946" />
      </svg>
    </div>
    <div className={`flex flex-col ${textClassName}`}>
      <span className="text-xl sm:text-2xl font-black tracking-tighter leading-none text-white">PIZZA</span>
      <span className="text-[10px] sm:text-sm font-bold tracking-[0.2em] text-[#F97316] leading-none">STATION</span>
    </div>
  </div>
);

export default Logo;
