import { createContext } from 'react';


/** Tipo del producto */
export interface CartItem {
  id: number;
  name: string;
}


/** Tipo del contexto */
export interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
}


/** Contexto tipado */
export const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {}
});




import React, { useContext, type JSX } from 'react';
import { CartContext } from './CartContext';


/** Tipo del producto */
interface CartItem {
  id: number;
  name: string;
}


/** Tipo del contexto */
interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
}


export default function CartView(): JSX.Element {
  const { items, addItem, removeItem } =
    useContext<CartContextType>(CartContext);


  return (
    <div>
      <h2>Carrito</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}{' '}
            <button onClick={() => removeItem(item.id)}>❌</button>
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          addItem({ id: Date.now(), name: 'Nuevo producto' })
        }
      >
        Agregar producto
      </button>
    </div>
  );
}
