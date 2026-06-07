import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { Button, Badge } from '../common/UI';

const PizzaCard = ({ pizza, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState('M');
  const sizes = [
    { id: 'S', label: '8"' }, { id: 'M', label: '11"' }, { id: 'L', label: '13"' }, { id: 'F', label: '16"' }
  ];

  return (
    <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#F97316]/50 transition-all duration-300 group flex flex-col h-full relative">
      <div className="relative h-56 overflow-hidden">
        <img src={pizza.image} alt={pizza.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <Badge className="absolute top-4 left-4">{pizza.category}</Badge>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white leading-tight mb-2">{pizza.name}</h3>
        <p className="text-gray-400 text-sm mb-6 flex-grow">{pizza.desc}</p>
        
        <div className="mb-6">
          <div className="flex gap-2 bg-[#0F0F0F] p-1.5 rounded-xl border border-gray-800" role="group" aria-label="Select Pizza Size">
            {sizes.map((size) => (
              <button
                key={size.id}
                aria-pressed={selectedSize === size.id}
                onClick={() => setSelectedSize(size.id)}
                className={`flex-1 py-1.5 text-sm font-medium rounded-lg transition-all ${
                  selectedSize === size.id ? 'bg-[#F97316] text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                {size.id}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-800">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400">Qeemat</span>
            <span className="text-2xl font-black text-[#FACC15]">Rs. {pizza.prices[selectedSize]}</span>
          </div>
          <Button variant="icon" aria-label={`Add ${pizza.name} to cart`} onClick={() => onAddToCart(pizza, selectedSize, pizza.prices[selectedSize])}>
            <ShoppingBag size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
