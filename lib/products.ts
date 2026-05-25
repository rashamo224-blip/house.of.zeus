export type Product = {
  id: string;
  slug: string;
  name: string;
  story: string;
  price: number;
  compareAt?: number;
  currency: "KWD";
  collection: string;
  pet: "dog" | "cat" | "both";
  image: string;
  tags: string[];
  rating: number;
  reviews: number;
  inventory: number;
  aiReason: string;
  attributes: Record<string, string>;
};

export const collections = [
  { slug: "cooling-essentials", name: "Cooling Essentials", tone: "For Kuwait summer walks and shaded balcony rituals." },
  { slug: "pet-fashion", name: "Pet Fashion", tone: "Soft tailoring, elevated textures, polished everyday moments." },
  { slug: "luxury-beds", name: "Luxury Beds", tone: "Interior-friendly rest pieces for calm, beautiful homes." },
  { slug: "grooming-tech", name: "Grooming Tech", tone: "Quiet tools that make care feel gentle and precise." },
  { slug: "travel-accessories", name: "Travel Accessories", tone: "Airport, chalet, and weekend-ready comfort." },
  { slug: "cat-lifestyle", name: "Cat Lifestyle", tone: "Elegant enrichment for Diva, Blacky, Tiger, and Swaida energy." },
  { slug: "dog-lifestyle", name: "Dog Lifestyle", tone: "Modern essentials inspired by Zeus and Ouzo." }
];

export const products: Product[] = [
  {
    id: "hoz-cool-vest-01",
    slug: "zeus-cooling-walk-vest",
    name: "Zeus Cooling Walk Vest",
    story: "A lightweight cooling vest designed for warm GCC walks without compromising elegance.",
    price: 18.5,
    compareAt: 22,
    currency: "KWD",
    collection: "cooling-essentials",
    pet: "dog",
    image: "/images/house-of-pets.png",
    tags: ["summer", "dog", "cooling"],
    rating: 4.9,
    reviews: 42,
    inventory: 24,
    aiReason: "Recommended for dogs who walk early mornings or evenings during Kuwait summer.",
    attributes: { Fit: "Adjustable", Care: "Hand wash", Delivery: "Kuwait 2-4 days" }
  },
  {
    id: "hoz-bowl-01",
    slug: "ouzo-stoneware-dining-set",
    name: "Ouzo Stoneware Dining Set",
    story: "Low-profile bowls with a sand-glazed finish for pet corners that belong in the room.",
    price: 24,
    currency: "KWD",
    collection: "luxury-beds",
    pet: "both",
    image: "/images/house-of-pets.png",
    tags: ["home", "dining", "minimal"],
    rating: 4.8,
    reviews: 31,
    inventory: 18,
    aiReason: "Ideal when your home aesthetic matters as much as your pet routine.",
    attributes: { Material: "Stoneware", Finish: "Sand glaze", Includes: "Two bowls" }
  },
  {
    id: "hoz-cat-tree-01",
    slug: "diva-atelier-climbing-tower",
    name: "Diva Atelier Climbing Tower",
    story: "A sculptural cat tower with soft boucle surfaces and a small footprint for apartments.",
    price: 68,
    currency: "KWD",
    collection: "cat-lifestyle",
    pet: "cat",
    image: "/images/house-of-pets.png",
    tags: ["cat", "boucle", "apartment"],
    rating: 4.7,
    reviews: 19,
    inventory: 8,
    aiReason: "A strong match for cats who love height, texture, and quiet corners.",
    attributes: { Height: "92 cm", Texture: "Boucle", Assembly: "10 minutes" }
  },
  {
    id: "hoz-groom-01",
    slug: "blacky-quiet-grooming-brush",
    name: "Blacky Quiet Grooming Brush",
    story: "A gentle deshedding tool with a premium grip and low-stress grooming rhythm.",
    price: 12.75,
    currency: "KWD",
    collection: "grooming-tech",
    pet: "both",
    image: "/images/house-of-pets.png",
    tags: ["grooming", "cat", "dog"],
    rating: 4.9,
    reviews: 58,
    inventory: 40,
    aiReason: "Helpful for multi-pet homes managing shedding in upholstered interiors.",
    attributes: { Grip: "Soft touch", Coat: "Short to medium", Warranty: "1 year" }
  },
  {
    id: "hoz-carrier-01",
    slug: "swaida-cabin-travel-carrier",
    name: "Swaida Cabin Travel Carrier",
    story: "A structured neutral carrier built for vet visits, weekend stays, and travel days.",
    price: 39.5,
    currency: "KWD",
    collection: "travel-accessories",
    pet: "both",
    image: "/images/house-of-pets.png",
    tags: ["travel", "carrier", "kuwait"],
    rating: 4.8,
    reviews: 27,
    inventory: 16,
    aiReason: "Recommended for pets who need breathable comfort during short city journeys.",
    attributes: { Size: "Cabin friendly", Panels: "Ventilated", Strap: "Padded" }
  },
  {
    id: "hoz-bandana-01",
    slug: "tiger-silk-touch-bandana",
    name: "Tiger Silk-Touch Bandana",
    story: "A soft neutral accessory that photographs beautifully without feeling costume-like.",
    price: 8.25,
    currency: "KWD",
    collection: "pet-fashion",
    pet: "both",
    image: "/images/house-of-pets.png",
    tags: ["fashion", "gift", "photo"],
    rating: 4.6,
    reviews: 14,
    inventory: 52,
    aiReason: "A low-friction style upgrade for gifting, birthdays, and social content.",
    attributes: { Fabric: "Silk-touch blend", Sizes: "S-L", Closure: "Tie" }
  }
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getCollection(slug: string) {
  return collections.find((collection) => collection.slug === slug);
}

export function productsByCollection(slug: string) {
  return products.filter((product) => product.collection === slug);
}

export function recommendationsFor(product: Product) {
  return products.filter((item) => item.id !== product.id && (item.pet === product.pet || item.pet === "both")).slice(0, 3);
}
