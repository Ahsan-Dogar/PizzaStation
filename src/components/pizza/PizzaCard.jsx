import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';

const PizzaCard = ({ pizza, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState('M');
  const sizes = [
    { id: 'S', label: '8"' }, { id: 'M', label: '11"' }, { id: 'L', label: '13"' }, { id: 'F', label: '16"' }
  ];

  return (
    <div className="bg-[#1A1A1A] rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-800/50 hover:border-[#F97316]/50 transition-all duration-500 group flex flex-col h-full relative hover:shadow-2xl hover:shadow-[#F97316]/10">
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img src={pizza.image} alt={pizza.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-60"></div>
        <Badge className="absolute top-4 left-4 shadow-lg">{pizza.category}</Badge>
      </div>
      
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-bold text-white leading-tight mb-2 group-hover:text-[#FACC15] transition-colors">{pizza.name}</h3>
        <p className="text-gray-400 text-xs sm:text-sm mb-6 flex-grow line-clamp-2 sm:line-clamp-none">{pizza.desc}</p>
        
        <div className="mb-6">
          <div className="flex gap-1 sm:gap-2 bg-[#0F0F0F] p-1 sm:p-1.5 rounded-xl border border-gray-800" role="group" aria-label="Select Pizza Size">
            {sizes.map((size) => (
              <button
                key={size.id}
                aria-pressed={selectedSize === size.id}
                onClick={() => setSelectedSize(size.id)}
                className={`flex-1 py-1 sm:py-1.5 text-[10px] sm:text-sm font-bold rounded-lg transition-all ${
                  selectedSize === size.id ? 'bg-[#F97316] text-white shadow-lg' : 'text-gray-500 hover:text-white hover:bg-gray-800'
                }`}
              >
                {size.id}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
          <div className="flex flex-col">
            <span className="text-[10px] sm:text-xs text-gray-500 uppercase font-bold tracking-wider">Qeemat</span>
            <span className="text-xl sm:text-2xl font-black text-[#FACC15]">Rs. {pizza.prices[selectedSize]}</span>
          </div>
          <Button 
            variant="icon" 
            aria-label={`Add ${pizza.name} to cart`} 
            onClick={() => onAddToCart(pizza, selectedSize, pizza.prices[selectedSize])}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full sm:rounded-xl"
          >
            <ShoppingBag size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
