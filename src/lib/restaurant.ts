import pasta from '@/assets/pasta.jpg';
import burrata from '@/assets/restaurant-hero.jpg';
import tiramisu from '@/assets/tiramisu.jpg';
export const dishes = [
 { name: 'Burrata & heirloom tomatoes', description: 'Creamy burrata, seasonal tomatoes, fresh basil & extra virgin olive oil.', price: '₹650', category: 'Starters', image: burrata, tag: 'Fresh & seasonal' },
 { name: 'Slow-cooked ragù pappardelle', description: 'Hand-cut pasta, slow-braised ragù & a generous touch of parmesan.', price: '₹890', category: 'Mains', image: pasta, tag: "Chef’s favourite" },
 { name: 'Classic tiramisu', description: 'Espresso-soaked ladyfingers, silky mascarpone & a dusting of cocoa.', price: '₹450', category: 'Desserts', image: tiramisu, tag: 'A sweet ending' },
];
export function pageHead(title: string, description: string) { return { meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }; }
