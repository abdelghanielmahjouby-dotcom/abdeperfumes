import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { products } from '../data/products';
import { DELIVERY_FEES, WHATSAPP_NUMBER } from '../config/store';
import { formatPrice, buildWhatsAppMessage, computeDeliveryFee } from '../utils/format';
import { validatePhoneNumber } from '../utils/validation';

const initialForm = {
  fullName: '',
  phone: '',
  city: '',
  address: '',
  notes: '',
};

function CheckoutPage() {
  const navigate = useNavigate();
  const { cart, clearCart } = useStore();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const items = useMemo(
    () =>
      cart
        .map((item) => {
          const product = products.find((entry) => entry.id === item.productId);
          const size = product?.sizes.find((entry) => entry.id === item.sizeId) ?? product?.sizes[0];
          if (!product || !size) return null;
          return {
            product,
            size,
            quantity: item.quantity,
            lineTotal: size.price * item.quantity,
          };
        })
        .filter(Boolean) as { product: (typeof products)[number]; size: { label: string; price: number }; quantity: number; lineTotal: number }[],
    [cart],
  );

  const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
  const deliveryFee = computeDeliveryFee(form.city || 'default');
  const total = subtotal + deliveryFee;

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!form.fullName.trim()) nextErrors.fullName = 'Le nom complet est requis.';
    if (!form.phone.trim()) nextErrors.phone = 'Le numéro est requis.';
    if (!validatePhoneNumber(form.phone)) nextErrors.phone = 'Numéro invalide pour le Maroc.';
    if (!form.city.trim()) nextErrors.city = 'La ville est requise.';
    if (!form.address.trim()) nextErrors.address = 'L’adresse est requise.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const submitOrder = () => {
    if (!validate()) return;
    if (!items.length) {
      navigate('/cart');
      return;
    }

    const whatsappText = buildWhatsAppMessage({
      name: form.fullName,
      phone: form.phone,
      city: form.city,
      address: form.address,
      notes: form.notes,
      products: items.map((item) => ({
        name: item.product.name,
        size: item.size.label,
        quantity: item.quantity,
        price: item.size.price,
      })),
      subtotal,
      deliveryFee,
      total,
    });

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`;
    window.open(url, '_blank');
    clearCart();
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.25em] text-[#C8A96A]">Checkout</p>
        <h1 className="mt-3 font-display text-5xl text-[#111111]">Finaliser votre commande</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <form className="rounded-[28px] border border-neutral-200 bg-white p-6 shadow-luxe" noValidate>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-[#111111]">Nom complet</label>
              <input
                value={form.fullName}
                onChange={(event) => setForm({ ...form, fullName: event.target.value })}
                className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-[#111111] outline-none focus:border-[#C8A96A]"
              />
              {errors.fullName ? <p className="mt-2 text-sm text-red-600">{errors.fullName}</p> : null}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#111111]">Téléphone</label>
              <input
                value={form.phone}
                onChange={(event) => setForm({ ...form, phone: event.target.value })}
                className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-[#111111] outline-none focus:border-[#C8A96A]"
              />
              {errors.phone ? <p className="mt-2 text-sm text-red-600">{errors.phone}</p> : null}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#111111]">Ville</label>
              <input
                value={form.city}
                onChange={(event) => setForm({ ...form, city: event.target.value })}
                className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-[#111111] outline-none focus:border-[#C8A96A]"
              />
              {errors.city ? <p className="mt-2 text-sm text-red-600">{errors.city}</p> : null}
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-[#111111]">Adresse de livraison</label>
              <textarea
                value={form.address}
                onChange={(event) => setForm({ ...form, address: event.target.value })}
                className="min-h-24 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-[#111111] outline-none focus:border-[#C8A96A]"
              />
              {errors.address ? <p className="mt-2 text-sm text-red-600">{errors.address}</p> : null}
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-[#111111]">Notes (optionnel)</label>
              <textarea
                value={form.notes}
                onChange={(event) => setForm({ ...form, notes: event.target.value })}
                className="min-h-20 w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-[#111111] outline-none focus:border-[#C8A96A]"
              />
            </div>
          </div>

          <button type="button" onClick={submitOrder} className="mt-8 w-full rounded-full bg-[#0B0B0B] px-5 py-3 text-sm font-medium text-white">
            Confirmer la commande via WhatsApp
          </button>
        </form>

        <aside className="rounded-[28px] border border-neutral-200 bg-white p-6 shadow-luxe">
          <h2 className="text-xl font-semibold text-[#111111]">Résumé de commande</h2>
          <div className="mt-6 space-y-4">
            {items.map((item) => (
              <div key={`${item.product.id}-${item.size.label}`} className="flex items-center justify-between gap-3 border-b border-neutral-200 pb-3 text-sm text-neutral-700">
                <div>
                  <p className="font-medium text-[#111111]">{item.product.name}</p>
                  <p>{item.size.label} × {item.quantity}</p>
                </div>
                <span>{formatPrice(item.lineTotal)}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-3 text-sm text-neutral-700">
            <div className="flex items-center justify-between"><span>Sous-total</span><span>{formatPrice(subtotal)}</span></div>
            <div className="flex items-center justify-between"><span>Livraison</span><span>{formatPrice(deliveryFee)}</span></div>
            <div className="flex items-center justify-between border-t border-neutral-200 pt-3 text-lg font-semibold text-[#111111]">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default CheckoutPage;
