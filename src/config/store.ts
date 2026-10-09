import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'candy-love-30',
    name: 'Candy Love',
    slug: 'candy-love',
    gender: 'women',
    description: 'Une fragrance douce et addictive qui mêle gourmandise et élégance pour une présence lumineuse et mémorable.',
    notes: ['Fleur de coton', 'Gourmand', 'Bois doux'],
    image:
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80',
    badge: 'Best seller',
    featured: true,
    isActive: true,
    sizes: [
      { id: '30', label: '30 ml', volume: 30, price: 30, available: true },
      { id: '50', label: '50 ml', volume: 50, price: 50, available: true },
    ],
  },
  {
    id: 'la-belle-50',
    name: 'La Belle',
    slug: 'la-belle',
    gender: 'women',
    description: 'Une composition florale chic et élégante, pensée pour sublimer le quotidien avec une signature raffinée.',
    notes: ['Rose', 'Jasmine', 'Vanille'],
    image:
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=80',
    featured: true,
    isActive: true,
    sizes: [
      { id: '50', label: '50 ml', volume: 50, price: 50, available: true },
    ],
  },
  {
    id: 'escada-taj-50',
    name: 'Escada Taj',
    slug: 'escada-taj',
    gender: 'women',
    description: 'Une fragrance affirmée, vibrante et solaire, idéale pour les journées où le style doit se faire remarquer.',
    notes: ['Citrus', 'Fleur blanche', 'Bois précieux'],
    image:
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=80',
    isActive: true,
    sizes: [
      { id: '50', label: '50 ml', volume: 50, price: 50, available: true },
    ],
  },
  {
    id: 'burberry-her-50',
    name: 'Burberry Her',
    slug: 'burberry-her',
    gender: 'women',
    description: 'Un parfum moderne et sophistiqué, lumineux et enveloppant, pour une présence élégante en toute occasion.',
    notes: ['Cérise', 'Rose', 'Musc'],
    image:
      'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=900&q=80',
    featured: true,
    isActive: true,
    sizes: [
      { id: '50', label: '50 ml', volume: 50, price: 50, available: true },
    ],
  },
  {
    id: 'good-girl-30',
    name: 'Good Girl',
    slug: 'good-girl',
    gender: 'women',
    description: 'Un parfum féminin audacieux, chaleureux et intrigant, pensé pour briller avec assurance et sophistication.',
    notes: ['Pivoine', 'Noisette', 'Vanille'],
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
    isActive: true,
    sizes: [
      { id: '30', label: '30 ml', volume: 30, price: 30, available: true },
      { id: '50', label: '50 ml', volume: 50, price: 50, available: true },
    ],
  },
  {
    id: 'l-interdit-rouge-50',
    name: "L'Interdit Rouge",
    slug: 'l-interdit-rouge',
    gender: 'women',
    description: 'Une signature intense et sensuelle, portée par des notes charnues et une aura contemporaine.',
    notes: ['Fleur rouge', 'Ambre', 'Bois tonique'],
    image:
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80',
    isActive: true,
    sizes: [
      { id: '50', label: '50 ml', volume: 50, price: 50, available: true },
    ],
  },
  {
    id: 'libre-50',
    name: 'Libre',
    slug: 'libre',
    gender: 'women',
    description: 'Une fragrance audacieuse et libre, avec une présence florale et lumineuse à la fois décontractée et élégante.',
    notes: ['Lavande', 'Jasmin', 'Vanille'],
    image:
      'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=900&q=80',
    isActive: true,
    sizes: [
      { id: '50', label: '50 ml', volume: 50, price: 50, available: true },
    ],
  },
  {
    id: 'gucci-guilty-30',
    name: 'Gucci Guilty',
    slug: 'gucci-guilty',
    gender: 'men',
    description: 'Un parfum masculin avec une présence profonde et ambrée, au style affirmé et généreux.',
    notes: ['Pomme', 'Patchouli', 'Bois de santal'],
    image:
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=900&q=80',
    featured: true,
    isActive: true,
    sizes: [
      { id: '30', label: '30 ml', volume: 30, price: 30, available: true },
      { id: '50', label: '50 ml', volume: 50, price: 50, available: true },
    ],
  },
  {
    id: 'azzaro-wanted-30',
    name: 'Azzaro Wanted',
    slug: 'azzaro-wanted',
    gender: 'men',
    description: 'Une ode masculine intense et élancée, fidèle à un style modern et dynamique.',
    notes: ['Cuir', 'Cardamome', 'Bois'],
    image:
      'https://images.unsplash.com/photo-1528747008803-7837f6699a8d?auto=format&fit=crop&w=900&q=80',
    isActive: true,
    sizes: [
      { id: '30', label: '30 ml', volume: 30, price: 30, available: true },
      { id: '50', label: '50 ml', volume: 50, price: 50, available: true },
    ],
  },
  {
    id: 'stronger-with-you-absolutely-30',
    name: 'Stronger With You Absolutely',
    slug: 'stronger-with-you-absolutely',
    gender: 'men',
    description: 'Une signature suave, chaleureuse et séduisante, conçue pour une présence captivante.',
    notes: ['Vanille', 'Cuir', 'Musc'],
    image:
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=80',
    isActive: true,
    sizes: [
      { id: '30', label: '30 ml', volume: 30, price: 30, available: true },
      { id: '50', label: '50 ml', volume: 50, price: 50, available: true },
    ],
  },
  {
    id: 'stronger-with-you-intensely-50',
    name: 'Stronger With You Intensely',
    slug: 'stronger-with-you-intensely',
    gender: 'men',
    description: 'Une fragrance d’ambiance intense et sensuelle, élégante et forte, avec une présence singulière.',
    notes: ['Bois d’ambre', 'Vanille', 'Musc'],
    image:
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80',
    isActive: true,
    sizes: [
      { id: '30', label: '30 ml', volume: 30, price: 30, available: true },
      { id: '50', label: '50 ml', volume: 50, price: 50, available: true },
    ],
  },
  {
    id: 'one-million-50',
    name: 'One Million',
    slug: 'one-million',
    gender: 'men',
    description: 'Un parfum au caractère lumineux et charismatique, pour un style moderne et audacieux.',
    notes: ['Grapefruit', 'Ambre', 'Bois'],
    image:
      'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=900&q=80',
    isActive: true,
    sizes: [
      { id: '50', label: '50 ml', volume: 50, price: 50, available: true },
    ],
  },
  {
    id: 'valentino-50',
    name: 'Valentino',
    slug: 'valentino',
    gender: 'men',
    description: 'Une esthétique élégante et raffinée, avec une signature douce et structurée.',
    notes: ['Fleur', 'Bois', 'Musc'],
    image:
      'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=900&q=80',
    isActive: true,
    sizes: [
      { id: '50', label: '50 ml', volume: 50, price: 50, available: true },
    ],
  },
  {
    id: 'bleu-de-chanel-50',
    name: 'Bleu de Chanel',
    slug: 'bleu-de-chanel',
    gender: 'men',
    description: 'Un parfum d’élégance intemporelle et d’énergie maîtrisée, parfait pour la vie quotidienne.',
    notes: ['Bergamote', 'Bois', 'Ambre'],
    image:
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=80',
    isActive: true,
    sizes: [
      { id: '50', label: '50 ml', volume: 50, price: 50, available: true },
    ],
  },
  {
    id: 'dior-sauvage-50',
    name: 'Dior Sauvage',
    slug: 'dior-sauvage',
    gender: 'men',
    description: 'Une note fraîche et sauvage, avec une allure modernisée et profondément masculine.',
    notes: ['Bergamote', 'Néroli', 'Bois'],
    image:
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=900&q=80',
    isActive: true,
    sizes: [
      { id: '50', label: '50 ml', volume: 50, price: 50, available: true },
    ],
  },
];

export const featuredProducts = products.filter((product) => product.featured);
