import React from 'react';
import { MENU_CATEGORIES } from '../constants/menu';
import PizzaCard from '../components/pizza/PizzaCard';

const MenuSection = ({ activeCategory, setActiveCategory, filteredMenu, addToCart }) => {
  return (
    <section id="menu" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Hamare Oven Se<br/>Behtareen Pizzas</h2>
          <p className="text-[#F97316] font-bold tracking-widest uppercase mb-3">Pizza Lovers Ki Pasand</p>
          <p className="text-gray-400">Har perfect slice ki ek kahani hai. Hamare classic, signature ya premium stuffed crust mein se chunein.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12" role="tablist" aria-label="Menu Categories">
          {MENU_CATEGORIES.map(category => (
            <button
              key={category}
              role="tab"
              aria-selected={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-[#F97316] ${
                activeCategory === category 
                  ? 'bg-white text-black shadow-lg' : 'bg-[#1A1A1A] text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredMenu.map(pizza => (
            <PizzaCard key={pizza.id} pizza={pizza} onAddToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
