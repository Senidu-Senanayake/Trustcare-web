export interface User {
  id: string;
  email: string;
  name: string;
  role: 'customer' | 'moderator' | 'warehouse' | 'admin';
  avatar?: string;
  phone?: string;
  address?: Address;
  preferences?: UserPreferences;
  createdAt: Date;
  lastLoginAt?: Date;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface UserPreferences {
  notifications: boolean;
  marketing: boolean;
  theme: 'light' | 'dark';
}

export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  category: ProductCategory;
  subcategory: string;
  images: string[];
  inStock: boolean;
  stockQuantity: number;
  lowStockThreshold: number;
  nutritionFacts?: NutritionFacts;
  ingredients: string[];
  allergens: string[];
  certifications: string[];
  rating: number;
  reviewCount: number;
  tags: string[];
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface NutritionFacts {
  servingSize: string;
  calories: number;
  fat: number;
  saturatedFat: number;
  cholesterol: number;
  sodium: number;
  carbohydrates: number;
  fiber: number;
  sugars: number;
  protein: number;
  vitamins: Record<string, number>;
}

export interface CartItem {
  productId: string;
  quantity: number;
  addedAt: Date;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  total: number;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  shippingAddress: Address;
  billingAddress: Address;
  couponCode?: string;
  trackingNumber?: string;
  estimatedDelivery?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  productId: string;
  productName: string;
  price: number;
  quantity: number;
  subtotal: number;
}

export type OrderStatus = 'pending' | 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded';

export interface Review {
  id: string;
  userId: string;
  productId: string;
  rating: number;
  title: string;
  comment: string;
  verified: boolean;
  helpful: number;
  createdAt: Date;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  receiverId?: string;
  message: string;
  timestamp: Date;
  type: 'user' | 'moderator' | 'system';
  status: 'sent' | 'delivered' | 'read';
}

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  read: boolean;
  actionUrl?: string;
  createdAt: Date;
}

export type NotificationType = 
  | 'order_confirmed' 
  | 'order_shipped' 
  | 'order_delivered' 
  | 'stock_alert' 
  | 'price_drop' 
  | 'promotion' 
  | 'review_reminder'
  | 'system';

export interface Coupon {
  id: string;
  code: string;
  description: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  minimumAmount: number;
  maxUses: number;
  usedCount: number;
  validFrom: Date;
  validUntil: Date;
  active: boolean;
}

export interface AnalyticsData {
  revenue: {
    total: number;
    monthly: Array<{ month: string; revenue: number }>;
    daily: Array<{ date: string; revenue: number }>;
  };
  orders: {
    total: number;
    pending: number;
    completed: number;
    cancelled: number;
  };
  customers: {
    total: number;
    new: number;
    returning: number;
  };
  products: {
    total: number;
    lowStock: number;
    outOfStock: number;
    topSelling: Array<{ productId: string; name: string; sales: number }>;
  };
}