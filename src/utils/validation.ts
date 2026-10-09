export function formatPrice(value: number) {
  return new Intl.NumberFormat('fr-MA', {
    style: 'currency',
    currency: 'MAD',
    maximumFractionDigits: 0,
  })
    .format(value)
    .replace('MAD', 'DH');
}

export function toSlug(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function computeDeliveryFee(city: string) {
  const fees: Record<string, number> = {
    casablanca: 25,
    rabat: 20,
    marrakech: 30,
    fes: 25,
    tangier: 30,
    agadir: 35,
    default: 35,
  };

  const normalized = city.trim().toLowerCase();
  return fees[normalized] ?? fees.default;
}

export function buildWhatsAppMessage(order: {
  name: string;
  phone: string;
  city: string;
  address: string;
  notes: string;
  products: { name: string; size: string; quantity: number; price: number }[];
  subtotal: number;
  deliveryFee: number;
  total: number;
}) {
  const lines = [
    'Bonjour AbdePerfumes,',
    '',
    'Nouvelle commande :',
    `Nom : ${order.name}`,
    `Téléphone : ${order.phone}`,
    `Ville : ${order.city}`,
    `Adresse : ${order.address}`,
    `Notes : ${order.notes || 'Aucune'}`,
    '',
    'Produits :',
  ];

  order.products.forEach((item) => {
    lines.push(
      `- ${item.name} (${item.size}) x${item.quantity} - ${formatPrice(item.price * item.quantity)}`,
    );
  });

  lines.push('', `Sous-total : ${formatPrice(order.subtotal)}`);
  lines.push(`Livraison : ${formatPrice(order.deliveryFee)}`);
  lines.push(`Total : ${formatPrice(order.total)}`);
  lines.push('', 'Merci.');

  return lines.join('\n');
}
