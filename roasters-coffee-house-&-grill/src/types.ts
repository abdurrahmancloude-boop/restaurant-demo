export interface MenuItemPlaceholder {
  id: string;
  name: string;
  category: 'Coffee' | 'Grill' | 'Breakfast' | 'Main Dishes' | 'Desserts' | 'Drinks';
  description: string;
  price: string;
  tag?: string;
  image?: string;
}

export interface SignatureCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Coffee' | 'Food' | 'Grill' | 'Interior' | 'Dining' | 'Atmosphere';
  image: string;
  aspect: string;
}

export interface ChatMessage {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
  timestamp: string;
  quickActions?: string[];
}
