import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Flame, ShoppingBag, X, Menu } from 'lucide-react';

// Hooks
import { useCart } from './hooks/useCart';

// Components
import Navbar from './components/layout/Navbar';
import HeroSection from './components/layout/HeroSection';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';
import AdminPanel from './components/admin/AdminPanel';
import Badge from './components/common/Badge';
import WhatsAppIcon from './components/common/WhatsAppIcon';
import Button from './components/common/Button';

// Sections
import InfoMarquee from './sections/InfoMarquee';
import MenuSection from './sections/MenuSection';
import DealsSection from './sections/DealsSection';
import TestimonialsSection from './sections/TestimonialsSection';

// Data
import { MENU_ITEMS, MENU_CATEGORIES } from './constants/menu';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from './constants/config';

// SEO
const SEOSchema = () => (
  <script 
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": "Pizza Station",
        "image": "https://images.unsplash.com/photo-1513104890138-7c749659a591",
        "servesCuisine": "Pizza",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Lahore",
          "addressRegion": "Punjab",
          "addressCountry": "PK"
        },
        "telephone": WHATSAPP_NUMBER
      })
    }}
  />
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Sab Dekhein');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [adminPanelVisible, setAdminPanelVisible] = useState(false);
  const [adminCredentials, setAdminCredentials] = useState({ username: '', password: '' });
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);
  const [adminTab, setAdminTab] = useState('login');
  const [adminActiveSubTab, setAdminActiveSubTab] = useState('overview');
  const [adminSearchOrder, setAdminSearchOrder] = useState('');
  const [adminFilterStatus, setAdminFilterStatus] = useState('all');
  const [adminSettings, setAdminSettings] = useState({
    whatsappNumber: WHATSAPP_NUMBER,
    deliveryCharges: 2.5,
    restaurantAddress: 'Station Boulevard Plaza, Block H, Pizza Town',
    restaurantPhone: '021-111-PIZZA-S',
    isOpen: true
  });

  const [adminOrders, setAdminOrders] = useState([
    {
      id: 'ord-8291',
      customer_name: 'Zeeshan Ali',
      phone: '03001234567',
      address: 'House 41, Street 3, G-11/2, Islamabad',
      items: [{ name: 'Tikka Station Supreme', qty: 2 }],
      total_price: 32.48,
      status: 'preparing',
      order_source: 'website',
      payment_method: 'COD',
      created_at: new Date(Date.now() - 3600000).toISOString()
    },
    {
      id: 'ord-1249',
      customer_name: 'Sara Khan',
      phone: '03219876543',
      address: 'Apartment 4B, Hillview Heights, Sector F-10',
      items: [
        { name: 'Fiery Beef Legend', qty: 1 },
        { name: 'Cheesy Station Classic', qty: 1 }
      ],
      total_price: 30.48,
      status: 'pending',
      order_source: 'whatsapp',
      payment_method: 'COD',
      created_at: new Date(Date.now() - 600000).toISOString()
    }
  ]);

  const [adminCustomers] = useState([
    { id: 'c1', name: 'Zeeshan Ali', phone: '03001234567', ordersCount: 4, spent: 89.5 },
    { id: 'c2', name: 'Sara Khan', phone: '03219876543', ordersCount: 2, spent: 44.98 },
    { id: 'c3', name: 'Hamza Sheikh', phone: '03335551212', ordersCount: 1, spent: 15.99 }
  ]);

  const { cart, isCartOpen, setIsCartOpen, addToCart, updateQuantity, removeFromCart, clearCart, cartTotal, cartCount } = useCart();

  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!heroRef.current) return;
    requestAnimationFrame(() => {
      const x = (e.clientX - window.innerWidth / 2) / 40;
      const y = (e.clientY - window.innerHeight / 2) / 40;
      heroRef.current.style.setProperty('--mx', `${x}px`);
      heroRef.current.style.setProperty('--my', `${y}px`);
    });
  }, []);

  const openAdminPanel = () => {
    setAdminPanelVisible(true);
    setAdminTab('login');
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminCredentials.username === 'admin' && adminCredentials.password === 'station123') {
      setAdminLoggedIn(true);
      setAdminTab('dashboard');
      setAdminActiveSubTab('overview');
    } else {
      alert('Invalid administrator credentials');
    }
  };

  const handleAdminLogout = () => {
    setAdminLoggedIn(false);
    setAdminPanelVisible(false);
    setAdminCredentials({ username: '', password: '' });
    setAdminTab('login');
  };

  const handleUpdateOrderStatus = (orderId, newStatus) => {
    setAdminOrders(prev => prev.map(order => order.id === orderId ? { ...order, status: newStatus } : order));
  };

  const handleSaveSettings = (e) => {
    e.preventDefault();
    alert('Store settings saved successfully.');
  };

  const filteredAdminOrders = useMemo(() => {
    return adminOrders.filter(order => {
      const matchesSearch = adminSearchOrder === ''
        || order.customer_name.toLowerCase().includes(adminSearchOrder.toLowerCase())
        || order.phone.includes(adminSearchOrder)
        || order.id.toLowerCase().includes(adminSearchOrder.toLowerCase());
      const matchesStatus = adminFilterStatus === 'all' || order.status === adminFilterStatus;
      return matchesSearch && matchesStatus;
    });
  }, [adminOrders, adminSearchOrder, adminFilterStatus]);

  const stats = useMemo(() => {
    const totalOrders = adminOrders.length;
    const revenue = adminOrders.reduce((sum, order) => sum + order.total_price, 0).toFixed(2);
    const activeOrders = adminOrders.filter(order => ['pending', 'confirmed', 'preparing', 'delivery'].includes(order.status)).length;
    return { totalOrders, revenue, activeOrders };
  }, [adminOrders]);

  const filteredMenu = activeCategory === 'Sab Dekhein' 
    ? MENU_ITEMS : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white font-sans selection:bg-[#F97316] selection:text-white overflow-x-hidden">
      
      <SEOSchema />
      
      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        target="_blank" rel="noopener noreferrer" aria-label="Order on WhatsApp"
        className="fixed bottom-6 left-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-[#25D366]/30 hover:scale-105 transition-transform animate-bounce"
      >
        <WhatsAppIcon size={28} />
      </a>

      {/* MODULAR CART COMPONENT */}
      <CartDrawer 
        isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cart={cart} 
        updateQuantity={updateQuantity} removeFromCart={removeFromCart} 
        clearCart={clearCart} cartTotal={cartTotal} 
      />

      <AdminPanel
        visible={adminPanelVisible}
        onClose={() => setAdminPanelVisible(false)}
        adminLoggedIn={adminLoggedIn}
        adminTab={adminTab}
        adminCredentials={adminCredentials}
        setAdminCredentials={setAdminCredentials}
        handleAdminLogin={handleAdminLogin}
        handleAdminLogout={handleAdminLogout}
        adminActiveSubTab={adminActiveSubTab}
        setAdminActiveSubTab={setAdminActiveSubTab}
        adminSearchOrder={adminSearchOrder}
        setAdminSearchOrder={setAdminSearchOrder}
        onAdminClick={openAdminPanel}
        adminFilterStatus={adminFilterStatus}
        setAdminFilterStatus={setAdminFilterStatus}
        adminOrders={adminOrders}
        filteredAdminOrders={filteredAdminOrders}
        adminCustomers={adminCustomers}
        adminSettings={adminSettings}
        setAdminSettings={setAdminSettings}
        stats={stats}
        handleUpdateOrderStatus={handleUpdateOrderStatus}
        handleSaveSettings={handleSaveSettings}
      />

      {/* --- TOP BANNER --- */}
      <div className="bg-[#F97316] text-black py-2 px-4 text-center text-sm font-bold flex items-center justify-center gap-4 uppercase tracking-wider relative z-30">
        <Flame size={16} aria-hidden="true" />
        <span>1 Ke Saath 1 Free Pizza Abhi Dastiyab Hai!</span>
        <Flame size={16} aria-hidden="true" />
      </div>

      <Navbar 
        isScrolled={isScrolled} 
        cartCount={cartCount} 
        setIsCartOpen={setIsCartOpen} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
        onAdminClick={openAdminPanel}
      />

      {/* --- MOBILE MENU --- */}
      <div className={`fixed inset-0 z-50 bg-[#0F0F0F] transition-all duration-500 ease-in-out transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col h-full pt-24 px-6 gap-6">
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-8 right-6 text-white bg-gray-800/50 p-2 rounded-full"
          >
            <X size={28} />
          </button>
          
          <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-black text-white hover:text-[#F97316] transition-colors border-b border-gray-800 pb-4">Menu</a>
          <a href="#deals" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-black text-white hover:text-[#F97316] transition-colors border-b border-gray-800 pb-4">Deals</a>
          <a href="#locations" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-black text-white hover:text-[#F97316] transition-colors border-b border-gray-800 pb-4">Locations</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-3xl font-black text-white hover:text-[#F97316] transition-colors border-b border-gray-800 pb-4">About</a>
          <button
            onClick={() => { setMobileMenuOpen(false); openAdminPanel(); }}
            className="text-left text-3xl font-black text-white hover:text-[#F97316] transition-colors border-b border-gray-800 pb-4"
          >
            Staff Login
          </button>
          
          <div className="mt-auto mb-10 bg-[#1A1A1A] p-8 rounded-3xl flex flex-col items-center justify-center text-center border border-gray-800 shadow-2xl">
            <div className="bg-[#25D366]/20 p-4 rounded-2xl mb-4">
              <WhatsAppIcon size={40} className="text-[#25D366]" />
            </div>
            <h4 className="text-gray-400 font-bold mb-2 uppercase tracking-widest text-xs">WhatsApp Par Order Karein</h4>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="text-2xl font-black text-white hover:text-[#25D366] transition-colors mb-2">0308-4314376</a>
            <a href="tel:03190626060" className="text-xl font-bold text-[#FACC15] flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FACC15] rounded-full animate-ping"></span>
              0319-0626060
            </a>
          </div>
        </div>
      </div>

      <HeroSection heroRef={heroRef} handleMouseMove={handleMouseMove} />

      <InfoMarquee />

      <MenuSection 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
          filteredMenu={filteredMenu} 
          addToCart={addToCart} 
        />
        <DealsSection setActiveCategory={setActiveCategory} />
        <TestimonialsSection />

      <Footer />

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
