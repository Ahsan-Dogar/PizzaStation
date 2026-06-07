import { useState, useCallback } from 'react';

export function useCart() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback((pizza, size, price) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.pizzaId === pizza.id && item.size === size);
      if (existingItem) {
        return prev.map(item => 
          item.pizzaId === pizza.id && item.size === size 
            ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { id: crypto.randomUUID(), pizzaId: pizza.id, name: pizza.name, size, price, quantity: 1, image: pizza.image }];
    });
    setIsCartOpen(true);
  }, []);

  const updateQuantity = useCallback((id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + delta;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }));
  }, []);

  const removeFromCart = useCallback((id) => setCart(prev => prev.filter(item => item.id !== id)), []);
  const clearCart = useCallback(() => setCart([]), []);

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return { cart, isCartOpen, setIsCartOpen, addToCart, updateQuantity, removeFromCart, clearCart, cartTotal, cartCount };
}
