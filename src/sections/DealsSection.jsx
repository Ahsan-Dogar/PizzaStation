import React from 'react';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import dealImage from '../assets/hero.png';

const DealsSection = ({ setActiveCategory }) => {
  return (
    <section id="deals" className="py-20 bg-[#1A1A1A] border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="relative rounded-3xl overflow-hidden group h-[300px] sm:h-[400px]">
            <img src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=800&q=80" alt="Pizza Station Buy 1 Get 1 Free Deal - Two delicious pizzas on special offer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full">
              <Badge className="mb-3">Mehsoos Mudat Ke Liye</Badge>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">Buy 1 Get 1 Free</h3>
              <p className="text-gray-300 text-sm sm:text-base mb-6 max-w-sm line-clamp-2 sm:line-clamp-none">Dugni khushiyan! Hamare tamam classic aur signature flavors par dastiyab.</p>
              <Button variant="secondary" className="rounded-full text-xs sm:text-sm px-6 py-3" onClick={() => {document.getElementById('menu').scrollIntoView(); setActiveCategory('Classic')}}>Offer Hasil Karein</Button>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden group h-[300px] sm:h-[400px]">
            <img src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80" alt="Pizza Station Crown Crust Combo Weekend Special - Stuffed crust pizza with drink and garlic bread" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full">
              <span className="bg-[#FACC15] text-black text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide inline-block mb-3">Weekend Special</span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">Crown Crust Combo</h3>
              <p className="text-gray-300 text-sm sm:text-base mb-6 max-w-sm line-clamp-2 sm:line-clamp-none">Hamara mashhoor stuffed Crown Crust Pizza bari drink aur garlic bread ke sath.</p>
              <Button variant="secondary" className="rounded-full text-xs sm:text-sm px-6 py-3" onClick={() => {document.getElementById('menu').scrollIntoView(); setActiveCategory('Stuffed Crust')}}>Combo Order Karein</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
