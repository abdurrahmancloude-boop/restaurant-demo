import { MenuItemPlaceholder, SignatureCard, GalleryItem } from '../types';

export const RESTAURANT_INFO = {
  name: 'Roasters Coffee House & Grill',
  tagline: 'COFFEE HOUSE & GRILL',
  city: 'ISLAMABAD',
  area: 'F-6 MARKAZ',
  fullAddress: '1 Agha Khan Rd, F-6 Markaz, F-6, Islamabad, Pakistan',
  phoneDisplay: '0314-5209300',
  phoneTel: 'tel:+923145209300',
  facebookUrl: 'https://www.facebook.com/RoastersPakistan/',
  facebookFollowers: '23K followers',
  instagramUrl: 'https://instagram.com/roasterspakistan?utm_medium=copy_link',
  instagramFollowers: '30.5K followers',
  infoDate: '1 July 2026',
};

// Carefully selected, distinct, high-res Unsplash imagery with NO DUPLICATION across any section
export const IMAGES = {
  // Hero Background (Layer 2) - rich dark warm artisan coffee & dining atmosphere
  heroBg: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2000&q=85',
  
  // Hero reveal video alternative / poster (restaurant coffee brew / sizzle)
  heroVideo: 'https://assets.mixkit.co/videos/preview/mixkit-barista-making-a-latte-art-coffee-41004-large.mp4',
  heroVideoPoster: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1800&q=80',

  // Section 2: Experience
  experience: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1400&q=80',

  // Section 3: Menu Previews (4 distinct images)
  menuCoffee: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
  menuGrill: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
  menuBreakfast: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=900&q=80',
  menuDessert: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80',

  // Section 4: Signature Selection (4 distinct images)
  signatureCoffee: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=900&q=80',
  signatureGrill: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80',
  signatureHouse: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80',
  signatureFeatured: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=80',

  // Section 5: About
  about: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',

  // Section 6: Dining Experience 3 Blocks (Coffee, Grill, Dining)
  blockCoffee: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=900&q=80',
  blockGrill: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=900&q=80',
  blockDining: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80',

  // Section 7: Cinematic Image Break
  cinematicBreak: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1800&q=85',

  // Section 8: Gallery (8 completely unique photos)
  gallery1: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80', // Coffee Pour
  gallery2: 'https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?auto=format&fit=crop&w=900&q=80', // Artisan Grill
  gallery3: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80', // Restaurant Interior
  gallery4: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80', // Dining Table Ambiance
  gallery5: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=900&q=80', // Espresso Bar
  gallery6: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80', // Gourmet Food Close-up
  gallery7: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80', // Evening Dining Table
  gallery8: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80', // Exterior / Entrance

  // Section 11: Final CTA
  finalCta: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=1600&q=85',
};

export const MENU_CATEGORIES = [
  'Coffee',
  'Grill',
  'Breakfast',
  'Main Dishes',
  'Desserts',
  'Drinks',
] as const;

export const PLACEHOLDER_MENU_ITEMS: MenuItemPlaceholder[] = [
  {
    id: 'c1',
    category: 'Coffee',
    name: 'Featured Item',
    description: 'Add Description',
    price: 'Add Price',
    tag: 'Signature Roast',
  },
  {
    id: 'c2',
    category: 'Coffee',
    name: 'Featured Item',
    description: 'Add Description',
    price: 'Add Price',
    tag: 'House Blend',
  },
  {
    id: 'c3',
    category: 'Coffee',
    name: 'Featured Item',
    description: 'Add Description',
    price: 'Add Price',
  },
  {
    id: 'c4',
    category: 'Coffee',
    name: 'Featured Item',
    description: 'Add Description',
    price: 'Add Price',
  },
  {
    id: 'g1',
    category: 'Grill',
    name: 'Featured Item',
    description: 'Add Description',
    price: 'Add Price',
    tag: 'Chef Choice',
  },
  {
    id: 'g2',
    category: 'Grill',
    name: 'Featured Item',
    description: 'Add Description',
    price: 'Add Price',
  },
  {
    id: 'g3',
    category: 'Grill',
    name: 'Featured Item',
    description: 'Add Description',
    price: 'Add Price',
  },
  {
    id: 'g4',
    category: 'Grill',
    name: 'Featured Item',
    description: 'Add Description',
    price: 'Add Price',
  },
  {
    id: 'b1',
    category: 'Breakfast',
    name: 'Featured Item',
    description: 'Add Description',
    price: 'Add Price',
  },
  {
    id: 'b2',
    category: 'Breakfast',
    name: 'Featured Item',
    description: 'Add Description',
    price: 'Add Price',
  },
  {
    id: 'm1',
    category: 'Main Dishes',
    name: 'Featured Item',
    description: 'Add Description',
    price: 'Add Price',
  },
  {
    id: 'm2',
    category: 'Main Dishes',
    name: 'Featured Item',
    description: 'Add Description',
    price: 'Add Price',
  },
  {
    id: 'd1',
    category: 'Desserts',
    name: 'Featured Item',
    description: 'Add Description',
    price: 'Add Price',
  },
  {
    id: 'd2',
    category: 'Desserts',
    name: 'Featured Item',
    description: 'Add Description',
    price: 'Add Price',
  },
  {
    id: 'dr1',
    category: 'Drinks',
    name: 'Featured Item',
    description: 'Add Description',
    price: 'Add Price',
  },
  {
    id: 'dr2',
    category: 'Drinks',
    name: 'Featured Item',
    description: 'Add Description',
    price: 'Add Price',
  },
];

export const SIGNATURE_ITEMS: SignatureCard[] = [
  {
    id: 'sig-1',
    title: 'Coffee Selection',
    subtitle: 'COFFEE HOUSE',
    description: 'Add Description',
    price: 'Add Price',
    image: IMAGES.signatureCoffee,
  },
  {
    id: 'sig-2',
    title: 'Grill Selection',
    subtitle: 'CHARCOAL & SEAR',
    description: 'Add Description',
    price: 'Add Price',
    image: IMAGES.signatureGrill,
  },
  {
    id: 'sig-3',
    title: 'House Favorite',
    subtitle: 'ROASTERS SPECIALTY',
    description: 'Add Description',
    price: 'Add Price',
    image: IMAGES.signatureHouse,
  },
  {
    id: 'sig-4',
    title: 'Featured Dish',
    subtitle: 'GOURMET KITCHEN',
    description: 'Add Description',
    price: 'Add Price',
    image: IMAGES.signatureFeatured,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Artisanal Coffee',
    category: 'Coffee',
    image: IMAGES.gallery1,
    aspect: 'aspect-[4/5]',
  },
  {
    id: 'g-2',
    title: 'Prime Grill',
    category: 'Grill',
    image: IMAGES.gallery2,
    aspect: 'aspect-[1/1]',
  },
  {
    id: 'g-3',
    title: 'Dining Ambiance',
    category: 'Interior',
    image: IMAGES.gallery3,
    aspect: 'aspect-[3/4]',
  },
  {
    id: 'g-4',
    title: 'Table Setting',
    category: 'Dining',
    image: IMAGES.gallery4,
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'g-5',
    title: 'Espresso Craft',
    category: 'Coffee',
    image: IMAGES.gallery5,
    aspect: 'aspect-[3/4]',
  },
  {
    id: 'g-6',
    title: 'Plated Delicacy',
    category: 'Food',
    image: IMAGES.gallery6,
    aspect: 'aspect-[4/5]',
  },
  {
    id: 'g-7',
    title: 'Evening Atmosphere',
    category: 'Atmosphere',
    image: IMAGES.gallery7,
    aspect: 'aspect-[1/1]',
  },
  {
    id: 'g-8',
    title: 'Restaurant Space',
    category: 'Interior',
    image: IMAGES.gallery8,
    aspect: 'aspect-[4/3]',
  },
];
