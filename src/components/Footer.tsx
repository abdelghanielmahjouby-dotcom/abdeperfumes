import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useStore } from '../context/StoreContext';

const links = [
  { label: 'Accueil', href: '/' },
  { label: 'Parfums Femme', href: '/catalog?gender=women' },
  { label: 'Parfums Homme', href: '/catalog?gender=men' },
  { label: 'Collections', href: '/catalog' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const { cart, language, setLanguage } = useStore();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0B0B]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link to="/" className="flex items-center gap-3 text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C8A96A] bg-[#0B0B0B] text-lg font-semibold text-[#C8A96A]">
            A
          </span>
          <div>
            <p className="font-display text-3xl leading-none text-[#F5E9D1]">AbdePerfumes</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `text-sm transition ${isActive ? 'text-[#C8A96A]' : 'text-white/80 hover:text-white'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button type="button" className="rounded-full border border-white/10 p-2 text-white/90 hover:border-[#C8A96A] hover:text-[#C8A96A]" aria-label="Search">
            <Search size={18} />
          </button>
          <Link to="/cart" className="relative rounded-full border border-white/10 p-2 text-white/90 hover:border-[#C8A96A] hover:text-[#C8A96A]" aria-label="Panier">
            <ShoppingBag size={18} />
            {itemCount > 0 ? (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#C8A96A] px-1 text-[10px] font-semibold text-[#0B0B0B]">
                {itemCount}
              </span>
            ) : null}
          </Link>
          <div className="flex items-center gap-2 rounded-full border border-white/10 p-1">
            <button
              type="button"
              onClick={() => setLanguage('fr')}
              className={`rounded-full px-2 py-1 text-xs ${language === 'fr' ? 'bg-[#C8A96A] text-[#0B0B0B]' : 'text-white/80'}`}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => setLanguage('ar')}
              className={`rounded-full px-2 py-1 text-xs ${language === 'ar' ? 'bg-[#C8A96A] text-[#0B0B0B]' : 'text-white/80'}`}
            >
              AR
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <Link to="/cart" className="relative rounded-full border border-white/10 p-2 text-white/90" aria-label="Panier">
            <ShoppingBag size={18} />
            {itemCount > 0 ? (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#C8A96A] px-1 text-[10px] font-semibold text-[#0B0B0B]">
                {itemCount}
              </span>
            ) : null}
          </Link>
          <button type="button" onClick={() => setToggle((value) => !value)} className="rounded-full border border-white/10 p-2 text-white/90">
            {toggle ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {toggle ? (
        <div className="border-t border-white/10 bg-[#0B0B0B] px-4 py-5 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <NavLink key={link.href} to={link.href} onClick={() => setToggle(false)} className="text-sm text-white/80">
                {link.label}
              </NavLink>
            ))}
            <div className="mt-4 flex items-center gap-2 rounded-full border border-white/10 p-1 self-start">
              <button type="button" onClick={() => setLanguage('fr')} className={`rounded-full px-2 py-1 text-xs ${language === 'fr' ? 'bg-[#C8A96A] text-[#0B0B0B]' : 'text-white/80'}`}>
                FR
              </button>
              <button type="button" onClick={() => setLanguage('ar')} className={`rounded-full px-2 py-1 text-xs ${language === 'ar' ? 'bg-[#C8A96A] text-[#0B0B0B]' : 'text-white/80'}`}>
                AR
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
