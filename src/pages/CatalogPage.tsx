import { ArrowRight, BadgeCheck, MessageCircleHeart, Sparkles, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import ProductCard from '../components/ProductCard';
import { featuredProducts, products } from '../data/products';
import { useEffect } from 'react';

const categories = [
  {
    title: 'Parfums Femme',
    href: '/catalog?gender=women',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Parfums Homme',
    href: '/catalog?gender=men',
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Nos Collections',
    href: '/catalog',
    image:
      'https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=900&q=80',
  },
];

const trustFeatures = [
  { icon: BadgeCheck, title: 'Assistance personnalisée', description: 'Une aide sur mesure pour choisir votre signature.' },
  { icon: MessageCircleHeart, title: 'Commande simple via WhatsApp', description: 'Un parcours de commande rapide et clair.' },
  { icon: Sparkles, title: 'Informations claires', description: 'Descriptions et tailles présentées simplement.' },
  { icon: Truck, title: 'Livraison selon conditions', description: 'Des modalités explicites et configurables.' },
];

export default function HomePage() {
  useEffect(() => {
    document.title = 'AbdePerfumes | Parfums premium au Maroc';
  }, []);

  return (
    <div className="bg-[#F8F5F0]">
      <section className="relative overflow-hidden bg-[#0B0B0B] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(200,169,106,0.28),transparent_35%)]" />
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),transparent_55%)] lg:block" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div className="max-w-xl animate-fadeUp">
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#C8A96A]">AbdePerfumes</p>
            <h1 className="font-display text-5xl leading-none md:text-7xl">L'élégance a son parfum.</h1>
            <p className="mt-6 max-w-lg text-lg text-white/75 md:text-xl">
              Des fragrances inspirantes pour révéler votre personnalité.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/catalog" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C8A96A] px-6 py-3.5 text-sm font-medium text-[#0B0B0B] transition hover:bg-[#d5b570]">
                Découvrir la collection
                <ArrowRight size={16} />
              </Link>
              <Link to="/catalog?sort=popular" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition hover:border-[#C8A96A] hover:text-[#C8A96A]">
                Nos best-sellers
              </Link>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-xl items-center justify-center">
            <div className="absolute inset-0 rounded-[36px] bg-[#c8a96a]/10 blur-3xl" />
            <div className="relative h-[500px] w-[340px] animate-float rounded-[48px] border border-[#C8A96A]/30 bg-[linear-gradient(135deg,#1b1b1b,#0b0b0b_60%,#211911)] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <div className="absolute inset-x-8 top-8 h-24 rounded-full bg-[#C8A96A]/10 blur-2xl" />
              <div className="relative flex h-full flex-col justify-between rounded-[30px] border border-white/10 bg-[#111111]/80 p-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-white/60">
                  <span>Edition luxe</span>
                  <span>Morocco</span>
                </div>
                <div className="flex flex-1 items-center justify-center">
                  <div className="relative h-64 w-44">
                    <div className="absolute inset-x-7 bottom-0 h-16 rounded-b-[22px] bg-[#D8B76D]/90 shadow-[0_20px_30px_rgba(216,183,109,0.35)]" />
                    <div className="absolute inset-x-8 bottom-12 h-14 rounded-t-[22px] bg-[#E7D7B1] shadow-[inset_0_0_18px_rgba(255,255,255,0.35)]" />
                    <div className="absolute inset-x-11 bottom-24 h-20 rounded-[26px] bg-[linear-gradient(180deg,#f4e7c7,#d1b26a)] shadow-[0_18px_40px_rgba(216,183,109,0.35)]" />
                    <div className="absolute inset-x-[44px] bottom-28 h-8 rounded-full border border-[#C8A96A] bg-[#0B0B0B]/60" />
                    <div className="absolute inset-x-[41px] bottom-12 h-20 rounded-[18px] border border-[#C8A96A]/70 bg-[linear-gradient(180deg,#f0dfb4,#c8a96a)]" />
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#C8A96A]">Signature</p>
                  <h2 className="font-display text-4xl text-[#F7EBD9]">Noir Lumière</h2>
                  <p className="text-sm text-white/70">Une allure sensuelle et élégante.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <SectionHeading
          eyebrow="Collections"
          title="Choisissez votre signature"
          description="Des compositions raffinées pour femmes, hommes et univers unisex."
          center
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.title} to={category.href} className="group relative overflow-hidden rounded-[28px] bg-neutral-900 text-white">
              <img src={category.image} alt={category.title} className="h-[420px] w-full object-cover opacity-75 transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-[#C8A96A]">Collection</p>
                <h3 className="mt-3 font-display text-4xl">{category.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#F0E9DE] py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Best-sellers"
            title="Les parfums les plus appréciés"
            description="Des créations élégantes, sensuelles et durables pour un style affirmé."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="relative overflow-hidden rounded-[30px] bg-[#0B0B0B] p-8 text-white">
            <img
              src="https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=1200&q=80"
              alt="Brand story"
              className="h-full min-h-[500px] w-full rounded-[24px] object-cover opacity-75"
            />
          </div>
          <div className="flex flex-col justify-center">
            <SectionHeading
              eyebrow="Notre maison"
              title="Le parfum, une signature personnelle."
              description="Chez AbdePerfumes, chaque fragrance est une invitation à exprimer votre style, votre personnalité et vos émotions."
            />
            <p className="mt-6 text-base leading-8 text-neutral-700">
              Nous croyons que le parfum ne se limite pas à une simple odeur : c'est un langage discret, une présence mémorable et une manière de se raconter sans mots.
            </p>
            <Link to="/story" className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#0B0B0B] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#1a1a1a]">
              En savoir plus
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#0B0B0B] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            eyebrow="Confiance"
            title="Une expérience pensée pour votre confort"
            description="Des services clairs, une commande simplifiée, et une communication transparente."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {trustFeatures.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C8A96A] text-[#0B0B0B]">
                  <Icon size={20} />
                </div>
                <h3 className="mt-6 text-xl font-medium text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="flex flex-col gap-6 rounded-[32px] border border-[#C8A96A]/30 bg-[#111111] p-8 text-white md:p-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#C8A96A]">Newsletter</p>
            <h2 className="mt-4 font-display text-5xl text-[#F4EAD7]">Restez connecté</h2>
          </div>
          <form className="w-full max-w-xl space-y-4 lg:ml-auto">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Votre adresse e-mail"
                className="w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white placeholder:text-white/40 focus:border-[#C8A96A] focus:outline-none"
              />
              <button type="button" className="rounded-full bg-[#C8A96A] px-6 py-3 text-sm font-medium text-[#111111]">
                S'inscrire
              </button>
            </div>
            <p className="text-xs text-white/60">Demo : aucune intégration e-mail n'est configurée pour le moment.</p>
          </form>
        </div>
      </section>
    </div>
  );
}
