import React from 'react';
import { ShoppingBag, X, Menu } from 'lucide-react';
import { Button, WhatsAppIcon } from '../common/UI';
import Logo from '../common/Logo';
import { WHATSAPP_NUMBER } from '../../constants/data';

const Navbar = ({ isScrolled, cartCount, setIsCartOpen, mobileMenuOpen, setMobileMenuOpen, onAdminClick }) => {
  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-[#0F0F0F]/95 backdrop-blur-md shadow-lg shadow-black/50 py-3 top-0' : 'bg-transparent py-6 top-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        <div className="flex items-center gap-2 sm:gap-3 cursor-pointer" tabIndex="0" aria-label="Home">
            <Logo />
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#menu" className="text-sm font-medium hover:text-[#F97316] transition-colors">Menu</a>
          <a href="#deals" className="text-sm font-medium hover:text-[#F97316] transition-colors">Deals</a>
          <a href="#locations" className="text-sm font-medium hover:text-[#F97316] transition-colors">Locations</a>
          <a href="#about" className="text-sm font-medium hover:text-[#F97316] transition-colors">About</a>
          <button onClick={onAdminClick} className="text-sm font-medium text-gray-300 hover:text-[#F97316] transition-colors">
            Staff Login
          </button>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex flex-col items-end mr-4 group cursor-pointer" onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')}>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <WhatsAppIcon size={12} className="text-[#25D366]" /> WhatsApp Order
            </span>
            <span className="text-sm font-bold text-[#FACC15] group-hover:text-white transition-colors">0308-4314376</span>
          </div>
          
          <Button variant="primary" className="relative px-6 py-2.5 rounded-full" onClick={() => setIsCartOpen(true)} aria-label={`View Cart, ${cartCount} items`}>
            <ShoppingBag size={18} />
            <span>Cart ({cartCount})</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-black text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-black">
                {cartCount}
              </span>
            )}
          </Button>
        </div>

        <button aria-label="Toggle Mobile Menu" aria-expanded={mobileMenuOpen} className="md:hidden text-white flex items-center gap-4" >
          <div onClick={() => setIsCartOpen(true)} className="relative">
            <ShoppingBag size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#F97316] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-black border-2 border-[#0F0F0F]">
                {cartCount}
              </span>
            )}
          </div>
          <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
