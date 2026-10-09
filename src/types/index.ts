import { createContext, useContext } from 'react';
import { CartItem, Language } from '../types';

export type StoreContextValue = {
  cart: CartItem[];
  language: Language;
  setLanguage: (language: Language) => void;
  addToCart: (productId: string, sizeId: string, quantity?: number) => void;
  removeFromCart: (productId: string, sizeId: string) => void;
  updateQuantity: (productId: string, sizeId: string, quantity: number) => void;
  clearCart: () => void;
};

export const StoreContext = createContext<StoreContextValue | null>(null);

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('Use StoreContext inside provider');
  }
  return context;
}
