import { ArrowRight, Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { products } from '../data/products';
import { formatPrice } from '../utils/format';

function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useStore();

  const items = cart.map((item) => {
    const product = products.find((entry) => entry.id === item.productId);
    const size = product?.sizes.find((entry) => entry.id === item.sizeId) ?? product?.sizes[0];
    if (!product || !size) return null;
    return {
      product,
      size,
      quantity: item.quantity,
      lineTotal: size.price * item.quantity,
    };
  }).filter(Boolean) as { product: (typeof products)[number]; size: { label: string; price: number }; quantity: number; lineTotal: number }[];

  const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#C8A96A]">Panier</p>
          <h1 className="mt-3 font-display text-5xl text-[#111111]">Votre commande</h1>
        </div>
        <Link to="/catalog" className="hidden text-sm font-medium text-[#111111] hover:text-[#C8A96A] sm:inline-block">
          Continuer les achats
        </Link>
      </div>

      {items.length === 0 ? (
        <div className="rounded-[28px] border border-dashed border-neutral-300 bg-white p-8 text-center text-neutral-600 shadow-luxe">
          <p className="text-lg font-medium text-[#111111]">Votre panier est vide.</p>
          <p className="mt-2">Ajoutez un parfum pour commencer votre commande.</p>
          <Link to="/catalog" className="mt-6 inline-flex rounded-full bg-[#0B0B0B] px-5 py-3 text-sm font-medium text-white">
            Découvrir la collection
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-5">
            {items.map(({ product, size, quantity, lineTotal }) => (
              <div key={`${product.id}-${size.label}`} className="flex flex-col gap-4 rounded-[28px] border border-neutral-200 bg-white p-4 shadow-luxe sm:flex-row">
                <img src={product.image} alt={product.name} className="h-28 w-28 rounded-[20px] object-cover" />
                <div className="flex flex-1 flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">{product.gender}</p>
                    <h2 className="mt-2 text-xl font-semibold text-[#111111]">{product.name}</h2>
                    <p className="mt-1 text-sm text-neutral-500">{size.label}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button type="button" className="rounded-full border border-neutral-200 p-2" onClick={() => updateQuantity(product.id, size.label, quantity - 1)}>
                      <Minus size={14} />
                    </button>
                    <span className="min-w-8 text-center text-sm font-medium text-[#111111]">{quantity}</span>
                    <button type="button" className="rounded-full border border-neutral-200 p-2" onClick={() => updateQuantity(product.id, size.label, quantity + 1)}>
                      <Plus size={14} />
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-xl font-semibold text-[#111111]">{formatPrice(lineTotal)}</p>
                    <button type="button" className="rounded-full border border-neutral-200 p-2 text-red-500" onClick={() => removeFromCart(product.id, size.label)}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="rounded-[28px] border border-neutral-200 bg-white p-6 shadow-luxe">
            <h2 className="text-xl font-semibold text-[#111111]">Résumé</h2>
            <div className="mt-6 space-y-4 text-sm text-neutral-700">
              <div className="flex items-center justify-between">
                <span>Sous-total</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Livraison</span>
                <span>{formatPrice(35)}</span>
              </div>
              <div className="border-t border-neutral-200 pt-4">
                <div className="flex items-center justify-between text-lg font-semibold text-[#111111]">
                  <span>Total</span>
                  <span>{formatPrice(subtotal + 35)}</span>
                </div>
              </div>
            </div>
            <Link to="/checkout" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0B0B0B] px-5 py-3 text-sm font-medium text-white">
              Procéder au paiement
              <ArrowRight size={16} />
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
}

export default CartPage;
