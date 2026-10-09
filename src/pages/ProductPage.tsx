import { Search } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SectionHeading from '../components/SectionHeading';
import { products } from '../data/products';

function CatalogPage() {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [gender, setGender] = useState<'all' | 'women' | 'men' | 'unisex'>('all');
  const [maxPrice, setMaxPrice] = useState<number>(200);
  const [sizeFilter, setSizeFilter] = useState<'all' | '30' | '50'>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'popular'>('featured');

  useEffect(() => {
    document.title = 'Catalogue | AbdePerfumes';
    const genderFromQuery = searchParams.get('gender');
    if (genderFromQuery === 'women' || genderFromQuery === 'men' || genderFromQuery === 'unisex') {
      setGender(genderFromQuery);
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const list = products.filter((product) => {
      if (!product.isActive) return false;
      if (gender !== 'all' && product.gender !== gender) return false;
      if (normalizedQuery && !product.name.toLowerCase().includes(normalizedQuery)) return false;
      if (Math.max(...product.sizes.map((size) => size.price)) > maxPrice) {
        return false;
      }
      if (sizeFilter !== 'all') {
        const found = product.sizes.some((size) => size.volume.toString() === sizeFilter);
        if (!found) return false;
      }
      return true;
    });

    switch (sortBy) {
      case 'price-low':
        return [...list].sort((a, b) => Math.min(...a.sizes.map((s) => s.price)) - Math.min(...b.sizes.map((s) => s.price)));
      case 'price-high':
        return [...list].sort((a, b) => Math.max(...b.sizes.map((s) => s.price)) - Math.max(...a.sizes.map((s) => s.price)));
      case 'popular':
        return [...list].sort((a, b) => Number(b.featured) - Number(a.featured));
      default:
        return [...list].sort((a, b) => Number(b.featured) - Number(a.featured));
    }
  }, [query, gender, maxPrice, sizeFilter, sortBy]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <SectionHeading
        eyebrow="Catalogue"
        title="Découvrez nos parfums"
        description="Recherche, filtres et sélections premium, pensés pour le marché marocain."
      />

      <div className="mt-10 rounded-[28px] border border-neutral-200 bg-white p-5 shadow-luxe">
        <div className="grid gap-4 md:grid-cols-[1.3fr_0.7fr_0.7fr_0.7fr]">
          <label className="flex items-center gap-3 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-3">
            <Search size={18} className="text-neutral-500" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Rechercher un parfum"
              className="w-full bg-transparent text-sm text-[#111111] outline-none placeholder:text-neutral-400"
            />
          </label>

          <select value={gender} onChange={(event) => setGender(event.target.value as 'all' | 'women' | 'men' | 'unisex')} className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-[#111111] outline-none">
            <option value="all">Tous</option>
            <option value="women">Femme</option>
            <option value="men">Homme</option>
            <option value="unisex">Unisex</option>
          </select>

          <select value={maxPrice} onChange={(event) => setMaxPrice(Number(event.target.value))} className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-[#111111] outline-none">
            <option value={200}>Prix max</option>
            <option value={50}>50 DH</option>
            <option value={100}>100 DH</option>
            <option value={200}>200 DH</option>
          </select>

          <select value={sortBy} onChange={(event) => setSortBy(event.target.value as 'featured' | 'price-low' | 'price-high' | 'popular')} className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-[#111111] outline-none">
            <option value="featured">Tendance</option>
            <option value="price-low">Prix croissant</option>
            <option value="price-high">Prix décroissant</option>
            <option value="popular">Popularité</option>
          </select>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {(['all', '30', '50'] as const).map((size) => (
            <button
              key={size}
              type="button"
              onClick={() => setSizeFilter(size)}
              className={`rounded-full px-4 py-2 text-sm transition ${sizeFilter === size ? 'bg-[#0B0B0B] text-white' : 'border border-neutral-200 text-[#111111] hover:border-[#C8A96A]'}`}
            >
              {size === 'all' ? 'Toutes tailles' : `${size} ml`}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10">
        {filteredProducts.length === 0 ? (
          <div className="rounded-[24px] border border-dashed border-neutral-300 bg-white px-6 py-12 text-center text-neutral-600">
            Aucun parfum ne correspond à vos critères.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CatalogPage;
