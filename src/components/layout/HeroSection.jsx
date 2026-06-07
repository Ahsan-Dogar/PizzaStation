import React from 'react';
import { Award, ChevronRight } from 'lucide-react';
import Button from '../common/Button';
import WhatsAppIcon from '../common/WhatsAppIcon';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../../constants/config';
import heroImage from '../../assets/hero.png';

const HeroSection = ({ heroRef, handleMouseMove }) => {
  return (
    <section 
      ref={heroRef}
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[90vh]"
      onMouseMove={handleMouseMove}
      style={{ '--mx': '0px', '--my': '0px' }}
    >
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Delicious cheesy pizza background" role="presentation" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/85 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/60 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full mt-8 lg:mt-0">
        
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A1A]/80 border border-gray-700 backdrop-blur-md mb-6 animate-fade-in">
            <Award size={16} className="text-[#FACC15]" />
            <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase">Lahore Ka Number 1 Crust</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-6 tracking-tighter max-w-3xl">
            BITE IT. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACC15] to-[#F97316]">LOVE IT.</span><br/>
            REPEAT.
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl mb-10 leading-relaxed">
            Garam slices. Bade bites. Ab koi pachtawa nahi. Hamare ingredients taaza hain aur hamari team aapko shehar ka behtareen pizza serve karne ke liye tayar hai.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#menu" className="focus:outline-none w-full sm:w-auto">
              <Button variant="primary" className="w-full sm:w-auto rounded-full text-base sm:text-lg py-4 sm:py-3 px-8">
                Menu Dekhein <ChevronRight size={20} />
              </Button>
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} target="_blank" rel="noopener noreferrer" className="focus:outline-none w-full sm:w-auto">
              <Button variant="secondary" className="w-full sm:w-auto rounded-full text-base sm:text-lg py-4 sm:py-3 px-8">
                <WhatsAppIcon size={20} className="text-[#25D366]" /> Order Now
              </Button>
            </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center h-[300px] sm:h-[450px] lg:h-[550px] w-full select-none z-10 order-1 lg:order-2 mb-8 lg:mb-0">
          <div className="absolute w-64 h-64 sm:w-[420px] sm:h-[420px] bg-[#F97316]/20 rounded-full blur-[80px] sm:blur-[120px] z-0 pointer-events-none"></div>

          <div className="absolute w-[240px] h-[240px] sm:w-[390px] sm:h-[390px] rounded-full border border-gray-800/40 flex items-center justify-center z-10 animate-[spin_120s_linear_infinite] pointer-events-none">
            <div className="w-[94%] h-[94%] rounded-full border border-dashed border-[#F97316]/15"></div>
          </div>

          <div 
            className="absolute z-20 w-[220px] h-[220px] sm:w-[380px] sm:h-[380px] lg:w-[450px] lg:h-[450px] transition-transform duration-200 ease-out"
            style={{ transform: `translate(calc(var(--mx) * 1), calc(var(--my) * 1))` }}
          >
            <img 
              src={heroImage} 
              alt="Signature Pizza Station Pizza - Fresh and Cheesy"
              className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)] animate-[spin_45s_linear_infinite] hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing"
              fetchPriority="high"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
