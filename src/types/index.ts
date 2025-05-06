export interface User {
  id: string;
  name: string;
  email: string;
  role: 'buyer' | 'seller' | 'both';
  avatar?: string;
  createdAt: string;
  rating: number;
  verified: boolean;
  totalRatings: number;
}

export interface Laptop {
  id: string;
  title: string;
  brand: string;
  model: string;
  price: number;
  condition: 'new' | 'like-new' | 'good' | 'fair' | 'poor';
  year: number;
  specifications: {
    processor: string;
    ram: string;
    storage: string;
    gpu: string;
    screenSize: string;
    batteryHealth: string;
    operatingSystem: string;
  };
  features: string[];
  description: string;
  images: string[];
  sellerId: string;
  sellerName: string;
  sellerRating: number;
  createdAt: string;
  updatedAt: string;
  status: 'active' | 'sold' | 'pending' | 'rejected';
  verified: boolean;
  featured: boolean;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  laptopId?: string;
  content: string;
  createdAt: string;
  read: boolean;
}

export interface Conversation {
  id: string;
  participants: string[];
  lastMessage: string;
  lastMessageDate: string;
  unreadCount: number;
  laptopId?: string;
  laptopTitle?: string;
}

export interface Review {
  id: string;
  reviewerId: string;
  reviewerName: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export type SortOption = 'newest' | 'oldest' | 'price-low' | 'price-high' | 'rating';

export interface SearchFilters {
  query?: string;
  minPrice?: number;
  maxPrice?: number;
  condition?: string[];
  brand?: string[];
  minRam?: string;
  minStorage?: string;
  processor?: string[];
  verified?: boolean;
  sort?: SortOption;
}