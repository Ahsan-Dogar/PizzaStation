import React, { useState, useEffect } from 'react';
import { ShoppingBag, X, Trash2, Minus, Plus, CreditCard, Loader2, ChevronRight, CheckCircle } from 'lucide-react';
import Button from '../common/Button';

const CartDrawer = ({ isOpen, onClose, cart, updateQuantity, removeFromCart, clearCart, cartTotal }) => {
  const [step, setStep] = useState('cart'); // 'cart' | 'payment' | 'success'
  const [method, setMethod] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // A11y: Close on ESC
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape' && isOpen) handleClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep('cart');
      if (step === 'success') clearCart();
    }, 300);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => { setIsProcessing(false); setStep('success'); }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end" role="dialog" aria-modal="true" aria-labelledby="cart-title">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" onClick={handleClose}></div>
      <div className="relative w-full sm:w-[450px] bg-[#1A1A1A] h-full shadow-2xl flex flex-col border-l border-gray-800 animate-in slide-in-from-right duration-300">
        
        <div className="bg-[#0F0F0F] p-4 sm:p-5 flex justify-between items-center border-b border-gray-800">
          <h2 id="cart-title" className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
            <ShoppingBag className="text-[#FACC15]" /> 
            {step === 'cart' ? 'Aap Ka Cart' : step === 'payment' ? 'Payment' : 'Order Confirm!'}
          </h2>
          <button aria-label="Close Cart" onClick={handleClose} className="text-gray-400 hover:text-white bg-gray-800/50 p-2 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-4 sm:p-5">
          {step === 'cart' && (
            cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400 text-center">
                <div className="bg-[#0F0F0F] p-8 rounded-full mb-6">
                  <ShoppingBag size={64} className="opacity-20" />
                </div>
                <p className="text-lg font-bold text-white mb-2">Aap ka cart khali hai</p>
                <p className="text-sm text-gray-500 mb-6">Lagta hai aapne abhi tak koi pizza select nahi kiya.</p>
                <Button onClick={handleClose} variant="primary" className="rounded-full px-8">Menu dekhein</Button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-4 bg-[#0F0F0F] p-3 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors">
                    <img src={item.image} alt={item.name} className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl" />
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-white text-sm sm:text-base leading-tight">{item.name}</h4>
                          <button aria-label="Remove item" onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-red-500 transition-colors p-1">
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-[10px] sm:text-xs text-[#F97316] font-bold uppercase tracking-widest mt-1">Size: {item.size}</p>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="font-black text-[#FACC15] text-base sm:text-lg">Rs. {item.price * item.quantity}</span>
                        <div className="flex items-center gap-3 bg-[#1A1A1A] rounded-xl px-2 py-1 border border-gray-800">
                          <button aria-label="Decrease" onClick={() => updateQuantity(item.id, -1)} className="text-gray-400 hover:text-white transition-colors p-1"><Minus size={14} /></button>
                          <span className="font-bold text-sm min-w-[12px] text-center text-white">{item.quantity}</span>
                          <button aria-label="Increase" onClick={() => updateQuantity(item.id, 1)} className="text-gray-400 hover:text-white transition-colors p-1"><Plus size={14} /></button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          )}

          {step === 'payment' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
              <div className="bg-[#0F0F0F] p-4 rounded-xl border border-gray-800 text-center">
                <p className="text-sm text-gray-400 mb-1">Total Bill</p>
                <p className="text-3xl font-black text-[#FACC15]">Rs. {cartTotal}</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Payment Method</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button onClick={() => setMethod('jazzcash')} className={`p-4 rounded-xl border-2 flex flex-col items-center transition-all ${method === 'jazzcash' ? 'border-[#F97316] bg-[#F97316]/10' : 'border-gray-800 bg-[#0F0F0F]'}`}>
                    <div className="text-red-500 font-black text-xl italic tracking-tighter">JazzCash</div>
                  </button>
                  <button onClick={() => setMethod('easypaisa')} className={`p-4 rounded-xl border-2 flex flex-col items-center transition-all ${method === 'easypaisa' ? 'border-[#25D366] bg-[#25D366]/10' : 'border-gray-800 bg-[#0F0F0F]'}`}>
                    <div className="text-green-500 font-black text-xl tracking-tighter flex items-center">easy<span className="text-white">paisa</span></div>
                  </button>
                </div>
              </div>
              {method && (
                <form onSubmit={handlePayment} className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Mobile Account Number</label>
                    <input type="tel" required pattern="[0-9]{4}-[0-9]{7}" placeholder="03XX-XXXXXXX" className="w-full bg-[#0F0F0F] border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#F97316]" />
                  </div>
                  <Button type="submit" variant="primary" className="w-full py-4 text-lg" disabled={isProcessing}>
                    {isProcessing ? <><Loader2 className="animate-spin" size={20} /> Processing...</> : <><CreditCard size={20}/> Pay Rs. {cartTotal}</>}
                  </Button>
                  <button type="button" onClick={() => setStep('cart')} className="w-full text-center text-sm text-gray-400 hover:text-white py-2">Peechay Jayein</button>
                </form>
              )}
            </div>
          )}

          {step === 'success' && (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-6 animate-in zoom-in-95 duration-500">
              <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={48} />
              </div>
              <h3 className="text-3xl font-black text-white">Shukriya!</h3>
              <p className="text-gray-400">Aap ka order confirm ho gaya hai.</p>
              <Button onClick={handleClose} variant="secondary" className="w-full py-4 mt-4">Menu Par Wapis</Button>
            </div>
          )}
        </div>

        {step === 'cart' && cart.length > 0 && (
          <div className="bg-[#0F0F0F] p-5 border-t border-gray-800 space-y-4">
            <div className="flex justify-between items-center text-lg">
              <span className="text-gray-400 font-medium">Total:</span>
              <span className="text-2xl font-black text-[#FACC15]">Rs. {cartTotal}</span>
            </div>
            <Button onClick={() => setStep('payment')} variant="primary" className="w-full py-4 text-lg">
              Checkout <ChevronRight size={20} />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
