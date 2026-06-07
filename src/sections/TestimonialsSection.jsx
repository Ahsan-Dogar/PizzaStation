import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants/testimonials';

const TestimonialsSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Aap Jaise Logon Ki<br/>Pehli Pasand</h2>
          <p className="text-[#FACC15] font-bold tracking-widest uppercase mb-3">Community Ka Pyar</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div key={idx} className="bg-[#1A1A1A] p-6 sm:p-8 rounded-2xl border border-gray-800 hover:border-[#F97316]/30 transition-all duration-300 group">
              <div className="flex gap-1 text-[#FACC15] mb-4 sm:mb-6" aria-label="5 stars rating">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed italic group-hover:text-white transition-colors">"{testimonial.text}"</p>
              <div>
                <p className="font-bold text-white text-sm sm:text-base">{testimonial.name}</p>
                <p className="text-xs sm:text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
