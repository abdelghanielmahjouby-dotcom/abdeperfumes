import { CartItem } from '../types';

export function getInitialCart(): CartItem[] {
  try {
    const saved = localStorage.getItem('abdeperfumes-cart');
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}
