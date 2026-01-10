import React, { useState, type JSX } from 'react';
import { CartContext, type CartItem } from './cart-context/CartContext';
import CartView from './cart-context/CartView';




export default function App(): JSX.Element {
  const [items, setItems] = useState<CartItem[]>([]);


  const addItem = (item: CartItem): void => {
    setItems((prev) => [...prev, item]);
  };


  const removeItem = (id: number): void => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };


  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      <CartView />
    </CartContext.Provider>
  );
}
