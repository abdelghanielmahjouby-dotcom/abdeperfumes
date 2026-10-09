import { ShoppingBag, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { Product } from '../types';
import { formatPrice } from '../utils/format';
import { useState } from 'react';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useStore();
  const [selectedSizeId, setSelectedSizeId] = useState(product.sizes[0]?.id ?? '');
  const selectedSize = product.sizes.find((size) => size.id === selectedSizeId) ?? product.sizes[0];

  return (
    <article className="group overflow-hidden rounded-[28px] border border-neutral-200 bg-white text-left shadow-luxe transition duration-300 hover:-translate-y-1 hover:border-champagne">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {product.badge ? (
          <span className="absolute left-4 top-4 rounded-full bg-[#0B0B0B] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white">
            {product.badge}
          </span>
        ) : null}
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">{product.gender}</p>
            <h3 className="mt-2 text-xl font-semibold text-[#151515]">{product.name}</h3>
          </div>
          <div className="flex items-center gap-1 text-amber-500">
            <Star size={14} fill="currentColor" />
            <span className="text-xs text-neutral-500">4.9</span>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1">
          <label htmlFor={`size-${product.id}`} className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            Taille
          </label>
          <select
            id={`size-${product.id}`}
            value={selectedSizeId}
            onChange={(event) => setSelectedSizeId(event.target.value)}
            className="w-full bg-transparent text-sm text-[#151515] outline-none"
          >
            {product.sizes.map((size) => (
              <option key={size.id} value={size.id}>
                {size.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">Prix</p>
            <p className="mt-2 text-2xl font-semibold text-[#151515]">{formatPrice(selectedSize?.price ?? 0)}</p>
          </div>
          <div className="text-right text-xs text-neutral-500">
            {product.sizes.length > 1 ? 'Plusieurs formats' : 'Format disponible'}
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <button
            type="button"
            onClick={() => addToCart(product.id, selectedSizeId, 1)}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#0B0B0B] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#1b1b1b]"
          >
            <ShoppingBag size={16} />
            Ajouter
          </button>
          <Link
            to={`/product/${product.slug}`}
            className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-4 py-3 text-sm font-medium text-[#151515] transition hover:border-champagne hover:text-champagne"
          >
            Détails
          </Link>
        </div>
      </div>
    </article>
  );
}
