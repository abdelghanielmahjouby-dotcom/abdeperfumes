import { Instagram, Mail, MapPin, Phone, TikTok, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../config/store';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-[#F8F5F0] text-[#1d1d1d]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-5 md:px-6">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C8A96A] bg-[#0B0B0B] text-lg font-semibold text-[#C8A96A]">
              A
            </span>
            <div>
              <p className="font-display text-4xl leading-none text-[#111111]">AbdePerfumes</p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-7 text-neutral-600">
            Des fragrances inspirantes pour révéler votre personnalité, avec une expérience premium pensée pour les clients marocains.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Navigation</h3>
          <ul className="mt-5 space-y-3 text-sm text-neutral-700">
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/catalog">Catalog</Link></li>
            <li><Link to="/story">Notre histoire</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Support client</h3>
          <ul className="mt-5 space-y-3 text-sm text-neutral-700">
            <li><Link to="/privacy">Politique de confidentialité</Link></li>
            <li><Link to="/terms">Conditions générales</Link></li>
            <li><Link to="/delivery">Livraison et retours</Link></li>
            <li><a href={CONTACT_INFO.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href={CONTACT_INFO.tiktok} target="_blank" rel="noreferrer">TikTok</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm text-neutral-700">
            <li className="flex items-center gap-2"><Mail size={15} /> {CONTACT_INFO.email}</li>
            <li className="flex items-center gap-2"><Phone size={15} /> {CONTACT_INFO.phone}</li>
            <li className="flex items-center gap-2"><MapPin size={15} /> Maroc</li>
            <li className="flex items-center gap-2"><Truck size={15} /> Livraison selon conditions</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-200 px-4 py-4 text-center text-sm text-neutral-600 md:px-6">
        © {new Date().getFullYear()} AbdePerfumes. Tous droits réservés.
      </div>
    </footer>
  );
}
