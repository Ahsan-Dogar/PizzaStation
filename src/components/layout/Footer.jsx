import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import WhatsAppIcon from '../common/WhatsAppIcon';
import Logo from '../common/Logo';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../../constants/config';

const Footer = () => {
  return (
    <footer id="locations" className="bg-[#1A1A1A] pt-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-b border-gray-800 pb-12 mb-12">
          <div className="text-center lg:text-left w-full lg:w-auto">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Khushiyon Ka Ek Slice<br/>Tayar Hai?</h2>
            <p className="text-gray-400 text-sm sm:text-base">Tez tareen delivery ya pickup ke liye abhi order karein.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="bg-[#0F0F0F] p-4 rounded-2xl border border-gray-800 flex items-center gap-4 hover:border-[#25D366] transition-all group w-full">
              <div className="bg-[#25D366]/10 p-3 rounded-xl group-hover:bg-[#25D366] transition-colors">
                <WhatsAppIcon className="text-[#25D366] group-hover:text-white" size={24} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">WhatsApp Order</p>
                <p className="text-lg sm:text-xl font-black text-white">0308-4314376</p>
              </div>
            </a>
            <a href="tel:03190626060" className="bg-[#0F0F0F] p-4 rounded-2xl border border-gray-800 flex items-center gap-4 hover:border-[#FACC15] transition-all group w-full">
              <div className="bg-[#FACC15]/10 p-3 rounded-xl group-hover:bg-[#FACC15] transition-colors">
                <Phone className="text-[#FACC15] group-hover:text-black" size={24} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Hotline</p>
                <p className="text-lg sm:text-xl font-black text-white">0319-0626060</p>
              </div>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center sm:text-left">
          <div className="col-span-1 lg:col-span-1 flex flex-col items-center sm:items-start">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed max-w-xs">Humara manna hai ke pizza sirf khana nahi, ek celebration hai. Pyar, lagan aur thore se pizza magic se tayar karda.</p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-[#0F0F0F] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#F97316] transition-all">FB</a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-[#0F0F0F] border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#F97316] transition-all">IG</a>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex flex-col items-center sm:items-start">
              <h4 className="text-white font-bold mb-6 flex items-center gap-2"><MapPin size={18} className="text-[#FACC15]"/> Branch 1</h4>
              <p className="text-gray-400 text-sm mb-1">Main Mansoora Bazar,</p>
              <p className="text-gray-400 text-sm mb-4">Lahore, Pakistan</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Clock size={14} />
                <p>11:00 AM - 2:00 AM</p>
              </div>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <h4 className="text-white font-bold mb-6 flex items-center gap-2"><MapPin size={18} className="text-[#FACC15]"/> Branch 2</h4>
              <p className="text-gray-400 text-sm mb-1">Chowk Anwer Market,</p>
              <p className="text-gray-400 text-sm mb-4">Peco Road, Lahore</p>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Clock size={14} />
                <p>11:00 AM - 2:00 AM</p>
              </div>
            </div>
          </div>

          <div className="col-span-1 flex flex-col items-center sm:items-start">
            <h4 className="text-white font-bold mb-6">Zaroori Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#menu" className="text-gray-400 hover:text-[#FACC15] transition-colors">Mukammal Menu</a></li>
              <li><a href="#deals" className="text-gray-400 hover:text-[#FACC15] transition-colors">Special Offers</a></li>
              <li><a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#25D366] transition-colors flex items-center gap-2">WhatsApp Order <WhatsAppIcon size={14}/></a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#FACC15] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#0F0F0F] py-6 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Pizza Station Lahore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
