export type Language = 'fr' | 'ar';

export type ProductSize = {
  id: string;
  label: string;
  volume: number;
  price: number;
  available: boolean;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  gender: 'women' | 'men' | 'unisex';
  description: string;
  notes?: string[];
  image: string;
  badge?: string;
  featured?: boolean;
  sizes: ProductSize[];
  isActive?: boolean;
};

export type CartItem = {
  productId: string;
  sizeId: string;
  quantity: number;
};

export type CheckoutForm = {
  fullName: string;
  phone: string;
  city: string;
  address: string;
  notes: string;
};
