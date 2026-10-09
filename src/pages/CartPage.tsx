import { Minus, Plus, ShoppingBag, WhatsApp } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useStore } from '../context/StoreContext';
import { formatPrice } from '../utils/format';
import { WHATSAPP_NUMBER } from '../config/store';

function ProductPage() {
  const { productId } = useParams();
  const { addToCart } = useStore();
  const product = products.find((item) => item.slug === productId || item.id === productId) ?? products[0];
  const [selectedSizeId, setSelectedSizeId] = useState(product.sizes[0]?.id ?? '');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    document.title = `${product.name} | AbdePerfumes`;
    setSelectedSizeId(product.sizes[0]?.id ?? '');
    setQuantity(1);
  }, [product]);

  const selectedSize = useMemo(
    () => product.sizes.find((size) => size.id === selectedSizeId) ?? product.sizes[0],
    [product, selectedSizeId],
  );

  const relatedProducts = products.filter((item) => item.id !== product.id && item.gender === product.gender).slice(0, 3);

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      `Bonjour AbdePerfumes, je voudrais commander ${product.name} (${selectedSize?.label ?? ''}) x${quantity}.`,
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  if (!product) {
    return <div className="p-10 text-center text-neutral-700">Produit introuvable.</div>;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[32px] bg-white p-4 shadow-luxe">
          <img src={product.image} alt={product.name} className="h-[600px] w-full rounded-[24px] object-cover" />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#C8A96A]">{product.gender}</p>
          <h1 className="mt-4 font-display text-5xl text-[#111111] md:text-6xl">{product.name}</h1>
          <p className="mt-5 text-lg text-neutral-600">{product.description}</p>

          <div className="mt-8 flex items-end gap-4">
            <p className="text-4xl font-semibold text-[#111111]">{formatPrice(selectedSize?.price ?? 0)}</p>
            {selectedSize?.label ? <span className="pb-1 text-sm uppercase tracking-[0.2em] text-neutral-500">{selectedSize.label}</span> : null}
          </div>

          <div className="mt-8 space-y-4">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-neutral-500">Choisir la taille</p>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size.id}
                    type="button"
                    onClick={() => setSelectedSizeId(size.id)}
                    className={`rounded-full border px-4 py-2 text-sm ${selectedSizeId === size.id ? 'border-[#C8A96A] bg-[#F4EAD7] text-[#111111]' : 'border-neutral-200 text-neutral-700'}`}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-neutral-500">Quantité</p>
              <div className="flex w-fit items-center gap-3 rounded-full border border-neutral-200 bg-white px-3 py-2">
                <button type="button" className="rounded-full p-1 text-neutral-700" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>
                  <Minus size={16} />
                </button>
                <span className="min-w-10 text-center text-lg font-medium text-[#111111]">{quantity}</span>
                <button type="button" className="rounded-full p-1 text-neutral-700" onClick={() => setQuantity((value) => value + 1)}>
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => addToCart(product.id, selectedSizeId, quantity)}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#0B0B0B] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#191919]"
            >
              <ShoppingBag size={16} />
              Ajouter au panier
            </button>
            <button
              type="button"
              onClick={handleWhatsAppOrder}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C8A96A] bg-[#F4EAD7] px-6 py-3.5 text-sm font-medium text-[#111111]"
            >
              <WhatsApp size={16} />
              Commander via WhatsApp
            </button>
          </div>

          <div className="mt-10 rounded-[24px] border border-neutral-200 bg-white p-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">Description</h2>
            <p className="mt-4 text-sm leading-7 text-neutral-700">{product.description}</p>
            {product.notes?.length ? (
              <div className="mt-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">Notes</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.notes.map((note) => (
                    <span key={note} className="rounded-full bg-[#F3EAD1] px-3 py-1.5 text-xs text-[#111111]">{note}</span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 className="font-display text-4xl text-[#111111]">Produits similaires</h2>
          <Link to="/catalog" className="text-sm font-medium text-[#111111] hover:text-[#C8A96A]">
            Voir tout
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
